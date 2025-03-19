# Primera Intervención Website

A modern, responsive website for Primera Intervención built with Next.js, Tailwind CSS, and Sanity.io for content management.

## 🚀 Features

- **Modern UI/UX**: Built with Tailwind CSS and shadcn UI components
- **Responsive Design**: Optimized for all device sizes
- **Blog System**: Integrated with Sanity.io headless CMS
- **SEO Optimized**: Built with best practices for search engine visibility
- **Fast Performance**: Leveraging Next.js for optimal loading speeds

## 📋 Prerequisites

- Node.js (v14.0 or higher)
- npm or yarn
- Git
- A Sanity.io account (for content management)

## 🛠️ Installation

1. **Clone the repository**

```bash
git clone https://github.com/GramajoPablo/Primera-Intervencion-website.git
cd Primera-Intervencion-website
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-05-03
```

Replace `your_project_id` with your Sanity project ID.

## 🚀 Running the Project

### Development Mode

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Production Build

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 📂 Project Structure

```
Primera-Intervencion-website/
├── app/                  # Next.js App Router
│   ├── blog/             # Blog pages
│   ├── studio/           # Sanity Studio integration
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── sections/         # Page sections (Hero, Features, etc.)
│   ├── ui/               # UI components
│   └── footer.tsx        # Footer component
├── lib/                  # Utility functions and libraries
├── public/               # Static assets
├── schemas/              # Sanity.io schema definitions
├── .env.local            # Environment variables (create this file)
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
├── sanity.config.ts      # Sanity configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 📝 Content Management with Sanity

This project uses Sanity.io for content management, particularly for the blog section. 

### Accessing Sanity Studio

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to [http://localhost:3000/studio](http://localhost:3000/studio) in your browser

3. Log in with your Sanity credentials

### Content Structure

- **Posts**: Blog articles with title, content, author, and categories
- **Authors**: Information about content creators
- **Categories**: For organizing blog posts

For detailed instructions on using Sanity, refer to the [SANITY-SETUP.md](./SANITY-SETUP.md) file.

## 🔧 Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [Sanity.io](https://www.sanity.io/) - Headless CMS
- [Framer Motion](https://www.framer.com/motion/) - Animation library

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the terms of the license included in the repository.

## 📞 Contact

For any questions or suggestions, please contact the project maintainers.

---

Made with ❤️ by Primera Intervención Team
