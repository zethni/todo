import { fail } from '@sveltejs/kit';
import { PUBLIC_SITE_URL } from '$env/static/public';
export const actions = {
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
				redirectTo: PUBLIC_SITE_URL + '?resetpw'
			});

			return fail(400, { error: 'Please check your email for a password reset message.' });
			return;
		}

		const { data, error } = await supabase.auth.signInWithPassword({
			email: email,
			password: password
		});
		if (error) {
			return fail(400, { error: error.message });
		}
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
