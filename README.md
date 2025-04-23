# Eco Conecta API 🌳💧♻️

## Descrição

A Eco Conecta API é um mini projeto de backend desenvolvido em Node.js com Express, utilizando ES Modules. O objetivo desta API é fornecer informações práticas e rápidas sobre sustentabilidade, ajudando pessoas a tomarem decisões mais conscientes no dia a dia e a encontrarem dados relevantes sobre o meio ambiente.

Este projeto foi criado como parte de um exercício de desenvolvimento backend, focando na criação de rotas GET úteis, armazenamento simulado de dados e organização do código seguindo padrões como MVC e o uso de Módulos ES6.

## Estrutura do Projeto

O código está organizado da seguinte forma:

eco-conecta-api/
├── node_modules/        
├── src/                  # Código fonte da aplicação
  ├── controllers/      # Lógica de controle das rotas
  │   └── ecoController.js
  ├── models/           # Camada de dados (simulados)
  │   └── ecoData.js
   └── routes/           # Definição das rotas da API
       └── ecoRoutes.js         
├── package-lock.json    
├── package.json          
├── README.md             
└── server.js             # Ponto de entrada e inicialização do servidor Express

## Como Rodar Localmente

Para executar este projeto no seu computador, siga os passos:

1.  **Pré-requisitos:** Certifique-se de ter o [Node.js](https://nodejs.org/) (versão 14 ou superior, para bom suporte a ES Modules) instalado, que já inclui o `npm`.
2.  **Clonar o Repositório (Opcional):** Se você estiver baixando de um repositório Git:

3.  **Instalar Dependências:** Na pasta raiz do projeto (`eco-conecta-api`), abra um terminal e execute:
    ```bash
    npm install
    ```
    Isso instalará o framework Express e outras dependências listadas no `package.json`.
4.  **Iniciar o Servidor:** Execute o seguinte comando no terminal:
    ```bash
    node server.js
    ```
5.  **Acessar:** O servidor estará rodando em `http://localhost:3000`.

## Rotas da API (Endpoints)

A API atualmente oferece as seguintes rotas GET:

---

### 1. Dica de Reciclagem Aleatória

* **Método:** `GET`
* **Caminho:** `/dicas-reciclagem`
* **Descrição:** Retorna uma dica aleatória sobre como reciclar diferentes materiais.
* **Exemplo de Resposta (JSON):**
    ```json
    {
      "dica": "Lave as embalagens recicláveis (potes, garrafas) para remover restos de comida."
    }
    ```

---

### 2. Informações sobre Consumo de Água

* **Método:** `GET`
* **Caminho:** `/info-consumo-agua`
* **Descrição:** Retorna dados simulados sobre o consumo médio de água em atividades domésticas e dicas para economizar.
* **Exemplo de Resposta (JSON):**
    ```json
    {
      "consumoMedioLitros": {
        "banho15min": 135,
        "lavarLoucaMaquina": 40,
        "lavarLoucaMao": 100,
        "vasoSanitarioConvencional": 10,
        "vasoSanitarioAcoplado": 6,
        "lavarRoupaMaquina": 135
      },
      "dicasEconomia": [
        "Reduza o tempo no banho. 5 minutos são suficientes!",
        "Feche a torneira ao escovar os dentes ou fazer a barba.",
        // ... outras dicas
      ]
    }
    ```

---

### 3. Alternativas para Plásticos

* **Método:** `GET`
* **Caminho:** `/alternativas-plasticos`
* **Descrição:** Retorna uma lista de sugestões de alternativas para itens comuns de plástico de uso único.
* **Exemplo de Resposta (JSON):**
    ```json
    [
      {
        "itemPlastico": "Copo descartável",
        "alternativa": "Copo reutilizável (vidro, inox, silicone), caneca ou xícara."
      },
      {
        "itemPlastico": "Canudo plástico",
        "alternativa": "Canudo de inox, vidro, bambu, silicone ou simplesmente beber direto no copo."
      },
      // ... outras alternativas
    ]
    ```

---

### 4. Calendário Ambiental

* **Método:** `GET`
* **Caminho:** `/calendario-ambiental`
* **Descrição:** Retorna uma lista de datas e eventos importantes relacionados ao meio ambiente.
* **Exemplo de Resposta (JSON):**
    ```json
    [
      { "data": "22 de Março", "evento": "Dia Mundial da Água" },
      { "data": "22 de Abril", "evento": "Dia da Terra" },
      // ... outras datas
    ]
    ```

---

## Tecnologias Utilizadas

* Node.js
* Express.js
* ES Modules (import/export)
