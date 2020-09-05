const sharp = require(`sharp`)
const glob = require(`glob`)
const fs = require(`fs-extra`)
// const matches = glob.sync(`src/images/tour-images/**/*.{png,jpg,jpeg}`)
const matches = glob.sync(`tour-images/**/*.{png,jpg,jpeg,JPG}`)
const MAX_WIDTH = 1280
const MAX_HEIGHT = 720
const QUALITY = 70

Promise.all(
  matches.map(async match => {
    const stream = sharp(match)
    const info = await stream.metadata()
    if (info.width < MAX_WIDTH) {
      return
    }
    const optimizedName = match.replace(
      /(\..+)$/,
      (match, ext) => `-optimized${ext}`
    )
    await stream
      .rotate()
      .resize({
        width: MAX_WIDTH,
        height: MAX_HEIGHT,
        position: "center",
      })
      .jpeg({ quality: QUALITY })
      .toFile(optimizedName)
    return fs.rename(optimizedName, match)
  })
)
