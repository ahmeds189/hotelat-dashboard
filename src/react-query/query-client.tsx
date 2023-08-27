import { QueryCache, QueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

export const queryClient = new QueryClient({
	queryCache: new QueryCache({
		onError: (error) => {
			if (error instanceof Error) toast.error(error.message)
		},
	}),
})
