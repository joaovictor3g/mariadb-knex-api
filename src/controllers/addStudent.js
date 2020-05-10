const connection = require('../database/connection');

module.exports = {
    async addStudent(req, res) {
        const { name } = req.body;

        await connection('aluno')
            .insert({ name });

        return res.json({ message: 'deu certo' });
    
    },
    async viewAllStudents(req, res) {
        const response = await connection('aluno')
                    .select('id', 'name');

        return res.json(response.data);
    }
};