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

tl.to("#page>img",{
    opacity:0,
    scale:0,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        scrub:1,
        // markers:true
    }
})

var tl_1 = gsap.timeline();

tl_1.to("#page1>#elements h1",{
    rotate:10,
    scrollTrigger:{
        trigger:"#check0",
        scroller:"#main",
        scrub:3,
        start:"top 50%",
        end:"top 40%",
        // markers:true
    }
})

tl_1.to("#page1>#elements h1",{
    rotate:0,
    scrollTrigger:{
        trigger:"#check1",
        scroller:"#main",
        scrub:3,
        start:"top 50%",
        end:"top 40%",
        // markers:true
    }
})

tl_1.to("#page1>#elements h1",{
    rotate:-10,
    scrollTrigger:{
        trigger:"#check2",
        scroller:"#main",
        scrub:3,
        start:"top 50%",
        end:"top 40%",
        // markers:true
    }
})

tl_1.to("#page1>#elements h1",{
    rotate:0,
    scrollTrigger:{
        trigger:"#check3",
        scroller:"#main",
        scrub:3,
        start:"top 50%",
        end:"top 40%",
        // markers:true
    }
})

gsap.from("#page2>#hand",{
    y:420,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page2>#hand",
        scroller:"#main",
        start:"top 100%",
        end:"top 94%",
        // markers:true,
        scrub:1
    }
})

gsap.from("#page2>#back-logo",{
    y:100,
    opacity:0,
    duration:0.1,
    scrollTrigger:{
        trigger:"#page2>#back-logo",
        scroller:"#main",
        start:"top 100%",
        end:"top 98%",
        // markers:true,
        scrub:1
    }
})

var main = document.querySelector("#main");
var image = document.querySelector("#page>img");

main.addEventListener("mousemove", function(dets){
    image.style.top = 1-dets.y*0.05 + "px";
    image.style.left = 1-dets.x*0.05 + "px";
});