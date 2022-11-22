module.exports = {
  title: "Записките на Иван",
  description:
    "Тези, които търсят истината, винаги трябва да бъдат предпочитани пред онези, които твърдят, че вече са я открили",
  lang: "bg",
  locale: "bg",
  dir: "ltr",
  domain: "elvendrim.xyz",
  url: process.env.URL || "http://localhost:8080",
  repo: "https://github.com/elvenbrill/elvenbrill.xyz",
  icons: {
    icon: "/assets/icons/icon.svg",
    favicon: "/assets/icons/favicon.ico",
    touchicon: "/assets/icons/apple-touch-icon.png",
  },
  endpoint: {
    auth: "https://indieauth.com/auth",
    token: "https://tokens.indieauth.com/token",
    micropub: "",
    microsub: "",
    webmention: "https://webmention.io/elvendrim.xyz/webmention",
    pingback: "https://webmention.io/elvenbrill.xyz/xmlrpc",
  },
  social: {
    github: "https://github.com/elvenbrill",
    mastodon: "https://mastodon.world/@elvenbrill",
    pixelfed: "https://pixelfed.social/elvenbrill",
  },
};
