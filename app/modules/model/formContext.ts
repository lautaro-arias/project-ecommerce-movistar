
export interface FormContextProps {
    emailRef: React.RefObject<HTMLInputElement>;
    nombreRef: React.RefObject<HTMLInputElement>;
    apellidoRef: React.RefObject<HTMLInputElement>;
    dniRef: React.RefObject<HTMLInputElement>;
    celularRef: React.RefObject<HTMLInputElement>;
    calleRef: React.RefObject<HTMLInputElement>;
    alturaRef: React.RefObject<HTMLInputElement>;
    pisoRef: React.RefObject<HTMLInputElement>;
    departamentoRef: React.RefObject<HTMLInputElement>;
    localidadRef: React.RefObject<HTMLInputElement>;
    provinciaRef: React.RefObject<HTMLInputElement>;
    codigoPostalRef: React.RefObject<HTMLInputElement>;
    checkboxFormEnvioRef: React.RefObject<HTMLInputElement>;
    checkboxFormRetiroRef: React.RefObject<HTMLInputElement>;
    validated: boolean;
    isReadyShow: boolean;
    value: string | number | any;
    formData: {
        email: string;
        nombre: string;
        apellido: string;
        dni: string;
        celular: string;
        calle: string;
        altura: string;
        piso: string;
        departamento: string;
        localidad: string;
        provincia: string;
        codigoPostal: string;
        checkboxFormEnvio: boolean;
        checkboxFormRetiro: boolean;
    };
    handleSubmit: (event: React.FormEvent) => void;
    handleCheckboxChange: (checkboxType: boolean |  boolean) => void;
    handleChange:(event: React.ChangeEvent<HTMLInputElement>) => void;
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    handleClickPago: (e:React.MouseEvent<HTMLButtonElement>) => void;
    isPago : boolean;

}