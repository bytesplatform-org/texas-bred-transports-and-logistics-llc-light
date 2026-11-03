export async function POST(request: Request) {
  let quote: unknown;

  try {
    quote = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // TODO: replace this stub with the real integration (email to dispatch, CRM,
  // etc.), plus server-side validation and spam protection. Until then, quote
  // requests only reach the server log and nobody is notified.
  console.log("[quote] request received", quote);

  return Response.json({ ok: true });
}
