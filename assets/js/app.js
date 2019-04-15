let btn = document.
			getElementById('btn');
// おみくじの時
// let omikuji = ["大吉" , "吉", "中吉", "小吉", "凶", "大凶"]

// ラッキーカラーの時
 let lucky = ["黄色", "緑","赤","青","ピンク","黒"]
 let luckyColor =["yellow","green","red","blue","pink", "black"]

 let result = document.
			getElementById('result');

			btn.addEventListener
			('click' , function(){

// おみくじの時
				// console.log('りんご');
				// console.log(result[1]);
				// console.log(Math.random());
				// let num = Math.floor( Math.random() * omikuji.length);

// ラッキーカラーの時
// 切り捨てる、四捨五入の方法がある。今回は切り捨てる方法で。
				let num = Math.floor( Math.random() * lucky.length);
				// console.log(Math.floor( Math.random() * result.length));
				console.log(lucky[num]);


         result.textContent = (lucky[num]);

        let bgRed = document.getElementsByClassName('result');
　　// console.log(bgRed);
　　// console.log();
　　// console.log(luckyColor[Math.floor( Math.random() * luckyColor.length)]);

			bgRed[0].style.backgroundColor = (luckyColor[num]);
  });





