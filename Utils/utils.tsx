'use server'
import type { tasks } from '@prisma/client';
import { prisma } from '@/prisma/prisma';
import { transferableAbortSignal } from 'util';


export const createTask = async(task: tasks) =>{
    
    const {title, description, createdAt, important, due, completed} = task;

    task && console.log('creating task:' + task)

    try {
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
    } catch (error) {
        return 'error: ' + error
    }
    return 'task created';

}