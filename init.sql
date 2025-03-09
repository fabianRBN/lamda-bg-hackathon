CREATE TABLE credit_offers (
    id SERIAL PRIMARY KEY,
    ruc VARCHAR(20) NOT NULL,
    categoria VARCHAR(10) NOT NULL,
    monto NUMERIC(10, 2) NOT NULL,
    monto_min NUMERIC(10, 2) NOT NULL,
    monto_max NUMERIC(10, 2) NOT NULL,
    tasa VARCHAR(10) NOT NULL,
    line_credito NUMERIC(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);