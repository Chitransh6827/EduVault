const Community = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-slate-950 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-6">Community</h1>
        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          Join our vibrant community of learners and educators. Share resources, collaborate, and grow together.
        </p>

        {/* Community Highlights */}
        <div className="space-y-8">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-100 mb-2">
              Why Join Our Community?
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Our community is a hub for collaboration, knowledge sharing, and mutual growth. Whether you're a student, educator, or professional, you'll find value in connecting with like-minded individuals.
            </p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-100 mb-2">
              What You Can Do
            </h2>
            <ul className="list-disc list-inside text-gray-400 leading-relaxed">
              <li>Share your resources and help others learn.</li>
              <li>Collaborate on projects and assignments.</li>
              <li>Engage in discussions and exchange ideas.</li>
              <li>Get feedback and support from the community.</li>
            </ul>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-100 mb-2">
              How to Get Started
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Becoming a part of our community is easy! Simply sign up, create your profile, and start exploring. Share your knowledge, ask questions, and connect with others.
            </p>
            <div className="mt-4">
              <a
                href="/signup"
                className="inline-block px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;