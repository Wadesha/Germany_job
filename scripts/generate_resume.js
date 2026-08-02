const { Document, Packer, Paragraph, TextRun, AlignmentType, HeadingLevel } = require('docx');
const fs = require('fs');

// 创建德文简历
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
          new TextRun({ text: "Berlin, Deutschland  |  +49 176 1234 5678  |  minghao.zhang@outlook.com  |  linkedin.com/in/minghao-zhang", size: 20 })
        ]
      }),

      // 职业概述
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun({ text: "PROFIL" })]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [
          new TextRun({ text: "Erfahrener Data Engineer mit mehr als 5 Jahren Erfahrung in der Entwicklung skalierbarer Datenpipelines, ETL-Prozesse und Analyselösungen. Hervorragender Hintergrund in Python, SQL und Cloud-Technologien (AWS/GCP) mit nachgewiesener Fähigkeit, komplexe Daten in verwertbare Geschäftseinblicke umzuwandeln. Kombiniert Beratungserfahrung von Big-4-Unternehmen mit praktischer technischer Expertise in Datenarchitektur. Suche eine neue Herausforderung in einem deutschen Technologieunternehmen." })
        ]
      }),

      // 核心技能
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun({ text: "TECHNISCHE KENNTNISSE" })]
      }),
      
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ bold: true, text: "Programmierung: " }), new TextRun("Python (Pandas, NumPy, PySpark), SQL, Java, R, Scala")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ bold: true, text: "Datenverarbeitung: " }), new TextRun("Apache Spark, Airflow, Kafka, Flink, ETL/ELT-Pipelines")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ bold: true, text: "Datenbanken: " }), new TextRun("PostgreSQL, MySQL, MongoDB, Redis, Snowflake, BigQuery")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ bold: true, text: "Cloud-Plattformen: " }), new TextRun("AWS (EC2, S3, Lambda, Glue, Athena, Redshift), GCP, Azure")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ bold: true, text: "Visualisierung: " }), new TextRun("Tableau, Power BI, Looker, Matplotlib, Seaborn")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun({ bold: true, text: "Tools: " }), new TextRun("Docker, Git, Jenkins, Kubernetes, Linux/Unix, Jira")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        spacing: { after: 200 },
        children: [new TextRun({ bold: true, text: "Sprachen: " }), new TextRun("Englisch (Fließend), Deutsch (B1), Mandarin (Muttersprache)")]
      }),

      // 工作经历
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun({ text: "BERUFSERFAHRUNG" })]
      }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun({ text: "Alibaba Group", bold: true })]
      }),
      new Paragraph({
        spacing: { after: 60 },
        children: [
          new TextRun({ text: "Senior Data Engineer", italics: true }),
          new TextRun("  |  Hangzhou, China  |  September 2021 - Heute")
        ]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun("Entwicklung von Echtzeit-Datenpipelines zur Verarbeitung von über 10 Millionen Events täglich mit Apache Flink und Kafka, Reduzierung der Datenlatenz von 24 Stunden auf 15 Minuten")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun("Leitung der Migration von On-Premise Hadoop-Clustern zu AWS EMR, Erzielung von 40% Kostenreduzierung und 60% Verbesserung der Verarbeitungsgeschwindigkeit")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun("Entwicklung eines automatisierten Datenqualitäts-Überwachungsframeworks mit Python und Great Expectations, proaktive Erkennung und Behebung von 95% der Datenprobleme")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun("Zusammenarbeit mit ML-Engineering-Team zur Bereitstellung von Feature-Engineering-Pipelines für Empfehlungssysteme, Verbesserung der Modell-AUC um 8%")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        spacing: { after: 200 },
        children: [new TextRun("Mentoring von 3 Junior-Ingenieuren und Etablierung von Best Practices für Code-Review und Dokumentation")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun({ text: "PricewaterhouseCoopers (PwC)", bold: true })]
      }),
      new Paragraph({
        spacing: { after: 60 },
        children: [
          new TextRun({ text: "Data Analytics Consultant", italics: true }),
          new TextRun("  |  Shanghai, China  |  Juli 2019 - August 2021")
        ]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun("Lieferung von Datenanalyse-Lösungen für Fortune-500-Kunden in den Bereichen Finanzdienstleistungen, Einzelhandel und Fertigung")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun("Aufbau von Finanzberichterstattungs-Pipelines für Bankkunden mit Python und SQL, Automatisierung des monatlichen Abschlussprozesses und Einsparung von über 200 Stunden pro Quartal")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun("Design von Retail-Analytics-Dashboards in Tableau für nationale Einzelhandelskette, Bereitstellung von Echtzeit-Sichtbarkeit in Verkäufe, Lagerbestand und Kundenverhalten")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun("Leitung der Data-Governance-Initiative für Versicherungsunternehmen, Implementierung von Datenkatalog und Lineage-Tracking, Verbesserung der Datenauffindbarkeit um 70%")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        spacing: { after: 200 },
        children: [new TextRun("Management von Projektzeitplänen und Stakeholder-Kommunikation für Team von 5 Personen, pünktliche Lieferung aller Projekte im Rahmen des Budgets")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun({ text: "Alibaba Group - Praktikum", bold: true })]
      }),
      new Paragraph({
        spacing: { after: 60 },
        children: [
          new TextRun({ text: "Datenanalyst (Praktikant)", italics: true }),
          new TextRun("  |  Hangzhou, China  |  Januar 2019 - Juni 2019")
        ]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun("Durchführung von explorativer Datenanalyse bei E-Commerce-Transaktionsdaten mit Python und SQL, Identifizierung von Wachstumsmöglichkeiten im Wert von 2 Millionen USD jährlich")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        spacing: { after: 200 },
        children: [new TextRun("Erstellung von automatisierten Berichterstattungsskripten mit Python, Reduzierung der manuellen Berichterstattungszeit um 80%")]
      }),

      // 教育背景
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun({ text: "AUSBILDUNG" })]
      }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun({ text: "Peking University (北京大学)", bold: true })]
      }),
      new Paragraph({
        spacing: { after: 60 },
        children: [
          new TextRun({ text: "Bachelor of Science in Physik", italics: true }),
          new TextRun("  |  Peking, China  |  September 2015 - Juni 2019")
        ]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun("GPA: 3,7/4,0  |  Dean's List (2016-2019)")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun("Relevante Kurse: Datenstrukturen, Algorithmen, Statistische Analyse, Maschinelles Lernen, Lineare Algebra")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        spacing: { after: 200 },
        children: [new TextRun("Abschlussarbeit: \"Anwendung von Maschinellem Lernen in der Teilchenphysik-Datenanalyse\"")]
      }),

      // 项目经验
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun({ text: "AUSGEWÄHLTE PROJEKTE" })]
      }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun({ text: "Echtzeit-Analytics-Plattform", bold: true })]
      }),
      new Paragraph({
        spacing: { after: 60 },
        children: [
          new TextRun({ text: "Persönliches Projekt  |  Januar 2024 - Heute", italics: true })
        ]
      }),
      new Paragraph({
        bullet: { level: 0 },
        children: [new TextRun("Aufbau einer End-to-End-Streaming-Analytics-Plattform mit Kafka, Flink und ClickHouse zur Verarbeitung von IoT-Sensordaten")]
      }),
      new Paragraph({
        bullet: { level: 0 },
        spacing: { after: 200 },
        children: [new TextRun("Erzielung von 99,9% Verfügbarkeit und Sub-Sekunden-Latenz für Echtzeit-Dashboards")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun({ text: "Open-Source-Beitrag - PySpark-Optimierung", bold: true })]
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
        children: [new TextRun("Beitrag von Leistungsoptimierungs-Patches für PySpark DataFrame-Operationen, zusammengeführt und veröffentlicht in Version 3.5.0")]
      }),

      // 证书
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun({ text: "ZERTIFIKATE" })]
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
        children: [new TextRun({ bold: true, text: "IELTS Academic " }), new TextRun("Band Score: 7,5 (2019)")]
      }),
    ]
  }]
});

// 生成文件
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("c:/Users/wade/OneDrive/claw/Germany_job/Sample_Resume_Peking_PwC_Alibaba_DE.docx", buffer);
  console.log("德文简历已生成: Sample_Resume_Peking_PwC_Alibaba_DE.docx");
});
