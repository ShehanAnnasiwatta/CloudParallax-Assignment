import { redirect } from '@sveltejs/kit'

export function load() {
    redirect(302, '/products/1')
}