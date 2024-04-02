import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { GlobeIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Me } from '@/data/info';
import { ProjectCard } from '@/components/project-card';
import { ImageContainer } from '@/components/ui/image';

export const metadata: Metadata = {
  title: `${Me.name} | ${Me.about}`,
  description: Me.summary,
};

export default function About() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-4xl font-bold">{Me.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-text pr-10">
            This is going to be an informal about page.
            If you want to know me in a formal context, check my resume.
            </p>
          </div>
          <ImageContainer large className='mr-1' src="/me_sailboat.jpg">
          </ImageContainer>
        </div>
        <Section>
          <h2 className="text-2xl font-bold">Coming soon</h2>
          <p className="text-pretty font-mono text-sm text-muted-text">
            I have a lot going on, this is on the backburner for now.
          </p>
        </Section>
      </section>
    </main>
  );
}
