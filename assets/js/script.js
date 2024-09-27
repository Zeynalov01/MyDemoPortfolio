const btn = document.querySelector('#btn');
const body = document.querySelector('body')

const nametext = document.querySelector('#nametext');

const icon = document.querySelector('#icon')

const heroleft = document.querySelector('.hero-left')
const heroright = document.querySelector('.hero-right')

const personalwork = document.querySelector('.personal-work');

const mediacard = document.querySelectorAll('.media-card')[0];
const mediacard2 = document.querySelectorAll('.media-card')[1];
const mediacard3 = document.querySelectorAll('.media-card')[2];
const mediacard4 = document.querySelectorAll('.media-card')[3];

const fb = document.querySelector('.fb');
const wp = document.querySelector('.wp');
const ig = document.querySelector('.ig');
const linkedin = document.querySelector('.in');



// const menubutton = document.querySelector('#btn2');
const dropdownmenu = document.querySelector('.menu');






const langbutton = document.querySelector("#lang");
const lang = document.querySelectorAll('.changelang');



setInterval(() => {
    document.querySelector('#load').className = "loader-hidden"
}, 4500);



if (localStorage.getItem("ThemeMode" === null)) {
    localStorage.setItem('ThemeMode' , 'Light')
}
else{
    
    btn.onclick = () => {
        
        if (body.className == "main" && heroleft.className == "hero-left bg-light" && heroright.className == "hero-right bg-light" ) {
            body.className = "main2"
            heroleft.className = "hero-left bg-black"
            heroright.className = "hero-right bg-black"
            icon.attributes[1].value = "fa-regular fa-sun"
            icon.style.color = "rgb(255, 255, 255)"
            icon.style.backgroundColor = "rgba(255, 255, 255, 0.267)"
            document.querySelector('#personal-name').style.color = "white"
            
            localStorage.setItem('ThemeMode' , 'Dark')
        } 
        
        else{
            body.className = "main"
            heroleft.className = "hero-left bg-light"
            heroright.className = "hero-right bg-light"
            document.querySelector('#personal-name').style.color = "black"
            icon.attributes[1].value = "fa-regular fa-moon"
            icon.style.color = "rgb(51, 51, 51)"
            icon.style.backgroundColor = "white"
            
            localStorage.setItem('ThemeMode' , 'Light')
        }
        
        
    }
    if (localStorage.getItem('ThemeMode') == "Light") {
        body.className = "main"
        heroleft.className = "hero-left bg-light"
        heroright.className = "hero-right bg-light"
        document.querySelector('#personal-name').style.color = "black"
        icon.attributes[1].value = "fa-regular fa-moon"
        icon.style.color = "rgb(51, 51, 51)"
        icon.style.backgroundColor = "white"
    }
    else{
        body.className = "main2"
        heroleft.className = "hero-left bg-black"
        heroright.className = "hero-right bg-black"
        icon.attributes[1].value = "fa-regular fa-sun"
        icon.style.color = "rgb(255, 255, 255)"
        icon.style.backgroundColor = "rgba(255, 255, 255, 0.267)"
        document.querySelector('#personal-name').style.color = "white"
    }
}


const langapi = async () => {
    const cominglangdata = await fetch('https://mocki.io/v1/04da9ead-e5a7-4c7c-acac-9391f95d9c95');
    const langpack = await cominglangdata.json();
    console.log(langpack);


    if (window.navigator.language == "tr") {
        langbutton.innerHTML = "EN"
        for(let i in langpack[0].az){
            lang[i].innerHTML = langpack[0].az[i]
        }
        localStorage.setItem('Language' , 'En')
    }
    else if(window.navigator.language == "en"){
        langbutton.innerHTML = "AZ"
        for(let i in langpack[0].en){
            lang[i].innerHTML = langpack[0].en[i]
        }
        localStorage.setItem('Language' , 'Az')
    }
    
    
    if (localStorage.getItem('Language') === null) {
        localStorage.setItem('Language' , 'En')
    }
    
    else{
        langbutton.onclick = () => {
    
            const browserlang = navigator.language
    
            if (langbutton.innerHTML == "AZ") {
                langbutton.innerHTML = "EN"
                for(let i in langpack[0].az){
                    lang[i].innerHTML = langpack[0].az[i]
                }
                localStorage.setItem('Language' , 'En')
            }
            else if(langbutton.innerHTML == "EN"){
                langbutton.innerHTML = "AZ"
                for(let i in langpack[0].en){
                    lang[i].innerHTML = langpack[0].en[i]
                }
                localStorage.setItem('Language' , 'Az')
            }
        }
        
        if (localStorage.getItem('Language') === 'En') {
            langbutton.innerHTML = "EN"
            for(let i in langpack[0].az){
                lang[i].innerHTML = langpack[0].az[i]
            }
        }
        else{
            langbutton.innerHTML = "AZ"
            for(let i in langpack[0].en){
                lang[i].innerHTML = langpack[0].en[i]
            }
        }
    }

}

langapi();


setInterval(() => {
    document.querySelector('#loaderdot').innerHTML += "."
}, 1200);