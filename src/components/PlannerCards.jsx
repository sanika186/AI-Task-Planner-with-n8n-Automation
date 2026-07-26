import { Clock3, Circle } from "lucide-react";

const planner = [
  {
    time: "6:00 AM - 7:00 AM",
    task: "Morning Routine",
    category: "Health",
    priority: "Medium",
  },
  {
    time: "7:00 AM - 8:00 AM",
    task: "Exercise",
    category: "Fitness",
    priority: "High",
  },
  {
    time: "8:00 AM - 9:00 AM",
    task: "Breakfast",
    category: "Health",
    priority: "Medium",
  },
  {
    time: "9:00 AM - 12:00 PM",
    task: "Study",
    category: "Learning",
    priority: "High",
  },
  {
    time: "12:00 PM - 1:00 PM",
    task: "Lunch",
    category: "Break",
    priority: "Medium",
  },
  {
    time: "1:00 PM - 5:00 PM",
    task: "Project Work",
    category: "Work",
    priority: "High",
  },
  {
    time: "5:00 PM - 6:00 PM",
    task: "Evening Walk",
    category: "Fitness",
    priority: "Medium",
  },
  {
    time: "6:00 PM - 7:00 PM",
    task: "Personal Time",
    category: "Personal",
    priority: "Low",
  },
  {
    time: "7:00 PM - 8:00 PM",
    task: "Dinner",
    category: "Health",
    priority: "Medium",
  },
  {
    time: "8:00 PM - 10:00 PM",
    task: "Reading & Relaxation",
    category: "Personal",
    priority: "Low",
  },
];

function PlannerCards() {
  return (
    <section className="mx-auto mt-20 max-w-7xl px-8 pb-20">
      <h2 className="mb-8 text-3xl font-bold">Today's Planner</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {planner.map((item, index) => (
          <div
            key={index}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-violet-500 hover:shadow-[0_0_35px_rgba(139,92,246,0.35)]"
>
            <div className="mb-5 flex items-center justify-between">
              <Clock3 className="text-violet-400" />
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  item.priority === "High"
                    ? "bg-red-500/20 text-red-400"
                    : item.priority === "Medium"
                    ? "bg-yellow-500/20 text-yellow-300"
                    : "bg-green-500/20 text-green-400"
  }`}
>
  {item.priority}
</span>
            </div>

            <h3 className="text-2xl font-semibold">{item.task}</h3>

            <p className="mt-2 text-gray-400">{item.time}</p>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm text-cyan-300">
                {item.category}
              </span>

              <span className="flex items-center gap-2 text-green-400">
                <Circle size={10} fill="currentColor" />
                Not Started
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PlannerCards;