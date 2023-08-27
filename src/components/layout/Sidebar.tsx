// @ts-nocheck

import { Link, NavLink } from 'react-router-dom'
import { overview, management } from '@/routes/linkes'
import { cn } from '@/lib/utils'
import { useTheme } from '@/context/Theme'

const LinkesList = ({ heading, links }: LinksProps) => {
	const { setSheetDisply } = useTheme()
	return (
		<ul className='mb-6'>
			<li className='text-gray-500 mb-4 text-sm'>{heading}</li>
			<ul className='flex flex-col gap-2'>
				{links.map((route: any) => (
					<li key={route.id}>
						<NavLink
							onClick={() => setSheetDisply(false)}
							className='text-gray-500 flex items-center gap-4 rounded-md px-2 py-3 capitalize transition-colors dark:text-gray-400 [&.active]:text-indigo-500 hover:bg-gray-500/10 [&.active]:bg-indigo-500/10 [&.active]:hover:bg-indigo-500/20'
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

export const Sidebar = ({ className }: any) => {
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
