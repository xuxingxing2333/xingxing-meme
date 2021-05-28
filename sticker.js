var stickers=document.querySelectorAll(".sticker");
var tips=document.querySelectorAll(".tip");
stickers[0].onclick=function (){post(tips[0]);};
stickers[1].onclick=function (){post(tips[1]);};
stickers[2].onclick=function (){post(tips[2]);};
function post(o){
    if(o.style.display == 'none' || o.style.display == ''){
        o.style.display = 'block';
      }else{
        o.style.display = 'none';
      }
};
tipmove(tips[0]);tipmove(tips[1]);tipmove(tips[2]);
function tipmove(obj){
    obj.onmousedown = function(e){

        // 兼容性处理
    　　var event = e || event

        // 鼠标在盒子中的位置
    　　var distanceX = event.clientX - this.offsetLeft
    　　var distanceY = event.clientY - this.offsetTop

        //鼠标移动
        document.onmousemove = function(e){
        var event = e || event
           // 鼠标的拖曳移动
            var w = obj.offsetWidth;
            var h = obj.offsetHeight;
           if(event.clientX - distanceX < 0){
            obj.style.left=0+'px'
           }
           else if(event.clientX - distanceX + w> 300){
            obj.style.left=300-w+'px'
           }
           else{
               obj.style.left = event.clientX - distanceX + 'px'
           }
           if(event.clientY - distanceY < 0){
            obj.style.top=0+'px'
           }
           else if(event.clientY - distanceY + h> 300){
            obj.style.top=300-h+'px'
           }
           else{
            obj.style.top = event.clientY - distanceY + 'px' 
           }


            // 取消文本选中
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty()
    　　}
        //鼠标放开
    　　document.onmouseup = function(){
            
            // 鼠标抬起的时候清空事件，有效避免内存泄漏
    　　　　document.onmousemove = null
    　　　　document.onmouseup = null
    　　}
    }  
};