import { Task, Person } from "../lib/definitions";

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
    return (
        <tr key={task.id} className="w-full border-b-5 border-solid border-gray-50 py-3 text-sm last-of-type:border-none">
            <td className="whitespace-nowrap py-3 pl-6 pr-3">{task.description}</td>
            <td className="whitespace-nowrap py-3 pl-6 pr-3">{findPerson(people, task)}</td>
            <td className="whitespace-nowrap py-3 pl-6 pr-3">{task.done ? 'completed' : 'to do'}</td>
        </tr>
    )
}