export const posts = [
  {
    id: 1,
    slug: "mastering-framer-motion-nextjs",
    category: "Web Design",
    title: "Mastering Framer Motion in Next.js",
    excerpt:
      "Learn how to create high-end animations without compromising on performance.",
    readTime: "5 min read",
    date: "Feb 18, 2026",
    author: { name: "Alex Kim", avatar: "https://i.pravatar.cc/80?img=11" },
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80",
    tags: ["Next.js", "Animation", "Performance"],
    content: [
      {
        type: "lead",
        text: "Framer Motion has become the de-facto standard for React animations — but pairing it correctly with Next.js requires a handful of patterns most tutorials skip entirely.",
      },
      {
        type: "h2",
        text: "Why Framer Motion fits Next.js so well",
      },
      {
        type: "p",
        text: "The App Router introduced React Server Components, which means large chunks of your UI ship zero JavaScript to the client. Framer Motion's client-only nature slots naturally into this model: you mark animation components with `'use client'` and let the server handle everything static. The split is clean, intentional, and results in dramatically smaller bundles than animation libraries that ship unconditionally.",
      },
      {
        type: "p",
        text: "Beyond bundle size, Framer Motion's layout animations are uniquely suited to Next.js data-fetching patterns. When your list re-renders because a server action mutates data, `<AnimatePresence>` handles enter/exit automatically — no lifecycle bookkeeping needed.",
      },
      {
        type: "h2",
        text: "Setting up shared layout animations",
      },
      {
        type: "code",
        lang: "tsx",
        text: `// app/layout.tsx
import { AnimatePresence } from 'framer-motion'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </body>
    </html>
  )
}`,
      },
      {
        type: "p",
        text: "The `mode='wait'` prop ensures the exiting page finishes its exit animation before the entering page begins — critical for preventing z-index clashes and visual chaos during route transitions.",
      },
      {
        type: "h2",
        text: "Page transition component",
      },
      {
        type: "code",
        lang: "tsx",
        text: `'use client'
import { motion } from 'framer-motion'

const variants = {
  hidden:  { opacity: 0, y: 20 },
  enter:   { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -20 },
}

export default function PageTransition({ children }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.35, ease: [0.22, 0.68, 0, 1.2] }}
    >
      {children}
    </motion.div>
  )
}`,
      },
      {
        type: "callout",
        text: "💡 Tip: Keep your easing curve consistent across all page transitions. A mismatch between enter and exit easings is the number one cause of page transitions that 'feel off' even when technically correct.",
      },
      {
        type: "h2",
        text: "Scroll-triggered reveals with useInView",
      },
      {
        type: "p",
        text: "For content below the fold, Framer Motion's `useInView` hook pairs perfectly with `whileInView` variants. Unlike Intersection Observer boilerplate, this stays declarative and co-located with the component it animates.",
      },
      {
        type: "code",
        lang: "tsx",
        text: `'use client'
import { motion } from 'framer-motion'

export function RevealCard({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}`,
      },
      {
        type: "p",
        text: "The `once: true` option is essential for production apps — you almost never want elements to re-animate every time they scroll into view. Set a negative `margin` to trigger the animation slightly before the element fully enters the viewport for a more natural feel.",
      },
      {
        type: "h2",
        text: "Performance: what to watch out for",
      },
      {
        type: "p",
        text: "Framer Motion only animates `transform` and `opacity` on the GPU by default — the two properties that don't trigger layout or paint. Stick to these and you'll maintain 60fps even on mid-range mobile hardware. As soon as you animate `width`, `height`, or `top/left`, you're back in layout-thrashing territory.",
      },
    ],
    related: [2, 6],
  },
  {
    id: 2,
    slug: "designing-user-centric-dashboards",
    category: "UI/UX",
    title: "Designing User-Centric Dashboards",
    excerpt:
      "Principles for creating intuitive and efficient user interfaces that users love.",
    readTime: "4 min read",
    date: "Feb 12, 2026",
    author: { name: "Sara Patel", avatar: "https://i.pravatar.cc/80?img=5" },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    tags: ["Design", "Dashboards", "UX"],
    content: [
      {
        type: "lead",
        text: "The best dashboards aren't the ones packed with the most data — they're the ones that surface the right information at the right moment, then get out of the way.",
      },
      {
        type: "h2",
        text: "Start with user jobs, not data schemas",
      },
      {
        type: "p",
        text: "Before opening Figma, interview the people who will use the dashboard daily. Map their jobs-to-be-done: what decisions do they need to make, how often, and with what consequence? Data that doesn't serve a decision is visual noise — and noise destroys trust in a dashboard faster than any bug.",
      },
      {
        type: "h2",
        text: "The F-pattern and progressive disclosure",
      },
      {
        type: "p",
        text: "Eye-tracking studies consistently show that users scan dashboards in an F-shaped pattern: strong attention to the top-left, weakening as the eye moves down and right. Place your highest-stakes KPIs top-left. Use progressive disclosure — summary cards that expand to detail — to keep the initial view clean without hiding depth.",
      },
      {
        type: "callout",
        text: "📊 Rule of thumb: A dashboard that requires a training session to understand has already failed. Aim for zero-documentation comprehension for your primary use case.",
      },
      {
        type: "h2",
        text: "Color as a semantic layer",
      },
      {
        type: "p",
        text: "Resist the temptation to use color decoratively in dashboards. Reserve it for semantic meaning: red for degraded/critical, amber for warning, green for healthy. Users internalize this system quickly — and will panic unnecessarily if you use red for a neutral category label.",
      },
    ],
    related: [1, 4],
  },
  {
    id: 3,
    slug: "demystifying-serverless-functions",
    category: "Backend",
    title: "Demystifying Serverless Functions",
    excerpt:
      "Exploring the power of cloud-based compute without managing servers.",
    readTime: "6 min read",
    date: "Feb 8, 2026",
    author: { name: "Jordan Lee", avatar: "https://i.pravatar.cc/80?img=15" },
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
    tags: ["Backend", "Serverless", "Cloud"],
    content: [
      {
        type: "lead",
        text: "Serverless functions shift your mental model from 'servers I maintain' to 'functions I deploy' — and that shift has profound implications for cost, scaling, and developer velocity.",
      },
      {
        type: "h2",
        text: "The cold start problem — and when it doesn't matter",
      },
      {
        type: "p",
        text: "Cold starts are the most-cited criticism of serverless. When a function hasn't been invoked recently, the cloud provider needs to spin up a new execution environment — typically adding 200–800ms of latency. For user-facing APIs this is often unacceptable. But for background jobs, webhooks, and scheduled tasks, cold starts are entirely irrelevant.",
      },
      {
        type: "callout",
        text: "⚡ Provisioned concurrency (AWS Lambda) and minimum instances (Cloud Run) eliminate cold starts at a predictable cost — use them surgically for latency-sensitive endpoints only.",
      },
      {
        type: "h2",
        text: "Next.js Route Handlers as serverless functions",
      },
      {
        type: "code",
        lang: "ts",
        text: `// app/api/newsletter/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email || !email.includes('@')) {
    return NextResponse.json(
      { error: 'Invalid email' },
      { status: 400 }
    )
  }

  await db.subscriber.create({ data: { email } })
  return NextResponse.json({ success: true })
}`,
      },
      {
        type: "p",
        text: "Vercel deploys each Route Handler as an isolated serverless function automatically. You get regional edge deployment, automatic scaling to zero, and per-invocation billing without any infrastructure configuration.",
      },
    ],
    related: [5, 6],
  },
  {
    id: 4,
    slug: "building-design-systems-figma",
    category: "Figma",
    title: "Building Design Systems in Figma",
    excerpt:
      "How to structure scalable, maintainable design systems your whole team can use.",
    readTime: "7 min read",
    date: "Feb 4, 2026",
    author: { name: "Maya Chen", avatar: "https://i.pravatar.cc/80?img=9" },
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=80",
    tags: ["Figma", "Design Systems", "Components"],
    content: [
      {
        type: "lead",
        text: "A design system is a living product, not a deliverable. Building it in Figma means designing for handoff, maintenance, and contribution from day one.",
      },
      {
        type: "h2",
        text: "Tokens before components",
      },
      {
        type: "p",
        text: "Before building a single component, define your token layer: primitive tokens (raw values like `#7c3aed`), semantic tokens (role-based like `color/action/primary`), and component tokens (scoped like `button/background/default`). Figma Variables map perfectly to this hierarchy. Getting tokens right means changing your brand color later is a single variable update, not a search-and-replace.",
      },
      {
        type: "callout",
        text: "🎨 Use Figma's variable scoping to prevent tokens from being applied in wrong contexts — a spacing token should never appear in a color picker.",
      },
      {
        type: "h2",
        text: "The component API mindset",
      },
      {
        type: "p",
        text: "Think of every component as having a public API. Properties visible in the Figma panel are your props. Use boolean properties for on/off states, string properties for text, and instance swap properties for icon slots. Hide internal layers that consumers shouldn't touch using the visibility toggle in component properties.",
      },
    ],
    related: [2, 5],
  },
  {
    id: 5,
    slug: "advanced-tailwind-css-techniques",
    category: "Tailwind",
    title: "Advanced Tailwind CSS Techniques",
    excerpt:
      "Go beyond utilities — harness Tailwind's full power for complex layouts and themes.",
    readTime: "5 min read",
    date: "Jan 29, 2026",
    author: { name: "Chris Wang", avatar: "https://i.pravatar.cc/80?img=3" },
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
    tags: ["Tailwind", "CSS", "Theming"],
    content: [
      {
        type: "lead",
        text: "Most developers use Tailwind for layout and spacing, then reach for plain CSS when things get complex. With the right techniques, you rarely need to leave the utility layer.",
      },
      {
        type: "h2",
        text: "CSS variables + Tailwind = dynamic theming",
      },
      {
        type: "code",
        lang: "css",
        text: `/* globals.css */
:root {
  --color-brand: 124 58 237;   /* violet-600 as RGB triplet */
}

[data-theme="dark"] {
  --color-brand: 167 139 250;  /* violet-400 */
}`,
      },
      {
        type: "code",
        lang: "js",
        text: `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: 'rgb(var(--color-brand) / <alpha-value>)',
      },
    },
  },
}`,
      },
      {
        type: "p",
        text: "Storing colors as raw RGB triplets (without `rgb()` wrapper) lets Tailwind inject the opacity modifier automatically — `bg-brand/50` just works. This pattern lets you swap entire palettes via a single `data-theme` attribute with zero JavaScript class toggling.",
      },
      {
        type: "h2",
        text: "Arbitrary variants for complex selectors",
      },
      {
        type: "p",
        text: "Tailwind v3+ supports arbitrary variants for any selector you can dream of: `[&:nth-child(3)]:opacity-50`, `[.dark_&]:text-white`, `[@media(hover:hover)]:hover:scale-105`. This eliminates the last category of 'I have to write custom CSS for this' scenarios.",
      },
    ],
    related: [1, 6],
  },
  {
    id: 6,
    slug: "nextjs-app-router-deep-dive",
    category: "Next.js",
    title: "Next.js App Router Deep Dive",
    excerpt:
      "Everything you need to know about the App Router, layouts, and server components.",
    readTime: "8 min read",
    date: "Jan 22, 2026",
    author: { name: "Taylor Brooks", avatar: "https://i.pravatar.cc/80?img=7" },
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    tags: ["Next.js", "App Router", "RSC"],
    content: [
      {
        type: "lead",
        text: "The App Router isn't just a new file-based routing system — it's a fundamentally different mental model for how React apps are structured, fetched, and rendered.",
      },
      {
        type: "h2",
        text: "Server Components: the default you didn't know you wanted",
      },
      {
        type: "p",
        text: "In the App Router, every component is a Server Component by default. This means it runs on the server, has direct access to databases and file systems, and ships zero JavaScript to the client. The implications are significant: you can `await` directly inside components, co-locate data fetching with the UI that needs it, and keep sensitive logic server-side without a separate API layer.",
      },
      {
        type: "callout",
        text: "🚀 Server Components are not a new concept — they're the logical conclusion of a decade of 'fetch data close to the render' best practices. The App Router just makes them the default.",
      },
      {
        type: "h2",
        text: "Layout hierarchy and nested rendering",
      },
      {
        type: "code",
        lang: "text",
        text: `app/
├── layout.tsx          ← root layout (always rendered)
├── page.tsx            ← /
├── blog/
│   ├── layout.tsx      ← wraps all /blog/* routes
│   ├── page.tsx        ← /blog
│   └── [slug]/
│       └── page.tsx    ← /blog/:slug`,
      },
      {
        type: "p",
        text: "Layouts persist across navigations within their subtree — the `blog/layout.tsx` doesn't re-mount when navigating between blog posts. This makes layouts the right place for sidebars, navigation, and any state that should survive route transitions.",
      },
      {
        type: "h2",
        text: "Parallel Routes for complex UIs",
      },
      {
        type: "p",
        text: "Parallel Routes let you render multiple pages in the same layout simultaneously — perfect for modals that have their own URL, split-pane UIs, or dashboard widgets that load independently. Combined with Intercepting Routes, you can build Instagram-style photo modals that show the photo in a modal on desktop but full-page on direct navigation.",
      },
    ],
    related: [1, 3],
  },
];

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null;
}

export function getRelatedPosts(ids) {
  return posts.filter((p) => ids.includes(p.id));
}

export const categoryColors = {
  "Next.js":    { bg: "bg-violet-600",  text: "text-violet-600",  light: "bg-violet-50",  border: "border-violet-200" },
  "UI/UX":      { bg: "bg-blue-600",    text: "text-blue-600",    light: "bg-blue-50",    border: "border-blue-200" },
  "Web Design": { bg: "bg-emerald-600", text: "text-emerald-600", light: "bg-emerald-50", border: "border-emerald-200" },
  Backend:      { bg: "bg-rose-600",    text: "text-rose-600",    light: "bg-rose-50",    border: "border-rose-200" },
  Figma:        { bg: "bg-orange-500",  text: "text-orange-600",  light: "bg-orange-50",  border: "border-orange-200" },
  Tailwind:     { bg: "bg-sky-600",     text: "text-sky-600",     light: "bg-sky-50",     border: "border-sky-200" },
};