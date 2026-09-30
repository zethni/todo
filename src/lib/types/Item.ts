import type User from '$lib/types/User';

export default interface Item {
	id: number;
	title: string;
	notes?: string;
	effort: number;
	createdBy?: User[];
}
