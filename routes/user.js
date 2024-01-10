const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.post("/users/login",async (req,res)=>{
  try{ 
    
    const user = await User.findByCredentials(req.body.email,req.body.password)
    res.send(user)
  }catch(error){
    res.status(401).send()
  }
})

router.post("/users", async (req, res) => {
  
  const user = new User(req.body); 

  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  } 
});    

router.get("/users", async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.patch("/users/:id", async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updateUser) {
      return res.status(404).send();
    }
    res.status(200).send(updateUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!deleteUser) {
      return res.status(404).send();
    }
    res.status(200).send(deleteUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
