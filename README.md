# 1. Solução
As funcionalidades foram disponibilizadas através de API RESTful.

## Documentacao de API

A API foi documentada com swagger disponel em [localhost:3000/api](http://localhost:3000/api)

## Stack

Nest.js - https://docs.nestjs.com/

Sequeliza - https://sequelize.org/docs/v6/

SQLite - https://sequelize.org/docs/v7/databases/sqlite/


# 2. Desenho arquitetural do software

## 2.1 C4 Nivel 1
```mermaid
---
title: System Context diagram for Marketplace System
---
C4Context
  Enterprise_Boundary(b0, "Marketplace System") {
    Person(user, "User", "Interacts with the Marketplace system")
    Person(staff, "Staff", "Interacts with the Backoffice system")

    Container(mrktsys, "Web App Marketpalce System", "NextJS", "Allow users to purchase products")
    Container(bkosys, "Web App Backoffice System", "NextJS", "Allows staff controll resources <br> of marcketplace")
    Container(prodService, "Marketplace Service", "NestJS", "Store all of core Marketplace information")
  }

  Rel(user, mrktsys, "Uses")
  Rel(staff, bkosys, "Uses")
  Rel(bkosys, prodService, "Uses")
  Rel(mrktsys, prodService, "Uses")

  UpdateElementStyle(prodService, $bgColor="#A5C6E8")

  UpdateLayoutConfig($c4ShapeInRow="2")
```

## 2.1 C4 Nivel 2
```mermaid
---
title: Container Diagram for Product System
---
C4Container
  Enterprise_Boundary(b0, "Marketplace System") {
    Person(user, "User", "Interacts with the Marketplace system")

    Container(mrktsys, "Web App Marketpalce System", "NextJS", "Allow users to purchase products")


    System_Boundary(b1, "Web App Marketpalce System") {
      Container(productApi, "Product API", "NestJS", "Handles HTTP requests and business logic")
      SystemDb_Ext(SystemE, "Database", "Stores all products <br> information.")
    }
  }
  Rel(user, mrktsys, "Uses")
  Rel(mrktsys, productApi, "Uses", "HTTP/Json")
  Rel(productApi, SystemE, "reads from and <br> writes to", "Sequelize ")


  UpdateLayoutConfig($c4ShapeInRow="2")

```

# 3. Estrutura de Pastas

```
📂 nestjs-mvc-project
├── 📁 src
│   ├── 📁 product
│   │   ├── 📄 product.controller.ts   # Controlador para gerenciar requisições HTTP
│   │   ├── 📄 product.service.ts      # Lógica de negócio para produtos
│   │   ├── 📄 product.repository.ts   # Interação com o banco de dados
│   │   ├── 📄 product.model.ts        # Definição da entidade Product
│   │   ├── 📄 product.module.ts       # Módulo NestJS para encapsular a funcionalidade
│   │   ├── 📄 dto
│   │   │   ├── create-product.dto.ts  # DTO para criação de produto
│   │   │   ├── update-product.dto.ts  # DTO para atualização de produto
│   │   └── 📄 interfaces
│   │       ├── product.interface.ts   # Interface para tipagem da entidade
│   │       └── product.repository.interface.ts  # Interface para o repositório
│   ├── 📄 app.module.ts                # Módulo principal da aplicação
│   ├── 📄 main.ts                      # Ponto de entrada da aplicação NestJS
```

# 4. Explicação dos componentes

- product.model - Define a estrutura da entidade Product.

- product.controller - Controlador que recebe e processa requisições HTTP.

- product.service - Contém a lógica de negócio e orquestra chamadas ao repositório.

- product.repository - Responsável por interagir com o banco de dados.

- dto/ - Armazena os Data Transfer Objects (DTOs) para validação de entrada de dados no controller.

# 5. Entrega do Código

O codigo esta disponivelno [Github](https://github.com/Jamesasj/bootcamp-arq-soft-xpe-final)

# 6. Project setup

O servico e executado em [localhost:3000/api](http://localhost:3000/api)

- Resolver dependencias do projeto

```bash
$ npm install
```

- Executar o projeto

```bash
# production mode
$ npm run start:prod
```

