import { problems } from "./problems.js"
import { setupAuth } from "./auth.js"
import { loadRuntime, runCode } from "./pyodide.js"
import { renderProblem, setOutput, setCoins, setStreak } from "./ui.js"
import { validate } from "./validator.js"
import { getCoins, addCoin, getStreak, increaseStreak } from "./storage.js"

let currentProblem

function randomProblem(){

return problems[Math.floor(Math.random()*problems.length)]

}

function nextProblem(){

currentProblem=randomProblem()

renderProblem(currentProblem)

}

async function init(){

setOutput("Loading runtime...")

await setupAuth()

await loadRuntime()

setCoins(getCoins())

setStreak(getStreak())

nextProblem()

setOutput("PyProdigy Ready",true)

}

init()

document.getElementById("hintBtn").onclick=()=>{

setOutput(currentProblem.hint,true)

}

document.getElementById("skipBtn").onclick=()=>{

nextProblem()

setOutput("Problem skipped",true)

}

document.getElementById("runBtn").onclick=async()=>{

try{

const code=document.getElementById("editor").value

await runCode(code)

setOutput("Code executed successfully",true)

}catch(error){

setOutput(error.toString())

}

}

document.getElementById("checkBtn").onclick=async()=>{

const code=document.getElementById("editor").value

if(!code.includes("def solve")){

setOutput("You must define solve()",false)

return

}

setOutput("Running stress tests...")

const result=await validate(currentProblem,code)

if(result.success){

const coins=addCoin()

const streak=increaseStreak()

setCoins(coins)

setStreak(streak)

setOutput(`✅ ${result.message}

+1 PyCoin`,true)

setTimeout(()=>{

nextProblem()

},1200)

}else{

setOutput(`❌ ${result.message}`)

}

}