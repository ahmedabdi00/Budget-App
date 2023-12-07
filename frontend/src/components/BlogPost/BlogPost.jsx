import React from "react";

const BlogPost = ({ post }) => {
  const { title, date, content, image } = post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const firstParagraph = content.match(/^.*?\.(?=\s|$)/);

  return (
    <div className="blog-post">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <img src={image} alt={`Image for ${title}`} className="blog-image" />
      {firstParagraph && (
        <p className="text-lg leading-relaxed mb-4">
          {firstParagraph[0]}{" "}
          <span className="text-blue-500">Read more...</span>
        </p>
      )}
      <p className="text-gray-600 mb-2">{formattedDate}</p>
    </div>
  );
};

export default BlogPost;
