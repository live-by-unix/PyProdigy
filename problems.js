export const problems = [

{
id:"sum_array",
title:"Sum Array",
difficulty:"Beginner",
category:"Arrays",
description:"Return the sum of all numbers in a list.",
example:"Input: [1,2,3]\nOutput: 6",
hint:"Use Python's sum() function.",
starterCode:`def solve(nums):
    return sum(nums)`,
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
id:"reverse_string",
title:"Reverse String",
difficulty:"Beginner",
category:"Strings",
description:"Return the reversed version of a string.",
example:"Input: cat\nOutput: tac",
hint:"Try string slicing.",
starterCode:`def solve(text):
    return text[::-1]`,
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
id:"largest_number",
title:"Largest Number",
difficulty:"Intermediate",
category:"Arrays",
description:"Return the largest number in a list.",
example:"Input: [1,9,2]\nOutput: 9",
hint:"Use max(nums).",
starterCode:`def solve(nums):
    return max(nums)`,
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