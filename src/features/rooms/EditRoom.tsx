import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Settings2 } from 'lucide-react'
import { RoomForm } from './RoomForm'
import { useTheme } from '@/context/Theme'
import { Room } from '@/lib/types'

interface Props {
	room: Room
}

export const EditRoom = ({ room }: Props) => {
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
				<RoomForm roomValues={room} />
			</DialogContent>
		</Dialog>
	)
}
