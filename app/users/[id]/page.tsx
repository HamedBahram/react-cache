import User from '@/components/user'
import { getTodosByUserId } from '@/lib/todos'

import { getUser } from '@/lib/users'

export default async function Page({ params }: { params: { id: string } }) {
  getTodosByUserId(params.id)
  const { user } = await getUser(params.id)

  return (
    <section className='py-20'>
      <div className='container md:max-w-2xl'>
        {user ? <User user={user} /> : null}
      </div>
    </section>
  )
}
