"use client";
import React, { useState } from "react";

const useForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    nombre: "",
    apellido: "",
    dni: "",
    celular: "",
    calle: "",
    altura: "",
    piso: "",
    departamento: "",
    localidad: "",
    provincia: "",
    codigoPostal: "",
    checkboxFormEnvio: false,
    checkboxFormRetiro: false,
  });

  const [validated, setValidated] = useState(false);
  const [isReadyShow, setIsReadyShow] = useState(false);

  const handleChange = (e: any) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setValidated(true);
    setIsReadyShow(true);

    if (e.target.checkValidity()) {
      // Si el formulario es válido, se puede proceder a la siguiente fase
      setIsReadyShow(true);
    }
  };
  console.log(formData);
  console.log(validated);
  console.log(isReadyShow);
  return {
    handleChange,
    handleSubmit,
    formData,
    validated,
    isReadyShow,
  };
};

export default useForm;
