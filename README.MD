# Carteira Digital – Exercício de Testes Unitários com Mocha

## Sobre o Projeto

Este projeto tem como objetivo a prática de testes unitários em JavaScript, utilizando Node.js e o framework Mocha. Ele traz a simulação de uma carteira digital com funcionalidades básicas: consultar saldo, depositar valores e gastar valores. Você irá praticar tanto a execução e configuração de um projeto Node.js, quanto a estruturação de testes unitários profissionais.

## Tecnologias Utilizadas

- **Node.js** (versão recomendada: 16.x ou superior)
- **JavaScript (ES6)**
- **Mocha** (para testes unitários)
- **Chai** (biblioteca de asserções – recomendada)

## Como Baixar e Configurar o Projeto

1. **Clone este repositório**
   ```sh
   git clone 
   cd 
   ```

2. **Instale as dependências**
   ```sh
   npm install
   ```

3. **Estrutura do projeto**
   - `Carteira.js` – Classe principal da carteira digital.
   - `test/` – Pasta recomendada para arquivos de teste.
   - Arquivo de testes sugerido: `test/testeCarteira.test.js`

4. **Como executar os testes**
   ```sh
   npm test
   ```
   ou, diretamente com mocha:
   ```sh
   npx mocha
   ```

## Tarefa: Exercício de Testes Unitários com Mocha – Classe Carteira

### Objetivo

Praticar a criação de **testes unitários em JavaScript** utilizando o framework **Mocha**, organizando os testes com `describe` e `it`. O foco é validar a classe `Carteira`, responsável por simular uma carteira digital com saldo, depósito e gasto.

### Cenário

Você recebeu uma classe chamada `Carteira` com estes métodos:

- `consultarSaldo()`: retorna o saldo atual da carteira (inicialmente zero).
- `depositar(valor)`: adiciona um valor positivo ao saldo; lança erro se o valor for inválido (≤ 0 ou não numérico).
- `gastar(valor)`: subtrai um valor positivo do saldo; lança erro se o valor for inválido ou se o saldo for insuficiente.

### Sua tarefa

- Criar um arquivo de testes para a classe usando **Mocha**.
- Estruturar os testes utilizando `describe` para agrupamento por método, e `it` para casos específicos.
- Cobrir os seguintes cenários:

  - Verificar que o saldo inicial é zero ao criar uma nova carteira.
  - Testar que depositar um valor positivo aumenta o saldo corretamente.
  - Validar que depositar um valor negativo ou não numérico lança erro.
  - Testar que gastar um valor válido reduz o saldo corretamente.
  - Validar que gastar um valor negativo ou não numérico lança erro.
  - Validar que tentar gastar mais do que o saldo disponível lança erro.
  - Garantir que o saldo atual é retornado corretamente após operações.

### Observações

- Utilize asserções adequadas para validar os resultados (por exemplo, `assert` ou `chai`).
- Teste caminhos normais e casos de erro.
- Use `beforeEach` ou outros hooks do Mocha, se necessário para garantir ambiente limpo nos testes.
- Mantenha o código de testes organizado, legível e, se possível, comentado.

Se desejar, compartilhe seus testes ao final para revisão e dicas de aprimoramento, inclusive sugestões sobre a própria classe `Carteira`.

Caso queira um exemplo inicial de código de teste, solicite!