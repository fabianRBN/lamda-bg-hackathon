provider "aws" {
  region = "us-west-2"
}

# IAM Role para las Lambdas
resource "aws_iam_role" "lambda_role" {
  name = "lambda_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "lambda.amazonaws.com"
      }
    }]
  })
}

# Política para permitir la ejecución de Lambda
resource "aws_iam_policy" "lambda_policy" {
  name        = "LambdaInvokePolicy"
  description = "Policy to allow API Gateway to invoke Lambda"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = "lambda:InvokeFunction"
        Resource = "*"
      }
    ]
  })
}

# Asignar política al Role
resource "aws_iam_role_policy_attachment" "lambda_policy_attach" {
  policy_arn = aws_iam_policy.lambda_policy.arn
  role       = aws_iam_role.lambda_role.name
}

# Lambda Function: info-perfil
resource "aws_lambda_function" "info_perfil_lambda" {
  function_name = "info-perfil"
  role          = aws_iam_role.lambda_role.arn
  runtime       = "nodejs18.x"
  handler       = "index.handler"

  filename         = "info_perfil_lambda.zip"
  source_code_hash = filebase64sha256("info_perfil_lambda.zip")

  environment {
    variables = {
      DB_HOST     = "test" # Cambia esto por el endpoint de tu RDS
      DB_NAME     = "creditdb"
      DB_USER     = "admin"
      DB_PASSWORD = "SuperSecurePassword"
    }
  }
}

# Lambda Function: buscar-empresas
resource "aws_lambda_function" "buscar_empresas_lambda" {
  function_name = "buscar-empresas"
  role          = aws_iam_role.lambda_role.arn
  runtime       = "nodejs18.x"
  handler       = "index.handler"

  filename         = "buscar_empresas_lambda.zip"
  source_code_hash = filebase64sha256("buscar_empresas_lambda.zip")

  environment {
    variables = {
      DB_HOST     = "test" # Cambia esto por el endpoint de tu RDS
      DB_NAME     = "creditdb"
      DB_USER     = "admin"
      DB_PASSWORD = "SuperSecurePassword"
    }
  }
}

# Lambda Function: credit_offer
resource "aws_lambda_function" "credit_offer_lambda" {
  function_name = "credit-offer"
  role          = aws_iam_role.lambda_role.arn
  runtime       = "nodejs18.x"
  handler       = "index.handler"

  filename         = "credit_offer_lambda.zip"
  source_code_hash = filebase64sha256("credit_offer_lambda.zip")

  environment {
    variables = {
      DB_HOST     = "test" # Cambia esto por el endpoint de tu RDS
      DB_NAME     = "creditdb"
      DB_USER     = "admin"
      DB_PASSWORD = "SuperSecurePassword"
    }
  }
}

# API Gateway
resource "aws_api_gateway_rest_api" "credit_api" {
  name        = "CreditOfferAPI"
  description = "API para consultar información de perfil, empresas y ofertas de crédito"
}

# Recurso para info-perfil
resource "aws_api_gateway_resource" "info_perfil" {
  rest_api_id = aws_api_gateway_rest_api.credit_api.id
  parent_id   = aws_api_gateway_rest_api.credit_api.root_resource_id
  path_part   = "info-perfil"
}

# Método POST para info-perfil
resource "aws_api_gateway_method" "info_perfil_post" {
  rest_api_id   = aws_api_gateway_rest_api.credit_api.id
  resource_id   = aws_api_gateway_resource.info_perfil.id
  http_method   = "POST"
  authorization = "NONE"
}

# Integración de info-perfil con Lambda
resource "aws_api_gateway_integration" "info_perfil_integration" {
  rest_api_id             = aws_api_gateway_rest_api.credit_api.id
  resource_id             = aws_api_gateway_resource.info_perfil.id
  http_method             = aws_api_gateway_method.info_perfil_post.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.info_perfil_lambda.invoke_arn
}

# Recurso para buscar-empresas
resource "aws_api_gateway_resource" "buscar_empresas" {
  rest_api_id = aws_api_gateway_rest_api.credit_api.id
  parent_id   = aws_api_gateway_rest_api.credit_api.root_resource_id
  path_part   = "buscar-empresas"
}

# Método POST para buscar-empresas
resource "aws_api_gateway_method" "buscar_empresas_post" {
  rest_api_id   = aws_api_gateway_rest_api.credit_api.id
  resource_id   = aws_api_gateway_resource.buscar_empresas.id
  http_method   = "POST"
  authorization = "NONE"
}

# Integración de buscar-empresas con Lambda
resource "aws_api_gateway_integration" "buscar_empresas_integration" {
  rest_api_id             = aws_api_gateway_rest_api.credit_api.id
  resource_id             = aws_api_gateway_resource.buscar_empresas.id
  http_method             = aws_api_gateway_method.buscar_empresas_post.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.buscar_empresas_lambda.invoke_arn
}

# Recurso para credit-offer
resource "aws_api_gateway_resource" "credit_offer" {
  rest_api_id = aws_api_gateway_rest_api.credit_api.id
  parent_id   = aws_api_gateway_rest_api.credit_api.root_resource_id
  path_part   = "credit-offer"
}

# Método POST para credit-offer
resource "aws_api_gateway_method" "credit_offer_post" {
  rest_api_id   = aws_api_gateway_rest_api.credit_api.id
  resource_id   = aws_api_gateway_resource.credit_offer.id
  http_method   = "POST"
  authorization = "NONE"
}

# Integración de credit-offer con Lambda
resource "aws_api_gateway_integration" "credit_offer_integration" {
  rest_api_id             = aws_api_gateway_rest_api.credit_api.id
  resource_id             = aws_api_gateway_resource.credit_offer.id
  http_method             = aws_api_gateway_method.credit_offer_post.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.credit_offer_lambda.invoke_arn
}

# Deployment del API Gateway
resource "aws_api_gateway_deployment" "api_deployment" {
  depends_on  = [
    aws_api_gateway_integration.info_perfil_integration,
    aws_api_gateway_integration.buscar_empresas_integration,
    aws_api_gateway_integration.credit_offer_integration
  ]
  rest_api_id = aws_api_gateway_rest_api.credit_api.id
}

# Stage para el API Gateway
resource "aws_api_gateway_stage" "api_stage" {
  stage_name    = "prod"
  rest_api_id   = aws_api_gateway_rest_api.credit_api.id
  deployment_id = aws_api_gateway_deployment.api_deployment.id
}

# Permiso para que API Gateway invoque la función Lambda: info-perfil
resource "aws_lambda_permission" "apigw_invoke_info_perfil" {
  statement_id  = "AllowAPIGatewayInvokeInfoPerfil"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.info_perfil_lambda.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_api_gateway_rest_api.credit_api.execution_arn}/*/*"
}

# Permiso para que API Gateway invoque la función Lambda: buscar-empresas
resource "aws_lambda_permission" "apigw_invoke_buscar_empresas" {
  statement_id  = "AllowAPIGatewayInvokeBuscarEmpresas"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.buscar_empresas_lambda.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_api_gateway_rest_api.credit_api.execution_arn}/*/*"
}

# Permiso para que API Gateway invoque la función Lambda: credit-offer
resource "aws_lambda_permission" "apigw_invoke_credit_offer" {
  statement_id  = "AllowAPIGatewayInvokeCreditOffer"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.credit_offer_lambda.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_api_gateway_rest_api.credit_api.execution_arn}/*/*"
}

# Crear una Web ACL en AWS WAF
resource "aws_wafv2_web_acl" "credit_api_waf" {
  name        = "credit-api-waf"
  scope       = "REGIONAL"
  description = "WAF para proteger el API Gateway"

  default_action {
    allow {}
  }

  rule {
    name     = "block-bad-requests"
    priority = 1

    action {
      block {}
    }

    statement {
      or_statement {
        statement {
          xss_match_statement {
            field_to_match {
              all_query_arguments {}
            }
            text_transformation {
              priority = 0
              type     = "URL_DECODE"
            }
          }
        }

        statement {
          sqli_match_statement {
            field_to_match {
              all_query_arguments {}
            }
            text_transformation {
              priority = 0
              type     = "URL_DECODE"
            }
          }
        }
      }
    }

    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "waf-metrics"
      sampled_requests_enabled   = true
    }
  }

  visibility_config {
    cloudwatch_metrics_enabled = true
    metric_name                = "waf-global-metrics"
    sampled_requests_enabled   = true
  }
}

# Asociar WAF con API Gateway
resource "aws_wafv2_web_acl_association" "credit_api_waf_association" {
  resource_arn = aws_api_gateway_stage.api_stage.arn
  web_acl_arn  = aws_wafv2_web_acl.credit_api_waf.arn
}




# Output para mostrar la URL de consumo del API
output "api_url_info_perfil" {
  value = "${aws_api_gateway_stage.api_stage.invoke_url}/info-perfil"
}

output "api_url_buscar_empresas" {
  value = "${aws_api_gateway_stage.api_stage.invoke_url}/buscar-empresas"
}

output "api_url_credit_offer" {
  value = "${aws_api_gateway_stage.api_stage.invoke_url}/credit-offer"
}


output "waf_acl_arn" {
  value = aws_wafv2_web_acl.credit_api_waf.arn
}