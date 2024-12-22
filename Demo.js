const express = require('express');
const app = express();


function mw(req,res,next){
  const age=req.query.age
  if(age>=18)
  {
    next()
  }
 else{
  res.json(
    {
      msg:"You are not eligible to get in the vote booth"
    }
  )
  
 }
}

app.use(mw)

app.get("/booth1",function(req,res)
{
  res.json(
    {
      msg:"You entered the vote booth"
    }
  )
})

app.get("/booth2",function(req,res)
{
  res.json(
    {
      msg:"You entered the vote booth"
    }
  )
})

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});