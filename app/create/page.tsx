import Form from '../ui/create-form';

import { fetchPeople } from '@/app/lib/data';

export default async function Page() {
    const persons = await fetchPeople();

    return (
        <main>
            <Form persons={persons} />
        </main>
    );
}