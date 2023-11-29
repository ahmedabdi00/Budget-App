// BlogPage.jsx

import React from 'react';
import BlogPost from '../components/BlogPost';
import blogPostsData from '../data/blogPosts';
import './BlogPages.css';


const BlogPage = () => {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-6">Latest Finance Tips for Students & Young Adults</h1>
      <div className="blog-container">
        {blogPostsData.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
