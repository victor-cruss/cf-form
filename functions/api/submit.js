/**
 * POST /api/submit
 */
export async function onRequestPost({ request }) {
	// Create a prepared statement with our query
	const ps = context.env.demo-cf-database.prepare('SELECT * from users');
	const data = await ps.first();
  
	return Response.json(data);
  }