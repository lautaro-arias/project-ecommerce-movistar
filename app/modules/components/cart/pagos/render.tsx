'use client'
import useForm from '@/app/modules/handlers/form'
import React from 'react'
import DataForm from './dataForm'
import Pago from './pago'

const Render = () => {
    const { isReadyShow } = useForm()
    console.log(isReadyShow)
  return (
    <div>
      {
        isReadyShow ? <Pago /> :  <DataForm />
      }
    </div>
  )
}

export default Render