
        var r = document.querySelector(':root');
        var t = document.querySelector(':root');
        var b = document.querySelector(':root');
        var s = document.querySelector(':root');
        var h = document.querySelector(':root');
        var g = document.querySelector(':root');
        var q = document.querySelector(':root');
   
    /*  
        --activeBottom: #191919d1; 
        --disactiveBottom: #727272;
        --activeBottomHover: black;
        --disactiveBottomHover: #585858;
    */
        // Create a function for getting a variable value
        function myFunction_get() {
          // Get the styles (properties and values) for the root
          var rs = getComputedStyle(r);
          // Alert the value of the --blue variable
        }

        // Create a function for setting a variable value
        function myFunction_set() {
          // Set the value of variable --blue to another value (in this case "lightblue")
          r.style.setProperty('--black', 'white');
          t.style.setProperty('--font' , 'black');
          b.style.setProperty('--background' , 'white');
          s.style.setProperty('--activeBottom' , '#191919d1');
          h.style.setProperty('--disactiveBottom' , '#727272');
          g.style.setProperty('--activeBottomHover' , 'black');
          q.style.setProperty('--disactiveBottomHover' , '#585858');
          darkLight.innerHTML = '<button onclick="myFunctionBlack_set() " style=" background: transparent; border: none;"> <img src="Friendsphotos/moonWhite.png" style=" height: 31px; border-radius: 51px; padding: 4px;" id="moon"> </button>'
        }

        function myFunctionBlack_set() {
          // Set the value of variable --blue to another value (in this case "lightblue")
          r.style.setProperty('--black', 'black');
          t.style.setProperty('--font' , 'white');
          b.style.setProperty('--background' , 'black');
          s.style.setProperty('--activeBottom' , '#ffffffd1');
          h.style.setProperty('--disactiveBottom' , '#ffffff8f');
          g.style.setProperty('--activeBottomHover' , 'white');
          q.style.setProperty('--disactiveBottomHover' , '#ffffffba');
          darkLight.innerHTML = '    <button onclick="myFunction_set()" style="    background: transparent; border: none;"> <img src="Friendsphotos/sunWhite.png" style=" height: 31px; border-radius: 51px; padding: 4px;" id="moon"> </button>'
        }

//     // const EFFECT2 = document.querySelector("#effect2");
    
    
//     // window.addEventListener('scroll' , scrollEffect2);
    
    
//     // function scrollEffect2 () {
//     //     if(window.scrollY >= 1300)
//     //     {
//     //         EFFECT2.style.opacity ='1';
//     //         EFFECT2.style.transform = 'translateX(0px)';
//     //         EFFECT2.style.transition = '1s ease-in-out';
//     //     }

//     //     else{
//     //         EFFECT2.style.opacity = '0';
//     //         EFFECT2.style.transform = 'translateX(-50px)';
//     //     }
//     // }
//     // scrollEffect2();
// }
function myFunction(x) {
    if (x.matches) { // If media query matches
        window.onload = function( )
        {
            const EFFECT2 = document.querySelector("#effect2");
            window.addEventListener('scroll' , scrollEffect2);
            
            
            function scrollEffect2 () {
                if(window.scrollY >= 1500)
                {
                    EFFECT2.style.opacity ='1';
                    EFFECT2.style.transform = 'translateX(0px)';
                    EFFECT2.style.transition = '1s ease-in-out';
                }
            
                else{
                    EFFECT2.style.opacity = '0';
                    EFFECT2.style.transform = 'translateX(-50px)';
                }
            }
            scrollEffect2();
        }
        window.onload = function( ){
            const EFFECT = document.querySelector("#effect");
            window.addEventListener('scroll' , scrollEffect);
    

            function scrollEffect () {
                if(window.scrollY >= 500)
                {
                    EFFECT.style.opacity ='1';
                    EFFECT.style.transform = 'translateX(0px)';
                    EFFECT.style.transition = '1s ease-in-out';
                }

                else{
                    EFFECT.style.opacity = '0';
                    EFFECT.style.transform = 'translateX(-50px)';
                }
            }
            scrollEffect();
        }



    window.onload = function( ){
        const EFFECT1 = document.querySelector("#effect1");
        window.addEventListener('scroll' , scrollEffect1);
    
    
        function scrollEffect1 () {
            if(window.scrollY >= 1000)
            {
                EFFECT1.style.opacity ='1';
                EFFECT1.style.transform = 'translateX(0px)';
                EFFECT1.style.transition = '1s ease-in-out';
            }

            else{
                EFFECT1.style.opacity = '0';
                EFFECT1.style.transform = 'translateX(-50px)';
            }
        }
        scrollEffect1();
    }
}
     else {
        window.onload = function( ){
            const EFFECT2Media = document.querySelector("#effect2");
            window.addEventListener('scroll' , scrollEffect2Media);
            function scrollEffect2Media () {
                if(window.scrollY >= 1900)
                {
                    EFFECT2Media.style.opacity ='1';
                    EFFECT2Media.style.transform = 'translateX(0px)';
                    EFFECT2Media.style.transition = '1s ease-in-out';
                }
            
                else{
                    EFFECT2Media.style.opacity = '0';
                    EFFECT2Media.style.transform = 'translateX(-50px)';
                }
            }
            scrollEffect2Media();
        
 
        const EFFECT = document.querySelector("#effect");
        window.addEventListener('scroll' , scrollEffectMedia);
    

        function scrollEffectMedia () {
            if(window.scrollY >= 500)
            {
                EFFECT.style.opacity ='1';
                EFFECT.style.transform = 'translateX(0px)';
                EFFECT.style.transition = '1s ease-in-out';
            }

            else{
                EFFECT.style.opacity = '0';
                EFFECT.style.transform = 'translateX(-50px)';
            }   
        }
        scrollEffectMedia();
    
        const EFFECT1 = document.querySelector("#effect1");
        window.addEventListener('scroll' , scrollEffect1Media);
    
    
        function scrollEffect1Media () {
            if(window.scrollY >= 1300)
            {
                EFFECT1.style.opacity ='1';
                EFFECT1.style.transform = 'translateX(0px)';
                EFFECT1.style.transition = '1s ease-in-out';
            }

            else{
                EFFECT1.style.opacity = '0';
                EFFECT1.style.transform = 'translateX(-50px)';
            }
        }
        scrollEffect1Media();
    }
    }
  }
  
  var x = window.matchMedia("(max-width: 890)");
  myFunction(x); // Call listener function at run time7
  x.addListener(myFunction); // Attach listener function on state changes



  function myFunction(y) {
    if (y.matches) { // If media query matches
        window.onload = function( )
        {
            const EFFECT2 = document.querySelector("#effect2");
            window.addEventListener('scroll' , scrollEffect2);
            
            
            function scrollEffect2 () {
                if(window.scrollY >= 1900)
                {
                    EFFECT2.style.opacity ='1';
                    EFFECT2.style.transform = 'translateX(0px)';
                    EFFECT2.style.transition = '1s ease-in-out';
                }
            
                else{
                    EFFECT2.style.opacity = '0';
                    EFFECT2.style.transform = 'translateX(-50px)';
                }
            }
            scrollEffect2();
        }
        window.onload = function( ){
            const EFFECT = document.querySelector("#effect");
            window.addEventListener('scroll' , scrollEffect);
    

            function scrollEffect () {
                if(window.scrollY >= 500)
                {
                    EFFECT.style.opacity ='1';
                    EFFECT.style.transform = 'translateX(0px)';
                    EFFECT.style.transition = '1s ease-in-out';
                }

                else{
                    EFFECT.style.opacity = '0';
                    EFFECT.style.transform = 'translateX(-50px)';
                }
            }
            scrollEffect();
        }



    window.onload = function( ){
        const EFFECT1 = document.querySelector("#effect1");
        window.addEventListener('scroll' , scrollEffect1);
    
    
        function scrollEffect1 () {
            if(window.scrollY >= 1000)
            {
                EFFECT1.style.opacity ='1';
                EFFECT1.style.transform = 'translateX(0px)';
                EFFECT1.style.transition = '1s ease-in-out';
            }

            else{
                EFFECT1.style.opacity = '0';
                EFFECT1.style.transform = 'translateX(-50px)';
            }
        }
        scrollEffect1();
    }
}
     else {
        window.onload = function( ){
            const EFFECT2Media = document.querySelector("#effect2");
            window.addEventListener('scroll' , scrollEffect2Media);
            function scrollEffect2Media () {
                if(window.scrollY >= 1600)
                {
                    EFFECT2Media.style.opacity ='1';
                    EFFECT2Media.style.transform = 'translateX(0px)';
                    EFFECT2Media.style.transition = '1s ease-in-out';
                }
            
                else{
                    EFFECT2Media.style.opacity = '0';
                    EFFECT2Media.style.transform = 'translateX(-50px)';
                }
            }
            scrollEffect2Media();
        
 
        const EFFECT = document.querySelector("#effect");
        window.addEventListener('scroll' , scrollEffectMedia);
    

        function scrollEffectMedia () {
            if(window.scrollY >= 500)
            {
                EFFECT.style.opacity ='1';
                EFFECT.style.transform = 'translateX(0px)';
                EFFECT.style.transition = '1s ease-in-out';
            }

            else{
                EFFECT.style.opacity = '0';
                EFFECT.style.transform = 'translateX(-50px)';
            }   
        }
        scrollEffectMedia();
    
        const EFFECT1 = document.querySelector("#effect1");
        window.addEventListener('scroll' , scrollEffect1Media);
    
    
        function scrollEffect1Media () {
            if(window.scrollY >= 1300)
            {
                EFFECT1.style.opacity ='1';
                EFFECT1.style.transform = 'translateX(0px)';
                EFFECT1.style.transition = '1s ease-in-out';
            }

            else{
                EFFECT1.style.opacity = '0';
                EFFECT1.style.transform = 'translateX(-50px)';
            }
        }
        scrollEffect1Media();
    }
    }
  }

  var y = window.matchMedia("(max-width: 360)")
  myFunction(y) // Call listener function at run time
  y.addListener(myFunction) // Attach listener function on state changes


  function myFunction(yx) {
    if (yx.matches) { // If media query matches
        window.onload = function( )
        {
            const EFFECT2 = document.querySelector("#effect2");
            window.addEventListener('scroll' , scrollEffect2);
            
            
            function scrollEffect2 () {
                if(window.scrollY >= 1800)
                {
                    EFFECT2.style.opacity ='1';
                    EFFECT2.style.transform = 'translateX(0px)';
                    EFFECT2.style.transition = '1s ease-in-out';
                }
            
                else{
                    EFFECT2.style.opacity = '0';
                    EFFECT2.style.transform = 'translateX(-50px)';
                }
            }
            scrollEffect2();
        }
        window.onload = function( ){
            const EFFECT = document.querySelector("#effect");
            window.addEventListener('scroll' , scrollEffect);
    

            function scrollEffect () {
                if(window.scrollY >= 500)
                {
                    EFFECT.style.opacity ='1';
                    EFFECT.style.transform = 'translateX(0px)';
                    EFFECT.style.transition = '1s ease-in-out';
                }

                else{
                    EFFECT.style.opacity = '0';
                    EFFECT.style.transform = 'translateX(-50px)';
                }
            }
            scrollEffect();
        }



    window.onload = function( ){
        const EFFECT1 = document.querySelector("#effect1");
        window.addEventListener('scroll' , scrollEffect1);
    
    
        function scrollEffect1 () {
            if(window.scrollY >= 1000)
            {
                EFFECT1.style.opacity ='1';
                EFFECT1.style.transform = 'translateX(0px)';
                EFFECT1.style.transition = '1s ease-in-out';
            }

            else{
                EFFECT1.style.opacity = '0';
                EFFECT1.style.transform = 'translateX(-50px)';
            }
        }
        scrollEffect1();
    }
}
     else {
        window.onload = function( ){
            const EFFECT2Media = document.querySelector("#effect2");
            window.addEventListener('scroll' , scrollEffect2Media);
            function scrollEffect2Media () {
                if(window.scrollY >= 1500)
                {
                    EFFECT2Media.style.opacity ='1';
                    EFFECT2Media.style.transform = 'translateX(0px)';
                    EFFECT2Media.style.transition = '1s ease-in-out';
                }
            
                else{
                    EFFECT2Media.style.opacity = '0';
                    EFFECT2Media.style.transform = 'translateX(-50px)';
                }
            }
            scrollEffect2Media();
        
 
        const EFFECT = document.querySelector("#effect");
        window.addEventListener('scroll' , scrollEffectMedia);
    

        function scrollEffectMedia () {
            if(window.scrollY >= 500)
            {
                EFFECT.style.opacity ='1';
                EFFECT.style.transform = 'translateX(0px)';
                EFFECT.style.transition = '1s ease-in-out';
            }

            else{
                EFFECT.style.opacity = '0';
                EFFECT.style.transform = 'translateX(-50px)';
            }   
        }
        scrollEffectMedia();
    
        const EFFECT1 = document.querySelector("#effect1");
        window.addEventListener('scroll' , scrollEffect1Media);
    
    
        function scrollEffect1Media () {
            if(window.scrollY >= 1000)
            {
                EFFECT1.style.opacity ='1';
                EFFECT1.style.transform = 'translateX(0px)';
                EFFECT1.style.transition = '1s ease-in-out';
            }

            else{
                EFFECT1.style.opacity = '0';
                EFFECT1.style.transform = 'translateX(-50px)';
            }
        }
        scrollEffect1Media();
    }
    }
  }

  var yx = window.matchMedia("(max-width: 298)")
  myFunction(yx) // Call listener function at run time
  yx.addListener(myFunction) // Attach listener function on state changes
