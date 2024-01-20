import React from 'react';

import { Container } from '@/components/container';
import { NavLink } from '@/components/navigation';
import { routes } from '@/config/routes';

export const Footer = () => {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {routes.map((item) => (
                  <NavLink key={item.path} href={item.path}>
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <div>
                <p className="text-sm text-zinc-400 dark:text-zinc-500">
                  &copy; {new Date().getFullYear()} Jack Windham. All rights reserved.
                </p>
                <a
                  href="https://jarocki.me/"
                  className="text-sm underline underline-offset-2 text-zinc-400 dark:text-zinc-500"
                >
                  This website was inspired by Bartosz Jarocki and his website
                </a>
              </div>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  );
};
