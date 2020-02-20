require(["gitbook"], function(gitbook) {
    gitbook.events.bind("start", function(e, config) {
        window.addEventListener('message', (event) => {
            var fullTicketId = '';
            if (typeof event.data === 'string') {
                try {
                    fullTicketId = JSON.parse(event.data).fullTicketId;
                } catch (e) {
                    console.warn('本次 message 事件中未解析得到 fullTicketId ：', e);
                }
            }
            if (event.data && fullTicketId) {
                // 登录成功，清除定时器，不做其它操作
            } else if (event.data && event.data.check ) {
                // 登录失败，需要重定向至登录页面
                window.location.href="/#login";
            }
        }, false);
        window.__LISTENING_LOGIN_MESSAGE__ = true;
    });
});
