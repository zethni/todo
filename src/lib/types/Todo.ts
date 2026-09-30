import type User from '$lib/types/User';

export default interface Todo {
	id: number;
	itemID: number;
	effort: number;
	priority: number;
	dueDate?: string | null;
	notes?: string;
	completed?: boolean;
	completedBy?: User[];
}

//
