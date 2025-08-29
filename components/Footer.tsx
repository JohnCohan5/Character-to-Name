
import React, { useState, useRef, useEffect } from 'react';
import { BitcoinIcon, CopyIcon, CheckIcon, EthereumIcon, SolanaIcon, ChevronDownIcon } from './Icons';
import { PrivacyPolicy } from './PrivacyPolicy';

// Define a type for the Icon component props
type IconProps = { className?: string };

// Define the structure for each currency
const CURRENCIES = {
  BTC: {
    name: 'Bitcoin',
    address: 'bc1q6jtrrt7946nf0dqwne20chte7er8nuu9d09zqj',
    icon: (props: IconProps) => <BitcoinIcon {...props} />
  },
  ETH: {
    name: 'Ethereum (ETH)',
    address: '0xfD4aF4C1A86A990db8507Bc13506117eedC19A3D',
    icon: (props: IconProps) => <EthereumIcon {...props} />
  },
  SOL: {
    name: 'Solana (SOL)',
    address: '4XvCSRhs2DQTvApaxDdaqzq7p6p3e1zzMHwQLxu8HhcD',
    icon: (props: IconProps) => <SolanaIcon {...props} />
  },
};
type CurrencyKey = keyof typeof CURRENCIES;

export const Footer: React.FC = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyKey>('BTC');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentCurrency = CURRENCIES[selectedCurrency];

  const handleCopy = async () => {
    if (isCopied) return;
    try {
      await navigator.clipboard.writeText(currentCurrency.address);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy address:", err);
    }
  };

  const selectCurrency = (currency: CurrencyKey) => {
    setSelectedCurrency(currency);
    setIsDropdownOpen(false);
    setIsCopied(false); // Reset copy status when currency changes
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <footer className="w-full max-w-2xl text-center mt-16 text-white/90">
      
      
      
      <div className="flex flex-col items-center space-y-2">
        <p className="text-white/70 text-sm">
          &copy; {new Date().getFullYear()} Character to Name. All Rights Reserved.
        </p>
        <button 
          onClick={() => setShowPrivacyPolicy(true)}
          className="text-sm text-blue-400 hover:underline"
        >
          Privacy Policy
        </button>
        {showPrivacyPolicy && <PrivacyPolicy onClose={() => setShowPrivacyPolicy(false)} />}
      </div>
    </footer>
  );
};

// Add a simple animation for the dropdown
const style = document.createElement('style');
style.textContent = `
  @keyframes fade-in-down {
    from {
      opacity: 0;
      transform: translateY(-10px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  .animate-fade-in-down {
    animation: fade-in-down 0.2s ease-out;
  }
`;
document.head.append(style);
