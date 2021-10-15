var bestFriends = ["Mahmoud" , "Youssef" , "Malak" , "Seif" , "Mahmoud" , "Georges" , "Brayen" , "Nour" , "Peter"];
const bestFriendsLower = bestFriends.map(function (name){
    return name.toLowerCase();
});
console.log(bestFriendsLower)
var bestFriendsLast = ["Hassan", "Monir" , "Soliman" , "Monir" , "Hozayen" , "Adel" , "Gerges" , "Almuhamady" , "Sameh"];
const bestFriendsLastLower = bestFriendsLast.map(function (name){
    return name.toLowerCase();
});
console.log(bestFriendsLastLower)
var i = 0;
var bestFriendsName = [];
while(i < 9)
{
    bestFriendsName[i] = bestFriends[i] + " " + bestFriendsLast[i]; 
    i++;
}
const bestFriendsNameLower = bestFriendsName.map(function(name){
    return name.toLowerCase();
});
console.log(bestFriendsName);
console.log(bestFriendsNameLower);
const bestFreindsNameNoSpace = bestFriendsNameLower.map(function(name){
    return name.split(' ').join('');
});
console.log(bestFreindsNameNoSpace)
console.log(`How many best friends do i have?? `);
console.log(`I have ${bestFriends.length}`);
