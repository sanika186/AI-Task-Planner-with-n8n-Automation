import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";

function Home() {
  const [totalTasks, setTotalTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [pendingTasks, setPendingTasks] = useState(0);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0B1120] text-white">

      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl"></div>

      <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="relative z-10">
        <Navbar />

        <Hero
          setTotalTasks={setTotalTasks}
          setCompletedTasks={setCompletedTasks}
          setPendingTasks={setPendingTasks}
        />

        <Stats
          totalTasks={totalTasks}
          completedTasks={completedTasks}
          pendingTasks={pendingTasks}
        />
      </div>
    </div>
  );
}

export default Home;