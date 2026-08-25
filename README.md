# 德国 Python / 数据工程师求职项目

> 目标：系统化准备赴德国从事 **Python / 数据工程师** 的求职材料与签证规划，并持续跟踪申请进度。

本项目是一套「文档 + 脚本 + 数据」的求职作战体系：从战略规划、岗位分析、签证指南，到简历/求职信生成、职位市场数据，全部结构化归档，便于长期维护与版本管理。

---

## 📁 目录结构（架构）

```
Germany_job/
├── README.md                    # 本文件：架构说明 + 操作方法
├── .gitignore                   # 忽略 node_modules / private / 上传缓存 / 密钥
│
├── docs/                        # 所有研究、规划、分析文档
│   ├── planning/                # 战略规划与执行
│   │   ├── job_hunt_plan.md          # 六阶段求职实施计划
│   │   ├── execution_handbook.md      # 每日/每周执行手册 + 检查清单
│   │   └── progress_report.md         # 工作执行进度更新报告
│   ├── visa/                    # 签证与移民政策
│   │   ├── work_visa_guide.txt         # 工作签证申请与职位选择指南
│   │   ├── opportunity_card_guide.txt   # 机会卡 Chancenkarte 完整申请指南
│   │   ├── opportunity_card_demand.txt  # 机会卡持有者热门职业需求分析
│   │   └── skill_requirements.txt       # 数据工程师职位经验技能详细要求
│   ├── job_search/              # 求职方法学
│   │   ├── search_methods.txt         # 求职信息搜集方法大全
│   │   ├── search_keywords.txt         # 求职搜索关键词和查找技巧
│   │   └── application_guide.md        # 求职申请指南
│   ├── positions/               # 目标岗位深度分析（4 个）
│   │   ├── position1_senior_de_etl.md     # 高级数据工程师 · ETL 管道
│   │   ├── position2_ml_engineer.md       # 机器学习数据工程师 · ML 平台
│   │   ├── position3_realtime_engineer.md # 实时数据工程师 · 流处理
│   │   ├── position4_cloud_aws.md         # 云数据工程师 · AWS 平台
│   │   └── positions_translated.md        # 具体职位详情（原文/译文对照）
│   └── data_reports/            # 数据采集与职位市场分析
│       ├── data_file_assessment.md        # 数据文件评估报告
│       ├── data_acquisition_2026.md        # 数据获取报告 2026
│       ├── info_fetch_test.md             # 信息获取测试报告
│       ├── jobs_analysis.md               # Python 数据工程师职位市场分析
│       └── job_report.md                  # 求职工作进展报告
│
├── data/                        # 职位市场原始数据
│   ├── jobs.csv                      # 德国数据工程师职位汇总
│   ├── market_data_2026.csv          # 2026 市场数据（CSV）
│   ├── market_data_2026.json         # 2026 市场数据（JSON）
│   └── market_data_2026.xlsx         # 2026 市场数据（Excel）
│
├── resume/                      # 简历模板
│   ├── resume_template.md            # 简历结构与填写说明
│   ├── resume_template.docx          # 可编辑简历模板
│   ├── resume_en.docx                # 英文简历实例
│   └── resume_de.docx                # 德文简历实例
│
├── cover_letter/                # 求职信模板
│   ├── templates_de.md               # 德文求职信模板
│   ├── templates_en.md               # 英文求职信模板
│   └── samples.md                    # 求职信样例
│
├── scripts/                     # 简历生成脚本（Node.js）
│   ├── generate_resume.js            # 生成德文简历
│   ├── generate_sample_resume.js     # 生成样例简历（示例背景）
│   ├── package.json
│   └── package-lock.json
│
└── private/                     # 🔒 本地隐私文件（已 .gitignore，不上传）
    ├── Sample_Resume_Peking_PwC_Alibaba.docx
    ├── Sample_Resume_Peking_PwC_Alibaba_DE.docx
    └── 求职进度跟踪.xlsx
```

---

## 🧭 模块说明

| 目录 | 作用 | 何时看 |
|------|------|--------|
| `docs/planning/` | 求职战略与执行节奏 | 项目启动、制定个人计划、每周复盘 |
| `docs/visa/` | 工作签证 / 机会卡政策与技能要求 | 规划入境方式、准备签证材料 |
| `docs/job_search/` | 搜职位的方法、关键词、申请流程 | 开始投递、优化搜索命中率 |
| `docs/positions/` | 4 个目标岗位的任职要求拆解 | 针对性改简历、准备面试 |
| `docs/data_reports/` | 数据采集过程与市场分析结论 | 了解行情、验证数据质量 |
| `data/` | 职位市场结构化数据 | 跑分析、更新行情 |
| `resume/` `cover_letter/` | 简历与求职信模板 | 投递每个岗位前定制 |
| `scripts/` | 一键生成简历的脚本 | 批量产出多语言简历 |

---

## 🛠 操作方法

### 1. 生成简历（Node.js 脚本）
```bash
cd scripts
npm install          # 安装 docx 依赖（首次）
node generate_resume.js          # 生成德语简历
node generate_sample_resume.js   # 生成样例简历（含示例背景，便于参考）
```
生成的 `.docx` 落在 `scripts/` 或 `resume/` 下，按需放入 `resume/`。

### 2. 更新职位市场数据
- 编辑 `data/` 下的 `jobs.csv` 或 `market_data_2026.*`
- 重新跑采集脚本后，同步更新 `docs/data_reports/` 中的分析报告

### 3. 走求职流程
1. **规划** → 读 `docs/planning/job_hunt_plan.md`，定六阶段节奏
2. **执行** → 按 `docs/planning/execution_handbook.md` 的每日/每周清单推进
3. **投岗位** → 参考 `docs/positions/` 拆目标要求，用 `resume/` `cover_letter/` 定制材料
4. **查进度** → 本地 `private/求职进度跟踪.xlsx`（不进版本库）

### 4. 办签证
- 常规工作签证：`docs/visa/work_visa_guide.txt`
- 机会卡（先入境再求职）：`docs/visa/opportunity_card_guide.txt` + `opportunity_card_demand.txt`
- 岗位技能对标：`docs/visa/skill_requirements.txt`

---

## 🔒 隐私说明
- `private/` 目录存放**含真实个人信息的文件**（样例简历含 PwC / 阿里背景、求职进度跟踪表），已在 `.gitignore` 中排除，**不会上传到 GitHub**。
- 仓库内仅保留模板与生成脚本；真实材料在本地机器维护。
- `.gitignore` 含 `*ghp_*` / `.env` 规则，防止密钥误提交。

## 🧰 技术栈
- **文档体系**：Markdown / 纯文本（零依赖，易维护）
- **简历生成**：Node.js + `docx` 库（`scripts/`）
- **数据**：CSV / JSON / Excel

## 🔗 关联项目

**LinguaBridge — 多语种学习平台**（[GitHub 仓库](https://github.com/Wadesha/linguabridge)）

支持英语、日语、韩语的沉浸式在线语言学习平台：分级课程体系（CEFR / JLPT / TOPIK）、单词记忆卡片、口语跟读、学习进度追踪与社区交流。求职过程中的语言能力提升，可与本项目配合使用。

- 仓库：https://github.com/Wadesha/linguabridge
- 在线体验（GitHub Pages）：https://wadesha.github.io/linguabridge/

---

## 📦 仓库
`Wadesha/Germany_job`（公开）
