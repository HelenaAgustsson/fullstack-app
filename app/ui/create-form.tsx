
import Link from 'next/link';
import { Button } from './button';
import { createTask } from '@/app/lib/actions';
import { Person } from '../lib/definitions';

export default function Form({ persons }: { persons: Person[] }) {
    return (
        <form action={createTask}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                <div className="mb-4">
                    <label htmlFor="person" className="mb-2 block text-sm font-medium">
                        Choose person
                    </label>
                    <div className="relative">
                        <select
                            id="personid"
                            name="personid"
                            className="border-b-5 border-solid border-gray-50 peer block w-full cursor-pointer rounded-md py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue="0"
                        >
                            <option value="" disabled>
                                Select a person
                            </option>
                            {persons.map((person) => (
                                <option key={person.personid} value={person.personid}>
                                    {person.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="mb-2 block text-sm font-medium">
                        Enter a task
                    </label>
                    <div className="relative">
                        <input
                            id="description"
                            name="description"
                            type="string"
                            placeholder="Enter task"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        />
                    </div>
                </div>

                <Button type="submit">Create Task</Button>
            </div>
        </form>
    );
}