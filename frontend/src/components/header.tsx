import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef } from 'react';

import { Container } from '@/components/container';
import { MobileNavigation, DesktopNavigation } from '@/components/navigation';

export const Header = () => {
    return (
        <header className="sticky top-0 z-10 mb-2 md:mb-0">
            <Container className="flex items-center justify-between py-4">
                <div className="flex items-center">
                    <DesktopNavigation className="hidden md:flex" />
                    <MobileNavigation className="md:hidden" />
                </div>
            </Container>
        </header>
    );
};