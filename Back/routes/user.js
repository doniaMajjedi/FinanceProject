const express=require('express');
const router=express.Router();

const User=require('../model/user');

//multer for upload the image
const multer=require('multer');
const bcrypt=require( 'bcrypt');//to encrypt

filename='';
var mystorage = multer.diskStorage({
    destination:'./uploads',
    filename: (req, file,redirect)=>{
        let date=Date.now();
        let f1=date+'.'+file.mimetype.split('/')[1];
        redirect(null,f1);   //return filename with timestamp
    filename=f1;
        
    }
})
const upload = multer({storage : mystorage});

router.post( '/register',upload.any('image'), (req, res) => {   //create a new user  in the database with the data from req.body    
    //for read the data  from body
    data=req.body;
    user=new User(data);

    user.image=filename;

    salt=bcrypt.genSaltSync(10);

    user.password=bcrypt.hashSync(data.password ,salt);

    user.save()
    .then((savedUser)=>{
        filename='';
        res.status(200).json(savedUser);
    }).catch((error)=> {res.status(400).send("Error")
    })
})

// @route GET api/users
router.post ('login',(req,res)=>{

})

router.get('/all',(req,res)=>{

})

router.get('/getbyid/:id',(req,res)=>{
    
})

module.exports = router;
