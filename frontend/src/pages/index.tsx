import Head from 'next/head';

export default function Home() {
  return (
    <>
      <div className="flex min-h-full flex-col pt-16 pb-12">
        <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="py-16">
            <div className="text-center">
              <p className="text-base font-semibold text-muted-foreground">This website is actively being worked on :&#41;</p>
              <h1 className="text-4xl font-bold tracking-tight text-foreground text-balance">
                Jack Wind
              </h1>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
