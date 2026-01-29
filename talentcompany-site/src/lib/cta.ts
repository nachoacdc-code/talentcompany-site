export const BOOKING_URL =
	import.meta.env.PUBLIC_BOOKING_URL ??
	import.meta.env.PUBLIC_CALENDLY_URL ??
	'/#contact';

export function isExternalUrl(url: string) {
	return /^https?:\/\//i.test(url);
}

export function isCalendlyUrl(url: string) {
	return /calendly\.com/i.test(url);
}

export function getFormspreeAction() {
	const raw = import.meta.env.PUBLIC_FORMSPREE_ACTION ?? '';
	// Treat placeholder default as "not configured"
	if (!raw) return '';
	if (raw.includes('yourFormId')) return '';
	return raw;
}

