
function random_item(names)
{
    return names[Math.floor(Math.random()*names.length)];
}
var names = ["Ahmed" , "John" , "Karim" , "Moustafa" , "Micheal" , "Soliman" , "Max" , "Mohnd" , "Abram"];
let ibrahimSonbaty = random_item(names);
let marcMagued = random_item(names);
let malakSoliman = random_item(names);
let abdelrahmanAhmed = random_item(names);
let nourMonir = random_item(names);
let hichamFouad = random_item(names);
let georgesAdel = random_item(names);
let brayenGerges = random_item(names);
let peterSameh = random_item(names);
console.log(ibrahimSonbaty , marcMagued , malakSoliman , abdelrahmanAhmed , nourMonir , hichamFouad , georgesAdel , brayenGerges , peterSameh)
document.getElementById("paragraphSchool2").innerHTML = `At the beginning of my studies, I was in Lycée El Haram French section, but the school was very weak. So I moved to De La Salle.
                                                    By the sixth grade, I had three friends. At the end of this year my best friend ${ibrahimSonbaty} moved to the bac section,
                                                    so I rarely see him. ${marcMagued} emigrated to USA.
                                                    Then I became a friend to ${abdelrahmanAhmed} Friends.
                                                    But they became one of the worst people, so I left them. Then, I met a new friend ${hichamFouad}, he had a friend his name is ${georgesAdel}
                                                    But we almost did not like each other, then another joined us ${brayenGerges}. And at the beginning the third preparatory, 
                                                    ${hichamFouad} quarreled with ${georgesAdel}. I was on ${georgesAdel} side, 
                                                    which improved my relation with him. Then 
                                                    ${brayenGerges} and ${malakSoliman} came to our side. Finally ${peterSameh}joined us.
                                                    `;

console.log(`At the beginning of my studies, I was in Lycée El Haram French section, but the school was very weak.
So when I finished the second grade, I moved to my current<br> school.
By the sixth grade, <br>I had four friends. At the end of this year my best friend ${ibrahimSonbaty} moved to the bac section,<br>
so I rarely see him. My second friend ${marcMagued} emigrated to USA.Me and my third friend ${malakSoliman}<br>
quarreled. Then I became a friend to my forth friend ${abdelrahmanAhmed} Friends.
Then they became<br> one of the worst people, so I left them. A week later, I became a friend to a collegue ${nourMonir}<br> 
then we left each other because of our different directions. and then I met a new <br>friend ${hichamFouad}and 
considered him my best friend and he had a friend his name is ${georgesAdel}
But we almost did<br> not like each other, then another joined us ${brayenGerges}, and then, I joined my old friend who<br>
I quarreled with before ${malakSoliman}. And at the beginning of the second term of the third <br>preparatory, 
${hichamFouad} quarreled with ${georgesAdel}. I saw that ${hichamFouad}<br> was wrong, so I was on the other side, 
which improved my relation very much<br> with ${georgesAdel} and he became my best friend. Then ${hichamFouad} left us. And those two
friends ${brayenGerges} and ${malakSoliman} came<br> to our side. Finally another friend ${peterSameh}join us at the end of the year. And till now we are like so..`);