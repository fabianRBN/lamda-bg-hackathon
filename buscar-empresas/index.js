const empresas = require('./empresas.json');

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