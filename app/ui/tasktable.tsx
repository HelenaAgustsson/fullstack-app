
import { fetchTasks } from "../lib/data"

export default async function TaskTable() {
    const tasks = await fetchTasks()
    return (
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
            <table className="hidden min-w-full text-gray md:table">
                <thead className="rounded-lg text-left text-sm font-normal">
                    <tr>
                        <th className="px-4 py-5 font-medium sm:pl-6">Description</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {tasks ?
                        tasks.map((task, index) => {
                            return <tr key={index} className="w-full border-b-5 border-solid border-gray-50 py-3 text-sm last-of-type:border-none">
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">{task.description}</td></tr>
                        }) : null
                    }
                </tbody>
            </table>
        </div>
    )
}