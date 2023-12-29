'use server'
import type { tasks } from '@prisma/client';
import { prisma } from '@/prisma/prisma';
import { transferableAbortSignal } from 'util';


export const createTask = async(task: tasks) =>{
    
    const {title, description, createdAt, important, due, completed} = task;

    console.log('creating task:' + task)

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
        console.log('error creating task: ' + error)
        return 'error: ' + error
    }
    return 'task successfully created';

}

export const deleteTask = async(id: string) =>{

    try {
        await prisma.tasks.delete({
            where: {
                id,
            }
        })
    } catch (error) {
        console.log('error deleting task: ' + error)
        return 'error: ' + error
    }
    return 'task successfully deleted'
}