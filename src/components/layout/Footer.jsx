export default function Footer() {
  return (
    <footer className="bg-[#07182e] text-white">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-5 py-6 text-center md:flex-row md:px-10 lg:px-14">
        <p className="text-[11px] text-white/60">
          © {new Date().getFullYear()} NAFEIZ Trade Co., Ltd.
          All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="#about"
            className="text-[11px] text-white/60 transition hover:text-white"
          >
            关于我们
          </a>

          <a
            href="#services"
            className="text-[11px] text-white/60 transition hover:text-white"
          >
            核心业务
          </a>

          <a
            href="#contact"
            className="text-[11px] text-white/60 transition hover:text-white"
          >
            联系我们
          </a>
        </div>
      </div>
    </footer>
  );
}
