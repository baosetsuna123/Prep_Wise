<div align="center">

# 🎙️ **PrepWise**

</div>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js Badge" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Badge" />
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase Badge" />
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS Badge" />
</p>

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## ✨ Features

- 🌟 **AI-Powered Interviewer**: Practice job interviews with an AI interviewer.
- 🔒 **Authentication**: Secure sign-up and sign-in functionality using Firebase.
- 🎨 **Modern UI**: Built with TailwindCSS for a sleek and responsive design.
- ⚡ **Real-Time Updates**: Instant feedback and updates during the interview process.

## 📂 Folder Structure

```plaintext
voice_agent/
├── app/                # Application pages and layouts
│   ├── (auth)/         # Authentication-related pages (sign-in, sign-up)
│   ├── (root)/         # Root-level pages
│   └── layout.tsx      # Main layout file
├── components/         # Reusable UI components
│   ├── ui/             # UI-specific components (buttons, forms, etc.)
│   └── AuthForm.tsx    # Authentication form component
├── constants/          # Application constants
├── firebase/           # Firebase configuration files
├── lib/                # Utility functions and actions
├── public/             # Static assets (images, etc.)
├── types/              # TypeScript type definitions
└── README.md           # Project documentation
```

This structure ensures a clean and modular organization for scalability and maintainability.

## 📚 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## ☁️ Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
