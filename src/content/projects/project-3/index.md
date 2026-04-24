---
title: "DevLog — 個人技術筆記系統"
summary: "以 Markdown 驅動的私人技術筆記平台，支援全文搜尋、標籤分類與閱讀模式。"
date: "Mar 05 2023"
draft: false
tags:
- Astro
- TypeScript
- Tailwind
- Markdown
repoUrl: https://github.com/ricky5932TW/devlog
---

DevLog 是我為自己打造的技術筆記系統，解決分散在各處的學習記錄管理問題，強調快速寫作、方便查找，並支援離線閱讀。

## 主要功能

- **Markdown 編輯**：支援程式碼高亮（Shiki）、數學公式（KaTeX）、Mermaid 流程圖。
- **全文搜尋**：基於 Fuse.js 的客戶端模糊搜尋，不需後端即可運作。
- **標籤系統**：多維度標籤分類與篩選，快速找到相關筆記。
- **閱讀模式**：自動計算閱讀時間，簡潔排版聚焦正文內容。

## 技術亮點

全站以 Astro 靜態生成，首次載入 JS 近乎為零。部署於 GitHub Pages，利用 GitHub Actions 自動建置與發布。
