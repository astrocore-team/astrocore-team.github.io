function RandomSound() {
    Stop_all()
    let elements = document.getElementsByTagName('audio');;
    let arrayOfElements = Array.from(elements);
    var item = arrayOfElements[Math.floor(Math.random()*arrayOfElements.length)];
    item.play()
}
function myFunction() {
let input = document.getElementById('searchbar').value
input=input.toLowerCase();
let x = document.getElementsByClassName('Button');
  
for (i = 0; i < x.length; i++) { 
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display="none";
    }
    else {
        x[i].style.display="unset";                 
    }
}
}
const speech = new SpeechSynthesisUtterance();
function tts() {
    if(event.keyCode == 13) {
      let input = document.getElementById('texttospeech').value
      speech.text = input;
      if (input == 'russia is better than ukraine' || input == 'Russia Is Better Than Ukraine' || input == 'Russia is better than Ukraine'){
          Talking_Ben_No()
          return
      }
      else {
        window.speechSynthesis.speak(speech);
      }
    }
}
function Stop_all(){
    speechSynthesis.cancel();
    var sounds = document.getElementsByTagName('audio');
    for(i=0; i<sounds.length; i++) sounds[i].pause();
    for(i=0; i<sounds.length; i++) sounds[i].currentTime=0;
};
function Moaning_Ear_Rape() {
    Stop_all()
    document.getElementById('Moaning').currentTime=0;
    document.getElementById('Moaning').play();
}
function Talking_Ben_Laugh() {
    Stop_all()
    document.getElementById('BenLaugh').currentTime=0;
    document.getElementById('BenLaugh').play();
}
function Pussy() {
    Stop_all()
    document.getElementById('Pussy').currentTime=0;
    document.getElementById('Pussy').play();
}
function Titanic() {
    Stop_all()
    document.getElementById('Titanic').currentTime=0;
    document.getElementById('Titanic').play();
}
function Rickroll() {
    Stop_all()
    document.getElementById('Rickroll').currentTime=0;
    document.getElementById('Rickroll').play();
}
function TitanicParody() {
    Stop_all()
    document.getElementById('TitanicParody').currentTime=0;
    document.getElementById('TitanicParody').play();
}
function EmotionalDamage() {
    Stop_all()
    document.getElementById('EmotionalDamage').currentTime=0;
    document.getElementById('EmotionalDamage').play();
}
function TheNextEpisode() {
    Stop_all()
    document.getElementById('TheNextEpisode').currentTime=0;
    document.getElementById('TheNextEpisode').play();
}
function StillDre() {
    Stop_all()
    document.getElementById('Still Dre').currentTime=0;
    document.getElementById('Still Dre').play();
}
function Mundiantobachke() {
    Stop_all()
    document.getElementById('Mundiantobachke').currentTime=0;
    document.getElementById('Mundiantobachke').play();
}
function Crickets() {
    Stop_all()
    document.getElementById('Crickets').currentTime=0;
    document.getElementById('Crickets').play();
}
function DiscordCall() {
    Stop_all()
    document.getElementById('DiscordCall').currentTime=0;
    document.getElementById('DiscordCall').play();
}
function DiscordCall() {
    Stop_all()
    document.getElementById('DiscordCall').currentTime=0;
    document.getElementById('DiscordCall').play();
}
function WindowsXpError() {
    Stop_all()
    document.getElementById('WindowsXpError').currentTime=0;
    document.getElementById('WindowsXpError').play();
}
function ReverbFart() {
    Stop_all()
    document.getElementById('ReverbFart').currentTime=0;
    document.getElementById('ReverbFart').play();
}
function FbiOpen() {
    Stop_all()
    document.getElementById('FbiOpen').currentTime=0;
    document.getElementById('FbiOpen').play();
}
function NormalMoan() {
    Stop_all()
    document.getElementById('NormalMoan').currentTime=0;
    document.getElementById('NormalMoan').play();
}
function Bruh() {
    Stop_all()
    document.getElementById('Bruh').currentTime=0;
    document.getElementById('Bruh').play();
}
function Ohnono() {
    Stop_all()
    document.getElementById('Ohnono').currentTime=0;
    document.getElementById('Ohnono').play();
}
function Fart() {
    Stop_all()
    document.getElementById('Fart').currentTime=0;
    document.getElementById('Fart').play();
}
function Community() {
    Stop_all()
    document.getElementById('Community').currentTime=0;
    document.getElementById('Community').play();
}
function WindowsXpShutdown() {
    Stop_all()
    document.getElementById('WindowsXpShutdown').currentTime=0;
    document.getElementById('WindowsXpShutdown').play();
}
function Suprise() {
    Stop_all()
    document.getElementById('Suprise').currentTime=0;
    document.getElementById('Suprise').play();
}
function VineBoom() {
    Stop_all()
    document.getElementById('VineBoom').currentTime=0;
    document.getElementById('VineBoom').play();
}
function StepBro() {
    Stop_all()
    document.getElementById('StepBro').currentTime=0;
    document.getElementById('StepBro').play();
}
function Wrong() {
    Stop_all()
    document.getElementById('Wrong').currentTime=0;
    document.getElementById('Wrong').play();
}
function RUN() {
    Stop_all()
    document.getElementById('RUN').currentTime=0;
    document.getElementById('RUN').play();
}
function GodPleaseNo() {
    Stop_all()
    document.getElementById('GodPleaseNo').currentTime=0;
    document.getElementById('GodPleaseNo').play();
}
function Fatality() {
    Stop_all()
    document.getElementById('Fatality').currentTime=0;
    document.getElementById('Fatality').play();
}
function WhatTheDog() {
    Stop_all()
    document.getElementById('WhatTheDog').currentTime=0;
    document.getElementById('WhatTheDog').play();
}
function MoanBarkFart() {
    Stop_all()
    document.getElementById('MoanBarkFart').currentTime=0;
    document.getElementById('MoanBarkFart').play();
}
function McVilager() {
    Stop_all()
    document.getElementById('McVilager').currentTime=0;
    document.getElementById('McVilager').play();
}
function WhyYouBullyMe() {
    Stop_all()
    document.getElementById('WhyYouBullyMe').currentTime=0;
    document.getElementById('WhyYouBullyMe').play();
}
function DiscordLeave() {
    Stop_all()
    document.getElementById('DiscordLeave').currentTime=0;
    document.getElementById('DiscordLeave').play();
}
function YodaDeath() {
    Stop_all()
    document.getElementById('YodaDeath').currentTime=0;
    document.getElementById('YodaDeath').play();
}
function ShutupCunt() {
    Stop_all()
    document.getElementById('ShutupCunt').currentTime=0;
    document.getElementById('ShutupCunt').play();
}
function NiceCockWii() {
    Stop_all()
    document.getElementById('NiceCockWii').currentTime=0;
    document.getElementById('NiceCockWii').play();
}
function DiscordJoin() {
    Stop_all()
    document.getElementById('DiscordJoin').currentTime=0;
    document.getElementById('DiscordJoin').play();
}
function Nope() {
    Stop_all()
    document.getElementById('Nope').currentTime=0;
    document.getElementById('Nope').play();
}
function Airhorn() {
    Stop_all()
    document.getElementById('Airhorn').currentTime=0;
    document.getElementById('Airhorn').play();
}
function FnafScream() {
    Stop_all()
    document.getElementById('FnafScream').currentTime=0;
    document.getElementById('FnafScream').play();
}
function GoSuckADick() {
    Stop_all()
    document.getElementById('GoSuckADick').currentTime=0;
    document.getElementById('GoSuckADick').play();
}
function BallsOfSteel() {
    Stop_all()
    document.getElementById('BallsOfSteel').currentTime=0;
    document.getElementById('BallsOfSteel').play();
}
function SmokeWeed() {
    Stop_all()
    document.getElementById('SmokeWeed').currentTime=0;
    document.getElementById('SmokeWeed').play();
}
function Knocking() {
    Stop_all()
    document.getElementById('Knocking').currentTime=0;
    document.getElementById('Knocking').play();
}
function LetsGo() {
    Stop_all()
    document.getElementById('LetsGo').currentTime=0;
    document.getElementById('LetsGo').play();
}
function OniChanMoaning() {
    Stop_all()
    document.getElementById('OniChanMoaning').currentTime=0;
    document.getElementById('OniChanMoaning').play();
}
function ToBeContinued() {
    Stop_all()
    document.getElementById('ToBeContinued').currentTime=0;
    document.getElementById('ToBeContinued').play();
}
function YourGay() {
    Stop_all()
    document.getElementById('YourGay').currentTime=0;
    document.getElementById('YourGay').play();
}
function DiscordPing() {
    Stop_all()
    document.getElementById('DiscordPing').currentTime=0;
    document.getElementById('DiscordPing').play();
}
function AmongUsMenu() {
    Stop_all()
    document.getElementById('AmongUsMenu').currentTime=0;
    document.getElementById('AmongUsMenu').play();
}
function AmongUsDrip() {
    Stop_all()
    document.getElementById('AmongUsDrip').currentTime=0;
    document.getElementById('AmongUsDrip').play();
}
function AmongUsScream() {
    Stop_all()
    document.getElementById('AmongUsScream').currentTime=0;
    document.getElementById('AmongUsScream').play();
}
function AmogUsSus() {
    Stop_all()
    document.getElementById('AmogUsSus').currentTime=0;
    document.getElementById('AmogUsSus').play();
}
function AmongUsImposter() {
    Stop_all()
    document.getElementById('AmongUsImposter').currentTime=0;
    document.getElementById('AmongUsImposter').play();
}
function AmongUsDababy() {
    Stop_all()
    document.getElementById('AmongUsDababy').currentTime=0;
    document.getElementById('AmongUsDababy').play();
}
function AmongUsKill() {
    Stop_all()
    document.getElementById('AmongUsKill').currentTime=0;
    document.getElementById('AmongUsKill').play();
}
function AmongUsImposterSus() {
    Stop_all()
    document.getElementById('AmongUsImposterSus').currentTime=0;
    document.getElementById('AmongUsImposterSus').play();
}
function CaillouOhYesDaddy() {
    Stop_all()
    document.getElementById('CaillouOhYesDaddy').currentTime=0;
    document.getElementById('CaillouOhYesDaddy').play();
}
function Bazinga() {
    Stop_all()
    document.getElementById('Bazinga').currentTime=0;
    document.getElementById('Bazinga').play();
}
function FortniteBattlePass() {
    Stop_all()
    document.getElementById('FortniteBattlePass').currentTime=0;
    document.getElementById('FortniteBattlePass').play();
}
function StopitGetSomeHelp() {
    Stop_all()
    document.getElementById('StopitGetSomeHelp').currentTime=0;
    document.getElementById('StopitGetSomeHelp').play();
}
function applause() {
    Stop_all()
    document.getElementById('applause').currentTime=0;
    document.getElementById('applause').play();
}
function winningson() {
    Stop_all()
    document.getElementById('winningson').currentTime=0;
    document.getElementById('winningson').play();
}
function youtouchmytralala() {
    Stop_all()
    document.getElementById('youtouchmytralala').currentTime=0;
    document.getElementById('youtouchmytralala').play();
}
function nutbutton() {
    Stop_all()
    document.getElementById('nutbutton').currentTime=0;
    document.getElementById('nutbutton').play();
}
function DontEverBuyWeed() {
    Stop_all()
    document.getElementById('DontEverBuyWeed').currentTime=0;
    document.getElementById('DontEverBuyWeed').play();
}
function Nigga() {
    Stop_all()
    document.getElementById('Nigga').currentTime=0;
    document.getElementById('Nigga').play();
}
function LoveMeLongTime() {
    Stop_all()
    document.getElementById('LoveMeLongTime').currentTime=0;
    document.getElementById('LoveMeLongTime').play();
}
function Talking_Ben_Ben() {
    Stop_all()
    document.getElementById('Talking_Ben_Ben').currentTime=0;
    document.getElementById('Talking_Ben_Ben').play();
}
function Talking_Ben_Yes() {
    Stop_all()
    document.getElementById('Talking_Ben_Yes').currentTime=0;
    document.getElementById('Talking_Ben_Yes').play();
}
function Talking_Ben_No() {
    Stop_all()
    document.getElementById('Talking_Ben_No').currentTime=0;
    document.getElementById('Talking_Ben_No').play();
}