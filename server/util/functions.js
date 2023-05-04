const fs = require('fs/promises')

async function readDataFromFile() {
  try {
    const data = await fs.readFile(process.cwd() + '/data.json', 'utf-8');
    return JSON.parse(data);
  } catch (e) {
    console.log(e.message);
  }
}

async function writeDataToFile(data) {
  try {
    await fs.writeFile(process.cwd() + '/data.json', JSON.stringify(data));
  } catch (e) {
    console.log(e.message);
  }
}

async function getUsers() {
  const users = await readDataFromFile();
  return users;
}

async function getUserById(id) {
  const users = await readDataFromFile();
  const found = users.find(user => user.id === +id);

  if (found) {
    return found;
  }


  return {};
}

async function createUser(user) {
  const allUsers = await readDataFromFile();
  const newUser = { ...user, id: allUsers[allUsers.length - 1].id + 1, };
  allUsers.push(newUser);
  await writeDataToFile(allUsers);
  return newUser;
}

async function updateUserById(id, user) {
  const allUsers = await readDataFromFile();
  const found = allUsers.find(user => user.id === +id)

  if (found) {
    found.name = user.name;
    found.email = user.email;
    found.gender = user.gender;
    found.address = user.address;
    found.phone = user.phone;

    await writeDataToFile(allUsers)
    return found;
  }

  return {};
}

async function deleteUser(id) {
  let allUsers = await readDataFromFile();
  const found = allUsers.find(user => user.id === +id)

  allUsers = allUsers.filter(user => user.id !== +id);

  await writeDataToFile(allUsers)
  return found;
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUser
}