const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-slate-950 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-6">About EduVault</h1>
        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          EduVault is a platform designed to empower students, educators, and professionals by providing access to a wide range of academic resources. Our mission is to make learning accessible, collaborative, and engaging for everyone.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          At EduVault, we believe that education is the key to unlocking potential. Our vision is to create a community-driven platform where knowledge is shared freely, fostering growth and innovation.
        </p>

        <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
        <ul className="list-disc list-inside text-gray-400 leading-relaxed mb-8">
          <li>Access to a vast library of academic resources, including documents, videos, and more.</li>
          <li>Tools for uploading and sharing your own resources with the community.</li>
          <li>Advanced search and filtering options to find exactly what you need.</li>
          <li>A user-friendly interface designed for seamless navigation and collaboration.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          EduVault is brought to life by a passionate and dedicated team of individuals who believe in the power of education:
        </p>
        <ul className="list-disc list-inside text-gray-400 leading-relaxed mb-8">
          <li><span className="font-semibold text-gray-100">Hussain Abbas</span> - Visionary and strategist behind EduVault.</li>
          <li><span className="font-semibold text-gray-100">Ankit Patel</span> - Backend wizard ensuring seamless functionality.</li>
          <li><span className="font-semibold text-gray-100">Chitransh Mall</span> - Frontend expert crafting intuitive user experiences.</li>
          <li><span className="font-semibold text-gray-100">Mayurika Singh</span> - Creative designer and content curator.</li>
        </ul>
        <p className="text-gray-400 leading-relaxed mb-8">
          Together, we are committed to building a platform that empowers learners and educators worldwide.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Inspiration</h2>
        <blockquote className="border-l-4 border-purple-500 pl-4 text-gray-400 italic leading-relaxed">
          "Education is the most powerful weapon which you can use to change the world." – Nelson Mandela
        </blockquote>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Join Us</h2>
        <p className="text-gray-400 leading-relaxed">
          Whether you're a student looking for study materials, an educator sharing your expertise, or a professional seeking to expand your knowledge, EduVault is here for you. Join our community today and start exploring!
        </p>
      </div>
    </div>
  );
};

export default About;