const express = require('express')
const cors = require('cors')
const app = express();
const port = 5001;
const { getUsers, getUserById, createUser, updateUserById, deleteUser } = require('./util/functions')

app.use(cors())
app.use(express.json())

app.get('/users', async (req, res) => {
  const data = await getUsers()
  res.json(data)
})

app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const data = await getUserById(id)
  res.json(data)
})

app.post('/users', async (req, res) => {
  const user = req.body;
  const newUser = await createUser(user);
  res.json(newUser);
})

app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const user = req.body;

  const updatedUser = await updateUserById(id, user)
  res.json(updatedUser)
})

app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  const deletedUser = await deleteUser(id)
  res.json(deletedUser)
})


app.listen(port, () => {
  console.log(`API Ready on port ${port}`)
  
  app._router.stack.forEach((r) => {
    if (r.route && r.route.path){
      console.log(`${Object.keys(r.route.methods)[0].toUpperCase()} -> http://localhost:${port}${r.route.path}`)
    }
  })
  
})