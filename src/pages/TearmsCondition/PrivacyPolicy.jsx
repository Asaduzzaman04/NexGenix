import React from "react";
import { useNavigate } from "react-router";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 mt-20">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Privacy Policy for The NexGenix Ltd.
        </h1>
        <p className="text-gray-700 mb-4">
          At The NexGenix Ltd., we are committed to safeguarding the privacy and
          security of your personal data. This Privacy Policy outlines how we
          collect, use, and protect the information you provide to us through
          our platform and services. By interacting with us, you trust us with your
          data, and we take that responsibility seriously. Please read this policy
          carefully to understand how we process your information.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">What Information Do We Collect?</h2>
        <ul className="list-disc pl-5 text-gray-700 mb-4">
          <li>Your name</li>
          <li>Address</li>
          <li>Email address(es)</li>
          <li>Telephone number(s)</li>
          <li>Date of birth (where applicable)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-4">How Do We Collect Information?</h2>
        <p className="text-gray-700 mb-4">
          We collect your information through various means, including:
        </p>
        <ul className="list-disc pl-5 text-gray-700 mb-4">
          <li>When you contact us for inquiries related to our services or activities</li>
          <li>When you register for our platform or create an account with us</li>
          <li>When you request additional information or updates about our offerings</li>
          <li>When you subscribe to our newsletters or sign up for promotional content</li>
        </ul>
        <p className="text-gray-700 mb-4">
          By providing us with your personal information, you explicitly consent to us collecting and processing that data. We may also receive information about you from third-party sources, but only if you have granted those third parties permission to share such information with us.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-4">Confidentiality and Data Protection</h2>
        <p className="text-gray-700 mb-4">
          We are committed to maintaining the confidentiality and integrity of the information you provide. The NexGenix Ltd. does not accept responsibility for the privacy practices of external websites not managed by us, including those that may be linked through our website.
        </p>
        <p className="text-gray-700 mb-4">
          We employ a range of security measures to ensure the protection of your personal data from unauthorized access, alteration, disclosure, or destruction. We aim to be transparent about how your data is used and give you control over its processing.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-4">Making a Complaint</h2>
        <p className="text-gray-700 mb-4">
          If you have any concerns regarding how your personal data is handled by The NexGenix Ltd., please do not hesitate to reach out to us. You can contact our support team at
          <a href="mailto:nexgenix.info@gmail.com" className="text-blue-600 hover:underline ml-1">
            nexgenix.info@gmail.com
          </a>
          with a detailed explanation of your concerns. We will review the situation and aim to respond within 15 working days. In some cases, it may take longer, but we will keep you informed.
        </p>
        <p className="text-gray-700 mb-4">
          If you are not satisfied with the resolution provided, you have the right to contact the relevant data protection authority to escalate the matter.
        </p>
        
        <p className="text-gray-700 font-semibold mt-4">
          Thank you for trusting The NexGenix Ltd. with your personal information. Your privacy is our priority.
        </p>

        <button
          className="mt-6 bg-purple-900 text-white px-4 py-2 rounded-lg hover:bg-purple-950 transition-colors duration-200 eas"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
