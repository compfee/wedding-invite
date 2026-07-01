/* ========================= */
/* PARALLAX MAP */
/* ========================= */

window.addEventListener('scroll',()=>{

const scroll = window.scrollY;

document.querySelectorAll('.station').forEach((el,index)=>{

el.style.transform = `
translateY(${scroll * (0.02 + index*0.002)}px)
`;

});

document.querySelectorAll('.floating-cloud').forEach(el=>{

el.style.transform = `
translateY(${scroll * 0.03}px)
`;

});

});