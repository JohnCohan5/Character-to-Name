
import { useState, useEffect, useCallback } from 'react';
import { commonNames } from '../data/common-names';
import { extendedNames } from '../data/extended-names';
import { unicodeNames } from '../data/unicode-names';

export interface CharacterName {
  char: string;
  name: string;
}

// Simulating an async fetch for the extended character map
const fetchExtendedNames = (): Promise<Record<string, string>> => {
  return new Promise(resolve => {
    setTimeout(() => {
      // Merge all character maps, with unicode names taking precedence
      const mergedNames = {
        ...extendedNames,
        ...unicodeNames
      };
      resolve(mergedNames);
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
        // First try to get the name from our predefined maps
        name = commonNames[char] || extendedNamesMap[char];
        
        // If not found in our maps, try to get the Unicode code point and create a generic name
        if (!name) {
          const codePoint = char.codePointAt(0);
          if (codePoint) {
            const hexCode = codePoint.toString(16).toUpperCase().padStart(4, '0');
            name = `UNICODE CHARACTER U+${hexCode}`;
          } else {
            name = 'UNKNOWN CHARACTER';
          }
        }
      }
      return { char, name };
    });

    return names;
  }, [isLoading, extendedNamesMap]);

  return { convertTextToNames, isLoading };
};
