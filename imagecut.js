imgmove(canvas);
function imgmove(obj){
    //鼠标按下 
    obj.onmousedown = function(e){

        // 兼容性处理
    　　var event = e || event

        // 鼠标在盒子中的位置
    　　var distanceX = event.clientX + image1.sX
    　　var distanceY = event.clientY + image1.sY

        //鼠标移动
        document.onmousemove = function(e){
        var event = e || event
           // 鼠标的拖曳移动
               image1.sX =distanceX - event.clientX
               image1.sY =distanceY - event.clientY 
               bili=300/document.querySelector("#ibili").value;
               ctx.clearRect(0,0,300,300);
               ctx.drawImage(image1,image1.sX,image1.sY,bili,bili,0,0,300,300);

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