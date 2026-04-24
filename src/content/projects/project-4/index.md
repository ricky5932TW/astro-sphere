---
title: "少樣本光彈圖預測 — 碩士論文研究"
summary: "在約 300 張影像資料下，以 CNN + 遷移學習預測射出成形模擬光彈圖，完成端到端訓練與驗證。"
date: "Sep 01 2024"
draft: false
tags:
- Python
- PyTorch
- OpenCV
- 電腦視覺
- 遷移學習
- Moldex3D
repoUrl: https://github.com/ricky5932TW/Limited-Data-Prediction-of-Simulated-Photoelastic-Fringe-Patterns
---

碩士論文研究主題，目標是在**少樣本條件**（約 300 張）下，以深度學習預測射出成形製程中的光彈圖（Photoelastic fringe pattern），用於輔助模具設計與殘留應力分析。

## 研究動機

傳統光彈圖需要實體模型與光學實驗才能取得，成本高且耗時。若能以模擬資料訓練模型，直接由製程參數預測光彈圖，可大幅縮短模具驗證週期。

## 方法

1. **資料集建立**：整合 Moldex3D 模擬輸出與實驗光彈圖，建立配對訓練資料，並設計資料增強策略應對小資料集限制。
2. **模型架構**：以預訓練 ResNet / EfficientNet 為骨幹（Transfer Learning），調整輸出頭以適配光彈圖生成任務。
3. **訓練流程**：採分段微調（Gradual Unfreezing），配合 CosineAnnealingLR 調整學習率，穩定少樣本訓練。
4. **消融實驗**：系統性驗證資料增強、骨幹深度、損失函數選擇對預測品質的影響。

## 前序基礎

本研究的影像處理管線與幾何理解，建立在大學時期「影像工程概論」課程的實作基礎之上——包含 SIFT 特徵匹配、Essential Matrix 位姿估算與 3D 三角化，詳見 [SfM 3D 點雲重建專案](/projects/project-5)。

## 使用工具

Python · PyTorch · OpenCV · NumPy · Matplotlib · Moldex3D（模擬資料來源）
