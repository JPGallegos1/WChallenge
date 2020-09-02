// This is the way how's work the environment variables' flow in Nextjs:
// .env.local -> next.config.js -> client bundle
// Also, I implemented it as constants too.
// More info: https://medium.com/frontend-digest/environment-variables-in-next-js-9a272f0bf655

module.exports = {
  env: {
    API: process.env.NEXT_PUBLIC_BASE_URL,
    LOGIN_ENDPOINT: process.env.NEXT_PUBLIC_LOGIN_ENDPOINT,
    TECHS_ENDPOINT: process.env.NEXT_PUBLIC_TECHS_ENDPOINT
  }
};
