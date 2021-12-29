var myCar = {
    make :'Ford',
model :'Mustag',
year :1996
};



// document.write(`${this.myCar.make} ${this.myCar.model} ${this.myCar.make}`);
function showProps(ojb, objName){

    let result =``;

    for (let i in obj){

        if (obj.hasOwnProperty(i)){
            result += `${objName}.${i} = ${obj[i]}\n`;

        }

    }
    return result;
}