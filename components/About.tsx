import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h2 className="text-3xl font-bold text-[#1E2A38] mb-6">About Unicode Character Names</h2>
      
      <div className="prose prose-lg max-w-none text-[#1E2A38]">
        <p className="mb-6 text-lg leading-relaxed">
          Unicode is the universal character encoding standard that enables computers to represent and manipulate text 
          in any language. Every character in Unicode has an official name that describes what it represents, 
          making it easier for developers, designers, and linguists to work with text across different languages and scripts.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-[#357ABD]">Why Unicode Character Names Matter</h3>
        <ul className="mb-6 space-y-3">
          <li className="flex items-start">
            <span className="text-[#357ABD] mr-2">•</span>
            <span><strong>Accessibility:</strong> Screen readers and assistive technologies use character names to help visually impaired users understand content.</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#357ABD] mr-2">•</span>
            <span><strong>Development:</strong> Developers can identify and debug text-related issues by understanding character names and properties.</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#357ABD] mr-2">•</span>
            <span><strong>Typography:</strong> Designers can make informed decisions about font selection and text rendering across different languages.</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#357ABD] mr-2">•</span>
            <span><strong>Internationalization:</strong> Understanding character names helps in creating applications that work globally.</span>
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4 text-[#357ABD]">How Our Tool Works</h3>
        <p className="mb-4">
          Our Character to Name tool instantly converts any text input into the official Unicode character names. 
          Simply paste or type characters into the input field, and you'll see:
        </p>
        <ul className="mb-6 space-y-2">
          <li className="flex items-start">
            <span className="text-[#357ABD] mr-2">•</span>
            <span>The official Unicode name for each character</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#357ABD] mr-2">•</span>
            <span>Real-time conversion as you type</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#357ABD] mr-2">•</span>
            <span>Support for characters from all languages and scripts</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#357ABD] mr-2">•</span>
            <span>Easy copying of results for use in your projects</span>
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4 text-[#357ABD]">Supported Character Sets</h3>
        <p className="mb-4">
          Our tool supports a comprehensive range of Unicode characters, including:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <h4 className="font-semibold mb-2">Scripts & Languages:</h4>
            <ul className="space-y-1 text-sm">
              <li>• Latin (English, European languages)</li>
              <li>• Cyrillic (Russian, Bulgarian, Serbian)</li>
              <li>• Greek (Ancient and Modern Greek)</li>
              <li>• Hebrew (Hebrew script)</li>
              <li>• Arabic (Arabic script)</li>
              <li>• Chinese (Simplified and Traditional)</li>
              <li>• Japanese (Hiragana, Katakana, Kanji)</li>
              <li>• Korean (Hangul)</li>
              <li>• Thai, Devanagari, Bengali, Tamil</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Special Characters:</h4>
            <ul className="space-y-1 text-sm">
              <li>• Mathematical symbols</li>
              <li>• Currency symbols</li>
              <li>• Punctuation marks</li>
              <li>• Arrows and geometric shapes</li>
              <li>• Emoji and pictographs</li>
              <li>• Technical symbols</li>
              <li>• Diacritical marks</li>
              <li>• Control characters</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};