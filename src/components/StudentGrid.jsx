import StudentCard from "./StudentCard";

export default function StudentGrid({ students, onChange, onDelete }) {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {students.map((s) => (
        <StudentCard
          key={s.id}
          student={s}
          onChange={(data) => onChange(s.id, data)}
          onDelete={() => onDelete(s.id)}
        />
      ))}
    </div>
  );
}
