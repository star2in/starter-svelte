/** @type {import('./$types').PageLoad} */
import getDirectusInstance from '$libs/directus';
import { readItems } from '@directus/sdk';
export async function load({ fetch }) {
	const directus = getDirectusInstance(fetch);
	return {
		global: await directus.request(readItems('global')),
	};
}