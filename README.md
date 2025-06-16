# AI Chat Assistant

A modern AI-powered chatbot application built with Next.js 15, OpenAI API, and beautiful UI components. Experience intelligent conversations with a sleek, responsive interface.

## Features

- 🤖 AI-powered chat using OpenAI's GPT models
- 💬 Real-time conversation interface
- 🎨 Modern, responsive design with animations
- 🌓 Dark/light mode support
- 📱 Mobile-friendly chat experience
- ⚡ Fast and optimized performance
- 🔒 Secure API handling

## Getting Started

1. Clone this repository or use it as a template
2. Install dependencies:
   ```bash
   bun install
   # or
   npm install
   ```

3. Set up your OpenAI API key:
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_actual_api_key_here
   ```
   Get your API key from: https://platform.openai.com/api-keys

4. Run the development server:
   ```bash
   bun dev
   # or
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser and start chatting!

## Customization

This template is designed to be fully customizable:

- **Styling**: Modify the theme in `app/globals.css`
- **Layout**: Edit the layout structure in `app/layout.tsx`
- **Content**: Replace placeholder content in `app/page.tsx`
- **Components**: Add or modify components in the `components` directory

## Deployment

Deploy your customized template using Vercel, Netlify, or any other hosting service that supports Next.js.

## Learn More

To learn more about the technologies used in this template:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)

## License

This template is MIT licensed.


