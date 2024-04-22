import { Metadata } from 'next';
import { useEffect, useState } from 'react';
import { GlobeIcon, MailIcon, PhoneIcon } from 'lucide-react';
import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Me } from '@/data/info';
import { ImageContainer } from '@/components/ui/image';
import ReactMarkdown from 'react-markdown';

export const metadata: Metadata = {
  title: `${Me.name}`,
  description: Me.summary,
};

export default function Home() {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const birthDate = new Date('2000-08-11');
    const currentDate = new Date();
    const ageInMilliseconds = currentDate.getTime() - birthDate.getTime();
    const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
    setAge(ageInYears);
  }, []);

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-3xl md:text-4xl font-bold text-accent">{Me.name}</h1>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-text">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={Me.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {Me.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-text">
              {Me.contact.email ? (
                <Button className="size-8" variant="outline" size="icon" asChild>
                  <a href={`mailto:${Me.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {Me.contact.social.map((social) => (
                <Button key={social.name} className="size-8" variant="outline" size="icon" asChild>
                  <a href={social.url}>
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
          <ImageContainer large src="/SmilingEarth.JPG" className='mr-1'>
          </ImageContainer>
        </div>
        <Section>
          <h2 className="text-2xl md:text-3xl font-bold">I am:</h2>
          <ul className="text-pretty text-base list-disc text-muted-text space-y-3 pl-5">
            <li>
              creative
            </li>
            <li>
              ambitious
            </li>
            <li>
              building <a href="https://what-is-proxy.com" className="transition hover:text-accent underline underline-offset-4"> Proxy </a>
            </li>
          </ul>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-bold">You can:</h2>
          <ul className="text-pretty text-base list-disc text-muted-text space-y-3 pl-5">
            <li>
              <Link href="/resume" className="transition hover:text-accent underline underline-offset-4">
                Read my resume
              </Link>
            </li>
            <li>
              <Link href={`mailto:${Me.contact.email}`} className="transition hover:text-accent underline underline-offset-4">
                Email me
              </Link>
            </li>
          </ul>
        </Section>
      </section>
    </main>
  );
}