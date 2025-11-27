// const name=document.getElementById("name")
// const dept=document.getElementById("dept")
// const email=document.getElementById("email")

// const addBtn=document.getElementById("addEmpBtn")
// const BASE_URL = "/api/employees/"
// addBtn.addEventListener(()=>{
//     const nameValue=name.value.trim().toLowerCase()
//     const deptValue=name.value.trim().toLowerCase()
//     const emailValue=name.value.trim().toLowerCase()
//     const emp={
//         name:nameValue,
//         dept:deptValue,
//         email:emailValue
//     }
//     fetch(BASE_URL+"create",{
//         method:"POST",
//        body: formData,
//         headers: {
//             "X-CSRFToken": getCookie("csrftoken") // required in Django
//         }

//     }).then((res)=>res.json()).then(data=>{
//         alert(data.message)
//     })
// })