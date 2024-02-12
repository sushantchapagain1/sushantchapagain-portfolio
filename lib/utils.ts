import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...classNames: ClassValue[]) {
  return twMerge(clsx(classNames));
}

export function formatDate(publishedDate: string) {
  const date = new Date(publishedDate);

  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  }).format(date);
}
