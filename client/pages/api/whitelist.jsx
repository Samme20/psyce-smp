require('dotenv').config();
const Rcon = require('modern-rcon');
const rcon = new Rcon(process.env.IP, process.env.PASS);
import {useRouter} from "next/router";
//return res.status(200).json({ msg: 'succesfully executed command' })

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const message = req.body.message;
    if(message){
      try {
        await rcon.connect().then(() => {
          rcon.send('say ' + message); // That's a command for Minecraft
        }).then(() => {
           return rcon.disconnect();
        });
        return res.status(200).json({ msg: 'succesfully executed command' })
      } catch (error) {
        return res.status(500).json({ msg: 'Server error: ' + error })
      }
    }
    else{
      return res.status(400).json({ msg: 'you need a message' })
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