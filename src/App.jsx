import { useMemo, useState } from "react";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import StudentGrid from "./components/StudentGrid";

const sampleAvatars = [
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=600&auto=format&fit=crop",
];

function makeStudent(i) {
  return {
    id: crypto.randomUUID(),
    name: `Student ${i + 1}`,
    avatar: sampleAvatars[i % sampleAvatars.length],
    hobbies: ["reading", "riding", "coding", "art", "music"][i % 5] + ", design",
    description:
      "Passionate learner who enjoys collaborating with friends, exploring new tools, and building creative projects.",
  };
}

const initialStudents = Array.from({ length: 36 }, (_, i) => makeStudent(i));

export default function App() {
  const [students, setStudents] = useState(initialStudents);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return students;
    return students.filter((s) => {
      const name = s.name.toLowerCase();
      const hobbies = (s.hobbies || "").toLowerCase();
      return name.includes(q) || hobbies.includes(q);
    });
  }, [students, query]);

  const addStudent = () => {
    const next = {
      id: crypto.randomUUID(),
      name: "New Student",
      avatar: "",
      hobbies: "",
      description: "",
    };
    setStudents((prev) => [next, ...prev]);
  };

  const updateStudent = (id, data) => {
    setStudents((prev) => prev.map((s) => (s.id === id ? { ...s, ...data } : s)));
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      <Header onAdd={addStudent} />
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        <Toolbar query={query} onQuery={setQuery} onAdd={addStudent} />
        <StudentGrid students={filtered} onChange={updateStudent} onDelete={deleteStudent} />
        {filtered.length === 0 && (
          <div className="text-center py-24 text-slate-600">
            No students found. Try a different search.
          </div>
        )}
      </main>
      <footer className="py-8 text-center text-sm text-slate-500">
        Made with ❤️ — click Edit on any card to change the picture, name, hobbies, or description.
      </footer>
    </div>
  );
}
