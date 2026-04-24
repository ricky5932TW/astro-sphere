---
title: "SimpleEqualizer — 音響自動校正工具"
summary: "以白噪音量測喇叭頻域響應，自動產生 EQ 調整建議，並提供網頁 GUI 操作完整校正流程。"
date: "Jun 30 2024"
draft: false
tags:
- Python
- Flask
- DSP
- NumPy
- SciPy
- Docker
- Alpine.js
- Tailwind
demoUrl: https://github.com/ricky5932TW/SimpleEqualizer
repoUrl: https://github.com/ricky5932TW/SimpleEqualizer
---

SimpleEqualizer 是一款本地端音響校正工具，播放測試訊號並透過麥克風錄製頻域響應，多次 FFT 平均降噪後輸出各頻段增益建議，直接對應 Windows 內建 EQ 滑桿，無需安裝驅動外掛。

此專案以「應用 Python 輔助音響自動校正的工具」獲得：
- 🥈 **2024 中央大學機械系 精進程式設計實作競賽 — 第二名**
- 🏅 **2024 中央大學工學院 程式設計菁英賽 — 佳作**

## 技術亮點

**DSP 訊號處理**
- PyAudio 以 384 kHz 高取樣率錄音，SciPy FFT 計算頻域響應
- 多次量測於頻域平均，搭配 Savitzky–Golay 平滑，有效降低環境噪音與麥克風抖動
- TuningInstructor 依 1 kHz 參考點計算各頻段 dB 偏差，輸出具體調整建議

**後端架構**
- Flask + multiprocessing 將量測程序與 HTTP 請求分離，UI 不阻塞
- 狀態檔採原子寫入（Atomic Write）避免 IPC 競態條件
- SQLite 儲存每次量測歷史，支援 `/history` 瀏覽

**前端 & 部署**
- Alpine.js + Tailwind CSS via CDN，無 npm、無 bundler，前端零建置
- Dockerfile + Docker Compose 完整容器化，支援 WSLg 音訊路由

## 成效

| 校正設備 | 校正前 | 校正後 |
|---|---|---|
| MSI P65 筆電內建喇叭 | 高頻凸出 6 dB | 趨近平坦 |
| 小米立體聲喇叭 | 低頻不足 | 補償後顯著改善 |
| 3 吋書架喇叭 | 中頻凹陷 | 平均誤差 < 2 dB |
