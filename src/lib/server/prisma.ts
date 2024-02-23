import { dev } from '$app/environment';
import { PrismaClient } from '@prisma/client';

const prisma: PrismaClient = global.prisma || new PrismaClient();

if (dev) global.prisma = prisma;

export default prisma;
