function saveMessage() {
    pre=$("div.info:contains('百脑汇')>.ng-scope >.ng-binding").text();//获取右侧边栏的文字
    if(pre!=name){//如文字无变化，不执行
         name=pre;
         texts=name.split(':');
        //群间相互转发，暂不可用
        //$('#editArea').text(name)
        //$('.btn_send').click()
         if(texts.length>1){//判断是否为我发出的消息
             user=texts[0];
             if(user.split(']').length>1){
                 user=user.split(']')[1];//取消［5条消息］字样
             }
             text=texts[1];
         }else{
             user='我';
             text=name;
         }
         $.ajax({
                url: "https://tshao.sinaapp.com/test/wx.php",//发送数据到服务器
                jsonp: "callback",
                type: 'get',
                dataType: "jsonp",
                data: {
                    user: user,
                    text: text
                },
                success: function( response ) {
                    console.log( response ); // server response
                }
        });

    }
    setTimeout("saveMessage()", 1);//每一毫秒执行一次
}
saveMessage();