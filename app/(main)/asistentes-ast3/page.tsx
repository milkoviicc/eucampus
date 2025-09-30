import Breadcrumb from '@/app/components/Breadcrumb'
import CountdownLayout from '@/app/components/CountdownLayout'
import React from 'react'

const Asistentes = () => {
  return (
    <div className="mt-[60px]">
      <Breadcrumb />
      <CountdownLayout target="2025-12-30T10:00:00" heading="Asistentes (AST3)" date="Diciembre" />
    </div>
  )
}

export default Asistentes
