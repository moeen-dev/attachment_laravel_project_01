document.addEventListener("DOMContentLoaded", function () {
    if (typeof window.toastMessages !== "undefined") {
        const messages = window.toastMessages;

        if (messages.success) {
            iziToast.success({
                title: "Success!",
                message: messages.success,
                position: "topCenter",
            });
        }

        if (messages.error) {
            iziToast.error({
                title: "Oops!",
                message: messages.error,
                position: "topCenter",
            });
        }

        if (messages.info) {
            iziToast.info({
                title: "Heads up!",
                message: messages.info,
                position: "topCenter",
            });
        }

        if (messages.warning) {
            iziToast.warning({
                title: "Notice!",
                message: messages.warning,
                position: "topCenter",
            });
        }

        if (Array.isArray(messages.validationErrors)) {
            messages.validationErrors.forEach(function (error) {
                iziToast.error({
                    title: "Oops!",
                    message: error,
                    position: "topCenter",
                });
            });
        }
    }
});
