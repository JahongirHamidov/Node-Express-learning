module.exports = {
    auth: function (req,res,next){
        console.log('authentification...')
        next()
    },
    log: function (req,res,next){
        console.log('log yozildi...')
        next()
    }
    
} 
