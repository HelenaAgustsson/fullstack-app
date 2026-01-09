import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function listTasks() {
	const data = await sql`
    SELECT Tasks.description
    FROM Tasks;
  `;

	return data;
}

export async function GET() {
  try {
  	return Response.json(await listTasks());
  } catch (error) {
  	return Response.json({ error }, { status: 500 });
  }
}