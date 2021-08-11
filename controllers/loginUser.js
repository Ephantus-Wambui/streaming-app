const bcrypt = require('bcrypt')
const User = require('../models/Users')

module.exports = (req, res) => {
    const { email, pwd } = req.body;

    User.findOne({email:email}, (error,user) => {
        if (user) {
            bcrypt.compare(pwd, user.pwd, (error,same)=>{
                if(same) {
                    res.redirect('/')
                }
                else {
                    res.redirect('/auth/login')
                }
            })
        }
        else {
            res.redirect('/auth/login')
        }
    })
}
