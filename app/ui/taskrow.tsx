import Image from "next/image";
import { Task, Person } from "../lib/definitions";
import { EditTask } from "./buttons";
import TaskStatus from "./status";

interface TaskRowProps {
    task: Task,
    people: Person[]
}

const findPerson = (people: Person[], task: Task): string => {
    if (people) {
        const assignedPerson = people.find((person) => person.personid === task.assigned_to);
        return assignedPerson ? assignedPerson.name : '';
    } else {
        return 'Not found'
    }
}

export default function TaskRow({ task, people }: TaskRowProps) {
    const assignedTo = findPerson(people, task)
    return (
        <tr key={task.id} className="w-full border-b-5 border-solid border-gray-50 py-3 text-sm last-of-type:border-none">
            <td className="whitespace-nowrap py-3 px-2 md:pl-6 md:pr-3">{String(task.description).charAt(0).toUpperCase() + String(task.description).slice(1)}</td>
            <td className="whitespace-nowrap py-3 px-2 md:pl-6 md:pr-3">
                <div className="flex gap-2">
                    <Image
                        src={`/${assignedTo}.png`}
                        className="rounded-full"
                        alt={`${assignedTo}'s profile picture`}
                        width={28}
                        height={28}
                    />
                    <div className="flex flex-col justify-center">{assignedTo}</div>
                </div>
            </td>
            <td className="whitespace-nowrap py-3 px-2 md:pl-6 md:pr-3"><TaskStatus status={task.done} /></td>
            <td className="whitespace-nowrap py-3 px-2 md:pl-6 md:pr-3"><EditTask id={task.id} /></td>
        </tr>
    )
}