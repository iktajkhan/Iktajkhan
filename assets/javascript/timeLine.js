
(function($) {

        $.fn.timeLine = function(prop)
        {
            'use strict';
            var settings = $.extend({
                                        myTimeLine: this,
                                        mainColor: '',    //Main color of timeLine
                                        opacity: '0.5',
                                        offset: '400',
                                        itemAnimateDuration: 2,
                                        lineColor: '#DDDDDD',
                                        LeftAnimation: 'rotateInUpRight',                                        
                                        RightAnimation: 'rotateInUpLeft',                                       
                                    }, prop);


            $(document).ready(function()
            {
                'use strict';
                var PositionBottom = 80,
                    item = settings.myTimeLine.find('.item'),
                    title = item.find('.title'),
                    video = item.find('video'),
                    text = item.find('.textContent'),
                    itemDuration,
                    i,
                    showMSG = true;

                function rgb2hex(rgb)
                {
                    'use strict';
                     rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
                     return (rgb && rgb.length === 4) ? "#" +
                      ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
                      ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
                      ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
                }
                function colorCheck(value)
                {
                    'use strict';
                    var check = /^#[0-9A-Fa-f]{3,6}$/i.test(value);
                    if(!check && showMSG)
                        {
                            console.log('%cWarning!!! Unkown or undefined color format, please set your color format like this example #FFFFFF or #FFF. default color will be set', 'font-size: 21px; color: red');
                            showMSG = false;
                            return [check, '#DDD'];
                        }else
                        {
                            return [check, value];
                        }

                }
                function hexToRgbaColor(color)
                {
                    'use strict';
                    console.log(color);
                    var isColor = colorCheck(color)[0],
                        defaultColor = '#b50000',
                        neigborDefaultColor = '#5E0000';
                    if(isColor)
                    {
                        var newColor = color;
                        if(color && color.length == 4)
                        {
                            newColor = color.replace(/[0-9A-F]{1}/ig, '$&$&');
                        }
                        var s = newColor,
                        patt = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/,
                        matches = patt.exec(s),
                        rgba = "rgba("+parseInt(matches[1], 16)+","+parseInt(matches[2], 16)+","+parseInt(matches[3], 16)+","+settings.opacity+")",
                        neigborRGBA = "rgba("+(((parseInt(matches[1], 16))-94) <= 0 ? 0 : ((parseInt(matches[1], 16))-94)) +","+parseInt(matches[2], 16)+","+parseInt(matches[3], 16)+")";
                        return [rgba, rgb2hex(neigborRGBA)];
                    }else
                    {
                        return [defaultColor, neigborDefaultColor];
                    }
                }
                function titleAnimate(iteration)
                {
                    'use strict';
                    title.eq(iteration).animate({bottom: '10px' ,opacity: 1}, 2000);
                }
                function playVideo()
                {
                    video.after('<div class="controll"><i style="font-size: 250px" class="fa fa-play-circle" aria-hidden="true"></i></div>');
                    var controll = item.find('.controll');
                    controll.click(function(e)
                    {
                        $(this).stop(true, true);
                        $(this).fadeOut(200);
                        $(this).parents('.image').find('video').get(0).play();
                        e.stopPropagation();
                    });
                    controll.parents('.image').find('video').on( 'ended', function()
                            {
                                    console.log('click');
                                    $(this).next().fadeIn(200);
                                    $(this).next().children().fadeIn(200);
                                    $(this).get(0).load();
                            });
                    video.click(function(e)
                    {
                        $(this).stop(false, true);
                        if(!$(this).get(0).paused)
                        {
                            $(this).get(0).pause();
                            $(this).parent().find('.controll').fadeIn(200);
                            $(this).parent().find('.controll i').fadeIn(200);
                        }
                        e.stopPropagation();
                    });
                }
                function init()
                {
                    'use strict';
                    var color = hexToRgbaColor(settings.mainColor)[0], colorNeigbor = hexToRgbaColor(settings.mainColor)[1];
                        settings.myTimeLine.find('.item:even').addClass('wow '+settings.LeftAnimation).attr('data-wow-offset', settings.offset).attr('data-wow-duration', settings.itemAnimateDuration + 's');
                        settings.myTimeLine.find('.item:odd').addClass('wow pull-right '+settings.RightAnimation).attr('data-wow-duration', settings.itemAnimateDuration + 's');
                    settings.myTimeLine.find('.pull-right').attr('data-wow-delay', '0.5s');
                    item.find('.title').css({backgroundColor: color});
                    item.find('.star').css({backgroundColor: color});
                    title.css({bottom: PositionBottom + 'px', opacity: 0, cursor: 'pointer'});
                    title.click(function(e)
                    {
                        $(e.target).closest('.caption').find('.textContent').stop(true, false);
                        if(!$(e.target).closest('.caption').find('.textContent').hasClass('in'))
                        {
                            $(e.target).closest('.caption').find('.textContent').slideDown(400).addClass('in');
                            $(e.target).closest('.caption').find('.title i').css({transform: 'rotate(90deg)', transition: 'transform 0.4s ease-out'});
                        }else
                        {
                            $(e.target).closest('.caption').find('.textContent').slideUp(400).removeClass('in');
                            $(e.target).closest('.caption').find('.title i').css({transform: 'rotate(0deg)'});
                        }
                        // console.log($(':animated'));
                    });
                    text.find('p').css({borderLeft: '5px solid '+color});
                    text.hide();
                    $('head').append('<style>.timeLine .row .item .caption .image .title:before{border-top: 10px solid '
                        +colorNeigbor+
                        '}.timeLine .row .item .caption .star:before{border-right: 10px solid '+colorNeigbor+'}.timeLine .row .pull-right:before,.timeLine .row .item:before{border: 3px solid '
                        +color+
                        '}.timeLine .row .lineHeader:after{background-color: '
                        +colorCheck(settings.lineColor)[1]+
                        '}.timeLine .row .lineHeader:before,.timeLine .row .lineFooter:before{color: '+colorCheck(settings.lineColor)[1]+'}</style>');
                    new WOW().init();
                }
                function apply()
                {
                    'use strict';
                    itemDuration = (settings.itemAnimateDuration - (settings.itemAnimateDuration * 0.75)) * 1000;
                        $(window).scroll(function()
                        {
                            for(i=0; i< title.length; i++)
                            {
                                if(item.eq(i).css('visibility') == 'visible' && !item.eq(i).hasClass('done'))
                                {
                                    item.eq(i).addClass('done')
                                    window.setTimeout(titleAnimate, itemDuration, i);
                                }
                            }
                        });
                        for(i=0; i< title.length; i++)
                        {
                            if(item.eq(i).css('visibility') == 'visible' && !item.eq(i).hasClass('done'))
                            {
                                item.eq(i).addClass('done')
                                window.setTimeout(titleAnimate, itemDuration, i);
                            }
                        }
                        playVideo();
                }
                
                init();
                window.setTimeout(apply, 1000);
            });
        }
})(jQuery) 