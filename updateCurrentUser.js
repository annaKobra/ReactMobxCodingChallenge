// import User from './userModel';

// updateCurrentUser = async (currentUserID, name="", age=0) => {
//     try {
//         const user = await User.findOneAndUpdate(currentUserID, {name, age});

//         if(!user) {
//             const newUser = new User({
//                 _id: currentUserID,
//                 name: name,
//                 age: age
//             })
//             return await newUser.save();
//         }
//         return user;
//     } catch(err) {
//         return {error: err};
//     }
// }

// Please comment out all your code when you are finished.
