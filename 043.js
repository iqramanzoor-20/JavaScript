// nested destructuring 

const users =[
    {userId: 1,firstName:'iqra',genser:'female'},
     {userId: 2,firstName:'sara',genser:'female'},
     {userId: 3,firstName:'san',genser:'female'},
    
]
// const [user1,user2,user3] = users;
// console.log(user1);

const [{firstName:user1firstName, userId} , , {gender}]
console.log(user1firstName);
console.log(userId);
console.log(user3gender);
