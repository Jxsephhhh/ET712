const helper = function(data){
    return `${data} is logged in!`
}

const id = function(id){
    return `id = ${id}`
}

const email = function(e){
    return `email address = ${e}`
}

module.exports.helper = helper
module.exports.id = id
module.exports.email = email