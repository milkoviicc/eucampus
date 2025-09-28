'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { logoutThunk } from '../redux/features/authSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faGraduationCap, faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'

type User = {
  id: string
  email: string
  fullName: string
}

type Props = {
  user?: User | null
}

const UserMenu = ({ user }: Props) => {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!containerRef.current) return
      if (!containerRef.current.contains(e.target as Node)) setOpen(false)
    }
    function handleEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEsc)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEsc)
    }
  }, [])

  const handleLogout = () => {
    setOpen(false)
    dispatch(logoutThunk())
  }

  if (!user) {
    // Not logged in -> single login link/button
    return <Link href="/login">Login</Link>
  }

  // Logged in -> show name + dropdown
  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="inline-flex items-center gap-2 text-sm"
      >
        <span className="truncate max-w-[10rem]">{user.fullName}</span>
        <svg
          className={`w-4 h-4 transform transition-transform ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          aria-label="User menu"
          className="absolute right-0 mt-4 w-40 rounded-sm shadow-lg bg-[#394C62] text-white z-50"
        >
          <div className="py-1">
            <Link
              href="/lms?tab=cursos"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex gap-2 items-center px-4 py-2 text-sm hover:bg-[#2f3e50fb] transition duration-300"
            >
              <FontAwesomeIcon icon={faGraduationCap} />
              Courses
            </Link>

            <Link
              href="/lms?tab=perfil"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex gap-2 items-center px-4 py-2 text-sm hover:bg-[#2f3e50fb] transition duration-300"
            >
              <FontAwesomeIcon icon={faUser} />
              Profile
            </Link>

            <Link
              href="/lms?tab=ajustes"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex gap-2 items-center px-4 py-2 text-sm hover:bg-[#2f3e50fb] transition duration-300"
            >
              <FontAwesomeIcon icon={faGear} />
              Settings
            </Link>

            <button
              role="menuitem"
              onClick={handleLogout}
              className="w-full text-left flex gap-2 items-center px-4 py-2 text-sm hover:bg-[#2f3e50fb] transition duration-300"
            >
              <FontAwesomeIcon icon={faPowerOff} />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu
