module.exports = {
    get_users: (req, res) => {
        req.app.get('db').fetch_users().then(users => {
            res.status(200).send(products);
        }).catch((err) => {console.log(err)})
    },
}