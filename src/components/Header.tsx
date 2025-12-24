import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const categories = [
  { name: "முகப்பு", href: "/" },
  { name: "அரசியல்", href: "#politics" },
  { name: "விளையாட்டு", href: "#sports" },
  { name: "பொழுதுபோக்கு", href: "#entertainment" },
  { name: "தொழில்நுட்பம்", href: "#tech" },
  { name: "வணிகம்", href: "#business" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card shadow-[var(--shadow-nav)]">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container flex items-center justify-between text-sm">
          <span>திங்கள், டிசம்பர் 24, 2024</span>
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="hover:underline">விளம்பரம்</a>
            <a href="#" className="hover:underline">தொடர்பு</a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">த</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">தமிழ் செய்திகள்</h1>
              <p className="text-xs text-muted-foreground">உண்மையான செய்திகள், நம்பகமான தகவல்கள்</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {categories.map((cat) => (
              <a
                key={cat.name}
                href={cat.href}
                className="px-4 py-2 text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors font-medium"
              >
                {cat.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-foreground"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Search bar */}
        {isSearchOpen && (
          <div className="mt-4 animate-fade-in">
            <Input
              placeholder="செய்திகளை தேடுங்கள்..."
              className="w-full"
            />
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="lg:hidden border-t border-border animate-slide-in">
          <div className="container py-4 flex flex-col gap-2">
            {categories.map((cat) => (
              <a
                key={cat.name}
                href={cat.href}
                className="px-4 py-3 text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {cat.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
