const express = require("express");
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.render("index", {key : "value"});
});
app.get("/login", (req, res)=>{
    const name = "홍길동";
    res.render("login", {n:name});
});
app.get("/logout", (req, res)=>{
    const context= {
        key1 : "값-1",
        key2: "값-2",
        key3: [10, 20, 30],
        key4: {k1: "k11", k2: "k22"}
    };
    res.render("logout", {context : context});
});
app.get("/member", (req, res)=>{
        context = {
            arr : ['홍길동', '20살', '산골짜기'],
            obj : {'name':'김개똥','age':'30살','addr':'개똥별'},
            name : '고길동', age : '40살', addr : '마포구'
        }
        res.render("member", {context : context});
    });

app.get("/for", (req, res)=>{
    const arr = ["홍길동", "김개똥", "고길동"];
    res.render("for", {name : arr});
});
app.get("/if", (req, res)=>{
    res.render("if");
});

app.listen(3000,()=>{console.log("main03 Server")})