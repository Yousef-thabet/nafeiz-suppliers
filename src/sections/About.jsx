import { ArrowRight } from "lucide-react";

const highlights = [
  { title: "中国制造", label: "关注优质制造资源" },
  { title: "国际贸易", label: "探索跨境贸易机会" },
  { title: "供应链协作", label: "重视高效沟通与协调" },
  { title: "长期合作", label: "致力于建立互信关系" },
];

export default function About() {
  return (
    <section id="about" className="nafeiz-about">
      <svg className="nafeiz-about-art" viewBox="0 0 1000 253" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="nafeiz-panel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#e5effb" />
          </linearGradient>
          <linearGradient id="nafeiz-base" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#e8f1fc" stopOpacity="0" />
            <stop offset="1" stopColor="#e8f1fc" />
          </linearGradient>
          <clipPath id="nafeiz-photo-mask">
            <path d="M 390 223 Q 390 214 396 196 L 424 89 Q 428 73 447 67 L 724 12 Q 754 3 767 22 Q 778 36 780 57 L 788 211 Q 790 233 768 233 L 407 233 Q 390 233 390 223 Z" />
          </clipPath>
        </defs>
        <path d="M 0 60 L 1000 0 L 1000 253 L 0 253 Z" fill="url(#nafeiz-base)" />
        <path d="M 31 199 L 61 48 Q 67 24 97 27 L 430 43 Q 459 44 491 36 L 719 8 Q 750 2 775 16 L 1000 0 L 1000 210 Q 985 253 935 253 L 69 234 Q 29 234 31 199 Z" fill="url(#nafeiz-panel)" />
        <image href="/images/about.png" x="340" y="-12" width="470" height="265" preserveAspectRatio="xMaxYMid slice" clipPath="url(#nafeiz-photo-mask)" />
      </svg>
      <div className="nafeiz-about-copy">
        <p className="nafeiz-about-eyebrow">关于 NAFEIZ</p>
        <h2>专业的国际贸易与<br />供应链合作伙伴</h2>
        <p className="nafeiz-about-description">NAFEIZ Trade 致力于与中国制造商和供应商建立合作联系，关注产品采购、跨境贸易及供应链协作，共同探索国际市场的商业机会。</p>
        <a className="nafeiz-about-button" href="#services">了解 NAFEIZ <ArrowRight size={15} /></a>
      </div>
      <img className="nafeiz-about-mobile" src="/images/about.png" alt="国际商务建筑概念图" loading="lazy" />
      <div className="nafeiz-about-highlights">
        {highlights.map(({ title, label }) => (
          <div className="nafeiz-about-highlight" key={title}><strong>{title}</strong><span>{label}</span></div>
        ))}
      </div>
    </section>
  );
}