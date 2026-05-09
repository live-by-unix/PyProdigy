export function getCoins(){return Number(localStorage.getItem('pycoins')||0)}export function addCoin(){const c=getCoins()+1;localStorage.setItem('pycoins',c);return c}
