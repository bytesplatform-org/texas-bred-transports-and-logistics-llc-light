"use client";

import { ChevronDown } from "lucide-react";
import { useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { quoteForm, services } from "@/content/home";
import { buttonClass } from "./ui";

type FieldName = keyof typeof quoteForm.labels;
type RequiredField = keyof typeof quoteForm.errors;
type FieldErrors = Partial<Record<RequiredField, string>>;
type Status = "idle" | "submitting" | "success" | "error";

// Top-to-bottom order, so focus lands on the first invalid field.
const requiredFields: RequiredField[] = ["name", "email", "phone", "service", "pickup", "delivery"];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isFieldValid(field: RequiredField, value: string) {
  const trimmed = value.trim();
  if (field === "email") return EMAIL_PATTERN.test(trimmed);
  if (field === "phone") return trimmed.replace(/\D/g, "").length >= 10;
  return trimmed.length > 0;
}

const controlClass =
  "w-full rounded-ui border border-slate bg-white px-3 text-base text-ink transition-colors focus:border-navy aria-invalid:border-accent";

export function QuoteForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (event: ChangeEvent<HTMLFormElement>) => {
    const name = event.target.name as RequiredField;
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form)) as Record<FieldName, string>;

    const invalid = requiredFields.filter((field) => !isFieldValid(field, values[field] ?? ""));
    if (invalid.length > 0) {
      setErrors(Object.fromEntries(invalid.map((field) => [field, quoteForm.errors[field]])));
      setStatus("idle");
      (form.elements.namedItem(invalid[0]) as HTMLElement | null)?.focus();
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error(`Quote request failed: ${response.status}`);
      setStatus("success");
      formRef.current?.reset();
    } catch {
      setStatus("error");
    }
  };

  const hasErrors = Object.values(errors).some(Boolean);

  const fieldProps = (name: FieldName) => {
    const error = errors[name as RequiredField];
    return {
      id: `quote-${name}`,
      name,
      required: requiredFields.includes(name as RequiredField),
      "aria-invalid": error ? true : undefined,
      "aria-describedby": error ? `quote-${name}-error` : undefined,
    };
  };

  return (
    <form
      ref={formRef}
      noValidate
      aria-label={quoteForm.label}
      onSubmit={handleSubmit}
      onChange={handleChange}
      className="rounded-ui border border-line p-6 sm:p-8"
    >
      <p className="text-sm text-slate">{quoteForm.requiredNote}</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field name="name" error={errors.name}>
          <input {...fieldProps("name")} type="text" autoComplete="name" className={`${controlClass} h-12`} />
        </Field>
        <Field name="company">
          <input
            {...fieldProps("company")}
            type="text"
            autoComplete="organization"
            className={`${controlClass} h-12`}
          />
        </Field>
        <Field name="email" error={errors.email}>
          <input {...fieldProps("email")} type="email" autoComplete="email" className={`${controlClass} h-12`} />
        </Field>
        <Field name="phone" error={errors.phone}>
          <input {...fieldProps("phone")} type="tel" autoComplete="tel" className={`${controlClass} h-12`} />
        </Field>
        <Field name="service" error={errors.service} className="sm:col-span-2">
          <div className="relative">
            <select {...fieldProps("service")} defaultValue="" className={`${controlClass} h-12 appearance-none pr-10`}>
              <option value="" disabled>
                {quoteForm.serviceOptionPlaceholder}
              </option>
              {services.items.map((service) => (
                <option key={service.title} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 right-3 size-5 -translate-y-1/2 text-navy"
              strokeWidth={1.5}
            />
          </div>
        </Field>
        <Field name="pickup" error={errors.pickup}>
          <input {...fieldProps("pickup")} type="text" className={`${controlClass} h-12`} />
        </Field>
        <Field name="delivery" error={errors.delivery}>
          <input {...fieldProps("delivery")} type="text" className={`${controlClass} h-12`} />
        </Field>
        <Field name="message" className="sm:col-span-2">
          <textarea {...fieldProps("message")} rows={4} className={`${controlClass} block py-3`} />
        </Field>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className={`${buttonClass} mt-6 w-full cursor-pointer border-accent bg-accent text-white hover:border-accent-dark hover:bg-accent-dark disabled:cursor-wait disabled:opacity-70`}
      >
        {status === "submitting" ? quoteForm.submitting : quoteForm.submit}
      </button>

      {/* Stays mounted so screen readers announce changes to its content. */}
      <div aria-live="polite" className="text-sm">
        {hasErrors ? <p className="mt-4 font-medium text-accent">{quoteForm.summaryError}</p> : null}
        {status === "success" ? <p className="mt-4 font-medium text-navy">{quoteForm.success}</p> : null}
        {status === "error" ? <p className="mt-4 font-medium text-accent">{quoteForm.failure}</p> : null}
      </div>
    </form>
  );
}

function Field({
  name,
  error,
  className = "",
  children,
}: {
  name: FieldName;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  const isRequired = requiredFields.includes(name as RequiredField);
  return (
    <div className={className}>
      <label htmlFor={`quote-${name}`} className="mb-1.5 block text-sm font-medium text-navy">
        {quoteForm.labels[name]}
        {isRequired ? <span aria-hidden="true"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`quote-${name}-error`} className="mt-1.5 text-sm text-accent">
          {error}
        </p>
      ) : null}
    </div>
  );
}
