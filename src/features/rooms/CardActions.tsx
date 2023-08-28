import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { MoreVertical } from 'lucide-react'
import { DeleteRoom } from './DeleteRoom'
import { EditRoom } from './EditRoom'
import { Room } from './api'

export const CardActions = ({
	roomID,
	imageName,
	roomToEdit,
}: {
	roomID: number
	imageName: string
	roomToEdit: Room
}) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline' size='icon'>
					<MoreVertical />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='flex flex-col'>
				<DeleteRoom roomID={roomID} imageName={imageName} />
				<EditRoom roomToEdit={roomToEdit} />
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
