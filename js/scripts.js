var replyObj = new Object();
var messageArray = [];

replyObj.message = messageArray;
//時間
var mydate = new Date();
var time =
    mydate.getFullYear() + "/" +
    (mydate.getMonth() + 1) + '/' +
    mydate.getDate() + ' ' +
    mydate.getHours() + ':' +
    mydate.getMinutes();



//ajax loading
function ajaxGet($project) {
    $.ajax({
        url: '/templates/' + $project + '.html',
        success: function(result) {
            $('.chat-nav-ajax').html(result);
        }
    });
}


$(document).ajaxComplete(function() {
    var imageItem = $('.chat-image').find('.image-content .wrap').children('.image-item');
    imageItem.eq(0).addClass('active');
    imageItem.each(function() {
        $(this).click(function() {
            imageItem.removeClass('active');
            $(this).addClass('active');
        })
    })
})

function replybtn() {
    var messageObj = new Object;
    messageObj.user = "you";
      messageObj.message = $('textarea').val();
    messageObj.time = time;
    messageObj.uid = messageArray.length + 1;
    messageArray.push(messageObj);
    console.log(JSON.stringify(replyObj));
    $.each(replyObj, function($key, $value) {
        if ($key == "message") {
          //wrap
          var group = $value.length;
          $('.chat-content').append('<div class ="message message-'+group+'"></div>');
          //取值加入wrap
            $.each($value[$value.length - 1], function($key, $value) {
                if ($key == "time") {
                      $('.chat-content').find('.message-'+group).append('<div class ="field-item field-time">'+$value+'</div>');
                }
                if ($key == "message") {
                    $('.chat-content').find('.message-'+group).append('<div class ="field-item field-message">'+$value+'</div>');
                }
            })
        }
    })

}

function imgbtn() {
    var messageObj = new Object;
    messageObj.user = "you";
    messageObj.message = $('.image-item.active').find('img').attr('src');
    messageObj.time = time;
    messageObj.uid = messageArray.length + 1;
    messageArray.push(messageObj);
    console.log(JSON.stringify(replyObj));
    $.each(replyObj, function($key, $value) {
        if ($key == "message") {
          //wrap
          var group = $value.length;
          $('.chat-content').append('<div class ="message message-'+group+'"></div>');
          //取值加入wrap
            $.each($value[$value.length - 1], function($key, $value) {
                if ($key == "time") {
                      $('.chat-content').find('.message-'+group).append('<div class ="field-item field-time">'+$value+'</div>');
                }
                if ($key == "message") {
                    $('.chat-content').find('.message-'+group).append('<div class ="field-item field-message"><img src ="' + $value + '" style ="max-width:150px;"></div>');
                }
            })
        }
    })
}