const connection = require('../database/connection');

module.exports = {
    async addNewProfessor(req, res) {
        const { name } = req.body;

        await connection('professor')
            .insert({ name });

        return res.json({ message: 'Deu certo' });
    },

    async viewAllProfessor(req, res) {
        const response = await connection('professor')
            .select('*');

        return res.json(response);
    }

};