exports.makeJson=function(flag,mesage){
    var reponse=JSON.stringify({
        "flag":flag,
        "message":mesage
    });
    return reponse;
}