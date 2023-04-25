const dataSource = require("../utils").dataSource;
const Wilder = require("../entity/Wilder");

module.exports = {
    create: (req, res) => {
        dataSource
        .getRepository(Wilder)
        .save(req.body)
        .then(() => {
            res.send("Created Wilder");
        })
        .catch(() => {
            res.send("Error while creating wilder");
        });
    },
    read: (req, res) => {
        dataSource
        .getRepository(Wilder)
        .find()
        .then((data) => {
            res.send(data);
        })
        .catch(() => {
            res.send("Error while fetching wilders");
        })
    },
    update: async (req, res) => {
        try {
            const id = req.params.id;

            await dataSource.getRepository(Wilder).update(id, req.body);

            res.send("wilder updated");
        } catch (e) {
            console.error(e);
            res.send("Error updating Wilder");
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;

            await dataSource.getRepository(Wilder).delete(id);

            res.send("Wilder deleted");
        } catch (e) {
            console.error(e);
            res.send("Error deleting Wilder");
        }
    },
};