
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
      <div className="flex flex-col items-center justify-center space-y-4 mb-8 p-6 bg-black/10 rounded-xl">
        <p className="font-medium text-lg">Enjoying this tool?</p>
        <p className="text-sm text-white/80">Consider supporting its development with a small donation.</p>

        {/* --- SELECTED CURRENCY DISPLAY --- */}
        <div className="w-full p-4 bg-black/20 rounded-lg flex flex-col items-center space-y-3 mt-2">
            <div className="flex items-center space-x-3">
                {currentCurrency.icon({ className: "w-8 h-8 text-white" })}
                <span className="text-xl font-semibold">{currentCurrency.name}</span>
            </div>
            
            <div 
                className="relative flex items-center space-x-3 bg-black/10 rounded-full py-2 px-4 font-mono cursor-pointer transition-colors hover:bg-black/30 w-full max-w-md"
                onClick={handleCopy}
                title="Click to copy address"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleCopy()}
            >
              <span className="truncate flex-1 text-left text-sm">{currentCurrency.address}</span>
              <div className="flex-shrink-0">
                {isCopied ? (
                    <span className="flex items-center text-green-400 text-sm">
                        <CheckIcon className="w-5 h-5 mr-1" />
                        Copied
                    </span>
                ) : (
                    <CopyIcon className="w-5 h-5" />
                )}
              </div>
            </div>
        </div>


        {/* --- CURRENCY DROPDOWN --- */}
        <div className="relative w-full max-w-xs pt-2" ref={dropdownRef}>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-center w-full px-4 py-2 bg-black/20 rounded-md transition-colors hover:bg-black/30 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <span>Change Currency</span>
            <ChevronDownIcon className={`w-5 h-5 ml-2 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute top-full mt-2 w-full bg-[#2c4059] rounded-md shadow-lg z-10 overflow-hidden animate-fade-in-down">
              <ul className="text-left max-h-64 overflow-y-auto divide-y divide-white/10">
                {(Object.keys(CURRENCIES) as CurrencyKey[]).map((key) => {
                  const currency = CURRENCIES[key];
                  return (
                    <li key={key}>
                      <button 
                        onClick={() => selectCurrency(key)}
                        className="w-full text-left p-3 hover:bg-[#357ABD]/50 transition-colors text-white/90 flex flex-col"
                      >
                        <div className="flex items-center space-x-3">
                          {currency.icon({ className: 'w-6 h-6 flex-shrink-0' })}
                          <span className="font-semibold">{currency.name}</span>
                        </div>
                        <span className="text-xs font-mono text-white/70 mt-1 pl-9 break-all">{currency.address}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
      
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
