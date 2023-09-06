export type Room = {
	id: number
	price: number
	capacity: number
	rating: number
	discount: number
	description: string
	image: string
}

export type Options = {
	id: number
	min_days: number
	max_days: number
	max_guests_per_bookings: number
	breakfast_Price: number
}
