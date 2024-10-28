---
icon: pen-to-square
date: 2024-10-25
category:
  - 科研
tag:
  - 论文精读
  - 超分
---

# 论文精读——SRGAN
https://arxiv.org/pdf/1609.04802
## 引入
1. 在图像超分引入GAN网络
2. 引入新的图像评价指标——利用VGG提取超分/原始图像特征，对这些特征进行比较
3. 综合了GAN（判别器）+ 指标图像评价指标提出新的损失函数
4. MOS测试——并不简单基于MSE评价图像质量，更多考虑肉眼感知质量

## Abstract
![20241028104009](https://qby-1330074694.cos.ap-nanjing.myqcloud.com/images/20241028104009.png)

## 1. Introduction
![20241028104054](https://qby-1330074694.cos.ap-nanjing.myqcloud.com/images/20241028104054.png)
PSNR高不代表肉眼感知质量更高，其余略
### 1.2. Contribution
![20241028103058](https://qby-1330074694.cos.ap-nanjing.myqcloud.com/images/20241028103058.png)
1. 训练了更深更好的SRResNet
2. 提出SRGAN
3. 提出MOS与新的损失函数
### 1.1. Related work
传统图像超分技术等
## 2. Method
![20241028104537](https://qby-1330074694.cos.ap-nanjing.myqcloud.com/images/20241028104537.png)  
$G_{θG}$: 生成器  
$I_n^{LR}$: low_resolution image 低分图像  
$I_n^{HR}$: high_resolution image 高分图像（原始图像）  
$l^{SR}$: 损失函数
### 2.1. Adversarial network architecture
![20241028105748](https://qby-1330074694.cos.ap-nanjing.myqcloud.com/images/20241028105748.png)
### 2.2. Perceptual loss function
![20241028105856](https://qby-1330074694.cos.ap-nanjing.myqcloud.com/images/20241028105856.png)  
图像内容loss + GAN网络对抗loss（加权求和）  
#### 2.2.1 Content loss
作者列举了两种：  
![20241028110216](https://qby-1330074694.cos.ap-nanjing.myqcloud.com/images/20241028110216.png)  
传统MSE  
![20241028110248](https://qby-1330074694.cos.ap-nanjing.myqcloud.com/images/20241028110248.png)  
利用VGG网络得到特征图，计算特征图间的欧氏距离  
#### 2.2.2 Adversarial loss
![20241028110821](https://qby-1330074694.cos.ap-nanjing.myqcloud.com/images/20241028110821.png)
## 3. Experiments
### 3.3. Mean opinion score (MOS) testing
![20241028111110](https://qby-1330074694.cos.ap-nanjing.myqcloud.com/images/20241028111110.png)  
找志愿者用肉眼评判图像质量/分辨率  
## 4. Discussion and future work
![20241028111730](https://qby-1330074694.cos.ap-nanjing.myqcloud.com/images/20241028111730.png)  
“We speculate that feature maps of these deeper layers focus purely on the content while leaving the adversarial loss focusing on texture details.  
我们推测，这些较深层的特征图纯粹关注内容，而将对抗性损失集中在纹理细节上。”  
loss函数综合考虑了图像的整体内容和纹理细节。
## 5. Conclusion
![20241028112312](https://qby-1330074694.cos.ap-nanjing.myqcloud.com/images/20241028112312.png)
![20241028112419](https://qby-1330074694.cos.ap-nanjing.myqcloud.com/images/20241028112419.png)