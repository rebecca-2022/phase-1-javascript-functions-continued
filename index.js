// code your solution here
function saturdayFun(activity = "roller-skate"){
    return (`This Saturday, I want to ${activity}!`);
}
console.log(saturdayFun(activity = "attend church service"));
function mondayWork(activity = "go to the office"){
    return (`This Monday, I will ${activity}.`);
};
console.log(saturdayFun(activity = "attend my coding lessons"));
function wrapAdjective(initialized = "*"){
    return function(pipeInitial = "special"){
        return `You are ${initialized}${pipeInitial}${initialized}!`;
    }
}
wrapAdjective()();