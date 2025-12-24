import { ChevronRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  categoryColor?: string;
}

export const SectionHeader = ({ title, categoryColor = "bg-primary" }: SectionHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className={`w-1.5 h-8 rounded-full ${categoryColor}`} />
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      </div>
      <a
        href="#"
        className="flex items-center gap-1 text-primary hover:underline text-sm font-medium"
      >
        மேலும் படிக்க
        <ChevronRight className="h-4 w-4" />
      </a>
    </div>
  );
};
