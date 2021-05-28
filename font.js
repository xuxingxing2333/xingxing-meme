const data = [{name:'宋体',font:"宋体",value:'1'},{name:'黑体',font:"黑体",value:'2'},{name:'微软雅黑',font:'MicrosoftYaHei',value:'3'}]
  var content = document.getElementById('content');
  var selectImg = document.getElementById('selectImg');
  var selectItem = document.getElementById('selectItem');
 
  var ul = document.createElement('ul');
  selectItem.appendChild(ul);
  for(var i = 0; i < data.length; i++){
    var li = document.createElement('li');
    li.setAttribute('data-value',data[i].value);
    li.innerText = data[i].name;
    li.style.fontFamily=data[i].font;
    ul.appendChild(li);
  }
  /**
   * 点击下拉箭头
   */
  selectImg.onclick = function () {
    console.log(selectItem.style.display);
    if(selectItem.style.display == 'none' || selectItem.style.display == ''){
      selectItem.style.display = 'block';
    }else{
      selectItem.style.display = 'none';
    }
 
  }
 
  content.onclick = function () {
    if(selectItem.style.display == 'none' || selectItem.style.display == ''){
      selectItem.style.display = 'block';
    }else{
      selectItem.style.display = 'none';
    }
  }
 
  var lis = selectItem.getElementsByTagName('li');
  for(var i = 0; i < lis.length; i++){
    lis[i].onclick = function () {
      console.log(this.innerHTML,this.getAttribute('data-value'));
      content.innerText = this.innerHTML;
      document.querySelector('#preword').style.fontFamily=this.innerHTML;
      selectItem.style.display = 'none';
    }
  }