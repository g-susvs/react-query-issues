
export const sleep = (seconds: number = 1):Promise<boolean> => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
            
        }, 1000 * seconds);
    })
}