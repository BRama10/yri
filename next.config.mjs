/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
    async redirects() {
        return [
          // Basic redirect
          {
            source: '/',
            destination: 'https://youthresearchinitiative.org',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
