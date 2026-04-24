import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "張幼昇 | AI/ML Engineer",
  DESCRIPTION: "張幼昇的個人求職網站。國立中央大學機械所 AI 應用組碩士生，專注電腦視覺、時序資料分析與智慧製造，積極尋找 Data Scientist / AI/ML Engineer / QA 相關職缺。",
  AUTHOR: "張幼昇",
}

// Work Page
export const WORK: Page = {
  TITLE: "學術與助教經歷",
  DESCRIPTION: "研究、競賽與助教相關經歷。",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "部落格",
  DESCRIPTION: "分享技術筆記、研究心得與學習記錄。",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "專案作品",
  DESCRIPTION: "我參與開發的個人與競賽專案。",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "搜尋",
  DESCRIPTION: "以關鍵字搜尋所有文章與專案。",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "首頁", 
    HREF: "/", 
  },
  { 
    TEXT: "經歷", 
    HREF: "/work", 
  },
  { 
    TEXT: "專案作品", 
    HREF: "/projects", 
  },
  { 
    TEXT: "部落格", 
    HREF: "/blog", 
  },
  { 
    TEXT: "履歷", 
    HREF: "/resume", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "ricky5932tw@gmail.com",
    HREF: "mailto:ricky5932tw@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "ricky5932TW",
    HREF: "https://github.com/ricky5932TW"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "張幼昇",
    HREF: "https://www.linkedin.com/in/%E5%B9%BC%E6%98%87-%E5%BC%B5-3b5897361/",
  },
]


