import prisma from '@/lib/prisma'
import { delay } from './utils'
import { cache } from 'react'

// export async function getTodosByUserId(userId: string) {
//   try {
//     await delay(1000)
//     const todos = await prisma.todo.findMany({ where: { userId } })
//     return { todos }
//   } catch (error) {
//     return { error }
//   }
// }

export const getTodosByUserId = cache(async function (userId: string) {
  try {
    await delay(1000)
    const todos = await prisma.todo.findMany({ where: { userId } })
    return { todos }
  } catch (error) {
    return { error }
  }
})

// export async function getTodos() {
//   try {
//     console.log('getTodos')
//     const todos = await prisma.todo.findMany()
//     return { todos }
//   } catch (error) {
//     return { error }
//   }
// }

export const getTodos = cache(async function () {
  try {
    console.log('getTodos')
    const todos = await prisma.todo.findMany()
    return { todos }
  } catch (error) {
    return { error }
  }
})

export async function createTodo(title: string, userId: string) {
  try {
    const todo = await prisma.todo.create({ data: { title, userId } })
    return { todo }
  } catch (error) {
    return { error }
  }
}

export async function getTodoById(id: string) {
  try {
    const todo = await prisma.todo.findUnique({ where: { id } })
    return { todo }
  } catch (error) {
    return { error }
  }
}

export async function updateTodo(id: string, isCompleted: boolean) {
  try {
    const todo = await prisma.todo.update({
      where: { id },
      data: { isCompleted }
    })
    return { todo }
  } catch (error) {
    return { error }
  }
}
