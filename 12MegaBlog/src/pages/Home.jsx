import React, { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { Container, PostCard } from '../components';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await appwriteService.getPosts();
        if (response && response.documents) {
          setPosts(response.documents);
        }
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load posts.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="w-full py-16 text-center text-xl text-gray-500">
        Loading posts...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full py-16 text-center text-red-600">
        {error}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="w-full py-16 text-center text-gray-600">
        No posts available. Login to read posts.
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.map((post) => (
            <PostCard
              key={post.$id}
              $id={post.$id}
              title={post.title}
              featuredImage={post.featuredImage}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;