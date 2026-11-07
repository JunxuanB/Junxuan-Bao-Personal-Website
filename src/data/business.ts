// Content for the Business page of JUNXUAN BAO SOLUTIONS INC.
import type { ImageKey, Lang, Result } from './personal';

export interface Case {
  id: string;
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

export const icons = {
  layout: 'M3 4h18v16H3zM3 9h18M9 9v11',
  store: 'M3 9l1.5-5h15L21 9M3 9h18v11H3zM9 20v-6h6v6',
  zap: 'M13 2L4 14h7l-1 8 9-12h-7z',
  key: 'M7.5 15a4.5 4.5 0 1 1 4.2-6H21v3h-2v3h-3v-3h-4.3a4.5 4.5 0 0 1-4.2 3z',
  cpu: 'M7 7h10v10H7zM10 2v3M14 2v3M10 19v3M14 19v3M2 10h3M2 14h3M19 10h3M19 14h3',
  server: 'M4 4h16v6H4zM4 14h16v6H4zM8 7h.01M8 17h.01',
  ticket: 'M3 7h18v3a2 2 0 0 0 0 4v3H3v-3a2 2 0 0 0 0-4zM14 7v10',
  users: 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21c0-4 3-6 7-6s7 2 7 6M17 3.5a4 4 0 0 1 0 7.5M22 21c0-3-1.5-5-4-5.7'
};

export function getBusiness(lang: Lang) {
  const zh = lang === 'zh';
  const T = (en: string, cn: string) => (zh ? cn : en);

  const cases: Case[] = [
    {
      id: 'myec', mono: 'MyEC', img: 'myecHome', client: 'EaseCation', industry: T('Gaming community · 100K+ daily players', '游戏社区 · 日活 10 万以上'), year: T('2024 – now', '2024 – 至今'),
      title: T('MyEC: a player service center for 100K+ daily players', 'MyEC：服务日活 10 万以上玩家的服务中心'), metric: T('190K+ tickets handled', '累计工单 19 万以上'),
      summary: T('Response rate went from 25% to 100%, with 35% of tickets solved automatically within a minute.', '回复率由 25% 提升至 100%，35% 的工单在一分钟内自动解决。'),
      problemLabel: T('The problem', '问题'), problem: T('Only 25% of player requests received a response.', '玩家提交的请求，只有 25% 能得到回复。'),
      built: T("MyEC, a serverless player service center with tickets, feedback and account tools, connected to the game's platform APIs, with AI autoresponders for common requests.", 'MyEC 玩家服务中心：基于 serverless 架构，集工单、反馈与账号工具于一体，接入游戏平台接口，常见问题由 AI 自动回复。'),
      results: [{ n: '190K+', l: T('tickets handled', '累计处理工单') }, { n: '25% → 100%', l: T('response rate', '回复率') }, { n: '35%', l: T('solved within a minute', '一分钟内自动解决') }, { n: '99.99%', l: T('uptime', '可用性') }],
      stack: ['React', 'Express.js', 'MySQL', 'Serverless', 'AI'], link: { l: 'easecation.net', h: 'https://www.easecation.net/' }
    },
    {
      id: 'oa', mono: 'HR', client: 'EaseCation', industry: T('Gaming community · ~200 staff', '游戏社区 · 约 200 人团队'), year: T('2021 – now', '2021 – 至今'),
      title: T('HR Center: approvals in hours, not days', '人事中心：审批周期由数天缩短至数小时'), metric: T('90% of approvals automated', '90% 审批自动化'),
      summary: T('One internal system for applications, approvals, payroll and finance.', '以一套内部系统统一管理申请、审批、薪资与财务。'),
      problemLabel: T('The problem', '问题'), problem: T('Approvals and finance requests went through chat messages, and each review took 2–3 days.', '审批与财务申请依赖聊天消息往来，每次审核需要 2–3 天。'),
      built: T('An internal automation system with CRM, payroll and financial modules, plus approval rules that handle most requests automatically.', '包含客户管理、薪资与财务模块的内部自动化系统，并通过审批规则自动处理大部分申请。'),
      results: [{ n: '90%', l: T('of approvals automated', '审批自动化') }, { n: '70%', l: T('of finance tasks automated', '财务事务自动化') }, { n: '< 24 h', l: T('review time, down from 2–3 days', '审核时间，原需 2–3 天') }],
      stack: ['CRM', T('Payroll', '薪资'), T('Finance', '财务'), T('Workflow', '流程')], link: { l: 'easecation.net', h: 'https://www.easecation.net/' }
    },
    {
      id: 'iam', mono: 'IAM', client: 'EaseCation', industry: T('Gaming community · 10 internal apps', '游戏社区 · 10 个内部应用'), year: T('2023 – now', '2023 – 至今'),
      title: T('One sign-in for 10 internal applications', '10 个内部应用，统一一个登录'), metric: T('−95% password resets', '密码重置请求 −95%'),
      summary: T('Single sign-on, passkeys and permissions for every internal tool.', '为所有内部工具提供单点登录、Passkey 与权限管理。'),
      problemLabel: T('The problem', '问题'), problem: T('Staff needed a separate account for every internal tool, and password resets were the most common support request.', '每个内部工具都需要单独的账号，密码重置是最常见的求助。'),
      built: T('One enterprise-grade identity system for 10 applications: OAuth 2.0, single sign-on, TOTP and Passkey, multi-tenancy, and GitHub and Google sign-in.', '覆盖 10 个应用的企业级统一身份系统：OAuth 2.0、单点登录、TOTP 与 Passkey、多租户，以及 GitHub 与 Google 登录。'),
      results: [{ n: '200+', l: T('users, one account each', '名用户，一人一个账号') }, { n: '−95%', l: T('password resets', '密码重置请求') }, { n: '−80%', l: T('onboarding time', '新成员入职时间') }],
      stack: ['OAuth 2.0', 'PostgreSQL', 'Redis', 'React', 'Express.js']
    },
    {
      id: 'creator', mono: 'UGC', client: T('Supported by Genshin Impact (HoYoverse)', '由原神（HoYoverse）支持'), industry: T('Games · Student competition', '游戏 · 学生赛事'), year: T('May 2026', '2026.05'),
      title: T('Genshin Impact North America Creator Challenge', '原神北美创作者挑战赛'), metric: T('100 participants', '100 名参赛者'),
      summary: T('A creator competition for students across North America, run end to end.', '面向北美学生的创作者赛事，从策划到执行全程完成。'),
      problemLabel: T('Background', '背景'), problem: T("Following the launch of Genshin Impact's Miliastra Wonderland UGC features, we organized a creator competition for students and recent graduates across North America.", '原神「千星奇域」UGC 功能上线后，我们为北美在校生与应届毕业生举办了一场创作者比赛。'),
      built: T('Everything, end to end: competition website, registration, submission platform, Discord community, promotion and participant support.', '全部由我们完成：比赛网站、报名、作品提交平台、Discord 社区、宣传推广与参赛者支持。'),
      results: [{ n: '100', l: T('participants', '名参赛者') }, { n: T('End to end', '全流程'), l: T('website to community', '从网站到社区运营') }],
      stack: ['Web', 'Discord', 'UGC'], link: { l: 'creator.junxuanb.com', h: 'https://creator.junxuanb.com/' }
    },
    {
      id: 'ue5', mono: 'UE5', client: T('In collaboration with HoYoverse', '与 HoYoverse 合作'), industry: T('Games · Content production', '游戏 · 内容制作'), year: '2024 – 2025',
      title: T('Genshin Impact content in Unreal Engine 5', '原神 Unreal Engine 5 内容制作'), metric: T('$80K CAD in 5 months', '5 个月交付 8 万加元'),
      summary: T('A trained student team delivering game content on contract.', '经过培训的学生团队，按合同交付游戏内容。'),
      problemLabel: T('Background', '背景'), problem: T('Game content production for Genshin Impact in Unreal Engine 5.', '使用 Unreal Engine 5 为原神制作游戏内容。'),
      built: T('We built and trained a team of 10 university students, then produced and delivered Genshin Impact content in UE5. For most of them, it was their first professional employment.', '我们组建并培训了 10 名大学生，使用 UE5 制作并交付原神相关内容。对其中大多数人而言，这是他们的第一份专业工作。'),
      results: [{ n: '$80K', l: T('CAD in contracts, first 5 months', '加元合同，成立前五个月') }, { n: '10', l: T('students trained', '名学生完成培训') }],
      stack: ['Unreal Engine 5'], note: T('This case shows project delivery and team building. Game content is not one of our current services.', '该案例展示的是项目交付与团队建设能力，游戏内容制作目前并非我们的主营服务。')
    },
    {
      id: 'halfbiz', mono: 'HB', client: T('Our own product', '自有产品'), industry: T('Restaurants', '餐饮'), year: '2024',
      title: T('HalfBiz: one platform for family-owned restaurants', 'HalfBiz：家庭餐厅的一体化经营平台'), metric: T('$2,760 saved per year', '每年节省 $2,760'),
      summary: T('Loyalty, self-delivery and online ordering in one product.', '会员积分、自配送与在线点单，整合为一个产品。'),
      problemLabel: T('The problem', '问题'), problem: T('Family-owned restaurants were paying about $3,000 a year for separate ordering, delivery and loyalty software.', '家庭经营的餐厅每年需要花费约 $3,000，分别购买点单、配送与会员软件。'),
      built: T('One platform with online ordering, self-delivery and a loyalty program, bringing software costs down to $240 a year. Supported by Innovation Factory.', '一个整合在线点单、自配送与会员积分的平台，将软件成本降至每年 $240。获 Innovation Factory 支持。'),
      results: [{ n: '12+', l: T('businesses in the first week', '家商家，上线首周') }, { n: '$3,000 → $240', l: T('software cost per year', '每年软件成本') }],
      stack: ['PostgreSQL', 'Redis', 'React', 'Express.js']
    },
    {
      id: 'envoy', mono: 'LOCK', client: 'Envoy Hamilton', industry: T('Logistics · Hamilton, ON', '物流 · 安大略省汉密尔顿'), year: '2024',
      title: T('24/7 smart parcel lockers', '24 小时智能包裹柜'), metric: T('Web app + ESP32 smart locks', 'Web 应用 + ESP32 智能锁'),
      summary: T('Self-service pickup at any time, controlled from the web.', '随时自助取件，由 Web 系统控制。'),
      problemLabel: T('The problem', '问题'), problem: T('Customers could only pick up parcels during business hours.', '顾客只能在营业时间内取件。'),
      built: T('A 24/7 self-service locker system: a web app for customers and staff built with React, Express.js and MySQL, plus smart locks controlled by ESP32 microcontrollers.', '一套 24 小时自助包裹柜系统：基于 React、Express.js 与 MySQL 的顾客端与员工端 Web 应用，配合由 ESP32 微控制器控制的智能锁。'),
      results: [{ n: '24/7', l: T('self-service pickup', '自助取件') }, { n: '$10K', l: T('projected annual revenue per site', '每站点预计年收入') }],
      stack: ['React', 'Express.js', 'MySQL', 'ESP32', 'Arduino (C++)']
    }
  ];

  return {
    meta: {
      title: T('Junxuan Bao Solutions Inc. · Business software for growing teams', 'Junxuan Bao Solutions Inc. · 为成长中的企业开发业务系统'),
      description: T(
        'Junxuan Bao Solutions Inc. designs and builds internal tools, customer platforms and workflow automation for businesses around the world.',
        'Junxuan Bao Solutions Inc. 为全球企业设计和开发内部管理工具、客户业务平台与流程自动化系统。'
      )
    },
    ui: {
      highlights: T('Highlights', '数据'), example: T('Example', '案例'), clickCase: T('Select a case to see the problem, what we built and the results.', '点击案例，查看问题、方案与成果。'),
      close: T('Close', '关闭'), built: T('What we built', '我们的方案'), results: T('Results', '成果'), stack: T('Tools', '技术'), similar: T('Start a similar project', '启动类似项目'),
      orEmail: T('Prefer email?', '更习惯邮件沟通？'), privacy: T('Privacy notice', '隐私声明'), founder: T('About the founder', '关于创始人'),
      prev: T('Previous', '上一个'), next: T('Next', '下一个')
    },
    cases,
    t: {
      chip: T('Junxuan Bao Solutions Inc. · Serving clients worldwide', 'Junxuan Bao Solutions Inc. · 服务全球客户'),
      h1a: T('Business software for teams that have', '当表格和群聊已经不够用，'), h1b: T('outgrown spreadsheets.', '是时候拥有一套自己的系统。'),
      intro: T('We design and build internal tools, customer platforms and workflow automation for businesses around the world.', '我们为全球企业设计和开发内部管理工具、客户业务平台与流程自动化系统。'),
      cta1: T('Start a project', '开始一个项目'), cta2: T('See our work', '查看案例'),
      proofKicker: T('Running every day', '每天都在运行'),
      proofH: T('Our founder built and runs the systems behind a gaming community with 100K+ daily players.', '一个日活 10 万以上的游戏社区，其背后的系统由我们的创始人开发并持续运营。'),
      proofP: T('Sign-in, player support and internal approvals at EaseCation all run on software we wrote. We bring the same approach to your business.', 'EaseCation 的员工登录、玩家服务与内部审批，都运行在我们编写的软件之上。我们将以同样的方式，为你的企业搭建系统。'),
      systems: [
        { id: 'iam', icon: icons.key, name: 'IAM', what: T('Single sign-on for internal apps', '内部应用统一登录'), metric: T('10 apps', '10 个应用') },
        { id: 'myec', icon: icons.ticket, name: 'MyEC', what: T('Player service and tickets', '玩家服务与工单'), metric: '190K+' },
        { id: 'oa', icon: icons.users, name: T('HR Center', '人事中心'), what: T('Approvals, HR and finance', '审批、人事与财务'), metric: '90%' }
      ],
      stats: [
        { num: '90%', label: T('of approvals automated', '审批实现自动化') },
        { num: '190K+', label: T('support tickets handled', '累计处理工单') },
        { num: '$80K', label: T('delivered in our first 5 months', '成立五个月内交付') },
        { num: '9+', label: T('years running a business', '年企业经营经验') }
      ],
      whyH: T('Why work with us', '为什么选择我们'),
      why: [
        { n: '01', h: T("We've run a business ourselves.", '我们自己经营过企业。'), p: T('Our founder has spent 9+ years running online communities and a team of about 200, handling finance, HR, taxation and operations. We know what an internal system is supposed to save you.', '创始人拥有 9 年以上的社区与企业经营经验，带领过约 200 人的团队，统筹财务、人事、税务与运营，清楚一套内部系统应该为企业省下什么。') },
        { n: '02', h: T('Proven at scale.', '经过规模化验证。'), p: T('Our systems run staff sign-in, 190,000+ player tickets and internal approvals for a community with 100K+ daily players.', '我们开发的系统支撑着一个日活 10 万以上社区的员工登录、19 万多张玩家工单与内部审批。') },
        { n: '03', h: T('Small team, direct contact.', '团队精简，直接沟通。'), p: T('You talk to the person building your system, not an account manager. In English or Mandarin.', '与你对接的就是开发系统的人，而不是客户经理。中英文均可沟通。') }
      ],
      servH: T('What we build', '我们做什么'), servP: T('Business web applications: software your team or your customers use every day.', '企业 Web 应用，也就是你的团队或客户每天都会使用的软件。'),
      services: [
        { icon: icons.layout, h: T('Internal tools', '内部管理系统'), p: T('Approvals, HR, payroll, finance and CRM in one place, instead of email threads and spreadsheets.', '将审批、人事、薪资、财务与客户管理整合到一个系统，不再依赖邮件和表格。'), caseId: 'oa' },
        { icon: icons.store, h: T('Customer platforms', '客户业务平台'), p: T('Online ordering, memberships and loyalty, booking, customer portals and support tickets.', '在线点单、会员与积分、预约、客户门户与售后工单。'), caseId: 'halfbiz' },
        { icon: icons.zap, h: T('Workflow & AI automation', '流程与 AI 自动化'), p: T('Document extraction, ticket sorting, autoresponders and Microsoft 365 / Power Automate flows.', '文档信息提取、工单分类、自动回复，以及 Microsoft 365 / Power Automate 流程。'), caseId: 'myec' },
        { icon: icons.key, h: T('Login & access', '账号与权限'), p: T('Single sign-on, multi-factor authentication and role-based access across all your apps.', '所有系统共用一个账号，支持多因素认证与基于角色的权限管理。'), caseId: 'iam' },
        { icon: icons.cpu, h: T('Connected devices', '智能硬件接入'), p: T('Web systems that control real hardware, such as smart locks and lockers.', '能够控制实体硬件的 Web 系统，例如智能锁与智能柜。'), caseId: 'envoy' },
        { icon: icons.server, h: T('Maintenance & hosting', '维护与托管'), p: T('We keep it running after launch: updates, backups and monitoring.', '上线之后持续维护：更新、备份与监控。'), caseId: '' }
      ],
      workH: T('Case studies', '案例'), featuredIds: ['myec', 'oa'],
      procH: T('How we work', '合作方式'),
      steps: [
        { h: T('Free consultation', '免费咨询'), p: T('30 minutes to understand what you need.', '用 30 分钟了解你的需求。') },
        { h: T('Scope and quote', '方案与报价'), p: T('A written scope with a fixed price and timeline.', '提供书面方案，明确固定价格与时间。') },
        { h: T('Build', '开发'), p: T('Short cycles, with a working demo you can try along the way.', '分阶段开发，过程中随时可以试用。') },
        { h: T('Launch and training', '上线与培训'), p: T('We deploy it and show your team how to use it.', '由我们完成部署，并培训你的团队使用。') },
        { h: T('Maintenance', '维护'), p: T('Optional monthly support after launch.', '上线后可选择按月维护。') }
      ],
      faqH: T('Questions', '常见问题'),
      faq: [
        { q: T('How much does it cost?', '费用是多少？'), a: T("It depends on how many features and users you need. After a free consultation, we'll give you a fixed quote.", '取决于功能与用户规模。免费咨询之后，我们会给出固定报价。') },
        { q: T('Who owns the code?', '代码归谁所有？'), a: T('You do. Once the project is paid in full, the code and your data belong to you.', '归你所有。项目款项结清后，代码与数据均属于你。') },
        { q: T('Can you work with our existing systems?', '能否接入我们现有的系统？'), a: T('Yes, including Microsoft 365, Google Workspace and most tools with an API.', '可以，包括 Microsoft 365、Google Workspace，以及大多数提供 API 的工具。') },
        { q: T('Where are your clients?', '你们服务哪些地区的客户？'), a: T('Anywhere. We are based in the Greater Toronto Area and work remotely with clients around the world, across time zones.', '不限地区。我们位于大多伦多地区，可以远程服务全球客户，并配合不同时区协作。') },
        { q: T('Can we talk in Chinese?', '可以用中文沟通吗？'), a: T('Yes. We work in English and Mandarin.', '可以，中英文均可。') }
      ],
      aboutH: T('About the company', '关于公司'),
      about1: T('Junxuan Bao Solutions Inc. is a software company in the Greater Toronto Area. It was founded in September 2024 and incorporated in Ontario in November 2024.', 'Junxuan Bao Solutions Inc. 是一家位于大多伦多地区的软件公司，于 2024 年 9 月成立，同年 11 月在安大略省正式注册。'),
      about2: T('Our founder, Junxuan Bao, has spent 9+ years running online communities, including EaseCation, where he built the player service center, HR system and identity platform himself. He also works as a full stack engineer and studies Computer Science at McMaster University.', '创始人鲍俊轩拥有 9 年以上的社区与企业经营经验，EaseCation 的玩家服务中心、人事系统与统一身份平台均由他亲手开发。他同时是一名全栈工程师，就读于麦克马斯特大学计算机科学专业。'),
      founderAlt: T('Portrait of Junxuan Bao', '鲍俊轩的职业照'), founderName: T('Junxuan Bao, Founder', '鲍俊轩，创始人'), founderLink: T('Personal site', '个人主页'),
      facts: [
        { k: T('Legal name', '公司全称'), v: 'JUNXUAN BAO SOLUTIONS INC.' },
        { k: T('Incorporated', '注册'), v: T('Ontario, November 2024', '安大略省，2024 年 11 月') },
        { k: T('Based in', '所在地'), v: T('Greater Toronto Area, Canada', '加拿大 · 大多伦多地区') },
        { k: T('Clients', '服务范围'), v: T('Worldwide, remote', '全球，远程协作') },
        { k: T('Contact', '联系方式'), v: 'Junxuan.Bao@Gmail.com' }
      ],
      contactH: T('Tell us what is slowing your team down.', '告诉我们，是什么在拖慢你的团队。'),
      contactP: T("Share a few lines about your business. We'll reply within 2 business days.", '简单介绍一下你的公司与需求，我们会在 2 个工作日内回复。')
    },
    form: {
      name: T('Name', '姓名'), email: T('Email', '邮箱'), company: T('Company', '公司名称'), optional: T('(optional)', '（选填）'),
      need: T('What do you need?', '你需要什么？'),
      needs: [T('Internal tool', '内部系统'), T('Customer platform', '客户平台'), T('Automation', '自动化'), T('Login & access', '账号与权限'), T('Not sure yet', '尚不确定')],
      msg: T('What is the problem?', '目前遇到了什么问题？'), msgPh: T('For example: approvals go through email and take a week.', '例如：审批依赖邮件，一次需要一周。'),
      budget: T('Budget', '预算'), timeline: T('Timeline', '期望周期'),
      times: [T('As soon as possible', '越快越好'), T('1–3 months', '1–3 个月'), T('Flexible', '时间灵活')],
      send: T('Send', '发送'), sending: T('Sending…', '发送中…'),
      sent: T("Thanks. Your message has been sent, and we'll reply within 2 business days.", '已收到你的信息，我们会在 2 个工作日内回复。'),
      failed: T('Something went wrong. Please email Junxuan.Bao@Gmail.com instead.', '发送失败，请直接发送邮件至 Junxuan.Bao@Gmail.com。'),
      privacy: T('We only use your details to reply to you. See our privacy notice.', '你的信息仅用于回复你，详见隐私声明。'),
      subject: T('New project inquiry', '新的项目咨询'),
      emailUs: T('Email us', '发送邮件'),
      include: T('To get a faster reply, tell us:', '为了更快回复，邮件中可以包含：'),
      includeItems: [T('Your company and what it does', '你的公司及主营业务'), T('The problem you want to solve', '你希望解决的问题'), T('Your timeline, and budget if you have one', '期望周期，以及预算（如有）')]
    }
  };
}
