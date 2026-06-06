// //CALLBACK
// function getUserdata(callback)
// {
//     console.log("Fetching data...........")
//     setTimeout(()=>{
//         const user={name :"Nischit", age: 20}
//         callback(user)}
//     ,2000)
// }
// getUserdata((user)=>
// {
//     console.log("User Data: ", user)
// })
// console.log("This runs while waiting")




//PROMISE
// function getStudent(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const success=true;
//             if(success)
//                 resolve({name:"Nischit",
//             age:20,
//         semester:4})
//         else
 //             reject("ERROR getting student data")

 //         },2000)
 //     })
 // }
 // getStudent()
 // .then(student=>console.log("Student: ",student))
// .catch(error=>console.log("ERROR:", error))



// //ASYNC AWAIT
// function getStudent()
// {
//     return new Promise((resolve)=>
//     {
//         setTimeout(()=>{
//             resolve({name:"Nischit",
//                 age:20,
//                 semester:4,
//                 college:"KEC"
//             })

//         },2000)
//     })
// }
// function getSubject(){
//     return new Promise((resolve)=>
//     {
//         setTimeout(()=>
//         { resolve(["OS","EM","NM","DSA"])

//         },1000)
//     })
// }
// function getMarks()
// {
//     return new Promise((resolve)=>
//     {
//         setTimeout(()=>{
//             resolve({OS:85, EM:90, NM:80, DSA:95})
//         },5000)
//     })

// }
// async function displayStudent()
// {
//     try{
//         console.log("Fetching Student data...........")
//         const student=await getStudent()
//         console.log("Student Data:",student)
//         const subject=await getSubject()
//         console.log("SUbjects: ", subject)
//         const marks=await getMarks()
//         console.log("Makrs on each subject: ", subject)
//         console.log("Profile completed.")
//     }
//     catch(error)
// {
//     console.log("ERROR:", error)
// }
// }
// displayStudent()



// function loginUser(password)
// {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(password==="nischit123")
//                 resolve({name:"Nishcit", role:"developer"})
//             else
//                 reject("Invalid password")
//         },1000)
//     })
// }
// async function login(password)
// {
//     try{
//         console.log("Logging in.........")
//         const user=await loginUser(password)
//         console.log("User login successful")

//     }
//     catch(error)
//     {
//         console.log("Login failed: INvalid password")
//     }
// }
// login("nischit123")
// login("123")





function getSubject()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(["OS","EM","NM","DSA","Insturmenst"])
        },1000)
    }
    )
}
function getStudent()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({name:"Nischit", 
                age:20,
                semester:4,
                college:"KEC"
            })
        },1000)
    })
}
async function displayStudent()
{
    try{
        console.log("Fetching Student's data.............")
        const [subject, student]=await Promise.all([
         getSubject(),
        getStudent()
        ])
        console.log("Subjects in 4 semester: ",subject)
        console.log("Student's information:",student)
    }
    catch(error)
    {
        console.log("ERROR:", error)
    }
}
displayStudent()
function loginUser(password)
{
    return new Promise((resolve, reject)=>
    {
        setTimeout(()=>
        {
            if(password==="nischit123")
                resolve({name:"Nischit", roll:"Developer"})
            else
                reject("Invalid password")
        },1000)
    })
}
async function login(password)
{
    try{
        const user=await loginUser(password)
        console.log("Welcome Nischit!")
    }
    catch(error)

    {
        console.log("Try again")
    }
}
login("hello")
login("nischit123")