function getAllBooks (req, res) {
    res.json([
        {name: 'Tieng chim hot', price : 3000},
        {name: 'Quy luat vu tru', price : 1500}
    ])
}
module.exports = { getAllBooks };
