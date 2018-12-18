module.exports.homepageController = async (req, res, next) => {
    res.render("index", {
        weather: "placeholder"
    });
};
