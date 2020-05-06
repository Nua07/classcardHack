//암기 내에서 실행
tmp=document.getElementsByClassName("study-body fade in")[0]
arr_send_card_idx=[0]
for(var i=0;i<tmp.children.length;i++){
    arr_send_card_idx.push(tmp.children[i].attributes["data-idx"].value)
    arr_send_score.push(1)
}
sendLearnAll()
