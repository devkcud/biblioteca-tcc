import prisma from '$lib/server/prisma';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
  addbooks: async () => {
    const books = [
      {
        title: 'The Lord of the Rings',
        synopsis: 'A very long book',
        author: 'J.R.R. Tolkien',
        publisher: 'HarperCollins',
        pages: 500,
      },
      {
        title: 'The Hobbit',
        synopsis: 'A very long book',
        author: 'J.R.R. Tolkien',
        publisher: 'HarperCollins',
        pages: 500,
      },
      {
        title: 'The Fellowship of the Ring',
        synopsis: 'A very long book',
        author: 'J.R.R. Tolkien',
        publisher: 'HarperCollins',
        pages: 500,
      },
      {
        title: 'The Two Towers',
        synopsis: 'A very long book',
        author: 'J.R.R. Tolkien',
        publisher: 'HarperCollins',
        pages: 500,
      },
      {
        title: 'The Return of the King',
        synopsis: 'A very long book',
        author: 'J.R.R. Tolkien',
        publisher: 'HarperCollins',
        pages: 500,
      },
      {
        title: 'The Silmarillion',
        synopsis: 'A very long book',
        author: 'J.R.R. Tolkien',
        publisher: 'HarperCollins',
        pages: 500,
      },
      {
        title: 'The Children of Hurin',
        synopsis: 'A very long book',
        author: 'J.R.R. Tolkien',
        publisher: 'HarperCollins',
        pages: 500,
      }
    ];

    for (const book of books) {
      await prisma.book.create({ data: book });
    }

    throw redirect(302, '/');
  }
};
