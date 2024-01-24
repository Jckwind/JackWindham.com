import Link from 'next/link';
import Image from 'next/image';

export default function Custom500() {
  return (
    <>
      <div className="flex min-h-full flex-col pt-16 pb-12">
        <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="py-16">
            <div className="text-center">
              <p className="text-base font-semibold text-primary">500</p>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 text-balance">
                Something went wrong
              </h1>
              <p className="mt-2 text-base text-gray-500">
                Anyway, here&apos;s my favorite picture of you and me
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-[10rem] h-[10rem] lg:w-[15rem] lg:h-[15rem] rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
                  <Image
                    fill
                    src="/Earth.jpg"
                    alt="A photorealistic picture of Earth from space"
                    sizes="(min-width: 1024px) 15rem, 10rem"
                    className="relative aspect-square rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
                  />
                </div>
              </div>
              <div className="mt-6">
                <Link href="/" className="text-base font-medium hover:text-primary">
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
