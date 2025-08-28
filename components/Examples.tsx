import React, { useState } from 'react';

export const Examples: React.FC = () => {
  const [activeExample, setActiveExample] = useState<number | null>(null);

  const examples = [
    {
      title: "Mathematical Symbols",
      description: "Identify mathematical operators and symbols for academic or technical documentation.",
      input: "∑∫∂∇∞≠≤≥±×÷",
      useCase: "Perfect for LaTeX documents, mathematical notation, or scientific publications."
    },
    {
      title: "Currency Symbols",
      description: "Understand different currency symbols from around the world.",
      input: "$€£¥₹₽₩₪₨₦",
      useCase: "Essential for international e-commerce, financial applications, or global business documents."
    },
    {
      title: "Multilingual Text",
      description: "Analyze text containing multiple languages and scripts.",
      input: "Hello مرحبا שלום こんにちは 안녕하세요",
      useCase: "Useful for internationalization testing, multilingual content management, or language learning applications."
    },
    {
      title: "Special Punctuation",
      description: "Identify various punctuation marks and their proper names.",
      input: "\"''‚„…–—•‰‱",
      useCase: "Important for typography, publishing, and proper text formatting in professional documents."
    },
    {
      title: "Arrows and Symbols",
      description: "Decode directional arrows and geometric symbols.",
      input: "←→↑↓↔↕⇐⇒⇑⇓◆◇○●",
      useCase: "Great for UI design, flowcharts, diagrams, or navigation elements."
    },
    {
      title: "Diacritical Marks",
      description: "Understand accent marks and diacritics used in various languages.",
      input: "àáâãäåæçèéêëìíîï",
      useCase: "Essential for proper pronunciation guides, language learning, or international name handling."
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h2 className="text-3xl font-bold text-[#1E2A38] mb-6">Practical Examples & Use Cases</h2>
      
      <p className="text-lg text-[#1E2A38] mb-8 leading-relaxed">
        Discover how the Character to Name tool can help you in various real-world scenarios. 
        Click on any example below to see how it works:
      </p>

      <div className="space-y-6">
        {examples.map((example, index) => (
          <div key={index} className="border border-[#357ABD]/20 rounded-lg overflow-hidden">
            <button
              onClick={() => setActiveExample(activeExample === index ? null : index)}
              className="w-full p-6 text-left bg-gradient-to-r from-[#4A90E2]/5 to-[#357ABD]/5 hover:from-[#4A90E2]/10 hover:to-[#357ABD]/10 transition-all duration-200"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold text-[#1E2A38] mb-2">{example.title}</h3>
                  <p className="text-[#1E2A38]/80">{example.description}</p>
                </div>
                <div className="text-[#357ABD] text-2xl">
                  {activeExample === index ? '−' : '+'}
                </div>
              </div>
            </button>
            
            {activeExample === index && (
              <div className="p-6 bg-white border-t border-[#357ABD]/20">
                <div className="mb-4">
                  <h4 className="font-semibold text-[#1E2A38] mb-2">Example Input:</h4>
                  <div className="bg-[#F7FAFC] p-4 rounded-lg border-2 border-[#357ABD]/20 font-mono text-lg">
                    {example.input}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-[#1E2A38] mb-2">Character Names:</h4>
                  <div className="bg-[#F7FAFC] p-4 rounded-lg border-2 border-[#357ABD]/20 text-sm space-y-1">
                    {example.input.split('').map((char, charIndex) => (
                      <div key={charIndex} className="flex items-center space-x-3">
                        <span className="font-mono text-lg w-8 text-center">{char}</span>
                        <span className="text-[#357ABD]">→</span>
                        <span className="text-[#1E2A38]">
                          {char === ' ' ? 'SPACE' : 
                           char === '∑' ? 'N-ARY SUMMATION' :
                           char === '∫' ? 'INTEGRAL' :
                           char === '∂' ? 'PARTIAL DIFFERENTIAL' :
                           char === '∇' ? 'NABLA' :
                           char === '∞' ? 'INFINITY' :
                           char === '≠' ? 'NOT EQUAL TO' :
                           char === '≤' ? 'LESS-THAN OR EQUAL TO' :
                           char === '≥' ? 'GREATER-THAN OR EQUAL TO' :
                           char === '±' ? 'PLUS-MINUS SIGN' :
                           char === '×' ? 'MULTIPLICATION SIGN' :
                           char === '÷' ? 'DIVISION SIGN' :
                           char === '$' ? 'DOLLAR SIGN' :
                           char === '€' ? 'EURO SIGN' :
                           char === '£' ? 'POUND SIGN' :
                           char === '¥' ? 'YEN SIGN' :
                           char === '₹' ? 'INDIAN RUPEE SIGN' :
                           char === '₽' ? 'RUBLE SIGN' :
                           char === '₩' ? 'WON SIGN' :
                           char === '₪' ? 'NEW SHEQEL SIGN' :
                           char === '₨' ? 'RUPEE SIGN' :
                           char === '₦' ? 'NAIRA SIGN' :
                           char === 'H' ? 'LATIN CAPITAL LETTER H' :
                           char === 'e' ? 'LATIN SMALL LETTER E' :
                           char === 'l' ? 'LATIN SMALL LETTER L' :
                           char === 'o' ? 'LATIN SMALL LETTER O' :
                           char === 'م' ? 'ARABIC LETTER MEEM' :
                           char === 'ر' ? 'ARABIC LETTER REH' :
                           char === 'ح' ? 'ARABIC LETTER HAH' :
                           char === 'ب' ? 'ARABIC LETTER BEH' :
                           char === 'ا' ? 'ARABIC LETTER ALEF' :
                           char === 'ש' ? 'HEBREW LETTER SHIN' :
                           char === 'ל' ? 'HEBREW LETTER LAMED' :
                           char === 'ו' ? 'HEBREW LETTER VAV' :
                           char === 'こ' ? 'HIRAGANA LETTER KO' :
                           char === 'ん' ? 'HIRAGANA LETTER N' :
                           char === 'に' ? 'HIRAGANA LETTER NI' :
                           char === 'ち' ? 'HIRAGANA LETTER TI' :
                           char === 'は' ? 'HIRAGANA LETTER HA' :
                           char === '안' ? 'HANGUL SYLLABLE AN' :
                           char === '녕' ? 'HANGUL SYLLABLE NYEONG' :
                           char === '하' ? 'HANGUL SYLLABLE HA' :
                           char === '세' ? 'HANGUL SYLLABLE SE' :
                           char === '요' ? 'HANGUL SYLLABLE YO' :
                           `${char.toUpperCase()} CHARACTER`}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-[#4A90E2]/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-[#1E2A38] mb-2">💡 Use Case:</h4>
                  <p className="text-[#1E2A38]/90">{example.useCase}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-[#4A90E2]/10 to-[#357ABD]/10 rounded-lg">
        <h3 className="text-xl font-semibold text-[#1E2A38] mb-3">Professional Applications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-[#357ABD] mb-2">For Developers:</h4>
            <ul className="space-y-1 text-sm text-[#1E2A38]/90">
              <li>• Debug text encoding issues</li>
              <li>• Validate internationalization</li>
              <li>• Handle special characters in databases</li>
              <li>• Create accessible applications</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#357ABD] mb-2">For Designers:</h4>
            <ul className="space-y-1 text-sm text-[#1E2A38]/90">
              <li>• Choose appropriate fonts</li>
              <li>• Ensure proper character rendering</li>
              <li>• Create multilingual designs</li>
              <li>• Understand typography requirements</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};