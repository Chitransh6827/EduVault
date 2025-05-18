import { Link } from "react-router-dom";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "5 Tips to Maximize Your Learning with EduVault",
      date: "May 20, 2025",
      description:
        "Discover how to make the most out of EduVault's features to enhance your learning experience. From advanced search to community collaboration, we've got you covered.",
    },
    {
      id: 2,
      title: "The Importance of Sharing Knowledge in Education",
      date: "May 15, 2025",
      description:
        "Learn why sharing resources and collaborating with others is key to building a strong educational community.",
    },
    {
      id: 3,
      title: "How to Organize Your Study Materials Effectively",
      date: "May 10, 2025",
      description:
        "Struggling to keep your study materials organized? Check out these tips to streamline your learning process.",
    },
    {
      id: 4,
      title: "The Future of Online Education: Trends to Watch",
      date: "May 5, 2025",
      description:
        "Explore the latest trends in online education and how platforms like EduVault are shaping the future of learning.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-slate-950 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          Stay updated with the latest news, tips, and insights from EduVault.
        </p>

        <div className="space-y-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-gray-100 mb-2">
                {blog.title}
              </h2>
              <p className="text-sm text-gray-400 mb-4">{blog.date}</p>
              <p className="text-gray-300 leading-relaxed mb-6">
                {blog.description}
              </p>
              <Link
                to={`/blog/${blog.id}`}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;