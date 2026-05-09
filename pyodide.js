let pyodide;export async function loadRuntime(){pyodide=await loadPyodide()}export async function runPython(code){return await pyodide.runPythonAsync(code)}
