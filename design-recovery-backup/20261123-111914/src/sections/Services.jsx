import { motion } from "framer-motion";
import {
  Package,
  Ship,
  Truck,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "产品采购与供应",
    description: "对接优质中国制造资源，探索适合的产品与供应方案。",
    image: "/images/manufacturing.png",
    icon: Package,
  },
  {
    title: "国际贸易与出口",
    description: "围绕国际贸易需求，协调产品信息与跨境合作事宜。",
    image: "/images/trade.png",
    icon: Ship,
  },
  {
    title: "物流与清关协调",
    description: "关注运输与交付安排，协助沟通物流及清关需求。",
    image: "/images/logistics.png",
    icon: Truck,
  },
  {
    title: "市场拓展与长期合作",
    description: "探索国际市场机会，与合作伙伴建立长期业务联系。",
    image: "/images/partnership.png",
    icon: ShieldCheck,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#07182e] pb-8 pt-9 text-white lg:pb-10 lg:pt-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_0%,rgba(31,110,183,0.22),transparent_65%)]" />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="mb-2 flex items-center gap-3">
            <span className="h-4 w-[3px] bg-[#2596be]" />
            <span className="text-xs font-semibold text-[#67baff]">
              我们的核心业务
            </span>
            <span className="h-px w-10 bg-[#2596be]/70" />
          </div>

          <h2 className="text-[26px] font-extrabold leading-tight sm:text-[32px] lg:text-[36px]">
            为全球客户提供全链路贸易支持
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                }}
                className="group relative h-[275px] overflow-hidden rounded-[17px] border border-white/30 bg-[#102e4c] sm:h-[290px] xl:h-[265px]"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#06172f] via-[#06172f]/75 via-35% to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <Icon
                    size={27}
                    strokeWidth={1.8}
                    className="mb-3 text-white"
                  />

                  <h3 className="text-[17px] font-bold leading-snug text-white">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-[12px] leading-[1.7] text-slate-200">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
