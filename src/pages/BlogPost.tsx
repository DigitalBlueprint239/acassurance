import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { blogPosts } from "@/data/blog";
import { PHONE, PHONE_LINK } from "@/data/services";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-heading font-bold mb-4">Post Not Found</h1>
          <Button asChild><Link to="/blog">Back to Blog</Link></Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="py-12 md:py-16">
        <div className="container max-w-2xl">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="text-xs text-muted-foreground mb-3">{post.date} · {post.readTime}</div>
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">{post.title}</h1>
          <div className="space-y-5">
            {post.content.map((p, i) => (
              <p key={i} className="text-foreground leading-relaxed">{p}</p>
            ))}
          </div>
          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-muted-foreground mb-4">Need HVAC service in Cape Coral?</p>
            <Button asChild size="lg">
              <a href={PHONE_LINK}><Phone className="w-5 h-5 mr-2" />Call {PHONE}</a>
            </Button>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
