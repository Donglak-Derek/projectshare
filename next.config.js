/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: {
    "Permissions-Policy": "interest-cohort=()",
  },
};

module.exports = nextConfig;
