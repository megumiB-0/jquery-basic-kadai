$(function(){
  //id属性がchange-colorの要素がクリックされたら
  $('#change-color').on('click',function(){
    //id属性がtargetの要素のcolorプロパティをpinkにする
    $('#target').css('color','#ff455f');
  });
  //id属性がchange-textの要素がクリックされたら
  $('#change-text').on('click',function(){
    //id属性がtargetの要素のtextをおはよう！にする
    $('#target').text('おはよう');
  });
  //id属性がfade-outの要素がクリックされたら
  $('#fade-out').on('click',function(){
    //id属性がtargetの要素がフェードアウトする
    $('#target').fadeOut();
  });
  //id属性がfade-inの要素がクリックされたら
  $('#fade-in').on('click',function(){
    //id属性がtargetの要素がフェードインする
    $('#target').fadeIn();
  });
      

});