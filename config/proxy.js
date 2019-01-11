const url = "http://localhost:3000"

module.exports = {
    proxy:{
        '/apis':{
            target: 'http://localhost:3000',
            secure: false,
            changOrigin: true,
            pathRewrite: {
                '^/apis':''
            }
        }
    }
}