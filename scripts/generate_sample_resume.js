const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, 
        AlignmentType, LevelFormat, HeadingLevel, BorderStyle, WidthType, ShadingType } = require('docx');
const fs = require('fs');

// 创建英文简历
const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: { ascii: "Arial", hAnsi: "Arial", eastAsia: "Microsoft YaHei" }, size: 22 }
      }
    },
    paragraphStyles: [
      { id: "Normal", name: "Normal",
        paragraph: { spacing: { line: 280, lineRule: "atLeast", after: 60 } } },
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: { ascii: "Arial", hAnsi: "Arial", eastAsia: "Microsoft YaHei" } },
        paragraph: { spacing: { before: 200, after: 100, line: 280, lineRule: "auto" }, outlineLevel: 0, keepNext: false, keepLines: false } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 23, bold: true, font: { ascii: "Arial", hAnsi: "Arial", eastAsia: "Microsoft YaHei" } },
        paragraph: { spacing: { before: 160, after: 80, line: 280, lineRule: "auto" }, outlineLevel: 1, keepNext: false, keepLines: false } },
    ]
  },
  sections: [{
    properties: {
      page: {
        margin: { top: 1000, right: 1000, bottom: 1000, left: 1000 }
      }
    },
    children: [
      // 标题
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 100 },
        children: [
          new TextRun({ text: "Minghao Zhang", bold: true, size: 36 })
        ]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
        children: [
          new TextRun({ text: "Senior Data Engineer", size: 28, color: "2E5090" })
        ]
      }),
      
      // 联系信息
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 },
        children: [
          new TextRun({ text: "Berlin, Germany  |  +49 176 1234 5678  |  minghao.zhang@outlook.com  |  linkedin.com/in/minghao-zhang", size: 20 })
        ]
      }),

      // 职业概述
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun({ text: "PROFESSIONAL SUMMARY" })]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [
          new TextRun({ text: "Data Engineer with 5+ years of experience specializing in building scalable data pipelines, ETL processes, and analytics solutions. Strong background in Python, SQL, and cloud technologies (AWS/GCP) with proven ability to transform complex data into actionable business insights. Combines consulting experience from Big 4 firms with hands-on technical expertise in data architecture. Seeking to leverage my analytical skills and international background in a German tech company." })
        ]
      }),

      // 核心技能
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun({ text: "TECHNICAL SKILLS" })]
      }),
      
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ bold: true, text: "Programming: " }), new TextRun("Python (Pandas, NumPy, PySpark), SQL, Java, R, Scala")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ bold: true, text: "Data Processing: " }), new TextRun("Apache Spark, Airflow, Kafka, Flink, ETL/ELT pipelines")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ bold: true, text: "Databases: " }), new TextRun("PostgreSQL, MySQL, MongoDB, Redis, Snowflake, BigQuery")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ bold: true, text: "Cloud Platforms: " }), new TextRun("AWS (EC2, S3, Lambda, Glue, Athena, Redshift), GCP, Azure")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ bold: true, text: "Visualization: " }), new TextRun("Tableau, Power BI, Looker, Matplotlib, Seaborn")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ bold: true, text: "Tools: " }), new TextRun("Docker, Git, Jenkins, Kubernetes, Linux/Unix, Jira")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        spacing: { after: 200 },
        children: [new TextRun({ bold: true, text: "Languages: " }), new TextRun("English (Fluent), German (B1), Mandarin (Native)")]
      }),

      // 工作经历
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun({ text: "PROFESSIONAL EXPERIENCE" })]
      }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun({ text: "Alibaba Group", bold: true })]
      }),
      new Paragraph({
        spacing: { after: 60 },
        children: [
          new TextRun({ text: "Senior Data Engineer", italics: true }),
          new TextRun("  |  Hangzhou, China  |  Sep 2021 - Present")
        ]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun("Designed and built real-time data pipelines processing 10M+ events daily using Apache Flink and Kafka, reducing data latency from 24 hours to 15 minutes")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun("Led migration of on-premise Hadoop clusters to AWS EMR, achieving 40% cost reduction and 60% improvement in processing speed")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun("Developed automated data quality monitoring framework using Python and Great Expectations, detecting and resolving 95% of data issues proactively")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun("Collaborated with ML engineering team to deploy feature engineering pipelines for recommendation systems, improving model AUC by 8%")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        spacing: { after: 200 },
        children: [new TextRun("Mentored 3 junior engineers and established team best practices for code review and documentation")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun({ text: "PricewaterhouseCoopers (PwC)", bold: true })]
      }),
      new Paragraph({
        spacing: { after: 60 },
        children: [
          new TextRun({ text: "Data Analytics Consultant", italics: true }),
          new TextRun("  |  Shanghai, China  |  Jul 2019 - Aug 2021")
        ]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun("Delivered data analytics solutions for Fortune 500 clients in financial services, retail, and manufacturing industries")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun("Built financial reporting pipelines using Python and SQL for banking client, automating monthly close process and saving 200+ hours per quarter")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun("Designed retail analytics dashboard in Tableau for national chain, providing real-time visibility into sales, inventory, and customer behavior")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun("Led data governance initiative for insurance company, implementing data catalog and lineage tracking, improving data discoverability by 70%")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        spacing: { after: 200 },
        children: [new TextRun("Managed project timelines and stakeholder communications for team of 5, delivering all projects on time and within budget")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun({ text: "Alibaba Group - Internship", bold: true })]
      }),
      new Paragraph({
        spacing: { after: 60 },
        children: [
          new TextRun({ text: "Data Analyst Intern", italics: true }),
          new TextRun("  |  Hangzhou, China  |  Jan 2019 - Jun 2019")
        ]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun("Performed exploratory data analysis on e-commerce transaction data using Python and SQL, identifying growth opportunities worth $2M annually")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        spacing: { after: 200 },
        children: [new TextRun("Created automated reporting scripts using Python that reduced manual reporting time by 80%")]
      }),

      // 教育背景
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun({ text: "EDUCATION" })]
      }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun({ text: "Peking University", bold: true })]
      }),
      new Paragraph({
        spacing: { after: 60 },
        children: [
          new TextRun({ text: "Bachelor of Science in Physics", italics: true }),
          new TextRun("  |  Beijing, China  |  Sep 2015 - Jun 2019")
        ]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun("GPA: 3.7/4.0  |  Dean's List (2016-2019)")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun("Relevant Coursework: Data Structures, Algorithms, Statistical Analysis, Machine Learning, Linear Algebra")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        spacing: { after: 200 },
        children: [new TextRun("Thesis: \"Application of Machine Learning in Particle Physics Data Analysis\"")]
      }),

      // 项目经验
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun({ text: "SELECTED PROJECTS" })]
      }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun({ text: "Real-Time Analytics Platform", bold: true })]
      }),
      new Paragraph({
        spacing: { after: 60 },
        children: [
          new TextRun({ text: "Personal Project  |  Jan 2024 - Present", italics: true })
        ]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun("Built end-to-end streaming analytics platform using Kafka, Flink, and ClickHouse for processing IoT sensor data")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        spacing: { after: 200 },
        children: [new TextRun("Achieved 99.9% uptime and sub-second latency for real-time dashboards")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun({ text: "Open Source Contribution - PySpark Optimization", bold: true })]
      }),
      new Paragraph({
        spacing: { after: 60 },
        children: [
          new TextRun({ text: "GitHub  |  2023", italics: true })
        ]
      }),
      new Paragraph({
        bullet: { level: 0 },
        spacing: { after: 200 },
        children: [new TextRun("Contributed performance optimization patches to PySpark DataFrame operations, merged and released in v3.5.0")]
      }),

      // 证书
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun({ text: "CERTIFICATIONS" })]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ bold: true, text: "AWS Certified Data Analytics - Specialty " }), new TextRun("(2023)")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ bold: true, text: "Google Cloud Professional Data Engineer " }), new TextRun("(2022)")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ bold: true, text: "IELTS Academic " }), new TextRun("Band Score: 7.5 (2019)")]
      }),
    ]
  }]
});

// 生成文件
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("c:/Users/wade/OneDrive/claw/Germany_job/Sample_Resume_Peking_PwC_Alibaba.docx", buffer);
  console.log("英文简历已生成: Sample_Resume_Peking_PwC_Alibaba.docx");
});
