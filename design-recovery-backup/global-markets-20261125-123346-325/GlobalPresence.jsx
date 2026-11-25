import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const regions = [
  {
    title: "中东",
    english: "MIDDLE EAST",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&q=80",
  },
  {
    title: "非洲",
    english: "AFRICA",
    image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=500&q=80",
  },
  {
    title: "欧洲",
    english: "EUROPE",
    image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=500&q=80",
  },
  {
    title: "美洲",
    english: "AMERICAS",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=500&q=80",
  },
  {
    title: "亚太",
    english: "ASIA PACIFIC",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=500&q=80",
  },
];

export default function GlobalPresence() {
  return (
    <section
      id="global"
      className="relative isolate overflow-hidden bg-[#07182e] text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,#16436c_0%,#07182e_65%)]" />

      <div className="relative mx-auto grid min-h-[410px] max-w-[1440px] items-center gap-4 px-5 py-12 md:px-10 lg:grid-cols-[44%_56%] lg:px-14 lg:py-14">
        {/* Left: large illuminated globe */}
        <div className="relative h-[280px] overflow-visible sm:h-[350px] lg:h-[390px]">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute -bottom-[240px] -left-[190px] h-[580px] w-[580px] rounded-full sm:-bottom-[290px] sm:h-[720px] sm:w-[720px] lg:-bottom-[310px] lg:-left-[280px] lg:h-[780px] lg:w-[780px]"
          >
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_65%_35%,#1762a0_0%,#0b3159_35%,#061426_68%)] shadow-[0_0_70px_#168cff,0_0_140px_rgba(20,100,220,0.35)]" />

            <div className="absolute inset-0 rounded-full border-[3px] border-[#59baff]/65 shadow-[inset_0_0_50px_rgba(30,145,255,0.5)]" />

            <svg
              viewBox="0 0 800 800"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="globeLine" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#3baaff" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#7edaff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#248bff" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              <circle cx="400" cy="400" r="350" fill="none" stroke="#7acbff" strokeOpacity=".25" />
              <ellipse cx="400" cy="400" rx="190" ry="350" fill="none" stroke="#68baff" strokeOpacity=".25" />
              <ellipse cx="400" cy="400" rx="330" ry="115" fill="none" stroke="#68baff" strokeOpacity=".2" />
              <ellipse cx="400" cy="400" rx="345" ry="230" fill="none" stroke="#68baff" strokeOpacity=".15" />

              <path d="M180 310 Q400 50 680 270" fill="none" stroke="url(#globeLine)" strokeWidth="3" />
              <path d="M120 440 Q400 110 720 390" fill="none" stroke="url(#globeLine)" strokeWidth="2" />
              <path d="M240 560 Q480 180 680 340" fill="none" stroke="url(#globeLine)" strokeWidth="2" />

              {[
                [180,310],[680,270],[120,440],
                [720,390],[240,560],[680,340]
              ].map(([cx,cy],i) => (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r="5"
                  fill="#b7efff"
                />
              ))}
            </svg>
          </motion.div>
        </div>

        {/* Right: markets */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="h-6 w-[3px] bg-[#40baff]" />
            <span className="text-xs font-semibold text-[#6fc6ff]">
              我们的市场
            </span>
            <span className="h-px w-12 bg-[#40baff]/50" />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            探索全球市场合作机会
          </h2>

          <p className="mt-4 max-w-[600px] text-sm leading-7 text-slate-300">
            我们关注不同地区的国际贸易需求，
            希望与中国供应商共同探索更广阔的市场机会。
          </p>

          <div className="mt-7 grid grid-cols-5 gap-2 sm:gap-3">
            {regions.map((region, index) => (
              <div key={region.title} className="min-w-0">
                <div
                  className="relative h-[95px] overflow-hidden rounded-xl border border-white/20 bg-[#153858] sm:h-[125px] lg:h-[145px]"
                  style={{
                    transform: `skewX(-8deg)`,
                  }}
                >
                  <img
                    src={region.image}
                    alt={region.english}
                    loading="lazy"
                    className="h-full w-full scale-125 object-cover"
                    style={{ transform: "skewX(8deg) scale(1.2)" }}
                  />
                </div>

                <div className="mt-3 flex items-center justify-center gap-1 text-[11px] font-semibold text-white sm:text-sm">
                  <MapPin size={13} fill="white" />
                  <span>{region.title}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
