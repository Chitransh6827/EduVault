const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-slate-950 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          These Terms of Service govern your use of EduVault. By accessing or using our platform, you agree to comply with these terms.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">1. User Responsibilities</h2>
            <p className="text-gray-400 leading-relaxed">
              As a user of EduVault, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-400 mt-4">
              <li>Provide accurate and up-to-date information during registration.</li>
              <li>Maintain the confidentiality of your account credentials.</li>
              <li>Use the platform in compliance with all applicable laws and regulations.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">2. Acceptable Use</h2>
            <p className="text-gray-400 leading-relaxed">
              You agree not to use EduVault for any unlawful or prohibited activities, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-400 mt-4">
              <li>Uploading or sharing content that infringes on intellectual property rights.</li>
              <li>Distributing harmful or malicious software.</li>
              <li>Engaging in harassment, hate speech, or any form of abusive behavior.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">3. Intellectual Property</h2>
            <p className="text-gray-400 leading-relaxed">
              All content and materials on EduVault, including text, graphics, logos, and software, are the intellectual property of EduVault or its contributors. You may not reproduce, distribute, or create derivative works without explicit permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">4. Termination of Access</h2>
            <p className="text-gray-400 leading-relaxed">
              EduVault reserves the right to suspend or terminate your access to the platform if you violate these terms or engage in activities that harm the platform or its users.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-400 leading-relaxed">
              EduVault is not liable for any direct, indirect, incidental, or consequential damages arising from your use of the platform. Use EduVault at your own risk.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">6. Changes to Terms</h2>
            <p className="text-gray-400 leading-relaxed">
              EduVault reserves the right to update these Terms of Service at any time. Changes will be posted on this page, and your continued use of the platform constitutes acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">7. Contact Us</h2>
            <p className="text-gray-400 leading-relaxed">
              If you have any questions or concerns about these Terms of Service, please contact us via the <a href="/contact" className="text-purple-400 hover:underline">Contact</a> page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
