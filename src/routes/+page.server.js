import { fail } from '@sveltejs/kit';

export const actions = {
	/*
	 * TODO: REENGINEER THIS IF YOU ACTUALLY NEED PW RESETS, ETC, FOLLOWING THE PKCE FLOW HERE
	 * https://supabase.com/docs/guides/auth/passwords?queryGroups=flow&flow=pkce&queryGroups=framework&framework=sveltekit
	 */
	default: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email');
		if (!email) {
			return fail(400, { error: 'Email is required' });
		}
		const password = formData.get('password');
		const forgotPassword = formData.get('forgotPassword');
		if (forgotPassword) {
			// Handle forgot password logic here
			await supabase.auth.resetPasswordForEmail(email, {
				redirectTo: 'https://todo.next-iteration.net/?resetpw'
			});

			return fail(400, { error: 'Please check your email for a password reset message.' });
		}

		// m^Dr@h@]Gp9=jF2 <- local pw for me
		const { data, error } = await supabase.auth.signInWithPassword({
			email: email,
			password: password
		});
		if (error) {
			return fail(400, { error: error.message });
		}
		return { success: true, data: data };
	}
	// resetPassword: async ({ request }) => {
	// 	const formData = await request.formData();
	// 	const email = formData.get('email');
	// 	console.log({ email });
	// }
};

import { supabase } from '$lib/supabaseClient';
export async function load() {
	// const { data, error } = await supabase.from('instruments').select();
	// if (error) {
	// 	console.error('Error loading instruments:', error.message);
	// 	return { instruments: [], error: error.message };
	// }
	// console.log({ data });
	// return {
	// 	instruments: data ?? [],
	// 	error: null
	// };
}
