This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Considerações

- Estruturar o Projeto
    - **[Tipagem]** Todo em TypeScript, sem nenhum "any", porém ao usar a biblioteca "leaflet" algumas tipagens davam erro mesmo aparentemente estarem certas, eu evito "any" e "@ts-ignore" a todo o custo, estou usando apenas um "@ts-ignore"
    - **[Eslint]** A configuração do Eslint e Prettier é minha, ainda não achei uma lib legal disso, que junte os dois, então eu mesmo tenho as minhas configurações
    - **[Testes]** Tive alguns problemas com o Jest com TypeScript, em projetos anteriores nunca peguei esse erro, fiz o teste da página List (a Home), e ao tentar fazer outros testes de páginas, o jest quebrava, eu gastei um tempo considerável tenta identificar o motivo, mas sem sucesso, cheguei a iniciar um projeto do zero com o template do próprio Nextjs com Jest e sem sucesso, imagino que seja algo a ver com o "leaflet" também, como tempo foi precioso nesse teste, entrego com a dor no coração de não ter feito mais testes. Minha ideia inicial seria fazer teste de integração também com Cypress, mas não consegui com esse prazo.
    - **[Git hook]** Coloquei um hook para ser executado em todo o commit, ele valida os testes, tipagem e eslint antes de commitar, também validar o formato da mensagem do commit
- Técnicas de estilização com CSS-in-js
    - **[Biblioteca]** Usei a biblioteca Stitches, ela é mais leve e mais rápida que a clássica styled-components
    - **[Tema]** No arquivo *components/theme.ts* pode-se ver as cores centralizadas, assim com as medias queries entre outras várias usadas no tema
    - **[BEM]** "Block, Element, Modifier" é uma técnica clássica de nomeação de elements no CSS, usei isso para complementar o CSS-in-JS, ou seja, eu criava um elemento que seria o component CSS-in-JS e estilizava os elementos filhos usando classes ao estilo BEM.

      >  Nota: CSS-in-JS é a técnica de estilo mais pesada que existe, eu
      > gosto muito da Utility First CSS, como alternativa, o Tailwind CSS
      > usado, apesar de eu não usar Tailwind.

- Comunicação com API Externa
    - **[Requisições]** Usei Axios para as requisições, talvez pudesse ter usado fetch nativo, porém eventualmente precisamos de alguns métodos que o Axios tem nos permitem criar um catch global, ou atém mesmo interceptar todas as requisições, ou seja, fetch nativo é mais leve, porém axios nos permite mais possibilidades, talvez não precisaria tê-lo usado aqui, mas por uma questão de escalabilidade, prefiro usá-lo.
    - **[Tratamento de erros]** Todas as requisições, seja feita no server side ou no client side, tem um try-catch para garantir que o usuário seja informado de algo deu errado. Caso seja server side, eu passo o payload vazio e a página é carregada com uma mensagem no corpo informando que houve algum erro, caso seja client side, aparece um alert informando o erro. Coloquei um timeout de 2 segundos para as requisições no Axios. Não fiz nenhuma tratativa de retry, pois não vi necessidade, assim como exibir o erro específico para o usuário, mostro apenas uma frase genérica.
- Manipulação dos dados
    - **[global store]** Não vi necessidade de se ter um estado global como um redux aqui, os dados basicamente vinham da API e eu os exibia, boa parte dos estados dos formulários ficou a cargo da biblioteca de validação, o *react-hook-form*.
- Tratamento de formulários
    - **[Biblioteca]** Adotei a *react-hook-form*, primeira vez que o uso, estava mais familiarizado com o *Formik*, mas quis tentar algo novo, e gostei bastante, caso vejam algo foram de padrão, qualquer feedback é válido. Um dos motivos de usá-lo também, é que ele é bem mais leve que o Formik, uma coisa que aprendi com projetos grandes é que cada lib nova conta, temos que ter cautela com o tamanho do bundle final.
    - **[Validação]** Todos os campos são obrigatórios, ao tentar submeter o formulário com algum campo vazio é mostrado uma mensagem de erro abaixo do campo. Não há validação de tipo de campo, pois estou usando o tipo pelo próprio input, ou seja, uma solução nativa e não pela biblioteca, outra coisa, não há validação de quantidade de caracteres por campo, mas de novo, poderia fazer isso pela biblioteca ou nativamente, não fazer foi uma escolha.
  > Nota: os formulários não estão numa ordem específica, assim como a possível tradução de "from.name" que virou "Fazendeiro" e "to.name" que virou "Supervisor", o nome no objeto não ajuda muito a identificar o que é cada coisa. Outra coisa, acabei unificando os campos latitude e longitude em um campo de geolocalização, como a ideia era clicar no mapa, achei que ficaria mais agradável ter um campo só.

- Saber lidar com Mapas (Leaflet)
    - **[Biblioteca]** Nem conhecia essa biblioteca, e ela não é amigável ao Nextjs, pois só trabalha client side, tudo que foi relacionado a Mapa, tive que criar uma importação dinâmica para não dar erro.
    - **[Experiência]** Ao criar uma nova fazendo, é perdida permissão para obter sua geolocalização pelo navegador, com isso, eu início o mapa com o endereço da Bovcontrol dos EUA e então faço uma animação pra o local atual da pessoal. Caso o formulário seja de editar, ele simplesmente carrega a localização.
- Componentização
    - **[Formulários]** A página de criar e editar são o mesmo componente, pois há muita lógica em comum.
    - **[Botões]** Já fiz vários designs systems, e criar uma componente genérico é mais complexo que criar um específico, ou seja, eu poderia ter feito um componente Button com suporte a múltiplas cores, com suporte a ícone a esquerda, a direita, só com texto e só com ícone, porém isso quer tempo e planejamento, fiz sim vários botões Button, não me orgulho disso, mas decidi priorizar outras coisas nesse teste, sei com certeza que isso não ficou legal.
    - **[Formulário]** Criei um laço para gerar os campos dinamicamente, ao invés de ter vários componentes declarados na mesma página, isso é bom porque permite mais facilmente você adicionar mais campos sem muito esforço. Todos os filtros da Loft (loft.com.br) são dinâmicos, então não estranhe essa abordagem, no caso eu fiz apenas 2 tipos de inputs, o text e o radio, eu ia até usar um checkbox, mas por questão de praticidade, adaptei o campo de "tem supervisor" que seria um booleado para um radio com "sim e não"
    - **[Componentes específicos]**: Uma abordagem muito boa é fazer tudo o mais generico possível para poder ser utilizado em vários lugares, se repararem na minha estrutura de pastas "flow", abaixo dela vai ter componentes também, ali são componentes específicos, os componentes genéricos ficam na raiz do projeto na pasta componentes. Reforço meu argumento do caso do botão, fazer algo gênico geralmente é melhor, porém mais demorado, então eu fui "fazendo" e depois fui tentando mergear algumas coisas em comum, como as páginas de criar e editar.
      > Nota: Não entendam errado, eu não faço primeiro e penso em juntar depois componentes repetidos, o que aconteceu aqui foi que eu comecei um projeto SEM LAYOUT, e depois de pronto, fui estilizar, e ao invés de refatorar boa parte dos meus componentes visuais, optei pela duplicação de responsabilidade, no mundo real, eu receberia o hand-off do designer e eu desenharia/planejaria o que eu posso reaproveitar de cada componente, e vou além, alinhando com o Designer para que o nome dos componentes do código sejam o mesmo do Figma/Sketch. Eu não imaginei que fazer primeiro e estilizar depois poderia ter esse efeito colateral, tanto que quando eu planejo criar uma tela nova, as primeira tarefas são estilizar e depois fazer funcionar, aqui eu inverti, pois não queria gastar tempo em estilização.
- Navegação de Páginas
    - **[Experiência]**: O anunciado pedia que houvesse opções de apagar, editar e visualizar já na tela inicial, isso nada mais é que um CRUD simples, com uma experiência de 10 anos atrás. Optei por mudar isso um pouco, o usuário pode editar e apagar ao clicar no item da lista.
