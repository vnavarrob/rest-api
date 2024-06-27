const globalMw = (req, res, next) => {
    console.log('this is a global mw');

    next()
}

const localMw = (req, res, next) => {
    console.log('this is a local mw');
    if (Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: 'The request cannot be empty' });
    }
    next();
}

module.exports = { globalMw, localMw };