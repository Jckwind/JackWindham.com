import React from 'react';

import { Container } from '@/components/container';
import { NavLink } from '@/components/navigation';
import { routes } from '@/config/routes';

export const Footer = () => {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-border/10 pt-10 pb-16">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-foreground">
                {routes.map((item) => (
                  <NavLink key={item.path} href={item.path}>
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <div>
                <p className="text-sm lg:text-center text-muted-foreground">
                  &copy; {new Date().getFullYear()} Jack Windham. All rights reserved.
                </p>
                <a
                  href="https://jarocki.me/"
                  className="text-sm lg:text-center underline underline-offset-2 text-muted-foreground"
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
