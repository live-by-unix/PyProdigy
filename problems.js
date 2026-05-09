export const problems = [
{
title:"Sum Array",
difficulty:"Beginner",
category:"Arrays",
description:"Return the sum of all numbers in a list.",
example:"Input: [1,2,3]\nOutput: 6",
hint:"Use sum(nums)",
starterCode:`def solve(nums):
    pass`,
generateTest(){
const nums=[]
for(let i=0;i<8;i++){
nums.push(Math.floor(Math.random()*100))
}
return nums
},
solution(nums){
return nums.reduce((a,b)=>a+b,0)
}
},

{
title:"Reverse String",
difficulty:"Beginner",
category:"Strings",
description:"Return the reversed version of a string.",
example:"Input: cat\nOutput: tac",
hint:"Try slicing.",
starterCode:`def solve(text):
    pass`,
generateTest(){
const chars="abcdefg"
let text=""
for(let i=0;i<10;i++){
text+=chars[Math.floor(Math.random()*chars.length)]
}
return text
},
solution(text){
return text.split("").reverse().join("")
}
},

{
title:"Largest Number",
difficulty:"Intermediate",
category:"Arrays",
description:"Return the largest number in a list.",
example:"Input: [1,9,2]\nOutput: 9",
hint:"Track the largest value.",
starterCode:`def solve(nums):
    pass`,
generateTest(){
const nums=[]
for(let i=0;i<15;i++){
nums.push(Math.floor(Math.random()*1000))
}
return nums
},
solution(nums){
return Math.max(...nums)
}
}
]
