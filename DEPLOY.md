# Bridge Studio 部署指南

## 方案一：手动上传到 GitHub（推荐）

### 1. 在 GitHub 创建仓库
- 访问 https://github.com/new
- 仓库名：`bridge-studio`（或你喜欢的名字）
- 选择 Public
- 不要初始化 README（我们已有）

### 2. 推送代码
```bash
# 在项目目录执行
git remote add origin https://github.com/你的用户名/bridge-studio.git
git push -u origin main
```

### 3. 启用 GitHub Pages
- 进入仓库 Settings → Pages
- Source 选择 "GitHub Actions"
- 等待 2-3 分钟，网站会自动部署

### 4. 访问网站
部署完成后，访问：
`https://你的用户名.github.io/bridge-studio`

---

## 方案二：直接下载上传

如果本地没有 Git，可以直接下载项目文件夹上传到 GitHub：

1. 将整个 `bridge-studio` 文件夹压缩下载
2. 在 GitHub 创建新仓库
3. 上传文件
4. 在 Settings → Pages 中启用 GitHub Actions

---

## 网站预览

本地预览构建结果：
```bash
cd bridge-studio/dist
npx serve
```

然后访问 http://localhost:3000

---

## 自定义修改

### 修改联系邮箱
编辑 `components/CTA.tsx`：
```tsx
<a href="mailto:你的邮箱@domain.com"
```

### 修改品牌名
编辑 `components/Footer.tsx` 中的 Bridge Studio

### 添加真实案例
编辑 `components/Showcase.tsx`，替换 Earthen 案例图片

---

## 已生成的文件

项目位于：`/root/.openclaw/workspace/bridge-studio/`

主要文件：
- `pages/index.tsx` - 主页面
- `components/` - 各个区块组件
- `dist/` - 已构建的静态文件（可直接部署）
