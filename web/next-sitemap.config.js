const siteUrl = process.env.NEXT_PUBLIC_HOST;

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '*' }],
    additionalSitemaps: [`${siteUrl}/sitemap.xml`],
  },
};
