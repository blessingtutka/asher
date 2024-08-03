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
    profile?: string;
    firstName?: string;
    lastName?: string;
    bio?: string;
    title?: string;
    cvFile?: string;
    activity?: string;
    address?: string;
    telephone?: string;
    user?: { email?: string };
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
