import Image from 'next/image'
import logo from '@/assets/logo.webp'
import Link from 'next/link'

export const Navbar = () => {
    return (
        <nav className='w-full flex justify-center py-3 bg-white'>
            <div className='w-[1400px] flex justify-between items-center'>
                <Link href={'/'}>
                    <Image src={logo} alt='logo' height={100} />
                </Link>
                <Link href={'/about'}>
                    About
                </Link>
            </div>
        </nav>
    )
}
