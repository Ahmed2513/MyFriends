var frinedsName = ["Seif" , "Youssef" , " Malak" , "Mahmoud" , "Brayen" , "Georges" , "Youssef" , "Ahmed" , "Adham" , "Soliman" , "Mostafa" , "Ahmed" , "Yasser" , "Hassan" , "Yassin" , "Jana" , "Rawya" , "Mohamed" , "Khalid" , "Mourad" , "Eman" , "Mahmoud" , "Rami" , "Abdelwahab" , "Salah" , "Ghada" , "Mourad" , "Safwat" , "Khalid" , "Peter" , "Raymond" , "Amira" , "Mazen" , "Ismail", "Youssef" , "Ahmed" , "Joseph" , "Abdelrahman" , "Moustafa" , "Mohamed" , "Hima" , "Youusef" , "Mohamed" , "Abdallah" , "Karim" , "Georges" , "Mora" , "Ibrahim" , "Roger" , "Husain" , "Tarek" , "Ahmed" , "Ahmed" , "Noha" , "Hamza" , "Ahmed" , "Ahmed" , "Ahmed" , "Mohamed" , "Nabil" , "Youssef" , "Hicham" , "Noor" , "Mohab" , "Noureldine" , "Mahmoud" , "Youssef" , "Mahmoud" , "Ibrahim" , "Mahmoud" , "Nour" , "Hozayen" , "Amen" , "Marianne"];
const frinedsNameLower = frinedsName.map(name => name.toLowerCase());
console.log(frinedsNameLower);
console.log(frinedsNameLower.length)


var friendsNameLast = ["Monir" , "Monir" , "Soliman" , "Hassan" , "Gerges" , "Adel" , "Azab" , "Mohamed" , "Ossama" , "Gobrial" , "Khedr" , "Farid" , "Gaber" , "Mohamed" , "Aghoury" , "Madian" , "Ali" , "Bahgat" , "Ashraf" , "Amin" , "Bahgat" , "Hozayen" , "Raafat" , "Soliman" , "Ahmed" , "Ez" , "Nabil" , "Osman" , "Farouk" , "Sameh" , "Youakim" , "Bahgat" , "Hicham" , "Shahin" , "Tamer" , "Ali" , "Hani" , "Elsaeed" , "Mahmoud" , "Hany" , "Emad" , "El Hussieny" , "Shokery" , "Tarek" , "Mahmoud" , "Absi" , "Medhat" , "Hany", "Yasser" , "Wafaie" , "Youssef" , "Tarek" , "Mohamed" , "Amin" , "Yosry" , "Rahmo" , " Hecham" , "Mohamed" , "Aly" , "Nader" , "Adel" , "Fouad" , "Almuhamady" , "Mohamed" , "Ahmed" , "Hassan" , "Fahmy" , "Hassan" , "Abdeaziz" , "Hassan" , "Gad" , "Hozayen" , "Hazem" , "El Komos"];
const friendsNameLastLower = friendsNameLast.map(name => name.toLowerCase());
console.log(friendsNameLastLower);
console.log(friendsNameLastLower.length);


var friendsNameTotal = [];
let i = 0;
while(i < 74)
{
    friendsNameTotal[i] = frinedsName[i]  + ' ' + friendsNameLast[i];
    i++;
}

const friendsNameTotalLower = friendsNameTotal.map(name => name.toLowerCase());
var   friendsNameTotalNoSpace = friendsNameTotalLower.map(name => name.split(' ').join(''));


var schoolFriends = ["Brayen" , "Malak" , "Yousef" , "Georges" , "Soliman" , "Mourad" , "Peter" , "Youssef" ,"Moustafa" , "Hima" , "Karim" , "Roger" , "Karim" , "Ahmed" , "Mohamed" , "Nabil", "Youssef" , "Hicham" , "Noureldine" , "Nour"];
const schoolFriendsLower = schoolFriends.map(name => name.toLowerCase());
console.log(schoolFriendsLower);


var schoolFriendsLastName = ["Gerges" , "Soliman" , "Azab" , "Adel" , "Gobrial" , "Nabil" , "Sameh" , "Tamer" , "Mahmoud" , "Emad" , "Bassem" , "Yasser" , "Mahmoud" , "Tarek" , "Aly" , "Nader" , "Adel" , "Fouad" , "Ahmed" , "Gad"];
const schoolFriendsLastNameLower = schoolFriendsLastName.map(name => name.toLowerCase());
console.log(schoolFriendsLastNameLower);


var cityFriends = ["Seif" , "Yousef" , "Hassan" , "Hecham" , "Khalid" , "Mahmoud" , "Khalid" , "Mohamed" , "Ibrahim" , "Hamza" , "Noor" , "Mohab" , "Hozayen" , "Amen"];
const cityFriendsLower = cityFriends.map(name => name.toLowerCase());
console.log(cityFriendsLower);


var cityFriendsLastName = ["Mounir" , "Mounir" , "Mohamed" , "Mounir" , "Ashraf" , "Hozayen" , "Farouk" , "Hany" , "Hany" , "Yosry" , "Almuhamady", "Mohamed" , "Hozayen" , "Hazem"];
const cityFriendsLastNameLower = cityFriendsLastName.map(name => name.toLowerCase());
console.log(cityFriendsLastNameLower)


var familyFriends = ["Mahmoud" , "Ahmed" , "Mohamed" , "Eman" , "Salah" , "Ghada" , "Safwat" , "Amira" , "Mazen" , "Ahmed" , "Noha"]
const familyFriendsLower = familyFriends.map(name => name.toLowerCase());
console.log(familyFriendsLower)


var familyFriendsLastName = ["Hassan" , "Farid" , "Bahgat" , "Bahgat" , "Ahmed" , "Ez" , "Othman" , "Bahgat" , "Hecham" , "Hesham" , "Amin"];
const familyFriendsLastNameLower = familyFriendsLastName.map(name => name.toLowerCase());
console.log(familyFriendsLastNameLower);


var clubFriends = ["Ahmed" , "Adham" , "Yasser" , "Moaz" , "Yassin" , "Jana" , "Rawya" , "Abdelwahab" , "Ismail" , "Ahmed" , "Abdelrahman" , "Mohamed" , "Youusef" , "Mora" , "Husain" , "Tarek" , "Ahmed" , "Ibrahim", "Amen"];
const clubFriendsLower = clubFriends.map(name => name.toLowerCase());
console.log(clubFriendsLower);


var clubFriendsLastName = ["Ebeid" , "Osama" , "Gaber" , "Mostafa" , "Aghoury" , "Madian" , "Ali" , "Soliman" , "Shahin" , "Ali" , "Elsaeed" , "Shokrey" , "EL Hussieny" , "Medhat" , "Wafie" , "Yousef" , "Rahmo" , "Abdelaziz" , "Hazem"];
const clubFriendsLastNameLower = clubFriendsLastName.map(name => name.toLowerCase());
console.log(clubFriendsLastNameLower);


var schoolTeachres = ["Marinanne" , "Raymond" , "Rami" , "Mourad" , "Mostafa" , "FGeorges"];
const schoolTeachresLower = schoolTeachres.map(name => name.toLowerCase());
console.log(schoolTeachresLower);


var schoolTeachresLastName = ["El Komos" , "Edouard" , "Rafat" , "Amin" , "Khedr" , "Absi"];
const schoolTeachersLastNameLower = schoolTeachresLastName.map(name => name.toLowerCase());
console.log(schoolTeachersLastNameLower);

window.alert("Hello");
userName1 = window.prompt("Please enter your name!!");
z = 0;
if (userName1 == null)
{
    while(z < 1)
    {
        window.alert("You tried to cancel this prompt please reopen the page.");    
    }
    
}
else{    
    userNameNoSpace = userName1.split(' ').join('');
    userName = userNameNoSpace.toLowerCase();
    console.log(friendsNameTotal);
    
    
    
    
    let m = 0;
    if(friendsNameTotalNoSpace.includes(userName) === true){
        x = friendsNameTotalNoSpace.indexOf(userName)
        window.alert(`Hello ${friendsNameTotal[x]}`);
    }
    
    else if(userNameNoSpace === '')
    {
        while(m < 2)
        {
            window.alert("You haven't entered your name!!");
            m++;
        }
        userName1 = window.prompt("Please enter your name!!");
        userNameNoSpace = userName1.split(' ').join('');
        userName = userNameNoSpace.toLowerCase();
        console.log(friendsNameTotal);
        if(friendsNameTotalNoSpace.includes(userName) === true)
        {
            x = friendsNameTotalNoSpace.indexOf(userName)
            window.alert(`Hello ${friendsNameTotal[x]}`);
        }
        else if(userNameNoSpace === '' || userName1 == null)
        {
            while(m < 3)
            {
                window.alert("You haven't entered your name!!");
                m++;
            }
            userName1 = window.prompt("Please enter your name!!");
            userNameNoSpace = userName1.split(' ').join('');
            userName = userNameNoSpace.toLowerCase();
            console.log(friendsNameTotal);
            if(friendsNameTotalNoSpace.includes(userName) === true)
            {
                x = friendsNameTotalNoSpace.indexOf(userName)
                window.alert(`Hello ${friendsNameTotal[x]}`);
                
            }
            else if(userNameNoSpace === '' || userName1 == null)
        {
            while(m < 15)
            {
                window.alert("You haven't entered your name twice!! \n Please reopen the page");
                
            }
            userName1 = window.prompt("Please enter your name!!");
            userNameNoSpace = userName1.split(' ').join('');
            userName = userNameNoSpace.toLowerCase();
            console.log(friendsNameTotal);
        }
            else
            {    
            while(m < 1)
                {
                window.alert("Hacker Out");
                
                
            }
        }
        }
        
        
        else{
                while(m < 1){
                    window.alert("Hacker Out");
                }
                
            }
        }
    
    else{
        while(m < 1)
        {
            window.alert("Hacker Out");
        }
        
    }
}







//Go to ------->  cd ......
//Remove ------>  RD ......
//Rename ------>  REN "Path" "New name"
//Make folder-->  mkdir .....
//Make multipeF> md .. .. .. .. 


