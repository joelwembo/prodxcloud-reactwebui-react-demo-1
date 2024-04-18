# terraform {
#   backend "remote" {
#     hostname     = "app.terraform.io"
#     organization = "prodxcloud"
#     workspaces {
#       name = "prodxcloud"
#     }
#   }
# }

terraform {
  backend "s3" {
    bucket         = "website-app-route53"
    region         = "us-east-1"
    key            = "state/terraform.tfstate"
    encrypt        = true
  }
}
