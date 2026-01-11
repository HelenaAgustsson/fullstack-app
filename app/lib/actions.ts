'use server';
 
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import postgres from 'postgres';
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });
 
const FormSchema = z.object({
  personid: z.coerce.number(),
  description: z.string(),
});
 
const CreateInvoice = FormSchema;
 
export async function createInvoice(formData: FormData) {
  const { personid, description  } = CreateInvoice.parse({
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