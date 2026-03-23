import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { blogPosts } from "@/data/blog";

const Blog = () => (
  <Layout>
    <SEOHead
      title="SWFL HVAC Blog: Tips for Naples, Fort Myers & Cape Coral | AC Assurance"
      description="Helpful HVAC tips, maintenance advice, and AC repair information for Cape Coral and Fort Myers homeowners from AC Assurance."
    />
    <section className="section-navy py-12 md:py-16">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">HVAC Tips &amp; Blog</h1>
        <p className="text-primary-foreground/90 text-lg max-w-2xl">
          HVAC tips, maintenance guides, and local service updates for homeowners in Naples, Fort Myers, Cape Coral, and all of Southwest Florida.
        </p>
      </div>
    </section>

    <section className="py-12 md:py-16">
      <div className="container max-w-3xl">
        <div className="space-y-5">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block group bg-card border border-border rounded p-6 hover:shadow-md hover:border-accent/40 transition-all"
            >
              <div className="text-xs text-muted-foreground mb-2">{post.date} · {post.readTime}</div>
              <h2 className="font-heading font-bold text-lg group-hover:text-accent transition-colors mb-2">{post.title}</h2>
              <p className="text-sm text-muted-foreground">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
