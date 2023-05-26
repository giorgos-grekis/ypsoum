/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [process.env.NEXT_PUBLIC_DRUPAL_URI]
    }
}

module.exports = nextConfig
