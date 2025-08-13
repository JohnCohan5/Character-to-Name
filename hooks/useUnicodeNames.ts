
import { useState, useEffect, useCallback } from 'react';
import { commonNames } from '../data/common-names';
import { extendedNames } from '../data/extended-names';

export interface CharacterName {
  char: string;
  name: string;
}

// Simulating an async fetch for the extended character map
const fetchExtendedNames = (): Promise<Record<string, string>> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(extendedNames);
    }, 500); // Simulate network delay
  });
};

export const useUnicodeNames = () => {
  const [extendedNamesMap, setExtendedNamesMap] = useState<Record<string, string> | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadNames = async () => {
      try {
        const names = await fetchExtendedNames();
        setExtendedNamesMap(names);
      } catch (error) {
        console.error("Failed to load extended Unicode names:", error);
        setExtendedNamesMap({}); // Set to empty to prevent retries
      } finally {
        setIsLoading(false);
      }
    };
    
    loadNames();
  }, []);

  const convertTextToNames = useCallback(async (text: string): Promise<CharacterName[]> => {
    if (isLoading || !extendedNamesMap) {
      return []; 
    }

    if (!text) {
      return [];
    }

    const characters = [...text]; // Use spread to handle multi-byte characters
    const names = characters.map(char => {
      let name = 'UNKNOWN CHARACTER';
      if (char === ' ') name = 'SPACE';
      else if (char === '\n') name = 'LINE FEED';
      else {
        name = commonNames[char] || extendedNamesMap[char] || 'UNKNOWN CHARACTER';
      }
      return { char, name };
    });

    return names;
  }, [isLoading, extendedNamesMap]);

  return { convertTextToNames, isLoading };
};
