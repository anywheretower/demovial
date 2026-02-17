interface SectionDividerProps {
  color?: string;
}

export default function SectionDivider({
  color = "#6366f1",
}: SectionDividerProps) {
  return (
    <div className="flex justify-center py-12">
      <div
        className="h-px w-48 opacity-30"
        style={{
          backgroundImage: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        }}
      />
    </div>
  );
}
