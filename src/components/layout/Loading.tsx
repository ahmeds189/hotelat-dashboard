// @ts-nocheck

import { useIsFetching } from '@tanstack/react-query'
import { cn } from '@/lib/utils'

export const Loading = () => {
	const isFetching = useIsFetching()

	return (
		<div
			className={cn(
				'block w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
				isFetching ? 'block' : 'hidden'
			)}
		>
			<svg
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'
				className='w-10 h-10 fill-indigo-600 animate-loading-spin'
			>
				<circle cx='12' cy='12' r='3' className='animate-bounce delay-300' />
				<g>
					<circle cx='4' cy='12' r='3' />
					<circle cx='20' cy='12' r='3' />
				</g>
			</svg>
		</div>
	)
}
