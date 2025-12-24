import { Clock } from "lucide-react";

interface NewsCardProps {
  title: string;
  excerpt?: string;
  image: string;
  category: string;
  categoryColor: string;
  time: string;
  isBreaking?: boolean;
  size?: "small" | "medium" | "large";
}

export const NewsCard = ({
  title,
  excerpt,
  image,
  category,
  categoryColor,
  time,
  isBreaking = false,
  size = "medium",
}: NewsCardProps) => {
  const sizeClasses = {
    small: "h-[200px]",
    medium: "h-[280px]",
    large: "h-[400px]",
  };

  return (
    <article className="news-card group cursor-pointer">
      <div className={`relative overflow-hidden ${sizeClasses[size]}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Category & Breaking Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${categoryColor}`}>
            {category}
          </span>
          {isBreaking && (
            <span className="breaking-badge px-3 py-1 rounded-full text-xs font-bold">
              அவசரம்
            </span>
          )}
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className={`font-bold mb-2 line-clamp-2 ${size === "large" ? "text-xl" : "text-base"}`}>
            {title}
          </h3>
          {size !== "small" && (
            <p className="text-sm text-white/80 line-clamp-2 mb-3">{excerpt}</p>
          )}
          <div className="flex items-center gap-2 text-white/70 text-xs">
            <Clock className="h-3 w-3" />
            <span>{time}</span>
          </div>
        </div>
      </div>
    </article>
  );
};
