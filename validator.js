import { runCode, getPyodide } from "./pyodide.js"

export async function validate(problem,code){

try{

await runCode(code)

const pyodide=getPyodide()

for(let i=0;i<30;i++){

const input=problem.generateTest()

pyodide.globals.set("TEST_INPUT", input)

const expected=problem.solution(input)

const result=await runCode("solve(TEST_INPUT)")

if(JSON.stringify(result)!==JSON.stringify(expected)){

return{
success:false,
message:`Test Failed

Input:
${JSON.stringify(input)}

Expected:
${JSON.stringify(expected)}

Received:
${JSON.stringify(result)}`
}

}

}

return{
success:true,
message:"All stress tests passed"
}

}catch(error){

return{
success:false,
message:error.toString()
}

}

}