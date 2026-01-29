import React, { useState, useEffect } from 'react';
import { X, Link as LinkIcon, Facebook, Twitter, Check } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, url, title }) => {
  const [copied, setCopied] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-2xl transform transition-all scale-100" 
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-slate-900">공유하기</h3>
          <button 
            onClick={onClose} 
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={shareToFacebook}
            className="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-[#1877F2]/5 hover:bg-[#1877F2]/10 transition-colors"
          >
            <div className="bg-[#1877F2] text-white p-2 rounded-full group-hover:scale-110 transition-transform">
              <Facebook size={20} fill="currentColor" className="stroke-none" />
            </div>
            <span className="text-sm font-semibold text-slate-700">Facebook</span>
          </button>
          <button
            onClick={shareToTwitter}
            className="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-slate-900/5 hover:bg-slate-900/10 transition-colors"
          >
             <div className="bg-black text-white p-2 rounded-full group-hover:scale-110 transition-transform">
              <Twitter size={20} fill="currentColor" className="stroke-none" />
            </div>
            <span className="text-sm font-semibold text-slate-700">X (Twitter)</span>
          </button>
        </div>

        <div className="relative">
          <label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">링크 복사</label>
          <div className="flex items-center gap-2 p-2 rounded-xl border border-slate-200 bg-slate-50 hover:border-slate-300 transition-colors">
            <LinkIcon size={16} className="text-slate-400 shrink-0 ml-1" />
            <input 
              type="text" 
              value={url} 
              readOnly 
              className="w-full bg-transparent text-sm text-slate-600 focus:outline-none truncate font-medium" 
            />
            <button
              onClick={handleCopy}
              className={`shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                copied 
                  ? 'bg-emerald-500 text-white shadow-emerald-500/30 shadow-sm' 
                  : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/30 shadow-sm'
              }`}
            >
              {copied ? <Check size={14} /> : null}
              {copied ? '복사됨' : '복사'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};