// Simple animation
document.querySelectorAll('.card').forEach(card=>{
    card.addEventListener('mouseenter',()=>{
        card.style.background = "#00f7ff";
        card.style.color = "#000";
    });
    card.addEventListener('mouseleave',()=>{
        card.style.background = "#1f2937";
        card.style.color = "#fff";
    });
});
