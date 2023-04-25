const dataSource = require("../utils").dataSource;
const Skill = require("../entity/Skill");

module.exports = {
    create: (req, res) => {
        dataSource
        .getRepository(Skill)
        .save(req.body)
        .then(() => {
            res.send("Created Skill");
        })
        .catch(() => {
            res.send("Error while creating Skill");
        });
    },
    read: (req, res) => {
        dataSource
        .getRepository(Skill)
        .find()
        .then((data) => {
            res.send(data);
        })
        .catch(() => {
            res.send("Error while fetching Skills");
        })
    },
    update: async (req, res) => {
        try {
            const id = req.params.id;

            await dataSource.getRepository(Skill).update(id, req.body);

            res.send("Skill updated");
        } catch (e) {
            console.error(e);
            res.send("Error updating Skill");
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;

            await dataSource.getRepository(Skill).delete(id);

            res.send("Skill deleted");
        } catch (e) {
            console.error(e);
            res.send("Error deleting Skill");
        }
    },
};