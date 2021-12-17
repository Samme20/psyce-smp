require('dotenv').config();
const Rcon = require('modern-rcon');
const rcon = new Rcon(process.env.IP, process.env.PASS);
import {useRouter} from "next/router";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const message = req.body.message;
    if(message){
        //CODE
    }
    else{
      //ELSE CODE
    }

    
    


  } 
  if (req.method === 'GET') {
    const lol = req.query.access_token;

    res.status(200).json({ msg: lol })
    

  }
  else {
    res.status(405).json({ msg: 'method not allowed' })
  }
  }