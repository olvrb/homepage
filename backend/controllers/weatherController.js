const DarkSky = require("dark-sky");
const darksky = new DarkSky("795ac57157682784d1939a2db6ca21c0");

module.exports.weatherController = async (req, res, next) => {
    console.log(req.body);

    const forecast = await darksky
        .latitude(req.body.lat)
        .longitude(req.body.long)
        .units("auto")
        .language("en")
        .get()
        .then((e) => {
            console.log(e);
            res.json(JSON.stringify(e));
        });
};
