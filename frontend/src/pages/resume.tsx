import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { GlobeIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Me } from '@/data/info';
import { ProjectCard } from '@/components/project-card';
import { WorkCard } from '@/components/work-card';
import { ImageContainer } from '@/components/ui/image';
import ReactMarkdown from 'react-markdown';

export const metadata: Metadata = {
  title: `${Me.name} Resume`,
  description: Me.summary,
};

export default function Resume() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
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
          </div>
          <ImageContainer large className='mr-1' src="/me_stairs.jpg">
          </ImageContainer>
        </div>
        <Section>
          <h2 className="text-2xl md:text-3xl font-bold">About</h2>
          <div className="text-pretty font-mono text-sm text-muted-text max-w-lg pl-2">
            {Me.summary}
          </div>
        </Section>
        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-2xl font-bold">Projects</h2>
          {Me.projects.map((project) => {
            return (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                start={project.start}
                end={project.end}
                tags={project.techStack}
                link={'link' in project ? project.link : undefined}
              />
            );
          })}
        </Section>
        <Section>
          <h2 className="text-2xl md:text-3xl font-bold">Work</h2>
          {Me.work.map((work) => {
            return (
              <WorkCard
                key={work.company}
                role={work.role}
                company={work.company}
                start={work.start}
                end={work.end}
                description={work.description}
                tech_stack={work.tech_stack}
              />
            );
          })}
        </Section>
        <Section>
          <h2 className="text-2xl md:text-3xl font-bold">Education</h2>
          {Me.education.map((education) => {
            return (
              <WorkCard
                key={education.school}
                role={education.degree}
                company={education.school}
                start={education.start}
                end={education.end}
                description={education.description}
                tech_stack={[]}
              />
            );
          })}
        </Section>
      </section>
    </main>
  );
}

