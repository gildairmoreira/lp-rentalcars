import { navLinks } from '@/Data/Data'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { HiOutlineMenuAlt4, HiX } from 'react-icons/hi'
import { IoLogoGooglePlaystore, IoLogoSkype, IoMailOpen } from 'react-icons/io5'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const pathname = usePathname()

    const socialIcons = "text-3xl px-2 bg-black text-White rounded-full cursor-pointer"

    const menuVariants = {
        hidden: {
            scale: 0
        },
        visible: {
            scale: 40,
            transition: {
                type: "spring",
                duration: 0.5,
            }
        }
    }

    const navLinkVariants = {
        hidden: {
            display: 'none',
            opacity: 0
        },
        visible: {
            opacity: 1,
            y: -30,
            scale: 1,
            transition: {
                duration: 0.7,
            }
        }
    }

    const isActive = (path: string) => {
        return pathname === path ? 'text-Red' : 'text-Black'
    }

    return (
        <header className='fixed w-full top-0 left-0 z-20 '>
            <nav className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${showMenu ? 'hidden' : ''}`}>
                <div className='flex items-center justify-between h-16'>
                    <Link href="/" className="text-Black text-3xl">
                        Maverick<span className='text-Red text-[48px]'>.</span>
                    </Link>
                    <div className='hidden md:flex items-center justify-center space-x-6'>
                        {
                            navLinks.map((link) => (
                                <Link key={link.path} href={link.path} className={isActive(link.path) + ' text-sm uppercase mx-4 hover:text-Red font-medium'}>
                                    {link.label}
                                </Link>
                            ))
                        }
                    </div>
                    <div className='flex md:hidden items-center'>
                        <HiOutlineMenuAlt4
                            className='md:hidden w-6 h-6 text-Black cursor-pointer'
                            onClick={() => setShowMenu(!showMenu)}
                        />

                    </div>
                </div>
            </nav>

            <motion.div
                variants={menuVariants}
                initial='hidden'
                animate={showMenu ? 'visible' : 'hidden'}
                className='bg-WhiteGray rounded-full fixed top-0 right-0 w-16 h-16'>
            </motion.div>

            <motion.nav
                variants={navLinkVariants}
                animate={showMenu ? 'visible' : 'hidden'}
                className='h-screen md:hidden flex flex-col justify-center'>
                {
                    navLinks.map(link => (
                        <Link
                            key={link.label}
                            href={link.path}
                            className={`px-3 py-2 flex justify-center text-1xl uppercase font-medium ${isActive(link.path)}`}
                            onClick={(prev) => setShowMenu(!prev)}>
                            {link.label}
                        </Link>
                    ))
                }
                <div className='mt-6 flex justify-center items-center flex-row gap-4'>
                    <Link
                        href={"https://googleplay.com"}
                        target={'_blank'}>
                        <IoLogoGooglePlaystore className={socialIcons} />
                    </Link>
                    <Link
                        href={"https://googleplay.com"}
                        target={'_blank'}>
                        <IoLogoSkype className={socialIcons} />
                    </Link>
                    <Link
                        href={"https://googleplay.com"}
                        target={'_blank'}>
                        <IoMailOpen className={socialIcons} />
                    </Link>
                </div>


                <HiX
                    className='absolute top-11 right-5 w-6 h-6 text-Black cursor-pointer'
                    onClick={(prev) => setShowMenu(!prev)}
                />
            </motion.nav>
        </header>
    )
}

export default Navbar