import React from 'react';
import blogPostsData from '../data/blogPosts';


const Posts = ({ post }) => {
  const { title, date, content } = post;

  // Format the date if needed
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Use a regular expression to extract the first paragraph from the content
  const firstParagraph = content.match(/^.*?\.(?=\s|$)/);

  return (
    <div className="blog-post">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">{formattedDate}</p>
      {firstParagraph && (
        <p className="text-lg leading-relaxed mb-4">
          {firstParagraph[0]} <span className="text-blue-500">Read more...</span>
        </p>
      )}
    </div>
  );
};

export default Posts;
