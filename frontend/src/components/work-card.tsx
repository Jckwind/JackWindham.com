import { Card, CardHeader, CardContent, CardDescription, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface Props {
    role: string;
    company: string;
    start: string;
    end: string;
    description: string;
    tech_stack: string[];
    title?: string;
}

export function WorkCard({ role, company, start, end, description, tech_stack }: Props) {
    return (
        <Card className="flex flex-col overflow-hidden bg-card border border-border/25 hover:text-accent hover:border-accent/25 p-3 md:pl-5">
            <CardHeader>
                <div className="space-y-1">
                    <CardTitle className="text-base">
                        {role} @ {company}
                    </CardTitle>
                    <div className="font-mono text-xs text-muted-text/50">
                        {start} - {end}
                    </div>
                    <CardDescription className="font-mono text-xs max-w-xl pl-2">{description}</CardDescription>
                </div>
            </CardHeader>
            <CardContent className="mt-2 flex flex-wrap gap-1">
                {
                    tech_stack.map((badge) => (
                        <Badge className="align-middle text-xs" key={badge}>
                            {badge}
                        </Badge>
                    ))
                }
            </CardContent>
        </Card>
    );
}