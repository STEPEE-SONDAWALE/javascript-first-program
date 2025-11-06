// *lengh 
// var n=["aa","bb","cc"];
// let b=n.length;
// document.write(b);

//to string
// const k=[55,66,44,99];
// let h=k.toString();
// document.write(h)

//at
// const m=[55,66,22,88,55,44];
// let g=m.at(5);
// document.write(g);

//pop-thi delete the lat element from the array
// const a=['mango','banana','apple','orange'];
// let h=a.pop();
// document.write(h);

//push
// const a=['mango','banana','apple','orange'];
// let h=a.push('kiwi');
// document.write(h);

     
// slice
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(0, 4);
// document.write(citrus);

include()
const array=[1,2,3,4,5,6,7,8,9];
let a=array.includes(55);
if(a==true){
    document.write("yes present");
}
else{
    document.write("no present");
}

flatMap()
var arr1 = [1, 2, 3, 4];
var result = arr1.flatMap(x => [x, x * 20]);
document.write(result);