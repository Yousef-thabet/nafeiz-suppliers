import { motion } from "framer-motion";
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";

const email = "info@nafeiz.com";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-20 bg-[#07182e] pb-8 pt-0 lg:pb-10"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid items-center gap-7 rounded-[20px] border border-white/25 bg-[#193453] px-6 py-7 shadow-[0_10px_35px_rgba(13,33,68,0.07)] md:grid-cols-[1.15fr_1fr_auto] lg:px-10"
        >
          {/* WeChat area */}
          <div className="flex items-center gap-5">
            <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-xl border border-dashed border-white/30 bg-white/10">
              <MessageCircle size={33} className="text-[#2596be]" />
            </div>

            <div>
              <p className="text-[18px] font-bold text-white">
                微信联系我们
              </p>
              <p className="mt-2 text-[12px] leading-6 text-slate-300">
                欢迎通过官方微信
                <br />
                咨询商务合作
              </p>
              <p className="mt-1 text-[11px] text-[#2596be]">
                官方二维码待添加
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 border-t border-white/20 pt-5 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#2596be]">
              <Mail size={23} />
            </div>

            <div>
              <p className="text-[12px] text-slate-300">
                商务合作邮箱
              </p>
              <a
                href={`mailto:${email}`}
                className="mt-1 block break-all text-[16px] font-bold text-white hover:text-[#2596be]"
              >
                {email}
              </a>
            </div>
          </div>

          {/* CTA */}
          <a
            href={`mailto:${email}?subject=Supplier%20Partnership%20Inquiry`}
            className="inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full bg-[#176ce4] px-7 py-4 text-sm font-bold text-white shadow-[0_8px_24px_rgba(23,108,228,0.22)] transition hover:bg-[#1258bd]"
          >
            立即联系我们
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

