import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Settings2 } from 'lucide-react'
import { RoomForm } from './RoomForm'
import { useTheme } from '@/context/Theme'

export const EditRoom = ({ room }: { room?: any }) => {
	const { dialogDisplay, setDialogDisplay } = useTheme()

	return (
		<Dialog open={dialogDisplay} onOpenChange={setDialogDisplay}>
			<DialogTrigger asChild>
				<Button className='gap-4 justify-start' variant='ghost'>
					<Settings2 />
					Edit
				</Button>
			</DialogTrigger>
			<DialogContent className='w-[95vw] rounded-md'>
				<RoomForm />
			</DialogContent>
		</Dialog>
	)
}
