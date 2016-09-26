/*******************************************************************************

ブラウザーのキーボード
ソースここから

 *******************************************************************************/


//初期設定
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.lineFoin = 'round';
context.lineWidth = 30;

//画面を一度黒で塗りつぶす
context.fillStyle = '#000000';
context.fillRect( 0, 0, canvas.width, canvas.height );

//黒鍵
function blackKey(){
  //黒鍵
  context.fillStyle = '#000000';
  context.fillRect( 42, 60, 40, 130 );  //C#
  context.fillRect( 106, 60, 40, 130 );   //D#
  context.fillRect( 232, 60, 40, 130 );   //F#
  context.fillRect( 294, 60, 40, 130 );   //G#
  context.fillRect( 357, 60, 40, 130 );   //A#
  //黒鍵の影
  var y21 = 60, x22 = 25, y22 = 110;
  context.fillStyle = '#4d4d4d';
  context.fillRect( 50, y21, x22, y22 );  //C#
  context.fillRect( 114, y21, x22, y22 );   //D#
  context.fillRect( 240, y21, x22, y22 );   //F#
  context.fillRect( 302, y21, x22, y22 );   //G#
  context.fillRect( 365, y21, x22, y22 );   //A#
  
  //黒鍵の影のハイライト
  //横
  context.fillStyle = '#aaaaaa';
  context.fillRect( 50, 170, x22, 5 );  //C#
  context.fillRect( 114, 170, x22, 5 );  //D#
  context.fillRect( 240, 170, x22, 5 );  //F#
  context.fillRect( 302, 170, x22, 5 );  //G#
  context.fillRect( 365, 170, x22, 5 );  //A#
  //縦
  context.fillStyle = '#6e6e6e';
  context.fillRect( 70, y21, 5, y22 );  //C#
  context.fillRect( 134, y21, 5, y22 );  //D#
  context.fillRect( 260, y21, 5, y22 );  //F#
  context.fillRect( 322, y21, 5, y22 );  //G#
  context.fillRect( 385, y21, 5, y22 );  //A#
}


//鍵盤の描画
function keybord(){
  //白鍵
  context.fillStyle = '#ffffff';
  context.fillRect( 10, 60, 480, 240 );

  //境界線
  context.fillStyle = '#000000';
  var boundary = 62;
  for (var i = 1; i < 8; i++) {
      context.fillRect( boundary * i , 60, 1, 240 );
  }

  //黒鍵の描画
  blackKey();

}


//鍵盤の描画
keybord();


/*******************************************************************************

                          マウスイベント

*******************************************************************************/

//キーボードの変数
//Sharp = #
//型　boolean
var C = false;
var CSharp = false;
var D = false;
var DSharp = false;
var E = false;
var F = false;
var FSharp = false;
var G = false;
var GSharp = false;
var A = false;
var ASharp = false;
var B = false;
var C2 = false;



//クリックダウン
document.addEventListener('mousedown', test);
function test(e) {
  var y21 = 60, x22 = 25, y22 = 110;

  //C
  if ( C == true ) {
    context.fillStyle = '#c6c6c6';
    context.fillRect( 10, 190, 52, 110 );
    context.fillRect( 10, 60, 32, 130 );
  }

  //C#
  if ( CSharp == true ) {
    context.fillStyle = '#3b3b3b';
    context.fillRect( 50, y21, x22, 120 );
    context.fillStyle = '#545454';
    context.fillRect( 70, y21, 5, 120 );
    context.fillStyle = '#878787';
    context.fillRect( 50, 175, 25, 5 );
  }

  //D
  if ( D == true ) {
    context.fillStyle = '#c6c6c6';
    context.fillRect( 63, 190, 60, 110 );
    context.fillRect( 82, 60, 24, 130 );
  }

  //D#
  if ( DSharp == true ) {
    context.fillStyle = '#3b3b3b';
    context.fillRect( 114, y21, x22, 120 );
    context.fillStyle = '#545454';
    context.fillRect( 134, y21, 5, 120 );
    context.fillStyle = '#878787';
    context.fillRect( 114, 175, 25, 5 );
  }

  //E
  if ( E == true ) {
    context.fillStyle = '#c6c6c6';
    context.fillRect( 125, 190, 60, 110 );
    context.fillRect( 146, 60, 39, 130 );
  }

  //F
  if ( F == true ) {
    context.fillStyle = '#c6c6c6';
    context.fillRect( 188, 190, 59, 110 );
    context.fillRect( 188, 60, 43, 130 );
  }

  //F#
  if ( FSharp == true ) {
    context.fillStyle = '#3b3b3b';
    context.fillRect( 240, y21, x22, 120 );
    context.fillStyle = '#545454';
    context.fillRect( 260, y21, 5, 120 );
    context.fillStyle = '#878787';
    context.fillRect( 240, 175, 25, 5 );
  }

  //G
  if ( G == true ) {
    context.fillStyle = '#c6c6c6';
    context.fillRect( 250, 190, 59, 110 );
    context.fillRect( 273, 60, 20, 130 );
  }

  //G#
  if ( GSharp == true ) {
    context.fillStyle = '#3b3b3b';
    context.fillRect( 302, y21, x22, 120 );
    context.fillStyle = '#545454';
    context.fillRect( 322, y21, 5, 120 );
    context.fillStyle = '#878787';
    context.fillRect( 302, 175, 25, 5 );
  }

  //A
  if ( A == true ) {
    context.fillStyle = '#c6c6c6';
    context.fillRect( 312, 190, 59, 110 );
    context.fillRect( 335, 60, 21, 130 );
  }


  //A#
  if ( ASharp == true ) {
    context.fillStyle = '#3b3b3b';
    context.fillRect( 365, y21, x22, 120 );
    context.fillStyle = '#545454';
    context.fillRect( 385, y21, 5, 120 );
    context.fillStyle = '#878787';
    context.fillRect( 365, 175, 25, 5 );
  }

  //B
  if ( B == true ) {
    context.fillStyle = '#c6c6c6';
    context.fillRect( 373, 190, 60, 110 );
    context.fillRect( 397, 60, 36, 130 );
  }

  //2C
  if ( C2 == true ) {
    context.fillStyle = '#c6c6c6';
    context.fillRect( 436, 190, 53, 110 );
    context.fillRect( 436, 60, 53, 130 );
  }

}


//クリックアップ
document.addEventListener('mouseup', test2);
function test2(e) {

  blackKey();

  //C
  if ( C == true ) {
    context.fillStyle = '#ffffff';
    context.fillRect( 10, 190, 52, 110 );
    context.fillRect( 10, 60, 32, 130 );
  }

  //D
  if ( D == true ) {
    context.fillStyle = '#ffffff';
    context.fillRect( 63, 190, 60, 110 );
    context.fillRect( 82, 60, 24, 130 );
  }

  //E
  if ( E == true ) {
    context.fillStyle = '#ffffff';
    context.fillRect( 125, 190, 60, 110 );
    context.fillRect( 146, 60, 39, 130 );
  }

  //F
  if ( F == true ) {
    context.fillStyle = '#ffffff';
    context.fillRect( 188, 190, 59, 110 );
    context.fillRect( 188, 60, 43, 130 );
  }

  //G
  if ( G == true ) {
    context.fillStyle = '#ffffff';
    context.fillRect( 250, 190, 59, 110 );
    context.fillRect( 273, 60, 20, 130 );
  }

  //A
  if ( A == true ) {
    context.fillStyle = '#ffffff';
    context.fillRect( 312, 190, 59, 110 );
    context.fillRect( 335, 60, 21, 130 );
  }

  //B
  if ( B == true ) {
    context.fillStyle = '#ffffff';
    context.fillRect( 373, 190, 60, 110 );
    context.fillRect( 397, 60, 36, 130 );
  }

  //2C
  if ( C2 == true ) {
    context.fillStyle = '#ffffff';
    context.fillRect( 436, 190, 53, 110 );
    context.fillRect( 436, 60, 53, 130 );
  }


}

//マウスの座標を得とく
var mouseX = 0; mouseY = 0;
document.addEventListener('mousemove', test3);
function test3(e) {
  mouseX = e.clientX ;//- 30;
  mouseY = e.clientY ;//- 76;

  //キーボードの座標を指定
  //C
  if ( e.clientX >= 38
       && e.clientX <= 90
       && e.clientY >= 268
       && e.clientY <= 376
     ){
       C = true;
  } else { C = false; }

  //C#
  if ( e.clientX >= 63
       && e.clientX <= 111
       && e.clientY >= 137
       && e.clientY <= 267
     ){
       CSharp = true;
  } else { CSharp = false; }

  //D
  if ( e.clientX >= 93
       && e.clientX <= 152
       && e.clientY >= 271
       && e.clientY <= 376
     ){
       D = true;
  } else { D = false; }


  //D#
  if ( e.clientX >= 135
       && e.clientY >= 137
       && e.clientX <= 175
       && e.clientY <= 267
     ){
       DSharp = true;
  } else { DSharp = false; }

  //E
  if ( e.clientX >= 154
       && e.clientX <= 213
       && e.clientY >= 271
       && e.clientY <= 376
     ){
       E = true;
  } else { E = false; }

  //F
  if ( e.clientX >= 217
       && e.clientX <= 276
       && e.clientY >= 271
       && e.clientY <= 376
     ){
       F = true;
  } else { F = false; }

  //F#
  if ( e.clientX >= 260
       && e.clientX <= 300
       && e.clientY >= 137
       && e.clientY <= 267
     ){
       FSharp = true;
  } else { FSharp = false; }

  //G
  if ( e.clientX >= 279
       && e.clientX <= 338
       && e.clientY >= 271
       && e.clientY <= 376
     ){
       G = true;
  } else { G = false; }

  //G#
  if ( e.clientX >= 321
       && e.clientX <= 362
       && e.clientY >= 137
       && e.clientY <= 267
     ){
       GSharp = true;
  } else { GSharp = false; }

  //A
  if ( e.clientX >= 341
       && e.clientX <= 399
       && e.clientY >= 271
       && e.clientY <= 376
     ){
       A = true;
  } else { A = false; }

  //A#
  if ( e.clientX >= 386
       && e.clientX <= 426
       && e.clientY >= 137
       && e.clientY <= 267
     ){
       ASharp = true;
  } else { ASharp = false; }

  //B
  if ( e.clientX >= 403
       && e.clientX <= 461
       && e.clientY >= 271
       && e.clientY <= 376
     ){
       B = true;
  } else { B = false; }

  //C2
  if ( e.clientX >= 466
       && e.clientX <= 517
       && e.clientY >= 268
       && e.clientY <= 376
     ){
       C2 = true;
  } else { C2 = false; }


  //上の黒い部分を塗りつぶす
  context.fillStyle = '#000000';
  context.fillRect( 0, 0, canvas.width, 60 );

  //文字の色とフォント指定
  context.fillStyle = '#ff0000';
  context.font = '24px Heletica';
  //X軸
  context.fillText( "X =", 10, 50);
  context.fillText( mouseX, 55, 50);
  //Y軸
  context.fillText( "Y =", 110, 50);
  context.fillText( mouseY, 160, 50);

}





/*
function Audio() {

  var contextClass = (window.AudioContext ||
                      window.webkitAudioContext ||
                      window.mozAudioContext ||
                      window.oAudioContext ||
                      window.msAudioContext
                    );

  if ( contextClass ) {
    //Web Audio APIが利用可能
    var context = new contextClass();
  } else {
    //Web Audio APIは利用不可能　ユーザーに対してサポートされているブラウザーを使うことを求める
  }

  //ソースを作成する
  var source = context.createBufferSource();

  //ゲイン・ノードを作成する
  var gain = context.connect(gain);

  //ソースをフィルタへ、フィルタをディスティネーションへつなぐ
  source.connect(gain);
  gain.connect(context.destination);

}
*/

//Audio();
