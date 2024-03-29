import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { GlobeIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Me } from '@/data/info';
import { ProjectCard } from '@/components/project-card';
import { ImageContainer } from '@/components/ui/image';
import ReactMarkdown from 'react-markdown';

export const metadata: Metadata = {
  title: `${Me.name} | ${Me.about}`,
  description: Me.summary,
};

export default function Resume() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-4xl font-bold text-primary">{Me.name}</h1>
            <ReactMarkdown components={{ strong: ({node, ...props}) => <span className='font-black text-primary' {...props} /> }} className="max-w-md text-pretty font-mono text-base text-muted-text pr-10">
              {Me.resume_tagline}
            </ReactMarkdown> 
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
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-text print:hidden">
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
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-text print:flex">
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
          <ImageContainer large className='mr-1' src="/me_stairs.jpg">
          </ImageContainer>
        </div>
        <Section>
          <h2 className="text-3xl font-bold">About</h2>
          <ReactMarkdown className="text-pretty font-mono text-sm text-muted-text">
            {Me.summary}
          </ReactMarkdown> 
        </Section>
        <Section>
          <h2 className="text-3xl font-bold">Work</h2>
          {Me.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={work.link}>
                        {work.role} @ {work.company}
                      </a>

                      <span className="inline-flex gap-x-1 ml-1">
                        {work.badges.map((badge) => (
                          <Badge variant="outline" className="align-middle text-xs" key={badge}>
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm tabular-nums text-muted-text hidden md:block">
                      {work.start} - {work.end}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none">{work.title}</h4>
                  <div className="text-sm tabular-nums text-muted-text md:hidden">
                    {work.start} - {work.end}
                  </div>
                </CardHeader>
                <CardContent className="mt-2 text-xs">{work.description}</CardContent>
                <CardContent className="mt-2 flex flex-wrap gap-1">
                  {
                    work.tech_stack.map((badge) => (
                      <Badge className="align-middle text-xs" key={badge}>
                        {badge}
                      </Badge>
                    ))
                  }
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-2xl font-bold">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-2 print:gap-2 md:grid-cols-2">
            {Me.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.short_description}
                  tags={project.techStack}
                  link={'link' in project ? project.link : undefined}
                />
              );
            })}
          </div>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          {Me.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">{education.school}</h3>
                    <div className="text-sm tabular-nums text-muted-text hidden md:block">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <div className="text-sm tabular-nums text-muted-text md:hidden">
                  {education.start} - {education.end}
                </div>
                <CardContent className="mt-2 text-muted-text">{education.degree}</CardContent>
                <CardContent className="mt-2">{education.description}</CardContent>
              </Card>
            );
          })}
        </Section>
      </section>
      <Section>
        <h2 className="text-2xl font-bold">Skills</h2>
        {Object.entries(Me.skills).map(([category, skills]) => {
          return (
            <>
              <h3 className="font-semibold leading-none text-base text-muted-text">{category}</h3>
              <div className="flex flex-wrap gap-1">
                {
                  skills.map((skill) => {
                    return <Badge key={skill}>{skill}</Badge>;
                  })
                }
              </div>
            </>
          )
        })}
      </Section>
    </main>
  );
}

