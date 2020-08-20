arr_send_card_idx=[0]
arr_send_score=[0]

for(var i=0;i<study_data.length;i++){
    arr_send_card_idx.push(study_data[i].card_idx)
    arr_send_score.push(1)
}

sendLearnAll()
