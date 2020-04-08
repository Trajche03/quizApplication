const correctAnswers = ["A","B","A","A","A"]
const form = document.querySelector(".novdiv")
const result = document.querySelector(".result")

form.addEventListener("submit", e => {
  e.preventDefault()

    let score = 0

     let sada = [form.querySelector('input[name="q1"]:checked').value, form.querySelector("input[name='q2']:checked").value, form.querySelector("input[name='q3']:checked").value,  form.querySelector("input[name='q4']:checked").value, form.querySelector("input[name='q5']:checked").value]
    
    sada.forEach((answer, index ) => {
       
        if(answer === correctAnswers[index]){
        score += 20
    }

    })
 
scrollTo(1,1)

result.classList.remove("d-none")

let output= 0
const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`
    if(output === score) {
        clearInterval(timer)
    } else {
        output++
    }
},10)
    

})

