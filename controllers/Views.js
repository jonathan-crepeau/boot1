

const test = (req, res) => {
    res.status(200).json({
        status: 200,
        message: "Test View Route successful.."
    });
}

module.exports = {
    test
};