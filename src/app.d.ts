declare global {
  var prisma: PrismaClient;

  interface Book {
    id: number;
    title: string;
    synopsis: string;
    author: string;
    publisher: string;
    pages: number;
    publishedAt: Date;
    createdAt: Date;
    updatedAt: Date;
  }
}

export {};
