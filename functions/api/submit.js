/**
 * POST /api/submit
 */
export async function onRequestPost({ request }) {
	try {
		let input = await request.formData();
		// Create a prepared statement with our query
	const ps = context.env.cf-demo-database.prepare('SELECT * from users');
	const data = await ps.first();
  
	return Response.json(data);
}