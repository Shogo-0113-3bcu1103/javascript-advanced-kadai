let typed = '';
let untyped = '';
let score = 0;

//オブジェクト取得
const untypingText  = document.getElementById('untyped');
const typingText = document.getElementById('typed');
const wrap = document.getElementById('typing');
const start = document.getElementById('start');
const countDown = document.getElementById('count-down');

//表示するテキスト配列
const textBox = [
  'Hello World','This is my App','How are you?',
  'Today is sunny','I love JavaScript!','Good morning',
  'I am Japanese','Let it be','Samurai',
  'Typing Game','Information Technology',
  'I want to be a programmer','What day is today?',
  'I want to build a web app','Nice to meet you',
  'Chrome Firefox Edge Safari','machine learning',
  'Brendan Eich','John Resig','React Vue Angular',
  'Netscape Communications','undefined null NaN',
  'Thank you very much','Google Apple Facebook Amazon',
  'ECMAScript','console.log','for while if switch',
  'var let const','Windows Mac Linux iOS Android',
  'programming'
]

//ランダム表示処理
const randomText = () =>{
  typed = '';
  typingText.textContent = typed;
  let randomIndex = Math.floor(Math.random() * textBox.length);
  //  untypingText.textContent = textBox[randomIndex];
  untyped = textBox[randomIndex];
  untypingText.textContent = untyped;
}

 //入力判定
 const inputText = e =>{
  if(e.key !== untyped.substring(0,1)){
    wrap.classList.add('mistyped');
    setTimeout(() => {
      wrap.classList.remove('mistyped');
    }, 100);
    return;
  }
  //正しい時
  score++;
  wrap.classList.remove('mistyped');
  typed += untyped.substring(0, 1);
  untyped = untyped.substring(1);
  typingText.textContent = typed;
  untypingText.textContent = untyped;
  console.log(untyped);
  //テキスト入力後の条件分岐
  if(untyped === ''){
   randomText();
  }
 }

 //タイピングランクの判定
 const rankCheck = score =>{
  let text = '';
  if(score < 100){
    text = `あなたのランクはCです。\nBまであと${100 - score}文字です。`;
  }else if(score < 200){
    text = `あなたのランクはBです。\nAまであと${100 - score}文字です。`;
  }else if(score < 300){
  text = `あなたのランクはAです。\nSまであと${100 - score}文字です。`;
  }else if(score >= 300){
  text = `あなたのランクはSです。\nおめでとうございます!`;
  };

  return `${score}文字打てました!\n${text}\n 【OK】リトライ / 【キャンセル】 終了`;
 };

 //ゲーム終了
 const gameOver = id => {
  clearInterval(id);

  const result = confirm(rankCheck(score));
  //OKボタンを押した時リロード
  if(result == true){
    window.location.reload();
  }
 }

 //タイマー部分の処理
 const timer = () =>{
  let time = countDown.textContent;
  const id = setInterval(() => {
    time--;
    countDown.textContent = time;

    if(time <= 0){
      gameOver(id);
    }
  }, 1000);
 };


 //スタートボタン入力イベント
 start.addEventListener('click', ()  =>  {
  timer();
  randomText();
  start.style.display = 'none';
  document.addEventListener('keypress', inputText);
 });

 untypingText.textContent = 'スタートボタンで開始'



