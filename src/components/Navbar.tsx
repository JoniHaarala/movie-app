import Image from 'next/image'
import logo from '@/assets/logo.webp'
import Link from 'next/link'
import { ModeToggle } from './dm/dmToggle'

export const Navbar = () => {
    return (
        <nav className='w-full flex justify-center py-3 bg-gray-100 dark:bg-gray-900'>
            <div className='w-[1400px] flex justify-between items-center'>
                <Link href={'/'}>
                    <Image src={logo} alt='logo' height={100} />
                </Link>
                <div className='flex gap-5 pr-40'>
                <Link href={'/about'}>
                    About
                </Link>
                <Link href={'/about'}>
                    About 2
                </Link>
                <Link href={'/about'}>
                    About 3
                </Link>
                </div>
                <ModeToggle />
            </div>
        </nav>
    )
}
