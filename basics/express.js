const fs=require('fs')
// const EventEmitter=require("events")

const stream=fs.createReadStream("./lui.txt",{highWaterMark:2000000,encoding:"utf-8"})
stream.on('data',(result)=>{
    console.log(result.length)

})
// const readlui=fs.readFileSync("./lui.txt","utf-8")
// console.log(readlui)
// for(i=0;i<1000000;i++){
//     fs.writeFileSync("./lui.txt",`Hi there am learning node js ${i}\n`,{flag:'a'})
// }

// console.log(readlui)
// fs.readFile("./lui.txt",'utf-8',(err,res)=>{
//     if(err){
//         console.log(err.message)
//         return
//     }
//     console.log(res)
// })

// const customEmitter=new EventEmitter()

// customEmitter.on("response",()=>{
//     console.log("custom emitter")
// })