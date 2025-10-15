'use client'

import clsx from 'clsx'
import { useState, useEffect } from 'react'

import { MenuItems } from './MenuItems'
import { MenuIcon, Plus } from 'lucide-react'
import Link from 'next/link'
import { ConnectButton } from './ConnectButton'

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [bannerVisible, setBannerVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    const dismissed = localStorage.getItem('betaBannerDismissed')
    setBannerVisible(dismissed !== 'true')

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={clsx('fixed left-0 right-0 top-0 w-full z-50 transition-all duration-200', {
        'bg-[#12121266] backdrop-blur-xl': menuOpen || scrolled,
        'bg-transparent': !scrolled && !menuOpen,
      })}
    >
      <div
        className={clsx('max-w-full mx-auto flex items-center p-[11px] xl:p-4 justify-between', {
          'pt-[10px]': !bannerVisible,
        })}
      >
        <div className="flex items-center flex-1">
          <Link
            className="block mr-1 xl:mr-4 flex-shrink-0"
            href="/"
          >
            <div className="relative w-8 h-11">TODOs</div>
          </Link>

          <div className="hidden xl:block w-full">
            <MenuItems menuOpen={menuOpen} />
          </div>
        </div>

        <div className="hidden xl:block ms-auto">
          <ConnectButton />
        </div>
        <button
          className="xl:hidden flex-shrink-0 ml-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <Plus className="rotate-45 block" /> : <MenuIcon />}
        </button>

        {/* <Link
          className="block ml-3 xl:ml-4 flex-shrink-0"
          href={YOUTUBE_VIDEO_URL}
          target="_blank"
        >
          <YoutubeIcon size={32} />
        </Link>

        <Link
          href={X_URL}
          aria-label="Twitter/X"
          target="_blank"
          className="ms-3"
        >
          <Image
            src="/icons/x.svg"
            width={22}
            height={22}
            alt="x"
          />
        </Link> */}
      </div>
      {menuOpen && (
        <div className="xl:hidden px-[11px] pb-4">
          <div className="py-4">
            <MenuItems menuOpen={menuOpen} />
          </div>
          <div className="mt-4 flex justify-center">
            <ConnectButton />
          </div>
        </div>
      )}
    </header>
  )
}
