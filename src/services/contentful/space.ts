import { createClient } from 'contentful-management'

export const contenfulSpace = createClient({
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_KEY,
}).getSpace(import.meta.env.VITE_CONTENTFUL_ACCESS_KEY)
