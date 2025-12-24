import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-12">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg">த</span>
              </div>
              <h3 className="text-xl font-bold">தமிழ் செய்திகள்</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              உண்மையான செய்திகளை நம்பகமான முறையில் வழங்கும் தமிழகத்தின் முன்னணி செய்தி தளம்.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">விரைவு இணைப்புகள்</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline text-primary-foreground/80 hover:text-primary-foreground">அரசியல்</a></li>
              <li><a href="#" className="hover:underline text-primary-foreground/80 hover:text-primary-foreground">விளையாட்டு</a></li>
              <li><a href="#" className="hover:underline text-primary-foreground/80 hover:text-primary-foreground">பொழுதுபோக்கு</a></li>
              <li><a href="#" className="hover:underline text-primary-foreground/80 hover:text-primary-foreground">தொழில்நுட்பம்</a></li>
              <li><a href="#" className="hover:underline text-primary-foreground/80 hover:text-primary-foreground">வணிகம்</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">தொடர்புக்கு</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>info@tamilnews.com</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>+91 44 1234 5678</span>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>சென்னை, தமிழ்நாடு, இந்தியா</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-4">எங்களை பின்தொடருங்கள்</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/70">
          <p>© 2024 தமிழ் செய்திகள். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.</p>
        </div>
      </div>
    </footer>
  );
};
