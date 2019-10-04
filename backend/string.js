const stringsArray = require("./stringsArray");

class String{
    static getAllStrings(){
        return stringsArray;
    }

    static addString(string){
        stringsArray.push(string);
        return stringsArray;
    }
}

module.exports = String;