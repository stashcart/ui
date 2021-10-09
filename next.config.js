/** @type {import('next').NextConfig} */

const withImages = require('next-images');

module.exports = withImages({
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
});
