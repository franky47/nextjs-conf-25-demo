/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: true,
  transpilePackages: ['@root/ui'],
  serverExternalPackages: ['better-sqlite3'],
}

export default nextConfig
