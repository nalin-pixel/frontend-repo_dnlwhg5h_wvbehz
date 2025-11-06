import { Search, Plus } from "lucide-react";

export default function Toolbar({ query, onQuery, onAdd }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
      <div className="relative w-full sm:max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder="Search by name or hobby..."
          className="w-full rounded-xl border border-slate-300 bg-white pl-10 pr-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={onAdd}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 shadow"
      >
        <Plus size={18} /> Add Student
      </button>
    </div>
  );
}
