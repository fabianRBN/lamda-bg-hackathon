// Datos de ejemplo (colección de perfiles y productos)
const perfiles = [
    {
        "id_cliente": "156464",
        "nombre": "Contoso S.A.",
        "ruc": "0987654321001",
        "descripcion": "Descripción de la empresa",
        "logo": "https://www.contoso.com/logo.png",
        "categoria": "Medicina",
        "calificacion": 4.5,
        "contactabilidad": {
            "pais": "Ecuador",
            "ciudad": "Guayaquil",
            "provincia": "Guayas",
            "calle_principal": "Av. 9 de Octubre",
            "calle_secundaria": "Av. Malecon",
            "numero": "1234",
            "referencia": "Frente al parque",
            "latitud": -2.203816,
            "longitud": -79.897453,
            "email1": "info@contoso.com",
            "email2": "ventas@contoso.com",
            "telefono1": "042345678",
            "telefono2": "042345679"
        }
    },
    {
        "id_cliente": "156465",
        "nombre": "Fabrikam S.A.",
        "ruc": "0987654321002",
        "descripcion": "Otra descripción de empresa",
        "logo": "https://www.fabrikam.com/logo.png",
        "categoria": "Tecnología",
        "calificacion": 4.2,
        "contactabilidad": {
            "pais": "Ecuador",
            "ciudad": "Quito",
            "provincia": "Pichincha",
            "calle_principal": "Av. Amazonas",
            "calle_secundaria": "Av. Naciones Unidas",
            "numero": "5678",
            "referencia": "Frente al parque central",
            "latitud": -0.180653,
            "longitud": -78.467834,
            "email1": "info@fabrikam.com",
            "email2": "ventas@fabrikam.com",
            "telefono1": "022345678",
            "telefono2": "022345679"
        }
    },
    {
        "id_cliente": "156466",
        "nombre": "AdventureWorks S.A.",
        "ruc": "0987654321003",
        "descripcion": "Empresa de aventuras",
        "logo": "https://www.adventureworks.com/logo.png",
        "categoria": "Turismo",
        "calificacion": 4.7,
        "contactabilidad": {
            "pais": "Perú",
            "ciudad": "Lima",
            "provincia": "Lima",
            "calle_principal": "Av. Javier Prado",
            "calle_secundaria": "Av. Arequipa",
            "numero": "91011",
            "referencia": "Frente al centro comercial",
            "latitud": -12.046374,
            "longitud": -77.042793,
            "email1": "info@adventureworks.com",
            "email2": "ventas@adventureworks.com",
            "telefono1": "012345678",
            "telefono2": "012345679"
        }
    },
    {
        "id_cliente": "156467",
        "nombre": "TechCorp S.A.",
        "ruc": "0987654321004",
        "descripcion": "Empresa líder en tecnología",
        "logo": "https://www.techcorp.com/logo.png",
        "categoria": "Tecnología",
        "calificacion": 4.8,
        "contactabilidad": {
            "pais": "Ecuador",
            "ciudad": "Cuenca",
            "provincia": "Azuay",
            "calle_principal": "Av. Loja",
            "calle_secundaria": "Av. Solano",
            "numero": "1213",
            "referencia": "Frente al parque central",
            "latitud": -2.900128,
            "longitud": -79.005896,
            "email1": "info@techcorp.com",
            "email2": "ventas@techcorp.com",
            "telefono1": "072345678",
            "telefono2": "072345679"
        }
    },
    {
        "id_cliente": "156468",
        "nombre": "HealthPlus S.A.",
        "ruc": "0987654321005",
        "descripcion": "Empresa de servicios médicos",
        "logo": "https://www.healthplus.com/logo.png",
        "categoria": "Medicina",
        "calificacion": 4.6,
        "contactabilidad": {
            "pais": "Ecuador",
            "ciudad": "Manta",
            "provincia": "Manabí",
            "calle_principal": "Av. 24 de Mayo",
            "calle_secundaria": "Av. Flavio Reyes",
            "numero": "1415",
            "referencia": "Frente al hospital",
            "latitud": -0.946042,
            "longitud": -80.712678,
            "email1": "info@healthplus.com",
            "email2": "ventas@healthplus.com",
            "telefono1": "052345678",
            "telefono2": "052345679"
        }
    },
    {
        "id_cliente": "156469",
        "nombre": "TravelEcuador S.A.",
        "ruc": "0987654321006",
        "descripcion": "Empresa de turismo en Ecuador",
        "logo": "https://www.travelecuador.com/logo.png",
        "categoria": "Turismo",
        "calificacion": 4.4,
        "contactabilidad": {
            "pais": "Ecuador",
            "ciudad": "Quito",
            "provincia": "Pichincha",
            "calle_principal": "Av. Shyris",
            "calle_secundaria": "Av. Naciones Unidas",
            "numero": "1617",
            "referencia": "Frente al parque",
            "latitud": -0.205874,
            "longitud": -78.490041,
            "email1": "info@travelecuador.com",
            "email2": "ventas@travelecuador.com",
            "telefono1": "022345670",
            "telefono2": "022345671"
        }
    },
    {
        "id_cliente": "156470",
        "nombre": "EcoFarm S.A.",
        "ruc": "0987654321007",
        "descripcion": "Empresa de productos orgánicos",
        "logo": "https://www.ecofarm.com/logo.png",
        "categoria": "Agricultura",
        "calificacion": 4.3,
        "contactabilidad": {
            "pais": "Ecuador",
            "ciudad": "Ambato",
            "provincia": "Tungurahua",
            "calle_principal": "Av. Cevallos",
            "calle_secundaria": "Av. Montalvo",
            "numero": "1819",
            "referencia": "Frente al mercado",
            "latitud": -1.24908,
            "longitud": -78.61672,
            "email1": "info@ecofarm.com",
            "email2": "ventas@ecofarm.com",
            "telefono1": "032345678",
            "telefono2": "032345679"
        }
    },
    {
        "id_cliente": "156471",
        "nombre": "InnovaTech S.A.",
        "ruc": "0987654321008",
        "descripcion": "Empresa de innovación tecnológica",
        "logo": "https://www.innovatech.com/logo.png",
        "categoria": "Tecnología",
        "calificacion": 4.9,
        "contactabilidad": {
            "pais": "Ecuador",
            "ciudad": "Guayaquil",
            "provincia": "Guayas",
            "calle_principal": "Av. Francisco de Orellana",
            "calle_secundaria": "Av. Juan Tanca Marengo",
            "numero": "2021",
            "referencia": "Frente al centro comercial",
            "latitud": -2.170998,
            "longitud": -79.922359,
            "email1": "info@innovatech.com",
            "email2": "ventas@innovatech.com",
            "telefono1": "042345670",
            "telefono2": "042345671"
        }
    },
    {
        "id_cliente": "156472",
        "nombre": "BioHealth S.A.",
        "ruc": "0987654321009",
        "descripcion": "Empresa de productos naturales",
        "logo": "https://www.biohealth.com/logo.png",
        "categoria": "Medicina",
        "calificacion": 4.7,
        "contactabilidad": {
            "pais": "Ecuador",
            "ciudad": "Quito",
            "provincia": "Pichincha",
            "calle_principal": "Av. 6 de Diciembre",
            "calle_secundaria": "Av. Colón",
            "numero": "2223",
            "referencia": "Frente al parque",
            "latitud": -0.180653,
            "longitud": -78.467834,
            "email1": "info@biohealth.com",
            "email2": "ventas@biohealth.com",
            "telefono1": "022345672",
            "telefono2": "022345673"
        }
    },
    {
        "id_cliente": "156473",
        "nombre": "GreenTravel S.A.",
        "ruc": "0987654321010",
        "descripcion": "Empresa de turismo ecológico",
        "logo": "https://www.greentravel.com/logo.png",
        "categoria": "Turismo",
        "calificacion": 4.5,
        "contactabilidad": {
            "pais": "Ecuador",
            "ciudad": "Cuenca",
            "provincia": "Azuay",
            "calle_principal": "Av. Fray Vicente Solano",
            "calle_secundaria": "Av. 12 de Abril",
            "numero": "2425",
            "referencia": "Frente al parque",
            "latitud": -2.900128,
            "longitud": -79.005896,
            "email1": "info@greentravel.com",
            "email2": "ventas@greentravel.com",
            "telefono1": "072345670",
            "telefono2": "072345671"
        }
    },{
        "id_cliente": "156474",
        "nombre": "AgroEcuador S.A.",
        "ruc": "0987654321011",
        "descripcion": "Empresa de productos agrícolas",
        "logo": "https://www.agroecuador.com/logo.png",
        "categoria": "Agricultura",
        "calificacion": 4.2,
        "contactabilidad": {
            "pais": "Ecuador",
            "ciudad": "Riobamba",
            "provincia": "Chimborazo",
            "calle_principal": "Av. Daniel León Borja",
            "calle_secundaria": "Av. Primera Constituyente",
            "numero": "2627",
            "referencia": "Frente al mercado",
            "latitud": -1.6732,
            "longitud": -78.6489,
            "email1": "info@agroecuador.com",
            "email2": "ventas@agroecuador.com",
            "telefono1": "032345670",
            "telefono2": "032345671"
        }
    },
    {
        "id_cliente": "156475",
        "nombre": "TechSolutions S.A.",
        "ruc": "0987654321012",
        "descripcion": "Soluciones tecnológicas para empresas",
        "logo": "https://www.techsolutions.com/logo.png",
        "categoria": "Tecnología",
        "calificacion": 4.8,
        "contactabilidad": {
            "pais": "Ecuador",
            "ciudad": "Guayaquil",
            "provincia": "Guayas",
            "calle_principal": "Av. Juan Tanca Marengo",
            "calle_secundaria": "Av. Francisco de Orellana",
            "numero": "2829",
            "referencia": "Frente al centro comercial",
            "latitud": -2.170998,
            "longitud": -79.922359,
            "email1": "info@techsolutions.com",
            "email2": "ventas@techsolutions.com",
            "telefono1": "042345672",
            "telefono2": "042345673"
        }
    },
    {
        "id_cliente": "156476",
        "nombre": "MediCare S.A.",
        "ruc": "0987654321013",
        "descripcion": "Empresa de servicios médicos",
        "logo": "https://www.medicare.com/logo.png",
        "categoria": "Medicina",
        "calificacion": 4.6,
        "contactabilidad": {
            "pais": "Ecuador",
            "ciudad": "Quito",
            "provincia": "Pichincha",
            "calle_principal": "Av. Amazonas",
            "calle_secundaria": "Av. Naciones Unidas",
            "numero": "3031",
            "referencia": "Frente al hospital",
            "latitud": -0.180653,
            "longitud": -78.467834,
            "email1": "info@medicare.com",
            "email2": "ventas@medicare.com",
            "telefono1": "022345674",
            "telefono2": "022345675"
        }
    },
    {
        "id_cliente": "156477",
        "nombre": "EcoTour S.A.",
        "ruc": "0987654321014",
        "descripcion": "Empresa de turismo sostenible",
        "logo": "https://www.ecotour.com/logo.png",
        "categoria": "Turismo",
        "calificacion": 4.4,
        "contactabilidad": {
            "pais": "Ecuador",
            "ciudad": "Cuenca",
            "provincia": "Azuay",
            "calle_principal": "Av. Loja",
            "calle_secundaria": "Av. Solano",
            "numero": "3233",
            "referencia": "Frente al parque",
            "latitud": -2.900128,
            "longitud": -79.005896,
            "email1": "info@ecotour.com",
            "email2": "ventas@ecotour.com",
            "telefono1": "072345672",
            "telefono2": "072345673"
        }
    },
    {
        "id_cliente": "156478",
        "nombre": "AgroTech S.A.",
        "ruc": "0987654321015",
        "descripcion": "Tecnología aplicada a la agricultura",
        "logo": "https://www.agrotech.com/logo.png",
        "categoria": "Agricultura",
        "calificacion": 4.3,
        "contactabilidad": {
            "pais": "Ecuador",
            "ciudad": "Guayaquil",
            "provincia": "Guayas",
            "calle_principal": "Av. 9 de Octubre",
            "calle_secundaria": "Av. Malecon",
            "numero": "3435",
            "referencia": "Frente al parque",
            "latitud": -2.203816,
            "longitud": -79.897453,
            "email1": "info@agrotech.com",
            "email2": "ventas@agrotech.com",
            "telefono1": "042345674",
            "telefono2": "042345675"
        }
    },
    {
        "id_cliente": "156479",
        "nombre": "TechInnovate S.A.",
        "ruc": "0987654321016",
        "descripcion": "Innovación en tecnología",
        "logo": "https://www.techinnovate.com/logo.png",
        "categoria": "Tecnología",
        "calificacion": 4.9,
        "contactabilidad": {
            "pais": "Ecuador",
            "ciudad": "Quito",
            "provincia": "Pichincha",
            "calle_principal": "Av. Amazonas",
            "calle_secundaria": "Av. Naciones Unidas",
            "numero": "3637",
            "referencia": "Frente al parque central",
            "latitud": -0.180653,
            "longitud": -78.467834,
            "email1": "info@techinnovate.com",
            "email2": "ventas@techinnovate.com",
            "telefono1": "022345676",
            "telefono2": "022345677"
        }
    },
    {
        "id_cliente": "156480",
        "nombre": "HealthyLife S.A.",
        "ruc": "0987654321017",
        "descripcion": "Empresa de productos saludables",
        "logo": "https://www.healthylife.com/logo.png",
        "categoria": "Medicina",
        "calificacion": 4.7,
        "contactabilidad": {
            "pais": "Ecuador",
            "ciudad": "Guayaquil",
            "provincia": "Guayas",
            "calle_principal": "Av. Francisco de Orellana",
            "calle_secundaria": "Av. Juan Tanca Marengo",
            "numero": "3839",
            "referencia": "Frente al centro comercial",
            "latitud": -2.170998,
            "longitud": -79.922359,
            "email1": "info@healthylife.com",
            "email2": "ventas@healthylife.com",
            "telefono1": "042345676",
            "telefono2": "042345677"
        }
    },
    {
        "id_cliente": "156481",
        "nombre": "EcoAdventures S.A.",
        "ruc": "0987654321018",
        "descripcion": "Empresa de turismo de aventura",
        "logo": "https://www.ecoadventures.com/logo.png",
        "categoria": "Turismo",
        "calificacion": 4.5,
        "contactabilidad": {
            "pais": "Ecuador",
            "ciudad": "Cuenca",
            "provincia": "Azuay",
            "calle_principal": "Av. Fray Vicente Solano",
            "calle_secundaria": "Av. 12 de Abril",
            "numero": "4041",
            "referencia": "Frente al parque",
            "latitud": -2.900128,
            "longitud": -79.005896,
            "email1": "info@ecoadventures.com",
            "email2": "ventas@ecoadventures.com",
            "telefono1": "072345674",
            "telefono2": "072345675"
        }
    },
    {
        "id_cliente": "156482",
        "nombre": "AgroSolutions S.A.",
        "ruc": "0987654321019",
        "descripcion": "Soluciones agrícolas innovadoras",
        "logo": "https://www.agrosolutions.com/logo.png",
        "categoria": "Agricultura",
        "calificacion": 4.2,
        "contactabilidad": {
            "pais": "Ecuador",
            "ciudad": "Riobamba",
            "provincia": "Chimborazo",
            "calle_principal": "Av. Daniel León Borja",
            "calle_secundaria": "Av. Primera Constituyente",
            "numero": "4243",
            "referencia": "Frente al mercado",
            "latitud": -1.6732,
            "longitud": -78.6489,
            "email1": "info@agrosolutions.com",
            "email2": "ventas@agrosolutions.com",
            "telefono1": "032345672",
            "telefono2": "032345673"
        }
    },
    {
        "id_cliente": "156483",
        "nombre": "TechWorld S.A.",
        "ruc": "0987654321020",
        "descripcion": "Empresa líder en tecnología global",
        "logo": "https://www.techworld.com/logo.png",
        "categoria": "Tecnología",
        "calificacion": 4.8,
        "contactabilidad": {
            "pais": "Ecuador",
            "ciudad": "Guayaquil",
            "provincia": "Guayas",
            "calle_principal": "Av. Juan Tanca Marengo",
            "calle_secundaria": "Av. Francisco de Orellana",
            "numero": "4445",
            "referencia": "Frente al centro comercial",
            "latitud": -2.170998,
            "longitud": -79.922359,
            "email1": "info@techworld.com",
            "email2": "ventas@techworld.com",
            "telefono1": "042345678",
            "telefono2": "042345679"
        }
    }
];

const productos = [
    {
        id_cliente: "1123",
        idProducto: "f7b3b2b1-5b7b-4b3b-8b7b-2b1b3b4b5b7b",
        nombre: "Producto 1",
        precio: 100,
        stock: 10,
        descripcion: "Descripción del producto 1",
        categoria: "Medicina"
    },
    {
        id_cliente: "1123",
        idProducto: "f7b3b2b1-5b7b-4b3b-8b7b-2b1b3b4b5b7c",
        nombre: "Producto 2",
        precio: 200,
        stock: 5,
        descripcion: "Descripción del producto 2",
        categoria: "Medicina"
    },
    {
        id_cliente: "1124",
        idProducto: "f7b3b2b1-5b7b-4b3b-8b7b-2b1b3b4b5b7d",
        nombre: "Producto 3",
        precio: 300,
        stock: 8,
        descripcion: "Descripción del producto 3",
        categoria: "Tecnología"
    }
];

exports.handler = async (event) => {
    try {
        // Parsear el cuerpo de la solicitud
        const body = JSON.parse(event.body);
        const idCliente = body.id_cliente;

        // Validar que el campo id_cliente esté presente
        if (!idCliente) {
            throw new Error("El campo 'id_cliente' es requerido en el cuerpo de la solicitud.");
        }

        // Buscar el perfil del cliente
        const perfil = perfiles.find(p => p.id_cliente === idCliente);

        if (!perfil) {
            throw new Error("No se encontró el perfil del cliente.");
        }

        // Buscar los productos asociados al cliente
        const productosCliente = productos.filter(p => p.id_cliente === idCliente);

        // Respuesta exitosa
        return {
            statusCode: 200,
            body: JSON.stringify({
                info: perfil,
                productos: productosCliente
            }),
        };
    } catch (error) {
        // Manejo de errores
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: "Error al procesar la solicitud",
                error: error.message,
            }),
        };
    }
};