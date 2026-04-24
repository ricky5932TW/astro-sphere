---
title: "WeatherNow — 即時天氣 PWA"
summary: "支援定位與城市搜尋的即時天氣漸進式 Web 應用程式，可安裝至手機桌面離線瀏覽。"
date: "Oct 12 2022"
draft: false
tags:
- React
- TypeScript
- PWA
- Tailwind
demoUrl: https://weathernow-tw.vercel.app
repoUrl: https://github.com/ricky5932TW/weather-now
---

WeatherNow 是一款天氣 PWA（Progressive Web App），使用者可透過 GPS 定位或城市搜尋取得即時天氣、逐時預報與未來七天趨勢，並可安裝至手機主畫面，支援離線快取最近一次的查詢結果。

## 主要功能

- **即時天氣**：整合 OpenWeatherMap API，顯示氣溫、體感溫度、降雨機率、風速等數據。
- **城市搜尋**：支援中英文城市名稱自動補全（debounce 優化）。
- **七天預報**：以圖表形式呈現最高/最低溫趨勢（Recharts）。
- **PWA 支援**：Service Worker 快取策略、離線提示、App 安裝橫幅。

## 技術亮點

以 React + Vite 快速開發，Workbox 處理 Service Worker，採用 Geolocation API 取得定位，並以 i18next 支援中英雙語介面。
