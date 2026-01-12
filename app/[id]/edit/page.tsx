import Form from '../../ui/edit-form';
import { fetchPeople, fetchTaskById } from '@/app/lib/data';

export default async function Page(props: { params: Promise<{ id: number }> }) {
    const params = await props.params;
    const id = params.id;
    const persons = await fetchPeople();
    const task = await fetchTaskById(id)

    return (
        <main>
            <Form task={task} persons={persons} />
        </main>
    );
}