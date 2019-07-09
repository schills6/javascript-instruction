//let row = "\n # # # #";
//let otherRow = "\n# # # # ";
//for (let size = 0; size <=10; size++) {
    //if (size % 2 == 0){
      //  console.log(row);
    //}
    //else {
      //  console.log(otherRow);
    //}
//}

let size = 41;
let str ="";
for (let y=1;y<=size;y++) {
  for (let x=1;x<=size;x++) {
    if((y+x)%2==0){
      str +=" ";
    } else {
      str +="#";
    }
  }
  str+="\n";
}
console.log(str);