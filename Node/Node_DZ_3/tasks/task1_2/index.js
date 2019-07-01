function getAjax() {
    $.ajax({
        type: "GET",
        url: "./ajax.html",
        success: function (response) {
            $("#container").append(response);
        }
    });
};

function getJSON() {
    $.ajax({
        type: "GET",
        url: "./users.json",
        contentType: "application/json",
        success: function (res) {
            if (!Array.isArray(res)) {
                return;
            };
            const $ul = $("#container").append("<ul/>");
            res.forEach(user => {
                const $li = $("<li/>").appendTo($ul);
                $li.text(user.name);
            });
        }
    });
};