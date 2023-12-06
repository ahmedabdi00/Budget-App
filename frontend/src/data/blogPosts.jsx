import React from 'react';
import BlogPost from '../components/BlogPost';

const blogPostsData = [
  {
    id: 1,
    title: "Top 5 Budgeting Tips for College Students",
    date: "2023-01-15",
    content:
      "Managing your finances as a college student can be challenging. In this post, we provide five practical budgeting tips to help you make the most of your money while studying.",
    image:
      "https://cdn.gobankingrates.com/wp-content/uploads/2020/03/female-student-on-laptop-iStock-1161222714.jpg",
  },
  {
    id: 2,
    title: "Investing 101 for Young Adults: Getting Started",
    date: "2023-02-10",
    content:
      "Interested in investing but not sure where to begin? This guide covers the basics of investing for young adults, from understanding different investment options to creating a diversified portfolio.",
    image:
      "https://www.collegetransitions.com/wp-content/uploads/2023/08/college-budget.jpg",
  },
  {
    id: 3,
    title: "How to Build Credit as a Young Adult",
    date: "2023-03-05",
    content:
      "Building credit is crucial for financial success. Learn practical steps to establish and improve your credit score as a young adult, including the importance of responsible credit card use.",
    image:
      "https://gradguard.com/blog/wp-content/uploads/2012/11/6722544475_524a721154_z.jpg",
  },
  {
    id: 4,
    title: "Mastering the Art of Saving: A Step-by-Step Guide",
    date: "2023-04-20",
    content:
      "Saving money is a crucial skill for financial stability. This comprehensive guide provides practical tips and strategies to help you master the art of saving, from creating a budget to building an emergency fund.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXsFYfD9WTtj9KVJV57aB7VT0SmVLF6YaiDg&usqp=CAU",
  },
  {
    id: 5,
    title: "The Impact of Inflation on Your Finances",
    date: "2023-05-15",
    content:
      "Inflation can affect your purchasing power and long-term financial goals. Learn how inflation works, its impact on your money, and strategies to mitigate its effects on your finances.",
    image: "https://assets.obj.ca/2022/11/zFslAUhH-inflation-2.jpg",
  },
  {
    id: 6,
    title: "Navigating Student Loans: Tips for Repayment",
    date: "2023-06-10",
    content:
      "Student loans are a common financial challenge for many graduates. This post provides practical tips and resources to help you navigate the repayment process and manage your student loan debt responsibly.",
    image:
      "https://imageio.forbes.com/specials-images/imageserve/63e2d6ade161b94158e6d6af/Student-loan-debt-pay-off-or-forgiveness-program--cut-education-expense-or-reduce-fee/960x0.jpg?format=jpg&width=960",
  },
  {
    id: 7,
    title: "The Art of Negotiating a Salary Increase",
    date: "2023-07-05",
    content:
      "Negotiating a salary increase can be intimidating, but its a crucial skill for advancing your career and improving your financial situation. Learn effective negotiation strategies and how to make a compelling case for a higher salary.",
    image: "https://blog.steppingblocks.com/hubfs/salary%20negotiation.jpg",
  },
  {
    id: 8,
    title: "Building a Strong Credit History: Dos and Don'ts",
    date: "2023-08-20",
    content:
      "Your credit history plays a significant role in your financial life. Discover the dos and don'ts of building a strong credit history, including responsible credit card use, timely payments, and strategies to improve your credit score.",
    image:
      "https://www.myscoreiq.com/wp-content/uploads/2021/01/multiple-credit-cards.jpg",
  },
  {
    id: 9,
    title: "The Beginner's Guide to Real Estate Investing",
    date: "2023-09-15",
    content:
      "Interested in real estate investing? This beginner's guide covers the fundamentals of real estate investment, from understanding market trends to evaluating potential properties and making informed investment decisions.",
    image:
      "https://findlayrealestate.ca/wp-content/uploads/2019/05/ontario-canada-Homebuyer_Pandemic-1200.png",
  },
];

const BlogPosts = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Latest Finance Tips for Students & Young Adults</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogPostsData.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default blogPostsData;