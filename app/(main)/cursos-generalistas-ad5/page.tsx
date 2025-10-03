'use client'
import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import { motion, Variants } from 'framer-motion'
import Generalistas from '@/app/components/Generalistas'

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const GeneralistasAD5 = () => {
  return (
    <div className="mt-[60px]">
      <Breadcrumb />
      <div className="w-full lg:max-w-[1300px] 2xl:max-w-[1600px] mx-0 lg:mx-auto pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="mt-8"
        >
          <Generalistas />
        </motion.div>
      </div>
    </div>
  )
}

export default GeneralistasAD5
