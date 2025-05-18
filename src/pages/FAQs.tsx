const FAQs = () => {
  const faqs = [
    {
      question: "What is EduVault?",
      answer:
        "EduVault is a platform that provides access to a wide range of academic resources, enabling students, educators, and professionals to learn, share, and grow together.",
    },
    {
      question: "How do I upload resources?",
      answer:
        "To upload resources, log in to your account, navigate to the 'Upload' section, and follow the instructions to add your files and details.",
    },
    {
      question: "Is EduVault free to use?",
      answer:
        "Yes, EduVault is free to use. However, some premium features may require a subscription in the future.",
    },
    {
      question: "Can I collaborate with others on EduVault?",
      answer:
        "Absolutely! EduVault encourages collaboration through its community features, allowing users to share resources and engage in discussions.",
    },
    {
      question: "How do I search for specific resources?",
      answer:
        "Use the search bar at the top of the page to enter keywords or filter by category to find the resources you need.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can contact support by visiting the 'Contact' page and filling out the form. Our team will get back to you as soon as possible.",
    },
    {
      question: "Is my data secure on EduVault?",
      answer:
        "Yes, we take data security seriously. Your information is encrypted and stored securely to ensure your privacy.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-slate-950 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          Find answers to common questions about EduVault.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-lg font-semibold text-gray-100 mb-2">
                {faq.question}
              </h2>
              <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;