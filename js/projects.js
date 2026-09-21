/* ============================================================
   项目作品数据
   以后新增项目只需在此数组里追加一个对象即可，页面会自动渲染。
   字段说明：
     name      项目名称
     desc      一句话简介
     stack     技术栈（字符串数组）
     category  项目类别
     date      完成时间
     image     图片地址（示意占位图，后续替换为真实截图）
   ============================================================ */

const projects = [
  {
    name: "轻记账",
    desc: "一款面向日常生活场景的极简记账微信小程序，重点解决快速记录和查看个人收支的问题，支持语音快捷记账、月度收支统计与预算提醒。",
    stack: ["TypeScript", "微信小程序", "微信云开发", "ECharts"],
    category: "小程序",
    date: "2025-04",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=minimalist%20accounting%20wechat%20mini%20program%20finance&image_size=landscape_4_3",
  },
  {
    name: "拾光集市",
    desc: "面向校园场景的二手交易平台，提供商品发布、关键词检索、站内私信和信用评分等功能。从需求梳理、界面设计到主要接口开发均独立完成。",
    stack: ["Java", "Spring Boot", "MySQL", "TypeScript", "Vue"],
    category: "Web 应用",
    date: "2025-09",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=campus%20second%20hand%20trading%20platform%20web&image_size=landscape_4_3",
  },
  {
    name: "城市脉搏",
    desc: "城市实时交通与天气数据可视化大屏，通过多数据源轮询聚合数据，并结合 SVG 图表、Canvas 粒子地图与响应式布局集中展示城市运行信息。",
    stack: ["TypeScript", "Canvas", "SVG", "ECharts"],
    category: "数据可视化",
    date: "2026-03",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=city%20traffic%20weather%20data%20visualization%20big%20screen&image_size=landscape_4_3",
  },
  {
    name: "课语通",
    desc: "基于大语言模型的课程问答助手，上传课程资料后建立知识索引，可根据课程内容回答问题并提供引用出处与知识点小测，帮助学生复习整理重点。",
    stack: ["Python", "FastAPI", "RAG", "向量检索", "大语言模型 API", "Streamlit"],
    category: "AI 应用",
    date: "2026-07",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ai%20assistant%20course%20qa%20llm%20streamlit%20interface&image_size=landscape_4_3",
  },
];