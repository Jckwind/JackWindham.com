import { Metadata } from 'next';
import { GlobeIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Me } from '@/data/info';
import { ImageContainer } from '@/components/ui/image';

export const metadata: Metadata = {
  title: `${Me.name} | ${Me.about}`,
  description: Me.summary,
};

export default function Home() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-4xl font-bold">{Me.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground pr-10">
              {Me.about}
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {Me.contact.email ? (
                <Button className="size-8" variant="outline" size="icon" asChild>
                  <a href={`mailto:${Me.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {Me.contact.tel ? (
                <Button className="size-8" variant="outline" size="icon" asChild>
                  <a href={`tel:${Me.contact.tel}`}>
                    <PhoneIcon className="size-4" />
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
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              {Me.contact.email ? (
                <a href={`mailto:${Me.contact.email}`}>
                  <span className="underline">{Me.contact.email}</span>
                </a>
              ) : null}
              {Me.contact.tel ? (
                <a href={`tel:${Me.contact.tel}`}>
                  <span className="underline">{Me.contact.tel}</span>
                </a>
              ) : null}
            </div>
          </div>
          <ImageContainer large src="/SmilingEarth.JPG" className='mr-1'>
          </ImageContainer>
        </div>
        <Section>
          <h2 className="text-xl font-bold">Currently</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {Me.currently}
          </p>
        </Section>
      </section>
    </main>
  );
}
