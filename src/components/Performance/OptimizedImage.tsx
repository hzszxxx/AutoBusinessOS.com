'use client';

import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  placeholder = 'empty'
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate WebP and AVIF versions
  const getOptimizedSrc = (format: 'webp' | 'avif' | 'original' = 'original') => {
    if (format === 'original') return src;
    const ext = src.split('.').pop();
    return src.replace(`.${ext}`, `.${format}`);
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-400 text-sm">图片加载失败</span>
      </div>
    );
  }

  return (
    <picture className={`block ${className}`}>
      {/* AVIF format - best compression */}
      <source
        srcSet={getOptimizedSrc('avif')}
        type="image/avif"
      />

      {/* WebP format - good compression, wide support */}
      <source
        srcSet={getOptimizedSrc('webp')}
        type="image/webp"
      />

      {/* Original format as fallback */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        style={{
          aspectRatio: width && height ? `${width}/${height}` : undefined,
        }}
      />

      {/* Loading placeholder */}
      {!isLoaded && (
        <div
          className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`}
          style={{ width, height }}
        />
      )}
    </picture>
  );
}