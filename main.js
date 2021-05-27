
function rand(max=2, min=0){
    return Math.floor(Math.random()*(max-min)+min)
}

const scr=['W',1,2,3,4,6,1,4,'W',6,2];
let scrBox=null;
const main= ()=>{
    const pp = document.createElement('div');
    pp.classList.add('full','flex','main','flexColRev','gameScr')
    document.body.appendChild(pp);
    
    let teamBox=document.createElement ('div')
    teamBox.classList.add('teamBox','full','abs','top','flex','center','flexCol');
    pp.appendChild(teamBox );
    
    
    teamBox.innerHTML="<div><label for='myteam'>Your Team :</label></div><select id='myteam'><option value=-1 selected>None</option><option value=0>Delhi Capitals</option><option value=1>Punjab Kings</option><option value=2>Kolkata knight Riders</option><option value=3>Royal Challengers Banglore</option><option value=4>Chennai Super Kings</option><option value=5>Mumbai Indians</option><option value=6>Rajasthan Royals</option><option value=7>Sunrises Hyderabad</option></select>"+
    "<div id='myteamPly' class='flex center'></div>"+
    "<br><div><label for='myteam'>Opponent Team :</label></div><select id='oppo'><option value=-1 selected>None</option><option value=0>Delhi Capitals</option><option value=1>Punjab Kings</option><option value=2>Kolkata knight Riders</option><option value=3>Royal Challengers Banglore</option><option value=4>Chennai Super Kings</option><option value=5>Mumbai Indians</option><option value=6>Rajasthan Royals</option><option value=7>Sunrises Hyderabad</option></select>"+
    "<div id='oppoPly' class='flex center'></div>"+
    "<button>Start Match</button>";
    
    let count=9;
    while(count--){
        let box=document.createElement('div');
        box.classList.add('box','flex','center');
        let span=document.createElement('span');
        span.classList.add('boxChild','flex','center');
        if(count==4){
        span.style.background='blueviolet';
        span.classList.add( 'loopRuns');
        span.style.opacity=1;}
        span.innerText= scr[count];
        box.appendChild (span);
        pp.appendChild(box);
    }
    scrBox= document.querySelectorAll('.boxChild');
}

function move(){
    document.querySelector('.loopRuns').innerText = scr[rand(scr.length)];
    isClickOnce =true;
    
}

let myteam=null,oppo=null;
window.addEventListener('load', ()=>{
        main()
        myteam=document.getElementById('myteam')
        myteamPlyShow= document.getElementById('myteamPly');
       
        oppo=document.getElementById('oppo')
        
        oppoPlyShow = document.getElementById('oppoPly');
        setMatch()
        
        //setInterval(move,250)
        
        document.querySelector(".teamBox button").addEventListener('click',()=>{
            document.querySelector('.teamBox').style.display='none'
            document.querySelectorAll('.boxChild')[4].style.background  = teams[myteam.value].rgb;
            //toss();
            runFromOppo();
            //setInterval(move,250)
        })
})



let teams=[
{
    acronym : 'DC',
    rgb : 'rgba(0,59,175,0.8)',
    players : ["R Chant(C)","S Dhawan","K Kabada","A Mishra"],
    runs : [42, 50, 20, 70, 35, 56]
},
{
    acronym : 'PBKS',
    rgb : 'rgba(220,49,49,0.9)',
    players : ["Gayle Pel","KL Rahul(C)","M Shami","Harpreet"],
    runs : [42, 50, 20, 40, 35, 56]
},
{
    acronym : 'KKR',
    rgb : 'rgba(95,81,181,0.9)',
    players : ["D Cartik(C)","A Muscle","S Narine","P Cummins"],
    runs : [42, 50, 20, 70, 35, 56]
},
{
    acronym : 'RCB',
    rgb : 'rgba(220,29,9,0.9)',
    players : ["V Goli(C)","AB Deliver","H Patel","Y Kehar"],
    runs : [42, 50, 20, 70, 35, 56]
},
{
    acronym : 'CSK',
    rgb : 'rgba(207,187,0, 1)',
    players : ["S Raina","M Dhoni(C)","R Chadeja","D Chahar"],
    runs : [42, 50, 20, 70, 35, 56]
},
{
    acronym : 'MI',
    rgb : 'rgba(0,107,205,0.8)',
    players : ["RoHit(C)", "K Pollard","J Jumrah","T Bold"],
    runs : [42, 50, 20, 70, 35, 56]
},
{
    acronym : 'RR',
    rgb : 'hotpink',
    players : ["J Butter","S Samsung(C)","C MorRisk","J UnadCut"],
    runs : [20, 50, 20, 70, 35, 56]
},
{
    acronym : 'SRH',
    rgb : 'orange',
    players : ["D Warning","Kane W(C)", "Rashid k","Bhuvneshwar"],
    runs : [42, 50, 20, 70, 35, 56]
}
]

function setMatch (){
    myteam.addEventListener('change',()=>{
    let i=myteam.value;
    showBtn()
    if(i==-1) return;
        myteam.style.background = teams[i].rgb;
        myteam.style.color ='white'
        myteamPlyShow.style.color=teams[i].rgb
        myteamPlyShow.innerText =''
        
       for(let ply in teams[i].players)
           if(!isNaN(ply)){ 
          let pre_ply=myteamPlyShow.innerText;
          pre_ply ? myteamPlyShow.innerHTML=pre_ply+
          "<span class='seperator'>|</span>"
          +teams[i].players[ply] : 
          myteamPlyShow.innerText=teams[i].players[ply]
           }
          
    })
    
    oppo.addEventListener('change',()=>{
    let i = oppo.value;
    showBtn()
    if(i==-1) return
        oppo.style.background = teams[i].rgb;
        
       oppo.style.color='white'
        oppoPlyShow.style.color=teams[i].rgb
        oppoPlyShow.innerText =''
        
        for(let ply in teams[i].players)
           if(!isNaN(ply)){ 
          let pre_ply=oppoPlyShow.innerText;
          pre_ply ? oppoPlyShow.innerHTML=pre_ply+
          "<span class='seperator'>|</span>"
          +teams[i].players[ply] : 
          oppoPlyShow.innerText=teams[i].players[ply]
           }
        
    })
}

function showBtn(){
if(myteam.value!=-1 && oppo.value!=-1 && myteam.value!==oppo.value)
    document.querySelector(".teamBox button").style.visibility = 'visible';
    else
    document.querySelector(".teamBox button").style.visibility = 'hidden'
}



function toss(){
    let toss=document.createElement ('div')
    toss.classList.add('tossBox',"flex","flexCol","center","abs","top","full")
    
    document.body.appendChild(toss)
    
    toss.innerHTML = "<div class='choice flex spceven'><div onclick='tossUp(this)'>Head</div>" +
    "<div onclick='tossUp(this)'>Tail</div></div>"+
    "<div class='whowin'></div>"

}

let coin=['Head','Tail']
function tossUp(ele){
    let toss=rand();
   
   if(ele.innerText == coin[toss]) document.querySelector('.whowin').innerHTML= teams[myteam.value].acronym +" Won the Toss"
   else
   document.querySelector('.whowin').innerHTML= teams[myteam.value].acronym +" Loss the Toss"
}


let overs = [ 2, 3, 4];
let selectOver =null;
let runsNeed;
function runFromOppo(){
let runOppo = teams[oppo.value].runs;

selectOver=overs[rand(overs.length)];
runsNeed = runOppo[rand(runOppo.length)];

    let target=document.createElement ('div')
    target.classList.add('targetBox',"flex","flexCol","center","abs","top","full")
    
    document.body.appendChild(target)
    target.style.color = teams[myteam.value].rgb;
    
    target.innerHTML = teams[myteam.value].acronym + ' have target of ' + runsNeed  + ' in ' + selectOver + ' overs'+
    "<div class='button' onclick='start()'>Chase Now</div><br>"
  // "<div class='info'>Play tip: click anywhere on screen to score runs</div>";
}

let movehits = null;
let gameScreen;
function start(){
   gameScreen = document.querySelector('.gameScr');
    document.querySelector('.targetBox').style.display ='none';
    gameScreen.addEventListener('click',()=>{
        if(isClickOnce) stop();
    });

    movehits= setInterval(move,250)
    
    matchInfo();
    
}

let isClickOnce=true;
let runscore= 0;
let wicketsDown = 0;
let overNo=0;
let overdecimal = 0;
function stop(){
    isClickOnce = false ;
    
   let runScore=document.querySelector('.loopRuns').innerText;
   if(runScore!='W'){
       runscore+= Math.floor(runScore);
    document.querySelector('.runsneed').innerText = "Runs: " + 
           runscore + 
           '/' + 
           runsNeed;
    }
    else{
       wicketsDown++;
        document.querySelector('.wicketinfo').innerText = 'Wickets : ' + wicketsDown + '/4';
    }
    
    if(overdecimal<5){
        overdecimal++;
    }
    else{
        overdecimal=0;
        overNo++;
    }
    
    document.querySelector('.oversneed').innerHTML ='Overs : '+
          overNo
          + '.' +
          overdecimal
          +'/'+
          selectOver +'.0';
    
    
    clearInterval(movehits);
    
    if(runscore>=runsNeed && overNo >= selectOver)
    {
        gameEnd("What a Interesting Match!", 1)
        return ;
    }
    else if(overNo >= selectOver)
    {
        gameEnd("No Overs Left!", 0)
        return ;
    }
    else if(runscore>=runsNeed)
    {
        gameEnd("What a Win!", 1)
        return ;
    }
    else if(wicketsDown>3)
    {
        gameEnd("Wickets gone!", 0)
        return ;
    }
    
    
    setTimeout(
        ()=>{
            movehits= setInterval(move,250);
            
        },
        400
    ) 
    
}


function matchInfo(){
    let wicketinfo = document.createElement ('div');
    gameScreen.appendChild (wicketinfo);
    wicketinfo.innerHTML ='Wickets :      0/4';
    wicketinfo.classList.add('wicketinfo' , 'same');
    
   overs : {
        
    let runsneed = document.createElement ('div');
    gameScreen.appendChild (runsneed);
runsneed.innerHTML ='Overs: 0/'+selectOver +'.0';
    runsneed.classList.add('oversneed','same');
    } 
    
    let runsneed = document.createElement ('div');
    gameScreen.appendChild (runsneed);
runsneed.innerHTML ='Runs: 0/'+runsNeed;
    runsneed.classList.add('runsneed','same');
    
}


function gameEnd(quote, num){
    let bbb= document.createElement('div');
    gameScreen.appendChild(bbb);
    bbb.classList.add('flex','flexCol','full','abs','top','center','matchOverBox');
    let head = document.createElement('div');
    bbb.appendChild(head);
    head.classList.add('headReport');
    
    
    let bb= document.createElement('div');
    bbb.appendChild (bb);
    bb.classList.add('report');
    
    let team = teams[myteam.value].acronym;
    let teamCol = teams[myteam.value].rgb;
    if(num){
    head.innerHTML="Win";
    let wicketinhand = 4 - wicketsDown;
    bb.innerHTML = "<span style='color:"
        + teamCol + ";'>"
        + quote + "</span>" +
        "<br>Congratulations, " 
        + team +
        " Wins the Match By " +
        wicketinhand +
        " wickets" 
        + "<br> A Big Win for " 
        + team +
        " and their fans."
    bb.style.color = 'blue';
    }
    else{
    head.innerHTML="Lose";
    let runs = runsNeed - runscore -1;
    bb.innerHTML = "<span style='color:"
        + teamCol + ";'>"
        + quote + "</span>" +
        "<br>Ohh! , " 
        + team + 
        " Lose the Match By " +
        runs +
        " runs."
        + "<br>Definitely, " 
        + team +
        " fans disappointed but don't worry as , This team knows how to ComeBack!";
    bb.style.color = "red";
    }
    
}

