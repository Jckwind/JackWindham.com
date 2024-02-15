import * as React from "react";
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

import { Me } from "@/data/info";

type Props = {
  src?: string;
  alt?: string;
  large?: boolean;
} & React.HTMLAttributes<HTMLAnchorElement>;

export const Avatar = ({ src = Me.avatarURL, alt = Me.name, large = false, className, ...props }: Props) => {
  return (
    <Link href="/" aria-label="Home" className={'pointer-events-auto'} {...props}>
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        sizes={large ? '10rem' : '2.25rem'}
        className={clsx(
          className,
          'rounded-full object-cover mr-10',
        )}
        priority
      />
    </Link>
  );
};

type Container_Props = {
  large?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const AvatarContainer = ({ large = false, className, ...props }: Container_Props) => {
  return (
    <div
      className={clsx(
        className,
        large ? 'h-[7rem] w-[7rem] lg:h-[10rem] lg:w-[10rem] p-1 shadow-[0_0_3px_3px]' : 'h-10 w-10 p-0.5 shadow-[0_0_2px_2px]',
        'rounded-full text-center bg-popover shadow-shadow/50',
      )}
      {...props}
    />
  );
};