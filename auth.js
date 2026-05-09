export async function setupAuth(){

const auth=document.getElementById("auth")

try{

await Clerk.load()

if(Clerk.user){

auth.innerHTML=`
<div class="pill">
👤 ${Clerk.user.firstName || "Player"}
</div>
`

}else{

const button=document.createElement("button")

button.textContent="Sign In"

button.onclick=()=>{

window.location.href=`https://accounts.clerk.dev/sign-in?redirect_url=${encodeURIComponent(window.location.href)}`

}

auth.appendChild(button)

}

}catch(error){

auth.innerHTML=`
<div class="pill">
Guest Mode
</div>
`

}

}