import { runCode } from "./pyodide.js"

export async function validate(problem,code){

try{

await runCode(code)

for(let i=0;i<25;i++){

const input=problem.generateTest()

const expected=problem.solution(input)

globalThis.__input=input

const result=await runCode("solve(__input)")

if(JSON.stringify(result)!==JSON.stringify(expected)){
return{
success:false,
message:`Expected ${JSON.stringify(expected)} but got ${JSON.stringify(result)}`
}
}

}

return{
success:true,
message:"All tests passed"
}

}catch(error){

return{
success:false,
message:error.toString()
}

}

}
