import { cn } from '@/lib/utils'
import { useIsFetching } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'

export const Loading = () => {
	const isFetching = useIsFetching()

	return (
		<span
			className={cn(
				'rounded-md bg-muted p-4 py-3 flex items-center gap-3 shadow-md fill-mode-both duration-400',
				isFetching
					? 'animate-in fade-in slide-in-from-top'
					: 'animate-out fade-out slide-out-to-top'
			)}
		>
			<Loader2 className='animate-spin' />
			Loading...
		</span>
	)
}
