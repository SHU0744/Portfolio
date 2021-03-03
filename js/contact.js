
import { hamburger, drawer, } from './module.js';

import { animeBg, animeBg2 } from './module.js';

animeBg();

animeBg2();

hamburger();

drawer();

//フォームバリデーション

//送信ボタン
const $submit = document.querySelector('button[class="submit"]');
// console.log($submit);

//プライバシーチェックボタン
const $privacyBtn = document.getElementById('privacy');


// console.log($privac/Btn);




//名前
const nameRegex = /^.{1,20}$/;

// emailの正規表現
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

//全角カタカナ
const $kana = /^[ア-ン゛゜ァ-ォャ-ョー「」、]+$/;

//テキストエリア
//10文字以上 500文字以下
const $textareaRegex = /^.{10,500}$/;




//名前取得 nodelist
const $name = document.querySelectorAll('#name');
// console.log($name[0].value);
//名前のアラート
const $alertName = document.getElementById('alertName');
// console.log($alertName);


//フリガナ
const $furigana = document.querySelectorAll('#furigana');
// console.log($furigana);
//フリガナアラート
const $alertFuri = document.getElementById('alertFuri');
// console.log($alertFuri);

//メール
const $mail = document.getElementById('mail');
// console.log($mail);
//メールアラート
const $alertEmail = document.getElementById('alertEmail');
// console.log($alertEmail);

//テキストエリア
const $textarea = document.getElementById('textarea');


//アラート
const $alerttextarea = document.getElementById('alertText');
// console.log($alerttextarea);


let cheakAll = false;


$privacyBtn.addEventListener('click', () => {
    if ($privacyBtn.checked) {
        $submit.disabled = false;
        $submit.classList.add('submitcheak');
        cheakAll = true;
    } else {
        $submit.disabled = true;
        $submit.classList.remove('submitcheak');
        cheakAll = false;
    }

})

let count = 0;

$submit.addEventListener('click', () => {
    //name
    if (nameRegex.test($name[0].value)) {
        if (nameRegex.test($name[1].value)) {
            $alertName.classList.remove('cheak');
            count++;
        } else {
            $alertName.classList.add('cheak');
        }
    } else {
        $alertName.classList.add('cheak');
    }

    //フリガナ
    if ($kana.test($furigana[0].value)) {
        if ($kana.test($furigana[1].value)) {
            $alertFuri.classList.remove('cheak');
            count++;
        } else {
            $alertFuri.classList.add('cheak');
        }
    } else {
        $alertFuri.classList.add('cheak');
    }

    //メール
    if (emailRegex.test($mail.value)) {
        $alertEmail.classList.remove('cheak');
        count++;
    } else {
        $alertEmail.classList.add('cheak');
    }

    // お問い合わせ内容
    if ($textareaRegex.test($textarea.value)) {
        $alerttextarea.classList.remove('cheak');
        count++;
    } else {
        $alerttextarea.classList.add('cheak');
    }

    if (count === 4) {
        $submit.type = "submit";
    } else {
        count = 0;
    }

});
