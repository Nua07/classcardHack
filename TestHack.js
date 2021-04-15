let cards = $("div.flip-card")

for(let i = 0; i<cards.length; i++) {
    let tq = $("input[name='test_question[]']", cards[i]).val()
    let ans = obj_answer["q" + tq]
    let input_wrap = $("div.cc-radio-box", cards[i])
    
    for(let j = 0; j<input_wrap.length; j++) {
        let txt = $("label>div>div", input_wrap[j]).text()
        let inp = $("input", input_wrap[j])
        
        if(txt === ans) {
            $("input.user_answer", cards[i]).val(inp.val())
            break
        }
    }
}
submitTest("/)
