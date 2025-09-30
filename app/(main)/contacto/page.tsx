'use client'
import React, { useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { sendMail } from '../../lib/actions/sendMail'

const Contacto = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value

    // allow clearing everything
    if (value === '') {
      setPhone('')
      return
    }

    // keep only digits and +
    value = value.replace(/[^+\d]/g, '')

    // ensure only one "+" at the start
    if (value.startsWith('+')) {
      value = '+' + value.slice(1).replace(/\+/g, '')
    } else {
      value = '+' + value.replace(/\+/g, '')
    }

    // strip plus to format digits
    const digits = value.replace('+', '')

    // ✅ country code: max 3 digits
    const country = digits.slice(0, 3)
    const rest = digits.slice(3)

    let formatted = '+' + country
    if (rest.length > 0) {
      formatted += '-' + rest
    }
    if (rest.length > 3) {
      formatted = '+' + country + '-' + rest.slice(0, 3) + '-' + rest.slice(3)
    }
    if (rest.length > 6) {
      formatted =
        '+' + country + '-' + rest.slice(0, 3) + '-' + rest.slice(3, 6) + '-' + rest.slice(6, 10)
    }

    setPhone(formatted)
  }

  return (
    <div className="mt-[60px]">
      <Breadcrumb />
      <div className="w-full px-4 lg:max-w-[1300px] 2xl:max-w-[1600px] mx-auto py-20 h-full">
        <div className="text-center">
          <h4 className="text-lg">Apoyo cuando lo necesites</h4>
          <h1 className="text-4xl md:text-5xl my-4">Estamos aquí para ayudarte.</h1>
          <div className="py-4">
            <a href="mailto:info@eucampus.com" className="text-accent text-xl">
              <FontAwesomeIcon icon={faEnvelope} className="text-primary" size="lg" />{' '}
              info@eucampus.com
            </a>
          </div>
        </div>

        {/* responsive form: grid on md, stacked on mobile */}
        <form
          action={sendMail}
          method="POST"
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8"
        >
          {/* Nombre - spans full width on md */}
          <div className="flex flex-col gap-1 md:col-span-2">
            <label htmlFor="nombre" className="text-sm">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-[#69727d] w-full text-[#222] rounded-[5px] p-3"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="correo-electrónico" className="text-sm">
              Correo electrónico
            </label>
            <input
              type="email"
              name="correo-electrónico"
              id="correo-electrónico"
              value={email}
              placeholder="Correo electrónico"
              onChange={(e) => setEmail(e.target.value)}
              className="border border-[#69727d] w-full text-[#222] rounded-[5px] p-3"
              required
            />
          </div>

          {/* Teléfono */}
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="teléfono" className="text-sm">
              Teléfono
            </label>
            <input
              type="tel"
              name="teléfono"
              id="teléfono"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="+1-000-000-000"
              title="Please enter a phone number in the format +1-111-111-111"
              className="border border-[#69727d] w-full text-[#222] rounded-[5px] p-3"
              required
            />
          </div>

          {/* Mensaje - spans full width */}
          <div className="flex flex-col gap-1 md:col-span-2">
            <label htmlFor="mensaje" className="text-sm">
              Mensaje
            </label>
            <textarea
              name="mensaje"
              id="mensaje"
              placeholder="Mensaje"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-[#69727d] w-full text-[#222] rounded-[5px] p-3 resize-none"
              required
            ></textarea>
          </div>

          {/* Submit button centered; full width on mobile, constrained on md+ */}
          <div className="md:col-span-2 flex justify-center">
            <input
              type="submit"
              value="Enviar"
              className="bg-accent text-white px-6 w-full md:w-1/3 py-2 rounded-[3px] hover:bg-primary cursor-pointer transition duration-300"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contacto
