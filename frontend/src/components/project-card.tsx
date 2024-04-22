import { Card, CardHeader, CardContent, CardDescription, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
}

export function ProjectCard({ title, description, tags, link }: Props) {
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
          <CardDescription className="font-mono text-xs pl-2">{description}</CardDescription>
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
