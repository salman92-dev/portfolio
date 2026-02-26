"use client"
import { useState, useEffect, useRef } from "react";
import { posts } from "../data/Posts";

const categories = ["All", "Next.js", "UI/UX", "Figma", "Tailwind", "Backend"];

const featuredPost = {
  category: "Next.js",
  title: "Mastering Framer Motion in Next.js",
  excerpt:
    "Deep dives into Next.js animations and how to build web-grade performance without compromising on motion design.",
  readTime: "5 min read",
  date: "Feb 18, 2026",
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80",
};

// const posts = [
//   {
//     id: 1,
//     category: "Web Design",
//     title: "Mastering Framer Motion in Next.js",
//     excerpt: "Learn how to create high-end animations without compromising on performance.",
//     readTime: "5 min read",
//     image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&q=80",
//   },
//   {
//     id: 2,
//     category: "UI/UX",
//     title: "Designing User-Centric Dashboards",
//     excerpt: "Principles for creating intuitive and efficient user interfaces that users love.",
//     readTime: "4 min read",
//     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
//   },
//   {
//     id: 3,
//     category: "Backend",
//     title: "Demystifying Serverless Functions",
//     excerpt: "Exploring the power of cloud-based compute without managing servers.",
//     readTime: "6 min read",
//     image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&q=80",
//   },
//   {
//     id: 4,
//     category: "Figma",
//     title: "Building Design Systems in Figma",
//     excerpt: "How to structure scalable, maintainable design systems your whole team can use.",
//     readTime: "7 min read",
//     image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&q=80",
//   },
//   {
//     id: 5,
//     category: "Tailwind",
//     title: "Advanced Tailwind CSS Techniques",
//     excerpt: "Go beyond utilities — harness Tailwind's full power for complex layouts and themes.",
//     readTime: "5 min read",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
//   },
//   {
//     id: 6,
//     category: "Next.js",
//     title: "Next.js App Router Deep Dive",
//     excerpt: "Everything you need to know about the App Router, layouts, and server components.",
//     readTime: "8 min read",
//     image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&q=80",
//   },
// ];

const categoryColors = {
  "Next.js": "bg-violet-600",
  "UI/UX": "bg-blue-600",
  "Web Design": "bg-emerald-600",
  Backend: "bg-rose-600",
  Figma: "bg-orange-500",
  Tailwind: "bg-sky-600",
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700;9..40,900&display=swap');

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-18px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.94); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes pillPop {
    0%   { transform: scale(1); }
    45%  { transform: scale(1.14); }
    100% { transform: scale(1); }
  }
  @keyframes ctaUp {
    from { opacity: 0; transform: translateY(48px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes barGrow {
    from { width: 0; opacity: 0; }
    to   { width: 10rem; opacity: 1; }
  }
  @keyframes shimmer {
    0%   { background-position: -600px 0; }
    100% { background-position: 600px 0; }
  }

  .blog-root { font-family: 'DM Sans', 'Segoe UI', sans-serif; }

  .anim-slide-down { animation: slideDown 0.5s cubic-bezier(.22,.68,0,1.2) both; }
  .anim-fade-up    { animation: fadeUp 0.55s cubic-bezier(.22,.68,0,1.2) both; }
  .anim-scale-in   { animation: scaleIn 0.48s cubic-bezier(.22,.68,0,1.2) both; }
  .anim-fade-in    { animation: fadeIn 0.4s ease both; }
  .anim-cta        { animation: ctaUp 0.6s cubic-bezier(.22,.68,0,1.2) 0.9s both; }
  .anim-bar        { animation: barGrow 0.65s cubic-bezier(.22,.68,0,1.2) 0.35s both; }
  .anim-pill-pop   { animation: pillPop 0.32s cubic-bezier(.22,.68,0,1.2); }

  .card-lift {
    transition: transform 0.26s cubic-bezier(.22,.68,0,1.2), box-shadow 0.26s ease;
  }
  .card-lift:hover {
    transform: translateY(-7px) scale(1.012);
    box-shadow: 0 20px 45px rgba(0,0,0,0.11);
  }

  .img-zoom { overflow: hidden; }
  .img-zoom img {
    transition: transform 0.55s cubic-bezier(.22,.68,0,1.2);
  }
  .img-zoom:hover img { transform: scale(1.07); }

  .search-wrap {
    transition: box-shadow 0.22s ease, border-color 0.22s ease;
  }
  .search-wrap:focus-within {
    box-shadow: 0 0 0 3px rgba(139,92,246,0.22);
    border-color: #7c3aed !important;
  }

  .btn-read svg {
    transition: transform 0.18s ease;
  }
  .btn-read:hover svg { transform: translateX(4px); }

  .badge {
    transition: transform 0.15s ease;
  }
  .badge:hover { transform: scale(1.07); }

  .grid-fade-out { opacity: 0; transform: translateY(6px); transition: opacity 0.18s ease, transform 0.18s ease; }
  .grid-fade-in  { opacity: 1; transform: translateY(0); transition: opacity 0.22s ease, transform 0.22s ease; }

  .pill-btn {
    transition: background 0.18s, color 0.18s, border-color 0.18s, box-shadow 0.18s;
  }

  @media (max-width: 640px) {
    .featured-img { min-height: 180px; max-height: 200px; }
  }
`;

function useInView() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function PostCard({ post, index }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl overflow-hidden border border-gray-200 flex flex-col card-lift ${visible ? "anim-fade-up" : "opacity-0"}`}
      style={{ animationDelay: visible ? `${index * 75}ms` : "0ms" }}
    >
      <div className="img-zoom h-44 relative">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-semibold text-white badge ${categoryColors[post.category] || "bg-violet-600"}`}>
          {post.category}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-sm font-bold text-gray-900 leading-snug mb-2">{post.title}</h3>
        <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">{post.excerpt}</p>
        <button className="btn-read flex items-center gap-1 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1.5 w-fit transition-colors"
        onClick={()=>window.location=`${post.slug}`}
        >
          Read More
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function InsightsBlog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [popping, setPopping] = useState(null);
  const [search, setSearch] = useState("");
  const [gridVisible, setGridVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // stagger mount slightly for header animation
    const t = setTimeout(() => setMounted(true), 30);
    return () => clearTimeout(t);
  }, []);

  const handleCategory = (cat) => {
    if (cat === activeCategory) return;
    setPopping(cat);
    setGridVisible(false);
    setTimeout(() => {
      setActiveCategory(cat);
      setGridVisible(true);
    }, 210);
    setTimeout(() => setPopping(null), 420);
  };

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const showFeatured = (activeCategory === "All" || activeCategory === "Next.js") && search === "";

  return (
    <>
      <style>{css}</style>
      <div className="blog-root min-h-screen bg-[#e8e8ed]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14 pb-32">

          {/* ── Header ── */}
          <div className={`flex flex-col sm:flex-row sm:items-start justify-between mb-2 gap-4 sm:gap-6 ${mounted ? "anim-slide-down" : "opacity-0"}`}>
            <div>
              <h1 className="text-3xl sm:text-5xl font-black text-gray-900 leading-tight tracking-tight">
                Insights &amp; Innovations
              </h1>
              <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-sm">
                Deep dives into Next.js, UI/UX design, and the future of web development.
              </p>
              <div className={`mt-3 h-0.5 bg-violet-500 rounded-full ${mounted ? "anim-bar" : "w-0 opacity-0"}`} />
            </div>

            {/* Search */}
            <div className="sm:flex-shrink-0 sm:mt-2 w-full sm:w-auto">
              <div className="search-wrap flex items-center gap-2 bg-white border border-violet-300 rounded-full px-4 py-2 shadow-sm w-full sm:w-56">
                <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search topics..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 w-full"
                />
                {search && (
                  <button onClick={() => setSearch("")} className="text-gray-400 hover:text-gray-600 flex-shrink-0 transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* ── Category Pills ── */}
          <div
            className={`flex flex-wrap gap-2 mt-6 mb-8 sm:mb-10 ${mounted ? "anim-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "130ms" }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className={`pill-btn px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium border ${
                  popping === cat ? "anim-pill-pop" : ""
                } ${
                  activeCategory === cat
                    ? "bg-violet-600 text-white border-violet-600 shadow-md"
                    : "bg-white text-gray-600 border-gray-300 hover:border-violet-400 hover:text-violet-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ── Featured Post ── */}
          {showFeatured && (
            <div
              className={`mb-8 sm:mb-10 ${mounted ? "anim-scale-in" : "opacity-0"}`}
              style={{ animationDelay: "210ms" }}
            >
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Featured Post</h2>
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm flex flex-col md:flex-row card-lift">
                <div className="md:w-2/5 img-zoom featured-img">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6 sm:p-8 flex flex-col justify-center">
                  <span className={`inline-block px-3 py-1 rounded-md text-xs font-semibold text-white mb-3 w-fit badge ${categoryColors[featuredPost.category] || "bg-violet-600"}`}>
                    {featuredPost.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug mb-3">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{featuredPost.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-gray-400 text-xs">
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                      </svg>
                      {featuredPost.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />
                      </svg>
                      {featuredPost.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── Posts Grid ── */}
          <div className={gridVisible ? "grid-fade-in" : "grid-fade-out"}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
              {filtered.map((post, i) => (
                <PostCard key={post.id} post={post} index={i} />
              ))}
            </div>

            {/* Empty state */}
            {filtered.length === 0 && (
              <div className="text-center py-16 text-gray-400 anim-fade-in">
                <div className="text-4xl mb-3">🔍</div>
                <p className="text-lg font-medium text-gray-500">No posts found.</p>
                <p className="text-sm mt-1">Try a different search or category.</p>
                <button
                  onClick={() => { setSearch(""); handleCategory("All"); }}
                  className="mt-5 text-xs font-semibold text-violet-600 hover:text-violet-800 underline underline-offset-2 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ── CTA Banner ── */}
        <div className="sticky mx-3 sm:mx-6 md:mx-10 bottom-4 sm:bottom-6 md:bottom-8 bg-[#1c1c1c] rounded-2xl text-white px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center justify-between shadow-2xl anim-cta">
          <p className="text-xs sm:text-sm font-medium leading-snug">
            Like what you see? Let&apos;s build something similar for your brand.
          </p>
          <button className="bg-violet-600 hover:bg-violet-700 active:scale-95 transition-all duration-150 text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl whitespace-nowrap w-fit">
            Start a Project
          </button>
        </div>
      </div>
    </>
  );
}