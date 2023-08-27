import { createContext, useContext, useEffect, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'

type ThemeProviderProps = {
	children: React.ReactNode
	defaultTheme?: string
	storageKey?: string
}

type ThemeProviderState = {
	theme: string
	setTheme: (theme: string) => void
	sheetDisplay: boolean
	setSheetDisply: (sheetDisplay: boolean) => void
	dialogDisplay: boolean
	setDialogDisplay: (dialogDisplay: boolean) => void
}

const initialState = {
	theme: 'system',
	setTheme: () => null,
	sheetDisplay: false,
	setSheetDisply: () => null,
	dialogDisplay: false,
	setDialogDisplay: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
	children,
	defaultTheme = 'system',
	storageKey = 'vite-ui-theme',
	...props
}: ThemeProviderProps) {
	const [theme, setTheme] = useState(
		() => localStorage.getItem(storageKey) || defaultTheme
	)
	const [sheetDisplay, setSheetDisply] = useState(false)
	const [dialogDisplay, setDialogDisplay] = useState(false)
	const matches = useMediaQuery('(min-width: 768px)')

	if (matches && sheetDisplay) setSheetDisply(false)

	useEffect(() => {
		const root = window.document.documentElement

		root.classList.remove('light', 'dark')

		if (theme === 'system') {
			const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
				.matches
				? 'dark'
				: 'light'

			root.classList.add(systemTheme)
			return
		}

		root.classList.add(theme)
	}, [theme])

	const value = {
		theme,
		setTheme: (theme: string) => {
			localStorage.setItem(storageKey, theme)
			setTheme(theme)
		},
		sheetDisplay,
		setSheetDisply: () => setSheetDisply(!sheetDisplay),
		dialogDisplay,
		setDialogDisplay: () => setDialogDisplay(!dialogDisplay),
	}

	return (
		<ThemeProviderContext.Provider {...props} value={value}>
			{children}
		</ThemeProviderContext.Provider>
	)
}

export const useTheme = () => {
	const context = useContext(ThemeProviderContext)

	if (context === undefined)
		throw new Error('useTheme must be used within a ThemeProvider')

	return context
}
