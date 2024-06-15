import ArraySvg from './arraySvg';
const ArrayAyuda = () => {

    const { svgAyuda } = ArraySvg();
    
    const categorias = [
            {
                name: "Celulares",
                svg: svgAyuda[0],
                items: [
                    { item: "Cómo comprar un equipo" },
                    { item: "Cómo liberar o desbloquear mi equipo" },
                    { item: "Dónde veo el estado de mi compra" },
                    { item: "Cuáles son las formas de pago" }
                ]
            },
            {
                name: "Facturación y pagos",
                svg:svgAyuda[1],
                items: [
                    { item: "Dónde pagar mi factura" },
                    { item: "Cómo pagar a través de la app" },
                    { item: "Cuánto demora en ingresar mi pago" }
                ]
            },
            {
                name: "App Mi Movistar",
                svg:svgAyuda[0],
                items: [
                    { item: "Descargar app Mi Movistar" },
                    { item: "Asociar líneas a Mi Movistar" },
                    { item: "Desasociar líneas" },
                    { item: "Todo lo que haces con app Mi Movistar" }
                ]
            },
            {
                name: "Soporte técnico",
                svg:svgAyuda[2],
                items: [
                    { item: "Cómo hacer un reclamo técnico" },
                    { item: "Cómo activar la red 4G/5G en mi celular" },
                    { item: "Cómo resolver problemas con Movistar TV" },
                    { item: "Cómo mejorar mi conexión wifi" }
                ]
            },
            {
                name: "Trámites y consultas",
                svg:svgAyuda[3],
                items: [
                    { item: "Cómo cambiar de plan" },
                    { item: "Cómo ingresar a Mi Movistar" },
                    { item: "Cuál es mi número de línea móvil" },
                    { item: "Cómo pagar la línea de otra persona" }
                ]
            },
            {
                name: "Productos y servicios",
                svg:svgAyuda[4],
                items: [
                    { item: "Qué es el servicio de Movistar TV" },
                    { item: "Cómo medir la velocidad de mi internet" },
                    { item: "Cómo es la instalación de Movistar TV" },
                    { item: "Cómo saber si Movistar Fibra llega a mi zona" }
                ]
            },
            {
                name: "Recargas y saldo",
                svg:svgAyuda[5],
                items: [
                    { item: "Cuál es mi saldo disponible" },
                    { item: "Cómo pasar saldo entre líneas Movistar" },
                    { item: "Cómo hacer una recarga S.O.S Movistar" },
                    { item: "Cómo armar un pack a mi medida" }
                ]
            }
        ];
        
        const gestiones = [
            {name: "App Mi Movistar",item: "Descargala y gestioná todo desde tu celular.",svg:svgAyuda[6]},
            {name: "Cupón de pago",item: "Obtené el cupón del servicio que quieras.",svg:svgAyuda[7]},
            {name: "Medios de pago",item: "Conocé las distintas formas de pagar tu factura.",svg:svgAyuda[8]},
            {name: "Seguimiento de reclamos técnicos",item: "Consultá el estado de tu reclamo.",svg:svgAyuda[2]},
            {name: "Verificación técnica internet",item: "Resolvé los inconvenientes de tu servicio.",svg:svgAyuda[9]},
            {name: "Verificación técnica línea fija",item: "Resolvé los inconvenientes de tu servicio.",svg:svgAyuda[10]},
            {name: "Consejos para tus servicios Hogar",item: "Mejorá tus servicios con estas recomendaciones.",svg:svgAyuda[4]},
            {name: "Guía telefónica",item: "Accedé a Páginas Blancas de Argentina." ,svg:svgAyuda[11]},
            {name: "Buzón digital",item: "Envianos documentación desde donde estés." ,svg:svgAyuda[12]}
        ];

return {
    categorias,
    gestiones
}
}
export default ArrayAyuda;