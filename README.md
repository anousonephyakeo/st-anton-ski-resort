# 🏔️ Winter Expedition: St. Anton am Arlberg

**Project Code:** G1-ARLBERG-26  
**Dates:** February 7-14, 2026  
**Theme:** Luxury Experience. Smart Logistics.

A comprehensive, production-ready Next.js website for managing a premium ski expedition to St. Anton am Arlberg, Austria.

---

## 🚀 Features

### **Interactive Components**
- ⏰ **Live Countdown Timer** - Real-time countdown to expedition departure
- 💰 **Budget Calculator** - Adjust people, days, and equipment tier for dynamic cost estimates
- 📊 **Data Visualizations** - Chart.js powered:
  - Donut chart for budget distribution
  - Bar chart for risk assessment matrix
  - Radar chart for resort comparison analysis
- 🗺️ **Route Planning** - Complete Budapest → St. Anton waypoint breakdown
- 📅 **7-Day Itinerary** - Hour-by-hour schedule with activities and costs

### **Comprehensive Data**
- ✅ Complete team RACI matrix with role assignments
- ✅ Real-world venue information (hotels, restaurants, rental shops)
- ✅ Detailed budget breakdown (€6,060 total, €1,515/person)
- ✅ Risk management protocols with mitigation strategies
- ✅ Emergency contacts (Austrian Mountain Rescue, hospitals, embassy)
- ✅ Insurance coverage details (Generali Austria)
- ✅ Weather forecasts and packing lists

### **Design**
- 🎨 Modern "Alpine Night" dark theme (Deep Blue & Red)
- 💎 Glassmorphism effects and smooth animations
- 📱 Fully responsive (mobile-first design)
- ⚡ Optimized performance (static export ready)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type safety and developer experience |
| **Tailwind CSS** | Utility-first styling |
| **Chart.js** | Interactive data visualizations |
| **Lucide React** | Beautiful icon library |
| **date-fns** | Date manipulation |

---

## 📦 Installation

### **Prerequisites**
- Node.js 18+ installed
- npm or yarn package manager

### **Setup**

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at **http://localhost:3000**

---

## 🌐 Deployment

### **Option 1: Vercel (Recommended - FREE & Easiest)**

Vercel is the **fastest, free, and most reliable** option for deploying Next.js apps.

#### **Steps:**

1. **Push code to GitHub:**
   ```bash
   cd /Users/swizzxxx/Desktop/st.anon/stanon-web
   git init
   git add .
   git commit -m "Initial commit: St. Anton Expedition Website"
   git branch -M main
   git remote add origin https://github.com/anousonephyakeo/st-anton-expedition.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js configuration
   - Click "Deploy"
   - **Done!** Your site is live in ~2 minutes

3. **Custom Domain (Optional):**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `st-anton-expedition.com`)
   - Follow DNS setup instructions

#### **Why Vercel?**
- ✅ **Free tier** (perfect for this project)
- ✅ Automatic HTTPS
- ✅ Global CDN (super fast worldwide)
- ✅ Zero configuration
- ✅ Automatic deployments on `git push`
- ✅ Preview URLs for pull requests

---

### **Option 2: Netlify (Alternative FREE)**

1. **Build static export:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Drag & drop the `out/` folder
   - Or connect GitHub repository

---

### **Option 3: Traditional Hosting (Shared/VPS)**

If you have your own server:

```bash
# Build static site
npm run build

# The `out/` folder contains your static site
# Upload to any web server (Apache, Nginx, etc.)
```

---

## 📁 Project Structure

```
stanon-web/
├── app/
│   ├── globals.css          # Global styles & custom CSS
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page (all sections)
├── components/
│   ├── ui/
│   │   └── Layout.tsx       # Reusable UI components (Card, Badge, Section)
│   ├── BudgetCalculator.tsx # Interactive budget calculator
│   ├── Charts.tsx           # Chart.js visualizations
│   ├── CountdownTimer.tsx   # Live countdown component
│   └── Navbar.tsx           # Navigation with mobile menu
├── data/
│   └── expeditionData.ts    # All expedition data (2000+ lines)
├── public/                  # Static assets
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

---

## 🎨 Customization

### **Update Expedition Data**
Edit `data/expeditionData.ts` to modify:
- Team member details
- Budget amounts
- Itinerary activities
- Emergency contacts
- Venue information

### **Change Theme Colors**
Edit `tailwind.config.js`:
```js
colors: {
  alpine: {
    dark: '#020617',    // Background
    blue: '#1e40af',    // Accent blue
    red: '#dc2626',     // Accent red
    snow: '#f1f5f9',    // Light text
  }
}
```

### **Modify Layout**
All sections are in `app/page.tsx`:
- Hero Section
- Mission & Identity
- Team (RACI Matrix)
- Resort Comparison
- Logistics (Route & Schedule)
- Budget & Calculator
- Risk Management
- Itinerary (7 days)
- Emergency Contacts
- Footer

---

## 🔧 Development Commands

```bash
# Development server with hot reload
npm run dev

# Type checking
npx tsc --noEmit

# Linting
npm run lint

# Production build
npm run build

# Preview production build locally
npm start
```

---

## 📊 Data Highlights

- **Total Budget:** €6,060 (€1,515 per person)
- **Savings vs Agency:** €285 per person (15.8% ROI)
- **Distance:** 1,700 km round trip
- **Team:** 4 members with defined RACI roles
- **Ski Area:** 300 km of slopes, 85 lifts
- **Insurance:** €10,000 helicopter rescue coverage
- **Risks Identified:** 5 major risks with mitigation plans

---

## 🚨 Important Notes

### **Before Departure:**
1. ✅ Save emergency contacts to phones (Austrian Mountain Rescue: **140**)
2. ✅ Purchase winter sports insurance (mandatory)
3. ✅ Buy digital vignettes for Hungary & Austria
4. ✅ Download offline maps for route
5. ✅ Print hotel/rental confirmations

### **Insurance Requirement:**
All 4 team members **MUST** have winter sports insurance covering:
- Helicopter rescue (minimum €10,000)
- Medical expenses (€50,000+)
- Repatriation

Recommended: **Generali Austria** - Winter Sports Premium (€55/person)

---

## 📞 Support

For technical issues with the website:
- Check Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel support: [vercel.com/support](https://vercel.com/support)

For expedition questions:
- Contact Team Lead: **Antsa** (antsa@expedition.com)

---

## 📄 License

This project is for **Team G1-ARLBERG-26** internal use.  
Data sources: St. Anton Tourism, Ski Arlberg official sites, research compiled December 2025.

---

## 🎿 Credits

**Expedition Team:**
- **Antsa** - Lead Booker & Liaison
- **Bounsouthathip** - Logistics Lead
- **Khatsady** - Navigator
- **Anousone** - Treasurer

**Website Development:**  
Built with ❤️ for the ultimate St. Anton expedition experience.

---

**🏔️ See you on the slopes! 🇦🇹**

*"Luxury Experience. Smart Logistics."*
