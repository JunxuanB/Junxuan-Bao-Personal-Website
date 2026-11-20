// Content for the Business pages of JUNXUAN BAO SOLUTIONS INC.
// One overview page plus three sub-pages: small business, enterprise and other work.
import type { ImageKey, Lang, Result } from './personal';
import { bizPath, type BizView } from './nav';

export interface Case {
  id: string;
  seg: Exclude<BizView, 'home'>;
  tone: 'tint' | 'warm';
  mono: string;
  client: string;
  industry: string;
  year: string;
  title: string;
  metric: string;
  summary: string;
  problemLabel: string;
  problem: string;
  built: string;
  results: Result[];
  stack: string[];
  img?: ImageKey;
  link?: { l: string; h: string };
  note?: string;
}
export interface Card { icon: string; h: string; p: string; caseId: string }
export interface Stat { num: string; label: string }
export interface Segment { view: BizView; href: string; tone: string; icon: string; kicker: string; h: string; p: string; items: string[]; go: string }
export interface ViewContent {
  meta: { title: string; description: string };
  chip: string;
  h1a: string;
  h1b: string;
  intro: string;
  cta2: { label: string; href: string };
  segments?: { h: string; p: string; items: Segment[] };
  panel?: { kicker: string; h: string; p: string; systems: { id: string; icon: string; name: string; what: string; metric: string }[] };
  stats?: Stat[];
  why?: { h: string; items: { n: string; h: string; p: string }[] };
  /** Case studies come before the service cards when true. */
  workFirst?: boolean;
  work?: { h: string; featuredIds: string[]; restIds: string[] };
  services?: { h: string; p: string; items: Card[] };
  steps?: boolean;
  faq?: { q: string; a: string }[];
  about?: boolean;
  contactH: string;
  contactP: string;
}

export const icons = {
  layout: 'M3 4h18v16H3zM3 9h18M9 9v11',
  store: 'M3 9l1.5-5h15L21 9M3 9h18v11H3zM9 20v-6h6v6',
  zap: 'M13 2L4 14h7l-1 8 9-12h-7z',
  key: 'M7.5 15a4.5 4.5 0 1 1 4.2-6H21v3h-2v3h-3v-3h-4.3a4.5 4.5 0 0 1-4.2 3z',
  cpu: 'M7 7h10v10H7zM10 2v3M14 2v3M10 19v3M14 19v3M2 10h3M2 14h3M19 10h3M19 14h3',
  server: 'M4 4h16v6H4zM4 14h16v6H4zM8 7h.01M8 17h.01',
  ticket: 'M3 7h18v3a2 2 0 0 0 0 4v3H3v-3a2 2 0 0 0 0-4zM14 7v10',
  users: 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21c0-4 3-6 7-6s7 2 7 6M17 3.5a4 4 0 0 1 0 7.5M22 21c0-3-1.5-5-4-5.7',
  card: 'M3 6h18v12H3zM3 10h18M7 15h4',
  cart: 'M3 4h2l2.5 11h10L20 7H6.5M9 20h.01M17 20h.01',
  calendar: 'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4',
  box: 'M3 8l9-5 9 5v8l-9 5-9-5zM3 8l9 5 9-5M12 13v8',
  phone: 'M8 3h8v18H8zM11 18h2',
  link: 'M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1',
  star: 'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z',
  flag: 'M5 21V4M5 4h12l-2 4 2 4H5'
};

export function getBusiness(lang: Lang) {
  const zh = lang === 'zh';
  const T = (en: string, cn: string) => (zh ? cn : en);
  const brand = 'Junxuan Bao Solutions Inc.';

  const cases: Case[] = [
    {
      id: 'envoy', seg: 'small', tone: 'tint', mono: 'LOCK', client: 'Envoy Hamilton', industry: T('Parcel depot · Hamilton, ON', '快递站 · 安大略省汉密尔顿'), year: '2024',
      title: T('A parcel depot that stays open 24/7', '快递站：24 小时自助取件'), metric: T('Pickup at any time', '随时取件'),
      summary: T('Customers collect parcels on their own, even after the depot closes.', '顾客自己取件，快递站关门后也能取。'),
      problemLabel: T('The problem', '问题'), problem: T('Customers could only pick up parcels during business hours.', '顾客只能在营业时间内取件。'),
      built: T('A 24/7 self-service locker system. Customers and staff use a web app built with React, Express.js and MySQL. The locker doors are smart locks controlled by ESP32 microcontrollers.', '一套 24 小时自助包裹柜系统。顾客和员工使用 Web 应用（React、Express.js、MySQL），柜门是由 ESP32 微控制器控制的智能锁。'),
      results: [{ n: '24/7', l: T('self-service pickup', '自助取件') }, { n: '$10K', l: T('projected annual revenue per site', '每站点预计年收入') }],
      stack: ['React', 'Express.js', 'MySQL', 'ESP32', 'Arduino (C++)']
    },
    {
      id: 'halfbiz', seg: 'small', tone: 'warm', mono: 'HB', client: T('Our own product', '自有产品'), industry: T('Family-owned restaurants', '家庭餐厅'), year: '2024',
      title: T('HalfBiz: one platform for family-owned restaurants', 'HalfBiz：家庭餐厅的一体化经营平台'), metric: T('$2,760 saved per year', '每年节省 $2,760'),
      summary: T('Loyalty, self-delivery and online ordering in one product.', '会员积分、自配送和在线点单，放进一个产品里。'),
      problemLabel: T('The problem', '问题'), problem: T('Family-owned restaurants were paying about $3,000 a year for separate ordering, delivery and loyalty software.', '家庭餐厅每年要花约 $3,000，分别买点单、配送和会员软件。'),
      built: T('One platform with online ordering, self-delivery and a loyalty program, bringing software costs down to $240 a year. Supported by Innovation Factory.', '一个平台包含在线点单、自配送和会员积分，软件成本降到每年 $240。获 Innovation Factory 支持。'),
      results: [{ n: '12+', l: T('businesses in the first week', '家商家，上线首周') }, { n: '$3,000 → $240', l: T('software cost per year', '每年软件成本') }],
      stack: ['PostgreSQL', 'Redis', 'React', 'Express.js']
    },
    {
      id: 'myec', seg: 'enterprise', tone: 'tint', mono: 'MyEC', img: 'myecHome', client: 'EaseCation', industry: T('Gaming community · 100K+ daily players', '游戏社区 · 日活 10 万以上'), year: T('2024 – now', '2024 – 至今'),
      title: T('MyEC: a player service center for 100K+ daily players', 'MyEC：服务日活 10 万以上玩家的服务中心'), metric: T('190K+ tickets handled', '累计工单 19 万以上'),
      summary: T('Response rate went from 25% to 100%, with 35% of tickets solved automatically within a minute.', '回复率由 25% 提升至 100%，35% 的工单在一分钟内自动解决。'),
      problemLabel: T('The problem', '问题'), problem: T('Only 25% of player requests received a response.', '玩家提交的请求，只有 25% 能得到回复。'),
      built: T("MyEC, a serverless player service center with tickets, feedback and account tools. It connects to the game's platform APIs, and AI autoresponders handle common requests.", 'MyEC 玩家服务中心，采用 serverless 架构，包含工单、反馈和账号工具。系统接入游戏平台接口，常见问题由 AI 自动回复。'),
      results: [{ n: '190K+', l: T('tickets handled', '累计处理工单') }, { n: '25% → 100%', l: T('response rate', '回复率') }, { n: '35%', l: T('solved within a minute', '一分钟内自动解决') }, { n: '99.99%', l: T('uptime', '可用性') }],
      stack: ['React', 'Express.js', 'MySQL', 'Serverless', 'AI'], link: { l: 'easecation.net', h: 'https://www.easecation.net/' }
    },
    {
      id: 'oa', seg: 'enterprise', tone: 'warm', mono: 'HR', client: 'EaseCation', industry: T('Gaming community · ~200 staff', '游戏社区 · 约 200 人团队'), year: T('2021 – now', '2021 – 至今'),
      title: T('HR Center: approvals in hours, not days', '人事中心：审批从几天缩短到几小时'), metric: T('90% of approvals automated', '90% 审批自动化'),
      summary: T('One internal system for applications, approvals, payroll and finance.', '一套内部系统，管理申请、审批、薪资和财务。'),
      problemLabel: T('The problem', '问题'), problem: T('Approvals and finance requests went through chat messages, and each review took 2–3 days.', '审批和财务申请靠聊天消息来回沟通，每次审核要 2–3 天。'),
      built: T('An internal automation system with CRM, payroll and financial modules. Approval rules handle most requests automatically.', '一套内部自动化系统，包含客户管理、薪资和财务模块。大部分申请由审批规则自动处理。'),
      results: [{ n: '90%', l: T('of approvals automated', '审批自动化') }, { n: '70%', l: T('of finance tasks automated', '财务事务自动化') }, { n: '< 24 h', l: T('review time, down from 2–3 days', '审核时间，原需 2–3 天') }],
      stack: ['CRM', T('Payroll', '薪资'), T('Finance', '财务'), T('Workflow', '流程')], link: { l: 'easecation.net', h: 'https://www.easecation.net/' }
    },
    {
      id: 'iam', seg: 'enterprise', tone: 'tint', mono: 'IAM', client: 'EaseCation', industry: T('Gaming community · 10 internal apps', '游戏社区 · 10 个内部应用'), year: T('2023 – now', '2023 – 至今'),
      title: T('One sign-in for 10 internal applications', '10 个内部应用，一个登录'), metric: T('−95% password resets', '密码重置请求 −95%'),
      summary: T('Single sign-on, passkeys and permissions for every internal tool.', '所有内部工具共用单点登录、Passkey 和权限管理。'),
      problemLabel: T('The problem', '问题'), problem: T('Staff needed a separate account for every internal tool, and password resets were the most common support request.', '每个内部工具都要单独的账号，密码重置是最常见的求助。'),
      built: T('One enterprise-grade identity system for 10 applications: OAuth 2.0, single sign-on, TOTP and Passkey, multi-tenancy, and GitHub and Google sign-in.', '一套企业级统一身份系统，覆盖 10 个应用：OAuth 2.0、单点登录、TOTP 与 Passkey、多租户，以及 GitHub 与 Google 登录。'),
      results: [{ n: '200+', l: T('users, one account each', '名用户，一人一个账号') }, { n: '−95%', l: T('password resets', '密码重置请求') }, { n: '−80%', l: T('onboarding time', '新成员入职时间') }],
      stack: ['OAuth 2.0', 'PostgreSQL', 'Redis', 'React', 'Express.js']
    },
    {
      id: 'creator', seg: 'other', tone: 'warm', mono: 'UGC', client: T('Supported by Genshin Impact (HoYoverse)', '由原神（HoYoverse）支持'), industry: T('Games · Student competition', '游戏 · 学生赛事'), year: T('May 2026', '2026.05'),
      title: T('Genshin Impact North America Creator Challenge', '原神北美创作者挑战赛'), metric: T('100 participants', '100 名参赛者'),
      summary: T('A creator competition for students across North America, run end to end.', '面向北美学生的创作者赛事，从策划到执行全部完成。'),
      problemLabel: T('Background', '背景'), problem: T("Following the launch of Genshin Impact's Miliastra Wonderland UGC features, we organized a creator competition for students and recent graduates across North America.", '原神「千星奇域」UGC 功能上线后，我们为北美在校生和应届毕业生办了一场创作者比赛。'),
      built: T('Everything, end to end: competition website, registration, submission platform, Discord community, promotion and participant support.', '全部由我们完成：比赛网站、报名、作品提交平台、Discord 社区、宣传推广和参赛者支持。'),
      results: [{ n: '100', l: T('participants', '名参赛者') }, { n: T('End to end', '全流程'), l: T('website to community', '从网站到社区运营') }],
      stack: ['Web', 'Discord', 'UGC'], link: { l: 'creator.junxuanb.com', h: 'https://creator.junxuanb.com/' }
    },
    {
      id: 'ue5', seg: 'other', tone: 'tint', mono: 'UE5', client: T('In collaboration with HoYoverse', '与 HoYoverse 合作'), industry: T('Games · Content production', '游戏 · 内容制作'), year: '2024 – 2025',
      title: T('Genshin Impact content in Unreal Engine 5', '原神 Unreal Engine 5 内容制作'), metric: T('$80K CAD in 5 months', '5 个月交付 8 万加元'),
      summary: T('A trained student team delivering game content on contract.', '经过培训的学生团队，按合同交付游戏内容。'),
      problemLabel: T('Background', '背景'), problem: T('Game content production for Genshin Impact in Unreal Engine 5.', '使用 Unreal Engine 5 为原神制作游戏内容。'),
      built: T('We built and trained a team of 10 university students, then produced and delivered Genshin Impact content in UE5. For most of them, it was their first professional employment.', '我们组建并培训了 10 名大学生，用 UE5 制作并交付原神相关内容。对大多数人来说，这是他们的第一份专业工作。'),
      results: [{ n: '$80K', l: T('CAD in contracts, first 5 months', '加元合同，成立前五个月') }, { n: '10', l: T('students trained', '名学生完成培训') }],
      stack: ['Unreal Engine 5', T('Team training', '团队培训')]
    }
  ];

  const qCost = { q: T('How much does it cost?', '费用是多少？'), a: T("It depends on how many features and users you need. After a free consultation, we'll give you a fixed quote.", '看你需要多少功能、有多少用户。免费咨询之后，我们会给出固定报价。') };
  const qCode = { q: T('Who owns the code?', '代码归谁所有？'), a: T('You do. Once the project is paid in full, the code and your data belong to you.', '归你。项目款项结清后，代码和数据都属于你。') };
  const qExisting = { q: T('Can you work with our existing systems?', '能接入我们现有的系统吗？'), a: T('Yes, including Microsoft 365, Google Workspace and most tools with an API.', '可以，包括 Microsoft 365、Google Workspace，以及大多数提供 API 的工具。') };
  const qWhere = { q: T('Where are your clients?', '你们服务哪些地区的客户？'), a: T('Anywhere. We are based in the Greater Toronto Area and work remotely with clients around the world, across time zones.', '不限地区。我们在大多伦多地区，可以远程服务全球客户，也能配合不同时区。') };
  const qChinese = { q: T('Can we talk in Chinese?', '可以用中文沟通吗？'), a: T('Yes. We work in English and Mandarin.', '可以，中英文都行。') };

  const views: Record<BizView, ViewContent> = {
    home: {
      meta: {
        title: T(`${brand} · Software for small businesses and growing teams`, `${brand} · 为小店和企业做合用的系统`),
        description: T(
          `${brand} builds the software a business runs on every day: membership, checkout and booking for small shops, and internal tools and automation for larger teams.`,
          `${brand} 为小店开发会员、收银和预约系统，为企业开发内部管理系统和流程自动化。`
        )
      },
      chip: T(`${brand} · Serving clients worldwide`, `${brand} · 服务全球客户`),
      h1a: T('From a corner shop to a 200-person team,', '从街角小店到两百人的团队，'), h1b: T('software that fits.', '都有合用的系统。'),
      intro: T('We build the software a business runs on every day. Membership, checkout and booking for small shops. Internal tools and automation for larger teams.', '我们做生意每天都要用到的软件。小店的会员、收银和预约，企业的内部系统和自动化，都可以做。'),
      cta2: { label: T('See what we do', '看看我们做什么'), href: '#segments' },
      segments: {
        h: T('Who we work with', '我们服务谁'), p: T('Pick the one closest to you.', '选一个最接近你的。'),
        items: [
          {
            view: 'small', href: bizPath(lang, 'small'), tone: 'warm', icon: icons.store, kicker: T('Small business', '小生意'),
            h: T('A system sized for your shop', '小店也能有自己的系统'),
            p: T('Parcel depots, dessert shops, restaurants and studios. Start with one problem and add more later.', '快递站、甜品店、餐馆、工作室。先解决一个问题，以后再慢慢加。'),
            items: [T('24/7 parcel pickup', '24 小时自助取件'), T('Membership and points', '会员与积分'), T('Self-checkout and online ordering', '自助收银与在线点单')],
            go: T('For small businesses', '查看小生意')
          },
          {
            view: 'enterprise', href: bizPath(lang, 'enterprise'), tone: 'tint', icon: icons.layout, kicker: T('Enterprise', '企业'),
            h: T('Internal systems for growing teams', '团队变大后需要的内部系统'),
            p: T('Approvals, HR, support tickets and sign-in. These systems run every day in a community with 100K+ daily players.', '审批、人事、工单和统一登录。这些系统每天都在一个日活 10 万以上的社区里运行。'),
            items: [T('Internal tools and approvals', '内部管理与审批'), T('Customer service and AI automation', '客户服务与 AI 自动化'), T('Single sign-on', '统一登录')],
            go: T('For companies', '查看企业')
          },
          {
            view: 'other', href: bizPath(lang, 'other'), tone: 'soft', icon: icons.star, kicker: T('Other work', '其他业务'),
            h: T('Game content and creator events', '游戏内容与创作者活动'),
            p: T('Game UGC content and creator competitions, including work with HoYoverse on Genshin Impact.', '游戏 UGC 内容制作和创作者赛事，包括与 HoYoverse 合作的原神项目。'),
            items: [T('Unreal Engine 5 content', 'Unreal Engine 5 内容制作'), T('Creator competitions', '创作者赛事'), T('Student team training', '学生团队培训')],
            go: T('See other work', '查看其他业务')
          }
        ]
      },
      stats: [
        { num: '12+', label: T('small businesses on HalfBiz in its first week', '家小商家，HalfBiz 上线首周采用') },
        { num: '24/7', label: T('self-service parcel pickup', '自助取件，不受营业时间限制') },
        { num: '190K+', label: T('support tickets handled', '张工单，累计处理') },
        { num: '9+', label: T('years running a business', '年企业经营经验') }
      ],
      why: {
        h: T('Why work with us', '为什么选择我们'),
        items: [
          { n: '01', h: T("We've run a business ourselves.", '我们自己经营过企业。'), p: T('Our founder has spent 9+ years running online communities and a team of about 200, handling finance, HR, taxation and operations. We know what a system is supposed to save you.', '创始人有 9 年以上的经营经验，带过约 200 人的团队，管过财务、人事、税务和运营。我们知道一套系统该帮你省下什么。') },
          { n: '02', h: T('Sized for you.', '按你的规模来做。'), p: T('A shop does not need enterprise software, and a company cannot run on a spreadsheet. We build what you will actually use.', '小店用不上大企业的软件，企业也不能只靠表格。我们只做你真正用得上的功能。') },
          { n: '03', h: T('Small team, direct contact.', '团队精简，直接沟通。'), p: T('You talk to the person building your system, not an account manager. In English or Mandarin.', '和你沟通的就是写系统的人，不是客户经理。中英文都可以。') }
        ]
      },
      steps: true,
      faq: [
        { q: T('I run a small shop. Is this for me?', '我只是开一家小店，适合找你们吗？'), a: T('Yes. Many projects start with one small problem, such as parcel pickup after hours or a membership card.', '适合。很多项目都从一个小问题开始，比如关门后取件，或者一张会员卡。') },
        qCost, qCode, qExisting, qWhere, qChinese
      ],
      about: true,
      contactH: T('Tell us what is slowing your business down.', '告诉我们，是什么在拖慢你的生意。'),
      contactP: T("Share a few lines about your business. We'll reply within 2 business days.", '简单介绍一下你的生意和需求，我们会在 2 个工作日内回复。')
    },

    small: {
      meta: {
        title: T(`Small business systems · ${brand}`, `小生意系统 · ${brand}`),
        description: T(
          'Membership, self-checkout, online ordering, booking and parcel pickup systems for small businesses such as parcel depots, dessert shops and restaurants.',
          '为快递站、甜品店、餐馆等小生意开发会员管理、自助收银、在线点单、预约和自助取件系统。'
        )
      },
      chip: T('For small businesses', '小生意'),
      h1a: T('Your shop can have', '小店，'), h1b: T('its own system.', '也能有一套自己的系统。'),
      intro: T('Parcel depots, dessert shops, restaurants, studios. We start with the one thing that costs you the most time, and build only what you will use.', '快递站、甜品店、餐馆、工作室。先解决最费事的那一件事，只做你用得上的功能。'),
      cta2: { label: T('See examples', '查看例子'), href: '#work' },
      workFirst: true,
      work: { h: T('What we have built', '做过的例子'), featuredIds: ['envoy', 'halfbiz'], restIds: [] },
      services: {
        h: T('What we can build for your shop', '还可以为你的店做什么'),
        p: T('These are examples, not a fixed menu. Tell us how your shop runs and we will work out the rest.', '下面只是例子，不是固定菜单。告诉我们你的店怎么运转，其余的我们来想。'),
        items: [
          { icon: icons.card, h: T('Membership system', '会员管理系统'), p: T('Member cards, points and stored value. Know who your regulars are. A good fit for dessert and bubble tea shops.', '会员卡、积分、储值。知道谁是老顾客。适合甜品店、奶茶店。'), caseId: 'halfbiz' },
          { icon: icons.cart, h: T('Self-checkout', '自助收银系统'), p: T('Customers scan, order and pay on their own, at a kiosk or on their phone. Shorter queues at busy hours.', '顾客自己扫码、下单、付款，用自助机或手机都行。高峰期少排队。'), caseId: '' },
          { icon: icons.phone, h: T('Online ordering', '在线点单'), p: T('Your own ordering page, for pickup and for delivery by your own staff.', '属于你自己的点单页面，支持到店自取和自配送。'), caseId: 'halfbiz' },
          { icon: icons.box, h: T('Parcel intake and pickup', '包裹入库与取件'), p: T('Scan parcels in, notify customers, and let them collect with a code, even after closing.', '包裹扫码入库，自动通知顾客，凭取件码自助取件，关门后也能取。'), caseId: 'envoy' },
          { icon: icons.calendar, h: T('Booking and queues', '预约与排队'), p: T('Online booking, reminders, and a queue customers can check on their phone. For studios, salons and classes.', '在线预约、自动提醒，顾客用手机就能看排队进度。适合工作室、美容店和培训班。'), caseId: '' },
          { icon: icons.cpu, h: T('Connected devices', '智能硬件接入'), p: T('Systems that control real hardware, such as smart locks and lockers.', '能控制实体硬件的系统，比如智能锁和智能柜。'), caseId: 'envoy' }
        ]
      },
      steps: true,
      faq: [
        { q: T('How much does it cost?', '费用是多少？'), a: T('It depends on what you need. Starting with one feature keeps the first version small. After a free consultation, we give you a fixed quote.', '看你需要什么。先做一个功能，第一版就不会太大。免费咨询之后，我们会给出固定报价。') },
        { q: T('I am not technical. Is that a problem?', '我不懂技术，可以吗？'), a: T('No. Tell us how your shop runs day to day. We handle the setup and show you and your staff how to use it.', '可以。告诉我们店里每天怎么运转就行。安装由我们负责，也会教你和店员怎么用。') },
        { q: T('Do I need to buy new equipment?', '需要买新设备吗？'), a: T('Usually not. Most systems run on the phone, tablet or computer you already have. If hardware is needed, such as smart locks, we tell you up front.', '通常不需要。大多数系统在现有的手机、平板或电脑上就能用。如果要用到硬件，比如智能锁，我们会提前说明。') },
        qCode, qChinese
      ],
      contactH: T('Tell us what takes the most time in your shop.', '告诉我们，店里最费事的是什么。'),
      contactP: T("A few lines about your shop is enough. We'll reply within 2 business days.", '简单说说你的店就行，我们会在 2 个工作日内回复。')
    },

    enterprise: {
      meta: {
        title: T(`Enterprise systems · ${brand}`, `企业系统 · ${brand}`),
        description: T(
          'Internal tools, customer service platforms, workflow automation and single sign-on for companies and growing teams.',
          '为企业和成长中的团队开发内部管理系统、客户服务平台、流程自动化和统一登录。'
        )
      },
      chip: T('For companies and growing teams', '企业'),
      h1a: T('Business software for teams that have', '当表格和群聊已经不够用，'), h1b: T('outgrown spreadsheets.', '是时候拥有一套自己的系统。'),
      intro: T('We design and build internal tools, customer platforms and workflow automation.', '我们为企业开发内部管理系统、客户平台和流程自动化。'),
      cta2: { label: T('See our work', '查看案例'), href: '#work' },
      panel: {
        kicker: T('Running every day', '每天都在运行'),
        h: T('Our founder built and runs the systems behind a gaming community with 100K+ daily players.', '一个日活 10 万以上的游戏社区，背后的系统由我们的创始人开发和运营。'),
        p: T('Sign-in, player support and internal approvals at EaseCation all run on software we wrote. We bring the same approach to your business.', 'EaseCation 的员工登录、玩家服务和内部审批，都跑在我们写的软件上。我们会用同样的方式，为你的企业搭建系统。'),
        systems: [
          { id: 'iam', icon: icons.key, name: 'IAM', what: T('Single sign-on for internal apps', '内部应用统一登录'), metric: T('10 apps', '10 个应用') },
          { id: 'myec', icon: icons.ticket, name: 'MyEC', what: T('Player service and tickets', '玩家服务与工单'), metric: '190K+' },
          { id: 'oa', icon: icons.users, name: T('HR Center', '人事中心'), what: T('Approvals, HR and finance', '审批、人事与财务'), metric: '90%' }
        ]
      },
      stats: [
        { num: '90%', label: T('of approvals automated', '审批实现自动化') },
        { num: '190K+', label: T('support tickets handled', '张工单，累计处理') },
        { num: '−95%', label: T('password reset requests', '密码重置请求') },
        { num: '~200', label: T('staff on these systems', '名成员在使用这些系统') }
      ],
      services: {
        h: T('What we build', '我们做什么'), p: T('Business web applications: software your team or your customers use every day.', '企业 Web 应用，也就是你的团队或客户每天都会用的软件。'),
        items: [
          { icon: icons.layout, h: T('Internal tools', '内部管理系统'), p: T('Approvals, HR, payroll, finance and CRM in one place, instead of email threads and spreadsheets.', '审批、人事、薪资、财务和客户管理放进一个系统，不再靠邮件和表格。'), caseId: 'oa' },
          { icon: icons.ticket, h: T('Customer service platforms', '客户服务平台'), p: T('Customer portals, support tickets, feedback and account tools.', '客户门户、售后工单、意见反馈和账号工具。'), caseId: 'myec' },
          { icon: icons.zap, h: T('Workflow & AI automation', '流程与 AI 自动化'), p: T('Document extraction, ticket sorting, autoresponders and Microsoft 365 / Power Automate flows.', '文档信息提取、工单分类、自动回复，以及 Microsoft 365 / Power Automate 流程。'), caseId: '' },
          { icon: icons.key, h: T('Login & access', '账号与权限'), p: T('Single sign-on, multi-factor authentication and role-based access across all your apps.', '所有系统共用一个账号，支持多因素认证和按角色分配权限。'), caseId: 'iam' },
          { icon: icons.link, h: T('Integrations', '系统对接'), p: T('Connect what you already use, such as Microsoft 365, Google Workspace and tools with an API.', '接入你已经在用的工具，比如 Microsoft 365、Google Workspace 和提供 API 的系统。'), caseId: '' },
          { icon: icons.server, h: T('Maintenance & hosting', '维护与托管'), p: T('We keep it running after launch: updates, backups and monitoring.', '上线之后持续维护：更新、备份和监控。'), caseId: '' }
        ]
      },
      work: { h: T('Case studies', '案例'), featuredIds: ['myec', 'oa'], restIds: ['iam'] },
      steps: true,
      faq: [qCost, qCode, qExisting, qWhere, qChinese],
      contactH: T('Tell us what is slowing your team down.', '告诉我们，是什么在拖慢你的团队。'),
      contactP: T("Share a few lines about your company. We'll reply within 2 business days.", '简单介绍一下你的公司和需求，我们会在 2 个工作日内回复。')
    },

    other: {
      meta: {
        title: T(`Game content and creator events · ${brand}`, `其他业务：游戏内容与创作者活动 · ${brand}`),
        description: T(
          'Game UGC content in Unreal Engine 5 and creator competitions, including work with HoYoverse on Genshin Impact.',
          '使用 Unreal Engine 5 制作游戏 UGC 内容，举办创作者赛事，包括与 HoYoverse 合作的原神项目。'
        )
      },
      chip: T('Other work', '其他业务'),
      h1a: T('Game content,', '游戏内容、'), h1b: T('creator competitions and events.', '创作者赛事与活动。'),
      intro: T('Alongside software, we produce game UGC content and run creator events, including work with HoYoverse on Genshin Impact.', '除了软件，我们也做游戏 UGC 内容和创作者活动，包括与 HoYoverse 合作的原神项目。'),
      cta2: { label: T('See our work', '查看案例'), href: '#work' },
      stats: [
        { num: '$80K', label: T('CAD in contracts, delivered in 5 months', '加元合同，5 个月内交付') },
        { num: '100', label: T('participants in the Creator Challenge', '名选手参加创作者挑战赛') },
        { num: '10', label: T('university students trained', '名大学生完成培训') }
      ],
      workFirst: true,
      work: { h: T('Case studies', '案例'), featuredIds: ['creator', 'ue5'], restIds: [] },
      services: {
        h: T('What we do', '我们做什么'), p: T('Content, events and the team behind them.', '内容、活动，以及背后的团队。'),
        items: [
          { icon: icons.star, h: T('Game UGC content', '游戏 UGC 内容'), p: T('Game content produced in Unreal Engine 5 and delivered on contract.', '使用 Unreal Engine 5 制作游戏内容，按合同交付。'), caseId: 'ue5' },
          { icon: icons.flag, h: T('Creator competitions', '创作者赛事'), p: T('Website, registration, submissions, Discord community and participant support, run end to end.', '网站、报名、作品提交、Discord 社区和参赛者支持，全流程负责。'), caseId: 'creator' },
          { icon: icons.users, h: T('Student teams and training', '学生团队与培训'), p: T('We recruit and train university students, then manage delivery quality across contracts.', '招募并培训大学生，再把控每份合同的交付质量。'), caseId: 'ue5' }
        ]
      },
      contactH: T('Have a game or creator project in mind?', '有游戏内容或赛事方面的想法？'),
      contactP: T("Tell us about it in a few lines. We'll reply within 2 business days.", '简单说说你的想法，我们会在 2 个工作日内回复。')
    }
  };

  return {
    ui: {
      highlights: T('Highlights', '数据'), example: T('Example', '案例'), clickCase: T('Select a case to see the problem, what we built and the results.', '点击案例，查看问题、方案和成果。'),
      close: T('Close', '关闭'), built: T('What we built', '我们的方案'), results: T('Results', '成果'), stack: T('Tools', '技术'), similar: T('Start a similar project', '启动类似项目'),
      orEmail: T('Prefer email?', '更习惯发邮件？'), privacy: T('Privacy notice', '隐私声明'), founder: T('About the founder', '关于创始人'),
      subnav: T('Business sections', '业务板块'), cta1: T('Start a project', '开始一个项目')
    },
    cases,
    views,
    shared: {
      procH: T('How we work', '合作方式'),
      steps: [
        { h: T('Free consultation', '免费咨询'), p: T('30 minutes to understand what you need.', '用 30 分钟了解你的需求。') },
        { h: T('Scope and quote', '方案与报价'), p: T('A written scope with a fixed price and timeline.', '给出书面方案，写明固定价格和时间。') },
        { h: T('Build', '开发'), p: T('Short cycles, with a working demo you can try along the way.', '分阶段开发，过程中随时可以试用。') },
        { h: T('Launch and training', '上线与培训'), p: T('We deploy it and show your team how to use it.', '我们负责部署，并教你的团队怎么用。') },
        { h: T('Maintenance', '维护'), p: T('Optional monthly support after launch.', '上线后可以选择按月维护。') }
      ],
      faqH: T('Questions', '常见问题'),
      aboutH: T('About the company', '关于公司'),
      about1: T(`${brand} is a software company in the Greater Toronto Area. It was founded in September 2024 and incorporated in Ontario in November 2024.`, `${brand} 是一家位于大多伦多地区的软件公司，2024 年 9 月成立，同年 11 月在安大略省正式注册。`),
      about2: T('Our founder, Junxuan Bao, has spent 9+ years running online communities, including EaseCation, where he built the player service center, HR system and identity platform himself. He also works as a software engineer and studies Computer Science at McMaster University.', '创始人鲍俊轩有 9 年以上的社区与企业经营经验。EaseCation 的玩家服务中心、人事系统和统一身份平台，都由他亲手开发。他也是一名软件工程师，就读于麦克马斯特大学计算机科学专业。'),
      founderAlt: T('Portrait of Junxuan Bao', '鲍俊轩的职业照'), founderName: T('Junxuan Bao, Founder', '鲍俊轩，创始人'), founderLink: T('Personal site', '个人主页'),
      facts: [
        { k: T('Legal name', '公司全称'), v: 'JUNXUAN BAO SOLUTIONS INC.' },
        { k: T('Incorporated', '注册'), v: T('Ontario, November 2024', '安大略省，2024 年 11 月') },
        { k: T('Based in', '所在地'), v: T('Greater Toronto Area, Canada', '加拿大 · 大多伦多地区') },
        { k: T('Clients', '服务范围'), v: T('Worldwide, remote', '全球，远程协作') },
        { k: T('Contact', '联系方式'), v: 'Junxuan.Bao@Gmail.com' }
      ]
    },
    form: {
      name: T('Name', '姓名'), email: T('Email', '邮箱'), company: T('Business name', '公司或店铺名称'), optional: T('(optional)', '（选填）'),
      need: T('What do you need?', '你需要什么？'),
      needs: [T('Shop system', '小店系统'), T('Internal tool', '内部系统'), T('Customer platform', '客户平台'), T('Automation', '自动化'), T('Games & events', '游戏与活动'), T('Not sure yet', '还不确定')],
      msg: T('What is the problem?', '现在遇到了什么问题？'), msgPh: T('For example: customers can only pick up parcels before 6 pm.', '例如：顾客只能在下午 6 点前取件。'),
      budget: T('Budget', '预算'), timeline: T('Timeline', '期望周期'),
      times: [T('As soon as possible', '越快越好'), T('1–3 months', '1–3 个月'), T('Flexible', '时间灵活')],
      send: T('Send', '发送'), sending: T('Sending…', '发送中…'),
      sent: T("Thanks. Your message has been sent, and we'll reply within 2 business days.", '已收到你的信息，我们会在 2 个工作日内回复。'),
      failed: T('Something went wrong. Please email Junxuan.Bao@Gmail.com instead.', '发送失败，请直接发邮件到 Junxuan.Bao@Gmail.com。'),
      privacy: T('We only use your details to reply to you. See our privacy notice.', '你的信息只用于回复你，详见隐私声明。'),
      subject: T('New project inquiry', '新的项目咨询'),
      emailUs: T('Email us', '发送邮件'),
      include: T('To get a faster reply, tell us:', '想更快得到回复，可以在邮件里写上：'),
      includeItems: [T('Your business and what it does', '你的公司或店铺，以及主营业务'), T('The problem you want to solve', '你想解决的问题'), T('Your timeline, and budget if you have one', '期望周期，以及预算（如有）')]
    }
  };
}
