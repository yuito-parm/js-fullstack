const s = "ハリネズミ,フクロウ,フェネック";
const arr = s.split(",");
console.log(arr);

const joined = arr.join("&");
console.log(joined);

const replaced = joined.replace("ハリネズミ", "アルマジロ");
console.log(replaced);

console.log(replaced.toUpperCase());//大文字化
console.log(replaced.toLowerCase());//小文字化