import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const pages = await getCollection('pages');

  const searchIndex = pages.map(page => ({
    title: page.data.title,
    description: page.data.description || '',
    url: `/${page.slug}`,
    content: page.body.slice(0, 500), // First 500 chars for search
  }));

  // Add the home page
  searchIndex.unshift({
    title: 'Home',
    description: 'Sierra Conditions - Backcountry resources for the Sierra Nevada',
    url: '/',
    content: 'Sierra Nevada Condition Reports. Welcome to a collection of links & resources for those heading into the backcountry of the Sierra Nevada!',
  });

  return new Response(JSON.stringify(searchIndex), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
