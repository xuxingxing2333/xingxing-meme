var oDrag = document.getElementById("preword")
getDarg(oDrag)
function getDarg(obj){
    //鼠标按下 
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
            var str = document.querySelector("#iword").value;
            var h = obj.offsetHeight;
            var w = getSpanWidth(str);
        function getSpanWidth(str) {
            var width = 0;
            var html = document.createElement('span');
            html.innerText = str;
            html.className = 'getTextWidth';
            html.style.fontSize=parseInt(document.querySelector("#isize").value)+'px';
            document.querySelector('body').appendChild(html);
            width = document.querySelector('.getTextWidth').offsetWidth;
            document.querySelector('.getTextWidth').remove();
            return width;
        }

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
}