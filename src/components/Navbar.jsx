import { CalendarDays } from "lucide-react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1120]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 p-2 shadow-lg">
            <CalendarDays size={26} className="text-white" />
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-wide">
              AI Daily Planner
            </h1>

            <p className="text-xs text-gray-400">
              Smart Planning • Better Productivity
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;