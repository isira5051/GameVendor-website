const {Client} = require('pg')
express = require('express')
const cors = require('cors');


const myApp = express();
myApp.use(express.json())


myApp.listen(3001,()=>
{
    console.log("running")
    client.connect();
})


const client  = new Client({
    host:'localhost',
    user:'postgres',
    password:'Pizzahut1234',
    database:'Reg_User_Data'


})
const corsOptions = {
    origin: 'http://localhost:3000',
    
  };
  
  myApp.use(cors(corsOptions));

myApp.post("/RegisterData", async (req, res) => {
 
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const Email = req.body.Email;
    const Username = req.body.Username;
    const Password = req.body.Password;

    const checkUsername = await client.query('select * from "User_Data" where "Username" = $1',[Username])
    const checkEmail = await client.query('select * from "User_Data" where "Email" = $1',[Email])
    if(checkEmail==="" || Password==="")
    {
        res.status(200).json({message:'Null'})
    }
    else if(checkUsername.rows.length > 0)
    {
        console.log("User Exists")
        res.status(200).json({message:'User Exists'})
    }

    else if(checkEmail.rows.length > 0)
    {
        res.status(200).json({message:'Email Exists'})
    }
    
    else
    {
        const entry = await client.query('insert into "User_Data"("Username" , "Email","Password","FirstName","LastName") values($1,$2,$3,$4,$5)',[Username,Email,Password,FirstName,LastName])       
        res.status(200).json({message:'Success'})
    }

   
});

myApp.post("/LogInData", async (req, res) => {
 
    
    const Username = req.body.Username;
    const Password = req.body.Password;

    const checkUsername = await client.query('select * from "User_Data" where "Username" = $1',[Username])
    if(Username=="" || Password==="")
    {
        res.status(200).json({message:'Null'})
    }
    else if(checkUsername.rows === 0)// 
    {
        res.status(200).json({message:'User Does Not Exists'})
    }

    else{

        const RealPass = await client.query('select "Password" from "User_Data" where "Username" = $1',[Username])
       try{
        if(RealPass.rows[0].Password === Password)
        {
            res.status(200).json({message:'Success'})
        }
        else{
            res.status(200).json({message:'Password Failed'})
        }
       }catch{

            res.status(200).json({message:'Username Error'})

       }
    }
    

    

   
});

myApp.post("/DisplayUserData", async (req, res) => {
    try {
      
      const queryResult = await client.query('SELECT * FROM "User_Data"');
      res.status(200).json({ userData: queryResult.rows});


    } catch (error) {
      
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
  
    }
  });


  myApp.post("/LibrarianData", async (req, res) => {
    try {
      
      const queryResult2 = await client.query('SELECT * FROM "Librarian_Data"');
      res.status(200).json({ userData2: queryResult2.rows});
    


    } catch (error) {
      
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

  myApp.post("/getLibrarianData", async (req, res) => {
    try {
      
      const Username = req.body.Username;
      const Nic = req.body.Nic;
      const Contact = req.body.Contact;
      
      const checkLib = await client.query('select * from "Librarian_Data" where "Username" = $1',[Username])
      const checkNic= await client.query('select * from "Librarian_Data" where "Nic" = $1',[Nic])
      
      if(checkLib.rows.length > 0)
      {
        res.status(200).json({message:'Username Taken'})
      }
      else if (checkNic.rows.length > 0)
      {
        res.status(200).json({message:'Nic Taken'})
      }

      else if(Username === "" || Nic ===  "" || Contact == "")
      {
        res.status(200).json({message:'NULL'})

      }

      else if (Contact.length != 10)
      {
        res.status(200).json({message:'Invalid Contact'})
      }

      else
      {
        const queryResult3 = await client.query('insert into "Librarian_Data"("Username","Nic","Contact") values($1,$2,$3)',[Username , Nic , Contact])
        res.status(200).json({message:'Success'})
      }

      
      
      
      
    


    } catch (error) {
      
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

    myApp.post("/RemoveLib", async (req, res) => {
    try {
      
        const index = req.body.Username;

        const queryText = 'DELETE FROM "Librarian_Data" WHERE "Username" = $1'; 
        const queryResult4 = await client.query(queryText, [index]);
      
      



    } catch (error) {
      
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });


async function display ()
{
    const result2 = await client.query('select * from "User_Data"')
    console.log(result2.rows)

}



