//register the plugin
gsap.registerPlugin(MotionPathPlugin);

const path =
	"M-493.14983,-113.51116 C-380.07417,-87.16916 -266.9985,-60.82716 -153.92283,-34.48516 -12.11783,-77.91982 129.68717,-121.35449 271.49217,-164.78916 203.45853,-70.96417 186.21594,-72.24109 90.84294,-69.64709   ",
   path2 ="M86.19294,-70.86509 C64.53494,-36.48609 45.53694,-13.87709 -8.66106,-8.17509 -23.66506,-40.23009 -30.84506,-44.94009 -30.21406,-88.73909 6.79594,-123.26109 54.23713,-91.33418 89.94877,-68.52617 83.65113,-3.48218 111.21194,-17.94209 114.05694,18.45191 164.08394,33.81091 172.43213,34.87082 217.26913,22.87582 220.68213,-118.72918 95.09713,-364.56718 98.52813,-506.18118  ",
      path3 = "M-82.69499,-40.08529 C-7.94199,18.80104 66.81101,77.68738 141.56401,136.57371 238.08201,95.81004 334.60001,55.04638 431.11801,14.28271 ",
      path4 = "M126.51311,118.06986 C29.76678,41.59186 -66.97956,-34.88614 -163.72589,-111.36414 -250.07922,-59.10714 -336.43256,-6.85014 -422.78589,45.40686 ";

gsap.set('.snitch',{align: "path"})
gsap.set('#harry',{align: "path4"})
gsap.to('.wave', {
  duration:() => {
    return Math.random() * 1;
  },
  rotation: -5,
  yoyo:true,
  repeat: -1
})

const moving = () => {
 let tl = gsap.timeline({ 
  defaults: { duration: .02,  
              ease: "back.out(1.4)", 
              yoyo: true, 
              repeat: 1, 
              autoAlpha: 1 
            }
 })
   tl.to('.wing1',{})
     .to('.wing2',{})
     .to('.wing3',{})
      return tl;
    }
 // timeline for repeating animations
    const aniRepeat = new gsap.timeline({repeat:-1})
    aniRepeat.add(moving())


const snitch = () => {
 let tl = gsap.timeline({ defaults: {
    ease: "rough({ template: power0.none, strength: 1, points: 10, taper: 'none', randomize: false, clamp: false}",  type: "cubic",
            }})
 tl.add('s')
   tl
     .to('.snitch', {
     duration: 2,
     motionPath:{
     path: path,
  }
   },'s')
  .to('.snitch', {
     duration: 1.3,
     ease: "back.in(1.4)",
     motionPath:{
     path: path2,
       opacity: 0
  }
   },'s+=2')
  .to('.snitch', {
     duration: 0.1,
     opacity: 0
   },'s+=3.25')
  return tl
}

const hover = (rider, path) => {
 let tl = gsap.timeline()
  tl.to(rider,{
    duration: 1,
    ease: "rider",
    motionPath:{
      path: path,
    }
    })
  return tl
}
const race = (rider, rotation) => {
  let tl = gsap.timeline()
  tl.to(rider, {
    duration:0.5, 
    y: -5,
    yoyo:true,
    repeat: 2,
    ease: "power0.none"
  })
    .to(rider, {
    duration:0.5, 
    rotation: rotation, 
    transformOrigin: "center center"})
   .to(rider, {
    duration: 0.8,
    y: -1000,
    ease: "back.in(1.4)" 
  })
  return tl
}

                   
const master = gsap.timeline({repeat:-1})
    master.add('start')
    master.add(snitch(), 'start+=0.1')
.add(hover("#cho", path3),'start+=0.1')
.add(hover("#harry", path4),'start+=0.1')
.add(race("#cho", -20),'start+=0.9')
.add(race("#harry", 20),'start+=1')


