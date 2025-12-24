interface GoogleAdProps {
  size: "banner" | "rectangle" | "leaderboard" | "skyscraper";
  className?: string;
}

const adSizes = {
  banner: { width: "468px", height: "60px", label: "468 x 60" },
  rectangle: { width: "300px", height: "250px", label: "300 x 250" },
  leaderboard: { width: "100%", height: "90px", label: "728 x 90" },
  skyscraper: { width: "160px", height: "600px", label: "160 x 600" },
};

export const GoogleAd = ({ size, className = "" }: GoogleAdProps) => {
  const adSize = adSizes[size];

  return (
    <div
      className={`ad-container text-muted-foreground ${className}`}
      style={{
        width: adSize.width,
        height: adSize.height,
        minHeight: adSize.height,
      }}
    >
      <div className="text-center p-4">
        <p className="text-xs uppercase tracking-wide mb-1">விளம்பரம்</p>
        <p className="text-sm font-medium">Google Ad</p>
        <p className="text-xs mt-1">{adSize.label}</p>
      </div>
    </div>
  );
};
