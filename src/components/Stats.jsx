import { CheckCircle2, Clock3, ListTodo, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function Stats({
  totalTasks,
  completedTasks,
  pendingTasks,
}) {
  const cards = [
    {
      title: "Today's Tasks",
      value: totalTasks,
      icon: <ListTodo size={28} />,
      color: "from-violet-600 to-indigo-500",
    },
    {
      title: "Completed",
      value: completedTasks,
      icon: <CheckCircle2 size={28} />,
      color: "from-emerald-500 to-green-400",
    },
    {
      title: "Pending",
      value: pendingTasks,
      icon: <Clock3 size={28} />,
      color: "from-orange-500 to-yellow-400",
    },
    {
      title: "AI Status",
      value: "Ready",
      icon: <Sparkles size={28} />,
      color: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section className="mx-auto mt-16 grid max-w-7xl gap-6 px-8 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <div
            className={`mb-5 inline-flex rounded-2xl bg-gradient-to-r ${card.color} p-4`}
          >
            {card.icon}
          </div>

          <h3 className="text-gray-400">{card.title}</h3>

          <p className="mt-2 text-4xl font-bold">{card.value}</p>
        </motion.div>
      ))}
    </section>
  );
}

export default Stats;