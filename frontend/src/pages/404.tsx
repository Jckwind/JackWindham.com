import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <div className="flex min-h-full flex-col pt-16 pb-12">
        <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="py-16">
            <div className="text-center">
              <p className="text-base font-semibold text-primary">404</p>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 text-balance">
                Page not found.
              </h1>
              <p className="mt-2 text-base text-gray-500">
                Sorry, we couldn&apos;t find the page you&apos;re looking for.
              </p>
              <div className="mt-6">
                <Link href="/" className="text-base font-medium hover:text-primary">
                  Go back home
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
