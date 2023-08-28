import { Badge } from '@/components/ui/badge'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from '@/components/ui/card'
import { calcDicsount } from '@/lib/utils'
import { CardActions } from './CardActions'
import { Room } from './api'

export const RoomCard = ({ room }: { room: Room }) => {
	const { description, price, capacity, rating, discount, image, id } = room

	const newPrice = calcDicsount(price, discount)

	const imageName = image.split('hotelat-images/')[1]

	return (
		<Card>
			<CardHeader className='mb-auto relative'>
				<img
					src={image || 'https://placehold.co/600x400'}
					alt={description}
					className='rounded-md mb-4'
				/>
				<CardDescription>{description}</CardDescription>
				<Badge className='absolute left-5 font-normal'>
					<span className='mr-1'>⭐</span>
					{rating}/5
				</Badge>
			</CardHeader>
			<CardContent>
				<Badge
					variant='outline'
					className='mb-1 text-xs text-muted-foreground font-normal'
				>
					{discount}% off
				</Badge>
				<p className='mb-4 font-medium'>
					${newPrice}
					<del className='text-xs text-muted-foreground ml-1 font-normal'>
						${price}
					</del>
				</p>
				<p className='flex items-center gap-3'>
					<span>👨‍👩</span>
					<span className='mr-auto font-normal'>{capacity}</span>
					<CardActions roomID={id} imageName={imageName} roomToEdit={room} />
				</p>
			</CardContent>
		</Card>
	)
}
