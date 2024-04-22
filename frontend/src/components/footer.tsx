import React from 'react';

import { Container } from '@/components/ui/container';
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
              </div>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  );
};
