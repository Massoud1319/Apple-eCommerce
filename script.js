//start of common js
document.querySelectorAll('.watch-control,.controls a,.iphone-button').forEach(control => {
        control.addEventListener('click', e => {
            e.preventDefault()
        })
    })
    //end of common js



// start making the iphone, controls

let x = 0
let y = 20
let z = 0
let bool = true
let interval;
const iphone = document.querySelector('.iphone')
document.querySelector('.top-x-control').addEventListener('click', () => {
    iphone.style.transform = `rotateX(${x+=20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})
document.querySelector('.bottom-x-control').addEventListener('click', () => {
    iphone.style.transform = `rotateX(${x -= 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})

document.querySelector('.left-y-control').addEventListener('click', () => {
    iphone.style.transform = `rotateX(${x}deg) rotateY(${y -= 20}deg) rotateZ(${z}deg) `
})

document.querySelector('.right-y-control').addEventListener('click', () => {
    iphone.style.transform = `rotateX(${x}deg) rotateY(${y += 20}deg) rotateZ(${z}deg) `
})

document.querySelector('.top-z-control').addEventListener('click', () => {
    iphone.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z -= 20}deg) `
})

document.querySelector('.bottom-z-control').addEventListener('click', () => {
    iphone.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z += 20}deg) `
})



/*makimg interval to transform iphone */

const playPause = () => {
    if (bool) {
        interval = setInterval(() => {
            iphone.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`
        }, 100)
    } else {
        clearInterval(interval)
    }
}
playPause()
    /*end making interval to tranform iphone*/



/* making mouseover on controls to affect iphone*/

document.querySelector('.controls').addEventListener('mouseover', () => {
    bool = false
    playPause()
})
document.querySelector('.controls').addEventListener('mouseout', () => {
        bool = true
        playPause()
    })
    // end of mouseover and mouseout events
    //end of iphone and iphone controls 


// first making the change background for section one

const backgroundShowDivs = () => {
    for (let i = 0; i <= 5; i++) {
        const div = document.createElement('div')
        div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`
        i === 1 && div.classList.add('change')
        document.querySelector('.section-one-background').appendChild(div)
    }
}

backgroundShowDivs()

// section three
const section3Content = document.querySelector('.section-three-content')

window.addEventListener('scroll', () => {
        if (window.pageYOffset + window.innerHeight >= section3Content.offsetTop + section3Content.offsetHeight / 2) {
            section3Content.classList.add('change')
        }
    })
    // end section three

// start section four
const verticalContainer = document.querySelector('.vertical-container')
const horizontalContainer = document.querySelector('.horizontal-container')
    //
const watchTopControl = document.querySelector('.watch-top-control')
const watchRightControl = document.querySelector('.watch-right-control')
const watchBottomControl = document.querySelector('.watch-bottom-control')
const watchLeftControl = document.querySelector('.watch-left-control')
    // 
let axisX = 0
let axisY = 0
const hideControl = () => {
    if (axisY === -280) {
        watchTopControl.classList.add('hideControl')
    } else {
        watchTopControl.classList.remove('hideControl')
    }
    if (axisY === 280) {
        watchBottomControl.classList.add('hideControl')
    } else {
        watchBottomControl.classList.remove('hideControl')
    }
    if (axisX === 280) {
        watchRightControl.classList.add('hideControl')
    } else {
        watchRightControl.classList.remove('hideControl')
    }

    if (axisX === -280) {
        watchLeftControl.classList.add('hideControl')
    } else {
        watchLeftControl.classList.remove('hideControl')
    }
}

// making event on click axisS
watchTopControl.addEventListener('click', () => {
    verticalContainer.style.marginTop = `${axisY-=70}rem`
    hideControl()
})

watchBottomControl.addEventListener('click', () => {
    verticalContainer.style.marginTop = `${axisY+=70}rem`
    hideControl()
})

watchRightControl.addEventListener('click', () => {
    horizontalContainer.style.marginRight = `${axisX+=70}rem`
    hideControl()
})
watchLeftControl.addEventListener('click', () => {
        horizontalContainer.style.marginRight = `${axisX-=70}rem`
        hideControl()
    })
    // end section four