var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};
let sum=0;
for(let i in fruit){
    sum+=fruit[i];
}
console.log(sum);