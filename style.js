window.onscroll=function(){

    
    if(scrollY===0){
       nav.children[0].style.cssText='background-color#827c7c'; 
       
        for(let i=0 ; i< navLinks.children.length ;i++){
            navLinks.children[i].style.cssText='color:white;';
        }
         navTelBtn.style.cssText='background-color:transparent; color:white; border-color:white'; 
        }
        else{
            nav.children[0].style.cssText='background-color:white';
            
            for(let i=0 ; i< navLinks.children.length ;i++){
                navLinks.children[i].style.cssText='color:black;';
            }
            navTelBtn.style.cssText='background-color:transparent; color:#14b789; border-color:#14b789'; 
     }
    
}

navTelBtn.addEventListener('mouseenter',()=>{
    if(scrollY===0){
        navTelBtn.style.cssText='background-color:white; color:#14b789; border-color:white'; 
    }
    else{
         navTelBtn.style.cssText='background-color:#14b789 !important; color:white !important; border-color:#14b789'; 
    }
    
})
navTelBtn.addEventListener('mouseout',()=>{
    if(scrollY===0){
        navTelBtn.style.cssText='background-color:transparent; color:white; border-color:white'; 
    }
    else{
         navTelBtn.style.cssText='background-color:transparent; color:#14b789; border-color:#14b789'; 
    }
    
})


// start develop mobile burger bar btn 

console.log(burgerBar , navLinks);
// don't forget the height of navLinks section is 210px
let toggleNum=0;

burgerBar.addEventListener('click', ()=>{
    if(toggleNum===0){
        navLinks.style.cssText='height:210px ;';
        toggleNum=1;

    }
    else{
        navLinks.style.cssText='height:0 ;';
        toggleNum=0;
    }
})

// FormServicesIcons"

// FormServicesIcons.children.foreach(icon =>{
//     icon.addEventListener(click , function(){
//         console.log(icon);
//     })
// })

let specializations=[...FormServicesIcons.children];
specializations.forEach(icon =>{
   icon.addEventListener('click',()=>{
    specializations.forEach(major => {
        major.classList.remove('active')
    })
    icon.classList.add('active');
    icon.style.cssText='background-color:#f9f9f9';
    icon.children[1].checked=true;
   })
})