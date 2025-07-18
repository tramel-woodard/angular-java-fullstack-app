export interface Todo {
    id?: number;
    name: string;
    priority: string;
}

export const PRIORITIES: string[] = ['Low', 'Medium', 'High'];
