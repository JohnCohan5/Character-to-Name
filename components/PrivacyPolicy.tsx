import React from 'react';

export const PrivacyPolicy: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#1e2c3d] text-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-[#1e2c3d] p-4 border-b border-white/10 flex justify-between items-center">
          <h2 className="text-xl font-bold">Privacy Policy</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-black/20 rounded-full transition-colors"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <section>
            <h3 className="text-lg font-semibold mb-3">Introduction</h3>
            <p className="mb-4">
              This Privacy Policy explains how Character to Name ("we", "us", or "our") collects, uses, and shares information about you when you use our website and services.
            </p>
            <p className="mb-4">
              We respect your privacy and are committed to protecting your personal data. Please read this Privacy Policy carefully to understand our practices regarding your personal data.
            </p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-3">Information We Collect</h3>
            <p className="mb-2">We collect minimal information when you use our service:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>The text you input for conversion to Unicode character names</li>
              <li>Standard access logs and technical information, such as your IP address, browser type, and operating system</li>
              <li>Cookies and similar technologies used by our analytics and advertising providers</li>
            </ul>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-3">How We Use Your Information</h3>
            <p className="mb-2">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Personalize your experience</li>
              <li>Communicate with you about our services</li>
              <li>Protect against, identify, and prevent fraud and other illegal activity</li>
            </ul>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-3">Cookies and Similar Technologies</h3>
            <p className="mb-4">
              We use cookies and similar technologies to collect information about your activity, browser, and device. Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject cookies.
            </p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-3">Third-Party Services</h3>
            <p className="mb-4">
              We use Google AdSense to display advertisements on our website. Google AdSense may use cookies and similar technologies to serve ads based on your prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.
            </p>
            <p className="mb-4">
              You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Google's Ads Settings</a>.
            </p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-3">Data Retention</h3>
            <p className="mb-4">
              We store the information we collect for as long as is necessary for the purpose(s) for which we originally collected it. We may retain certain information for legitimate business purposes or as required by law.
            </p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-3">Your Rights</h3>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your personal information.
            </p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-3">Changes to This Privacy Policy</h3>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us.
            </p>
          </section>
        </div>
        
        <div className="sticky bottom-0 bg-[#1e2c3d] p-4 border-t border-white/10 flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};