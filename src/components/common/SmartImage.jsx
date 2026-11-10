import { useState } from 'react';
import { imageSrcSet, imageUrl } from '../../data/images.js';
import { cn } from '../../utils/cn.js';

/**
 * Lazy, responsive image with a graceful branded fallback if the source fails.
 * The wrapper controls size; the image always covers it.
 */
export default function SmartImage({ src, alt = '', className, imgClassName, sizes = '100vw', width = 1600, priority = false, position, children }) {
  const [state, setState] = useState(src ? 'loading' : 'error');
  return (
    <div className={cn('relative overflow-hidden bg-midnight-800', className)}>
      {state === 'error' ? (
        <ImageFallback label={alt} />
      ) : (
        <img
          src={imageUrl(src, width)}
          srcSet={imageSrcSet(src)}
          sizes={sizes}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
          decoding="async"
          onLoad={() => setState('loaded')}
          onError={() => setState('error')}
          style={position ? { objectPosition: position } : undefined}
          className={cn('absolute inset-0 size-full object-cover transition-opacity duration-1000 ease-[var(--ease-luxe)]', state === 'loaded' ? 'opacity-100' : 'opacity-0', imgClassName)}
        />
      )}
      {children}
    </div>
  );
}

export function ImageFallback({ label }) {
  return (
    <div role={label ? 'img' : undefined} aria-label={label || undefined} className="hairline-grid absolute inset-0 bg-gradient-to-br from-midnight-700 via-midnight-800 to-midnight-950">
      <svg aria-hidden="true" className="absolute inset-0 size-full text-bronze-500/25" preserveAspectRatio="xMidYMid slice" viewBox="0 0 400 300" fill="none">
        <path d="M60 300V120h40v180M120 300V70h50v230M190 300V140h36v160M246 300V40h56v260M322 300V110h38v190" stroke="currentColor" strokeWidth="0.75" />
        <circle cx="330" cy="60" r="26" stroke="currentColor" strokeWidth="0.75" />
      </svg>
    </div>
  );
}
