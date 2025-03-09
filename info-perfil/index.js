// Datos de ejemplo (colección de perfiles y productos)
const perfiles = [
    {
        id_cliente: "1123",
        nombre: "Contoso S.A.",
        ruc: "0987654321001",
        descripcion: "Descripción de la empresa",
        logo: "https://www.contoso.com/logo.png",
        categoria: "Medicina",
        calificacion: 4.5,
        contactabilidad: {
            pais: "Ecuador",
            ciudad: "Guayaquil",
            provincia: "Guayas",
            calle_principal: "Av. 9 de Octubre",
            calle_secundaria: "Av. Malecon",
            numero: "1234",
            referencia: "Frente al parque",
            latitud: -2.203816,
            longitud: -79.897453,
            email1: "",
            email2: "",
            telefono1: "",
            telefono2: ""
        }
    },
    {
        id_cliente: "1124",
        nombre: "Fabrikam S.A.",
        ruc: "0987654321002",
        descripcion: "Otra descripción de empresa",
        logo: "https://www.fabrikam.com/logo.png",
        categoria: "Tecnología",
        calificacion: 4.2,
        contactabilidad: {
            pais: "Ecuador",
            ciudad: "Quito",
            provincia: "Pichincha",
            calle_principal: "Av. Amazonas",
            calle_secundaria: "Av. Naciones Unidas",
            numero: "5678",
            referencia: "Frente al parque central",
            latitud: -0.180653,
            longitud: -78.467834,
            email1: "",
            email2: "",
            telefono1: "",
            telefono2: ""
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