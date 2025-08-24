
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

        <Footer />
      </main>
    </div>
  );
};

export default App;
