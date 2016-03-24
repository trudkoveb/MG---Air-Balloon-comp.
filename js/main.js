$(document).ready(function() {


  $("#owl").owlCarousel({
    items: 4,
    navigation : true,
    navigationText : false,
    rewindNav : true,
    scrollPerPage : false,
 });

});

  function CountdownTimer(elm,tl,mes){
 this.initialize.apply(this,arguments);
}
CountdownTimer.prototype={
 initialize:function(elm,tl,mes) {
  this.elem = document.getElementById(elm);
  this.tl = tl;
  this.mes = mes;
 },countDown:function(){
  var timer = '';
  var today = new Date();
  var day = Math.floor((this.tl-today)/(24*60*60*1000));
  var hour = Math.floor(((this.tl-today)%(24*60*60*1000))/(60*60*1000));
  var min = Math.floor(((this.tl-today)%(24*60*60*1000))/(60*1000))%60;
  var sec = Math.floor(((this.tl-today)%(24*60*60*1000))/1000)%60%60;
  var me = this;

  if( ( this.tl - today ) > 0 ){
   timer += '<span class="timer-text"><span class="timer-number">'+day+'</span> дня</span>';
   timer += '<span class="timer-text"><span class="timer-number">'+hour+'</span> часов</span>';
   timer += '<span class="timer-text"><span class="timer-number">'+this.addZero(min)+'</span> минут</span><span class="timer-text"><span class="timer-number">'+this.addZero(sec)+'</span> секунд</span>';
   this.elem.innerHTML = timer;
   tid = setTimeout( function(){me.countDown();},10 );
  }else{
   this.elem.innerHTML = this.mes;
   return;
  }
 },addZero:function(num){ return ('0'+num).slice(-2); }
}
function timer(){

 // Set countdown limit
 var tl = new Date('2016/03/05 00:00:00'); // Здесь задаешь время окончания таймера

 // You can add time's up message here
 var timer = new CountdownTimer('timer',tl,'<span class="number-wrapper"><div class="line"></div><span class="number end">Time is up!</span></span>');
 timer.countDown();
}

window.onload=function(){
 timer();
 $('.briefly__video').html('<iframe width="100%" height="343" src="https://www.youtube.com/embed/KEoXn34ilKY" frameborder="0" allowfullscreen></iframe>');
}

