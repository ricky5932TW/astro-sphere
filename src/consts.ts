import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "陳志豪 | 軟體工程師",
  DESCRIPTION: "陳志豪的個人求職網站。全端軟體工程師，擅長 React、Node.js 與雲端技術，積極尋找新機會。",
  AUTHOR: "陳志豪",
}

// Work Page
export const WORK: Page = {
  TITLE: "工作經歷",
  DESCRIPTION: "我曾任職的公司與職位。",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "部落格",
  DESCRIPTION: "分享我對技術與開發的思考與心得。",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "專案作品",
  DESCRIPTION: "我近期參與開發的專案。",
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
    TEXT: "工作經歷", 
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
    TEXT: "chih.hao.chen@example.com",
    HREF: "mailto:chih.hao.chen@example.com",
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
    TEXT: "chih-hao-chen",
    HREF: "https://www.linkedin.com/in/chih-hao-chen/",
  },
]

