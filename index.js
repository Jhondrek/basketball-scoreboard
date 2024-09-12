// element references from html
const homeScoreEl = document.getElementById("home-score-el")
const guestScoreEl = document.getElementById("guest-score-el")

// score counters
let homeScore = 0
let guestScore = 0

// click listeners for the home score

document.getElementById("home-one-point-btn").addEventListener("click", ()=>{
    homeScore +=1
    homeScoreEl.innerText = homeScore
    })

document.getElementById("home-two-points-btn").addEventListener("click", ()=>{homeScore +=2
    homeScoreEl.innerText = homeScore})

document.getElementById("home-three-points-btn").addEventListener("click", ()=>{homeScore +=3
        homeScoreEl.innerText = homeScore})

// click listeners for the guest score

document.getElementById("guest-one-point-btn").addEventListener("click", ()=>{guestScore +=1
    guestScoreEl.innerText = guestScore})
    
    document.getElementById("guest-two-points-btn").addEventListener("click", ()=>{guestScore +=2
        guestScoreEl.innerText = guestScore})
    
    document.getElementById("guest-three-points-btn").addEventListener("click", ()=>{guestScore +=3
        guestScoreEl.innerText = guestScore})

// reset score listener

document.getElementById("reset-score-el").addEventListener("click", ()=>{
    homeScoreEl.innerText = 0
    guestScoreEl.innerText = 0
     homeScore = 0
     guestScore = 0
})
addEventListener("click", enlightWinnerScore)


function enlightWinnerScore(){
    if(homeScore===guestScore){
        homeScoreEl.style.boxShadow="none"
        guestScoreEl.style.boxShadow="none"
    }
    else if(homeScore>guestScore){
        homeScoreEl.style.boxShadow="0px 0px 15px #9AABD8"
        guestScoreEl.style.boxShadow="0px 0px 0px"
        
    }else if(guestScore>homeScore){
        guestScoreEl.style.boxShadow = "0px 0px 15px #9AABD8"
        homeScoreEl.style.boxShadow = "0px 0px 0px"
    }
}