# 張幼昇 — 個人求職網站

> AI / ML Engineer｜電腦視覺 · 時序資料 · 智慧製造  
> 國立中央大學機械所人工智慧應用組 碩士生

本網站以 [Astro Sphere](https://github.com/markhorn-dev/astro-sphere) 為基礎架構，搭配 Astro、Tailwind CSS 與 TypeScript 建置，為靜態網站可直接免費部署至 Vercel。

---

## 🚀 一鍵部署到 Vercel

點擊下方按鈕，將此 repository fork 並自動部署到你的 Vercel 帳號：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fricky5932TW%2Fastro-sphere&project-name=yousheng-portfolio&repository-name=astro-sphere&demo-title=%E5%BC%B5%E5%B9%BC%E6%98%87%E6%B1%82%E8%81%B7%E7%B6%B2%E7%AB%99)

### 部署步驟（首次）

1. 點擊上方 **Deploy with Vercel** 按鈕。
2. 登入或註冊 [Vercel](https://vercel.com) 帳號（可用 GitHub 登入）。
3. Vercel 會自動偵測 Astro 框架，確認設定後按 **Deploy**。
4. 部署完成後，Vercel 會提供一個預設網址（如下方說明）。

> ⏱ 首次部署約需 1–2 分鐘。

### 後續更新

每次 push 到 `main` branch 時，Vercel 會自動重新部署，無需手動操作。

---

## 🌐 網域名稱建議

### Vercel 免費子網域（部署後立即可用）

Vercel 預設會提供以下格式的免費網址，完全不需花錢：

```
https://yousheng-portfolio.vercel.app
```

你也可以在 Vercel 儀表板的 **Settings → Domains** 自訂子網域名稱，以下是幾個推薦選項：

| 網址 | 說明 |
|---|---|
| `yousheng.vercel.app` | 簡短易記 ✅ 推薦 |
| `yousheng-zhang.vercel.app` | 中英混合，辨識度高 |
| `ricky5932.vercel.app` | 對應 GitHub 帳號名稱 |
| `youchang-portfolio.vercel.app` | 完整英文拼音 |

### 自訂網域（可選，需購買）

如果你想要更專業的網域（如 `yousheng.dev`），可以從以下平台購買後綁定到 Vercel：

| 域名建議 | 預估年費 | 平台 |
|---|---|---|
| `yousheng.dev` | ~USD 12/yr | [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/)（成本價，推薦） |
| `youshengzhang.com` | ~USD 12/yr | Cloudflare / [Namecheap](https://www.namecheap.com) |
| `yousheng.me` | ~USD 20/yr | Namecheap |

購買後在 Vercel **Settings → Domains** 新增並依指示設定 DNS（通常只需要幾分鐘）。

---

## ✏️ 個人化設定

所有個人資訊集中在 **`src/consts.ts`**，修改後 push 即自動上線：

```ts
export const SITE: Site = {
  TITLE: "張幼昇 | AI/ML Engineer",  // 網頁標題（出現在瀏覽器分頁）
  DESCRIPTION: "...",                // SEO 描述
  AUTHOR: "張幼昇",
}
```

其他內容檔案位置：

| 內容 | 路徑 |
|---|---|
| 首頁自我介紹 | `src/pages/index.astro` |
| 履歷頁 | `src/pages/resume.astro` |
| 經歷（TA、研究） | `src/content/work/*.md` |
| 專案作品 | `src/content/projects/*/index.md` |
| 部落格文章 | `src/content/blog/*/index.md` |
| 社群連結 | `src/consts.ts` → `SOCIALS` |

---

## 💻 本機開發指令

需要 Node.js ≥ 22.12.0（[下載](https://nodejs.org/)）

```bash
npm install          # 安裝相依套件
npm run dev          # 啟動本機開發伺服器 → http://localhost:4321
npm run build        # 建置靜態網站到 ./dist/
npm run preview      # 預覽建置結果
```

---

## 📋 功能特色

- ✅ Lighthouse 100/100 效能分數
- ✅ 響應式設計（手機、平板、桌機）
- ✅ 深色 / 淺色主題切換
- ✅ SEO 友善（自動 Sitemap & RSS）
- ✅ 全站搜尋（文章 & 專案）
- ✅ Markdown / MDX 文章支援
- ✅ 程式碼區塊一鍵複製
- ✅ 靜態網站，部署費用為零

---

## 🏛️ License

MIT
