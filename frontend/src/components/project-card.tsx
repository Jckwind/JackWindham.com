import { Card, CardHeader, CardContent, CardDescription, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface Props {
  title: string;
  description: string;
  start: string;
  end: string;
  tags: readonly string[];
  link?: string;
}

export function ProjectCard({ title, description, start, end, tags, link }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden p-3 bg-card border border-border/25 hover:text-accent hover:border-accent/25">
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="text-base">
            {link ? (
              <a
                href={link}
                target="_blank"
                className="inline-flex items-center gap-1 hover:underline"
              >
                {title}
              </a>
            ) : (
              title
            )}
          </CardTitle>
          <div className="font-mono text-xs text-muted-text/50">
            {start} - {end}
          </div>
          <CardDescription className="font-mono text-xs max-w-xl pl-2">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-2 flex flex-wrap gap-1 bottom-0">
        {
          tags.map((badge) => (
            <Badge className="align-middle text-xs" key={badge}>
              {badge}
            </Badge>
          ))
        }
      </CardContent>
    </Card>
  );
}
