// Paths and labels for the Business section: one overview page and three sub-pages.
export type SiteLang = 'en' | 'zh';
export type BizView = 'home' | 'small' | 'enterprise' | 'other';

export const bizViews: BizView[] = ['home', 'small', 'enterprise', 'other'];

const slugs: Record<BizView, string> = {
  home: '',
  small: 'small-business/',
  enterprise: 'enterprise/',
  other: 'other/'
};

const labels: Record<BizView, Record<SiteLang, string>> = {
  home: { en: 'Overview', zh: '总览' },
  small: { en: 'Small business', zh: '小生意' },
  enterprise: { en: 'Enterprise', zh: '企业' },
  other: { en: 'Other work', zh: '其他业务' }
};

export const bizPath = (lang: SiteLang, view: BizView = 'home') => `${lang === 'zh' ? '/zh' : ''}/business/${slugs[view]}`;

export const bizNav = (lang: SiteLang) => bizViews.map((view) => ({ view, href: bizPath(lang, view), label: labels[view][lang] }));
