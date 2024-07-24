import Link from 'next/link';
import { ImageContainer } from '@/components/ui/image';

export default function MomPage() {
    return (
        <div className="flex min-h-full flex-col pt-16 pb-12">
            <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
                <div className="py-16">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-balance">
                            Locket
                        </h1>
                        <p className="mt-2 text-base text-muted-text">
                            An app made with love for my mom
                        </p>
                        <div className="mt-6 flex justify-center">
                            <ImageContainer large src="/mom+papajackx512.jpg" className="mr-1" />
                        </div>
                        <div className="mt-6">
                            <a
                                href="itms-services://?action=download-manifest&url=https://jckwind.com/manifest.plist"
                                className="text-base font-medium text-accent hover:underline underline-offset-2"
                            >
                                Install App
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}