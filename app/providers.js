'use client';
import * as React from 'react';
import { RouterProvider } from "@heroui/react/rac";
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';

const Providers = ({ children }) => {
    const router = useRouter();
    return (
        <Suspense fallback={null}>
            <RouterProvider navigate={router.push}>
                {children}
          
            </RouterProvider>
        </Suspense>
    );
};

export default Providers;
