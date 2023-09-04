import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { MoreVertical } from 'lucide-react'
import { DeleteRoom } from './DeleteRoom'
import { EditRoom } from './EditRoom'
import { Room } from '@/lib/types'

interface Props {
	room: Room
}

export const CardActions = ({ room }: Props) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline' size='icon'>
					<MoreVertical />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='flex flex-col'>
				<DeleteRoom room={room} />
				<EditRoom room={room} />
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
