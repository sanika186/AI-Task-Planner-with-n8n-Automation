import { useState } from "react";
import { jsPDF } from "jspdf";

function Hero({
  totalTasks,
  setTotalTasks,
  setCompletedTasks,
  setPendingTasks,
}) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [planner, setPlanner] = useState("");
  const [tasks, setTasks] = useState([]);

  const generatePlanner = async () => {
    if (!prompt.trim()) {
      alert("Please enter your planner request.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/webhook/planner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      const text = await response.text();

      console.log("Status:", response.status);
      console.log("Response:", text);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      if (!text.trim()) {
        throw new Error("Empty response from n8n");
      }

      const data = JSON.parse(text);

      setPlanner(data.output);

// Split planner into tasks
const plannerTasks = data.output
  .split("----------------------------------------")
  .map((item) => item.trim())
  .filter((item) => item.length > 0)
  .map((item) => ({
    content: item,
    completed: false,
  }));

setTasks(plannerTasks);
setTotalTasks(plannerTasks.length);
setCompletedTasks(0);
setPendingTasks(plannerTasks.length);
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleTask = (index) => {
  const updatedTasks = [...tasks];

  updatedTasks[index].completed = !updatedTasks[index].completed;

  setTasks(updatedTasks);

  const completed = updatedTasks.filter((task) => task.completed).length;

  setCompletedTasks(completed);
  setPendingTasks(updatedTasks.length - completed);
};

const generatePDF = () => {
  const doc = new jsPDF();

  // Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("AI Daily Planner", 20, 20);

  doc.setDrawColor(180);
  doc.line(20, 25, 190, 25);

  let y = 35;

  tasks.forEach((task, index) => {
    const lines = task.content
      .split("\n")
      .filter((line) => !line.includes("Personalized Planner"));

    // Page break
    if (y > 250) {
      doc.addPage();
      y = 20;
    }

    // Task Heading
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text(`Task ${index + 1}`, 20, y);

    y += 8;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);

    lines.forEach((line) => {
      const cleanLine = line
        .replace("⏰", "Time:")
        .replace("📝", "Task:")
        .replace("📂", "Category:")
        .replace("🔥", "Priority:")
        .replace("💡", "Notes:");

      const wrapped = doc.splitTextToSize(cleanLine, 165);

      doc.text(wrapped, 25, y);

      y += wrapped.length * 6;
    });

    doc.line(20, y, 190, y);
    y += 10;
  });

  doc.save("AI_Daily_Planner.pdf");
};

  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center px-8 pt-20 text-center">
      <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
        🤖 AI Powered Productivity Assistant
      </span>

      <h1 className="mt-8 text-6xl font-extrabold leading-tight">
        Plan Your Day
        <br />
        <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          Smarter With AI
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-400">
        Generate intelligent daily planners, organize your schedule and boost
        your productivity with AI.
      </p>

      <div className="mt-12 flex w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Eg. Create a productive planner for today..."
          className="flex-1 bg-transparent px-4 text-white outline-none placeholder:text-gray-500"
        />

        <button
          onClick={generatePlanner}
          disabled={loading}
          className="rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-8 py-3 font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-60"
        >
          {loading ? "Generating..." : "✨ Generate Planner"}
        </button>
      </div>

      {/* Planner Output */}
{planner && (
  <div className="mt-10 w-full max-w-4xl rounded-2xl border border-violet-500/30 bg-white/5 p-6 text-left backdrop-blur-xl">
    <h2 className="mb-6 text-2xl font-bold text-violet-300">
      📅 Personalized Planner
    </h2>

    {tasks.map((task, index) => (
      <div
  key={index}
  className={`mb-6 rounded-xl border p-4 transition-all duration-300 ${
    task.completed
      ? "border-green-500 bg-green-900/20"
      : "border-white/10 bg-black/20"
  }`}
>
       <pre className="whitespace-pre-wrap font-sans leading-8 text-gray-200">
  {task.content
    .split("\n")
    .filter((line) => !line.includes("Personalized Planner"))
    .join("\n")}
</pre>

        <div className="mt-4">
          <button
            onClick={() => toggleTask(index)}
            disabled={task.completed}
            className={`rounded-lg px-5 py-2 font-semibold transition ${
              task.completed
                ? "cursor-not-allowed bg-gray-600 text-white"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            {task.completed ? "✅ Completed" : "✔ Mark Completed"}
          </button>
        </div>
      </div>
    ))}
    <div className="mt-6 flex justify-center">
  <button
    onClick={generatePDF}
    className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
  >
    📄 Export as PDF
  </button>
</div>

    
  </div>
)}
    </section>
  );
}

export default Hero;