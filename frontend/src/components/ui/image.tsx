import * as React from "react";
import Image from 'next/image';
import clsx from 'clsx';

import { Me } from "@/data/info";

type Props = {
    src?: string;
    alt?: string;
    large?: boolean;
} & React.HTMLAttributes<HTMLAnchorElement>;

export const ImageContainer = ({ src = Me.avatarURL, alt = Me.name, large = false, className, ...props }: Props) => {
    return (
      <Image
          src={src}
          alt={alt}
          width={500}
          height={500}
          sizes={large ? '10rem' : '2.25rem'}
          className={clsx(
            className,
            large ? 'h-[7rem] w-[7rem] lg:h-[10rem] lg:w-[10rem] shadow-[0_2px_10px_3px]' : 'h-10 w-10 shadow-[0_0_2px_2px]',
            'rounded-full object-cover text-center shadow-shadow/20',
          )}
          priority
        />
    )
  }