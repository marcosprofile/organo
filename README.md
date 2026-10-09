# Organo

Aplicação desenvolvida com React para cadastrar colaboradores e organizá-los por times, exibindo suas informações em cards.

Projeto realizado durante o curso **React: desenvolvendo com JavaScript**, da Alura, como revisão dos fundamentos da biblioteca antes de avançar para integração com APIs.

## Funcionalidades

- Cadastro de colaboradores por formulário.
- Associação de cada colaborador a um time.
- Exibição dos colaboradores em cards.
- Organização dos cards por time.
- Exibição apenas dos times que possuem colaboradores.

## Tecnologias

- React
- JavaScript
- HTML e JSX
- CSS

## O que aprendi

### Desenvolvimento declarativo

Compreendi como descrever a interface com base nos dados da aplicação. Em vez de alterar elementos do DOM manualmente, atualizo o estado e o React renderiza a interface correspondente.

### Componentização

Pratiquei a divisão da interface em componentes reutilizáveis, como banner, campos de formulário, botão, times e cards de colaboradores.

Essa organização facilita a manutenção e reduz a repetição de código.

### JSX

Utilizei JSX para estruturar a interface dentro dos componentes, combinando marcação com expressões JavaScript.

### Props

Utilizei props para passar informações e funções entre componentes, permitindo personalizar seu conteúdo e comportamento.

Também pratiquei a comunicação de eventos do componente filho para o pai por meio de funções recebidas como props.

### Eventos e interação

Trabalhei com eventos de alteração de campos e envio do formulário, conectando as ações do usuário à lógica da aplicação.

### Estado com useState

Utilizei o hook `useState` para armazenar informações que mudam durante o uso da aplicação, como os valores dos campos e os colaboradores cadastrados.

Aprendi que atualizar o estado permite refletir essas mudanças na interface.

### Formulários controlados

Pratiquei o controle dos campos de formulário pelo estado do React:

- O atributo `value` representa o valor atual.
- O evento `onChange` atualiza esse valor.
- O envio do formulário utiliza os dados armazenados no estado.

### Arrays e renderização de listas

Utilizei métodos de arrays para organizar e apresentar os dados:

- `map()` para transformar colaboradores em elementos da interface.
- `filter()` para selecionar os colaboradores de cada time.
- Spread (`...`) para criar um novo array ao adicionar um colaborador, preservando os dados anteriores.

### Elevação de estado

Pratiquei a centralização do estado em um componente pai quando diferentes componentes precisam trabalhar com os mesmos dados.

O formulário informa o novo cadastro ao componente responsável pelo estado, que disponibiliza os colaboradores para a renderização dos times.

### Renderização condicional

Utilizei condições para controlar quais elementos aparecem na tela, como exibir um time apenas quando ele possui colaboradores.

### Refatoração e organização

Pratiquei a identificação de código repetido e a criação de componentes para organizar melhor a aplicação.

### Depuração e publicação

Trabalhei com investigação de erros e correção de problemas durante o desenvolvimento, além de conhecer o fluxo de publicação da aplicação.

## Fluxo da aplicação

1. O usuário preenche os dados do colaborador.
2. Seleciona o time ao qual ele pertence.
3. Envia o formulário.
4. O novo colaborador é adicionado ao estado da aplicação.
5. O React atualiza a interface e exibe o card no time correspondente.

## Escopo

Esta versão trabalha com dados no estado da aplicação, sem integração com API ou banco de dados.

Os cadastros realizados durante o uso não são persistidos após recarregar a página.

## Créditos

Projeto desenvolvido como parte do curso **React: desenvolvendo com JavaScript**, da Alura.
