// welcome message javascript starts here

welcomeText (['Welcome To Code Mentor.','Click Blog Link For Reading Our Blogs.'],'welcome-text-heading',['#2B4865','#2B4865']);

function welcomeText(words, id, colors) {
if(colors === undefined) colors = ['#fff'];
var visible = true;
var con = document.getElementById('getcursor');
var letterCount = 1;
var x = 1;
var waiting = false;
var target = document.getElementById(id);
target.setAttribute('style','color:' +colors[0])
window.setInterval(function () {
    if(letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount)
        window.setTimeout ( function () {
            var usedcolor = colors.shift();
            colors.push(usedcolor);
            var usedword = words.shift();
            words.push(usedword);
            x = 1;
            target.setAttribute('style','color:' +colors[0]);
            letterCount += x;
            waiting = false;
        }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout( function() {
            x = -1;
            letterCount += x;
            waiting = false;
        }, 1000)
    } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount)
        letterCount += x;
    }
}, 120)

    window.setInterval( function() {
        if(visible === true) {
          con.className = 'cursor hidden'
          visible = false;  
        }else {
            con.className = 'cursor'
            visible = true;
        }
    }, 400)
}
// welcome message javascript ends here


// windows-11-installation javascript starts here
var usermessagebox = document.getElementsByName('user-message-box')[0];
var messageSubmitBtn = document.getElementById('submit-btn');

function changColor(){
    if(usermessagebox.value != ''){
        messageSubmitBtn.style.background = 'green';
    }else{
        return false;
    }
}


// windows-11-installation javascript ends here

