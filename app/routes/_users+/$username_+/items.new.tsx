import { requireUserId } from '#app/utils/auth.server.ts'
import { type Route } from './+types/notes.new.ts'
import { NoteEditor } from './__item-editor.tsx'

export { action } from './__item-editor.server.tsx'

export async function loader({ request }: Route.LoaderArgs) {
  await requireUserId(request)
  return {}
}

export default NoteEditor
