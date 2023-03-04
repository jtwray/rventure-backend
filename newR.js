let doyByMonthHash={}

let list=[
       0, 31 ,59, 90, 120, 151, 181 ,212,  243, 273, 304 ,334 
]

for(let i = 1; i<13;i++){
  doyByMonthHash[i]=list[i-1]
}

console.log(doyByMonthHash)

const getDayNumberofYear=function(d){
let day,month,year;
let DateSplit=d.split('/');
day=DateSplit[2];
month=DateSplit[1];


 let numberdays=doyByMonthHash[Number(month)]+Number(day);

  return numberdays
 }



 let n1 = getDayNumberofYear('2021/12/14')
 let n2 = getDayNumberofYear('2021/01/14')
 let n3 = getDayNumberofYear('2021/04/04')
 let n4 = getDayNumberofYear('2021/10/04')
 let n5 = getDayNumberofYear('2021/10/23')

 console.log({n1},{n2},{n3},{n4},{n5})