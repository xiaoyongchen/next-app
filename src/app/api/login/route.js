// import { NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';
// fetch('https://example.com/api/login', { method: 'POST' )}) 自动加载这个POST请求

// // 这是一个服务器端的临时数据库
// const users = [
//   { id: 1, username: 'testuser', passwordHash: '$2b$10$T6q99C6N8Z9Y0n2pG6X5fOQ2c7z1N8M7C4e2v8r7h8s5s4a8' },
// ];

// export async function POST(request) {
//   try {
//     const { username, password } = await request.json();

//     // 1. 在服务器上查找用户
//     const user = users.find(u => u.username === username);
//     if (!user) {
//       return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 });
//     }

//     // 2. 验证密码（服务器端操作）
//     const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
//     if (!isPasswordValid) {
//       return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 });
//     }

//     // 3. 生成 JWT Token（服务器端操作，使用私钥）
//     const secret = process.env.JWT_SECRET || 'your-secret-key';
//     const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1h' });

//     // 4. 将 Token 发送回客户端
//     return NextResponse.json({ token });
//   } catch (error) {
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//   }
// }
