<h1 align="center">
    <img alt="Proffy" title="Proffy" src="web/src/assets/images/logo.svg" width="220px" />
</h1>

<p align="center">
  <a href="#-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar-o-projeto">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/pedromiiguel/Proffy?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/pedromiiguel/Proffy">
	
  
  <a href="https://github.com/pedromiiguel/Proffy/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/pedromiiguel/Proffy">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/pedromiiguel/Proffy/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/pedromiiguel/Proffy?style=social">
  </a>
</p>

<br/>

<h1 align="center">
    <img alt="Proffy" title="Proffy" src=".github/design.png" width="100%" />
</h1>

## 🔖 Sobre

Desenvolvindo durante a Next Level Week 2.0 da Rocketseat, o Proffy é um aplicativo web e mobile que realiza conexão entre alunos e professores, o professor pode se cadastrar e ministrar aulas para os alunos que se conectarem a ele e o aluno se conecta com um professor através da disciplina preferida e o horário. 

## 🚀 Tecnologias

Tecnologias utilizazadas no projeto:

-  [Typescript](https://www.typescriptlang.org/)
-  [Node.js](https://nodejs.org/en/)
-  [ReactJS](https://reactjs.org/)
-  [React Native](http://facebook.github.io/react-native/)
-  [Expo](https://expo.io/)

## 🛠 Layout

O layout da aplicação está disponível no Figma. Para poder utilizá-lo é necessário uma conta no Figma.

 - [Layout Web](https://www.figma.com/file/GHGS126t7WYjnPZdRKChJF/Proffy-Web?node-id=0%3A1)
 - [Layout Mobile](https://www.figma.com/file/e33KvgUpFdunXxJjHnK7CG/Proffy-Mobile)


## 🔧 Como executar o projeto

### Pré-requisitos

<p>É necessário possuir o Node.js instalado na máquina </p>
<p>E também possuir um gerenciador de tarefas NPM ou Yarn.</p>
<p>E também é essencial ter o Expo instalado de forma global na máquina.</p>


```bash
# Clone este repositório
$ git clone https://github.com/pedromiiguel/Proffy.git

# API
# Acesse a pasta do projeto no terminal/cmd
$ cd server

# Instale as dependências
$ npm install

# Configurando o banco de dados e criando as tabelas.
$ npm run knex:migrate #$ yarn knex:migrate

# Inicie a API
$ npm start

# Aplicação web
$ cd web

# Instalando as dependências do projeto.
$ npm install ou #yarn

# Inicie a aplicação web
$ npm start ou #yarn start

# O servidor inciará na porta:3000 - acesse http://localhost:3000 

# Aplicação mobile
$ cd mobile

# Instalando as dependências do projeto.
$ npm install ou #yarn

# Inicie a aplicação mobile
$ npm start ou #yarn start
```