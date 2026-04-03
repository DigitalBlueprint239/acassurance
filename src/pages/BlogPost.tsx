import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { blogPosts } from "@/data/blog";
import { PHONE, PHONE_LINK } from "@/data/services";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <SEOHead title="Post Not Found | AC Assurance" description="The blog post you're looking for could not be found." noindex />
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-heading font-bold mb-4">Post Not Found</h1>
          <Button asChild><Link to="/blog">Back to Blog</Link></Button>
        </div>
      </Layout>
    );
  }

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "AC Assurance Cooling & Heating",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.acassurancefl.com/og-logo.png"
      }
    },
    "description": post.excerpt,
    "keywords": post.seoKeywords.join(", "),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.acassurancefl.com/blog/${post.slug}`
    }
  };

  return (
    <Layout>
      <SEOHead
        title={`${post.title} | AC Assurance`}
        description={post.excerpt}
        schema={blogPostingSchema}
      />
      <article className="py-12 md:py-16">
        <div className="container max-w-2xl">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="text-xs text-muted-foreground mb-1">{post.date} · {post.readTime}</div>
          <div className="text-xs text-muted-foreground mb-3">By {post.author}</div>
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">{post.title}</h1>
          <div className="prose prose-blue max-w-none">
            {post.content.map((p, i) => (
              <p key={i} className="text-foreground leading-relaxed mb-5">{p}</p>
            ))}
          </div>
        </div>
      </article>

      {/* Anchor CTA Card */}
      <div className="container max-w-2xl pb-12 md:pb-16">
        <Card className="bg-muted/50 border-l-4 border-l-primary">
          <CardContent className="p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-heading font-bold text-foreground mb-2">
              Stop {post.ctaTopic} Before It Destroys Your System.
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get a professional evaluation from Jason Rizzo's team — free, no obligation, built for Southwest Florida conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/#estimate-form">
                  Get a Free SWFL System Evaluation <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={PHONE_LINK}>
                  <Phone className="w-4 h-4 mr-2" /> Call {PHONE}
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default BlogPost;
