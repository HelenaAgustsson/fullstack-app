import Header from "./ui/header";
import TaskTable from "./ui/tasktable";

export default async function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col min-h-screen w-full">
        <Header />
        <div className="w-4/5 mx-auto mt-20">
          <TaskTable />
        </div>
      </main>
    </div>
  );
}
