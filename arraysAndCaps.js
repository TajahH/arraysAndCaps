let names = []
let capNames = []
console.log(names) //checking empty array
while (names == 0){
    names.push("Tajah")
}
console.log(names) //checking array has been filled

for (let i = 0; i < names.length; i++){
    let capitaliseArray = names[i].toUpperCase();
    capNames.push(capitaliseArray)
};
console.log(capNames) //checking new array has been filled
