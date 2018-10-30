
let users = [
    {id: 1, name: "irfan", email: "irfan@nextgeni.com"},
    {id: 2, name: "raza", email: "raza@nextgeni.com"},
    {id: 3, name: "muneeb", email: "muneebjs@nextgeni.com"},
    {id: 4, name: "ameen", email: "ameen@nextgeni.com"},
    {id: 5, name: "haider", email: "haider@nextgeni.com"},
];


exports.users = (req, res) => {
    if(users.length > 0){
        res.status(200);
        res.json(users);
    }
    res.status(404);
    res.json({"message": "no result found"});
}

exports.user = (req, res) => {
    user = users.filter(u => u.id == parseInt(req.params.id));
    if(user.length > 0){
        res.status(200);
        res.json(user);
    }
    res.status(404);
    res.json({"message": "no result found"});
}