import { Github, LinkedIn, X } from '@/components/icons';
import { default as data } from '@/data/jack.json';

export const Me = {
    name: data.name,
    initials: data.initials,
    location: data.location,
    locationLink: data.locationLink,
    about: data.home_tagline,
    summary: data.summary,
    home_tagline: data.home_tagline,
    resume_tagline: data.resume_tagline,
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