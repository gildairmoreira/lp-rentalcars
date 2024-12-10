type WrapperProps = {
    children: React.ReactNode;
    className?: string
};

type NavLink = {
    path: string;
    label: string;
}

type CountUpProps = {
    start: number;
    end: number;
    duration: number;
}

type countUpItemsProps = {
    id: number;
    number: number;
    text: string
}

type ProjectProps = {
    id: number;
    img: string;
    name: string;
    des: string;
    detail: string[];
}

type ServiceProps = {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

type Skill = {
    name: string;
    level: number;
}

type SkillBarProps = {
    skills: Skill[];
}

type GalleryProps = {
    id: number;
    name: string;
    desc: string;
    image: string;
    link: string
}

type ContactsProps = {
    id: number;
    title: string;
    text: string;
}

export type {
    WrapperProps,
    NavLink,
    CountUpProps,
    countUpItemsProps,
    ProjectProps,
    ServiceProps,
    SkillBarProps,
    Skill,
    GalleryProps,
    ContactsProps
};