'use client'
import React from 'react';
import DataForm from './dataForm';
import Pago from './pagoMain';
import { useForm } from '@/app/modules/handlers/form';

const Render = () => {
  const { isReadyShow } = useForm()
  return (
    <div>
      {
        isReadyShow ? <Pago /> : <DataForm />
      }
    </div>
  )
}
export default Render;