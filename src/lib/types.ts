export type Room = {
	id?: number
	price: number
	capacity: number
	rating: number
	discount?: number
	description: string
	image: File
}

export type FetchedRoom = {
	id: number
	price: number
	capacity: number
	rating: number
	discount: number
	description: string
	image: string
}
