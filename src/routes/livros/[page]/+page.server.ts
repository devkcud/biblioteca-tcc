import type { PageServerLoad } from './$types';
import prisma from '$lib/server/prisma';
import { redirect } from '@sveltejs/kit';

const BOOKS_PER_PAGE = 1;

export const load: PageServerLoad = async ({ params }) => {
  const page = parseInt(params.page);

  if (isNaN(page) || page < 1) {
    throw redirect(302, '/livros/1');
  }

  const total = await prisma.book.count();
  const quantityInPage = await prisma.book.count({
    skip: (page - 1) * BOOKS_PER_PAGE,
    take: BOOKS_PER_PAGE
  });

  if (quantityInPage === 0) {
    throw redirect(302, `/livros/${Math.ceil(total / BOOKS_PER_PAGE)}`);
  }

  return {
    books: await prisma.book.findMany({ skip: (page - 1) * BOOKS_PER_PAGE, take: BOOKS_PER_PAGE }),
    pages: Math.ceil(total / BOOKS_PER_PAGE)
  };
};
