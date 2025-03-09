const { Client } = require("pg");

exports.handler = async (event) => {
  let client;

  try {
    let data;
    try {
      data = JSON.parse(event.body);
    } catch (parseError) {
      throw new Error("El cuerpo de la solicitud no es un JSON válido.");
    }
    // Verificar si el parámetro 'id_cliente' está presente
     if (!data.id_cliente) {
      throw new Error(
        "El campo 'id_cliente' es requerido en el cuerpo de la solicitud."
      );
    }

    const idCliente = queryParams.id_cliente;

    // Generar valores aleatorios
    const totalCredito = Math.floor(Math.random() * 100000) + 10000; // Entre 10,000 y 110,000
    const utilizado = Math.floor(Math.random() * totalCredito); // Hasta el total_credito
    const disponible = totalCredito - utilizado;
    const moneda = "USD";
    const fechaInicio = new Date().toISOString().split("T")[0]; // Fecha actual en formato YYYY-MM-DD
    const fechaVencimiento = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
      .toISOString()
      .split("T")[0]; // Un año después de la fecha actual
    const estado = Math.random() > 0.5 ? "1" : "0"; // Estado aleatorio (1 o 0)

    // Configuración del cliente de PostgreSQL (opcional, si necesitas interactuar con la base de datos)
    client = new Client({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: 5432, // Puerto predeterminado de PostgreSQL
    });

    // Conectar a la base de datos (opcional)
    // await client.connect();

    // Respuesta exitosa
    return {
      statusCode: 200,
      body: JSON.stringify({
        id_cliente: idCliente,
        total_credito: totalCredito,
        utilizado: utilizado,
        disponible: disponible,
        moneda: moneda,
        fecha_inicio: fechaInicio,
        fecha_vencimiento: fechaVencimiento,
        estado: estado,
      }),
    };
  } catch (error) {
    // Manejo de errores
    console.error("Error al procesar la solicitud:", error);
    return {
      statusCode: 400, // Código 400 para errores del cliente
      body: JSON.stringify({
        message: "Error al procesar la solicitud",
        error: error.message,
      }),
    };
  } finally {
    // Cerrar la conexión a la base de datos (opcional)
    if (client) {
      await client.end();
    }
  }
};