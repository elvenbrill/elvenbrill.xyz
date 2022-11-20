module.exports = {
  url: process.env.URL || "http://localhost:8080",
  locale: "bg",
  dir: "ltr",
  title: "Записките на Иван",
  description:
    "Тези, които търсят истината, винаги трябва да бъдат предпочитани пред онези, които твърдят, че вече са я открили",
  repo: "https://github.com/elvenbrill/elvenbrill.xyz",
  icons: {
    touchicon: "/assets/icons/apple-touch-icon.png",
    icon: "/assets/icons/icon.svg",
    favicon: "/assets/icons/favicon.ico",
  },
  endpoint: {
    auth: "https://indieauth.com/auth",
    token: "https://tokens.indieauth.com/token",
    micropub: "",
    microsub: "",
    webmention: "https://webmention.io/elvendrim.xyz/webmention",
    pingback: "https://webmention.io/elvenbrill.xyz/xmlrpc",
  },
  author: {
    name: "elvenbrill",
    url: "https://elvenbrill.xyz",
    email: "elvenbrill@pm.me",
    github: "https://github.com/elvenbrill",
    mastodon: "https://mastodon.world/@elvenbrill",
    avatar: "/assets/icons/avatar.png",
  },
};
