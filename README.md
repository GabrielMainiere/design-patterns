# Desafio Design Pattern 1 - Monitor de Preço de Criptomoedas

## Descrição
Este é um aplicativo de console que monitora o preço de uma criptomoeda em tempo real.  
O programa solicita ao usuário o nome da moeda (ex.: bitcoin, ethereum, solana) e exibe seu preço atual em dólares.

O sistema implementa estratégias de alerta flexíveis utilizando **Design Patterns**:

- **ThresholdStrategy**: dispara alerta se o preço ultrapassar valores definidos de compra ou venda.
- **VariationStrategy**: dispara alerta se a moeda variar mais de X% em Y minutos.

## Requisitos do Sistema
- O aplicativo roda em loop até o usuário digitar `sair`.
- A configuração (moeda padrão, valores de compra/venda, percentual de variação) é lida apenas uma vez a partir do arquivo `config.json`.
- A lógica de alerta é flexível e utiliza o padrão **Strategy**.
- A API utilizada para obter os preços das criptomoedas é a [Coingecko API](https://docs.coingecko.com/docs/setting-up-your-api-key).

# Desafio Design Pattern 2 - Curriculum Builder

## Descrição
Este é um aplicativo de console que permite aos usuários criar currículos personalizados passo a passo.  
O sistema utiliza o **Design Pattern Builder** para facilitar a montagem do currículo, permitindo adicionar informações de forma incremental.

O usuário pode informar:

- Nome
- Contato
- Experiência profissional (múltiplas entradas)
- Formação acadêmica (múltiplas entradas)

## Requisitos do Sistema

- O sistema solicita os dados em etapas, permitindo adicionar várias experiências profissionais e formações acadêmicas.
- O currículo é construído utilizando o padrão **Builder**.
- O resultado pode ser exportado em dois formatos:
  - Texto simples (`.txt`)
  - JSON (`.json`)
- O programa roda em loop até o usuário digitar `exit`.

# Desafio Design Pattern 3 - Standardized Products

## Descrição
Este aplicativo de console recebe arquivos de produtos de diferentes fornecedores e padroniza todas as informações para um formato único.  
Ele suporta os formatos:

- **CSV**
- **JSON**
- **XML**

Cada produto é padronizado para a seguinte estrutura:

```ts
interface Product {
  id: string;
  name: string;
  price: number;
}

