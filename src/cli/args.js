const parseArgs = () => {
    // Write your code here
    const argsList = process.argv.slice(2)
    let resp = []
    for (let i = 0; i<argsList.length-1; i+=2) {
        resp.push(`${argsList[i].slice(2)} is ${argsList[i+1]}`)
    }
    console.log(resp.join(", "))
};

parseArgs();