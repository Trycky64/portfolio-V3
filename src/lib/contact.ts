export const CONTACT_LIMITS = {
  name: { min: 1, max: 200 },
  email: { max: 200 },
  message: { min: 10, max: 5000 },
} as const;

// Hidden field: real visitors never fill it in, bots filling every input do.
export const HONEYPOT_FIELD = "website";

// Single Next.js instance on a Raspberry Pi: an in-memory limit is enough,
// no Redis/external store needed for a personal-portfolio contact form.
export const RATE_LIMIT = {
  windowMs: 10 * 60 * 1000,
  maxRequests: 5,
} as const;

export const MAX_BODY_BYTES = 16 * 1024;
