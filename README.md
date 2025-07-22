# Flashcard Scavenger Hunt 🌟

A fun and interactive way to learn vocabulary through real-world object recognition and drawing. Turn your everyday environment into a language learning playground!

**Live Demo:** https://flashcard.poom.dev *(Special thanks for the inspiration!)*

## ✨ Features

- 📸 **Photo Recognition** - Take photos of objects to match vocabulary words
- ✏️ **Drawing Canvas** - Draw pictures when objects aren't available
- 🗣️ **Text-to-Speech** - Hear correct pronunciation with AWS Polly
- 🎮 **Multiplayer Mode** - Compete with friends in real-time challenges
- 🌍 **Multi-language Support** - English, Japanese, Chinese, Vietnamese
- 🎯 **AI-Powered Verification** - Google Gemini AI validates your answers
- 🎨 **Built-in Drawing Tools** - Express creativity when photos aren't possible
- 🎉 **Celebration Effects** - Confetti animations for correct answers
- 📚 **Album Organization** - Create themed vocabulary collections

## 🎯 How It Works

1. **Create Albums** - Organize vocabulary by theme or language
2. **Add Words** - Take photos of objects to build your vocabulary
3. **Challenge Mode** - Test yourself with random word challenges
4. **Multiplayer Fun** - Compete with friends in real-time matches
5. **Track Progress** - See your scores and improvements over time

## 🛠️ Tech Stack

### Frontend
- **[Nuxt 3](https://nuxt.com/)** - Vue.js Framework for the web app
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS styling
- **[Vue Drawing Canvas](https://github.com/razztyfication/vue-drawing-canvas)** - Interactive drawing functionality
- **[@iconify/vue](https://iconify.design/)** - Beautiful icon system

### Backend & APIs
- **[Grist](https://getgrist.com/)** - Database and data management
- **[Google Gemini AI](https://deepmind.google/technologies/gemini/)** - Image recognition and verification
- **[AWS Polly](https://aws.amazon.com/polly/)** - Text-to-speech synthesis

### Real-time Features
- **[PartyKit](https://partykit.io)** - Real-time multiplayer functionality
- **WebSockets** - Live connection management

### Image Processing
- **[Sharp](https://sharp.pixelplumbing.com/)** - High-performance image processing
- **[Compressor.js](https://fengyuanchen.github.io/compressorjs/)** - Client-side image compression

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- Grist account and API key
- Google Gemini API key
- PartyKit account (for multiplayer)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd flashcard-scavenger-hunt
   ```

2. **Install dependencies**
   ```bash
   # Main application
   bun install
   # or
   npm install
   
   # PartyKit server
   cd party
   bun install
   # or
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```

4. **Configure your `.env` file:**
   ```env
   # Grist Database
   GRIST_API_KEY=your_grist_api_key_here
   
   # Google Gemini AI
   GEMINI_API_KEY=your_gemini_api_key_here
   
   # PartyKit (for multiplayer)
   NUXT_PUBLIC_PARTYKIT_HOST=your_partykit_host
   ```

### Database Setup (Grist)

Create these tables in your Grist document:

**Albums Table:**
| Column | Type | Description |
|--------|------|-------------|
| id | Integer | Primary key |
| Name | Text | Album name |
| Languages | Text | JSON array of language codes |
| CreatedAt | DateTime | Creation timestamp |

**Words Table:**
| Column | Type | Description |
|--------|------|-------------|
| id | Integer | Primary key |
| Word | Text | Vocabulary word |
| Meaning | Text | Translation/meaning |
| Pronunciation | Text | Phonetic pronunciation |
| Language | Text | Language code (zh/ja/en/vi) |
| AlbumId | Reference | Reference to Albums table |
| Photos | Reference | Reference to Photos table |
| Key | Text | Grouping key for multi-language |

**Photos Table:**
| Column | Type | Description |
|--------|------|-------------|
| id | Integer | Primary key |
| Photo | Attachments | Image attachment |

### Deploy PartyKit Server

```bash
cd party
bun install
bun run deploy
```

Copy the deployed URL to your `.env` file as `NUXT_PUBLIC_PARTYKIT_HOST`.

### Run the Application

```bash
# Development mode
bun run dev

# Production build
bun run build
bun start
```

Visit `http://localhost:3000` to start learning! 🎉

## 🎮 Usage

### Creating Your First Album
1. Click the "+" button on the homepage
2. Enter an album name (e.g., "Kitchen Objects")
3. Select target languages
4. Start adding vocabulary by taking photos!

### Challenge Mode
- **Single Player**: Practice at your own pace
- **Multiplayer**: Compete with friends in real-time
- Use camera, drawing, or both to answer challenges

### Pro Tips
- 📱 Works great on mobile devices
- 🎨 Use drawing mode for abstract concepts
- 🔊 Enable sound for pronunciation practice
- 👥 Share album IDs with friends for multiplayer fun

## 🤝 Contributing

We welcome contributions! Please feel free to submit issues and pull requests.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

**Special thanks to [heypoom](https://github.com/heypoom)** for the inspiration and demonstration of what's possible with interactive vocabulary learning! 🌟

### Built With Love
- Powered by modern web technologies
- Designed for learners of all ages
- Made possible by the amazing open source community

---

**Happy Learning!** 📚✨

*Turn the world around you into your personal language classroom!*