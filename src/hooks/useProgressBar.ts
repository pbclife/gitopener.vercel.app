import ProgressBar from '@badrap/bar-of-progress';
import Router from 'next/router';
import { useEffect } from 'react';

export default function useProgressBar(color: string | undefined) {
  useEffect(() => {
    const progress = new ProgressBar({
      className: 'bar-of-progress',
      color: color ?? `#16A34A`,
      delay: 80,
      size: 2,
    });
    Router.events.on('routeChangeStart', () => progress.start());
    Router.events.on('routeChangeComplete', () => progress.finish());
    Router.events.on('routeChangeError', () => progress.finish());
  });
}
