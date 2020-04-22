//매칭 게임 내에서 함수 실행

function sendScore(score_input) {
    $data = {
        set_idx: set_idx,
        score: score_input,
        activity: 4,
        tid: tid
    };
    jQuery.ajax({
        url: "/Match/save",
        global: false,
        type: "POST",
        data: $data,
        dataType: "json",
        success: function(data) {
            if (data.result == "ok") {
                alert("성공\n" + JSON.stringify(data))
                tid = data.tid
            } else {
                alert("에러\n" + JSON.stringify(data))
            }
        },
        error: function(response, textStatus, errorThrown) {
            alert("에러\n" + JSON.stringify(response))
        }
    })
}
