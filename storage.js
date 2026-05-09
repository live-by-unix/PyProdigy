export function getCoins(){
return Number(localStorage.getItem("pycoins") || 0)
}

export function addCoin(){
const coins=getCoins()+1
localStorage.setItem("pycoins",coins)
return coins
}

export function getStreak(){
return Number(localStorage.getItem("streak") || 0)
}

export function increaseStreak(){
const streak=getStreak()+1
localStorage.setItem("streak",streak)
return streak
}