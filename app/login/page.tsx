'use client'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { faArrowLeft, faArrowRight, faEnvelope, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import {
  clearAuthState,
  loginThunk,
  registerThunk,
  setAuthFromCookie,
} from '../redux/features/authSlice'
import { useRouter } from 'next/navigation'
import { getCookie } from '../lib/cookies'

const Login = () => {
  const [currentView, setCurrentView] = useState('Welcome')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [fullName, setFullname] = useState('')
  const router = useRouter()

  const dispatch = useAppDispatch()

  const { loading, error, isAuthenticated, user } = useAppSelector((state) => state.auth)

  useEffect(() => {
    const checkAuth = async () => {
      const authCookie = await getCookie() // returns AuthCookie | null
      if (authCookie) {
        if (!authCookie.isAuthenticated) {
          dispatch(clearAuthState())
        } else {
          dispatch(setAuthFromCookie(authCookie))
        }
      } else {
        dispatch(clearAuthState())
      }
    }

    checkAuth()
  }, [dispatch])

  useEffect(() => {
    setEmail('')
    setPassword('')
    setFullname('')
  }, [currentView])

  const getStrength = (pass: string) => {
    let score = 0
    if (!pass) return score
    if (pass.length > 5) score++
    if (pass.length > 8) score++
    if (/[A-Z]/.test(pass)) score++
    if (/[0-9]/.test(pass)) score++
    if (/[^A-Za-z0-9]/.test(pass)) score++
    return Math.min(score, 5)
  }

  const strength = getStrength(password)

  const strengthLabels = ['Too Weak', 'Weak', 'Good', 'Strong', 'Best']
  const strengthColors = [
    'bg-red-500',
    'bg-orange-400',
    'bg-lime-400',
    'bg-green-500',
    'bg-green-700',
  ]

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await dispatch(loginThunk({ email, password })).unwrap()
      router.push('/')
    } catch (err) {
      console.error('Login error:', err)
    }
    /*
    if(email && password) {
      try {
        const res = await axios.post('/login', {email, password});

        if(res.data) {
          setUser(res.data);
        }
      } catch(error) {
        console.error(error);
      }
    }
      */
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await dispatch(registerThunk({ email, password, fullName })).unwrap()
      router.push('/')
    } catch (err) {
      console.error('Login error:', err)
    }
    /*
    if(email && password) {
      try {
        const res = await axios.post('/register', {email, password, register});

        if(res.data) {
          setUser(res.data);
        }
      } catch(error) {
        console.error(error);
      }
    }
      */
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#fafafa]">
      <div className="relative bg-white flex flex-col justify-center items-center text-center py-35 px-75">
        {currentView === 'Welcome' ? (
          <>
            <Link href="/" className="absolute top-5 right-5">
              <FontAwesomeIcon icon={faX} className="w-3" />
            </Link>
            <h1 className="font-semibold text-[40px]">Bienvenido</h1>
            <p className="text-sm py-4 text-[#7A7A7A]">
              Inicie sesión para acceder a su formación de
              <br /> la EU
            </p>
            <button
              onClick={() => setCurrentView('Login')}
              className="relative flex justify-start items-center bg-primary text-white w-full py-1 hover:opacity-90 transform duration-300"
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" className="w-5 m-3" />
              <span className="font-[300] flex-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Iniciar sesión
              </span>
            </button>
            <div className="flex items-center text-sm gap-2 mt-12">
              <p className="text-[#7A7A7A]">¿No tienes cuenta?</p>
              <button
                onClick={() => setCurrentView('Register')}
                className="flex items-center gap-2 group"
              >
                Regístrate aquí
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="w-5 cursor-pointer group-hover:transform group-hover:translate-x-[5px] transition duration-300"
                />
              </button>
            </div>
          </>
        ) : currentView === 'Login' ? (
          <>
            <Link href="/" className="absolute top-5 right-5">
              <FontAwesomeIcon icon={faX} className="w-3" />
            </Link>
            <h1 className="font-semibold text-[40px]">Iniciar sesión</h1>
            <p className="text-sm text-center py-4 text-[#7A7A7A]">
              Para iniciar sesión introduzca la dirección de
              <br /> correo electrónico asociada a su cuenta y la
              <br /> contraseña.
            </p>

            <form
              method="POST"
              onSubmit={handleLogin}
              className="flex flex-col gap-2 w-full text-left mt-5"
            >
              <label htmlFor="email" className="font-semibold text-sm">
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="px-2 py-1 text-sm border-b-[2] border-[rgba(0,0,0,0.08)] focus:outline-none focus:border-black transition duration-300"
              />
              <div className="relative w-full">
                <label htmlFor="password" className="font-semibold text-sm">
                  Contraseña
                </label>
                <button
                  type="button"
                  onClick={() => setCurrentView('ForgotPassword')}
                  className="absolute top-1/2 transform -translate-y-1/2 right-0 text-xs text-[#7A7A7A]"
                >
                  He olvidado la contraseña
                </button>
              </div>
              <div className="relative w-full">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-2 py-1 text-sm border-b-[2] border-[rgba(0,0,0,0.08)] focus:outline-none focus:border-black transition duration-300"
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="absolute right-1 top-2 cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              </div>
              <input
                type="submit"
                value={loading ? '...' : 'Iniciar sesión'}
                className="flex justify-center items-center bg-primary text-white w-full py-3 font-[400] hover:opacity-90 transform duration-300 cursor-pointer"
              />
              {error && <p className="text-red-500">{error}</p>}
            </form>
            <div className="flex items-center text-sm gap-2 mt-12">
              <button
                onClick={() => setCurrentView('Welcome')}
                className="flex items-center gap-2 group"
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="w-5 cursor-pointer group-hover:transform group-hover:-translate-x-[5px] transition duration-300"
                />
                Todas las opciones de inicio de sesión
              </button>
            </div>
          </>
        ) : currentView === 'Register' ? (
          <>
            <Link href="/" className="absolute top-5 right-5">
              <FontAwesomeIcon icon={faX} className="w-3" />
            </Link>
            <h1 className="font-semibold text-[40px]">Únete a EU Campus</h1>
            <p className="text-sm py-4">
              Inicia sesión para conectarte y revisar tu
              <br />
              cuenta y avanzar en tu formación
            </p>
            <form
              method="POST"
              onSubmit={handleRegister}
              className="flex flex-col gap-2 w-full text-left mt-5"
            >
              <label htmlFor="email" className="font-semibold text-sm">
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="px-2 py-1 text-sm border-b-[2] border-[rgba(0,0,0,0.08)] focus:outline-none focus:border-black transition duration-300"
              />
              <label htmlFor="password" className="font-semibold text-sm">
                Contraseña
              </label>

              <div className="relative w-full">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-2 py-1 text-sm border-b-[2] border-[rgba(0,0,0,0.08)] focus:outline-none focus:border-black transition duration-300"
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="absolute right-1 top-2 cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              </div>
              <div className="mt-2">
                <div className="flex items-center gap-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 flex-1 rounded ${
                        !password
                          ? 'bg-gray-200'
                          : i <= strength
                            ? strengthColors[strength]
                            : 'bg-gray-200'
                      }`}
                    />
                  ))}
                  <p className="text-xs text-gray-600 uppercase">
                    {password ? strengthLabels[strength] : ''}
                  </p>
                </div>
              </div>
              <label htmlFor="fullName" className="font-semibold text-sm mt-4">
                Nombre completo
              </label>
              <input
                type="text"
                value={fullName}
                required
                onChange={(e) => setFullname(e.target.value)}
                className="w-full px-2 py-1 text-sm border-b-[2] border-[rgba(0,0,0,0.08)] focus:outline-none focus:border-black transition duration-300"
              />
              <input
                type="submit"
                value="Crear cuenta"
                className="flex justify-center items-center bg-primary text-white w-full py-3 font-[400] hover:opacity-90 transform duration-300 cursor-pointer"
              />
              {error && <p className="text-red-500">{error}</p>}
              {isAuthenticated && <p className="text-green-500">Welcome {user?.fullName}</p>}
            </form>
            <div className="flex items-center text-sm gap-2 mt-12">
              <p className="text-[#7A7A7A]">¿Ya tiene una cuenta?</p>
              <button
                onClick={() => setCurrentView('Welcome')}
                className="flex items-center gap-2 group"
              >
                Iniciar sesión
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="w-5 cursor-pointer group-hover:transform group-hover:translate-x-[5px] transition duration-300"
                />
              </button>
            </div>
          </>
        ) : (
          <>
            <Link href="/" className="absolute top-5 right-5">
              <FontAwesomeIcon icon={faX} className="w-3" />
            </Link>
            <h1 className="font-semibold text-[40px]">
              He olvidado la
              <br /> contraseña
            </h1>
            <p className="text-sm text-center py-4 text-[#7A7A7A]">
              Introduce la dirección de correo electrónico
              <br />
              asociada a tu cuenta y te enviaremos un
              <br />
              enlace mágico a tu bandeja de entrada.
            </p>

            <form className="flex flex-col gap-2 w-full text-left mt-5">
              <label htmlFor="email" className="font-semibold text-sm">
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-2 py-1 text-sm border-b-[2] border-[rgba(0,0,0,0.08)] focus:outline-none focus:border-black transition duration-300"
              />

              <input
                type="submit"
                onClick={() => setCurrentView('Login')}
                value="Enviar"
                className="flex justify-center items-center bg-primary text-white w-full py-3 font-[400] hover:opacity-90 transform duration-300 cursor-pointer"
              />
            </form>
            <div className="flex items-center text-sm gap-2 mt-12">
              <button
                onClick={() => setCurrentView('Welcome')}
                className="flex items-center gap-2 group"
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="w-5 cursor-pointer group-hover:transform group-hover:-translate-x-[5px] transition duration-300"
                />
                Todas las opciones de inicio de sesión
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Login
