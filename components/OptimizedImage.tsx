import React, { useState, useEffect } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

// 금융 서비스 톤앤매너에 맞는 기본 플레이스홀더 이미지 (Unsplash 랜드마크/금융 테마)
const DEFAULT_FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop';

export const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  containerClassName = '',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  // src가 외부에서 변경될 경우 상태 초기화
  useEffect(() => {
    setCurrentSrc(src || DEFAULT_FALLBACK_IMAGE);
    setHasError(false);
    setIsLoaded(false);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setCurrentSrc(DEFAULT_FALLBACK_IMAGE);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-slate-100 ${containerClassName}`}>
      {/* Skeleton / Loading State: 로딩 중이거나 에러 발생 후 대체 이미지 로드 전까지 표시 */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-200 animate-pulse z-10">
          <ImageIcon className="text-slate-300 w-8 h-8" />
        </div>
      )}

      {/* Actual Image */}
      <img
        src={currentSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        className={`
          transition-opacity duration-700 ease-in-out
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
          ${className}
        `}
        {...props}
      />

      {/* 에러가 발생했더라도 사용자에게 "불러올 수 없음" 텍스트를 직접 노출하지 않고 
          이미지 태그 자체가 Fallback 소스를 렌더링하도록 처리됨 */}
    </div>
  );
};