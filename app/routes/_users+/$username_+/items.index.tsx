import { type Route } from './+types/items.index.ts'
import { type Info as itemsInfo } from './+types/items.ts'

export default function ItemsIndexRoute() {
  return (
    <div className="container pt-12">
      <p className="text-body-md">Select a note</p>
    </div>
  )
}

export const meta: Route.MetaFunction = ({ params, matches }) => {
  const notesMatch = matches.find(
    (m) => m?.id === 'routes/users+/$username_+/items',
  ) as { data: itemsInfo['loaderData'] }

  const displayName = notesMatch?.data?.owner.name ?? params.username
  const itemCount = notesMatch?.data?.owner.items.length ?? 0
  const itemsText = itemCount === 1 ? 'item' : 'items'
  return [
    { title: `${displayName}'s Items | Badu List` },
    {
      name: 'description',
      content: `Checkout ${displayName}'s ${itemCount} ${itemsText} on Epic Notes`,
    },
  ]
}
