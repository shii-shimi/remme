

//テキストのカウントアップ＋バーの設定
var bar = new ProgressBar.Line(splash_text,{//id名を指定
  easing: 'easeInOut', //アニメーション効果linear, easeIn, easeOut, easeInOutが使用可能
  duration: 5000,//時間指定１０００＝1秒
  strokeWidth: 0.2,//進捗ゲージの太さ
  color: '#555',//進捗ゲージのカラー
  trailWidth: 0.2,//ゲージベースの太さ
  trailColor: '#bbb',//ゲージベースの線のカラー
  text: {//テキスト形状を直接配置
    style:{
      position:'absolute',
      left:'50%',
      top:'50%',
      padding:'0',
      margin:'-30px 0 0 0',//バーより上に配置
      transform:'translate(-50%, -50%)',
      'fontsize':'1rem',
      color:'#fff',
  },
  sutoStyleContsiner: false//自動付与のスタイルをきる
},
step: function(state, bar) {
  bar.setText(Math.round(bar.value() *100) + ' %');
}
});

//アニメーションスタート
bar.animate(1.0, function(){//バーを描画する割合を指定1.0なら１００％まで描画する
  $("#splash_text").fadeOut(10);//フェイドアウトでローリングテキストを削除
  $(".loader_cover-up").addClass("coveranime");//カバーが上に上がるクラス追加
  $(".loader_cover-down").addClass("coveranime");//カバーが下に下がるクラス追加
  $("#splash").fadeOut();//＃ｓｐｌaｓｈエリアをフェイドアウト
});
















$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
      }
      $('.menuclose').on('click', function(event) {
        $('.hamburger').removeClass('active');
        $('.globalMenuSp').removeClass('active');
      });
  });
});





$(function () {
    const fade_bottom = 50; // 画面下からどの位置でフェードさせるか(px)
    const fade_move = 100; // どのぐらい要素を動かすか(px)
    const fade_time = 1900; // フェードの時間(ms)
    // フェード前のcssを定義
    $(".comcept").css({
      opacity: 0,
      transform: "translateY(" + fade_move + "px)",
      transition: fade_time + "ms",
    });
    // スクロールまたはロードするたびに実行
    $(window).on("scroll load", function () {
      const scroll_top = $(this).scrollTop();
      const scroll_bottom = scroll_top + $(this).height();
      const fade_position = scroll_bottom - fade_bottom;
      $(".comcept").each(function () {
        const this_position = $(this).offset().top;
        if (fade_position > this_position) {
          $(this).css({
            opacity: 1,
            transform: "translateY(0)",
          });
        }
      });
    });
  });



  $(function () {
    const fade_bottom = 50; // 画面下からどの位置でフェードさせるか(px)
    const fade_move = 100; // どのぐらい要素を動かすか(px)
    const fade_time = 1900; // フェードの時間(ms)
    // フェード前のcssを定義
    $(".partition").css({
      opacity: 0,
      transform: "translateY(" + fade_move + "px)",
      transition: fade_time + "ms",
    });
    // スクロールまたはロードするたびに実行
    $(window).on("scroll load", function () {
      const scroll_top = $(this).scrollTop();
      const scroll_bottom = scroll_top + $(this).height();
      const fade_position = scroll_bottom - fade_bottom;
      $(".partition").each(function () {
        const this_position = $(this).offset().top;
        if (fade_position > this_position) {
          $(this).css({
            opacity: 1,
            transform: "translateY(0)",
          });
        }
      });
    });
  });



$(function () {
    const fade_bottom = 50; // 画面下からどの位置でフェードさせるか(px)
    const fade_move = 100; // どのぐらい要素を動かすか(px)
    const fade_time = 1900; // フェードの時間(ms)
    // フェード前のcssを定義
    $(".shop").css({
      opacity: 0,
      transform: "translateY(" + fade_move + "px)",
      transition: fade_time + "ms",
    });
    // スクロールまたはロードするたびに実行
    $(window).on("scroll load", function () {
      const scroll_top = $(this).scrollTop();
      const scroll_bottom = scroll_top + $(this).height();
      const fade_position = scroll_bottom - fade_bottom;
      $(".shop").each(function () {
        const this_position = $(this).offset().top;
        if (fade_position > this_position) {
          $(this).css({
            opacity: 1,
            transform: "translateY(0)",
          });
        }
      });
    });
});





$(function () {
  const fade_bottom = 50; // 画面下からどの位置でフェードさせるか(px)
  const fade_move = 100; // どのぐらい要素を動かすか(px)
  const fade_time = 1900; // フェードの時間(ms)
  // フェード前のcssを定義
  $(".menu").css({
    opacity: 0,
    transform: "translateY(" + fade_move + "px)",
    transition: fade_time + "ms",
  });
  // スクロールまたはロードするたびに実行
  $(window).on("scroll load", function () {
    const scroll_top = $(this).scrollTop();
    const scroll_bottom = scroll_top + $(this).height();
    const fade_position = scroll_bottom - fade_bottom;
    $(".menu").each(function () {
      const this_position = $(this).offset().top;
      if (fade_position > this_position) {
        $(this).css({
          opacity: 1,
          transform: "translateY(0)",
        });
      }
    });
  });
  });



  

$(function () {
  const fade_bottom = 50; // 画面下からどの位置でフェードさせるか(px)
  const fade_move = 100; // どのぐらい要素を動かすか(px)
  const fade_time = 1900; // フェードの時間(ms)
  // フェード前のcssを定義
  $("parti").css({
    opacity: 0,
    transform: "translateY(" + fade_move + "px)",
    transition: fade_time + "ms",
  });
  // スクロールまたはロードするたびに実行
  $(window).on("scroll load", function () {
    const scroll_top = $(this).scrollTop();
    const scroll_bottom = scroll_top + $(this).height();
    const fade_position = scroll_bottom - fade_bottom;
    $("parti").each(function () {
      const this_position = $(this).offset().top;
      if (fade_position > this_position) {
        $(this).css({
          opacity: 1,
          transform: "translateY(0)",
        });
      }
    });
  });
  });

  




$(function () {
  const fade_bottom = 50; // 画面下からどの位置でフェードさせるか(px)
  const fade_move = 100; // どのぐらい要素を動かすか(px)
  const fade_time = 1900; // フェードの時間(ms)
  // フェード前のcssを定義
  $(".gifttop").css({
    opacity: 0,
    transform: "translateY(" + fade_move + "px)",
    transition: fade_time + "ms",
  });
  // スクロールまたはロードするたびに実行
  $(window).on("scroll load", function () {
    const scroll_top = $(this).scrollTop();
    const scroll_bottom = scroll_top + $(this).height();
    const fade_position = scroll_bottom - fade_bottom;
    $(".gifttop").each(function () {
      const this_position = $(this).offset().top;
      if (fade_position > this_position) {
        $(this).css({
          opacity: 1,
          transform: "translateY(0)",
        });
      }
    });
  });
});

$(function () {
const fade_bottom = 50; // 画面下からどの位置でフェードさせるか(px)
const fade_move = 100; // どのぐらい要素を動かすか(px)
const fade_time = 1900; // フェードの時間(ms)
// フェード前のcssを定義
$(".base").css({
  opacity: 0,
  transform: "translateY(" + fade_move + "px)",
  transition: fade_time + "ms",
});
// スクロールまたはロードするたびに実行
$(window).on("scroll load", function () {
  const scroll_top = $(this).scrollTop();
  const scroll_bottom = scroll_top + $(this).height();
  const fade_position = scroll_bottom - fade_bottom;
  $(".base").each(function () {
    const this_position = $(this).offset().top;
    if (fade_position > this_position) {
      $(this).css({
        opacity: 1,
        transform: "translateY(0)",
      });
    }
  });
});
});

$('.slider').not('.slick-initialized').slick({
   //自動的に動き出すか。初期値はfalse。
    //スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示

    
    
    responsive: [
      {
      breakpoint: 769,//モニターの横幅が769px以下の見せ方
      settings: {
        slidesToShow: 2,//スライドを画面に2枚見せる
        slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
      }
    },
    {
      breakpoint: 426,//モニターの横幅が426px以下の見せ方
      settings: {
        slidesToShow: 1,//スライドを画面に1枚見せる
        slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
      }
    }
  ]


})

;
