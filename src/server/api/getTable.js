
module.exports = function (app, Tables) {
    app.get('/', (req, res) =>
        Tables.findAll().then(tables => {
            console.log(tables);
            
            res.sendStatus(200);
        })
        .catch(err => console.log(err)));
}