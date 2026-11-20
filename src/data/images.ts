import type { ImageMetadata } from 'astro';
import type { ImageKey, Lang } from './personal';
import myecHome from '../assets/ec/myec-home.png';
import myecSupport from '../assets/ec/myec-support.png';
import openMyec from '../assets/ec/open-myec.png';
import chinajoyBooth from '../assets/ec/chinajoy-2021-booth.jpg';
import chinajoyDetail from '../assets/ec/chinajoy-2021-detail.webp';
import easecationCity from '../assets/ec/easecation-city.webp';
import luminoreBoard from '../assets/luminore/standard-en.jpg';
import luminoreDuel from '../assets/luminore/duel-en.jpg';
import luminoreHome from '../assets/luminore/home-en.jpg';
import luminoreBoardZh from '../assets/luminore/standard-zh.jpg';
import luminoreDuelZh from '../assets/luminore/duel-zh.jpg';
import luminoreHomeZh from '../assets/luminore/home-zh.jpg';

// Images reused from the EaseCation website (easecation.net).
export const images: Record<ImageKey, ImageMetadata> = {
  myecHome,
  myecSupport,
  openMyec,
  chinajoyBooth,
  chinajoyDetail,
  easecationCity,
  luminoreBoard,
  luminoreDuel,
  luminoreHome
};

// Screenshots that exist in a Chinese version.
const imagesZh: Partial<Record<ImageKey, ImageMetadata>> = {
  luminoreBoard: luminoreBoardZh,
  luminoreDuel: luminoreDuelZh,
  luminoreHome: luminoreHomeZh
};

export const imageFor = (key: ImageKey, lang: Lang): ImageMetadata => (lang === 'zh' && imagesZh[key]) || images[key];

export const imageAlt: Record<ImageKey, { en: string; zh: string }> = {
  myecHome: { en: 'MyEC home screen', zh: 'MyEC 首页' },
  myecSupport: { en: 'MyEC ticket type selection', zh: 'MyEC 工单类型选择页' },
  openMyec: { en: 'OpenMyEC, the open-source MyEC frontend', zh: 'OpenMyEC：开源的 MyEC 前端' },
  chinajoyBooth: { en: 'EaseCation booth at ChinaJoy 2021', zh: 'EaseCation 在 ChinaJoy 2021 的展位' },
  chinajoyDetail: { en: 'Artwork at the EaseCation ChinaJoy 2021 booth', zh: 'EaseCation ChinaJoy 2021 展位上的插画' },
  easecationCity: { en: 'A city built in EaseCation', zh: 'EaseCation 中的城市建筑' },
  luminoreBoard: { en: 'Luminore standard game on iPad, with three AI players', zh: 'Luminore 标准模式对局（iPad），对手为三名 AI' },
  luminoreDuel: { en: 'Luminore Duel ruleset on iPad', zh: 'Luminore 对决模式（iPad）' },
  luminoreHome: { en: 'Luminore home screen: tutorial, local network, Internet and nearby play', zh: 'Luminore 首页：教程、局域网、互联网与近场联机' }
};
