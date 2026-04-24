---
title: "2025 智慧製造大數據競賽 — 多實例學習異常辨識"
summary: "以 Multiple Instance Learning 處理缺失時序資料，異常辨識準確率達 99%，入圍教育部全國競賽。"
date: "May 01 2025"
draft: false
tags:
- Python
- PyTorch
- scikit-learn
- 時序資料
- 異常偵測
- Multiple Instance Learning
---

擔任隊長，代表國立中央大學參加 **2025 教育部全國智慧製造大數據分析競賽**，最終成績**入圍**。

## 問題挑戰

題目為工業設備感測器時序資料的異常辨識，資料存在大量缺失值與不規則取樣，傳統方法難以直接建模。

## 解題策略

1. **多實例學習（Multiple Instance Learning, MIL）**：將缺失區段視為弱標記集合（bag），不需對每個時間點單獨標注，降低標注需求。
2. **兩階段建模**：先以統計方法還原整體平均行為，再以局部模型定位異常區域，降低缺失資料的干擾。
3. **模型組合（Ensemble）**：整合多個基礎模型的預測結果，規避單一模型對時序缺失的敏感性。

## 成果

- 異常辨識準確率：**99%**
- 額外協助實驗室新進成員處理另一子題，完成端到端建模流程指導

## 技術棧

Python · PyTorch · scikit-learn · pandas · NumPy · Matplotlib
