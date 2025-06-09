function divide(a, b) {
    if (b === 0)  {
        throw new Error("0で割り算できません!");
    }
    return a / b;
}

try {
    let result = divide(10, 0);
    console.log("割り算の結果" + result);
} catch (e) {
    console.log(e.message);
}