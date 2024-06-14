'use client'
import React,{createContext, useContext,useState,useRef, ReactNode} from 'react'
import { FormContextProps } from '../model/formContext';

const FormContext = createContext<FormContextProps>({
  emailRef: { current: null },
  nombreRef: { current: null },
  apellidoRef: { current: null },
  dniRef: { current: null },
  celularRef: { current: null },
  calleRef: { current: null },
  alturaRef: { current: null },
  pisoRef: { current: null },
  departamentoRef: { current: null },
  localidadRef: { current: null },
  provinciaRef: { current: null },
  codigoPostalRef: { current: null },
  checkboxFormEnvioRef: { current: null },
  checkboxFormRetiroRef: { current: null },
  validated: false,
  isReadyShow: false,
  value: '',
  formData: { email: "",nombre: "",apellido: "",dni: "",celular: "",calle: "",altura: "",
              piso: "",departamento: "",localidad: "",provincia: "",codigoPostal: "",
              checkboxFormEnvio: false,checkboxFormRetiro: false,
            },
  handleSubmit: () => {},
  handleCheckboxChange:() => {},
  handleChange: () => {},
  handleClick:() => {},
  handleClickPago:() => {},
  isPago: false
  
})
export const FormProvider = ({ children }: { children: ReactNode }) => {
  // validated: valida si el formulario esta bien +
  // isReadyShow: valida si hay un check marcado antes de ir a pago
  // value : validacion visual usuario, si el input contiene caracteres//
  //isPago: valida si el usuario ya ha pagado
  const [validated, setValidated] = useState(false);
  const [isReadyShow, setIsReadyShow] = useState(false);
  const [value, setValue] = useState('');
  const [isPago, setIsPago] = useState(false);
  
  //alamcenamos los datos de los refs
  const [formData, setFormData] = useState({
    email: '',nombre: '',apellido: '',dni: '',celular: '',calle: '',altura: '',piso: '',
    departamento: '',localidad: '',provincia: '',codigoPostal: '',checkboxFormEnvio: false,checkboxFormRetiro: false,
  });
  //

  //inicializacion de refs
  const emailRef = useRef<HTMLInputElement>(null);
  const nombreRef = useRef<HTMLInputElement>(null);
  const apellidoRef = useRef<HTMLInputElement>(null);
  const dniRef = useRef<HTMLInputElement>(null);
  const celularRef = useRef<HTMLInputElement>(null);
  const calleRef = useRef<HTMLInputElement>(null);
  const alturaRef = useRef<HTMLInputElement>(null);
  const pisoRef = useRef<HTMLInputElement>(null);
  const departamentoRef = useRef<HTMLInputElement>(null);
  const localidadRef = useRef<HTMLInputElement>(null);
  const provinciaRef = useRef<HTMLInputElement>(null);
  const codigoPostalRef = useRef<HTMLInputElement>(null);
  const checkboxFormEnvioRef = useRef<HTMLInputElement>(null);
  const checkboxFormRetiroRef = useRef<HTMLInputElement>(null);
  //

  // verifica que los inputs no esten vacios o esten en el formato correcto
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  //

  // obtenermos los datos de los ref , los guardamos y validamos el formulario
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const data = {
      email: emailRef.current?.value       || '', nombre: nombreRef.current?.value || '',
      apellido: apellidoRef.current?.value || '', dni: dniRef.current?.value || '',
      celular: celularRef.current?.value    || '', calle: calleRef.current?.value || '',
      altura: alturaRef.current?.value      || '', piso: pisoRef.current?.value || '',
      departamento: departamentoRef.current?.value || '',localidad: localidadRef.current?.value || '',
      provincia: provinciaRef.current?.value || '',   codigoPostal: codigoPostalRef.current?.value || '',
      checkboxFormEnvio: checkboxFormEnvioRef.current?.checked || false, checkboxFormRetiro: checkboxFormRetiroRef.current?.checked || false,
    };

   
    try {
      // Validar si al menos un checkbox esta marcado
      const isAnyCheckboxChecked = checkboxFormEnvioRef.current?.checked || checkboxFormRetiroRef.current?.checked;
      //
      // validar si el formulario esta completo
      const completo = 
        data.email !== '' && data.nombre !== '' && data.apellido !== '' && data.dni !== '' && data.celular !== '' &&
        data.calle !== '' && data.altura !== '' && data.localidad !== '' && data.provincia !== '' && data.codigoPostal !== '' 
        //
        if(completo && isAnyCheckboxChecked){
          setValidated(true);
          setIsReadyShow(true);
          setFormData(data);

        }else{
          setIsReadyShow(false);
          setValidated(false);
          console.log("debe completar todos los campos");
        }
        
    } catch (error) {
      console.log("error al enviar los datos:", error);
    }
   
  };
  ///

  //  desactiva un check si el otro esta activo y viseversa
  const handleCheckboxChange = (checkboxType: boolean ) => {
    if (checkboxType === true) {
      // si es true checkboxFormEnvioRef
      if (checkboxFormEnvioRef.current) {
        checkboxFormEnvioRef.current.checked = true;
      }
      if (checkboxFormRetiroRef.current) {
        checkboxFormRetiroRef.current.checked = false;
      }
    } else {
      // si es false checkboxFormRetiroRef
      if (checkboxFormEnvioRef.current) {
        checkboxFormEnvioRef.current.checked = false;
      }
      if (checkboxFormRetiroRef.current) {
        checkboxFormRetiroRef.current.checked = true;
      }
    }
  };
  ///

  // para volder de pago a formulario de datos
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault();
    setIsReadyShow(false);
  }
  //

  const handleClickPago = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsPago(preev => !preev);
    console.log(isPago)
  }
  

  const contextValue: FormContextProps = {
    emailRef,
    nombreRef,
    apellidoRef,
    dniRef,
    celularRef,
    calleRef,
    alturaRef,
    pisoRef,
    departamentoRef,
    localidadRef,
    provinciaRef,
    codigoPostalRef,
    checkboxFormEnvioRef,
    checkboxFormRetiroRef,
    validated,
    isReadyShow,
    value,
    formData,
    handleSubmit,
    handleCheckboxChange,
    handleChange,
    handleClick,
    handleClickPago,
    isPago
  };

  return (
    <FormContext.Provider value={contextValue}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  return useContext(FormContext);
};