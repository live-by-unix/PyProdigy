import {problems} from './problems.js'
import {loadRuntime} from './pyodide.js'
import {validateProblem} from './validator.js'
import {renderProblem,setOutput,setCoins} from './ui.js'
import {getCoins,addCoin} from './storage.js'
import {setupAuth} from './auth.js'
let currentProblem
function nextProblem(){currentProblem=problems[Math.floor(Math.random()*problems.length)];renderProblem(currentProblem)}
async function initialize(){setOutput('Loading Pyodide...');await setupAuth();await loadRuntime();setCoins(getCoins());nextProblem();setOutput('PyProdigy ready',true)}initialize();document.getElementById('runBtn').addEventListener('click',()=>setOutput('Run mode coming soon',true));document.getElementById('hintBtn').addEventListener('click',()=>setOutput(currentProblem.hint,true));document.getElementById('checkBtn').addEventListener('click',async()=>{const code=document.getElementById('editor').value;setOutput('Running tests...');const result=await validateProblem(currentProblem,code);if(result.success){const coins=addCoin();setCoins(coins);setOutput(`✅ ${result.message}\n+1 PyCoin`,true);setTimeout(()=>nextProblem(),1000)}else{setOutput(`❌ ${result.message}`)}})
