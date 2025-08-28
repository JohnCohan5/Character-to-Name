
import React, { useState, useEffect, useCallback } from 'react';
import { useUnicodeNames, CharacterName } from './hooks/useUnicodeNames';
import { CharacterInput } from './components/CharacterInput';
import { CharacterOutput } from './components/CharacterOutput';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { About } from './components/About';
import { Examples } from './components/Examples';
import { UserGuide } from './components/UserGuide';

const App: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [outputData, setOutputData] = useState<CharacterName[]>([]);
  const [activeSection, setActiveSection] = useState('tool');
  const { convertTextToNames, isLoading: namesAreLoading } = useUnicodeNames();

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const handleClear = () => {
    setInputText('');
    setOutputData([]);
  };

  const updateNames = useCallback(async (text: string) => {
    const names = await convertTextToNames(text);
    setOutputData(names);
  }, [convertTextToNames]);

  useEffect(() => {
    updateNames(inputText);
  }, [inputText, updateNames]);

  // Initialize Google AdSense ads when component mounts
  useEffect(() => {
    const adsbygoogle = (window as any).adsbygoogle;

    const adSlot = document.querySelector('ins.adsbygoogle');

    if (adsbygoogle && adSlot) {
      const handleAdLoad = () => {
        if (!adSlot.getAttribute('data-ad-loaded')) {
          try {
            adsbygoogle.push({});
            adSlot.setAttribute('data-ad-loaded', 'true');
          } catch (e) {
            console.error('AdSense push error:', e);
          }
        }
      };

      if (document.readyState === 'complete') {
        handleAdLoad();
      } else {
        window.addEventListener('load', handleAdLoad);
      }

      return () => {
        window.removeEventListener('load', handleAdLoad);
      };
    }
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'examples':
        return <Examples />;
      case 'guide':
        return <UserGuide />;
      case 'tool':
      default:
        return (
          <>
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-[#1E2A38] mb-4">Unicode Character Name Converter</h2>
              <p className="text-lg text-[#1E2A38]/80 mb-6 leading-relaxed">
                Convert any character into its official Unicode name instantly. This tool supports characters from all languages, 
                mathematical symbols, currency signs, punctuation marks, and special characters. Perfect for developers, 
                designers, linguists, and anyone working with international text.
              </p>
              
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                <CharacterInput
                  value={inputText}
                  onChange={handleInputChange}
                  onClear={handleClear}
                />
                <CharacterOutput
                  data={outputData}
                  isProcessing={namesAreLoading}
                />
              </div>
            </div>
            
            {/* Educational Content */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-[#1E2A38] mb-4">Why Use Unicode Character Names?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🌍</div>
                  <h4 className="font-semibold text-[#357ABD] mb-2">Universal Standard</h4>
                  <p className="text-sm text-[#1E2A38]/80">
                    Unicode provides consistent character representation across all platforms and languages worldwide.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">♿</div>
                  <h4 className="font-semibold text-[#357ABD] mb-2">Accessibility</h4>
                  <p className="text-sm text-[#1E2A38]/80">
                    Screen readers use character names to help visually impaired users understand content.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🔧</div>
                  <h4 className="font-semibold text-[#357ABD] mb-2">Development</h4>
                  <p className="text-sm text-[#1E2A38]/80">
                    Debug text issues, validate input, and ensure proper character handling in applications.
                  </p>
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4A90E2] to-[#A3CEF1] text-[#1E2A38] p-4 sm:p-8 selection:bg-[#357ABD] selection:text-white">
      <main className="container mx-auto max-w-6xl py-8">
        <Header />
        
        <Navigation 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
        
        {renderContent()}
        
        {/* Google AdSense Ad Unit */}
        <div className="mt-8 w-full flex justify-center">
          <ins className="adsbygoogle"
               style={{ display: 'block', width: '300px', height: '250px' }}
               data-ad-client="ca-pub-1105290192735497"
               data-ad-slot="4567890123"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>
        
        <Footer />
      </main>
    </div>
  );
};

export default App;
