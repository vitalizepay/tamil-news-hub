import { Clock } from "lucide-react";

interface NewsListItemProps {
  title: string;
  image: string;
  category: string;
  categoryColor: string;
  time: string;
}

export const NewsListItem = ({
  title,
  image,
  category,
  categoryColor,
  time,
}: NewsListItemProps) => {
  return (
    <article className="flex gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer group">
      <div className="w-24 h-20 shrink-0 overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex-1 min-w-0">
        <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold text-white mb-2 ${categoryColor}`}>
          {category}
        </span>
        <h4 className="font-semibold text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h4>
        <div className="flex items-center gap-1 text-muted-foreground text-xs mt-2">
          <Clock className="h-3 w-3" />
          <span>{time}</span>
        </div>
      </div>
    </article>
  );
};
