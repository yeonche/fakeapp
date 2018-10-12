var bgBox = box().append().size('100%').color('White').border(3)

var titleBox = box().appendTo(bgBox).size('100%','23%').color('red').image('https://www.ilbe.com/files/attach/images/14357299/056/368/203/d53503faa127de11d6ead6da4af7f140.jpg').text('당신은 낚였습니다').textColor('blue').textSize(10);
var clearbox = box().appendTo(titleBox).size(30,30).border(1);
var menuBox = box().appendTo(bgBox).size('25%','20%').color('yellow').click(clicks)
var menuBox2 = box().appendTo(bgBox).size('25%','20%').color('White').click(clicks)
var menuBox3 = box().appendTo(bgBox).size('25%','20%').color('red').click(clicks)
var menuBox4 = box().appendTo(bgBox).size('25%','20%').color('blue').click(clicks).click(go);
var hios = box().appendTo(titleBox).size(50,50).image('https://steamuserimages-a.akamaihd.net/ugc/99476522504015364/2CE1724349401A73DD94EF8F9723D428E3F6AF2D/?interpolation=lanczos-none&output-format=jpeg&output-quality=95&fit=inside%7C268%3A268&composite-to=*,*%7C268%3A268&background-color=black').click(hos)
var mainBox = box().appendTo(bgBox).size('100%','75%').color('yellow').show()
var mainBox2 = box().appendTo(bgBox).size('100%','75%').color('White').hide()
var mainBox3 = box().appendTo(bgBox).size('100%','75%').color('red').hide()
var mainBox4 = box().appendTo(bgBox).size('100%','75%').color('blue').hide()
var showbar = box().appendTo(clearbox).size(30,30).color('#FE2EF7').left(100).click(movehide);
var hidebar = box().append().size('45%',500).color('#2EFEF7').left(-100).positionFixed().click(moveshow);
var luckybox = box().appendTo(hidebar).size(50,50).color('orange').text('럭키박스').textSize(6).textColor('purple').click(showyud)
var yudbox = box().append().size('70%').image('http://cfile10.uf.tistory.com/image/231A41425342A02408330A')
.click(showyud).positionFixed().center().hide();
var hyum = box().appendTo(mainBox2).size(300,300).image('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYDadKgEqRatDHJNpKyL-r8XDVXxrrZXG-PBuByOj2rTXujES_A')
.click(stak)
var zero2 =box().appendTo(mainBox3).size('70%')
        .image('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsSBah-z8MPPRCV_2_JzWc2l_qPYo0v_7H1sGYGgwXl48gL3rjsA')
var zero = box().appendTo(mainBox3).size('50%').positionFixed().image('https://ncache.ilbe.com/files/attach/new/20150611/12247466/1772432454/5987825053/951d04881f30f9a43dc07ea5c87cb498.gif').left(30);


function clicks(bx) {

if (bx == menuBox){
    mainBox.show()
    mainBox2.hide()
   mainBox3.hide()
    mainBox4.hide()
 
    
}

else if (bx == menuBox2){
    mainBox.hide()
    mainBox2.show()
   mainBox3.hide()
    mainBox4.hide()
}  
else if (bx == menuBox3){
    mainBox.hide()
    mainBox2.hide()
   mainBox3.show()
    mainBox4.hide()
}
    else if (bx == menuBox4){
    mainBox.hide()
    mainBox2.hide()
   mainBox3.hide()
    mainBox4.show()
    }
 
}

function movehide(bx) {
    hidebar.moveRight(250,1000)
    
}

function moveshow(bx) {
    hidebar.moveleft(250,1000)
}

function showyud(bx) {
    yudbox.show();
    alert('응 아니야');
}

function hos(bx){
    location='https://kr.battle.net/heroes/ko/'
}


function stak(bx){
    alert('드디어 각성했나!')
    var sathow = box().append().image('https://pbs.twimg.com/media/C_LlJPoUQAAE9bd.jpg').size(80,80).moveTo('random')
    .positionFixed().click('sin');
}

function go(bx) {
    location='http://www.realcoding.co/home/#';
}