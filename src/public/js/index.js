var orderStep = 0

var oAddClass = $.fn.addClass;
$.fn.addClass = function () {
    for (var i in arguments) {
        var arg = arguments[i];
        if ( !! (arg && arg.constructor && arg.call && arg.apply)) {
            arg();
            delete arg;
        }
    }
    return oAddClass.apply(this, arguments);
}


$(function() {
    var $from_option = $('#from_option');
    var $to_option = $('#to_option');
    $(document).on("click",'#next_button',(function(){

        $(document.querySelectorAll('#next_button')).addClass('disabled')
        $(document.querySelectorAll('#back_button')).addClass('disabled')
        if(orderStep == 1){

            orderStep++
            orderStep++
            setTimeout(function(){
                $(document.querySelector('#order_step_' + (orderStep-1))).addClass('animate__animated  animate__fadeOutLeft', function(){
                    setTimeout(function(){
                        $(document.querySelector('#order_step_' + (orderStep-1))).css({display : 'none'})

                    },500);
                    setTimeout(function(){
                        $(document.querySelector('#order_step_' +(orderStep))).css({display : 'block'})
                        $(document.querySelector('#order_step_' +(orderStep))).addClass(' animate__animated animate__slideInRight')
                    },501);
                    setTimeout(function(){
                        $(document.querySelector('#order_step_' + (orderStep-1))).removeClass(' animate__animated animate__fadeOutLeft')
                        $(document.querySelector('#order_step_' + (orderStep))).removeClass(' animate__animated animate__slideInRight')
                        $(document.querySelectorAll('#next_button')).removeClass('disabled')
                        $(document.querySelectorAll('#back_button')).removeClass('disabled')
                    },1700);
                })
            },200);


        }else{
            $(document.querySelector('#order_step_' + orderStep)).addClass(' animate__animated  animate__fadeOutLeft', function(){
                setTimeout(function(){
                    
                },500);
                setTimeout(function(){
                    $(document.querySelector('#order_step_' + orderStep)).css({display : 'none'})
                    orderStep++
                },520);
                setTimeout(function(){
                    $(document.querySelector('#order_step_' + orderStep)).css({display : 'block'})
                    $(document.querySelector('#order_step_' + orderStep)).addClass(' animate__animated  animate__slideInRight')
                },530);
                setTimeout(function(){
                    $(document.querySelector('#order_step_' + (orderStep - 1))).removeClass(' animate__animated animate__fadeOutLeft')
                    $(document.querySelector('#order_step_' + orderStep)).removeClass(' animate__animated animate__slideInRight')
                    $(document.querySelectorAll('#next_button')).removeClass('disabled')
                    $(document.querySelectorAll('#back_button')).removeClass('disabled')
                },1700);
            })
        }





    }))

    $(document).on("click",'#back_button',(function(){
        $(document.querySelectorAll('#next_button')).addClass('disabled')
        $(document.querySelectorAll('#back_button')).addClass('disabled')


        if(orderStep >2){
            $(document.querySelector('#order_step_' + orderStep)).addClass('animate__animated animate__fadeOutRight', function(){
                setTimeout(function(){
                    $(document.querySelector('#order_step_' + orderStep)).css({display : 'none'})
                    $(document.querySelector('#order_step_' + (orderStep-1))).css({display : 'block'})
                },600);
                setTimeout(function(){
                    orderStep--
                },601);
                setTimeout(function(){
                    $(document.querySelector('#order_step_' + orderStep)).addClass(' animate__animated animate__slideInLeft')
                },602);
                setTimeout(function(){
                    $(document.querySelector('#order_step_' + orderStep )).removeClass(' animate__animated animate__slideInLeft')
                    $(document.querySelector('#order_step_' + (orderStep + 1))).removeClass(' animate__animated animate__fadeOutRight')
                    $(document.querySelectorAll('#next_button')).removeClass('disabled')
                    $(document.querySelectorAll('#back_button')).removeClass('disabled')
                },1700);
            })



        }else{
            orderStep = 0
            setTimeout(function(){
                $(document.querySelector('#order_step_' + (orderStep + 1))).addClass('animate__animated  animate__fadeOutRight', function(){
                    setTimeout(function(){
                        $(document.querySelector('#order_step_' + (orderStep + 1))).css({display : 'none'})
                        $(document.querySelector('#order_step_' + (orderStep))).css({display : 'block'})
                    },500);
                    setTimeout(function(){
                        $(document.querySelector('#order_step_' + (orderStep))).addClass(' animate__animated animate__slideInLeft')
                    },501);
                    setTimeout(function(){
                        $(document.querySelector('#order_step_' + (orderStep + 1))).removeClass(' animate__animated animate__fadeOutRight')
                        $(document.querySelector('#order_step_' + (orderStep))).removeClass(' animate__animated animate__slideInLeft')
                        $(document.querySelectorAll('#next_button')).removeClass('disabled')
                        $(document.querySelectorAll('#back_button')).removeClass('disabled')
                    },1700);
                })
            },200);
        }
    }))


    retrieveStation().then(res =>{
        $.each(res, function(Null , res) {
            console.log(res.id + ' ' + res.name)
            var $from_row_option = $("<option/>", {
              id : "from_" + res.id,
              value: res.id,
              text: res.name,
              class: 'from_row_option'
            });
            $from_option.append($from_row_option);

            var $to_row_option = $("<option/>", {
                id : "to_" + res.id,
                value: res.id,
                text: res.name,
                class: 'to_row_option'
              });
              $to_option.append($to_row_option);
          });
    })

    $(document).on("click",'.from_row_option',(function(){

        $('.to_row_option').removeClass('disp-hide').delay(10).queue(function(){
            $('#to_' + $from_option.val()).addClass('disp-hide')
            $(this).dequeue();
         });


    }))

    $(document).on("click",'.to_row_option',(function(res){

        $('.from_row_option').removeClass('disp-hide').delay(10).queue(function(){
            $('#from_' + $to_option.val()).addClass('disp-hide')
            $(this).dequeue();
         });
    }))
})
