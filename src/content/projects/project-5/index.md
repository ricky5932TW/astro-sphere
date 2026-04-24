---
title: "SfM 3D 點雲重建 — 影像工程期末專案"
summary: "以 SIFT 特徵匹配、Essential Matrix 與三角化，從多張影像重建帶顏色的 3D 點雲並以 Open3D 視覺化。"
date: "Jun 15 2024"
draft: false
tags:
- Python
- OpenCV
- Open3D
- NumPy
- SfM
- 電腦視覺
repoUrl: https://github.com/ricky5932TW/ME5071_Final_Project
---

國立中央大學「影像工程概論（ME5071）」期末專案，實作 **Structure from Motion（SfM）** 流程，從一組連續影像自動估算相機位姿並重建帶顏色的稀疏 3D 點雲。

## 重建流程

```text
多張影像
  └─► SIFT 特徵偵測 & 描述子提取（cv2.SIFT_create）
        └─► BFMatcher k-NN 特徵匹配 + Lowe's ratio test 過濾
              └─► Essential Matrix 估算（cv2.findEssentialMat, RANSAC）
                    └─► 相機位姿還原（cv2.recoverPose → R, t）
                          └─► 三角化（cv2.triangulatePoints）
                                └─► 帶顏色點雲 → Open3D 視覺化
```

## 技術細節

- **相機標定**：以預先標定的內參矩陣 K（焦距 ≈ 5905 px）提供幾何約束。
- **特徵匹配**：SIFT 描述子 + BFMatcher kNN，Lowe's ratio 0.7 過濾誤匹配。
- **位姿估算**：Essential Matrix（RANSAC threshold 0.4）→ 分解得 R、t。
- **三角化**：齊次座標三角化後轉回歐氏座標，附投影誤差修正。
- **顏色採樣**：從原始彩色影像採樣對應像素顏色，賦予點雲 RGB 資訊。
- **視覺化**：Open3D VisualizerWithEditing，支援互動式點選與編輯。

## 與碩論的關聯

此專案奠定了我在**影像幾何**（Essential Matrix、外參估算）與 **OpenCV 影像處理管線**的實作基礎，這些能力直接延伸至碩論中光彈圖影像的前處理、特徵對齊與模型輸入設計。

## 技術棧

Python · OpenCV · NumPy · Open3D
