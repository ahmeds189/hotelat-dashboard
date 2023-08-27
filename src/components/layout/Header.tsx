import { Button } from '@/components/ui/button'
import { useTheme } from '@/context/Theme'
import { Menu } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { Sidebar } from './Sidebar'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export const Header = () => {
	const { sheetDisplay, setSheetDisply } = useTheme()

	return (
		<>
			<ThemeToggle />

			<Sheet open={sheetDisplay} onOpenChange={setSheetDisply}>
				<SheetTrigger asChild>
					<Button
						variant='outline'
						size='icon'
						className='md:hidden'
						onClick={() => setSheetDisply(true)}
					>
						<Menu />
					</Button>
				</SheetTrigger>
				<SheetContent side='left'>
					<Sidebar />
				</SheetContent>
			</Sheet>
		</>
	)
}
