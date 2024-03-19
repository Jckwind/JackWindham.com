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
  title: `${Me.name} | ${Me.about}`,
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
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-4xl font-bold text-primary">{Me.name}</h1>
            <ReactMarkdown components={{ strong: ({ node, ...props }) => <span className='font-black text-primary' {...props} /> }} className="max-w-md text-pretty font-mono text-base text-muted-text pr-10">
              This website is my best effort at capturing who I am, professionally and as a person. **Enjoy**
            </ReactMarkdown> 
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-text print:hidden">
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
          <h2 className="text-2xl font-bold">Currently I am:</h2>
          <ul className="text-pretty font-mono text-base text-muted-text list-disc list-inside space-y-3">
            <li>Exploring Artificial Intelligence</li>
            <li>Working as a Senior Software Engineer</li>
            <li>Focused on my pursuit of happiness</li>
          </ul>
        </Section>
        <Section>
          <h2 className="text-2xl font-bold">You can:</h2>
          <ul className="text-pretty font-mono text-base text-muted-text space-y-3">
            <li>
              <Link href="/about" className="transition hover:text-primary/80 underline underline-offset-4">
                <ReactMarkdown components={{ strong: ({ node, ...props }) => <span className='font-black text-primary/80' {...props} /> }} className="text-muted-text/80 pr-10">
                  Learn more **about** me
                </ReactMarkdown> 
              </Link>
            </li>
            <li>
              <Link href="/resume" className="transition hover:text-primary/80 underline underline-offset-4">
                <ReactMarkdown components={{ strong: ({ node, ...props }) => <span className='font-black text-primary/80' {...props} /> }} className="text-muted-text/80 pr-10">
                  Read my **resume**
                </ReactMarkdown>
              </Link>
            </li>
            <li>
              <Link href="/resume" className="transition hover:text-primary/80  underline underline-offset-4">
                <ReactMarkdown components={{ strong: ({ node, ...props }) => <span className='font-black text-primary/80' {...props} /> }} className="text-muted-text/80 pr-10">
                  **Contact** me
                </ReactMarkdown>
              </Link>
            </li>
          </ul>
        </Section>
      </section>
    </main>
  );
}