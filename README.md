# Proyecto de Terraform: Arquitectura en AWS para Funciones Lambda y API Gateway

Este proyecto de Terraform configura una arquitectura en la nube utilizando AWS, con múltiples funciones Lambda conectadas a un API Gateway. Las funciones Lambda realizan tareas relacionadas con el perfil de usuario, búsqueda de empresas y ofertas de crédito, mientras que el API Gateway sirve como punto de entrada para consumir estas funciones. Además, se utiliza AWS WAF para proteger el API.

## Requisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Terraform](https://www.terraform.io/downloads.html)
- [AWS CLI](https://aws.amazon.com/cli/)
- Una cuenta en AWS con las credenciales configuradas.

## Estructura del Proyecto

El proyecto está compuesto por los siguientes recursos:

- **IAM Roles y Políticas**: Para permitir que las funciones Lambda sean invocadas por el API Gateway.
- **Funciones Lambda**: Tres funciones Lambda que gestionan diferentes funcionalidades:
  - `info-perfil`: Obtiene información de perfil.
  - `buscar-empresas`: Busca empresas.
  - `credit-offer`: Proporciona ofertas de crédito.
- **API Gateway**: Se configura un API REST que expone los puntos finales para cada función Lambda.
- **WAF (Web Application Firewall)**: Protege el API Gateway con reglas básicas para bloquear solicitudes maliciosas.
- **Permisos Lambda**: Se configuran permisos para que el API Gateway pueda invocar las funciones Lambda.

## Configuración

### 1. Configurar el proveedor de AWS

El proveedor de AWS se configura para la región `us-west-2`:

```hcl
provider "aws" {
  region = "us-west-2"
}
```
## Despliegue
### Inicializa el proyecto de Terraform:
```bash
terraform init
```
### Revisa el plan de ejecución:

```bash
terraform plan
```
### Aplica los cambios para desplegar la infraestructura:

```bash
terraform apply
```


## Contribución
Si deseas contribuir al proyecto, por favor abre un pull request con tus cambios.

## Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

