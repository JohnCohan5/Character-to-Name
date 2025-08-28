
import React, { useState, useEffect, useCallback } from 'react';
import { useUnicodeNames, CharacterName } from './hooks/useUnicodeNames';
import { CharacterInput } from './components/CharacterInput';
import { CharacterOutput } from './components/CharacterOutput';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [outputData, setOutputData] = useState<CharacterName[]>([]);
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4A90E2] to-[#A3CEF1] text-[#1E2A38] p-4 sm:p-8 selection:bg-[#357ABD] selection:text-white">

      <main className="container mx-auto max-w-4xl flex flex-col items-center justify-center min-h-screen py-12">
        <Header />

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
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
        
        {/* Information section with embedded ad */}
        <div className="mt-12 w-full bg-white rounded-xl shadow-lg p-6 border border-[#357ABD]/30">
          <h2 className="text-2xl font-bold text-[#1E2A38] mb-4">About Character to Name</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <p className="text-gray-700 mb-4">This tool helps you identify Unicode characters by displaying their official names. It's useful for:</p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>Developers working with internationalization</li>
                <li>Designers identifying special characters</li>
                <li>Anyone curious about symbols they encounter online</li>
              </ul>
              <p className="text-gray-700">Simply type or paste any character into the input field above, and you'll instantly see its Unicode name.</p>
            </div>
            
            {/* Google AdSense Ad Unit - now embedded within content */}
            <div className="md:w-[300px] flex justify-center">
              <ins className="adsbygoogle"
                   style={{ display: 'block', width: '300px', height: '250px' }}
                   data-ad-client="ca-pub-1105290192735497"
                   data-ad-slot="4567890123"
                   data-ad-format="auto"
                   data-full-width-responsive="true"></ins>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default App;
