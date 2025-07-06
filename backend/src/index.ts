import dotenv from 'dotenv';
import express from 'express';
import { Pool } from 'pg';
import validator from 'validator';
import bcrypt from 'bcrypt';
dotenv.config();
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import type { JwtPayload } from 'jsonwebtoken';


const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

const db = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: Number(process.env.DB_PORT) || 5432
})

//bodyparsing middleware
app.use(express.urlencoded({extended:true}));
//Cookieparsing middleware
app.use(cookieParser());

// Sample route
app.get('/', (req, res) => {
  res.send('Welcome to the AI Portfolio Maker API');
});

app.get("/profile",(req,res)=>{
  const token = req.cookies.token;

  if (!token) {
    res.status(401).send("Error: Invalid Credentials, login or register first!");
    return;
  }

  try {
    if (!process.env.JWT_KEY) {throw new Error("JWT_KEY is not defined")};
    let decodedToken = jwt.verify(token,process.env.JWT_KEY) as JwtPayload;
    res.send(`Welcome, ${decodedToken.name}`);
    return;
  }

    catch (err) {
      res.status(401).send('Invalid or expired token. Please login again.');
      return;
    }

})

app.post("/auth/register",async (req,res)=>{
  let { name, email, address, date_of_birth } = req.body;
  let password =bcrypt.hashSync(req.body.password,10)

  if (!validator.isEmail(email)) {
  res.status(400).send('invalid email');
  return;
  };

  let emailQuery =await db.query(`SELECT * FROM users WHERE email=$1`,[email])
  if (emailQuery.rows.length>0) {
    res.status(400).send("Email already exists, please log-in instead!")
    return;
  };


  try{
    await db.query(`insert into users (name, email, password, address, date_of_birth) values ($1,$2,$3,$4,$5)`,  [name, email, password, address, date_of_birth]);

    let user = await db.query(`select * from users where email=$1`,[email])
    

    if (!process.env.JWT_KEY) throw new Error("JWT_KEY is not defined");

    const token = jwt.sign(
      { id: user.rows[0].id, email: user.rows[0].email,name:user.rows[0].name },
      process.env.JWT_KEY,
      { expiresIn: "1h" }
    );
    res.cookie('token',token,{maxAge:1000*60*60})

    res.redirect('/profile')

  } catch (err) {
    res.status(500).send("server error");
    console.error(err);
  }

})

app.post("/auth/login",async (req,res)=>{
  let { email,password } = req.body
  let userQuery = await db.query(`SELECT * from users WHERE email=$1`,[email])
  if (userQuery.rows.length===0) {
    res.send("Invalid email, please register first");
    return;
  }

  try {
    const result = await bcrypt.compare(password,userQuery.rows[0].password)
    if (!result) {
      res.status(401).send("Invalid password, try again");
      return;
    };
      if (!process.env.JWT_KEY) throw new Error("JWT_KEY is not defined");
      const token = await jwt.sign({
        id:userQuery.rows[0].id,
        email:userQuery.rows[0].email,
        name:userQuery.rows[0].name
      },process.env.JWT_KEY,{expiresIn:'1h'});
      res.cookie("token",token,{maxAge:60*60*1000});
      res.redirect("/profile");
      return;
  } catch (err) {
    res.status(500).send("Server error");
    return
  }
  
})

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
