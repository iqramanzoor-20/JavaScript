// obj inside array 

const users =[
    {userId: 1,firstName:'iqra',genser:'female'},
     {userId: 2,firstName:'sara',genser:'female'},
     {userId: 3,firstName:'san',genser:'female'},
    
]
for(let user of users){
    console.log(user.firstName);
}