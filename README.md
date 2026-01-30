# El Shadai Adonai Maternity Services

A modern, responsive website for El Shadai Adonai Maternity Services built with React, TypeScript, and Tailwind CSS.

## Project Info

This is a Vite + React + TypeScript project featuring:
- Modern UI with shadcn/ui components
- Responsive design optimized for all devices
- Fast performance with Vite build tool
- Type-safe development with TypeScript

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn or pnpm

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>
cd el-shadai-adonai-main

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Tech Stack

- **Vite** - Build tool and dev server
- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **Lucide React** - Icon library
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## Project Structure

```
src/
├── assets/          # Images, videos, and other static assets
├── components/      # React components
│   ├── ui/         # shadcn/ui components
│   └── ...         # Custom components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
├── pages/          # Page components
└── test/           # Test files
```

## Deployment

### Deploying to Vercel

This project is configured for easy deployment on Vercel:

1. **Push to GitHub**
   ```sh
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <YOUR_GITHUB_REPO_URL>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the Vite configuration
   - Click "Deploy"

   The `vercel.json` file is already configured with:
   - Build command: `npm run build`
   - Output directory: `dist`
   - SPA routing rewrites: All routes (like `/services`, `/contact`) are automatically rewritten to `/index.html`, enabling shareable deep links. Static assets are served directly without rewriting.

3. **Environment Variables** (if needed)
   - Add any environment variables in Vercel dashboard
   - Under Project Settings → Environment Variables
   - Restart deployment after adding variables

### Manual Deployment

1. **Build the project**
   ```sh
   npm run build
   ```

2. **Deploy the `dist/` folder**
   - Upload the contents of the `dist/` folder to your hosting provider
   - Ensure your server is configured for SPA routing (all routes should serve `index.html`)

### Build Configuration

The project uses Vite for building. The build output is optimized and minified for production.

- **Output directory**: `dist/`
- **Base path**: `/` (can be configured in `vite.config.ts` if deploying to a subdirectory)

## Important Notes

### Large Media Files

The project includes a video file (`WhatsApp Video 2026-01-24 at 15.25.38.mp4`) in `src/assets/` that is approximately 9.6MB. For production, consider:
- Using a CDN (e.g., Cloudinary, AWS S3) for large media files
- Optimizing video files before committing (compression, lower resolution)
- Using video hosting services (YouTube, Vimeo) and embedding
- The video is currently included in the build but uses lazy loading and metadata preload to minimize initial load impact

### Favicon

The project includes a favicon setup using the logo image. The favicon is configured in `index.html` and uses the logo from the `public` folder. For production, consider:

- Creating optimized favicon files (favicon.ico, favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png)
- Using online tools like [Favicon Generator](https://realfavicongenerator.net/) to generate all required sizes
- The current setup uses `/favicon-temp.jpeg` as a temporary solution

### Environment Variables

If you need to add environment variables:
1. Create a `.env` file (already in `.gitignore`)
2. Use `import.meta.env.VITE_*` prefix for Vite environment variables
3. Add variables in Vercel dashboard for production

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

See [LICENSE](LICENSE) file for details.

## Support

For issues or questions, please contact the development team.
