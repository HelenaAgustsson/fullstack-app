import { fetchTasks } from "./lib/data";

export default async function Home() {
  const tasks = await fetchTasks()
  return (
    <div className="flex min-h-screen">
      <main className="flex min-h-screen w-full">
        <ul>
          {tasks ?
            tasks.map((task, index) => {
              return <li key={index}>{task.description}</li>
            }) : null
          }
        </ul>
      </main>
    </div>
  );
}
