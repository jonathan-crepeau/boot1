const ROOT = `${__dirname}/../`;

const test = (req, res) => {
    res.status(200).json({
        status: 200,
        message: "Test View Route successful.."
    });
}

const root = (req, res) => {
    res.sendFile('/views/index.html', {
        root: ROOT
    });
}

module.exports = {
    test,
    root
};