import { Header } from "@/components/Header";
import { TickerBar } from "@/components/TickerBar";
import { Hero } from "@/components/Hero";
import { PromoSlider } from "@/components/PromoSlider";
import { GamesSection } from "@/components/GamesSection";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { WhatsAppChatbot } from "@/components/WhatsAppChatbot";
import { SEO } from "@/components/SEO";
import { BLOG_POSTS, altFor } from "@/data/blogPosts";
import { Link } from "react-router-dom";

const Index = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.mahadevregister.live/#organization",
      name: "Mahadev Book",
      url: "https://www.mahadevregister.live/",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mahadevregister.live/logo.png"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://www.mahadevregister.live/#website",
      url: "https://www.mahadevregister.live/",
      name: "Mahadev Book",
      publisher: { "@id": "https://www.mahadevregister.live/#organization" },
      inLanguage: "en-IN"
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://www.mahadevregister.live/#webpage",
      url: "https://www.mahadevregister.live/",
      name: "Mahadev Book",
      isPartOf: { "@id": "https://www.mahadevregister.live/#website" },
      about: { "@id": "https://www.mahadevregister.live/#organization" },
      inLanguage: "en-IN"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What is Mahadev Book?", acceptedAnswer: { "@type": "Answer", text: "Mahadev Book is India's most trusted online cricket betting and live casino ID provider. We offer verified betting IDs with instant deposits & withdrawals in Indian Rupees (₹)." } },
        { "@type": "Question", name: "How do I get a Mahadev Book ID?", acceptedAnswer: { "@type": "Answer", text: "Simply click any 'Get ID' button on the site to chat with us on WhatsApp. We'll provide your verified ID within 2 minutes." } },
        { "@type": "Question", name: "Is Mahadev Book safe and legal?", acceptedAnswer: { "@type": "Answer", text: "Yes. Mahadev Book operates with verified KYC, encrypted transactions and is the most trusted platform for online betting in India. Your data and funds are 100% secure." } },
        { "@type": "Question", name: "What payment methods do you accept?", acceptedAnswer: { "@type": "Answer", text: "We accept all Indian payment methods — UPI, Paytm, PhonePe, Google Pay, IMPS, NEFT and direct bank transfer. Deposits & withdrawals are instant, in INR." } },
        { "@type": "Question", name: "What sports and games can I bet on?", acceptedAnswer: { "@type": "Answer", text: "Cricket (IPL, T20, ODI, Test, BBL, PSL), live casino games like Teen Patti, Andar Bahar, Roulette, Dragon Tiger, Blackjack, and 200+ slot games." } },
        { "@type": "Question", name: "How fast are withdrawals?", acceptedAnswer: { "@type": "Answer", text: "Withdrawals to UPI/Bank are processed within 5 minutes, 24x7. No hidden charges, no waiting period." } },
        { "@type": "Question", name: "Do you have a minimum deposit?", acceptedAnswer: { "@type": "Answer", text: "Yes, the minimum deposit is just ₹100. You can start small and scale up as you go." } },
        { "@type": "Question", name: "How do I contact support?", acceptedAnswer: { "@type": "Answer", text: "Click any WhatsApp button on the site. Our support team replies instantly, 24x7, in Hindi and English." } },
      ],
    },
  ];

  const featured = BLOG_POSTS.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Mahadev Book | Online Cricket Betting ID India"
        description="Get a Mahadev Book ID for online cricket betting and live casino games in India, with INR payments and 24x7 WhatsApp support."
        canonical="/"
        jsonLd={jsonLd}
      />
      <TickerBar />
      <Header />
      <main>
        <Hero />
        <PromoSlider />
        <GamesSection />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTABanner />

        {/* Featured Blog Section — drives internal SEO juice */}
        <section className="container py-16 md:py-24" id="blog-preview">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">From the Blog</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Expert <span className="text-gradient-gold">Betting Guides</span> & Strategy
            </h2>
            <p className="text-muted-foreground mt-4">
              IPL 2026 tips, Teen Patti strategy, UPI payment guides — written by India's top betting and casino experts.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map(post => (
              <Link key={post.slug} to={`/blog/${post.slug}`}
                className="group rounded-2xl overflow-hidden border border-gold/20 bg-card hover:border-gold/60 hover:shadow-gold transition-all">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img src={post.cover} alt={altFor(post.cover)} loading="lazy" width={600} height={338} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-bold text-gold">{post.category}</span>
                  <h3 className="font-display font-bold text-lg mt-2 group-hover:text-gold transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gold/40 text-gold font-bold hover:bg-gold/10 transition-all">
              Read all articles →
            </Link>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
      <WhatsAppChatbot />
    </div>
  );
};

export default Index;
