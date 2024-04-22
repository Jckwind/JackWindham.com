import { Popover } from '@headlessui/react';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { routes } from '@/config/routes';

export const NavLink = ({ href, children }: React.PropsWithChildren<{ href: string }>) => {
  return (
    <Link href={href} className="transition hover:text-accent">
      {children}
    </Link>
  );
};

const NavItem = ({ href, children }: React.PropsWithChildren<{ href: string }>) => {
  const isActive = useRouter().pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive ? 'text-popover-text' : 'text-popover-text/60 hover:text-popover-text',
        )}
      >
        {children}
      </Link>
    </li>
  );
};

export const MobileNavItem = ({ href, children }: React.PropsWithChildren<{ href: string }>) => {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  );
};

export const DesktopNavigation = (
  props: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>,
) => {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-popover/90 px-3 text-sm font-medium shadow-[0_2px_10px_3px] shadow-shadow/20">
        {routes.map((item) => {
          return (
            <NavItem key={item.path} href={item.path}>
              {item.name}
            </NavItem>
          );
        })}
      </ul>
    </nav>
  );
};

export const MobileNavigation = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-popover/90 px-3 text-sm font-medium shadow-[0_2px_10px_3px] shadow-shadow/20">
        {routes.map((item) => {
          return (
            <NavItem key={item.path} href={item.path}>
              {item.name}
            </NavItem>
          );
        })}
      </ul>
    </nav>
  );
};
