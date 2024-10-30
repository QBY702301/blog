---
icon: pen-to-square
date: 2024-10-30
category:
  - 科研
tag:
  - 论文精读
  - 超分
  - swin transformer
---
# 论文精读——SWIR

[SwinIR](https://arxiv.org/pdf/2108.10257)

## 引入

1. 在图像超分引入Swin Transformer网络，效果很好
2. 损失函数没有明说，据说综合了像素、GAN、感知损失
3. 网络小改后适用于图像去噪和去雨

## Abstract
![20241030151203](https://qby-1330074694.cos.ap-nanjing.myqcloud.com/images/20241030151203.png)  
性能优越+参数量少
## 1. Introduction
![20241030151537](https://qby-1330074694.cos.ap-nanjing.myqcloud.com/images/20241030151537.png)  
![20241030151646](https://qby-1330074694.cos.ap-nanjing.myqcloud.com/images/20241030151646.png)  
SwinIR由三个模块组成：浅层特征提取、深层特征提取和高质量图像重建模块。
## 2. Related work
图像超分+Vit
## 3. Method
### 3.1. Network Architecture
![20241030165011](https://qby-1330074694.cos.ap-nanjing.myqcloud.com/images/20241030165011.png)  
Shallow extraction + Deep extraction + Image reconstruction
![20241030165931](https://qby-1330074694.cos.ap-nanjing.myqcloud.com/images/20241030165931.png)  
we use a combination of pixel loss, GAN loss and perceptual loss
### 3.2. Residual Swin Transformer Block
![20241030171650](https://qby-1330074694.cos.ap-nanjing.myqcloud.com/images/20241030171650.png)
## 4. Experiments
略
## 5. Conclusion
![20241030172443](https://qby-1330074694.cos.ap-nanjing.myqcloud.com/images/20241030172443.png)
![20241030171954](https://qby-1330074694.cos.ap-nanjing.myqcloud.com/images/20241030171954.png)
![20241030172014](https://qby-1330074694.cos.ap-nanjing.myqcloud.com/images/20241030172014.png)