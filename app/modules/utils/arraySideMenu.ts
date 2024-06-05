import ArraySvg from '../utils/arraySvg'
const ArraySideMenu = () => {
    const { svg } = ArraySvg();


const itemSideMenu = [
        {
        title: "Marca",
            options: [
            {name: "Apple",},{name: "Samsung",},{name: "Xiaomi"},{name: "Huawei"},{name: "Motorola",},{name: "Vivo",},{name: "Oppo",},
            ],
        },
        {
            title: "Precio",
            options: [
                {name:"$0 - $100"},{name:"$100 - $500"},{name:"$500 y superior"},
            ],
        },
        {
            title: "Inteligencia Artificial",
            svg:svg[0],
            options:[
                {name:"Galaxy AI"},
            ]
        },
        {
            title: "Memoria Interna",
            svg:svg[1],
            options:[
                {name:"32 GB"},{name:"64 GB"},{name:"128 GB"},{name:"256 GB"},{name:"512 GB"},
            ]
        },
        {
            title: "Camara",
            svg:svg[2],
            options:[
                {name:"12 MP + 12MP"},{name:"12MP + 13MP "},{name:"13MP"},{name:"13MP + 2MP"},{name:"16MP"},{name:"16MP + 2MP "},
            ]
        },
        {
            title: "Pantalla",
            svg:svg[3],
            options:[
                {name:"6"},{name:"6.1 "},{name:"6.2"},{name:"6.3 "},{name:"6.4"},{name:"6.5 "},{name:"6.6"},
            ]
        }
    ];


    return {
        itemSideMenu,
    };
};
export default ArraySideMenu;
