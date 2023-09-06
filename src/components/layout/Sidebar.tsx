import { Link, NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { useTheme } from '@/context/Theme'
import { ReactElement } from 'react'
import {
	LayoutGrid,
	CalendarRange,
	BedDouble,
	Users2,
	Settings,
} from 'lucide-react'

interface Routes {
	path: string
	id: number
	icon: ReactElement
}

const overview: Routes[] = [
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
const management: Routes[] = [
	{
		path: 'options',
		id: 4,
		icon: <Settings />,
	},
	{
		path: 'staff',
		id: 5,
		icon: <Users2 />,
	},
]

interface Props {
	heading: string
	links: Routes[]
}
const LinkesList = ({ heading, links }: Props) => {
	const { setSheetDisply } = useTheme()
	return (
		<ul className='mb-6'>
			<li className='text-gray-500 mb-4 text-sm'>{heading}</li>

			<ul className='flex flex-col gap-2'>
				{links.map((route: Routes) => (
					<li key={route.id}>
						<NavLink
							onClick={() => setSheetDisply(false)}
							className='flex items-center gap-4 rounded-md px-2 py-3 capitalize transition-colors text-muted-foreground [&.active]:text-indigo-500 hover:bg-gray-500/10 [&.active]:bg-indigo-500/10 [&.active]:hover:bg-indigo-500/20'
							to={route.path}
						>
							{route.icon}
							<span>{route.path}</span>
						</NavLink>
					</li>
				))}
			</ul>
		</ul>
	)
}

export const Sidebar = ({ className }: { className?: string }) => {
	const { setSheetDisply } = useTheme()

	return (
		<aside className={cn('px-2 duration-300 md:px-4 border-border', className)}>
			<div className='mb-6 grid h-[4.2rem] place-items-center'>
				<Link to='/' onClick={() => setSheetDisply(false)}>
					<img src='/bell.png' alt='bell logo' className='h-10' />
				</Link>
			</div>
			<LinkesList heading='overview' links={overview} />
			<LinkesList heading='management' links={management} />
		</aside>
	)
}
