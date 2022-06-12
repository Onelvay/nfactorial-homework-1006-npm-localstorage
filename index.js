$('document').ready(function() {
    $('#fisrt_button').on('click', function(){
        
        var nameof = $('#Person_name').val()
        var char=$('#charac').val()
        var adverb=$('#adverb').val()
        var fo=$('#fo').val()
        
        stories={
            1:{
                text:"Однажды "+nameof+" встретил "+char+" тот попросил его угостить "+adverb+"  на что он с радостью дал ему в "+fo,
                head:"История"
            },
            2:{
                text:"story "+nameof+" story "+char,
                head:"nova 4"
            },
            3:{
                text:"дед инсайд "+nameof+ " морти ",
                head:"asdazxcxz"
            },
            4:{
                text:"проверять никто не будет пишу что хочу "+nameof+char+adverb+fo,
                head:"onelvayy"
            },
            5:{
                text:"нажми на хом "+ char,
                head:"one l va asdsa"
            }
        }
        min = Math.ceil(1);
        max = Math.floor(6);
        var index=Math.floor(Math.random() * (max - min)) + min; 
        var str=stories[index].text
        var str_2=stories[index].head

        
        console.log(index)
        console.log(str)

        var to_add_head='<h1 style="margin-top: 100px;opacity: 0;" id ="tekst" id="change_color">'+str_2+'</h1>'
        var to_add='<h4 style="margin-top: 30px;opacity: 0;" id="tekstr" id="change_color">'+str+'</h4>'
        $('#amain').append(to_add_head);
        $('#amain').append(to_add);
        
        if(nameof && adverb && char && fo){
            $('#tekst').show().animate(
                {
                    opacity: 1,
                }, 
                500,
                function(){
                }
            )
        
            $('#tekstr').show().animate(
                {
                    opacity: 1,
                }, 
                900,
                function(){
                }
            )
            $('#error').show().animate(
                {
                    opacity: 0,
                    color: "red",
                }, 
                0,
                function(){
                }
            )
        }
        else{
            $('#error').show().animate(
                {
                    opacity: 1,
                    color: "red",
                }, 
                100,
                function(){
                }
            )
        }
    })
    $('#second_button').on('click', function(){
        var first_ = $('#first').val()
        var second_=$('#second').val()
        var third_=$('#third').val()
        console.log(first_)
        var sum=(((((first_)*(second_))/(third_))/1000)+'').split(".")[0]
        console.log(sum)
        if (sum>1024){
            var to_add='<h4 style="margin-top: 30px;opacity: 0;" id="sec_show">'+(sum)+'kb многа'+'</h4>'
            $('#sec_amain').append(to_add);
            $('#sec_show').show().animate(
                {
                    opacity: 1,
                }, 
                900,
                function(){
                }
            )
            
        }
        else{
            var to_add='<h4 style="margin-top: 30px;opacity: 0;" id="sec_show">'+(sum)+'kb нормально'+'</h4>'
            $('#sec_amain').append(to_add);
            $('#sec_show').show().animate(
                {
                    opacity: 1,
                }, 
                900,
                function(){
                }
            )
        }
    })
})
