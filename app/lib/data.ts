import postgres from "postgres";
import { Task } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchTasks() {
    try {
        const data = await sql<Task[]>`
        SELECT Tasks.description
        FROM Tasks`;
        return data;
    }
    catch(error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch tasks.');
    }
}   