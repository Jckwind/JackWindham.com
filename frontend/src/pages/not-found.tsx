import Link from 'next/link';
import Image from 'next/image';
import { ImageContainer } from '@/components/ui/image';

export default function NotFound() {
    return (
        <>
            <div className="flex min-h-full flex-col pt-16 pb-12">
                <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
                    <div className="py-16">
                        <div className="text-center">
                            <p className="text-base font-semibold text-primary">Uh oh</p>
                            <h1 className="text-4xl font-bold tracking-tight text-balance">
                                Page not found
                            </h1>
                            <p className="mt-2 text-base text-muted-foreground">
                                Here&apos;s my favorite picture of you and me :)
                            </p>
                            <div className="mt-6 flex justify-center">
                                <ImageContainer large src="/Earth.jpg" className='mr-1'>
                                </ImageContainer>
                            </div>
                            <div className="mt-6">
                                <Link href="/" className="text-base font-medium hover:text-accent hover:underline underline-offset-2">
                                    Go back
                                    <span aria-hidden="true"> &rarr;</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
