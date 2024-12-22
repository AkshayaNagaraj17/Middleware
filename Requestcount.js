const express=require("express")
const app=express()

let requestc=0

app.use(function(req,res,next)
{
    requestc+=1
  
    next()
}
)

app.get("/user",function(req,res)
{
    res.status(200).json(
        {
            name:"Aksh"
        }
    )
})

app.post("/user",function(req,res)
{
    res.status(200).json(
        {
            msg:"dummy user"
        }
    )
})

app.get("/rc",function(req,res){
    res.status(200).json(
        {
           request:requestc
        }
    )
})

app.listen(3000,()=>{
    console.log("Server is runnning at http://locallhost:3000")
})