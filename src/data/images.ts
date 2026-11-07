import type { ImageMetadata } from 'astro';
import type { ImageKey } from './personal';
import myecHome from '../assets/ec/myec-home.png';
import myecSupport from '../assets/ec/myec-support.png';
import openMyec from '../assets/ec/open-myec.png';
import chinajoyBooth from '../assets/ec/chinajoy-2021-booth.jpg';
import chinajoyDetail from '../assets/ec/chinajoy-2021-detail.webp';
import easecationCity from '../assets/ec/easecation-city.webp';

// Images reused from the EaseCation website (easecation.net).
export const images: Record<ImageKey, ImageMetadata> = {
  myecHome,
  myecSupport,
  openMyec,
  chinajoyBooth,
  chinajoyDetail,
  easecationCity
};

export const imageAlt: Record<ImageKey, { en: string; zh: string }> = {
  myecHome: { en: 'MyEC home screen', zh: 'MyEC 首页' },
  myecSupport: { en: 'MyEC ticket type selection', zh: 'MyEC 工单类型选择页' },
  openMyec: { en: 'OpenMyEC, the open-source MyEC frontend', zh: 'OpenMyEC：开源的 MyEC 前端' },
  chinajoyBooth: { en: 'EaseCation booth at ChinaJoy 2021', zh: 'EaseCation 在 ChinaJoy 2021 的展位' },
  chinajoyDetail: { en: 'Artwork at the EaseCation ChinaJoy 2021 booth', zh: 'EaseCation ChinaJoy 2021 展位上的插画' },
  easecationCity: { en: 'A city built in EaseCation', zh: 'EaseCation 中的城市建筑' }
};
