'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export function PageLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const startLoading = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }

      setVisible(true);
      setProgress(12);

      timerRef.current = setInterval(() => {
        setProgress((current) => (current >= 82 ? current : current + Math.max(4, (88 - current) / 6)));
      }, 120);
    };

    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a[href]') as HTMLAnchorElement | null;

      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute('href');

      if (!href || href.startsWith('#') || anchor.target === '_blank' || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return;
      }

      if (href.startsWith('/') || href.startsWith(window.location.origin)) {
        startLoading();
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    setVisible(true);
    setProgress(100);

    const timeout = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 280);

    return () => clearTimeout(timeout);
  }, [pathname, searchParams]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-1 bg-transparent"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 180ms ease' }}
    >
      <div
        className="relative h-full rounded-r-full bg-gradient-to-r from-black via-gray-700 to-gray-500 transition-[width] duration-200 ease-out"
        style={{ width: `${progress}%`, boxShadow: '0 0 16px rgba(15,23,42,0.15)' }}
      >
        <span className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white opacity-90 blur-[1px]" />
        <span className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-gray-400/70 blur-md" />
      </div>
    </div>
  );
}
