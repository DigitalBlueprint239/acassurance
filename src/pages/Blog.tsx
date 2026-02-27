import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { blogPosts } from "@/data/blog";

const Blog = () => (
  <Layout>
    <section className="brand-gradient py-12 md:py-16">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">HVAC Tips &amp; Blog</h1>
        <p className="text-primary-foreground/90 text-lg max-w-2xl">
          Helpful information for Cape Coral homeowners on AC maintenance, repair, and making smart HVAC decisions.
        </p>
      </div>
    </section>

    <section className="py-12 md:py-16">
      <div className="container max-w-3xl">
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block group bg-card border border-border rounded-lg p-6 hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="text-xs text-muted-foreground mb-2">{post.date} · {post.readTime}</div>
              <h2 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors mb-2">{post.title}</h2>
              <p className="text-sm text-muted-foreground">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
