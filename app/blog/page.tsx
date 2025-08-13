import { getAllPosts } from '@/lib/wordpress';
import { WordPressPost, WordPressPostEdge } from '@/lib/types';

export default async function BlogPage() {
  const posts = await getAllPosts();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.edges.map(({ node }: WordPressPostEdge) => (
          <article key={node.id} className="border rounded-lg overflow-hidden shadow-lg">
            {node.featuredImage?.node?.sourceUrl && (
              <img 
                src={node.featuredImage.node.sourceUrl} 
                alt={node.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{node.title}</h2>
              <div 
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: node.excerpt }}
              />
              <div className="mt-4">
                <a 
                  href={`/blog/${node.slug}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Read more →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
