
import Link from 'next/link';
import { Button } from './button';
import { updateTask } from '../lib/actions';
import { Person, Task } from '../lib/definitions';
import {
    CheckIcon,
    ClockIcon,
    UserCircleIcon,
    ClipboardIcon
} from '@heroicons/react/24/outline';

export default function Form({ task, persons }: { task: Task, persons: Person[] }) {
    const updateInvoiceWithId = updateTask.bind(null, task.id);


    return (
        <form action={updateInvoiceWithId}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                <div className="mb-4">
                    <label htmlFor="personid" className="mb-2 block text-sm font-medium">
                        Assign to:
                    </label>
                    <div className="relative">
                        <select
                            id="personid"
                            name="personid"
                            className="bg-white border border-solid border-gray-200 peer block w-full cursor-pointer rounded-md py-2 pl-10 text-sm placeholder:text-gray-500"
                            defaultValue={task.assigned_to}
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
                        <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
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
                            className="bg-white peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm placeholder:text-gray-500"
                            defaultValue={task.description}
                        />
                        <ClipboardIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                </div>

                <fieldset>
                    <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
                        <div className="flex gap-4">
                            <div className="flex items-center">
                                <input
                                    id="todo"
                                    name="status"
                                    type="radio"
                                    value="todo"
                                    defaultChecked={true}
                                    className="outline-none h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                />
                                <label
                                    htmlFor="todo"
                                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                                >
                                    To do <ClockIcon className="h-4 w-4" />
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="done"
                                    name="status"
                                    type="radio"
                                    value="done"
                                    defaultChecked={false}
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                />
                                <label
                                    htmlFor="done"
                                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                                >
                                    Done <CheckIcon className="h-4 w-4" />
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>

                <div className='mt-4'>
                    <Button type="submit">Update Task</Button>
                </div>

            </div>
        </form>
    );
}

/*

 
*/