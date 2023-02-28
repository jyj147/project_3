$(document).ready(function () {

    drawGraph(document.getElementById("g1"));

    function drawGraph(obj) {
        this.gages = obj.getElementsByTagName("span");
        this.values = obj.getElementsByTagName("em");

        for (var i = 0; i < this.gages.length; i++) {
            (function (idx) {
                var current_value = 0;
                var gage_object = this.gages[idx];
                var gage_value = this.values[idx];
                var gage_width = parseInt(gage_object.style.width);
                var timer = null;

                timer = setInterval(function () {
                    if (current_value < gage_width) {
                        current_value += Math.ceil((gage_width - current_value) / 15);
                        gage_object.style.width = current_value + "%";
                        gage_value.innerHTML = current_value + "%";
                    } else {
                        clearInterval(timer);
                    }
                }, 10);
            })(i);
        }
    }

    $(document).ready(function () {
        $(window).scroll(function () {
            $('.graph').each(function () {
                var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
                var bottom_of_window = $(window).scrollTop() + $(window).height() - 100;

                if (bottom_of_window > bottom_of_element) {
                    $(this).animate({ 'opacity': '1' }, 400);
                }
            });
        });
    });

    $(document).ready(function () {
        $(window).scroll(function () {
            $('.sese').each(function () {
                var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
                var bottom_of_window = $(window).scrollTop() + $(window).height() - 100;

                if (bottom_of_window > bottom_of_element) {
                    $(this).animate({ 'opacity': '1' }, 100);
                }
            });
        });
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "치매" },
        headers: { Authorization: "KakaoAK 7e55dc837ebf9856b2d84e9936a60473" }
    })
        .done(function (msg) {
            console.log(msg);
            // for문 (8개)
            var divs = document.getElementsByTagName('div');

            for (var i = 0; i < divs.length; i++) {

                $(".PKK").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
                $(".PPKT").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
                $(".PPKT").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");

                var str = msg.documents[i].contents;
                var str2 = str.substring(0, 40);
                $(".PPKT").eq(i).append("<p>" + str2 + "..</p>");
            }
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "치매의 모든 것" },
        headers: { Authorization: "KakaoAK 7e55dc837ebf9856b2d84e9936a60473" }
    })
        .done(function (msg) {
            console.log(msg);
            // for문 (8개)
            var divs = document.getElementsByTagName('div');

            for (var i = 0; i < divs.length; i++) {

                // $(".sUbp").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
                $(".T").eq(i).append("<h1>제목 :" + msg.documents[i].title + "</h1>");
                $(".Au").eq(i).append("<h2>작가 :" + msg.documents[i].authors + "</h2>");
                $(".P").eq(i).append("<h3>가격 :" + msg.documents[i].price + "</h3>");
                $(".SP").eq(i).append("<h3>할인 가격 :" + msg.documents[i].sale_price + "</h3>");
                $(".J").eq(i).append("<h3>" + msg.documents[i].status + "</h3>");

            }
        });

    $(function () {

        $.get("./sub_txt/txt1.txt", function (data) {

            $(".ST").html(data);

        })
    });

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

