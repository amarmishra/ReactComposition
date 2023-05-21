 function delayWithPromise(timeInMiliSec){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        return resolve()
        },timeInMiliSec)
        
    })
    
}
export default delayWithPromise