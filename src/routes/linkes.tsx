import {
	LayoutGrid,
	CalendarRange,
	BedDouble,
	Users2,
	Settings,
} from 'lucide-react'
import { ReactElement } from 'react'

export interface Routes {
	path: string
	id: number
	icon: ReactElement
}

export const overview: Routes[] = [
	{
		path: 'Dashboard',
		id: 1,
		icon: <LayoutGrid />,
	},
	{
		path: 'rooms',
		id: 3,
		icon: <BedDouble />,
	},
	{
		path: 'bookings',
		id: 2,
		icon: <CalendarRange />,
	},
]

export const management: Routes[] = [
	{
		path: 'staff',
		id: 4,
		icon: <Users2 />,
	},
	{
		path: 'settings',
		id: 5,
		icon: <Settings />,
	},
]
