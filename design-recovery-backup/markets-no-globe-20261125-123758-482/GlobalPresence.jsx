import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import './global-markets.css';

const markets = [
  ['ae', '阿联酋', 'United Arab Emirates'],
  ['eu', '欧洲', 'Europe'],
  ['ca', '加拿大', 'Canada'],
  ['ps', '巴勒斯坦', 'Palestine'],
  ['jo', '约旦', 'Jordan'],
  ['om', '阿曼', 'Oman'],
  ['qa', '卡塔尔', 'Qatar'],
  ['kw', '科威特', 'Kuwait'],
  ['eg', '埃及', 'Egypt'],
  ['ly', '利比亚', 'Libya'],
  ['iq', '伊拉克', 'Iraq'],
  ['dz', '阿尔及利亚', 'Algeria'],
  ['sd', '苏丹', 'Sudan'],
  ['ye', '也门', 'Yemen'],
  ['us', '美国', 'United States'],
  ['co', '哥伦比亚', 'Colombia'],
];
const groups = Array.from({ length: 4 }, (_, i) => markets.slice(i * 4, i * 4 + 4));
const asset = `${import.meta.env.BASE_URL}images/global-markets/`;

export default function GlobalPresence() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(() => document.hidden);
  const reduce = useReducedMotion();
  const playing = !reduce && !paused && !hovered && !focused && !hidden;

  useEffect(() => {
    const onVisibility = () => setHidden(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const timer = setTimeout(() => {
      setDirection(1);
      setPage(p => (p + 1) % groups.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [page, playing]);

  function move(step) {
    setDirection(step);
    setPage(p => (p + step + groups.length) % groups.length);
  }
  function goTo(next) {
    if (next === page) return;
    setDirection(next > page ? 1 : -1);
    setPage(next);
  }

  return (
    <section id="global" className="na-markets" aria-labelledby="na-market-title">
      <div className="na-market-inner">
        <div className="na-earth-scene" aria-hidden="true">
          <div className="na-earth-orbit na-earth-orbit-one" />
          <div className="na-earth-orbit na-earth-orbit-two" />
          <div className="na-earth-halo" />
          <div className="na-earth-body">
            <img src={`${asset}earth.jpg`} alt="" loading="lazy" width="960" height="959" />
          </div>
        </div>
        <div className="na-market-content">
          <div className="na-market-kicker">我们的市场</div>
          <h2 id="na-market-title">探索全球市场合作机会</h2>
          <p className="na-market-description">我们关注不同地区的国际贸易需求，希望与中国供应商共同探索更广阔的市场机会。</p>
          <div className="na-market-carousel" role="region" aria-roledescription="carousel" aria-label="全球市场" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={e => { if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false); }}>
            <div className="na-market-stage" aria-live={playing ? 'off' : 'polite'}>
              <AnimatePresence initial={false} mode="wait" custom={direction}>
                <motion.div key={page} custom={direction} className="na-market-grid" variants={{ enter: d => ({ opacity: reduce ? 1 : 0, x: reduce ? 0 : d * 32 }), show: { opacity: 1, x: 0, transition: { duration: reduce ? 0 : .42, staggerChildren: reduce ? 0 : .085 } }, exit: d => ({ opacity: reduce ? 1 : 0, x: reduce ? 0 : -d * 25, transition: { duration: reduce ? 0 : .22 } }) }} initial="enter" animate="show" exit="exit">
                  {groups[page].map(([code, zh, en]) => (
                    <motion.article key={code} className="na-market-card" variants={{ enter: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 18 }, show: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : .4, ease: 'easeOut' } } }}>
                      <div className="na-market-tile"><div className="na-market-flag"><img src={`${asset}${code}.png`} alt="" width="320" loading="eager" /></div></div>
                      <h3>{zh}</h3><p lang="en">{en}</p>
                    </motion.article>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="na-market-controls">
              <div className="na-market-dots" aria-label="选择市场组">
                {groups.map((_, i) => <button type="button" key={i} className={i === page ? 'is-current' : ''} onClick={() => goTo(i)} aria-label={`第 ${i + 1} 组`} aria-current={i === page ? 'true' : undefined}><span /></button>)}
              </div>
              <span className="na-market-counter">{String(page + 1).padStart(2, '0')} / 04</span>
              <div className="na-market-arrows">
                <button type="button" onClick={() => move(-1)} aria-label="上一组"><ChevronLeft size={19} /></button>
                {!reduce && <button type="button" onClick={() => setPaused(p => !p)} aria-label={paused ? '播放' : '暂停'}>{paused ? <Play size={16} /> : <Pause size={16} />}</button>}
                <button type="button" onClick={() => move(1)} aria-label="下一组"><ChevronRight size={19} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}