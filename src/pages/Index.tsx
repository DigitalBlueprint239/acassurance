import { Link } from "react-router-dom";
import { Phone, Clock, DollarSign, Settings, ArrowRight, Star, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import EstimateForm from "@/components/EstimateForm";
import { services, serviceAreas, PHONE, PHONE_LINK } from "@/data/services";
import { blogPosts } from "@/data/blog";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[520px] md:min-h-[600px] flex items-center">
        <img src={heroBg} alt="HVAC technician servicing AC in Cape Coral" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative container py-16 md:py-24">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground leading-tight mb-4">
              Cape Coral, FL AC Repair &amp; HVAC Service
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-2">
              24/7 Emergency Service Available — Fast, Reliable, Licensed
            </p>
            <p className="text-primary-foreground/80 text-base mb-8">
              AC Assurance Cooling &amp; Heating proudly serves Cape Coral and Southwest Florida with professional HVAC repair, installation, and maintenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="text-base">
                <a href={PHONE_LINK}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call {PHONE}
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary" className="text-base">
                <a href="#estimate-form">Request Free Estimate</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefit Cards */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "24/7 Emergency Service", desc: "AC problems don't wait for business hours. Call us anytime for fast emergency AC repair in Cape Coral." },
              { icon: DollarSign, title: "Financing Available", desc: "Qualified homeowners can finance a new AC system through Synchrony. Affordable monthly payments." },
              { icon: Settings, title: "Maintenance Plans", desc: "Prevent breakdowns and extend system life with regular professional maintenance and tune-ups." },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-border p-6 md:p-8 hover:shadow-md transition-shadow bg-card">
                <div className="w-12 h-12 rounded-lg brand-gradient flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2 text-card-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16 section-blue">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">Our HVAC Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">From routine maintenance to emergency repairs, AC Assurance provides comprehensive HVAC services for Cape Coral homeowners and businesses.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/${service.slug}`}
                className="group rounded-lg bg-card border border-border p-5 hover:shadow-md hover:border-primary/30 transition-all"
              >
                <service.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-heading font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{service.shortTitle}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-3">
                  Learn more <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-foreground mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { step: "1", title: "Call or Request Estimate", desc: "Contact us by phone or fill out our quick form. We respond promptly." },
              { step: "2", title: "We Diagnose the Issue", desc: "Our licensed technicians arrive on time and provide an honest assessment." },
              { step: "3", title: "Get Comfortable Again", desc: "We complete the work efficiently and make sure you're satisfied before we leave." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full brand-gradient flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-heading font-extrabold text-xl">{item.step}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="py-12 md:py-16 section-blue">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">What Our Customers Say</h2>
            <p className="text-muted-foreground">Trusted by homeowners across Cape Coral and Southwest Florida</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Sarah M.", location: "Cape Coral", text: "AC Assurance responded quickly when our AC went out on a Saturday. The technician was professional and had us back up and running the same day." },
              { name: "James R.", location: "Fort Myers", text: "Fair pricing and honest service. They explained what was needed and didn't try to upsell. Will definitely use them again for maintenance." },
              { name: "Linda K.", location: "Estero", text: "Had a new system installed and the whole process was smooth — from the estimate to the installation. Financing made it easy." },
            ].map((review) => (
              <div key={review.name} className="bg-card rounded-lg border border-border p-6">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <p className="text-sm text-foreground mb-4">"{review.text}"</p>
                <div className="text-sm font-medium text-foreground">{review.name}</div>
                <div className="text-xs text-muted-foreground">{review.location}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/reviews">See All Reviews <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">Serving Cape Coral &amp; Southwest Florida</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {serviceAreas.map((area) => (
              <span
                key={area.name}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border ${
                  area.primary
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground border-border"
                }`}
              >
                <MapPin className="w-3.5 h-3.5" /> {area.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-12 md:py-16 section-blue">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">HVAC Tips &amp; Resources</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {blogPosts.slice(0, 2).map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group bg-card rounded-lg border border-border p-6 hover:shadow-md transition-shadow">
                <div className="text-xs text-muted-foreground mb-2">{post.date} · {post.readTime}</div>
                <h3 className="font-heading font-bold text-foreground group-hover:text-primary transition-colors mb-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/blog">View All Posts <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Estimate Form */}
      <section id="estimate-form" className="py-12 md:py-16 brand-gradient">
        <div className="container">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-3">Request a Free Estimate</h2>
              <p className="text-primary-foreground/80">Fill out the form below and we'll get back to you promptly.</p>
            </div>
            <div className="bg-card rounded-lg p-6 md:p-8 shadow-lg">
              <EstimateForm leadSource="homepage" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
