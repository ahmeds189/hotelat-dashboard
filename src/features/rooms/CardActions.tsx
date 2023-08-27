import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { MoreVertical } from 'lucide-react'
import { DeleteRoom } from './DeleteRoom'

export const CardActions = ({
	roomID,
	imageName,
}: {
	roomID: number
	imageName: string
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
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
