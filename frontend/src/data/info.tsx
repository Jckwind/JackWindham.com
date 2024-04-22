import { LinkedIn, X } from '@/components/icons';
import { default as data } from '@/data/jack.json';

export const Me = {
    name: data.name,
    initials: data.initials,
    location: data.location,
    locationLink: data.locationLink,
    summary: data.summary,
    avatarURL: data.avatarUrl,
    personalWebsiteUrl: data.personalWebsiteUrl,
    contact: {
        email: data.contact.email,
        tel: data.contact.tel,
        social: [
            {
                name: 'LinkedIn',
                url: data.contact.socials.linkedin,
                icon: LinkedIn,
            },
            {
                name: 'X',
                url: data.contact.socials.twitter,
                icon: X,
            },
        ],
    },
    education: data.education,
    work: data.work,
    projects: data.projects,
    skills: data.skills
}