import { getPostBySlug } from '@/lib/wordpress';
import { WordPressPost } from '@/lib/types';

interface BlogPostParams {
  params: {
    slug: string;
  };
}

export default async function BlogPost({ params }: BlogPostParams) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        {post.featuredImage?.node?.sourceUrl && (
          <img 
            src={post.featuredImage.node.sourceUrl} 
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
        )}
        
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
        </div>
      </article>
    </div>
  );
}
