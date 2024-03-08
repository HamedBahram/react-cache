import prisma from '@/lib/prisma'
import { delay } from './utils'

export async function getUser(id: string) {
  try {
    await delay(1000)
    const user = await prisma.user.findUnique({ where: { id } })
    return { user }
  } catch (error) {
    return { error }
  }
}
