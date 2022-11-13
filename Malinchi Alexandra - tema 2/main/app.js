function addTokens(input, tokens){
    if (typeof input !=='string'){
        throw Error('Invalid input')
    }
    else if(input.length<6){
        throw Error('Input should have at least 6 characters')
    }
    for(var i=0;i<tokens.length;i++){
        if(typeof((tokens[i].tokenName))!=='string'){
            throw Error('Invalid array format')
        }
    }
    if(input.includes('...')!=true){
        return input
    }
    for(let i=0;i<tokens.length;i++){
        let x=tokens[i]["tokenName"]
        let y="${"+x+"}"
        let z="..."
        let poz=input.indexOf('...')
        if(poz!==-1){
            input=input.replace(z,y)
        }
    }
    return input
}

const app = {
    addTokens: addTokens
}

module.exports = app;