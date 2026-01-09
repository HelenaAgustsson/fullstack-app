import { fetchTasks } from "./lib/data";
import TaskTable from "./ui/tasktable";

export default async function Home() {
  const tasks = await fetchTasks()
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col min-h-screen w-full">
        <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
          <h1 className="text-white font-bold">TaskBunny</h1>
        </div>
        <div className="w-4/5 mx-auto">
          <div className="my-8"><h2>Tasks</h2></div>
          <TaskTable />
        </div>
      </main>
    </div>
  );
}
