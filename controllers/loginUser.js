const bcrypt = require('bcrypt')
const User = require('../models/Users')

module.exports = (req, res) => {
    const { email, password } = req.body;

    User.findOne({email:email}, (error,user) => {
        if (user) {
            bcrypt.compare(password, user.password, (error,same)=>{
                if(same) {
                    req.session.userId = user._id
                    res.redirect('/')
                }
                else {
                    return res.redirect('/login')
                }
            })
        }
        else {
            console.log(error)
            res.redirect('/login')
        }
    })
}
