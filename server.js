const express = require('express');
const app = express();

// 托管当前目录的所有静态文件（index.html、home.html 都能正常访问）
app.use(express.static('.'));

// 处理根路径请求，直接返回 index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// 端口必须用 Railway 提供的环境变量，不能写死
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});