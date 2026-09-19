import type User from '$lib/types/User';

export default interface Task {
	id: number;
	title: string;
	effort: number;
	priority: number;
	dueDate?: string | null;
	description?: string;
	completed?: boolean;
	completedBy?: User[];
}
