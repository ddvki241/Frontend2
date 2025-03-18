//Task 1.4
function calcTask4Value(t){
 return ((2.3*t+8)/(Math.abs(2*Math.cos(t)))+1)
}
console.log("Task 4.1");
for(let t=0; t<=6.5; t+=1.1){
	z=calcTask4Value(t)
	console.log(z);
}
console.log("Task 4.2");
t=0.4
for(let i=0;i<7;i++){
	z=calcTask4Value(t)
	t+=0.9;
	console.log(z);
}
//Task 1.5
console.log("Task 5.1");
let S=0;
i=4;
k=11;
function calcTaskValue51(n){
return ((n)/(Math.pow(n,2)+5*n+6))	
}
for(let n=i; n<=k; n++){
	S+=calcTaskValue51(n)
}
console.log(S);
function calcTaskValue52(l){
return (Math.pow(-1,l))*(3*l-4)/(Math.pow(l,2)+7)
}
console.log("Task 5.2");
let P=1
for(l=11; l<=17; l++){
	P*=calcTaskValue52(l);
}
console.log(P);
//Task 2
let X = [-2.3, 4.0, -8.9, 6.3, 4.9, -7.8, -6.5, 5.1, 3.8, -4.3, -5.1, 7.2];
let sum = 0;
for (let i = 1; i < X.length; i += 2){
    if (X[i] < 0) {
        sum += X[i];
    }
}
console.log("Сума від’ємних елементів на парних місцях:", sum);
//Task 4
let groups=[
 { membersCount:"15 студентів",
  course:"1 курс",
  faculty:"IIТ",
  groupCode:"КІ-24-1",
 },
 
 { membersCount:"8 студентів",
  course:"2 курс",
  faculty:"IIТ",
  groupCode:"МІТ-23-1К",
 },
 
 { membersCount:"20 студентів",
  course:"4 курс",
  faculty:"IIТ",
  groupCode:"ІСТ-21-1",
 }
];
//Task 5
for (let i=0; i<groups.length;i++){
	console.log(`${groups[i].groupCode}(${groups[i].course}), ${groups[i].faculty}, ${groups[i].membersCount}`)
}
