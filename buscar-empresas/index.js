// Datos de ejemplo (colección de empresas)
const empresas = [
    {
        id_cliente: 156464,
        nombre: "Contoso S.A.",
        descripcion: "Descripción de la empresa.",
        categoria: "Medicina",
        logo: "https://www.contoso.com/logo.png",
        calificacion: 4.5,
        ubicacion: {
            pais: "Ecuador",
            ciudad: "Guayaquil",
            provincia: "Guayas",
            calle_principal: "Av. 9 de Octubre",
            calle_secundaria: "Av. Malecon"
        }
    },
    {
        id_cliente: 156465,
        nombre: "Fabrikam S.A.",
        descripcion: "Otra descripción de empresa.",
        categoria: "Tecnología",
        logo: "https://www.fabrikam.com/logo.png",
        calificacion: 4.2,
        ubicacion: {
            pais: "Ecuador",
            ciudad: "Quito",
            provincia: "Pichincha",
            calle_principal: "Av. Amazonas",
            calle_secundaria: "Av. Naciones Unidas"
        }
    },
    {
        id_cliente: 156466,
        nombre: "AdventureWorks S.A.",
        descripcion: "Empresa de aventuras.",
        categoria: "Turismo",
        logo: "https://www.adventureworks.com/logo.png",
        calificacion: 4.7,
        ubicacion: {
            pais: "Perú",
            ciudad: "Lima",
            provincia: "Lima",
            calle_principal: "Av. Javier Prado",
            calle_secundaria: "Av. Arequipa"
        }
    }
];

exports.handler = async (event) => {
    try {
        // Parsear el cuerpo de la solicitud
        const body = JSON.parse(event.body);
        const { query, pais, ciudad, provincia } = body;

        // Filtrar empresas según los parámetros proporcionados
        const empresasFiltradas = empresas.filter(empresa => {
            const matchQuery = query ? 
                empresa.nombre.toLowerCase().includes(query.toLowerCase()) || 
                empresa.descripcion.toLowerCase().includes(query.toLowerCase()) : true;
            const matchPais = pais ? empresa.ubicacion.pais.toLowerCase() === pais.toLowerCase() : true;
            const matchCiudad = ciudad ? empresa.ubicacion.ciudad.toLowerCase() === ciudad.toLowerCase() : true;
            const matchProvincia = provincia ? empresa.ubicacion.provincia.toLowerCase() === provincia.toLowerCase() : true;

            return matchQuery && matchPais && matchCiudad && matchProvincia;
        });

        // Respuesta exitosa
        return {
            statusCode: 200,
            body: JSON.stringify(empresasFiltradas),
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