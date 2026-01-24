export async function GET({ site }: { site?: URL }) {
	const base = (site ?? new URL('https://talentcompany-site.vercel.app')).toString().replace(/\/$/, '');
	const body = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${base}/sitemap.xml
`;

	return new Response(body, {
		headers: {
			'content-type': 'text/plain; charset=utf-8',
		},
	});
}

