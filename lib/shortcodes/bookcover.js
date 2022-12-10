const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes = "100vw") {
  if (alt === undefined) {
    throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
  }

  let metadata = await Image(src, {
    widths: [160],
    formats: ["webp", "jpeg"],
    hashLength: 10,
    filenameFormat: function (hash, src, width, format, options) {
      return `${hash}-${width}w.${format}`;
    },
    outputDir: "_site/assets/img/covers",
    urlPath: "/assets/img/covers",
  });

  let lowsrc = metadata.jpeg[0];
  let highsrc = metadata.jpeg[metadata.jpeg.length - 1];

  return `<figure><picture>
    ${Object.values(metadata)
      .map((imageFormat) => {
        return `<source type="${imageFormat[0].sourceType}" srcset="${imageFormat
          .map((entry) => entry.srcset)
          .join(", ")}" sizes="${sizes}">`;
      })
      .join("\n")}
      <img
        src="${lowsrc.url}"
        width="${highsrc.width}"
        height="${highsrc.height}"
        alt="${alt}"
        loading="lazy"
        decoding="async">
    </picture><figcaption>${alt}</figcaption></figure>`;
}
module.exports = imageShortcode;
