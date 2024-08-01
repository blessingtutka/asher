export interface Job {
    id: string;
    title: string;
    image?: string;
    description?: string;
    location?: string;
    salary?: number;
    status?: string;
    jobCategory?: string;
    jobType?: string;
    createdAt?: string;
    updatedAt?: string;
    employer?: { id?: string; profile?: string; name?: string; telephone?: string; userId?: string };
}

export interface Worker {
    image?: string;
    fullName: string;
    title: string;
    description?: string;
    experience?: string;
    responsibility?: string;
    email: string;
    phone: string;
    personalExperience?: string;
    skills: Skill[];
}

export interface Employer {
    profile?: string;
    name?: string;
    description?: string;
    type?: string;
    bio?: string;
    activity?: string;
    address?: string;
    telephone?: string;
    user?: { email?: string };
}

export interface Skill {
    name: string;
    percentage: number;
}
