export function renderProblem(problem){
document.getElementById("title").textContent=problem.title
document.getElementById("difficulty").textContent=problem.difficulty
document.getElementById("category").textContent=problem.category
document.getElementById("description").textContent=problem.description
document.getElementById("example").textContent=problem.example
document.getElementById("editor").value=problem.starterCode
}

export function setOutput(text,success=false){
const output=document.getElementById("output")
output.textContent=text
output.style.color=success?"#4ade80":"#f87171"
}

export function setCoins(value){
document.getElementById("coins").textContent=value
}

export function setStreak(value){
document.getElementById("streak").textContent=value
}
