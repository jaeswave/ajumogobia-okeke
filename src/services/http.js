/**
 * Minimal JSON POST helper shared by the form services.
 * Returns a discriminated result instead of throwing so UI code stays simple:
 *   { status: 'sent' } | { status: 'not-configured' } | { status: 'error', message }
 */
export async function postJson(endpoint, payload, { timeoutMs = 15000 } = {}) {
  if (!endpoint) return { status: 'not-configured' };
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    if (!res.ok) return { status: 'error', message: `The server responded with ${res.status}.` };
    return { status: 'sent' };
  } catch (err) {
    return {
      status: 'error',
      message: err.name === 'AbortError' ? 'The request timed out.' : 'We could not reach the server.',
    };
  } finally {
    clearTimeout(timer);
  }
}
