import { getTodosByUserId } from '@/lib/todos'
import { User as UserType } from '@prisma/client'

import Todos from '@/components/todos'

export default async function User({ user }: { user: UserType }) {
  const { todos = [] } = await getTodosByUserId(user.id)

  return (
    <section>
      <h2 className='mb-10 bg-gray-100 px-2 font-serif text-3xl font-bold'>
        {user.name}&apos;s Todos
      </h2>
      <Todos todos={todos} />
    </section>
  )
}
