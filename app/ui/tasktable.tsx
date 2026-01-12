
import { fetchTasks, fetchPeople } from "../lib/data"
import TaskRow from "./taskrow"

export default async function TaskTable() {
    const tasks = await fetchTasks()
    const people = await fetchPeople()

    return (
        <div className="rounded-lg bg-gray-50 p-2">
            <table className="min-w-full text-gray table-auto">
                <thead className="rounded-lg text-left text-sm font-normal">
                    <tr>
                        <th scope="col" className="px-2 md:px-4 py-5 font-bold">Task</th>
                        <th scope="col" className="px-2 md:px-4 py-5 font-bold">Assigned to</th>
                        <th scope="col" className="px-2 md:px-4 py-5 font-bold">Status</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {tasks ?
                        tasks.map((task, index) => {
                            return <TaskRow task={task} people={people} key={index} />
                        }) : null
                    }
                </tbody>
            </table>
        </div>
    )
}