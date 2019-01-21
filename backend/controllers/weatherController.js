const { Configuration } = require("../../config");
const DarkSky = require("dark-sky");
const darksky = new DarkSky(Configuration.Weather.SecretKey);

module.exports.weatherController = async (req, res, next) => {
  if (
    req.get("host") !== "homepage.olivrb.xyz" &&
    req.get("host") !== "localhost:3220"
  )
    return res.status(403).end();
  darksky
    .latitude(req.body.lat)
    .longitude(req.body.long)
    .units("auto")
    .language("en")
    .get()
    .then(e => {
      res.json(e);
    });
};
