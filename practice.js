postButton.onclick = function(){                                                              //ボタンクリックしたら
  const userName = user_name.value;                                                          //入力されたユーザー名の取得
  const oneWord = one_word.value;                                                            //入力されたひとことの取得
  if (userName.length === 0 || oneWord.length === 0) {                                      //ユーザー名かひとことが空欄だったら
    alert('ユーザー名とひとことを入力してください')                                            //アラート出す
    return;                                                                                //処理を終了
  }
  const paragraph = document.createElement('p');                                           //ｐ要素を作る
  paragraph.innerText = user_name.value + '：' + one_word.value + '(' + new Date() + ')';  //ｐ要素にデータを取得し代入
  post_area.appendChild(paragraph);                                                        //ｐ要素を投稿エリアに投稿
  document.onePost.reset();                                                                 //入力欄のリセット
}

