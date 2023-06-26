export interface Todo{
    title: string;
    description: string;
    completed: boolean;
    archived: boolean;
    endDate: Date | number | string;
    selected: boolean;
}