# Lista de Tarefas

Aplicacao web de lista de tarefas (To-Do List) desenvolvida com HTML, CSS e JavaScript puro, com persistencia de dados via API REST no MockAPI.

![Status](https://img.shields.io/badge/status-finalizado-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-f7df1e?logo=javascript&logoColor=000)
![HTML5](https://img.shields.io/badge/HTML5-estrutura-e34f26?logo=html5&logoColor=fff)
![CSS3](https://img.shields.io/badge/CSS3-estilos-1572b6?logo=css3&logoColor=fff)
![API](https://img.shields.io/badge/API-MockAPI-10b981)

## Preview

Se quiser deixar seu repositorio mais atrativo, adicione aqui um print ou gif da interface:

```md
! [alt text](image.png)
```


## Acesso ao projeto

![](https://img.shields.io/badge/Acessar-Tarefas-2563eb?logo=github&logoColor=fff)


## Funcionalidades

- Listagem de tarefas ao carregar a pagina
- Criacao de novas tarefas
- Marcacao e desmarcacao de tarefas concluidas
- Exclusao de tarefas
- Atualizacao automatica da lista apos criar, concluir e remover

## Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- Fetch API
- MockAPI

## Estrutura de pastas

```bash
.
├── index.html
├── src
│   ├── app.js
│   └── style.css
└── README.md
```


## API utilizada

Base URL:

```txt
https://68fa2550ef8b2e621e7ef179.mockapi.io/listaTarefas
```

Operacoes implementadas:

- `GET /listaTarefas` - listar tarefas
- `POST /listaTarefas` - criar tarefa
- `PUT /listaTarefas/:id` - atualizar status de conclusao
- `DELETE /listaTarefas/:id` - remover tarefa

## Melhorias planejadas

- [ ] Validar campo vazio antes de enviar
- [ ] Adicionar criacao de tarefa com tecla Enter
- [ ] Melhorar tratamento de erros da API
- [ ] Ajustar responsividade para mobile

## Autor

Desenvolvido por Gabriel Izidoro para estudos de desenvolvimento web.
