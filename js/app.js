'use strict';

import { animeBg, animeBg2 } from './module.js';

animeBg();

animeBg2();

var swiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 1000,
    initialSlide: 1,
    slidesPerView: 2.5,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,

    },
});

//scroll in
let fadeInTarget = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    for (let i = 0; i < fadeInTarget.length; i++) {
        const rect = fadeInTarget[i].getBoundingClientRect().top;
        const scroll = window.pageYOffset || document.documentElement.scrollTop;
        const offset = rect + scroll;
        const windowHeight = window.innerHeight; // 現在のブラウザの高さ
        if (scroll > offset - windowHeight + 100) {
            fadeInTarget[i].classList.add('scroll-in');
        }
    }
});


//ビック画像取得
const $bigimg = document.getElementById('bigimg');
// console.log($bigimg);

//ビック画像 a タグ取得
const $imgA = document.getElementById('imgA');
// console.log($imgA);

//サムネイル取得 node.list
const $thumbs = document.querySelectorAll('.thumb');
// console.log($thumbs);

//画像切替
$thumbs.forEach(function (item) {
    item.addEventListener('click', () => {
        $bigimg.src = item.src;
        $imgA.href = item.dataset.url;
    });

});

//tebleのデータ
const table = [
    {
        gaiyou: 'MARKRALY(架空のLP)',
        concept: "新規登録者を増やすことが目的。高単価、年収がアップをイメージさせるようなLP",
        point: '新規登録のCSRを上げるためにに新規登録フォームへ誘導するためにスクロールイベントを実装。slickはスマートフォン画面のみ適用。',
        lang: 'HTML5 ・CSS3(Sass) ・Javascript(jquery) ・slick',
        kikan: '10日間',
        url: 'https://www.figma.com/file/7u2cea0rFQbPBtCvRgNvxj/LP-%E5%85%B1%E6%9C%89%E7%94%A8?node-id=0%3A1',
        Github: 'https://github.com/SHU0744/MARKRARY.git'
    },

    {
        gaiyou: '自己紹介クイズゲーム',
        concept: '製作者がどんな人物なのかゲームを用いて、知ってもらえるようなアプリ',
        point: '下層ページは制作せずに一つのファイルのみで完結するようにしました。また、Annict APIを使用して、アニメ情報を取得。クイズを解き終えたら、私が現在見ているアニメ、来季以降視聴予定のアニメ情報を表示、画像、Twitterのロゴをクリックするとそれぞれのサイト、アカウントに遷移するようになっている。',
        lang: 'HTML5 ・CSS3 ・Javascript',
        kikan: '4日間',
        url: null,
        Github: 'https://github.com/SHU0744/quize-anime.git'
    },

    {
        gaiyou: 'グルメ検索サイト',
        concept: 'コロナ禍であるため個室ありの店を検索できるようなサイト。',
        point: 'ぐるなびAPIを使用して、axiosを用いて非同期処理を実装。',
        lang: 'HTML5 ・CSS3(Sass) ・Javascript ・Vue.js 2',
        kikan: '4日間',
        url: null,
        Github: 'https://github.com/SHU0744/gurunabiVue.git'
    },
    {
        gaiyou: 'Mark株式会社(架空のコーポレートサイト)',
        concept: 'アニメーションは少なめ、ミニマルかつわかりやすいサイト',
        point: `Intersection Observer
        APIを使用してスクロールアニメーション処理。Newsページ、ContactページはVue.jsを使用して開発。
        Newsページは種別に絞り込み可能。Contactページのバリデーションは非同期処理で実装。`,
        lang: 'HTML5 ・CSS3(Sass) ・Javascript ・Vue.js 2',
        kikan: '14日間',
        url: 'https://www.figma.com/file/95L68MFkMKEPUsQwmbTwLY/Mark.Inc-%E5%85%B1%E6%9C%89%E7%94%A8?node-id=0%3A1',
        Github: 'https://github.com/SHU0744/Mark.git'
    },
    {
        gaiyou: 'Mark株式会社(架空のコーポレートサイト)',
        concept: '静的サイト(Mark株式会社)をwordpressでCMS構築。',
        point: `ブランクテーマからオリジナルテーマ作成。カスタムフィールド機能追加して管理可能。NewsページはVue.jsでは開発できず、Javascriptに書き換えてCMS構築可能へ。
        管理できるページ Topページ、aboutページ、Newsページ
        (ServiceページはCMS構築していない、contactページはプラグインを使用しているが、バグありバリデーションをかからないので開発中）`,
        lang: 'HTML5 ・CSS3(Sass) ・Javascript ・PHP',
        kikan: '7日間',
        url: 'https://www.figma.com/file/95L68MFkMKEPUsQwmbTwLY/Mark.Inc-%E5%85%B1%E6%9C%89%E7%94%A8?node-id=0%3A1',
        Github: 'https://github.com/SHU0744/Wordpress-Mark.git'
    },

]


const $td = document.querySelectorAll('#td');

const tdLangth = $td.length;

const $designA = document.querySelector('.designA');
const $githubA = document.querySelector('.githubA');

//tebleの内容切替
let number;
$thumbs.forEach(function (item) {
    item.addEventListener('click', () => {
        // console.log(item.id);
        if (item.id === "MARKRALY") {
            number = 0;
        } else if (item.id === "Quize") {
            number = 1;
        } else if (item.id === "gurunabi") {
            number = 2;
        } else if (item.id === "Mark") {
            number = 3;
        } else if (item.id === "Mark-wp") {
            number = 4;
        }

        $td[0].textContent = table[number].gaiyou;
        $td[1].textContent = table[number].concept;
        $td[2].textContent = table[number].point;
        $td[3].textContent = table[number].lang;
        $td[4].textContent = table[number].kikan;
        // $td[5].textContent = table[number].url;


        if (table[number].url === null) {
            $td[5].textContent = '';
            $designA.classList.add('desinClick');
        } else {
            $designA.classList.remove('desinClick');
            $td[5].textContent = 'View';
            $td[5].href = table[number].url;
        }
        // $td[6].textContent = table[number].Github;

        $td[6].href = table[number].Github;
    });

});


import { hamburger, drawer, scroll } from './module.js';


hamburger();

drawer();

scroll();

//画像の範囲を取得
const $img = document.querySelector('.img');
// console.log($img);

const $hoverbg = document.querySelector('.hoverbg');
// console.log($hoverbg);


//hover
$img.addEventListener('mousemove', () => {
    $hoverbg.classList.add('hover');
});

$img.addEventListener('mouseout', () => {
    $hoverbg.classList.remove('hover');

});
