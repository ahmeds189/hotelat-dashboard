import { queryKeys } from '@/lib/constnts'
import { Options } from '@/lib/types'
import { supabase } from '@/supabase'
import { useQuery } from '@tanstack/react-query'

export async function getOptions(): Promise<Options> {
	const { data, error } = await supabase.from('options').select('*').single()

	if (error) throw new Error(error.message)

	return data
}

export function useOptions() {
	const { data: options } = useQuery({
		queryKey: [queryKeys.options],
		queryFn: getOptions,
	})

	return { options }
}
