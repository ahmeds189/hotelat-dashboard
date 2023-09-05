import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'
import { RoomForm } from './RoomForm'
import { useTheme } from '@/context/Theme'

export const NewRoom = () => {
	const { dialogDisplay, setDialogDisplay } = useTheme()

	return (
		<Dialog open={dialogDisplay} onOpenChange={setDialogDisplay}>
			<DialogTrigger asChild>
				<Button className='py-4 text-lg gap-3 bg-indigo-600 text-white font-semibold hover:bg-indigo-500'>
					<PlusCircle size={22} />
					<span>Add new</span>
				</Button>
			</DialogTrigger>
			<DialogContent className='rounded-md'>
				<RoomForm />
			</DialogContent>
		</Dialog>
	)
}
