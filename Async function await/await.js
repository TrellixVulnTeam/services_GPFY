const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

   async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000))
    await delayedColorChange('yellow', 1000))
    await delayedColorChange('green', 1000))
    await delayedColorChange('blue', 1000))
    await delayedColorChange('indigo', 1000))
    await delayedColorChange('violet', 1000))
      return "All done"
   }
    rainbow().then(()=>console.log("END OF Rainbow"))

    async function printRainbow(){
    await rainbow();	
    console.log("END OF Rainbow")
    }

    // THE PROMISE VERSION 
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function makeTwoRequests() {
	try {
	let data1 =await fakeRequest('/page1')
	let data2 =await fakeRequest('/page2')
	} catch(e {
	       console.log("Caught an error")
	        console.log("Error itself" ,e)
	})
}