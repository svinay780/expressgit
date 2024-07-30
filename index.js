const express=require("express")
const app=express()
const port=8080
const path=require("path")
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.listen(port,()=>{
    console.log("check is it Working")
}
)
app.get("/home",(req,res)=>{
    let {user}=req.query
    res.render("home.ejs",{user})
})
app.get("https://svinay780.github.io/expressgit/",(req,res)=>{
    res.render("login.ejs")
})