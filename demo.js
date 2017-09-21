

    var boxHtml1="";
    var boxHtml2="";
    var boxHtml3="";
    var boxHtml4="";
    for(var i = 0;i <12;i++){
        if(i<3){
            boxHtml1 += '<div class="calendar" id="dateBox'+i+'"></div>'
        }else if(i>=3&&i<6){
            boxHtml2 += '<div class="calendar" id="dateBox'+i+'"></div>'
        }else if(i>=6&&i<9){
            boxHtml3 += '<div class="calendar" id="dateBox'+i+'"></div>'

        }else{
            boxHtml4 += '<div class="calendar" id="dateBox'+i+'"></div>'

        }
    }

    $(".calendar_box").eq(0).append(boxHtml1)
    $(".calendar_box").eq(1).append(boxHtml2)
    $(".calendar_box").eq(2).append(boxHtml3)
    $(".calendar_box").eq(3).append(boxHtml4)





    //判断当前年份是否是闰年(闰年2月份有29天，平年2月份只有28天)
    function Calendar(y,m,id){
        function isLeap(year) {
            return year % 4 == 0 ? (year % 100 != 0 ? 1 : (year % 400 == 0 ? 1 : 0)) : 0;
        }
              var today = new Date(),//获取当前日期
                y = y,
                m = m;
                d = today.getDate(),//获取日期中的日(方便在建立日期表格时高亮显示当天)
                firstday = new Date(y, m, 1),//获取当月的第一天
                dayOfWeek = firstday.getDay(),//判断第一天是星期几(返回[0-6]中的一个，0代表星期天，1代表星期一，以此类推)
                days_per_month = new Array(31, 28 + isLeap(y), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31),//创建月份数组
                str_nums = Math.ceil((dayOfWeek + days_per_month[m]) / 7);//确定日期表格所需的行数

        var html = '<ul><li>日</li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li>六</li><br>';//显示星期
        for (var i = 0; i < str_nums; i += 1) {//二维数组创建日期表格
            for (var k = 0; k < 7; k++) {
                var idx = 7 * i + k;//为每个表格创建索引,从0开始
                var date = idx - dayOfWeek + 1;//将当月的1号与星期进行匹配
                (date <= 0 || date > days_per_month[m]) ? date = ' ': date = idx - dayOfWeek + 1;//索引小于等于0或者大于月份最大值就用空表格代替
//                var dataC= y.toString()+  (m+1)  +date;
            var dataM = m+1;//月份前面加0
             var data_d = date;//天小于9 前面加0

             if(dataM<=9){
                 dataM = "0"+dataM
             }
                if(data_d<=9){
                    data_d = "0"+data_d
                }
                html += '<li data='+y.toString()+  dataM + data_d +'><span class="calendar_tips"></span>' + date + '</li>'
//                date == d ? html += '<li data='+y.toString()+ dataM  +date+'>' + data_d + '</li>' : html += '<li data='+y.toString()+  dataM + data_d +'>' + date + '</li>';//高亮显示当天
            }
            html += "<br>";
        }
        html += '</ul>';
        html += '<span class="calendar_month">'+ (+m+1) +'</span>'

        id.html(html)
    }

var year = new Date().getFullYear()

    for(var i = 0;i <12;i++){
        Calendar(year,i,$("#dateBox"+i+""))
    }


//把今天添加背景
    $("#box").find("[data='20170918']").css({
        borderRadius:25,
        background:"#999999",
        fontWeight: 900
    })
//显示当天当季
$('.calendar_box').has("[data='20170918']").show().siblings().hide();
         //当天日历盒子的index
  var index =  $('.calendar_box').has("[data='20170918']").index();

      $(".calendar_quarter").eq(index).addClass("red")

//    季节点击事件
      $(".calendar_quarter").click(function () {

//          导航点击添加背景
      $(this).addClass("red").siblings().removeClass("red");
//          点击联动
      var calendar_index =  $(this).index();
      $('.calendar_box').eq(calendar_index).show().siblings().hide();

  })


    var seaDisaster = [
        // ["2017-09-14 12:12:00",null,"6","132","风暴潮","白","312","312","312","0"],
        ["2017-09-18 12:12:00",null,"6","132","风暴潮","蓝","312","312","312","0"]
        // ["2017-09-01 17:30:00","2017-09-07 02:02:00","6","132","风暴潮","白","312","312","312","0"],
        //["2017-11-01 07:30:00","2017-11-01 12:02:00","6","132","风暴潮","白","312","312","312","0"],
        //["2017-08-01 13:30:00","2017-08-05 13:30:00","6","132","风暴潮","红","312","312","312","0"],
    ]


    var colorLevel= ["白","蓝","黄","橙","红"];//颜色


    var addclass = ["whiteLevel","blueLevel","yellowLevel","orangeLevel","redLevel"];//类名


    var colorLevel= ["白","蓝","黄","橙","红"];//存颜色的数组
    var addclass = ["whiteLevel","blueLevel","yellowLevel","orangeLevel","redLevel"];//存类名的数组

    var tipsHtml="";
    var cancelTime =[];
    var oneDayMilliSeconds = 24 * 3600 * 1000;//1天的毫秒数
    var today = new Date();//今天
    var cancelDate;//取消时间
    //循环遍历数据
    for(var i=0;i<seaDisaster.length;i++){
        //截取每个数组的第一个发布时间
        //  时间是字符串截取前10位seaDisaster[i][0].substring(0,10).split('-').join(0-'')+"']")
        //data = 日期
        //灾害等级在存颜色数组的索引
        //然后存类名的数组找到对应的类名添加到日期所对应的标签
        // addclass[colorLevel.indexOf(seaDisaster[i][5])]
        tipsHtml = '<p style="width:100%;height:12px;font-size:10px;line-height:12px;margin-top:5px;">'+seaDisaster[i][0].substring(11,16)+"&nbsp;"+seaDisaster[i][4]+seaDisaster[i][5]+'色预警</p>';
        $("#box").find("[data='"+seaDisaster[i][0].substring(0,10).split('-').join('')+"']")
                .addClass(addclass[colorLevel.indexOf(seaDisaster[i][5])])
                .attr("data-res","123")//自定义属性
                .attr("style","cursor:pointer;")
                .children(".calendar_tips").append(tipsHtml);
        //如果取消时间存在
        if (seaDisaster[i][1] != '' && seaDisaster[i][1] != null && seaDisaster[i][1] != undefined) {
            cancelDate = new Date(seaDisaster[i][1]);
        } else {
            cancelDate = today;//取消时间不存在，则默认到今天
        }
        //获取发布时间、取消时间的时间差（毫秒差）
        var differenceDays = cancelDate.getTime() - new Date(seaDisaster[i][0].substring(0,10) + ' 00:00:00').getTime();
        //将毫秒差转换为天数差
        differenceDays = Math.floor(differenceDays/oneDayMilliSeconds);
        if (differenceDays > 0) {
            //遍历天数，将未来 differenceDays 天都显示上颜色
            for (var j = 1; j <= differenceDays; j++) {
                //未来第 j 天
                var nextDate = new Date(new Date(seaDisaster[i][0]).getTime() + j * oneDayMilliSeconds);
                var nextYear = nextDate.getFullYear(),
                nextMonth = nextDate.getMonth() + 1,
                nextDay = nextDate.getDate();
                nextMonth = nextMonth > 9 ? nextMonth : '0' + nextMonth;
                nextDay = nextDay > 9 ? nextDay : '0' + nextDay;
                var nextDateStr = nextYear + '' + nextMonth + '' + nextDay;
                $("#box").find("[data='" + nextDateStr + "']")
                        .addClass(addclass[colorLevel.indexOf(seaDisaster[i][5])])
                        .attr("data-res","123")//自定义属性
                        .attr("style","cursor:pointer;")
                        .children(".calendar_tips").append(tipsHtml);
            }
        }
    }
    // style="cursor:pointer;"
    // 鼠标移入显示数据
    $("#box ul li[data-res='123']").on("mousemove", function(e){
        $(this).children(".calendar_tips").show();//当前提示框显示
        $(this).children(".calendar_tips").css({
            'left': e.offsetX+10,
            'top': e.offsetY+10
        });
        $(this).siblings().children(".calendar_tips").hide();
        $(this).parents(".calendar").siblings().find(".calendar_tips").hide();
    })

    // 鼠标移出隐藏
    $("#box ul li").on("mouseleave",function(){
        $(this).children(".calendar_tips").hide();
    })






