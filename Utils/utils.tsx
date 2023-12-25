import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const createTask = async(task: any) =>{

    const [title, description, createdAt, important, due, completed] = task;

    await prisma.tasks.create({
        data: {
            title,
            description,
            createdAt,
            important,
            due,
            completed,
        },
    });

}