const push = document.querySelector('.push-notifications');

push.addEventListener('click', () => {
    Notification.requestPermission().then(perm => {
        if (perm === "granted") {
            const notification = new Notification("OUAISS j'ai réussii", {
                body: "amiibo API",
                data: {hello: "world"},
                icon: "icon amiibo.png",
                // tag: "Welcome Message",
            })

            notification.addEventListener("error", e => {
                alert("error");
            })
        }
    })
})