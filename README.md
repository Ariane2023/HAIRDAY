# ✂️ Hairday
Hairday é uma aplicação web de agendamento para corte de cabelo. Desenvolvida com HTML, CSS, JavaScript moderno (ES6+), Webpack e JSON Server, permite aos usuários visualizar horários disponíveis, agendar e cancelar compromissos de forma intuitiva.

# 📸 Preview
🔗 Acesse o projeto online na Vercel
(https://hairday-r3l6-rfkbd5odh-ariane2023s-projects.vercel.app/)
![image](https://github.com/user-attachments/assets/7cb0c903-e1bd-452c-96de-8a94d25d1f02)


# 🚀 Funcionalidades
📆 Visualização de horários disponíveis

🖊️ Agendamento de horário

❌ Cancelamento de agendamento

⏰ Atualização automática da agenda

💅 Interface moderna e responsiva

⚙️ Separação de código por módulos

# 🛠️ Tecnologias Utilizadas
HTML5 + CSS3

JavaScript (ESModules)

dayjs — manipulação de datas

Webpack — bundler e build

Babel — transpiler ES6+

JSON Server (apenas local)

Vercel — hospedagem

# 📁 Estrutura de Pastas
hairday/
├── dist/                 # Arquivos de build
├── src/
│   ├── libs/             # Configuração do dayjs
│   ├── modules/          # Módulos JS organizados
│   ├── services/         # Lógica de API (JSON Server)
│   ├── styles/           # Arquivos CSS
│   └── main.js           # Arquivo principal de entrada
├── server.json           # Banco de dados fake (JSON Server)
├── webpack.config.js     # Configuração do Webpack
├── package.json
└── index.html
💻 Como rodar localmente
## Clone o repositório
git clone https://github.com/seu-usuario/hairday.git
cd hairday

## Instale as dependências
npm install

## Inicie o servidor fake (JSON Server)
npm run server

## Em outro terminal, rode a aplicação com Webpack Dev Server
npm run dev

# 📦 Build para produção

npm run build
Os arquivos finais estarão na pasta /dist.

# 👩‍💻 Desenvolvedora
Feito com ❤️ por Ariane de Abreu Costa

LinkedIn

GitHub

# 📄 Licença
Este projeto está licenciado sob a MIT License.
