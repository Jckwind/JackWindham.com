"use client";

import * as React from "react";
import Link from 'next/link';
import Image from 'next/image';

import { RESUME_DATA } from "@/data/resume_data";

import clsx from 'clsx';

type Props = {
  src?: string;
  alt?: string;
  large?: boolean;
} & React.HTMLAttributes<HTMLAnchorElement>;

export const Avatar = ({ src = RESUME_DATA.avatarUrl, alt = RESUME_DATA.name, large = false, className, ...props }: Props) => {
  return (
    <Link href="/" aria-label="Home" className={clsx(className, 'pointer-events-auto')} {...props}>
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        sizes={large ? '4rem' : '2.25rem'}
        className={clsx(
          'rounded-full object-cover bg-zinc-100 dark:bg-zinc-800',
          large ? 'h-16 w-16' : 'h-9 w-9',
        )}
        priority
      />
    </Link>
  );
};

export const AvatarContainer = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={clsx(
        className,
        'h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10',
      )}
      {...props}
    />
  );
};
