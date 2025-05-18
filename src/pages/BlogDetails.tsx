import { useParams, Link } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams<{ id: string }>();

  const blogs = [
    {
      id: 1,
      title: "5 Tips to Maximize Your Learning with EduVault",
      date: "May 20, 2025",
      content: `
        EduVault is a powerful platform designed to enhance your learning experience. Here are five tips to help you make the most of it:
        
        1. **Use Advanced Search**: Take advantage of EduVault's advanced search filters to quickly find the resources you need. Filter by category, tags, or keywords to save time.
        
        2. **Organize Your Resources**: Create folders and categorize your resources for easy access. This will help you stay organized and focused.
        
        3. **Collaborate with the Community**: Join discussions, share your knowledge, and learn from others. Collaboration is key to expanding your understanding.
        
        4. **Bookmark Important Resources**: Use the bookmarking feature to save resources you frequently use or plan to revisit.
        
        5. **Stay Updated**: Regularly check for new resources and updates in your areas of interest. EduVault is constantly growing with user contributions.
        
        By following these tips, you can unlock the full potential of EduVault and take your learning to the next level.
      `,
    },
    {
      id: 2,
      title: "The Importance of Sharing Knowledge in Education",
      date: "May 15, 2025",
      content: `
        Sharing knowledge is a cornerstone of education and personal growth. Here's why it matters:
        
        1. **Fosters Collaboration**: Sharing resources and ideas encourages collaboration, leading to innovative solutions and deeper understanding.
        
        2. **Builds a Stronger Community**: When individuals share their expertise, it creates a supportive environment where everyone can thrive.
        
        3. **Enhances Learning**: Teaching others is one of the best ways to solidify your own understanding. By sharing knowledge, you reinforce your learning.
        
        4. **Promotes Accessibility**: Sharing resources ensures that valuable information is accessible to those who need it, breaking down barriers to education.
        
        EduVault provides a platform for users to share their knowledge and contribute to a global community of learners. Start sharing today and make a difference!
      `,
    },
    {
      id: 3,
      title: "How to Organize Your Study Materials Effectively",
      date: "May 10, 2025",
      content: `
        Staying organized is essential for effective learning. Here are some practical tips to help you organize your study materials:
        
        1. **Create a Digital Folder System**: Use EduVault's folder feature to categorize your resources by subject, topic, or project.
        
        2. **Use Descriptive Titles**: Name your files and folders with clear, descriptive titles to make them easy to find.
        
        3. **Prioritize Important Resources**: Keep frequently used materials in a dedicated folder for quick access.
        
        4. **Regularly Declutter**: Periodically review your resources and remove outdated or irrelevant materials to keep your collection manageable.
        
        5. **Leverage Tags and Keywords**: Use tags and keywords to label your resources, making them searchable and easy to locate.
        
        By implementing these strategies, you can save time, reduce stress, and focus on what matters most: learning.
      `,
    },
    {
      id: 4,
      title: "The Future of Online Education: Trends to Watch",
      date: "May 5, 2025",
      content: `
        Online education is evolving rapidly, and staying informed about emerging trends is crucial. Here are some key trends shaping the future of online learning:
        
        1. **Personalized Learning**: Adaptive learning technologies are enabling personalized education experiences tailored to individual needs and preferences.
        
        2. **Gamification**: Incorporating game-like elements into learning platforms is making education more engaging and interactive.
        
        3. **Microlearning**: Short, focused learning modules are becoming popular for their convenience and effectiveness.
        
        4. **Virtual and Augmented Reality**: Immersive technologies are providing hands-on learning experiences in virtual environments.
        
        5. **Global Collaboration**: Online platforms are connecting learners and educators from around the world, fostering cross-cultural collaboration.
        
        EduVault is at the forefront of these trends, providing tools and resources to help you stay ahead in the ever-changing landscape of online education.
      `,
    },
  ];

  const blog = blogs.find((blog) => blog.id === parseInt(id || "0"));

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-slate-950 text-gray-100 flex items-center justify-center">
        <p className="text-gray-400 text-lg">Blog not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-slate-950 text-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="text-sm text-gray-400 mb-6">{blog.date}</p>
        <p className="text-gray-300 leading-relaxed whitespace-pre-line">
          {blog.content}
        </p>
        <div className="mt-6">
          <Link
            to="/blog"
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;