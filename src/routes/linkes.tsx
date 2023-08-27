import { LayoutGrid, CalendarRange, BedDouble, Users2, Settings } from 'lucide-react'

export const overview = [
	{
		path: 'Dashboard',
		id: 1,
		icon: <LayoutGrid />,
	},
	{
		path: 'bookings',
		id: 2,
		icon: <CalendarRange />,
	},
	{
		path: 'rooms',
		id: 3,
		icon: <BedDouble />,
	},
]

export const management = [
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
