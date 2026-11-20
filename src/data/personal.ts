// Content for the Personal page (English and Simplified Chinese).
// English follows the wording of Junxuan's résumés; Chinese follows the
// register of the EaseCation team introduction.

export type Lang = 'en' | 'zh';
export type ProjectCat = 'ec' | 'work' | 'company' | 'other';
export type ImageKey = 'myecHome' | 'myecSupport' | 'openMyec' | 'chinajoyBooth' | 'chinajoyDetail' | 'easecationCity' | 'luminoreBoard' | 'luminoreDuel' | 'luminoreHome';

export interface Result { n: string; l: string }
export interface Project {
  id: string;
  cat: ProjectCat;
  org: string;
  year: string;
  title: string;
  headline: string;
  role: string;
  summary: string;
  what: string;
  did: string[];
  results: Result[];
  stack: string[];
  img?: ImageKey;
  gallery?: ImageKey[];
  links?: { l: string; h: string }[];
  note?: string;
}
export interface ExperienceItem {
  span: string;
  org: string;
  unit?: string;
  loc: string;
  roles: { title: string; dates: string }[];
  points: string[];
  tags: string[];
}

export function getPersonal(lang: Lang) {
  const zh = lang === 'zh';
  const T = (en: string, cn: string) => (zh ? cn : en);

  const projects: Project[] = [
    {
      id: 'easecation', cat: 'ec', img: 'easecationCity', org: 'EaseCation', year: T('2018 – now', '2018 – 至今'),
      title: T('EaseCation, as a company', 'EaseCation 企业化经营'),
      headline: T('Growing a student-run Minecraft community into a company with three branches', '把学生社团做成有三个分支的正式企业'),
      role: T('Company Founder & Head of Operations', '公司创始人、运营负责人'),
      summary: T('Finance, HR, taxation, compliance and partnerships for a community with 100K+ daily players.', '负责财务、人事、税务、合规与对外合作，社区日活 10 万以上。'),
      what: T(
        'EaseCation is a Minecraft mini-game community with 100K+ daily active players. I founded its operating company and lead operations, turning what the team actually needs into clear structures and processes.',
        'EaseCation 是一个日活超过 10 万的 Minecraft 小游戏社区。我创办了它的运营公司，并负责运营，把团队的实际需求变成清晰的制度和流程。'
      ),
      did: [
        T('Restructured a student group into a formal company with three branches, growing it from early operations to $400,000 in annual revenue.', '将学生社团改组为设有三个分支的正式企业，推动其从早期运营成长至年营收 $400,000。'),
        T('Managed finance, HR, taxation and legal compliance across multiple jurisdictions.', '负责财务、人事与税务，做好跨地区的税务与法律合规。'),
        T('Established strategic partnerships with major enterprises, including NetEase Games.', '与网易游戏等大型企业建立战略合作关系。'),
        T('Led a team of about 200 people across departments and time zones.', '带领约 200 人的团队，跨部门、跨时区协作。')
      ],
      results: [
        { n: '$400K', l: T('annual revenue', '年营收') },
        { n: '100K+', l: T('daily active players', '日活玩家') },
        { n: '~200', l: T('people on the team', '人团队') }
      ],
      stack: [T('Operations', '企业经营'), T('Finance & tax', '财务与税务'), T('HR', '人事管理'), T('Partnerships', '对外合作')],
      links: [{ l: 'easecation.net', h: 'https://www.easecation.net/' }]
    },
    {
      id: 'myec', cat: 'ec', img: 'myecHome', gallery: ['myecSupport', 'openMyec'], org: 'EaseCation', year: T('Jul 2024 – now', '2024.07 – 至今'),
      title: T('MyEC · EaseCation User Service System', 'MyEC · EaseCation 用户服务系统'),
      headline: T('MyEC: the player service center behind 100K+ daily players', 'MyEC：服务日活 10 万以上玩家的服务中心'),
      role: T('Designed and developed', '设计与开发'),
      summary: T('Serverless ticketing with AI autoresponders, serving tens of thousands of users at 99.99% uptime.', 'serverless 工单系统，带 AI 自动回复，服务数万名用户，可用性 99.99%。'),
      what: T(
        "MyEC is EaseCation's player service center, where account linking, game data, feedback and support tickets come together. The system integrates platform APIs to automate manual operations, and its full frontend is open source as OpenMyEC.",
        'MyEC 是 EaseCation 的玩家服务中心，账号绑定、游戏数据、反馈与工单都在这里。系统接入平台接口，把人工操作自动化。完整前端已开源，名为 OpenMyEC。'
      ),
      did: [
        T('Developed a serverless system with 99.99% uptime using MySQL, React and Express.js.', '基于 MySQL、React 与 Express.js 开发 serverless 系统，可用性达 99.99%。'),
        T('Integrated platform APIs to automate manual operations.', '接入平台接口，将人工操作自动化。'),
        T('Enhanced user response rates from 25% to 100%, with AI-powered autoresponders resolving 35% of work orders within a minute.', '用户回复率由 25% 提升至 100%。AI 自动回复让 35% 的工单在一分钟内解决。')
      ],
      results: [
        { n: '25% → 100%', l: T('user response rate', '用户回复率') },
        { n: '35%', l: T('of work orders resolved within a minute', '的工单一分钟内自动解决') },
        { n: '99.99%', l: T('uptime', '可用性') },
        { n: '190K+', l: T('tickets on the platform', '平台累计工单') }
      ],
      stack: ['React', 'Express.js', 'MySQL', 'Serverless', 'AI'],
      links: [{ l: 'easecation.net', h: 'https://www.easecation.net/' }]
    },
    {
      id: 'iam', cat: 'ec', org: 'EaseCation', year: T('Sep 2023 – now', '2023.09 – 至今'),
      title: T('EaseCation Identity and Access Management', 'EaseCation 统一身份认证（IAM）'),
      headline: T('One enterprise-grade sign-in for 10 applications and 200+ users', '10 个应用、200 多名用户，共用一套企业级登录'),
      role: T('Designed and developed', '设计与开发'),
      summary: T('OAuth 2.0, multi-tenancy, SSO and multi-factor authentication with TOTP and Passkey.', '基于 OAuth 2.0，支持多租户、单点登录，以及 TOTP 与 Passkey 多因素认证。'),
      what: T(
        'An enterprise-grade identity and access management system built on OAuth 2.0. It provides the shared layer for sign-in, applications, API keys and authorization across MyEC, the operations console and other EaseCation products.',
        '基于 OAuth 2.0 的企业级身份与权限管理系统。MyEC、运营后台等 EaseCation 产品都用它来管理登录、应用、API Key 与授权。'
      ),
      did: [
        T('Developed the IAM system using PostgreSQL, Redis, React and Express.js, serving 200+ users across 10 applications.', '基于 PostgreSQL、Redis、React 与 Express.js 开发 IAM 系统，服务 10 个应用的 200 多名用户。'),
        T('Implemented multi-tenancy architecture, SSO and multi-factor authentication (TOTP, Passkey).', '实现多租户架构、单点登录与多因素认证（TOTP、Passkey）。'),
        T('Integrated GitHub and Google as identity providers.', '接入 GitHub 与 Google 作为身份提供方。')
      ],
      results: [
        { n: '−95%', l: T('password resets', '密码重置请求') },
        { n: '−80%', l: T('onboarding time', '新成员入职时间') },
        { n: '10', l: T('applications on one sign-in', '个应用统一登录') }
      ],
      stack: ['OAuth 2.0', 'PostgreSQL', 'Redis', 'React', 'Express.js'],
      note: T('Its predecessor was NexaGate, an enterprise single sign-on system built with PHP and MySQL.', '其前身为基于 PHP 与 MySQL 开发的企业级单点登录系统 NexaGate。')
    },
    {
      id: 'oa', cat: 'ec', org: 'EaseCation', year: T('Jan 2021 – now', '2021.01 – 至今'),
      title: T('EaseCation Office Automation System', 'EaseCation 办公自动化系统（人事中心）'),
      headline: T('Office automation that cut reviews from 2–3 days to under 24 hours', '办公自动化：审核从 2–3 天缩短到 24 小时内'),
      role: T('Designed and developed', '设计与开发'),
      summary: T('CRM, payroll and financial modules that automate 90% of approvals and 70% of finance tasks.', '包含客户管理、薪资与财务模块，90% 的审批和 70% 的财务事务已自动化。'),
      what: T(
        "EaseCation's internal HR Center turns applications, approvals, records and finance work into clear, traceable workflows instead of scattered messages.",
        'EaseCation 内部的人事中心。申请、审批、档案与财务不再靠零散的消息，而是走清晰、可追踪的流程。'
      ),
      did: [
        T('Designed and developed an internal automation system with CRM, payroll and financial modules.', '设计并开发包含客户管理、薪资与财务模块的内部自动化系统。'),
        T('Automated 90% of approvals and 70% of finance tasks.', '实现 90% 审批与 70% 财务事务的自动化。'),
        T('Streamlined internal operations across multiple departments, removing process bottlenecks.', '理顺多个部门的内部运转，消除流程瓶颈。')
      ],
      results: [
        { n: '90%', l: T('of approvals automated', '审批自动化') },
        { n: '70%', l: T('of finance tasks automated', '财务事务自动化') },
        { n: '< 24 h', l: T('review time, down from 2–3 days', '审核时间，原需 2–3 天') }
      ],
      stack: ['CRM', T('Payroll', '薪资'), T('Finance', '财务'), T('Workflow', '流程')]
    },
    {
      id: 'luminore', cat: 'other', img: 'luminoreBoard', gallery: ['luminoreDuel', 'luminoreHome'], org: 'Luminore', year: T('Jul – Nov 2026', '2026.07 – 2026.11'),
      title: T('iOS Board Game', 'iOS 桌游'),
      headline: T('Luminore: a gem-trading board game for iPhone and iPad, on the App Store', 'Luminore：已上架 App Store 的宝石交易桌游'),
      role: T('Designed and developed, solo', '独立设计与开发'),
      summary: T('SwiftUI, three ways to play together, AI opponents and a Cloudflare Workers relay. Free and open source.', 'SwiftUI 开发，三种联机方式，带 AI 对手，联机中继跑在 Cloudflare Workers 上。免费、开源。'),
      what: T(
        'Luminore is a gem-trading board game for 2 to 7 players, built for playing with the people around you. Take gems, buy development cards, turn them into permanent discounts and race to the target score. It is free, with no account, ads or tracking.',
        'Luminore 是一款 2–7 人的宝石交易桌游，适合和身边的人一起玩。拿宝石、买发展卡，用卡牌换来永久折扣，先到目标分数的人获胜。游戏免费，无需账号，没有广告和追踪。'
      ),
      did: [
        T('Built the app in SwiftUI with native layouts for iPhone and iPad, in English and Simplified Chinese.', '使用 SwiftUI 开发，原生适配 iPhone 与 iPad，支持英文与简体中文。'),
        T('Implemented two rulesets (Standard and Duel), AI players in three difficulty levels and guided tutorials, in a rules core with no UI dependencies.', '实现标准与对决两套规则、三档难度的 AI 和新手教程。规则核心独立成模块，不依赖界面。'),
        T('Designed one host-authoritative protocol shared by three transports: local network (Bonjour + TCP), nearby (MultipeerConnectivity) and Internet (room codes).', '设计了一套由房主设备掌管状态的协议，三种联机方式共用：局域网（Bonjour + TCP）、近场（MultipeerConnectivity）和互联网（房间码）。'),
        T('Wrote the Internet relay on Cloudflare Workers with Durable Objects, and published the app on the App Store.', '用 Cloudflare Workers 与 Durable Objects 编写互联网中继，并将应用上架 App Store。')
      ],
      results: [
        { n: '2–7', l: T('players per game', '人同局') },
        { n: '3', l: T('ways to play together', '种联机方式') },
        { n: '2', l: T('rulesets, with AI and tutorials', '套规则，含 AI 与教程') }
      ],
      stack: ['Swift', 'SwiftUI', 'Cloudflare Workers', 'Durable Objects', 'TypeScript'],
      links: [
        { l: 'App Store', h: 'https://apps.apple.com/us/app/luminore/id6793995045' },
        { l: 'GitHub', h: 'https://github.com/JunxuanB/Luminore' }
      ]
    },
    {
      id: 'symcor', cat: 'work', org: 'Symcor', year: '2025.09 – 2026.05',
      title: T('Client Service Desk AI Automation', '客户服务台 AI 自动化'),
      headline: T("AI automation for a service desk serving Canada's major financial institutions", '用 AI 自动处理客户服务台的工单'),
      role: T('Software Engineer Intern', '软件工程实习生'),
      summary: T('Serverless document extraction and classification on Azure, automating 70% of client service tickets.', '基于 Azure 的 serverless 文档提取与分类，自动处理 70% 的客户服务工单。'),
      what: T(
        "Symcor's Client Service Desk connects Symcor with its customers, including Canada's major financial institutions, to process financial data and service requests.",
        'Symcor 的客户服务台面向其客户，包括加拿大多家主要金融机构，负责处理金融数据与服务请求。'
      ),
      did: [
        T('Built serverless infrastructure using Azure Functions, Azure OpenAI, Document Intelligence and TypeScript.', '基于 Azure Functions、Azure OpenAI、Document Intelligence 与 TypeScript 搭建 serverless 架构。'),
        T('Enabled intelligent document extraction and classification, automating 70% of client service tickets.', '实现智能文档提取与分类，70% 的客户服务工单自动处理。'),
        T('Developed an automated QA testing framework to ensure reliability and accuracy for financial data processing workflows.', '开发自动化 QA 测试框架，保障金融数据处理流程的可靠性与准确性。')
      ],
      results: [{ n: '70%', l: T('of client service tickets automated', '客户服务工单自动处理') }],
      stack: ['Azure Functions', 'Azure OpenAI', 'Document Intelligence', 'TypeScript'],
      note: T('Built as an employee. Screenshots are not public.', '受雇期间的工作，截图不对外公开。')
    },
    {
      id: 'resiliocs', cat: 'work', org: 'Resiliocs Intelligence', year: T('2025.05 – now', '2025.05 – 至今'),
      title: T('Environmental Risk Assessment Platform', '环境风险评估平台'),
      headline: T('A full-stack SaaS for real-time climate risk analysis', '实时分析气候风险的全栈 SaaS 平台'),
      role: T('Intern → Software Developer → Full Stack Engineer', '实习生 → 软件开发 → 全栈工程师'),
      summary: T('React and Express.js in a monorepo, integrated with internal machine learning models.', '基于 React 与 Express.js 的 monorepo 架构，接入内部机器学习模型。'),
      what: T(
        'An environmental risk assessment platform that turns internal machine learning models into a product for real-time climate risk analysis, alongside a redesigned company website.',
        '一个环境风险评估平台，把内部机器学习模型做成可以实时分析气候风险的产品。同时重构了公司官网。'
      ),
      did: [
        T('Built the full-stack SaaS platform using React and Express.js in a monorepo architecture.', '基于 React 与 Express.js 的 monorepo 架构，搭建全栈 SaaS 平台。'),
        T('Implemented TSOA and Swagger UI for OpenAPI-compliant, self-documenting RESTful APIs.', '引入 TSOA 与 Swagger UI，构建符合 OpenAPI 规范、自带文档的 RESTful API。'),
        T('Redesigned the company website using Astro, achieving a 400% improvement in load times, with SSO integration and better maintainability.', '使用 Astro 重构公司官网，加载性能提升 400%，并完成 SSO 集成、提升可维护性。')
      ],
      results: [{ n: '400%', l: T('faster website load times', '官网加载性能提升') }, { n: T('Real-time', '实时'), l: T('climate risk analysis', '气候风险分析') }],
      stack: ['React', 'Express.js', 'TSOA', 'Swagger', 'Astro'],
      note: T('Built as an employee. Screenshots are not public.', '受雇期间的工作，截图不对外公开。')
    },
    {
      id: 'spc', cat: 'work', org: 'McMaster University', year: T('2025.05 – now', '2025.05 – 至今'),
      title: T('Science Sponsored Project Checklist Automation', '理学院科研资助项目审批自动化'),
      headline: T('Research funding approvals, automated without changing how people email', '科研经费审批自动化，大家照常发邮件'),
      role: T('Data Analyst', '数据分析师'),
      summary: T('An approval system in Outlook and Power Automate that cut manual processing by over 90%.', '基于 Outlook 与 Power Automate 的审批系统，人工处理减少 90% 以上。'),
      what: T(
        'Research sponsorship and funding approvals used to depend on manual email handling. The new system keeps the traditional communication flow while routing and tracking each request automatically.',
        '科研赞助与经费审批过去靠人工处理邮件。新系统不改变大家的沟通方式，每一项申请都自动流转和跟踪。'
      ),
      did: [
        T('Built an automated approval system using Microsoft Outlook and Power Automate.', '基于 Microsoft Outlook 与 Power Automate 搭建自动化审批系统。'),
        T('Streamlined the SPC approval process, eliminating manual email handling while keeping traditional communication flows.', '理顺 SPC 审批流程，沟通方式不变，不再需要人工处理邮件。'),
        T('Presented the work at the McMaster Operational Excellence Forum 2026.', '在 McMaster Operational Excellence Forum 2026 上分享该项目。')
      ],
      results: [{ n: '−90%', l: T('manual processing', '人工处理') }],
      stack: ['Power Automate', 'Microsoft Outlook', 'Microsoft 365']
    },
    {
      id: 'creator', cat: 'company', org: 'Junxuan Bao Solutions', year: T('May 2026', '2026.05'),
      title: T('Genshin Impact North America Creator Challenge', '原神北美创作者挑战赛'),
      headline: T('A Genshin Impact creator challenge for students across North America', '面向北美学生的原神创作者挑战赛'),
      role: T('Organizer, end to end', '主办，全程独立完成'),
      summary: T('Website, registration, submissions, Discord and participant support, run by one person. Supported by HoYoverse.', '网站、报名、作品提交、Discord 社区与参赛者支持，全部由一人完成。由原神（HoYoverse）提供支持。'),
      what: T(
        "Following the launch of Genshin Impact's Miliastra Wonderland UGC features, the challenge invited students and recent graduates across North America to focus on game design, with all art assets built in.",
        '原神「千星奇域」UGC 功能上线后，比赛面向北美在校生与应届毕业生开放。所有美术资源均为内置，参赛者只需专注于玩法设计与创意。'
      ),
      did: [
        T('Built the competition website, registration and submission platform.', '搭建比赛网站、报名系统与作品提交平台。'),
        T('Ran the official Discord community, promotion and participant support.', '运营官方 Discord 社区，负责宣传推广与参赛者支持。'),
        T('Worked with Genshin Impact (HoYoverse) as the supporting partner.', '与原神（HoYoverse）对接合作。')
      ],
      results: [{ n: '100', l: T('participants', '名参赛者') }, { n: '1', l: T('organizer, end to end', '人全程主办') }],
      stack: ['Web', 'Discord', 'UGC'],
      links: [{ l: 'creator.junxuanb.com', h: 'https://creator.junxuanb.com/' }]
    },
    {
      id: 'ue5', cat: 'company', org: 'Junxuan Bao Solutions', year: '2024 – 2025',
      title: T('Genshin Impact Content in Unreal Engine 5', '原神 Unreal Engine 5 内容制作'),
      headline: T('$80,000 CAD of Genshin Impact content, delivered by a student team', '学生团队交付 8 万加元原神内容合同'),
      role: T('Founder & CEO', '创始人、CEO'),
      summary: T('Collaborated with HoYoverse, and built and trained a team of 10 university students.', '与 HoYoverse 合作，组建并培训 10 名大学生组成的团队。'),
      what: T(
        'Content production for Genshin Impact in Unreal Engine 5, in collaboration with HoYoverse, delivered within the first five months of Junxuan Bao Solutions.',
        '与 HoYoverse 合作，使用 Unreal Engine 5 制作原神相关内容。公司成立五个月内完成交付。'
      ),
      did: [
        T('Delivered $80,000 CAD in contracts within five months.', '五个月内交付 8 万加元合同。'),
        T('Built and trained a team of 10 university students, providing their first professional employment.', '组建并培训 10 名大学生，为他们提供第一份专业工作。'),
        T('Provided UE5 training and managed delivery quality across contracts.', '提供 UE5 培训，并把控各项合同的交付质量。')
      ],
      results: [{ n: '$80K', l: T('CAD in 5 months', '加元，5 个月内') }, { n: '10', l: T('students trained', '名学生完成培训') }],
      stack: ['Unreal Engine 5', T('Team training', '团队培训')]
    },
    {
      id: 'halfbiz', cat: 'company', org: 'Junxuan Bao Solutions', year: T('Dec 2024', '2024.12'),
      title: 'HalfBiz',
      headline: T('HalfBiz: loyalty, self-delivery and online ordering for family-owned restaurants', 'HalfBiz：为家庭餐厅提供会员、自配送与在线点单'),
      role: T('Founder, product and engineering', '创始人，负责产品与开发'),
      summary: T('Projected to save each restaurant $2,760 a year by cutting software costs from $3,000 to $240.', '将软件成本由 $3,000 降至 $240，预计每家餐厅每年节省 $2,760。'),
      what: T(
        'A business tool that helps small businesses scale operations quickly, bringing loyalty programs, self-delivery and online ordering into one product. Supported by Innovation Factory.',
        '帮助小型企业快速扩展经营的商业工具，将会员积分、自配送与在线点单整合为一个产品。获 Innovation Factory 支持。'
      ),
      did: [
        T('Launched the platform with PostgreSQL, Redis, React and Express.js.', '基于 PostgreSQL、Redis、React 与 Express.js 推出平台。'),
        T('Designed loyalty, self-delivery and online ordering features for family-owned restaurants.', '为家庭经营餐厅设计会员积分、自配送与在线点单功能。'),
        T('Gained adoption from over a dozen small businesses within a week of its rollout.', '上线一周内获十余家小型商家采用。')
      ],
      results: [{ n: '$2,760', l: T('saved per restaurant per year', '每家餐厅每年节省') }, { n: '12+', l: T('businesses in the first week', '家商家，上线首周') }],
      stack: ['PostgreSQL', 'Redis', 'React', 'Express.js']
    },
    {
      id: 'envoy', cat: 'company', org: 'Envoy Hamilton', year: T('Sep 2024', '2024.09'),
      title: T('Envoy 24-Hour Parcel Locker System', 'Envoy 24 小时智能包裹柜'),
      headline: T('A 24/7 smart parcel locker system with ESP32-controlled locks', '24 小时自助包裹柜，智能锁由 ESP32 控制'),
      role: T('Software and hardware engineer', '软件与硬件开发'),
      summary: T('Designed to generate $10,000 in annual revenue per site by removing delivery time constraints.', '取件不再受营业时间限制，每个站点预计年收入 $10,000。'),
      what: T(
        'A smart locker system in Hamilton that lets users collect parcels on their own, at any time.',
        '位于汉密尔顿的智能包裹柜系统，让用户可以随时自助取件。'
      ),
      did: [
        T('Designed and implemented the 24-hour system with React, Express.js and MySQL.', '基于 React、Express.js 与 MySQL 设计并实现 24 小时包裹柜系统。'),
        T('Developed an integrated smart lock mechanism using an ESP32 microcontroller and Arduino (C++) for real-time access control.', '基于 ESP32 微控制器与 Arduino（C++）开发集成智能锁，实现实时柜门控制。'),
        T('Improved convenience for users by eliminating delivery time constraints.', '取件不再受营业时间限制，用户更方便。')
      ],
      results: [{ n: '24/7', l: T('self-service pickup', '自助取件') }, { n: '$10K', l: T('projected annual revenue per site', '每站点预计年收入') }],
      stack: ['React', 'Express.js', 'MySQL', 'ESP32', 'Arduino (C++)']
    },
    {
      id: 'chinajoy', cat: 'ec', img: 'chinajoyBooth', gallery: ['chinajoyDetail'], org: 'EaseCation', year: T('Jun – Aug 2021', '2021.06 – 2021.08'),
      title: T('ChinaJoy 2021 Exhibition Project', 'ChinaJoy 2021 参展项目'),
      headline: T("ChinaJoy 2021: EaseCation's first offline event", 'ChinaJoy 2021：EaseCation 首次线下参展'),
      role: T('Project lead', '项目负责人'),
      summary: T("Led the exhibition at China's largest technology and digital entertainment expo.", '带队参加中国规模最大的数字娱乐展会。'),
      what: T(
        'On July 30, 2021, EaseCation came to ChinaJoy for its first offline event. Players tried the games at the booth and met the team in person.',
        '2021 年 7 月 30 日，EaseCation 来到 ChinaJoy，迎来第一次线下活动。玩家走进展位试玩游戏，也与团队当面交流。'
      ),
      did: [
        T('Led the exhibition project and coordinated cross-functional teams for seamless event execution.', '主导参展项目，协调各职能团队，确保活动顺利执行。'),
        T('Managed vendor sourcing, logistics and staffing for a major corporate presence.', '负责供应商遴选、物流与现场人员安排。'),
        T('Oversaw business relations and stakeholder management throughout the event.', '在展会期间统筹商务关系与各方沟通。')
      ],
      results: [{ n: '1st', l: T('offline event for EaseCation', 'EaseCation 首次线下活动') }],
      stack: [T('Event planning', '活动策划'), T('Vendor management', '供应商管理'), T('Logistics', '物流统筹')]
    },
    {
      id: 'course', cat: 'other', org: T('Free course', '免费课程'), year: T('Sep 2024 – now', '2024.09 – 至今'),
      title: T('Full-Stack Developer Course', '全栈开发课程'),
      headline: T('A free course that helps university students finish their first project', '帮助大学生完成第一个项目的免费全栈课程'),
      role: T('Author', '作者'),
      summary: T('Real-world TypeScript and React examples that bridge theory and practice.', '以 TypeScript 与 React 的真实示例，衔接理论知识与实际开发。'),
      what: T(
        'A free full-stack development course designed to empower university students to complete their first projects using modern technologies. Published under CC BY-NC-SA 4.0.',
        '一门免费的全栈开发课程，帮助大学生使用现代技术完成自己的第一个项目。以 CC BY-NC-SA 4.0 协议发布。'
      ),
      did: [
        T('Designed and delivered the course for university students.', '为大学生设计并发布课程。'),
        T('Implemented real-world examples using TypeScript and React.', '以 TypeScript 与 React 编写真实示例。'),
        T('Published two parts: TypeScript Quick Start, and React + Ant Design Quick Start.', '目前发布两部分：TypeScript 快速上手、React + Ant Design 前端快速上手。')
      ],
      results: [{ n: '2', l: T('published parts', '个已发布章节') }],
      stack: ['TypeScript', 'React', 'Ant Design'],
      links: [{ l: T('Read the course', '阅读课程'), h: T('/full-stack-tutorial/000-index/', '/zh-cn/full-stack-tutorial/000-index/') }]
    },
    {
      id: 'easetree', cat: 'ec', org: 'EaseCation', year: '2022',
      title: T('EaseTree Charity Planting Project', '易什森林公益植树'),
      headline: T('EaseTree: every tree players grow together plants a real one', '易什森林：玩家在游戏中种下一棵树，现实中便种下一棵树苗'),
      role: T('Community initiative', '社区公益项目'),
      summary: T('A community initiative encouraging gamers to complete tasks that plant trees around the world.', '鼓励玩家完成游戏任务、在全球种树的社区公益项目。'),
      what: T(
        'Players team up in EaseTree to gather energy and grow a tree in the game. For each tree completed, EaseCation plants a real sapling.',
        '玩家在易什森林组队积攒能量，完成一棵游戏中的树，EaseCation 就在现实中种下一棵树苗。'
      ),
      did: [
        T('Linked in-game teamwork to real-world tree planting.', '将游戏内的团队协作与现实植树联系起来。'),
        T('Planted over 1,000 trees worldwide.', '已在全球种下 1,000 多棵树。')
      ],
      results: [{ n: '1,000+', l: T('trees planted worldwide', '棵树，种植于全球') }],
      stack: [T('Game design', '玩法设计'), T('Charity', '公益')]
    },
    {
      id: 'mahjong', cat: 'other', org: 'McMaster University', year: '2023 – 2024',
      title: T('Multiplayer Riichi Mahjong', '多人在线日本麻将'),
      headline: T('A multiplayer online Japanese Mahjong game, written in Elm', '使用 Elm 编写的多人在线日本麻将'),
      role: T('First-year project', '一年级课程项目'),
      summary: T('Full game rules and online multiplayer in a purely functional language.', '在纯函数式语言中实现完整规则与在线对战。'),
      what: T(
        'A first-year project at McMaster: a complete Riichi Mahjong game with online multiplayer, written in Elm and published as a stabl.rocks module.',
        'McMaster 一年级课程项目：一个支持在线多人对战的完整日本麻将游戏，使用 Elm 编写，并发布为 stabl.rocks 在线模块。'
      ),
      did: [T('Implemented the game rules and online multiplayer play in Elm.', '使用 Elm 实现游戏规则与在线多人对战。')],
      results: [],
      stack: ['Elm'],
      links: [{ l: 'stabl.rocks', h: 'https://stabl.rocks/ShowModulePublish?modulePublishId=c7557a7e-004b-446d-97a1-412233bdf9fc' }]
    }
  ];

  const experience: ExperienceItem[] = [
    {
      span: T('2025 — Now', '2025 — 至今'), org: 'Resiliocs Intelligence', loc: 'Hamilton, ON',
      roles: [
        { title: T('Full Stack Engineer', '全栈工程师'), dates: T('May 2026 – Present', '2026.05 – 至今') },
        { title: T('Software Developer', '软件开发工程师'), dates: T('Sep 2025 – May 2026', '2025.09 – 2026.05') },
        { title: T('Software Development Intern', '软件开发实习生'), dates: T('May 2025 – Aug 2025', '2025.05 – 2025.08') }
      ],
      points: [
        T('Built a full-stack SaaS environmental risk assessment platform using React and Express.js in a monorepo architecture, integrated with internal machine learning models for real-time climate risk analysis.', '基于 React 与 Express.js 的 monorepo 架构，搭建全栈 SaaS 环境风险评估平台，并接入内部机器学习模型，实现实时气候风险分析。'),
        T('Implemented TSOA and Swagger UI for OpenAPI-compliant, self-documenting RESTful APIs, and standardized developer workflows.', '引入 TSOA 与 Swagger UI，构建符合 OpenAPI 规范、自带文档的 RESTful API，并统一开发流程。'),
        T('Redesigned the company website independently using Astro, achieving a 400% performance improvement in load times, SSO integration and maintainability.', '独立使用 Astro 重构公司官网，加载性能提升 400%，并完成 SSO 集成、提升可维护性。'),
        T('Led a cross-functional project to develop the environmental risk system, coordinating technical teams and stakeholders to deliver a business-critical solution.', '主导环境风险系统的跨部门项目，协调技术团队与各相关方，完成交付。')
      ],
      tags: ['React', 'Express.js', 'TSOA', 'Swagger', 'Astro']
    },
    {
      span: T('2025 — Now', '2025 — 至今'), org: 'McMaster University', unit: T('Office of the Associate Dean (Research & External Relations)', '理学院副院长办公室（科研与对外关系）'), loc: 'Hamilton, ON',
      roles: [
        { title: T('Process Optimization Analyst, Lab Stores', '流程优化分析师（Lab Stores）'), dates: T('Aug 2026 – Present', '2026.08 – 至今') },
        { title: T('Data Analyst (Sponsorship & Funding Administration)', '数据分析师（科研资助与经费管理）'), dates: T('Nov 2025 – May 2026', '2025.11 – 2026.05') },
        { title: T('Communications Assistant 2A', '传播助理 2A'), dates: T('Mar 2025 – Nov 2025', '2025.03 – 2025.11') }
      ],
      points: [
        T('Review and process research sponsorship and funding approval requests in accordance with university policies and procedures.', '依据学校政策与流程，审核并处理科研赞助与经费审批申请。'),
        T('Coordinate with faculty members, researchers and administrative departments to support funding administration.', '与教职人员、研究人员及行政部门协作，支持经费管理工作。'),
        T('Automated research funding approval workflows with Microsoft Power Automate, reducing manual processing by over 90%; presented at the McMaster Operational Excellence Forum 2026.', '使用 Microsoft Power Automate 实现科研经费审批流程自动化，人工处理减少 90% 以上，并在 McMaster Operational Excellence Forum 2026 上分享。'),
        T('Identify process improvement opportunities and lead automation initiatives to improve efficiency, accuracy and service quality.', '发掘流程改进空间，主导自动化项目，提升效率、准确性与服务质量。'),
        T('Maintain university information systems and WordPress content to keep communication accurate and up to date.', '维护学校信息系统与 WordPress 网站内容，确保信息准确、及时。')
      ],
      tags: ['Power Automate', 'Microsoft 365', 'WordPress']
    },
    {
      span: '2025 — 2026', org: 'Symcor Inc.', loc: 'Mississauga, ON',
      roles: [{ title: T('Software Engineer Intern', '软件工程实习生'), dates: T('Sep 2025 – May 2026', '2025.09 – 2026.05') }],
      points: [
        T("Developed an AI-powered automation system for Symcor's Client Service Desk, connecting Symcor with customers including Canada's major financial institutions to process financial data and service requests.", '为 Symcor 客户服务台开发 AI 自动化系统。该服务台连接 Symcor 与其客户（包括加拿大多家主要金融机构），处理金融数据与服务请求。'),
        T('Built serverless infrastructure using Azure Functions, Azure OpenAI, Document Intelligence and TypeScript to automate 70% of client service tickets, enabling intelligent document extraction and classification.', '基于 Azure Functions、Azure OpenAI、Document Intelligence 与 TypeScript 搭建 serverless 架构，实现智能文档提取与分类，70% 的客户服务工单自动处理。'),
        T('Developed an automated QA testing framework to ensure system reliability and accuracy for financial data processing workflows.', '开发自动化 QA 测试框架，保障金融数据处理流程的可靠性与准确性。')
      ],
      tags: ['Azure Functions', 'Azure OpenAI', 'Document Intelligence', 'TypeScript']
    },
    {
      span: T('2024 — Now', '2024 — 至今'), org: 'Junxuan Bao Solutions Inc.', loc: 'Hamilton, ON',
      roles: [{ title: T('Founder & CEO', '创始人、CEO'), dates: T('Sep 2024 – Present', '2024.09 – 至今') }],
      points: [
        T('Founded a professional services company specializing in SaaS development, IoT solutions and gaming UGC content; officially incorporated in November 2024.', '创办专注于 SaaS 开发、物联网方案与游戏 UGC 内容的专业服务公司，于 2024 年 11 月正式注册。'),
        T('Delivered $80,000 CAD in contracts within five months, collaborating with HoYoverse on Genshin Impact content using Unreal Engine 5; built and trained a team of 10 university students, providing their first professional employment and UE5 training.', '与 HoYoverse 合作，使用 Unreal Engine 5 制作原神内容，五个月内交付 8 万加元合同；组建并培训 10 名大学生，为他们提供第一份专业工作与 UE5 培训。'),
        T('Launched HalfBiz, a business management platform using PostgreSQL, Redis, React and Express.js, saving family-owned restaurants $2,760 annually, with adoption from over a dozen businesses in the first week. Supported by Innovation Factory.', '推出商业管理平台 HalfBiz（PostgreSQL、Redis、React、Express.js），为家庭餐厅每年节省 $2,760，上线首周获十余家商家采用。获 Innovation Factory 支持。'),
        T('Developed a smart parcel locker system using React, Express.js, MySQL and ESP32, projected to generate $10,000 in annual revenue per site through 24/7 accessibility.', '基于 React、Express.js、MySQL 与 ESP32 开发智能包裹柜系统，凭借全天候取件，预计每个站点年收入 $10,000。'),
        T('Organized the Genshin Impact North America Creator Challenge in May 2026, with 100 participants.', '2026 年 5 月主办原神北美创作者挑战赛，共 100 名选手参赛。')
      ],
      tags: [T('SaaS', 'SaaS'), 'IoT', 'Unreal Engine 5']
    },
    {
      span: T('2018 — Now', '2018 — 至今'), org: 'EaseCation', loc: T('Remote', '远程'),
      roles: [
        { title: T('Company Founder & Head of Operations', '公司创始人、运营负责人'), dates: T('Feb 2018 – Present', '2018.02 – 至今') },
        { title: T('Project Manager → Product Owner, internal platform', '内部平台项目：项目经理 → 产品负责人'), dates: T('Dec 2025 – Aug 2026', '2025.12 – 2026.08') }
      ],
      points: [
        T('Restructured a student group into a formal company with three branches, growing it from early operations to $400,000 in annual revenue.', '将学生社团改组为设有三个分支的正式企业，推动其从早期运营成长至年营收 $400,000。'),
        T('Managed finance, HR, taxation and global partnerships as General Manager, maintaining tax and legal compliance across multiple jurisdictions and establishing partnerships with major enterprises including NetEase Games.', '作为总经理负责财务、人事、税务与全球合作，做好跨地区的税务与法律合规，并与网易游戏等大型企业建立合作。'),
        T("Built EaseCation's first web services outside the game, laying the foundation for its later platform.", '承担 EaseCation 最初的服外 Web 开发工作，为后续平台建设奠定基础。'),
        T('Developed internal systems (CRM, ticketing, finance tools, unified login) that increased team efficiency 6×, reduced average response time from 7 days to 24 hours and improved productivity by 40%.', '开发客户管理、工单、财务工具与统一登录等内部系统，团队效率提升 6 倍，平均响应时间由 7 天缩短至 24 小时，生产力提升 40%。'),
        T('Led a team of about 200 people across departments and time zones, and represented EaseCation at ChinaJoy 2021.', '带领约 200 人的团队跨部门、跨时区协作，并代表 EaseCation 参加 ChinaJoy 2021。')
      ],
      tags: [T('Operations', '企业经营'), T('Finance & tax', '财务与税务'), T('HR', '人事'), T('Product', '产品')]
    }
  ];

  return {
    meta: {
      title: T('Junxuan Bao · Software Developer & Process Optimization Analyst @ Resiliocs | McMaster University', '鲍俊轩 · Software Developer & Process Optimization Analyst @ Resiliocs | McMaster University'),
      description: T(
        "Junxuan Bao: Software Developer & Process Optimization Analyst @ Resiliocs | McMaster University. Founder and Head of Operations of EaseCation, and founder of Junxuan Bao Solutions Inc. Based in the Greater Toronto Area.",
        '鲍俊轩：Software Developer & Process Optimization Analyst @ Resiliocs | McMaster University。EaseCation 公司创始人、运营负责人，Junxuan Bao Solutions Inc. 创始人，现居大多伦多地区。'
      )
    },
    ui: {
      resume: T('Résumé', '简历'), email: T('Email', '邮件'), onThisPage: T('On this page', '本页内容'),
      sections: [
        { id: 'overview', label: T('Overview', '概览') },
        { id: 'projects', label: T('Projects', '项目') },
        { id: 'experience', label: T('Experience', '经历') },
        { id: 'education', label: T('Education', '教育') },
        { id: 'skills', label: T('Skills', '技能') },
        { id: 'writing', label: T('Writing', '教程') },
        { id: 'contact', label: T('Contact', '联系') }
      ],
      now: T('Now', '现在'), updated: T('Updated November 2026', '2026 年 11 月更新'),
      projects: T('Projects', '项目'), projectsSub: T('Select a project to read more.', '点击项目查看详情。'),
      filterLabel: T('Filter projects', '筛选项目'), all: T('All', '全部'),
      cats: { ec: 'EaseCation', work: T('Employment', '受雇工作'), company: T('My company', '我的公司'), other: T('Personal', '个人项目') },
      showAll: T('Show all projects', '显示全部项目'), showLess: T('Show fewer', '收起'),
      experience: T('Experience', '工作经历'), story: T('Timeline', '时间线'), education: T('Education', '教育背景'), awards: T('Awards & certifications', '荣誉与认证'),
      skills: T('Skills', '技能'), writing: T('Writing', '教程'),
      writingSub: T('Free tutorials for students starting their first web project. In English and Chinese, CC BY-NC-SA 4.0.', '写给第一次做 Web 项目的同学的免费教程，提供中英文版本，CC BY-NC-SA 4.0 协议。'),
      close: T('Close', '关闭'), myRole: T('Role', '角色'), whatIDid: T('What I did', '主要工作'), results: T('Results', '成果'), tools: T('Tools', '技术与方法'),
      prev: T('Previous', '上一个'), next: T('Next', '下一个'), courses: T('Courses', '课程'),
      business: T('Junxuan Bao Solutions Inc.', 'Junxuan Bao Solutions Inc.')
    },
    contact: {
      h: T('Get in touch', '联系我'),
      p: T("Whether it's a role, a collaboration or just a question, send me a note. I usually reply within a few days.", '无论是工作机会、合作还是问题，都欢迎留言，我通常会在几天内回复。'),
      business: T('Looking for software for your company? Use the business inquiry form instead.', '如果是企业软件开发需求，请使用公司页的询价表单。'),
      businessLink: T('Business inquiry', '企业询价'),
      name: T('Name', '姓名'), email: T('Email', '邮箱'), org: T('Company or school', '公司或学校'), optional: T('(optional)', '（选填）'),
      reason: T('What is this about?', '来意'),
      reasons: [T('Job opportunity', '工作机会'), T('Collaboration', '合作'), T('Speaking or interview', '分享或采访'), T('Question', '问题咨询'), T('Just saying hi', '打个招呼')],
      msg: T('Message', '留言'), msgPh: T('A few lines about what you have in mind.', '简单说说你的想法。'),
      send: T('Send', '发送'), sending: T('Sending…', '发送中…'),
      sent: T('Thanks! Your message has been sent.', '谢谢，你的留言已发送。'),
      failed: T('Something went wrong. Please email Junxuan.Bao@Gmail.com instead.', '发送失败，请直接发送邮件至 Junxuan.Bao@Gmail.com。'),
      subject: T('New message from junxuanb.com', '来自 junxuanb.com 的新留言'),
      privacy: T('Your details are only used to reply to you.', '你的信息仅用于回复你。'),
      emailMe: T('Email me', '发送邮件'), orEmail: T('Or email me directly at', '也可以直接发送邮件至')
    },
    profile: {
      photoAlt: T('Portrait of Junxuan Bao', '鲍俊轩的职业照'),
      name: T('Junxuan Bao', '鲍俊轩'),
      altName: T('鲍俊轩', 'Junxuan Bao'),
      role: 'Software Developer & Process Optimization Analyst @ Resiliocs | McMaster University',
      where: T('Greater Toronto Area, Canada', '加拿大 · 大多伦多地区'),
      bio: T(
        "Founder and Head of Operations of EaseCation. Founder of Junxuan Bao Solutions Inc.",
        'EaseCation 公司创始人、运营负责人。Junxuan Bao Solutions Inc. 创始人。'
      ),
      leadA: T('Finding what a team really needs, then building', '从团队协作中发掘实际需求，帮你落地'),
      leadB: T('the system that fits', '适合你的系统'),
      leadC: T('.', '。'),
      about: [
        T(
          "My work spans software engineering and business operations, with 9+ years of experience as a certified full-stack developer. I have run my own Minecraft servers since 2016. On February 16, 2018 I joined EaseCation, a Minecraft mini-game community, and built its first web services outside the game. I went on to found the company behind EaseCation and lead its operations. The student group became a company with three branches, $400,000 in annual revenue, 100K+ daily active players and a team of about 200.",
          '我做全栈开发，也做企业经营，至今已有 9 年多。2016 年起，我开始运营自己的 Minecraft 服务器。2018 年 2 月 16 日，我加入 Minecraft 小游戏社区 EaseCation，做了它最早的服外 Web 开发。后来我创办了 EaseCation 的运营公司，并负责运营。团队从学生社团成长为有三个分支的正式企业：年营收 $400,000，日活超过 10 万，团队约 200 人。'
        ),
        T(
          "In Canada, I study Honours Computer Science at McMaster University with a 3.93 GPA. I build software at Resiliocs Intelligence and work on process optimization at McMaster. I also run Junxuan Bao Solutions Inc., which delivered $80,000 CAD in contracts within its first five months. Having both written the code and run the company, I understand a team's needs from the technical side and the business side.",
          '现在我在加拿大，就读于麦克马斯特大学计算机科学荣誉学位，GPA 3.93。我在 Resiliocs Intelligence 做软件开发，在麦克马斯特大学做流程优化。同时我经营 Junxuan Bao Solutions Inc.，公司成立五个月内交付了 8 万加元合同。写过代码，也管过公司，所以我能从技术和经营两边理解团队的需求。'
        )
      ]
    },
    stats: [
      { num: '9+', label: T('years building and running online platforms', '年在线平台开发与运营经验') },
      { num: '~200', label: T('people on teams I have led', '人的团队，由我带领') },
      { num: '100K+', label: T('daily active users on platforms I run', '日活用户，在我运营的平台上') },
      { num: '95%', label: T('lower operational costs through automation', '自动化带来的运营成本降幅') },
      { num: '3.93', label: T('GPA, Honours Computer Science', '计算机科学荣誉学位 GPA') }
    ],
    now: [
      { a: T('Full Stack Engineer', '全栈工程师'), b: 'Resiliocs Intelligence' },
      { a: T('Process Optimization Analyst', '流程优化分析师'), b: 'McMaster University' },
      { a: T('Company Founder & Head of Operations', '公司创始人、运营负责人'), b: 'EaseCation' },
      { a: T('Founder & CEO', '创始人、CEO'), b: 'Junxuan Bao Solutions Inc.' }
    ],
    projects,
    experience,
    education: [
      {
        school: 'McMaster University', loc: 'Hamilton, ON',
        degree: T('Honours Bachelor of Applied Science, Computer Science (Co-op)', '计算机科学荣誉应用科学学士（Co-op）'),
        dates: T('Aug 2023 – May 2028 (expected)', '2023.08 – 2028.05（预计）'),
        badges: ['GPA 3.93 / 4.00', T("Dean's Honour List", '院长荣誉榜'), T('Co-op Global Experience Scholarship', 'Co-op 全球经历奖学金')],
        courses: T('Core: Data Structures & Algorithms, Software Design, Databases. Electives: Economics, Physics, Sustainability.', '核心课程：数据结构与算法、软件设计、数据库。选修：经济学、物理、可持续发展。')
      }
    ],
    awards: [
      T('Presenter, McMaster Operational Excellence Forum 2026', 'McMaster Operational Excellence Forum 2026 分享嘉宾'),
      T('Outstanding Campus Student Intern, HSYLC (Harvard Summit for Young Leaders in China)', 'HSYLC 哈佛中美学生领袖峰会 优秀校园实习生'),
      T('Certified Coach, China Think Big Global Research', 'China Think Big 全球研究 认证教练'),
      T('Alibaba Cloud Certified Architect Expert', '阿里云认证架构师专家'),
      T('Scholarship Program Gold Award · National Trials Completion', '奖学金项目金奖 · 全国选拔赛完赛'),
      T('China Regional Grand Prize and Global Championship Third Prize, Global Educational Robotics Competition', '全球教育机器人大赛 中国区一等奖、全球总决赛三等奖'),
      T('Top Prize (First Prize), China Education Bureau National Primary and Middle School Computer Production Competition', '中国教育部全国中小学电脑制作活动 一等奖')
    ],
    skills: [
      { h: T('Programming languages', '编程语言'), items: ['TypeScript (JavaScript)', 'MySQL', 'PostgreSQL', 'PHP', 'Java', 'Python', 'C', 'HTML', 'CSS', 'Elm'] },
      { h: T('Frameworks & tools', '框架与工具'), items: ['React', 'Express.js', 'Next.js', 'Vue.js', 'Astro', 'Spring Boot', 'Redis', 'tsoa', 'OpenAPI / Swagger', 'RESTful API', 'Serverless', 'Azure', 'AWS', 'Docker', 'Linux', 'Git', 'CI/CD', 'Monorepo', 'Cloudflare Workers', 'Power Automate', 'WordPress', 'Swift', 'SwiftUI', 'ESP32 / Arduino', 'Unreal Engine 5'] },
      { h: T('Technical', '技术能力'), items: [T('UX design', 'UX 设计'), T('UML modeling', 'UML 建模'), 'Figma', T('SDLC frameworks', 'SDLC 框架'), T('Agile development', '敏捷开发'), T('Game design', '游戏设计'), T('Client communication', '客户沟通'), T('Microsoft Office (expert)', 'Microsoft Office（精通）')] },
      { h: T('Business & administration', '经营与管理'), items: [T('Team leadership', '团队管理'), T('Financial management', '财务管理'), T('HR management', '人力资源管理'), T('Project management', '项目管理'), T('Tax compliance', '税务合规'), T('Legal compliance', '法律合规'), T('Event planning', '活动策划'), T('Vendor management', '供应商管理'), T('Workflow optimization', '流程优化'), T('Process automation', '流程自动化'), T('Customer service', '客户服务')] },
      { h: T('Teaching', '教学'), items: [T('Teaching', '教学'), T('Mentoring', '指导'), T('Tutoring', '辅导'), T('Course design', '课程设计')] },
      { h: T('Languages & other', '语言与其他'), items: [T('Chinese (native)', '中文（母语）'), T('English (fluent, professional)', '英语（流利，可用于工作）'), T('Licensed driver (Canada)', '加拿大驾照')] }
    ],
    story: [
      [T('From 2016', '2016 年起'), T('Started running my own Minecraft survival servers; several became profitable.', '开始运营自己的 Minecraft 生存服务器，其中多个实现盈利。')],
      ['2018', T('Joined EaseCation on February 16 and built its first web services outside the game.', '2 月 16 日加入 EaseCation，承担最初的服外 Web 开发工作。')],
      ['2021', T("Began EaseCation's office automation system. Led its first offline exhibition at ChinaJoy. Moved to Canada.", '启动 EaseCation 办公自动化系统建设，带队首次参加 ChinaJoy，同年来到加拿大。')],
      ['2022', T('Launched EaseTree, linking in-game teamwork to real tree planting.', '易什森林上线，将游戏内协作与现实植树联系起来。')],
      ['2023', T("Started Honours Computer Science at McMaster. Began building EaseCation's IAM.", '进入麦克马斯特大学攻读计算机科学荣誉学位，启动 EaseCation 统一身份认证建设。')],
      ['2024', T('Built MyEC. Founded Junxuan Bao Solutions Inc. and delivered $80,000 CAD in contracts within five months.', '建设 MyEC。创办 Junxuan Bao Solutions Inc.，五个月内交付 8 万加元合同。')],
      ['2025', T('Joined Resiliocs and Symcor. Automated research funding approvals at McMaster.', '加入 Resiliocs 与 Symcor，在麦克马斯特大学实现科研经费审批自动化。')],
      ['2026', T('Organized the Genshin Impact North America Creator Challenge. Presented at the McMaster Operational Excellence Forum. Became Full Stack Engineer at Resiliocs. Released Luminore on the App Store.', '主办原神北美创作者挑战赛，在 McMaster Operational Excellence Forum 分享，成为 Resiliocs 全栈工程师。Luminore 上架 App Store。')]
    ],
    writing: [
      { title: T('TypeScript Quick Start', 'TypeScript 快速上手'), sub: T('Data types, logic, functions and async: what you need before React.', '数据类型、逻辑、函数与异步：编写 React 之前需要的基础。'), href: T('/full-stack-tutorial/basic/000-index/', '/zh-cn/full-stack-tutorial/basic/000-index/') },
      { title: T('React + Ant Design Quick Start', 'React + Ant Design 前端快速上手'), sub: T('Set up a project, write components, add routing, manage state and call APIs.', '搭建项目、编写组件、添加路由、管理状态、调用接口。'), href: T('/full-stack-tutorial/frontend/000-index/', '/zh-cn/full-stack-tutorial/frontend/000-index/') }
    ]
  };
}
