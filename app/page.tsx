
import TaskTable from "./ui/tasktable";
import { CreateTask } from "./ui/buttons";

export default async function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col min-h-screen w-full">
        <div className="my-4 flex justify-end">
          <CreateTask />
        </div>
        <TaskTable />
      </main>
    </div>
  );
}
