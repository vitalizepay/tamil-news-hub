import { Header } from "@/components/Header";
import { BreakingNewsTicker } from "@/components/BreakingNewsTicker";
import { Footer } from "@/components/Footer";
import { NewsCard } from "@/components/NewsCard";
import { NewsListItem } from "@/components/NewsListItem";
import { SectionHeader } from "@/components/SectionHeader";
import { GoogleAd } from "@/components/GoogleAd";

// Import images
import politicsImg1 from "@/assets/news-politics-1.jpg";
import sportsImg1 from "@/assets/news-sports-1.jpg";
import entertainmentImg1 from "@/assets/news-entertainment-1.jpg";
import techImg1 from "@/assets/news-tech-1.jpg";
import businessImg1 from "@/assets/news-business-1.jpg";
import weatherImg1 from "@/assets/news-weather-1.jpg";

const heroNews = {
  title: "தமிழ்நாடு சட்டசபையில் புதிய கல்வி மசோதா அறிமுகம்: முக்கிய மாற்றங்கள் அறிவிப்பு",
  excerpt: "தமிழ்நாடு அரசு புதிய கல்வி மசோதாவை இன்று சட்டசபையில் அறிமுகப்படுத்தியது. இந்த மசோதா மாணவர்களுக்கு பல நன்மைகளை வழங்கும் என எதிர்பார்க்கப்படுகிறது.",
  image: politicsImg1,
  category: "அரசியல்",
  categoryColor: "category-politics",
  time: "2 மணி நேரம் முன்",
  isBreaking: true,
};

const topStories = [
  {
    title: "இந்திய கிரிக்கெட் அணி T20 தொடரில் அபார வெற்றி",
    excerpt: "ஆஸ்திரேலியாவை எதிர்த்து நடந்த போட்டியில் 7 விக்கெட் வித்தியாசத்தில் இந்தியா வெற்றி.",
    image: sportsImg1,
    category: "விளையாட்டு",
    categoryColor: "category-sports",
    time: "4 மணி நேரம் முன்",
  },
  {
    title: "கோலிவுட் புதிய படத்தின் ஃபர்ஸ்ட் லுக் வெளியீடு",
    excerpt: "பிரபல நடிகர் நடிக்கும் புதிய படத்தின் போஸ்டர் ரசிகர்களை உற்சாகப்படுத்தியுள்ளது.",
    image: entertainmentImg1,
    category: "பொழுதுபோக்கு",
    categoryColor: "category-entertainment",
    time: "5 மணி நேரம் முன்",
  },
  {
    title: "சென்னையில் கனமழை: பள்ளிகளுக்கு விடுமுறை",
    excerpt: "வடகிழக்கு பருவமழையின் தாக்கத்தால் சென்னை உட்பட பல மாவட்டங்களில் கனமழை.",
    image: weatherImg1,
    category: "வானிலை",
    categoryColor: "category-tech",
    time: "1 மணி நேரம் முன்",
  },
];

const politicsNews = [
  {
    title: "மத்திய அரசின் புதிய வரிச் சட்டம் குறித்து விவாதம்",
    image: politicsImg1,
    category: "அரசியல்",
    categoryColor: "category-politics",
    time: "3 மணி நேரம் முன்",
  },
  {
    title: "உள்ளாட்சி தேர்தல் தேதி அறிவிப்பு எதிர்பார்ப்பு",
    image: politicsImg1,
    category: "அரசியல்",
    categoryColor: "category-politics",
    time: "5 மணி நேரம் முன்",
  },
  {
    title: "நாடாளுமன்றத்தில் எதிர்க்கட்சிகள் போராட்டம்",
    image: politicsImg1,
    category: "அரசியல்",
    categoryColor: "category-politics",
    time: "6 மணி நேரம் முன்",
  },
  {
    title: "புதிய வளர்ச்சித் திட்டங்களுக்கு ஒப்புதல்",
    image: politicsImg1,
    category: "அரசியல்",
    categoryColor: "category-politics",
    time: "8 மணி நேரம் முன்",
  },
];

const techNews = [
  {
    title: "AI தொழில்நுட்பத்தில் இந்தியாவின் புதிய சாதனை",
    excerpt: "செயற்கை நுண்ணறிவு துறையில் இந்திய ஸ்டார்ட்அப் நிறுவனங்கள் உலக அளவில் சிறந்து விளங்குகின்றன.",
    image: techImg1,
    category: "தொழில்நுட்பம்",
    categoryColor: "category-tech",
    time: "2 மணி நேரம் முன்",
  },
  {
    title: "5G சேவை விரிவாக்கம்: நகரங்களில் வேகமான இணையம்",
    image: techImg1,
    category: "தொழில்நுட்பம்",
    categoryColor: "category-tech",
    time: "4 மணி நேரம் முன்",
  },
  {
    title: "மின்சார வாகனங்களுக்கு புதிய மானியம் அறிவிப்பு",
    image: techImg1,
    category: "தொழில்நுட்பம்",
    categoryColor: "category-tech",
    time: "6 மணி நேரம் முன்",
  },
];

const businessNews = [
  {
    title: "சென்செக்ஸ் புதிய உச்சத்தை தொட்டது: முதலீட்டாளர்கள் மகிழ்ச்சி",
    excerpt: "இன்றைய வர்த்தகத்தில் பங்குச் சந்தை சாதனை உயர்வை பதிவு செய்தது.",
    image: businessImg1,
    category: "வணிகம்",
    categoryColor: "category-business",
    time: "1 மணி நேரம் முன்",
  },
  {
    title: "ரூபாய் மதிப்பு சீரான நிலையில் இருப்பதாக RBI அறிவிப்பு",
    image: businessImg1,
    category: "வணிகம்",
    categoryColor: "category-business",
    time: "3 மணி நேரம் முன்",
  },
  {
    title: "IT துறையில் 50,000 புதிய வேலைவாய்ப்புகள்",
    image: businessImg1,
    category: "வணிகம்",
    categoryColor: "category-business",
    time: "5 மணி நேரம் முன்",
  },
];

const entertainmentNews = [
  {
    title: "விஜய் நடிக்கும் புதிய படம் ஜனவரியில் வெளியீடு",
    excerpt: "ரசிகர்கள் ஆவலுடன் எதிர்பார்க்கும் படம் பொங்கலுக்கு வெளியாகிறது.",
    image: entertainmentImg1,
    category: "பொழுதுபோக்கு",
    categoryColor: "category-entertainment",
    time: "3 மணி நேரம் முன்",
  },
  {
    title: "தமிழ் இசை விழா சென்னையில் நடைபெறுகிறது",
    image: entertainmentImg1,
    category: "பொழுதுபோக்கு",
    categoryColor: "category-entertainment",
    time: "5 மணி நேரம் முன்",
  },
  {
    title: "OTT தளத்தில் புதிய தமிழ் தொடர் அறிமுகம்",
    image: entertainmentImg1,
    category: "பொழுதுபோக்கு",
    categoryColor: "category-entertainment",
    time: "7 மணி நேரம் முன்",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BreakingNewsTicker />

      <main className="container py-8">
        {/* Hero Section */}
        <section className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Story */}
            <div className="lg:col-span-2">
              <NewsCard {...heroNews} size="large" />
            </div>
            {/* Side Stories */}
            <div className="flex flex-col gap-6">
              {topStories.slice(0, 2).map((story, index) => (
                <NewsCard key={index} {...story} size="medium" />
              ))}
            </div>
          </div>
        </section>

        {/* Ad Banner */}
        <section className="mb-8 flex justify-center">
          <GoogleAd size="leaderboard" className="max-w-3xl" />
        </section>

        {/* Secondary Stories */}
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topStories.map((story, index) => (
              <NewsCard key={index} {...story} size="medium" />
            ))}
          </div>
        </section>

        {/* Politics & Tech Section */}
        <section className="mb-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Politics */}
          <div className="lg:col-span-2">
            <SectionHeader title="அரசியல்" categoryColor="category-politics" />
            <div className="bg-card rounded-lg p-4 shadow-sm">
              {politicsNews.map((news, index) => (
                <div key={index}>
                  <NewsListItem {...news} />
                  {index < politicsNews.length - 1 && (
                    <div className="border-b border-border my-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Sidebar Ad */}
          <div className="flex flex-col gap-6">
            <GoogleAd size="rectangle" />
            <div className="bg-card rounded-lg p-4 shadow-sm">
              <h3 className="font-bold text-lg mb-4 text-foreground">அதிகம் படிக்கப்பட்டவை</h3>
              <ul className="space-y-3">
                {["சென்னையில் மழை எச்சரிக்கை", "புதிய ரயில் சேவை அறிமுகம்", "தங்கம் விலை உயர்வு", "பெட்ரோல் விலை குறைப்பு"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 cursor-pointer hover:text-primary transition-colors">
                    <span className="text-primary font-bold text-lg">{i + 1}.</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="mb-8" id="tech">
          <SectionHeader title="தொழில்நுட்பம்" categoryColor="category-tech" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="md:col-span-2 lg:col-span-1">
              <NewsCard {...techNews[0]} size="medium" />
            </div>
            <div className="md:col-span-2 lg:col-span-2">
              <div className="bg-card rounded-lg p-4 shadow-sm h-full">
                {techNews.slice(1).map((news, index) => (
                  <div key={index}>
                    <NewsListItem {...news} />
                    {index < techNews.slice(1).length - 1 && (
                      <div className="border-b border-border my-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mid-content Ad */}
        <section className="mb-8 flex justify-center">
          <GoogleAd size="leaderboard" className="max-w-3xl" />
        </section>

        {/* Business Section */}
        <section className="mb-8" id="business">
          <SectionHeader title="வணிகம்" categoryColor="category-business" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <NewsCard {...businessNews[0]} size="medium" />
            <div className="md:col-span-2 bg-card rounded-lg p-4 shadow-sm">
              {businessNews.slice(1).map((news, index) => (
                <div key={index}>
                  <NewsListItem {...news} />
                  {index < businessNews.slice(1).length - 1 && (
                    <div className="border-b border-border my-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Entertainment Section */}
        <section className="mb-8" id="entertainment">
          <SectionHeader title="பொழுதுபோக்கு" categoryColor="category-entertainment" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <NewsCard {...entertainmentNews[0]} size="medium" />
            </div>
            <div className="bg-card rounded-lg p-4 shadow-sm">
              {entertainmentNews.slice(1).map((news, index) => (
                <div key={index}>
                  <NewsListItem {...news} />
                  {index < entertainmentNews.slice(1).length - 1 && (
                    <div className="border-b border-border my-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sports Section */}
        <section className="mb-8" id="sports">
          <SectionHeader title="விளையாட்டு" categoryColor="category-sports" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <NewsCard
              title="IPL 2025: புதிய சீசனுக்கான ஏலம் நடைபெறுகிறது"
              excerpt="அடுத்த ஆண்டு IPL தொடருக்கான வீரர்கள் ஏலம் டிசம்பர் மாதத்தில் நடைபெறும்."
              image={sportsImg1}
              category="விளையாட்டு"
              categoryColor="category-sports"
              time="2 மணி நேரம் முன்"
              size="medium"
            />
            <NewsCard
              title="ஒலிம்பிக்: இந்திய வீரர்கள் தீவிர பயிற்சியில் ஈடுபாடு"
              excerpt="2024 ஒலிம்பிக் போட்டிகளுக்கான தயாரிப்பு முழு வீச்சில் நடைபெறுகிறது."
              image={sportsImg1}
              category="விளையாட்டு"
              categoryColor="category-sports"
              time="4 மணி நேரம் முன்"
              size="medium"
            />
            <div className="flex flex-col gap-4">
              <GoogleAd size="rectangle" />
            </div>
          </div>
        </section>

        {/* Bottom Ad */}
        <section className="mb-8 flex justify-center">
          <GoogleAd size="leaderboard" className="max-w-3xl" />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
