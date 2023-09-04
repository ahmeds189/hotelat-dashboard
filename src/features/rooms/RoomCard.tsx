import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CardActions } from './CardActions'
import { calcDicsount } from '@/lib/utils'
import { Room } from '@/lib/types'

interface Props {
	room: Room
}

export const RoomCard = ({ room }: Props) => {
	const { description, price, capacity, rating, discount, image } = room
	const newPrice = calcDicsount(price, discount)

	return (
		<Card>
			<CardHeader className='mb-auto relative'>
				<div className='bg-[url(/placeholder.svg)] overflow-hidden rounded-md object-cover bg-center aspect-video w-full'>
					<img src={image} alt={description} className='w-full aspect-video' />
				</div>
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
						{discount ? `$${price}` : null}
					</del>
				</p>
				<div className='flex items-center gap-3'>
					<span>👨‍👩</span>
					<span className='mr-auto font-normal'>{capacity}</span>
					<CardActions room={room} />
				</div>
			</CardContent>
		</Card>
	)
}
