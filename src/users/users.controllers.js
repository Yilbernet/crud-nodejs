const usersDB =[];
let id = 1;

// {
// 	id: 1,
// 	first_name: 'string',
// 	last_name: 'string',
// 	email: 'string',
// 	password: 'string',
// 	birthday: 'YYYY/MM/DD'
// }

const findAllUsers = () => {
   return usersDB;
}

const findUserById = (id) => {
   const filteredUsers = usersDB.find(user => user.id == id);
   return filteredUsers;
}

const createNewUser = (obj) => {
   const newUser = {
      id: id++, // Este valor lo administramos nosotros.
      first_name: obj.first_name, // Campo Obligatorio
      last_name: obj.last_name, // Campo Obligatorio
      email: obj.email, // Campo Obligatorio
      password: obj.password, // Campo Obligatorio
      birthday: obj.birthday, // Campo Obligatorio
   }
   usersDB.push(newUser);
   return newUser;
}

const findRandomUser = () => {
   const randomIndex = Math.floor(Math.random() * usersDB.length);
   return usersDB[randomIndex];
}

module.exports = {
   findAllUsers,
   findUserById,
   createNewUser,
   findRandomUser,
}