'use server'
import type { tasks } from '@prisma/client';
import { prisma } from '@/prisma/prisma';
import { transferableAbortSignal } from 'util';
import { Trykker } from 'next/font/google';


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

export async function updateTask(id: string, task: task){
    console.log('updating task id: ' + id)

    // const data = {}
    // let key: keyof task
    // Object.keys(task).forEach(key => {
    //     const value = task[key];
    //     console.log(`${key}: ${value}`);
    // });
    

    try {
        // await prisma.tasks.update({
        //     where: {
        //         id,
        //     },
        //     data
        // })
    } catch (error) {
        
    }
}