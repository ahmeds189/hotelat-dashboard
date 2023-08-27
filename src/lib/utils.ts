// @ts-nocheck

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function calcDicsount(price: number, discount: number): number {
	return price - parseInt((price * discount) / 100)
}
