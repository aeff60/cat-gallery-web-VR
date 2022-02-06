var u = new SpeechSynthesisUtterance();
var audio = new Audio('fm-freemusic-cheerful-whistling.mp3');
u.text = 'ยินดีต้อนรับ ทุกท่าน เข้าสู่นิทัดสะกานแสดงรูปคุณ โจโฉ ';
u.lang = 'th-TH';
u.rate = 1.2;

speechSynthesis.speak(u);
audio.play();

