# Projeto React Native com Arquitetura Modular

Este projeto é um template para aplicações React Native com uma arquitetura modular, escalável e de fácil manutenção. O projeto utiliza o **NativeWind** para estilização, sendo a preferência em relação ao styled-components devido à sua eficiência e integração com Tailwind CSS.

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento mobile.
- **Expo**: Plataforma e conjunto de ferramentas para desenvolvimento React Native.
- **NativeWind**: Biblioteca que integra Tailwind CSS com React Native para estilização rápida e responsiva.
- **React Navigation**: Gerenciamento de rotas e navegação.
- **Context API**: Gerenciamento de estado global.
- **Axios ou Fetch API**: Para requisições HTTP.

## Estrutura de Pastas

- **src/**: Contém todo o código-fonte da aplicação.
  - **assets/**: Recursos estáticos como imagens e fontes.
    - **images/**: Imagens utilizadas na aplicação.
  - **components/**: Componentes reutilizáveis e genéricos.
    - **Button/**: Exemplo de componente de botão customizado.
      - **index.js**: Componente funcional.
  - **screens/**: Telas da aplicação.
    - **HomeScreen/**: Tela principal.
      - **index.js**: Componente da tela.
  - **navigation/**: Configurações de navegação.
    - **index.js**: Stack, Tab ou Drawer Navigator.
  - **hooks/**: Hooks customizados para reutilização de lógica.
    - **useCustomHook.js**: Exemplo de hook personalizado.
  - **contexts/**: Contextos para gerenciamento de estado.
    - **AuthContext.js**: Contexto de autenticação.
  - **services/**: Serviços externos e APIs.
    - **api.js**: Configuração de API e chamadas.
  - **utils/**: Funções utilitárias e constantes.
    - **helpers.js**: Funções de apoio.
  - **App.js**: Ponto de entrada da aplicação.

## Configuração do Ambiente

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Coin-Nodes/apk-template.git
   cd seu-projeto
   ```

2. **Instale as dependências::**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Scripts Disponíveis::**
   ```bash
   "scripts": {
   "start": "expo start",
   "android": "expo start --android",
   "ios": "expo start --ios",
   "web": "expo start --web"
   },
   ```
4. **Execute a aplicação::**

   ```bash
    npm run start
    # ou
    yarn start

   ```

## Configuração do Ambiente

O projeto utiliza o NativeWind para estilização dos componentes, permitindo o uso de classes do Tailwind CSS diretamente nos componentes React Native.

### Por que NativeWind?

- Performance: Estilos são aplicados de forma eficiente.
- Produtividade: Escrita de estilos rápida usando classes utilitárias.
- Consistência: Facilita a manutenção de um design consistente em toda a aplicação

---

© 2024 Coin Nodes LTDA. Todos os direitos reservados.

O código e a documentação escritos pertencem e foram construídos pela Coin Nodes LTDA. Estes possuem propriedade intelectual e estão protegidos pelas leis de copyright. Qualquer uso não autorizado, reprodução ou distribuição sem o consentimento explícito da Coin Nodes LTDA é estritamente proibido.
