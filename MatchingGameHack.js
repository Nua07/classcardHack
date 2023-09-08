//매칭 게임 내에서 함수 실행

function sendScore(problem, score) { // total score = problem * score + 100 (default score) 
  const arr = [];

  for (let i = 0; i < problem; i++)
    arr.push(ggk.d(score, 1));


  $data = {
    set_idx: set_idx,
    arr_key: ggk.a(),
    arr_score: arr,
    activity: 0x4,
    tid: tid,
    class_idx: class_idx
  };

  jQuery.ajax({
      url: "/Match/save",
      global: false,
      type: "POST",
      data: $data,
      dataType: "json",
      async: checkAjaxAsync(),
      
      success: data => {
        if (data.result === "ok") {
          tid = data.tid
          alert("성공\n" + JSON.stringify(data))
          return ;
        }
        
        alert("에러\n" + JSON.stringify(data));
      },

      error: (response, textStatus, errorThrown) => {
        alert("에러\n" + JSON.stringify(response));
      }
  })
}
