/**
 * Created by zuocheng.peng on 2017/4/26.
 */

define(function (require,exports,module) {
    $(document).ready(function () {
        picList.play();
    })
    var picList={
        play:function () {
            $(".s1 li").each(function (i) {
                $(this).css("background","red")
            })
        }

    }
});
