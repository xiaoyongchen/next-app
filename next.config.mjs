/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    // Will be available on both server and client
    // API_URL 按道理是不应该访问的，但是publicRuntimeConfig 在运行时有意安全的访问。打破壁垒。
    // apiUrl: process.env.API_URL,
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    // dbPassword: process.env.DB_PASSWORD,
  },
};

export default nextConfig;
