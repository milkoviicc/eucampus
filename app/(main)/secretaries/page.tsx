import Breadcrumb from '@/app/components/Breadcrumb'
import CountdownLayout from '@/app/components/CountdownLayout'
import React from 'react'

const Secretaries = () => {
  return (
    <div className="mt-[60px]">
      <Breadcrumb />
      <CountdownLayout
        target="2025-10-20T10:00:00"
        heading="Secretaries (AST/SC)"
        date="Octubre 2025"
      />
    </div>
  )
}

export default Secretaries
