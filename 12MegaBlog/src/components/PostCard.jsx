import React, { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      if (!featuredImage) return;

      try {
        const url = await appwriteService.getFilePreview(featuredImage);
        setImageUrl(url.href || url); // handle Appwrite Response object
      } catch (err) {
        console.error('Error loading image:', err);
      }
    };

    fetchImage();
  }, [featuredImage]);

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        {imageUrl && (
          <div className="w-full justify-center mb-4">
            <img src={imageUrl} alt={title} className="rounded-xl" />
          </div>
        )}
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;