let pyodide

export async function loadRuntime(){
pyodide=await loadPyodide()
}

export async function runCode(code){
return await pyodide.runPythonAsync(code)
}
