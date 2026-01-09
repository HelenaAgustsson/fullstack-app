import Header from "./ui/header";
import TaskTable from "./ui/tasktable";

export default async function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col min-h-screen w-full">
        <Header />
        <div className="w-4/5 mx-auto">
          <div className="my-8"><h2>Tasks</h2></div>
          <TaskTable />
        </div>
      </main>
    </div>
  );
}
