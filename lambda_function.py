import json
import psycopg2
import os

def lambda_handler(event, context):
    data = json.loads(event["body"])
    
    # Parámetros de la oferta
    amount = data["amount"]
    interest_rate = 0.05  # 5% de interés
    term = 12  # 12 meses

    # Cálculo simple de cuota mensual
    monthly_payment = (amount * (1 + interest_rate)) / term

    # Conexión a la base de datos
    conn = psycopg2.connect(
        dbname=os.environ['DB_NAME'],
        user=os.environ['DB_USER'],
        password=os.environ['DB_PASSWORD'],
        host=os.environ['DB_HOST']
    )
    
    cur = conn.cursor()
    cur.execute("INSERT INTO credit_offers (amount, term, monthly_payment) VALUES (%s, %s, %s)", 
                (amount, term, monthly_payment))
    conn.commit()
    cur.close()
    conn.close()

    return {
        "statusCode": 200,
        "body": json.dumps({
            "message": "Oferta almacenada con éxito",
            "monthly_payment": monthly_payment
        })
    }
