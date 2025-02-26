# Chat Screen

A modern and responsive chat application built with **Next.js**, **Redux Toolkit**, and **Socket.IO**. This application allows users to send messages, reply to messages, navigate to replied messages, and switch between light and dark themes.

## Features

- **Real-time Messaging**: Send and receive messages in real-time using Socket.IO.
- **Reply to Messages**: Reply to any message in the chat.
- **Navigate to Replied Messages**: Click on a reply to navigate to the original message.
- **Theme Switching**: Switch between light and dark themes for better user experience.
- **Optimistic UI**: Messages are displayed optimistically before being confirmed by the server.
- **Redux State Management**: State is managed efficiently using Redux Toolkit.

## Technologies Used

- **Frontend**: Next.js, Redux Toolkit, TypeScript, Socket.IO Client
- **Backend**: Node.js, Express, Socket.IO
- **Styling**: CSS, Tailwind CSS, HeroUI, HeroIcons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Hossein-i/chat-screen.git
   cd chat-screen
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the frontend**:

   - Start the development server:

     ```bash
     npm run dev
     ```

4. **Open the application**:
   - Visit `http://localhost:3000` in your browser.

---

## Usage

### Sending a Message

1. Type your message in the input box at the bottom of the chat.
2. click the **Send** button to send the message.

### Replying to a Message

1. Click the **Reply** button on any message.
2. Type your reply in the input box and send it.

### Navigating to a Replied Message

1. Click on the **reply preview** below a message.
2. The chat will automatically scroll to the original message.

### Switching Themes

1. Click the **Theme Toggle** button (usually located in the top-right corner).
2. The application will switch between system, light and dark themes.

## Project Structure

```
chat-task/
├─ .husky/
│  ├─ commit-msg
│  └─ pre-commit
├─ public/
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ server/
│  ├─ express.server.js
│  └─ index.js
├─ src/
│  ├─ app/
│  │  ├─ favicon.ico
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ features/
│  │  └─ chat/
│  │     ├─ api/
│  │     │  └─ sockets/
│  │     │     ├─ chat.socket.ts
│  │     │     └─ index.ts
│  │     ├─ lib/
│  │     ├─ model/
│  │     │  ├─ index.ts
│  │     │  └─ slice.model.ts
│  │     ├─ types/
│  │     │  ├─ chat-state.type.ts
│  │     │  ├─ index.ts
│  │     │  └─ message.type.ts
│  │     └─ ui/
│  │        ├─ chat-background.ui.tsx
│  │        ├─ chat-input.ui.tsx
│  │        ├─ chat-message.ui.tsx
│  │        ├─ chat-messages.ui.tsx
│  │        ├─ chat-status.ui.tsx
│  │        ├─ chat-top-bar.ui.tsx
│  │        ├─ index.ts
│  │        └─ reply-message.ui.tsx
│  ├─ shared/
│  │  ├─ assets/
│  │  │  └─ patterns/
│  │  │     ├─ index.ts
│  │  │     └─ pattern-01.svg
│  │  ├─ hooks/
│  │  │  ├─ index.ts
│  │  │  └─ is-scrolled-to-bottom.hook.ts
│  │  ├─ providers/
│  │  │  ├─ app.provider.tsx
│  │  │  ├─ index.ts
│  │  │  ├─ store.provider.tsx
│  │  │  └─ ui.provider.tsx
│  │  ├─ redux/
│  │  │  ├─ index.ts
│  │  │  └─ store.redux.ts
│  │  ├─ styles/
│  │  │  ├─ globals.css
│  │  │  └─ index.ts
│  │  ├─ ui/
│  │  │  ├─ scroll-to-bottom-button/
│  │  │  │  ├─ index.ts
│  │  │  │  └─ scroll-to-bottom-button.ui.tsx
│  │  │  └─ theme-switcher/
│  │  │     ├─ index.tsx
│  │  │     └─ theme-switcher.ui.tsx
│  │  └─ utils/
│  │     ├─ apply-fade-effect.util.ts
│  │     ├─ get-viewport-height-percentage.util.ts
│  │     ├─ index.ts
│  │     ├─ is-scrolled-to-bottom.util.ts
│  │     ├─ navigate-to-id.util.ts
│  │     └─ scroll-to-bottom-of-parent.util.ts
│  └─ views/
│     └─ chat/
│        ├─ hooks/
│        │  ├─ chat.hook.ts
│        │  └─ index.ts
│        └─ ui/
│           ├─ chat.ui.tsx
│           └─ index.ts
├─ types/
   └─ global.d.ts
├─ .eslintrc
├─ .gitignore
├─ .prettierignore
├─ .prettierrc
├─ .stylelintrc
├─ commitlint.config.js
├─ eslint.config.mjs
├─ next-env.d.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ README.md
├─ tailwind.config.ts
└─ tsconfig.json
```

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) for the frontend framework.
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management.
- [TailwindCSS](https://tailwindcss.com/) for styling.
- [HeroUI](https://www.heroui.com/) for UI.
- [HeroIcons](https://heroicons.com/) for icons.
- [express.js](https://expressjs.com/) for the backend framework.
- [Socket.IO](https://socket.io/) for real-time communication.

## Contact

If you have any questions or feedback, feel free to reach out:

- **Name**: Hossein-i
- **Email**: sayhi@Hossein-i.ir
- **GitHub**: [Hossein-i](https://github.com/Hossein-i)
