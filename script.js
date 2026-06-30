const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseover",()=>{

card.style.boxShadow="0 0 25px #3b82f6";

});

card.addEventListener("mouseout",()=>{

card.style.boxShadow="none";

});

});
