import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function calcDicsount(price: number, discount: number): number {
	const calc = price - (price * discount) / 100
	return Number(calc.toFixed(2))
}
