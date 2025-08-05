# 🌟 Zakr — Educational Platform

Zakr is a smart, bilingual educational platform that empowers students with personalized tools for better academic time management, scheduling, progress tracking, and learning.

🚀 Built with **Next.js App Router**, **Tailwind CSS**, **Framer Motion**, and **Shadcn/UI**, Zakr offers a modern user experience with seamless language switching and responsive design.

---

## 📸 Preview

![Zakr Landing Page screenshot](ar: https://i.postimg.cc/6pbpPvQ7/localhost-3000-2.png
en:https://i.postimg.cc/SsJTGHv2/localhost-3000-4.png
)
![Zakr Landing Page deployment](https://zakr.vercel.app)

---

## 🔤 Languages

- 🇬🇧 English (`/en`)
- 🇸🇦 العربية (`/ar`)

Supports full direction switching (LTR/RTL) and dynamic routing.

---

## ✨ Features

- 🎯 **Smart Scheduling** – Visual planners and goal-based session tracking  
- 🌐 **Bilingual Support** – Toggle between Arabic and English  
- 🧠 **Progress Insights** – Real-time progress tracking  
- 💡 **Responsive Design** – Mobile-first and accessible  
- ⚡ **Lightweight & Fast** – Optimized for performance  
- 🛠️ **Modular Architecture** – Easy to scale with Next.js App Router

---

## 📁 File Structure

```
app/
  ├── [lang]/              # Dynamic language routing (/en, /ar)
  │   ├── layout.tsx       # Locale-aware layout (sets dir, lang)
  │   ├── page.tsx         # Landing page
  │   └── components/      # Nav, Hero, Benefits, Footer, etc.
  ├── page.tsx             # Redirects to default language
  ├── layout.tsx           # Minimal wrapper for root
public/
  └── locales/
        ├── en.json        # English translations
        └── ar.json        # Arabic translations
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/abdelrahman1dev/zakr-landingpage.git
cd zakr-landingpage
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Start the dev server

```bash
npm run dev
# or
yarn dev
```

> Open `http://localhost:3000` — 

---



## 🧪 Tech Stack

- ⚙️ Next.js (App Router)
- 💨 Tailwind CSS +  Shadcn
- ⚛️ React 18
- 🌐 i18n via JSON files
- 🎞️ Framer Motion (animation)
- 📦 Deployed via Vercel

---

## 🧠 Learn More

- [Next.js App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Shadcn/UI](https://ui.shadcn.com/)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to [open an issue](https://github.com/abdelrahman1dev/zakr-landingpage/issues) or submit a pull request.

---



## 💡 Author
Made with ❤️ by **Abdelrahman**  
