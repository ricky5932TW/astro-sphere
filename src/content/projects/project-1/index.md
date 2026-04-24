---
title: "ShopFlow — 電商後台管理系統"
summary: "為中小型電商打造的全端後台系統，整合訂單管理、庫存追蹤與銷售報表功能。"
date: "Jan 10 2024"
draft: false
tags:
- React
- TypeScript
- Node.js
- PostgreSQL
- Tailwind
demoUrl: https://shopflow-demo.vercel.app
repoUrl: https://github.com/ricky5932TW/shopflow
---

ShopFlow 是一套為中小型電商業者設計的後台管理解決方案，提供直覺化的操作介面與完整的業務數據洞察。

## 主要功能

- **訂單管理**：支援多狀態追蹤（待付款、備貨中、已出貨、已完成），可批次更新與匯出 CSV。
- **庫存管理**：低庫存自動警示、商品變體（尺寸/顏色）管理、進貨紀錄查詢。
- **銷售報表**：以 Recharts 呈現每日/每週/每月銷售趨勢，支援自訂日期區間篩選。
- **多角色權限**：管理員、倉管、客服等角色各有獨立操作範圍。

## 技術亮點

前端以 React 18 + TypeScript 搭配 Tanstack Query 處理非同步狀態；後端採用 Node.js + Express，搭配 Prisma ORM 操作 PostgreSQL 資料庫。整個系統部署於 Vercel（前端）與 Railway（後端 + DB）。
