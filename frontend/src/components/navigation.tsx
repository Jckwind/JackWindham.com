import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

import { routes } from '@/config/routes';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

// import { ChevronDownIcon } from './icons/ChevronDownIcon';
// import { CloseIcon } from './icons/CloseIcon';

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
          isActive ? 'text-accent' : 'hover:text-accent',
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
      <ul className="flex rounded-full bg-popover/90 px-3 text-sm font-medium text-popover-text shadow-[0_0_3px_3px] shadow-shadow/50 ring-1 ring-ring/5">
        {routes.map((item) => {
          if (item.isExternal == false) {
            return (
              <NavItem key={item.path} href={item.path}>
                {item.name}
              </NavItem>
            );
          }

          return (
            <a
              key={item.path}
              className="transition hover:text-accent px-3 py-2"
              href={item.path}
              target="_blank"
            >
              {item.name}
            </a>
          );
        })}
      </ul>
    </nav>
  );
};

export const MobileNavigation = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center rounded-full bg-popover/90 px-4 py-2 text-sm font-medium text-popover-text shadow-[0_0_2px_2px] shadow-shadow/50">
        Menu
        <FontAwesomeIcon
          icon={faBars}
          className="ml-3 h-auto w-2"
        ></FontAwesomeIcon>
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-popover p-8 shadow-[0_0_10px_2px] shadow-shadow/50 text-popover-text"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <FontAwesomeIcon
                  icon={faXmark}
                  className="h-6 w-6 text-popover-text/50"
                ></FontAwesomeIcon>
              </Popover.Button>
              <h2 className="text-sm font-medium">Menu</h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-accent/50 text-base">
                {routes.map((item) => (
                  <MobileNavItem key={item.path} href={item.path}>
                    {item.name}
                  </MobileNavItem>
                ))}
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
};
