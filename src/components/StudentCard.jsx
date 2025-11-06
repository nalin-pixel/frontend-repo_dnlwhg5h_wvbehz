import { useState } from "react";
import { Pencil, Check, X, Image as ImageIcon, User } from "lucide-react";

export default function StudentCard({ student, onChange, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [local, setLocal] = useState(student);

  const startEdit = () => {
    setLocal(student);
    setEditing(true);
  };

  const cancel = () => {
    setLocal(student);
    setEditing(false);
  };

  const save = () => {
    onChange(local);
    setEditing(false);
  };

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition">
      <div className="aspect-[5/3] w-full bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center overflow-hidden">
        {local.avatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={local.avatar}
            alt={local.name}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600&auto=format&fit=crop";
            }}
          />
        ) : (
          <div className="flex flex-col items-center text-slate-400">
            <User size={40} />
            <span className="text-sm">No Image</span>
          </div>
        )}
      </div>

      <div className="p-4">
        {editing ? (
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs text-slate-500">Name</label>
                <input
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={local.name}
                  onChange={(e) => setLocal({ ...local, name: e.target.value })}
                  placeholder="Student name"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-slate-500">Avatar URL</label>
                <input
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={local.avatar}
                  onChange={(e) => setLocal({ ...local, avatar: e.target.value })}
                  placeholder="https://..."
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs text-slate-500">Hobbies (comma separated)</label>
              <input
                className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={local.hobbies}
                onChange={(e) => setLocal({ ...local, hobbies: e.target.value })}
                placeholder="reading, riding, coding"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-slate-500">Description</label>
              <textarea
                className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]"
                value={local.description}
                onChange={(e) => setLocal({ ...local, description: e.target.value })}
                placeholder="Short bio"
              />
            </div>
          </div>
        ) : (
          <div>
            <h3 className="font-semibold text-slate-900 text-lg">{student.name}</h3>
            <p className="mt-1 text-sm text-slate-600 line-clamp-3">{student.description}</p>
            {student.hobbies && (
              <div className="mt-3 flex flex-wrap gap-2">
                {student.hobbies.split(",").map((h) => (
                  <span key={h.trim()} className="px-2 py-1 rounded-full bg-blue-50 text-blue-700 text-xs border border-blue-100">
                    {h.trim()}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="p-4 pt-0 flex items-center justify-end gap-2">
        {editing ? (
          <>
            <button onClick={cancel} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200">
              <X size={16} /> Cancel
            </button>
            <button onClick={save} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-green-600 text-white hover:bg-green-700">
              <Check size={16} /> Save
            </button>
          </>
        ) : (
          <>
            <button onClick={startEdit} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-black">
              <Pencil size={16} /> Edit
            </button>
            <button onClick={onDelete} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-600 text-white hover:bg-red-700">
              Delete
            </button>
          </>
        )}
      </div>

      {editing && (
        <div className="absolute top-3 right-3 inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-white/90 border border-slate-200 shadow-sm">
          <ImageIcon size={14} /> Paste an image URL
        </div>
      )}
    </div>
  );
}
