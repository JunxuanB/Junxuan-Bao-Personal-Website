# Business 侧 · 页面与文案初稿

**JUNXUAN BAO SOLUTIONS INC.**

所有数字以 `00-decisions-and-facts.md` 为准。`【待确认】` 表示依赖还没定的信息。
每段先写英文，再写中文。

---

## 导航

| EN | 中文 |
|---|---|
| Home | 首页 |
| Services | 服务 |
| Work | 案例 |
| Process | 合作方式 |
| About | 关于公司 |
| Contact | 联系我们 |

---

## 1. Home 首页

### Hero

**EN**
> # Business software for teams that have outgrown spreadsheets.
> We design and build internal tools, customer platforms and workflow automation for businesses in Canada.

按钮：`Start a project` · `See our work`

**中文**
> # 表格和群聊不够用了，就该有一套自己的系统。
> 我们为加拿大的企业开发内部管理工具、面向客户的业务平台，以及流程自动化。

按钮：`开始一个项目` · `查看案例`

### 为什么找我们（3 点）

| EN | 中文 |
|---|---|
| **We've run a business ourselves.** Our founder has spent 9+ years running online communities and a company of about 200 people, handling finance, HR and operations. We know what an internal system is supposed to save you. | **我们自己经营过公司。** 创始人经营线上社区和公司 9 年多，带过约 200 人的团队，管过财务、人事和运营，知道一套内部系统应该帮你省掉什么。 |
| **Proven at scale.** Our systems run staff sign-in, 190,000+ player support tickets and internal approvals for a gaming community with 100K+ daily active players. | **经过大规模验证。** 我们做的系统，支撑着一个日活 10 万以上游戏社区的员工登录、19 万多张玩家工单和内部审批。 |
| **Small team, direct contact.** You talk to the person building your system, not an account manager. | **团队小，直接沟通。** 和你对接的就是开发系统的人，不是客户经理。 |

### 数字条

| EN | 中文 |
|---|---|
| **90%** of approvals automated | **90%** 的审批实现自动化 |
| **190K+** support tickets handled | 累计处理 **19 万+** 张工单 |
| **$80K** in contracts delivered in our first 5 months | 成立前 5 个月交付 **8 万加元**合同 |

### 首页底部

- 3 个精选案例卡片：EaseCation 办公自动化、HalfBiz、Envoy
- CTA："Tell us what's slowing your team down. We'll reply within 2 business days." / "告诉我们是什么在拖慢你的团队，我们会在 2 个工作日内回复。"

`【待确认】` "2 个工作日内回复"你能做到吗？

---

## 2. Services 服务

**EN 引言**
> We focus on business web applications: software your team or your customers use every day.

**中文引言**
> 我们专做企业 Web 应用，也就是你的团队或客户每天都会用的软件。

| 服务 | EN | 中文 | 对应案例 |
|---|---|---|---|
| **Internal tools** 内部管理系统 | Approvals, HR, payroll, finance and CRM in one place, instead of email threads and spreadsheets. | 把审批、人事、工资、财务和客户管理放到一个系统里，不再靠邮件和表格。 | EaseCation OA |
| **Customer platforms** 客户端业务平台 | Online ordering, memberships and loyalty, booking, customer portals and support tickets. | 在线点单、会员和积分、预约、客户门户、售后工单。 | HalfBiz、EaseCation 工单 |
| **Workflow & AI automation** 流程与 AI 自动化 | Automate repetitive work: document extraction, ticket sorting, auto-replies, Microsoft 365 / Power Automate flows. | 把重复的工作交给系统：文档信息提取、工单分类、自动回复、Microsoft 365 / Power Automate 流程。 | EaseCation 工单 |
| **Login & access** 账号与权限 | Single sign-on, multi-factor authentication and role-based access across all your apps. | 所有系统共用一个账号，支持多因素认证和按角色分配权限。 | EaseCation IAM |
| **Connected devices** 智能硬件接入 `【待确认】` | Web systems that control real hardware, such as smart locks and lockers. | 能控制真实硬件的 Web 系统，比如智能锁、智能柜。 | Envoy |
| **Maintenance & hosting** 维护与托管 | We keep it running after launch: updates, backups, monitoring. | 上线以后我们继续维护：更新、备份、监控。 | — |

`【待确认】` 硬件接入这条还接吗？要不要单列"企业官网"这一项？

---

## 3. Work 案例

**统一格式**：背景 → 问题 → 我们做了什么 → 结果 → 技术栈

### 3.1 EaseCation HR Center · 人事中心（办公自动化）

**EN**
> **Client:** EaseCation, a Minecraft community with 100K+ daily active players
> **Problem:** Approvals and finance requests went through chat messages, and reviews took 2–3 days.
> **What we built:** An internal system with CRM, payroll and finance modules, plus automated approval rules.
> **Result:** 90% of approvals and 70% of finance tasks are now automated. Review time went from 2–3 days to under 24 hours.
> **Stack:** React, Express.js, MySQL
> **Link:** easecation.net/technology

**中文**
> **客户：** EaseCation，日活 10 万以上的 Minecraft 社区
> **问题：** 审批和财务申请靠聊天消息来回传，一次审核要 2–3 天。
> **我们做了什么：** 一套内部系统，包含客户管理、工资和财务模块，并设置了自动审批规则。
> **结果：** 90% 的审批和 70% 的财务事务实现自动化，审核时间从 2–3 天缩短到 24 小时以内。
> **技术栈：** React、Express.js、MySQL

`【待确认】` OA 的技术栈是什么？简历里没写。

### 3.2 EaseCation IAM · 统一身份认证

**EN**
> **Problem:** Staff needed separate accounts for every internal tool, and password resets were a constant support request.
> **What we built:** One identity system for 10 applications, with OAuth 2.0, single sign-on, multi-factor authentication (TOTP and Passkey), multi-tenancy, and GitHub / Google sign-in.
> **Result:** 200+ users on one account each. 95% fewer password resets and 80% faster onboarding.
> **Stack:** React, Express.js, PostgreSQL, Redis

**中文**
> **问题：** 每个内部工具都要单独的账号，重置密码是最常见的求助。
> **我们做了什么：** 给 10 个应用做了一套统一身份系统，支持 OAuth 2.0、单点登录、多因素认证（TOTP 和 Passkey）、多租户，以及 GitHub / Google 登录。
> **结果：** 200 多名用户每人只用一个账号。重置密码的请求减少 95%，新成员上手时间缩短 80%。
> **技术栈：** React、Express.js、PostgreSQL、Redis

### 3.3 MyEC · EaseCation 玩家服务中心（工单）

**EN**
> **Problem:** Only 25% of player requests got a response.
> **What we built:** MyEC, a serverless player service center: account linking, game data, feedback and support tickets, connected to the game's platform APIs, with AI auto-replies for common requests.
> **Result:** Response rate went from 25% to 100%. 35% of tickets are resolved automatically within one minute. 99.99% uptime. 190,000+ tickets handled so far, with 10,000+ new tickets from 4,400+ accounts in a recent month. The full MyEC frontend is open source as OpenMyEC.
> **Link:** easecation.net/technology
> **Stack:** React, Express.js, MySQL, Serverless

**中文**
> **问题：** 玩家提交的请求只有 25% 能得到回复。
> **我们做了什么：** MyEC 玩家服务中心，基于 serverless 架构：账号绑定、游戏数据、反馈和工单都在这里，接入游戏平台接口，常见问题由 AI 自动回复。
> **结果：** 回复率从 25% 提高到 100%，35% 的工单在一分钟内自动解决，可用性 99.99%。累计处理工单 19 万多张，近一个月有 4,400 多个账号新建了 1 万多张工单。MyEC 的完整前端以 OpenMyEC 开源。
> **链接：** easecation.net/technology
> **技术栈：** React、Express.js、MySQL、Serverless

### 3.4 Genshin Impact North America Creator Challenge · 原神北美创作者挑战赛 · May 2026

**EN**
> **Background:** After Genshin Impact launched its Miliastra Wonderland UGC tools, we organized a creator competition for students across North America, supported by Genshin Impact (HoYoverse).
> **What we did:** Everything, end to end: competition website, registration, submission platform, Discord community, promotion and participant support.
> **Result:** 100 participants, from high school students to recent graduates.
> **Link:** creator.junxuanb.com `【待确认】` 是否保留

**中文**
> **背景：** 原神推出「千星奇域」UGC 创作功能后，我们为北美学生举办了一场创作者比赛，由原神（HoYoverse）提供支持。
> **我们做了什么：** 全部由我们完成：比赛网站、报名、作品提交平台、Discord 社区、宣传推广和参赛者支持。
> **结果：** 100 名选手参赛，从高中生到应届毕业生都有。
> **链接：** creator.junxuanb.com

`【待确认】` "千星奇域"是 Miliastra Wonderland 的官方中文名吗？请核对。

### 3.5 Genshin Impact Content in UE5 · 原神 UE5 内容制作

**EN**
> **What we did:** Produced Genshin Impact content in Unreal Engine 5, in collaboration with HoYoverse. Recruited and trained a team of 10 university students, for most of them their first paid professional work.
> **Result:** $80,000 CAD in contracts delivered within 5 months.

**中文**
> **我们做了什么：** 与 HoYoverse 合作，用 Unreal Engine 5 制作原神相关内容。招募并培训了 10 名大学生组成团队，对大多数人来说，这是他们第一份有报酬的专业工作。
> **结果：** 5 个月内交付 8 万加元合同。

说明：这个案例展示的是项目交付和团队管理能力，不是在推销游戏内容服务。

### 3.6 HalfBiz · 餐厅经营平台

**EN**
> **Background:** HalfBiz is our own product for family-owned restaurants.
> **Problem:** Small restaurants pay around $3,000 a year for separate ordering, delivery and loyalty software.
> **What we built:** One platform with online ordering, self-delivery and a loyalty program.
> **Result:** Adopted by over a dozen local businesses in its first week. Brings software costs from $3,000 to $240 a year, saving each restaurant about $2,760. Supported by Innovation Factory.
> **Stack:** React, Express.js, PostgreSQL, Redis

**中文**
> **背景：** HalfBiz 是我们为家庭经营餐厅做的自有产品。
> **问题：** 小餐厅每年要花 3,000 加元左右，分别购买点单、配送和会员软件。
> **我们做了什么：** 一个平台整合在线点单、自配送和会员积分。
> **结果：** 上线第一周就有十几家本地商家开始使用。软件成本从每年 3,000 加元降到 240 加元，每家餐厅每年节省约 2,760 加元。获得 Innovation Factory 支持。
> **技术栈：** React、Express.js、PostgreSQL、Redis

### 3.7 Envoy Hamilton · 24 小时智能包裹柜

**EN**
> **Client:** Envoy Hamilton `【待确认】` 能否写客户名
> **Problem:** Customers could only pick up parcels during business hours.
> **What we built:** A 24/7 self-service parcel locker system: web app for users and staff, plus smart locks controlled by ESP32 microcontrollers.
> **Result:** Delivered and installed. Designed to bring in about $10,000 a year per site (projected).
> **Stack:** React, Express.js, MySQL, ESP32, Arduino (C++)

**中文**
> **客户：** Envoy Hamilton
> **问题：** 顾客只能在营业时间取包裹。
> **我们做了什么：** 一套 24 小时自助包裹柜系统：给用户和员工用的 Web 应用，加上由 ESP32 控制的智能锁。
> **结果：** 已交付安装。按设计，每个站点预计每年带来约 1 万加元收入。
> **技术栈：** React、Express.js、MySQL、ESP32、Arduino (C++)

---

## 4. Process 合作方式

**EN**
> 1. **Free consultation** · 30 minutes to understand what you need.
> 2. **Scope and quote** · A written scope with a fixed price and timeline.
> 3. **Build** · Short cycles with a working demo you can try along the way.
> 4. **Launch and training** · We deploy it and show your team how to use it.
> 5. **Maintenance** (optional) · Monthly support after launch.

**中文**
> 1. **免费咨询** · 30 分钟，先了解你的需求。
> 2. **方案和报价** · 书面方案，写明固定价格和时间。
> 3. **开发** · 分阶段开发，过程中随时可以试用阶段成果。
> 4. **上线和培训** · 我们负责部署，并教你的团队怎么用。
> 5. **维护**（可选）· 上线后按月提供支持。

`【待确认】` 是否免费咨询？报价是按项目固定价，还是按小时？维护是否按月收费？

### FAQ 常见问题

| EN | 中文 |
|---|---|
| **How much does it cost?** It depends on how many features and users you need. We'll give you a fixed quote after the consultation. | **大概多少钱？** 取决于功能和用户数量，咨询后我们会给出固定报价。 |
| **Who owns the code?** `【待确认】` | **代码归谁？** `【待确认】` |
| **Can you work with our existing systems?** Yes, including Microsoft 365, Google Workspace and most tools with an API. | **能接入我们现有的系统吗？** 可以，包括 Microsoft 365、Google Workspace，以及大多数提供 API 的工具。 |
| **Do you work with clients outside Ontario?** Yes, we work remotely across Canada. | **只服务安大略省吗？** 不是，我们可以远程服务全加拿大。 |

---

## 5. About 关于公司

**EN**
> Junxuan Bao Solutions Inc. is a software company based in the Greater Toronto Area. It was founded in September 2024 and incorporated in Ontario in November 2024.
>
> Our founder, Junxuan Bao, has spent 9+ years running online communities, including EaseCation, a Minecraft network with 100K+ daily active players and a team of about 200. He built its player service center, HR system and identity platform himself. He is also a software engineer and studies Computer Science at McMaster University.
>
> → About the founder (links to Personal)

**中文**
> Junxuan Bao Solutions Inc. 是一家位于大多伦多地区的软件公司，2024 年 9 月成立，同年 11 月在安大略省注册。
>
> 创始人鲍俊轩经营线上社区 9 年多，其中 EaseCation 是一个日活 10 万以上、团队约 200 人的 Minecraft 社区。它的玩家服务中心、人事系统和统一身份平台都由他亲手开发。他同时是一名软件工程师，在 McMaster 大学读计算机科学。
>
> → 了解创始人（链接到 Personal）

**公司信息**（页脚也放）
- Legal name: JUNXUAN BAO SOLUTIONS INC.
- Business Number: 1746537-8
- Email: Junxuan.Bao@Gmail.com
- `【待确认】` 页脚放不放注册地址？隐私声明里已经有了


---

## 6. Contact 联系我们

**EN**
> ## Start a project
> Tell us a bit about your business. We'll reply within 2 business days.

**中文**
> ## 开始一个项目
> 简单介绍一下你的公司和需求，我们会在 2 个工作日内回复。

**表单字段**

| EN | 中文 | 类型 |
|---|---|---|
| Name | 姓名 | 必填 |
| Email | 邮箱 | 必填 |
| Company | 公司名称 | 选填 |
| What do you need? | 你需要什么？ | 多选：Internal tool / Customer platform / Automation / Login & access / Not sure |
| Tell us about the problem | 现在遇到了什么问题？ | 必填，长文本 |
| Budget | 预算 | 选填，自由填写 |
| Timeline | 希望多久完成 | 单选：ASAP / 1–3 months / Flexible |

或者直接发邮件：Junxuan.Bao@Gmail.com


---

## 7. Privacy Notice 隐私声明

沿用原文 `src/content/docs/en/privacy-notice.mdx`，不改。
