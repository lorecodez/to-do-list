'use server'

import type { tasks } from '@prisma/client';
import { prisma } from '@/prisma/prisma';
import bcrypt from 'bcryptjs';

export const createTask = async(task: any) =>{
    
    const {title, description, createdAt, important, due, completed, user_id} = task;

    console.log('creating task:' + task)

    try {
        await prisma.tasks.create({
            data: {
                user_id,
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

export async function completedTask(id: string){
    console.log('task completed id: ' + id)

    try {
        await prisma.tasks.update({
            where: {
                id,
            },
            data: {
                completed: true,
            }
        })
        return 'task successfully completed'
    } catch (error) {
        console.log('couldnt complete task error: ' + error);
        return 'couldnt complete task, error: ' + error
    }
}

export async function undoCompleted(id: string){
    console.log('undo completed task id: ' + id)

    try {
        await prisma.tasks.update({
            where: {
                id,
            },
            data: {
                completed: false,
            }
        })
        return 'undo task successfully completed'
    } catch (error) {
        console.log('couldnt undo completed task error: ' + error)
        return 'couldnt undo completed task, error: ' + error
    }
}

export async function isImportant(id: string){
    console.log('task is now important id: ' + id)

    try {
        await prisma.tasks.update({
            where: {
                id,
            },
            data: {
                important: true,
            }
        })
        return 'task is now important'
    } catch (error) {
        console.log('couldnt make task important error: ' + error);
        return 'couldnt change task, error: ' + error
    }
}

export async function notImportant(id: string){
    console.log('undo important task id: ' + id)

    try {
        await prisma.tasks.update({
            where: {
                id,
            },
            data: {
                important: false,
            }
        })
        return 'task is no longer important'
    } catch (error) {
        console.log('couldnt make task not important error: ' + error);
        return 'couldnt change task, error: ' + error
    }
}

export async function updateTask(id: string, task: any){
    console.log('updating task id: ' + id)

    const data = {...task}
    

    try {

        await prisma.tasks.update({
            where: {
                id,
            },
            data
        })

        console.log('task successfully updated')

        return 'task successfully updated'

    } catch (error) {
        console.log('task couldnt be updated error: ' + error)

        return 'task couldnt be updated error: ' + error
    }
}

export async function signUp(email: string, password: string, username: string){
    const user = await prisma.users.findUnique({
        where: {
            email,
        },
    });

    if(user){
        return 'User already exists';
    }

    const passwordHash = bcrypt.hashSync(password, 10);

    await prisma.users.create({
        data: {
            email,
            password: passwordHash,
            username,
        }
    })

    return 'Successfully created new user'
}