const now = new Date();
console.log(now);

console.log(now.toLocaleString('ja-JP', {
    year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
}));

const nextWeek = new Date(now);
nextWeek.setDate(now.getDate() + 7);
console.log(nextWeek.toLocaleString('ja-JP', {
    year: 'numeric', month: '2-digit', day: '2-digit'
}));