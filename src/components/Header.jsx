import { Users } from "lucide-react";

export default function Header({ onAdd }) {
  return (
    <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow">
            <Users size={22} />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-slate-900">Student Directory</h1>
            <p className="text-sm text-slate-500">36 profiles • editable inline</p>
          </div>
        </div>
        <button
          onClick={onAdd}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 active:scale-[.98] transition shadow"
        >
          + Add Student
        </button>
      </div>
    </header>
  );
}
