import { testGraphQLConnection } from '@/lib/wordpress';

export default async function TestPage() {
  let testResult;
  let error: Error | null = null;

  try {
    testResult = await testGraphQLConnection();
  } catch (e) {
    error = e instanceof Error ? e : new Error('An unknown error occurred');
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">WordPress GraphQL Connection Test</h1>
      
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">GraphQL Endpoint:</h2>
        <code className="bg-gray-200 p-2 rounded">
          {process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL || 'Not configured'}
        </code>
      </div>

      {error ? (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
          <h2 className="font-semibold mb-2">Error:</h2>
          <pre className="whitespace-pre-wrap">
            {error.message}
          </pre>
        </div>
      ) : (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
          <h2 className="font-semibold mb-2">Response:</h2>
          <pre className="whitespace-pre-wrap">
            {JSON.stringify(testResult, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
} 