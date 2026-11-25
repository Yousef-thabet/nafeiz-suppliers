import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Factory,
  Globe2,
  Ship,
  ShieldCheck,
} from "lucide-react";

const advantages = [
  { icon: Factory, label: "优质制造资源" },
  { icon: Globe2, label: "全球市场网络" },
  { icon: Ship, label: "一体化物流服务" },
  { icon: ShieldCheck, label: "合规与风险控制" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[660px] overflow-hidden bg-[#07172e] text-white lg:h-[var(--na-hero-height)] lg:min-h-0"
    >
      {/* Full-bleed reference image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-[58%_center] lg:bg-[center_48%]"
        style={{
          backgroundImage: "url('/images/hero.png')",
        }}
      />

      {/* Keep the illuminated portal visible */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06152e]/90 via-[#06152e]/35 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#06152e]/25 via-transparent to-[#06152e]/20" />

      <div className="relative mx-auto grid min-h-[660px] max-w-[1440px] grid-cols-1 items-center px-6 pb-40 pt-28 md:px-12 lg:h-full lg:min-h-0 lg:grid-cols-[53%_47%] lg:px-[6.5%] lg:pb-[150px] lg:pt-[105px]">
        {/* Left editorial content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="relative z-10 max-w-[620px]"
        >
          <p className="mb-5 text-[11px] font-semibold tracking-[0.27em] text-white/90 lg:text-[12px]">
            NAFEIZ TRADE CO., LTD.
          </p>

          <h1 className="text-[40px] font-extrabold leading-[1.2] tracking-tight sm:text-[54px] lg:text-[clamp(44px,4.25vw,67px)]">
            让中国制造
            <br />
            走向
            <span className="text-[#54baff]">
              更广阔的世界
            </span>
          </h1>

          <p className="mt-5 max-w-[455px] text-[13px] leading-[1.9] text-white/85 lg:text-[14px]">
            我们连接中国优质制造商与全球市场，
            为您提供专业、高效、可靠的采购、
            贸易与物流解决方案。
          </p>

          <div className="mt-4 h-[2px] w-12 bg-[#47b9ff]" />

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#2386f5] to-[#0056d9] px-6 py-3 text-[13px] font-bold shadow-[0_8px_24px_rgba(0,80,200,0.3)] transition hover:brightness-110"
            >
              立即合作洽谈
              <ArrowRight size={16} />
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-3 rounded-full border border-white/75 bg-[#07172e]/20 px-6 py-3 text-[13px] font-semibold backdrop-blur-sm transition hover:bg-white/15"
            >
              <Play size={15} fill="currentColor" />
              了解我们
            </a>
          </div>
        </motion.div>

        {/* Features positioned inside the portal area */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative z-10 mt-8 hidden justify-center lg:mt-0 lg:flex"
        >
          <div className="ml-[12%] flex flex-col gap-5 rounded-[18px] bg-[#082044]/10 px-6 py-5 backdrop-blur-[1px]">
            {advantages.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 text-[13px] font-semibold text-white"
              >
                <Icon
                  size={20}
                  strokeWidth={1.7}
                  className="shrink-0 text-white"
                />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

