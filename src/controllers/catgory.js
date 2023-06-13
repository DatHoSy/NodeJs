let cateList = [
    {
        id: 1,
        nameCategory: 'Laptop',
        status: 1
    },
    {
        id: 2,
        nameCategory: 'Smart Phone',
        status: 1
    },
    {
        id: 3,
        nameCategory: 'Air',
        status: 1
    },
    {
        id: 4,
        nameCategory: 'Pan',
        status: 1
    }
];
function getAllCategory (req, res) {
    res.send(cateList);
}

function getCategoryById (req, res) {
    let cateId = req.params.cateId;
    let category = cateList.filter(cate => cate.id == cateId);
    res.send(category);
}
module.exports = { getAllCategory, getCategoryById };