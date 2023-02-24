
$(function() {

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "love" },
        headers: { Authorization: "KakaoAK 7e55dc837ebf9856b2d84e9936a60473" }
      })
        .done(function (msg) {
          console.log(msg);
          // for문 (8개)
          var divs = document.getElementsByTagName('div');
    
          for (var i = 0; i < divs.length; i++) {
    
            $(".sg").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $(".st").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            $(".st").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");
    
            var str = msg.documents[i].contents;
            var str2 = str.substring(0, 60);
    
            $(".st").eq(i).append("<p>" + str2 + "</p>");
          }
        });

});


$(function() {

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "a detective story" },
        headers: { Authorization: "KakaoAK 7e55dc837ebf9856b2d84e9936a60473" }
      })
        .done(function (msg) {
          console.log(msg);
          // for문 (8개)
          var divs = document.getElementsByTagName('div');
    
          for (var i = 0; i < divs.length; i++) {
    
            $(".pk").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $(".pt").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            $(".pt").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");
    
            var str = msg.documents[i].contents;
            var str2 = str.substring(0, 60);
            $(".pt").eq(i).append("<p>" + str2 + "</p>");
          }
        });

});


$(function() {

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "Spare" },
        headers: { Authorization: "KakaoAK 7e55dc837ebf9856b2d84e9936a60473" }
      })
        .done(function (msg) {
          console.log(msg);
          // for문 (8개)
          var divs = document.getElementsByTagName('div');
    
          for (var i = 0; i < divs.length; i++) {
    
            $(".Hdt").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            $(".Hdtt").eq(i).append("<h6>" + msg.documents[i].price + "</h6>");
    
            var str = msg.documents[i].contents;
            var str2 = str.substring(0, 60);
    
            $(".Hdttt").eq(i).append("<p>" + str + "</p>");
    
          }
    
        });

});


$(function() {

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "ballet" },
        headers: { Authorization: "KakaoAK 7e55dc837ebf9856b2d84e9936a60473" }
      })
        .done(function (msg) {
          console.log(msg);
          // for문 (8개)
          var divs = document.getElementsByTagName('div');
    
          for (var i = 0; i < divs.length; i++) {
    
            $(".BOOKK").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $(".BK").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            $(".BKt").eq(i).append("<h6>" + msg.documents[i].price + "</h6>");
    
            var str = msg.documents[i].contents;
            var str2 = str.substring(0, 60);
    
          }
    
        });

});




$(function() {

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "ballet" },
        headers: { Authorization: "KakaoAK 7e55dc837ebf9856b2d84e9936a60473" }
      })
        .done(function (msg) {
          console.log(msg);
          // for문 (8개)
          var divs = document.getElementsByTagName('div');
    
          for (var i = 0; i < divs.length; i++) {
    
            $(".WNi").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $(".WNit").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            $(".WP").eq(i).append("<h6>" + msg.documents[i].price + "</h6>");
    
            var str = msg.documents[i].contents;
            var str2 = str.substring(0, 60);
    
          }
    
        });

});






    $(function() {
        function slide() {
            $('.slide').stop().animate({ marginLeft: "-100%" }, 800, function () {
              $('.slide li:first').appendTo('.slide');
              $('.slide').css({ marginLeft: 0 });
            });
          }
      
        setInterval(slide, 3000);

    });
        
    