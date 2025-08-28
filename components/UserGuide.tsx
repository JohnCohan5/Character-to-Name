import React from 'react';

export const UserGuide: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h2 className="text-3xl font-bold text-[#1E2A38] mb-6">Complete User Guide</h2>
      
      <div className="prose prose-lg max-w-none text-[#1E2A38]">
        <h3 className="text-2xl font-semibold mb-4 text-[#357ABD]">Getting Started</h3>
        <p className="mb-6 leading-relaxed">
          The Character to Name tool is designed to be intuitive and easy to use. Follow these simple steps 
          to convert any character into its official Unicode name:
        </p>

        <div className="bg-[#F7FAFC] p-6 rounded-lg mb-6 border-l-4 border-[#357ABD]">
          <h4 className="font-semibold mb-3 text-[#357ABD]">Step-by-Step Instructions:</h4>
          <ol className="space-y-3">
            <li className="flex items-start">
              <span className="bg-[#357ABD] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
              <span>Type or paste any text into the input field on the left side of the screen.</span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#357ABD] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
              <span>Watch as the character names appear instantly in the output field on the right.</span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#357ABD] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
              <span>Use the view toggle to switch between list view and text view for different formatting options.</span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#357ABD] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
              <span>Click the copy button to copy the results to your clipboard for use in other applications.</span>
            </li>
          </ol>
        </div>

        <h3 className="text-2xl font-semibold mb-4 text-[#357ABD]">Understanding Unicode</h3>
        <p className="mb-4">
          Unicode is a computing industry standard for consistent encoding, representation, and handling of text 
          expressed in most of the world's writing systems. Here's what you need to know:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-[#4A90E2]/10 p-6 rounded-lg">
            <h4 className="font-semibold mb-3 text-[#357ABD]">🌍 Universal Standard</h4>
            <p className="text-sm">
              Unicode provides a unique number for every character, regardless of platform, device, application, or language. 
              This ensures consistent text representation across all systems.
            </p>
          </div>
          <div className="bg-[#4A90E2]/10 p-6 rounded-lg">
            <h4 className="font-semibold mb-3 text-[#357ABD]">📝 Character Names</h4>
            <p className="text-sm">
              Every Unicode character has an official name that describes its purpose or appearance. 
              These names are standardized and used globally by developers and systems.
            </p>
          </div>
          <div className="bg-[#4A90E2]/10 p-6 rounded-lg">
            <h4 className="font-semibold mb-3 text-[#357ABD]">🔢 Code Points</h4>
            <p className="text-sm">
              Each character is assigned a unique code point (a number) in the Unicode standard. 
              For example, the letter 'A' has the code point U+0041.
            </p>
          </div>
          <div className="bg-[#4A90E2]/10 p-6 rounded-lg">
            <h4 className="font-semibold mb-3 text-[#357ABD]">🌐 Global Support</h4>
            <p className="text-sm">
              Unicode supports over 150 scripts and more than 140,000 characters, 
              covering virtually all languages in current use.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-4 text-[#357ABD]">Advanced Features</h3>
        
        <div className="space-y-6 mb-6">
          <div className="border border-[#357ABD]/20 rounded-lg p-6">
            <h4 className="font-semibold mb-3 text-[#1E2A38]">🔄 Real-time Conversion</h4>
            <p className="mb-3">
              The tool processes characters as you type, providing instant feedback without needing to click any buttons. 
              This makes it perfect for quick character identification during development or research.
            </p>
            <div className="bg-[#F7FAFC] p-3 rounded text-sm font-mono">
              Example: Type "Hello" → See "LATIN CAPITAL LETTER H", "LATIN SMALL LETTER E", etc.
            </div>
          </div>

          <div className="border border-[#357ABD]/20 rounded-lg p-6">
            <h4 className="font-semibold mb-3 text-[#1E2A38]">📋 Copy Functionality</h4>
            <p className="mb-3">
              Easily copy the results in your preferred format:
            </p>
            <ul className="space-y-2 text-sm">
              <li>• <strong>List View:</strong> Each character name on a separate line</li>
              <li>• <strong>Text View:</strong> All character names in a single line, separated by spaces</li>
            </ul>
          </div>

          <div className="border border-[#357ABD]/20 rounded-lg p-6">
            <h4 className="font-semibold mb-3 text-[#1E2A38]">🌍 Multilingual Support</h4>
            <p className="mb-3">
              The tool handles text in any language or script supported by Unicode, including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <strong>European:</strong><br/>
                English, French, German, Spanish, Italian, Russian, Greek
              </div>
              <div>
                <strong>Asian:</strong><br/>
                Chinese, Japanese, Korean, Thai, Hindi, Arabic, Hebrew
              </div>
              <div>
                <strong>Symbols:</strong><br/>
                Mathematical, Currency, Arrows, Punctuation, Emoji
              </div>
              <div>
                <strong>Technical:</strong><br/>
                Control characters, Formatting marks, Special spaces
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-4 text-[#357ABD]">Common Use Cases</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-semibold mb-3 text-[#1E2A38]">👨‍💻 For Developers</h4>
            <ul className="space-y-2 text-sm">
              <li>• Debugging text encoding issues</li>
              <li>• Validating input sanitization</li>
              <li>• Understanding character properties</li>
              <li>• Testing internationalization features</li>
              <li>• Creating accessible applications</li>
              <li>• Handling special characters in databases</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-[#1E2A38]">🎨 For Designers</h4>
            <ul className="space-y-2 text-sm">
              <li>• Choosing appropriate fonts</li>
              <li>• Ensuring proper character rendering</li>
              <li>• Creating multilingual designs</li>
              <li>• Understanding typography requirements</li>
              <li>• Selecting symbols and icons</li>
              <li>• Verifying character support</li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-4 text-[#357ABD]">Tips & Best Practices</h3>
        
        <div className="bg-[#4A90E2]/10 p-6 rounded-lg mb-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-[#357ABD] mr-2 mt-1">💡</span>
              <span><strong>Test with edge cases:</strong> Try unusual characters, emoji, or mathematical symbols to understand how your applications handle them.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#357ABD] mr-2 mt-1">💡</span>
              <span><strong>Use for documentation:</strong> Include character names in technical documentation to make it more accessible and searchable.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#357ABD] mr-2 mt-1">💡</span>
              <span><strong>Verify font support:</strong> Check if your chosen fonts support all the characters you need by testing their Unicode names.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#357ABD] mr-2 mt-1">💡</span>
              <span><strong>Accessibility testing:</strong> Use character names to understand how screen readers will interpret your content.</span>
            </li>
          </ul>
        </div>

        <h3 className="text-2xl font-semibold mb-4 text-[#357ABD]">Troubleshooting</h3>
        
        <div className="space-y-4">
          <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4 rounded-r-lg">
            <h4 className="font-semibold text-yellow-800 mb-2">Character shows as "UNKNOWN CHARACTER"</h4>
            <p className="text-yellow-700 text-sm">
              This means the character is not in our current database. The tool supports thousands of characters, 
              but some very rare or newly added Unicode characters might not be included yet.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-400 bg-blue-50 p-4 rounded-r-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Characters appear as boxes or question marks</h4>
            <p className="text-blue-700 text-sm">
              This is a font rendering issue. Your browser or system doesn't have a font that supports these characters. 
              The tool will still show the correct Unicode names.
            </p>
          </div>
          
          <div className="border-l-4 border-green-400 bg-green-50 p-4 rounded-r-lg">
            <h4 className="font-semibold text-green-800 mb-2">Copy function not working</h4>
            <p className="text-green-700 text-sm">
              Make sure your browser allows clipboard access. Some browsers require user interaction 
              (like clicking the copy button) to access the clipboard for security reasons.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};