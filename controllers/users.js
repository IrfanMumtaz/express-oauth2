const User = require("../models").User;


exports.index = (req, res) => {

    return User.findAll()
    .then(users => res.status(200).send(users))
    .catch(errors => res.status(400).send(errors));
}

exports.view = (req, res) => {
    return User.findById(parseInt(req.params.id))
    .then(user => {
        if(!user){
            return res.status(400).send({"message": "not found"});
        }
        return res.status(200).send(user);
    })
    .catch(errors => res.status(400).send(errors));
}

exports.store = (req, res) => {
    return User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    .then(user => res.status(201).send(user))
    .catch(error => res.status(400).send(error));

}

exports.update = (req, res) => {
    return User.findById(parseInt(req.params.id))
    .then(user => {
        if(!user){
            return res.status(400).send({"message": "no user found"})
        }
        return user.update({
            name: req.body.name || user.name,
            email: req.body.email || user.email,
            password: req.body.password || user.password
        })
        .then(() => res.status(200).send(user))
        .catch(errors => res.status(400).send(errors))
    })
    .catch(errors => res.status(400).send(errors));
}

exports.delete = (req, res) => {
    return User.findById(parseInt(req.params.id))
    .then(user => {
        if(!user){
            return res.status(400).send({"message": "no user found"})
        }
        return user.destroy()
        .then(() => res.status(204).send({"message": "Successfully Deleted"}))
        .catch(errors => res.status(400).send(errors))
    })
    .catch(errors => res.status(400).send(errors));
}