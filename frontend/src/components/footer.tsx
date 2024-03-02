import React from 'react';

import { Container } from '@/components/container';
import { NavLink } from '@/components/navigation';
import { routes } from '@/config/routes';

export const Footer = () => {
  return (
    <footer className="mt-1">
      <Container.Outer>
        <div className="border-t border-border/10 pt-8 pb-16">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-text">
                {routes.map((item) => (
                  <NavLink key={item.path} href={item.path}>
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <div className='flex flex-col'>
                <p className="text-sm text-center text-muted-text">
                  &copy; {new Date().getFullYear()} Jack Windham. All rights reserved.
                </p>
                <a
                  href="https://jarocki.me/"
                  className="text-sm text-center underline underline-offset-2 text-muted-text/50"
                >
                  This site is inspired by Bartosz Jarocki&#39;s work.
                </a>
              </div>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  );
};
