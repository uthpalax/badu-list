import { requireAnonymous } from '#app/utils/auth.server.ts'
import { type Route } from './+types/index.ts'

export async function loader({ request }: Route.LoaderArgs) {
  await requireAnonymous(request)
  return {}
}
export default function Index() {
  return (
    <main className="font-poppins grid h-full place-items-center">
      <div className="grid place-items-center px-4 py-16">
        <div className="flex flex-col items-center text-center xl:order-2 xl:items-start xl:text-left">
        </div>
      </div>
    </main>
  )
}
