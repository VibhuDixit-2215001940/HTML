// gsap.to("#box",{
//     x:1000,
//     rotate:360,
//     backgroundColor: "blue",
//     duration:2,
//     delay:1
// })
// gsap.from("#box",{
//     x:1000,
//     rotate:360,
//     backgroundColor: "blue",
//     duration:1,
//     delay:1
// })
//--------------------GSAP TIMELINE---------------------
var t = gsap.timeline()
t.to("#box1",{
    x:1000,
    rotate:360,
    scale:0.5,
    duration:2,
    // delay:1
})
t.to("#box2",{
    x:1000,
    rotate:360,
    scale:0.5,
    duration:2,
    // delay:1.5
})
t.to("#box3",{
    x:1000,
    rotate:360,
    scale:0.5,
    duration:2,
    // delay:2
})
