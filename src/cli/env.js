const parseEnv = () => {
    // Write your code here
    const processEnv = process.env
    let res = ""
    for (const key in processEnv) {
        if (key.includes("RSS_")) {
            res += `${key}=${processEnv[key]}; `
        }
    }

    console.log(res)
};

parseEnv();