;(function () {
    var toastObj;
    var timer;
    var time = 2000;

    /**
     * toast提示
     *
     * @param {string} content 显示文字，字符串
     * @param {number} timeout 显示时间
     */
    function toast(content, timeout) {
        if (!isNaN(timeout)) {
            time = timeout;
        }
        if (toastObj) {
            clearTimeout(timer);
            $('p', toastObj).text = content;
        }
        else {
            toastObj = $('<div id="toast" class="animate fade-in-toast"><p>' + content + '</p></div>');
            $('body').append(toastObj);
            timer = createTimer();
        }
    }

    function createTimer() {
        return setTimeout(function () {
            removeToast();
        }, time);
    }

    function removeToast() {
        if (toastObj) {
            toastObj.remove();
            toastObj = null;
        }
    }

    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = toast;
    }
    else if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(function () {
            return toast;
        });
    }
    else if (window) {
        window.Toast = toast;
    }
    else {
        global.Toast = toast;
    }
})();
