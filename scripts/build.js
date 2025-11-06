// scripts/build.js
const fs = require('fs');
const { execSync } = require('child_process');

const environment = process.argv[2] || 'prod';

const envFiles = {
  sit: '.env.sit',
  uat: '.env.uat',
  prod: '.env.prod'
};

if (!envFiles[environment]) {
  console.error(`❌ 未知环境: ${environment}`);
  console.error('可用环境: sit, prod, dev');
  process.exit(1);
}

const sourceFile = envFiles[environment];
const targetFile = '.env.production';

// 检查源文件是否存在
if (!fs.existsSync(sourceFile)) {
  console.error(`❌ 环境文件不存在: ${sourceFile}`);
  process.exit(1);
}

try {
  // 复制环境文件
  fs.copyFileSync(sourceFile, targetFile);
  console.log(`✅ 已配置 ${environment} 环境`);
  
  // 执行构建
  console.log('🚀 开始构建...');
  execSync('next build', { stdio: 'inherit' });
  
  // 清理临时文件（可选）
  fs.unlinkSync(targetFile);
  console.log('✅ 构建完成');
  
} catch (error) {
  console.error('❌ 构建失败:', error);
  process.exit(1);
}