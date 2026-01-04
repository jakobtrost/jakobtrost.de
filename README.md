# Jakob Trost Website

Personal website for Jakob Trost, Full Stack Developer (former CTO @Greyd).

## Features

- Multiple color schemes (dark, vibrant, orange, cyan, aqua)
- Responsive design
- Interactive card animations
- Color scheme switcher
- Contact information and social links

## Prerequisites

- PHP 7.4 or higher
- Node.js 14.0 or higher (for npm scripts)

## Quick Start

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/jakobtrost/jakobtrost.de
   cd jakobtrost.de
   ```

2. **Install dependencies** (optional - no actual dependencies for PHP)
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:8080](http://localhost:8080)

## Available Scripts

- `npm start` - Start the local PHP development server
- `npm run dev` - Alias for start command
- `npm run serve` - Alias for start command
- `npm run build` - No build step required for PHP site
- `npm run clean` - No cleanup required

## Development

The website is built with:
- **PHP** - Backend logic and color scheme randomization
- **HTML** - Semantic markup
- **CSS** - Styling with CSS custom properties and animations
- **JavaScript** - Interactive features and animations

## File Structure

```
jakobtrost.de/
├── index.php          # Main PHP file with HTML structure
├── style.css          # Main stylesheet
├── script.js          # JavaScript functionality
├── fonts/             # Custom fonts (Clash Display)
├── img/               # Images and favicons
├── package.json       # NPM configuration
└── README.md          # This file
```

## Color Schemes

The website features 5 different color schemes that are randomly selected on each page load:
- **Dark** - Professional dark theme
- **Vibrant** - Bright pink and blue
- **Orange** - Warm orange tones
- **Cyan** - Cool cyan and blue
- **Aqua** - Ocean-inspired colors

## Browser Support

- Modern browsers with CSS custom properties support
- Mobile responsive design
- Touch-friendly interactions

## License

MIT License - feel free to use this code for your own projects!
