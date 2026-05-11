let name="Nischit"
let age=20
let college="KEC"
let semester=4;
let isStudent=true;
let subject=["DSA","OS","Electromagnetics","Numerical Methods","Data Communication"]

let student={
    name,
    age,
    college,
    semester,
    isStudent,
    subject
}
console.log(student)
const subjectMessage=(subject)=>"I am learning "+ subject + " in KEC"

console.log(subjectMessage("DSA"))
console.log(subjectMessage("OS"))
console.log(subjectMessage("Electromagnetics"))
console.log(subjectMessage("Numerical Methods"))
console.log(subjectMessage("Data Communication"))


subject.forEach(subj=>console.log(subjectMessage(subj)))
 
let result=semester>=5?"Senior student":"Junior student"
console.log(result)