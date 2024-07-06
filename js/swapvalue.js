// obj1
const student = {name: "Manish", age: 28};

// function to invert obj
function invertedobj(obj) {
    let newstudent = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newstudent[obj[key]] = key;
        }
    }
    return newstudent;
}

let printable = invertedobj(student);

console.log(printable);
