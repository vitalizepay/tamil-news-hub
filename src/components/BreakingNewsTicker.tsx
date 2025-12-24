import { AlertCircle } from "lucide-react";

const breakingNews = [
  "தமிழ்நாடு சட்டசபையில் புதிய மசோதா அறிமுகம்",
  "சென்னையில் மழை: பள்ளிகளுக்கு விடுமுறை அறிவிப்பு",
  "இந்திய அணி உலகக் கோப்பை தொடரில் வெற்றி",
  "பெட்ரோல் விலை குறைப்பு: மத்திய அரசு அறிவிப்பு",
  "புதிய தொழில்நுட்ப கொள்கை 2025 அறிமுகம்",
];

export const BreakingNewsTicker = () => {
  return (
    <div className="news-ticker py-2.5 overflow-hidden">
      <div className="container flex items-center gap-4">
        <div className="flex items-center gap-2 shrink-0">
          <AlertCircle className="h-4 w-4" />
          <span className="font-bold text-sm uppercase tracking-wide">அவசரச் செய்தி</span>
        </div>
        <div className="overflow-hidden flex-1">
          <div className="ticker-scroll whitespace-nowrap inline-flex gap-16">
            {[...breakingNews, ...breakingNews].map((news, index) => (
              <span key={index} className="text-sm font-medium">
                • {news}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
