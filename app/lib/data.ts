import postgres from "postgres";
import { Task, Person } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchTasks() {
    try {
        const data = await sql<Task[]>`
        SELECT Tasks,id, Tasks.description, Tasks.done, Tasks.assigned_to
        FROM Tasks`;
        return data;
    }
    catch(error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch tasks.');
    }
}

export async function fetchPeople() {
    try {
        const data = await sql<Person[]>`
        SELECT People.personid, People.name
        FROM People`;
        return data;
    }
    catch(error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch people.');
    }
}