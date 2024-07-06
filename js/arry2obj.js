// 2d object
const object = [
  ["rahul", "burger"],
  ["aman", "namkeen"],
  ["sanam", "hungry"],
];

// func to convert 2d arry into object


function arry2obj(arr) {
  const obj = {};
  arr.forEach(item => {
    
    const[key,value]=item;
    obj[key]=value;

  });

  return obj; 
}

const ans = arry2obj(object);

console.log(ans);