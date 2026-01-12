'use server';
 
import { boolean, z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import postgres from 'postgres';
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });
 
const FormSchema = z.object({
  personid: z.coerce.number(),
  description: z.string()
});
 
const CreateTask = FormSchema;
 
export async function createTask(formData: FormData) {
  const { personid, description  } = CreateTask.parse({
    personid: formData.get('personid'),
    description: formData.get('description'),
  });

  await sql`
    INSERT INTO Tasks (description, assigned_to, done)
    VALUES (${description}, ${personid}, false)
  `;
  revalidatePath('/');
  redirect('/');
}

const FormSchema2 = z.object({
  personid: z.coerce.number(),
  description: z.string(),
  done: z.string()
});
 
const UpdateTask = FormSchema2;

export async function updateTask(id:number, formData:FormData) {
  const { personid, description, done  } = UpdateTask.parse({
    personid: formData.get('personid'),
    description: formData.get('description'),
    done: formData.get('status'),
  });

  const isDone = done === 'done' ? true:false;

  await sql`
    UPDATE Tasks
    SET assigned_to = ${personid}, description = ${description}, done = ${isDone}
    WHERE id = ${id}
  `;
 
  revalidatePath('/');
  redirect('/');
   
}