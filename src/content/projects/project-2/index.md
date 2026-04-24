---
title: "LinkMeet — 活動報名與票務平台"
summary: "整合線上報名、QR Code 驗票與即時人數追蹤的活動管理 SaaS 平台。"
date: "Aug 20 2023"
draft: false
tags:
- Next.js
- TypeScript
- Prisma
- PostgreSQL
- Stripe
repoUrl: https://github.com/ricky5932TW/linkmeet
---

LinkMeet 是一個活動報名與票務管理平台，讓主辦方可快速建立活動頁面、設定票種，並透過 Stripe 收款，參加者則可線上報名並取得 QR Code 電子票券。

## 主要功能

- **活動建立**：支援多票種設定（早鳥票、一般票、VIP）、名額限制與時間控制。
- **線上收款**：整合 Stripe Checkout，支援信用卡與 Apple Pay，自動退款流程。
- **QR Code 驗票**：入場時掃描驗票，即時更新入場狀態，防止重複使用。
- **數據儀表板**：即時顯示報名人數、票種銷售比例、收款金額。

## 技術架構

以 Next.js 14（App Router）為核心，搭配 Prisma + PostgreSQL 作為資料層，Stripe Webhooks 處理付款事件，並使用 Zod 進行表單與 API 資料驗證。
