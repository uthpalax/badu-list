import { GeneralErrorBoundary } from '#app/components/error-boundary.tsx'
import { SearchBar } from '#app/components/search-bar.tsx'
import { useDelayedIsPending } from '#app/utils/misc.tsx'
import { type Route } from './+types/index.ts'

export async function loader({ request }: Route.LoaderArgs) {
  return { status: 'idle' } as const
}

export default function UsersRoute({ loaderData }: Route.ComponentProps) {
  const isPending = useDelayedIsPending({
    formMethod: 'GET',
    formAction: '/users',
  })

  return (
    <div className="container mb-48 mt-36 flex flex-col items-center justify-center gap-6">
      <h1 className="text-h1">Epic Notes Users</h1>
      <div className="w-full max-w-[700px]">
        <SearchBar status={loaderData.status} autoFocus autoSubmit />
      </div>
      <main>
      </main>
    </div>
  )
}

export function ErrorBoundary() {
  return <GeneralErrorBoundary />
}
