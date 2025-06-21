'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const useRoute = () => {
  const pathname = usePathname();

  useEffect(() => {
    const body = document.body;

    if (pathname === '/') {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }

    // Cleanup function để reset overflow khi component unmount
    return () => {
      body.style.overflow = 'auto';
    };
  }, [pathname]);

  return pathname;
}; 