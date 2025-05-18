const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-slate-950 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          At EduVault, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">1. Information We Collect</h2>
            <p className="text-gray-400 leading-relaxed">
              We collect the following types of information when you use EduVault:
            </p>
            <ul className="list-disc list-inside text-gray-400 mt-4">
              <li>Personal Information: Name, email address, and other details you provide during registration.</li>
              <li>Usage Data: Information about how you interact with our platform, such as pages visited and resources accessed.</li>
              <li>Uploaded Content: Any files or resources you upload to the platform.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-400 leading-relaxed">
              We use your information to:
            </p>
            <ul className="list-disc list-inside text-gray-400 mt-4">
              <li>Provide and improve our services.</li>
              <li>Personalize your experience on the platform.</li>
              <li>Communicate with you about updates, features, and support.</li>
              <li>Ensure the security and integrity of our platform.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">3. How We Protect Your Data</h2>
            <p className="text-gray-400 leading-relaxed">
              We take data security seriously and implement the following measures to protect your information:
            </p>
            <ul className="list-disc list-inside text-gray-400 mt-4">
              <li>Encryption: All sensitive data is encrypted during transmission and storage.</li>
              <li>Access Control: Only authorized personnel have access to your data.</li>
              <li>Regular Security Audits: We conduct regular audits to identify and address vulnerabilities.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">4. Sharing Your Information</h2>
            <p className="text-gray-400 leading-relaxed">
              We do not sell or share your personal information with third parties, except in the following cases:
            </p>
            <ul className="list-disc list-inside text-gray-400 mt-4">
              <li>With your explicit consent.</li>
              <li>To comply with legal obligations or enforce our terms of service.</li>
              <li>To trusted service providers who assist us in operating our platform.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">5. Your Rights</h2>
            <p className="text-gray-400 leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-400 mt-4">
              <li>Access and update your personal information.</li>
              <li>Request the deletion of your account and associated data.</li>
              <li>Opt out of receiving promotional communications.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">6. Changes to This Policy</h2>
            <p className="text-gray-400 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">7. Contact Us</h2>
            <p className="text-gray-400 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy, please contact us via the <a href="/contact" className="text-purple-400 hover:underline">Contact</a> page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;