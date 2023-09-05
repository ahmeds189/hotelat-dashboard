import { Button } from '@/components/ui/button'
import { Edit, Files } from 'lucide-react'
import { DeleteRoom } from './DeleteRoom'
import { Room } from '@/lib/types'

interface Props {
	room: Room
}

export const CardActions = ({ room }: Props) => {
	return (
		<div className='flex space-x-3'>
			<Button size='icon' variant='outline'>
				<Files />
			</Button>
			<Button size='icon' variant='outline'>
				<Edit />
			</Button>
			<DeleteRoom roomToDelete={room.id} />
		</div>
	)
}
