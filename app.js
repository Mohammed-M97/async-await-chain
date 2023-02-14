let title1 = "title1"
let title2 = "title2"
let title3 = "title3"
let title4 = "title4"

async function showTitle() {
    await new Promise ((resolve) => {
        setTimeout(() => {
            console.log(title1);
            resolve()
        }, 1000);
    })

    await new Promise((resolve) => {
        setTimeout(() => {
            console.log(title2);
            resolve()
        }, 1000);
    })

    await new Promise((resolve) => {
        setTimeout(() => {
            console.log(title3);
            resolve()
        }, 1000);
    })

    setTimeout(() => {
        console.log(title3);
    }, 1000);
}



showTitle()
