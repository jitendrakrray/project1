
var crsr = document.querySelector("#cursor")

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px"
})


var crsrblur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){
    crsrblur.style.left = dets.x- 150 +"px";
    crsrblur.style.top = dets.y- 150 +"px"
})

var h2all = document.querySelectorAll(".nav h2")
h2all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor= "transparent"
        
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border ="0px solid #fff"
        crsr.style.backgroundColor= "greenyellow"
    })
})





gsap.to(".nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        //markers:true//
        start: "top -10%",
        end: "top -20%",
        scrub: 1
    }

})
gsap.to(".main", {
    backgroundColor: "#000",
    duration: 1,
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        start: "top -50%",
        end: "top -80%",
        scrub: 2


    }

})



gsap.from(".aboutus img,#aboutus-in",{
    y:60,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".aboutus",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:1
    }
})

gsap.from(".card",{
    scale:0.9,
    opacity:0,
    duration:1,
    
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:1
    }
})

gsap.from("#mark1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#mark1",
        start:"top 50%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#mark2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#mark1",
        scroller:"body",
        start:"top 50%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#page4 h1",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})