import { ArrowRight } from "lucide-react";

const highlights = [
  { title: "中国制造", label: "关注优质制造资源" },
  { title: "国际贸易", label: "探索跨境贸易机会" },
  { title: "供应链协作", label: "重视高效沟通与协调" },
  { title: "长期合作", label: "致力于建立互信关系" },
];

export default function About() {
  return (
    <section id="about" className="measured-about">
      <div className="measured-panel">

        {/* Shared coordinate system for panel and photo */}
        <svg
          className="measured-art"
          viewBox="0 0 1360 340"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="measuredWhite" x1="0" y1="0" x2="1" y2="0.4">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="75%" stopColor="#f9fbff" />
              <stop offset="100%" stopColor="#e8f3ff" />
            </linearGradient>

            <clipPath id="measuredPhotoClip">
              <path d="
                M 525 126
                C 532 59, 569 29, 635 22
                C 738 9, 847 15, 944 18
                C 994 19, 1033 29, 1047 68
                C 1060 104, 1055 146, 1055 186
                L 1055 293
                C 1055 315, 1037 325, 1014 325
                L 563 325
                C 540 325, 525 309, 525 284
                Z
              " />
            </clipPath>
          </defs>

          {/* Main white organic shape */}
          <path
            d="
              M 105 27
              C 192 4, 300 18, 405 23
              C 497 28, 549 15, 627 8
              C 747 -5, 853 7, 960 17
              C 1082 28, 1224 13, 1360 0
              L 1360 340
              L 104 340
              C 36 340, 9 314, 9 261
              L 9 141
              C 9 79, 36 43, 105 27
              Z
            "
            fill="url(#measuredWhite)"
          />

          {/* Photo follows geometry within the same SVG */}
          <image
            href="/images/about.png"
            x="525"
            y="16"
            width="530"
            height="309"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#measuredPhotoClip)"
          />
        </svg>

        <div className="measured-copy">
          <p className="measured-eyebrow">关于 NAFEIZ</p>

          <h2>
            专业的国际贸易与
            <br />
            供应链合作伙伴
          </h2>

          <p className="measured-description">
            NAFEIZ Trade 致力于与中国制造商和供应商建立合作联系，
            关注产品采购、跨境贸易及供应链协作，
            共同探索国际市场的商业机会。
          </p>

          <a href="#services" className="measured-button">
            了解 NAFEIZ
            <ArrowRight size={15} />
          </a>
        </div>

        <div className="measured-stats">
          {highlights.map((item) => (
            <div className="measured-stat" key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Responsive-only photo */}
        <img
          className="measured-mobile-photo"
          src="/images/about.png"
          alt="国际商务建筑概念图"
          loading="lazy"
        />
      </div>

      <style>{`
        .measured-about {
          position: relative;
          z-index: 20;
          margin-top: -145px;
          color: #0d2144;
        }

        .measured-panel {
          position: relative;
          width: min(96%, 1360px);
          height: 340px;
          margin-inline: auto;
          isolation: isolate;
        }

        .measured-art {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          filter: drop-shadow(0 8px 12px rgba(0,14,40,.1));
        }

        .measured-copy {
          position: absolute;
          left: 4.5%;
          top: 19%;
          width: 32%;
          height: 71%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .measured-eyebrow {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .1em;
          color: #1675d1;
          margin-bottom: 10px;
        }

        .measured-copy h2 {
          font-size: clamp(21px, 2vw, 30px);
          font-weight: 800;
          line-height: 1.24;
          color: #071a36;
        }

        .measured-description {
          margin-top: 12px;
          font-size: 11px;
          line-height: 1.85;
          color: #52647c;
        }

        .measured-button {
          display: inline-flex;
          align-items: center;
          align-self: flex-start;
          gap: 12px;
          margin-top: 14px;
          padding: 8px 18px;
          border: 1px solid #2375bc;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 800;
          color: #1769b4;
          text-decoration: none;
          transition: background .2s, color .2s;
        }

        .measured-button:hover {
          background: #1769b4;
          color: white;
        }

        .measured-stats {
          position: absolute;
          left: 79%;
          top: 15%;
          width: 17%;
          height: 79%;
          display: grid;
          grid-template-rows: repeat(4, 1fr);
        }

        .measured-stat {
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-left: 2px solid #a6c5e5;
          padding-left: 13px;
        }

        .measured-stat strong {
          font-size: clamp(15px, 1.35vw, 19px);
          font-weight: 800;
          line-height: 1.25;
        }

        .measured-stat span {
          margin-top: 4px;
          font-size: 10px;
          line-height: 1.4;
          color: #60758d;
        }

        .measured-mobile-photo {
          display: none;
        }

        @media (max-width: 1023px) {
          .measured-about {
            margin-top: -65px;
          }

          .measured-panel {
            width: calc(100% - 28px);
            height: auto;
            padding: 38px 25px 25px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 22px;
            background: linear-gradient(120deg, #fff, #e8f3ff);
            border-radius: 40px;
            box-shadow: 0 10px 25px rgba(0,14,40,.12);
          }

          .measured-art {
            display: none;
          }

          .measured-copy,
          .measured-stats {
            position: static;
            width: auto;
            height: auto;
          }

          .measured-mobile-photo {
            display: block;
            width: 100%;
            height: 290px;
            object-fit: cover;
            border-radius: 55px 25px 35px 20px;
          }

          .measured-stats {
            grid-column: 1 / -1;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: auto;
            gap: 10px;
          }
        }

        @media (max-width: 640px) {
          .measured-about {
            margin-top: -40px;
          }

          .measured-panel {
            display: flex;
            flex-direction: column;
            padding: 35px 20px 24px;
            border-radius: 28px;
          }

          .measured-copy h2 {
            font-size: 25px;
          }

          .measured-description {
            font-size: 12px;
          }

          .measured-mobile-photo {
            height: 240px;
          }

          .measured-stats {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
        }
      `}</style>
    </section>
  );
}
