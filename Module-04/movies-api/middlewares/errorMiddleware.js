function logError (err, req, res, next) {
    console.log(err);
    next(err);
}

function handleError (err, req, res, next) {
    res.json({ error: err.message });
    res.status(err.status || 500);
}

module.exports = {
    logError, handleError
}
