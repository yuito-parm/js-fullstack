function waitAndHello() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Hello, 非同期!");
        }, 3000);
    });
}

async function main() {
    console.log("待ってるよ...");
    const message = await waitAndHello();
    console.log(message);
}

main();