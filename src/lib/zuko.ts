const photo = (folder: string, file: string, caption: string) =>
  `<figure class="zuko-photo"><img src="/zuko_documentation/${folder}/${encodeURIComponent(file)}" alt="${caption}" loading="lazy" /><figcaption>${caption}</figcaption></figure>`

const video = (id: string, title: string) =>
  `<iframe class="zuko-video" src="https://www.youtube.com/embed/${id}" title="${title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`

export const zukoFilesContent = `
## Zuko project files

- <a href="/zuko_documentation/Zuko%20KiCAD.zip" download>Download the KiCad project (.zip)</a>
- <a href="/zuko_documentation/Zuko.epro" download>Download the EasyEDA project (.epro)</a>
- [Schematic PDF](/zuko_documentation/zuko_schematic.pdf)
- [PCB layout PDF](/zuko_documentation/zuko_layout.pdf)

### Me over summer attempting to explain my questionable design choices before design review

${video('WQ5MDKXryGE', 'Zuko summer design review')}

[Back to Zuko V1](/projects/zuko-v1)
`

const zukoIntro = `
## Intro

<img class="zuko-intro" src="/firemousezuko1.png" alt="Firemouse Zuko, inspired by Avatar the Last Airbender" />

This is Zuko, the PCB for the micromouse that I made over the summer!

(Well this is Zuko from Avatar the Last Airbender, whom my robot is named after.)

Micromouse is a competition where tiny robots autonomously race to solve an unknown maze. It’s a worldwide robotics competition held annually at conferences, which brings enthusiasts from all around the world together to engage in this race against the clock that is a blend of hardware, software, and so much more. Here is a video from Veritasium introducing the history of Micromouse:

${video('ZMQbHMgK2rw', 'Veritasium: The Fastest Maze-Solving Competition On Earth')}

It is hard to believe that barely 3 years after watching this sci-fi-like video, I am making a micromouse of my own!

My story with micromouse began in 10th grade summer, during an experience program where I first learned the very basics of electrical engineering (how to flash an LED, through-hole soldering for the first time in my life). We were led by a team of student mentors at ShanghaiTech and made some micro(macro)mice with ROS and LiDAR. I barely understood anything at that time, but it was a great eye-opener!

After coming to Tech, I was thrilled to learn that the RoboRacing subteam of [RoboJackets](https://robojackets.org/) is piloting a new member program where we make micromice, so I joined! Through my first year fall semester, I attended electrical trainings from awesome mentors, binged KiCad tutorials, and after iterations of asking upperclassmen “will this blow up” in design reviews and many late nights re-routing, we had our first ever micromouse PCB – also my first PCB! And the best part about it? It works, hardware-wise! We named our mouse Ratatouilli and brought him to participate in APEC 2026 this March in San Antonio.

I designed Zuko during summer vacation using EasyEDA, an online PCB design software by JLCPCB (嘉立创, Chinese PCB manufacturer). I ordered the board and all the parts right before returning to campus for Fall semester, so the goal for this semester will be to solder & assemble Zuko!

The vision for Zuko V1 is to be like Zuko in ATLA season 1, where he’s still making mistakes and trying to find his way to restore his honor… So I’m not expecting too much from him – building Zuko is meant to be a great low-stakes learning opportunity for myself.

[Here are the project files if you are interested!](/projects/zuko-project-files)


`

const zukoTimeline = `
## Timeline this Fall

### Oct 1 (W6.4) · Stencil!

The first part to soldering all these tiny [SMD]{surface-mount, compared to through-hole (THT)} parts onto a robot is to make a stencil. The purpose for a stencil is that I lay the stencil over the board and the stencil will only leave the solder pads exposed. This way, I can scrape [solder paste]{basically tiny balls of low-melting temperature solder in flux} over the entire board and solder paste will only be dispensed onto the pads. After applying solder paste, I can then manually tweezer all the components into place and put the mouse into a reflow soldering oven to bake for ~3 minutes so everything comes out soldered!

The stencil is made out of a [cool material]{free!} available at the Hive Makerspace. To make the stencil, I used the protolaser in the PCB room that apparently also makes PCBs by engraving copper! Watching it work is like watching a turbo-crazy-mode laser cutter, the entire process takes less than a minute.

<div class="zuko-gallery">
${photo('stencil', 'machine.png', 'The protolaser at the Hive')}
${photo('stencil', 'stencil.png', 'The finished stencil')}
</div>

${video('CDxanloDICQ', 'Making Zuko’s stencil with the protolaser')}


### Oct 2 (W6.5) · Reflow soldering!!

This is the part where I struggle to hold the stencil down flat on the board to apply the right amount of solder paste. I tried, and wiped everything off around 7 times, since it always seems to end up being too much. In the end, I asked Stevie (Our awesome Hive director, who shall also be my ECE2040 professor for next semester!) for advice, and he suggested using a tool to scrape off some solder paste between the pads. After some scraping, it looked like I was ready to begin the process of tweezering all the tiny 0603 RCs into place.

<div class="zuko-gallery">
${photo('reflow', 'applypaste.png', 'Applying solder paste')}
${photo('reflow', 'tweezering.png', 'Tweezering the tiny components into place')}
${photo('reflow', 'halfway.png', 'Halfway through placing components')}
${photo('reflow', 'oven.png', 'Into the reflow oven!')}
${photo('reflow', 'robot.jpg', 'Zuko coming together')}
</div>

The amount of solder paste I applied still ended up being too much.

But despite the bridged pins of my motor driver and the blobs of solder around my gyro and buck converters, everything is just so cool! I left the Hive to walk home very happy and very proud – the board is coming together!


### Oct 9 (W7.5) · Desoldering

The following Friday, I dropped by the Hive, asked for a hot air gun, and removed the badly soldered components. I also had to use some desoldering wick to suck up the remaining solder on the pads to prepare for resoldering.

${photo('de:resoldering', 'desoldered.jpg', 'The board after desoldering')}


### Oct 26 (W10.1) · Resoldering!

Solder-paste + hot-air-gun + lots of flux!

Shoutout to KR4IEU for teaching me to hot-air-gun these tricky tiny components and letting me use the really nice flux!

Upon returning home, I plugged Zuko in for the first time!

${photo('de:resoldering', 'plugged_in.jpg', 'Zuko plugged in for the first time')}

Nothing exploded, and the 5V indicator LED is on! (Plugging in USB-C brings 5V supply into the board.)


### Nov 2 (W11.1) · Testing

When I plugged in the USB-C, I expected the 3.3V indicator LED to be on after going through a 5V → 3.3V buck converter. But it wasn’t. So I thought there was something really wrong going on.

BUT upon checking my schematic, it turned out that my two buck converters were actually 7.4V to 5V and 7.4V to 3.3V respectively, so naturally the 3.3V LED wouldn’t be on when I plugged in the 5V USB supply, which (a) yay there was not a really wrong thing going on but (b) raises the questionable design intent which means I need battery power in to activate the 3.3V rail if I want to program the board by plugging in the 5V USB-C connection. Perhaps I thought this was ok when I designed it, since I added a [Schottky]{reads as “shot key”} diode to protect the computer USB-C 5V from the buck converter output 5V? (Or, maybe power the 3.3V converter input from USB 5V through a suitable programming-power jumper? I’ll need to check the circuit first.)

In order to test the board I soldered in the JST-PH battery connector, the switch, and the power MOSFET (FQP27P06) and provided the external supply voltage into the battery input.

<div class="zuko-gallery">
${photo('testing', 'voltage supply.png', 'External voltage supply for testing')}
${photo('testing', 'testing.png', 'Testing the board')}
${photo('testing', 'indicator LEDs working.png', 'Indicator LEDs working')}
</div>

After some other testing, I realized that my switch doesn’t work in that the robot is just ON when the battery is plugged in. When the battery is not connected, I used the digital multimeter CONT (continuity) function to test the switch positions, and the two terminals close to the battery measure about 100 ohms when the switch is inactive and are connected when the switch is active, so I don’t think there’s anything wrong with the switch either. From the 3D preview and the silkscreen/footprints, my MOSFET also seems to be soldered in the right way. So what is the problem?!!!

- [TODO]: I’ll check the battery circuit and the MOSFET threshold voltages and the resistor values, and really actually learn how the battery turn-on circuit works.
- [TODO]: Debug the switch.

🎉 My 3.3V rail works! The voltage reading between the 3.3V pads and the GND pads is around 3.23V.

🤔 BUT WHY is my 5V rail at 2.4V?!!

I’m using the exact same buck converter circuit for 5V and 3.3V with all components and values directly copied from the datasheet application circuit.

I’m suspecting that the buck converter is soldered in slightly at an angle and upon viewing beneath the microscope, it seems like the GND pin (pin 4) is slightly off the pad.

<div class="zuko-gallery">
${photo('testing', '3.3V works.png', 'The 3.3V rail measures about 3.23V')}
${photo('testing', '5V only 2.4V.png', 'The 5V rail only measures 2.4V')}
</div>

- [TODO]: I will try desoldering and resoldering U5 again.


### Nov 5 (W11.4)

Update: The top half of the inductor for the 5V buck converter circuit just fell off the board ?!!!

Anyways, resoldering… Next Monday perhaps.
`

// Keep each major section independently renderable as a card.
export const zukoSections = [
  { id: 'intro', content: zukoIntro },
  { id: 'timeline', content: zukoTimeline },
]
export const zukoContent = zukoSections.map(section => section.content).join('\n\n')
