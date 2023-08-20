function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });

    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform
            ? "transform"
            : "fixed",
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
loco();

var tl = gsap.timeline();

tl.from("#nav>img, #nav>#center-nav>a, #nav>a",{
    y:-50,
    opacity:0,
    duration:0.5,
    delay:0.8,
    stagger:0.2
})

tl.to("#page>h1",{
    opacity:0,
    y:-500,
    scrollTrigger:{
        trigger:"#page>h1",
        scroller:"#main",
        start:"top 30%",
        end:"top 0%",
        scrub:1,
        // markers:true
    }
})

tl.to("#page>#img1",{
    opacity:0,
    y:-500,
    scale:0,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"top 80%",
        end:"top 60%",
        scrub:1,
        // markers:true
    }
})

tl.to("#page>#img2",{
    opacity:0,
    y:-500,
    scale:0,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"top 80%",
        end:"top 60%",
        scrub:1,
        // markers:true
    }
})

var tl_1 = gsap.timeline();

tl_1.from("#page1>h6",{
    opacity:0,
    scale:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page1>h6",
        scroller:"#main",
        start:"top 70%",
        end:"top 50%",
        // markers:true,
        scrub:2
    }
})

tl_1.from("#page1>h1",{
    opacity:0,
    scale:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page1>h1",
        scroller:"#main",
        start:"top 80%",
        end:"top 60%",
        // markers:true,
        scrub:2
    }
})

tl_1.from("#page1>h5",{
    opacity:0,
    scale:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page1>h5",
        scroller:"#main",
        start:"top 90%",
        end:"top 70%",
        // markers:true,
        scrub:2
    }
})

var tl_2 = gsap.timeline();

tl_2.from("#page2>h4",{
    opacity:0,
    scale:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page2>h4",
        scroller:"#main",
        start:"top 70%",
        end:"top 50%",
        // markers:true,
        scrub:2
    }
})

tl_2.from("#page2 h1",{
    opacity:0,
    scale:0,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"#main",
        start:"top 75%",
        end:"top 55%",
        // markers:true,
        scrub:2
    }
})

tl_2.from("#page2 p",{
    opacity:0,
    scale:0,
    y:100,
    duration:1,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page2 p",
        scroller:"#main",
        start:"top 90%",
        end:"top 80%",
        // markers:true,
        scrub:2
    }
})

var tl_3 = gsap.timeline();

tl_3.from("#page3>h4",{
    opacity:0,
    scale:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page3>h4",
        scroller:"#main",
        start:"top 50%",
        end:"top 30%",
        // markers:true,
        scrub:2
    }
})

tl_3.from("#page3>h1",{
    opacity:0,
    scale:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page3>h1",
        scroller:"#main",
        start:"top 70%",
        end:"top 50%",
        // markers:true,
        scrub:2
    }
})

tl_3.from("#page3>#icons>#icon-row>img",{
    x:-50,
    scale:0,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page3>#icons>#icon-row>img",
        scroller:"#main",
        // markers:true,
        start:"top 100%",
        end:"top 45%",
        scrub:2
    }
})

var tl_4 = gsap.timeline();

function awardCount(){
    var n = 0;
    setInterval(function(){
        n += 1;
        if(n<52){
            document.querySelector("#page4>h1").innerHTML = n + "*";
        }
        else{
            n = 52
            document.querySelector("#page4>h1").innerHTML = n + "*"
        }
    }, 100);
}

tl_4.to("#page4>h1",{
    duration:1,
    delay:1,
    onStart:awardCount,
    scrollTrigger:{
        // onEnter:awardCount,
        // onLeave:awardCount,
        trigger:"#page4>h1",
        scroller:"#main",
        // markers:true,
        start:"top 40%",
        end:"top 20%",
        // scrub:2
    }
})

tl_4.from("#page4>h4",{
    opacity:0,
    scale:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page4>h4",
        scroller:"#main",
        start:"top 50%",
        end:"top 30%",
        // markers:true,
        scrub:2
    }
})

tl_4.from("#page4>#awards>#award-row>h2",{
    opacity:0,
    scale:0,
    y:200,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page4>#awards>#award-row>h2",
        scroller:"#main",
        start:"top 85%",
        end:"top 70%",
        // markers:true,
        scrub:2
    }
})

tl_4.from("#page4>h6",{
    opacity:0,
    scale:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page4>h6",
        scroller:"#main",
        start:"top 95%",
        end:"top 90%",
        // markers:true,
        scrub:2
    }
})

gsap.from("#page5>#hand",{
    y:420,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page5>#hand",
        scroller:"#main",
        start:"top 100%",
        end:"top 94%",
        // markers:true,
        scrub:1
    }
})

gsap.from("#page5>#back-logo",{
    y:100,
    opacity:0,
    duration:0.1,
    scrollTrigger:{
        trigger:"#page5>#back-logo",
        scroller:"#main",
        start:"top 100%",
        end:"top 98%",
        // markers:true,
        scrub:1
    }
})

var main = document.querySelector("#main");
var image1 = document.querySelector("#page>#img1");
var image2 = document.querySelector("#page>#img2");

main.addEventListener("mousemove", function(dets){
    image1.style.top = 1-dets.y*0.1 + "px";
    image1.style.left = 1-dets.x*0.1 + "px";
    image2.style.top = 1-dets.y*0.1 + "px";
    image2.style.left = 1-dets.x*0.1 + "px";
});