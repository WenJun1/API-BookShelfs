
const fs = require('fs')
const os = require('os')

function save(file, obj, callback){
    return fs.appendFile(file, JSON.stringify(obj) + os.EOL, callback)
}

function read(file, callback){
    return fs.readFile(file, function(err, data){
        if(err) return callback(err)
        return callback(null, data.toString())
    })
}

function readRows(file, callback){
    return read(file, function(err, text){
        if(err) return callback(err)
        const lines = text.split(os.EOL)
        const models = lines.splice(0, lines.length-1)
            .map(line => JSON.parse(line))
            console.log(lines)
        callback(null, models)
    })
}

module.exports = { 
    save,
    readRows
}