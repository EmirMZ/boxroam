var orderStep = 0
var retrieveStationStatus = false
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
    var $bus_routes = $('#order_step_3');

    //<div class="card text-dark mb-2 container"><div class="card-body p-1"><div class="row"><div class="col my-auto "><h1 id="order_step_3_loading_text" class="card-title italic-bold">Loading your BOX</h1></div></div></div></div>
    $(document).on("click",'.book_this_button',(function(e){
        $(document.querySelectorAll('.book_this_button')).addClass('disabled')
        if(doesHttpOnlyCookieExist('token')){
            addBooking($from_option.val(),$to_option.val(),e.currentTarget.id.replace('book_button_','')).then((value)=>{
                if(value.status == 'booking_success'){
                    alert('sucess, your booking number is ' + value.booking_id)
                }else{
                    console.log('booking failed')
                    $(document.querySelectorAll('.book_this_button')).removeClass('disabled')
                }
            })
        }else{
            $(document.querySelector('.login-modal')).modal('toggle')
        }

    }))
    
    $(document).on("click",'#next_button',(function(){
        setTimeout(function(){
            if(!($('#order_step_3:visible').length == 0)){
                $bus_routes.empty()
                setTimeout(function(){
                    $bus_routes.append('<div class="card text-dark mb-2 container"><div class="card-body p-1"><div class="row"><div class="col my-auto "><h1 id="order_step_3_loading_text" class="card-title italic-bold">Loading your BOX</h1></div></div></div></div>')
                },10)
                $(document.querySelectorAll('#next_button')).addClass('disp-hide')
                retrieveBus($from_option.val(),$to_option.val()).then(res =>{
                    setTimeout(function(){
                        if (!res.error){
                            $bus_routes.empty()
                        }else{ 
                                $('#order_step_3_loading_text').text('No Box available for this Route')
                        }
                    },100)

                    setTimeout(function(){
                        console.log(res)
                        if (!res.error){
                            $.each(res, function(Null , res) {
                                $bus_routes.append('<div class="card text-dark mb-2 container"><div class="card-body p-1"><div class="row"><div class="col-md-3 my-auto "><h1 class="card-title italic-bold">BOX-'+ res.id +'</h1></div><div class="col-md-7 card-text row"><div class="col-sm-6 my-auto "><h6 class="card-title py-3">Depart Time: '+ res.depart_time +'</h6></div><div class="col-sm-6 my-auto "><h6 class="card-title py-3">'+ res.station_arr_id.toString().replaceAll(',', ' > ') +'</h6></div><div class="col-sm-6 my-auto "><h6 class="card-title py-3">Arrival Time: '+ res.arrival_time +'</h6></div><div class="col-sm-6 my-auto "><h6 class="card-title py-3">Price : '+ res.price +'</h6></div></div><div class="col-md-2 card-text row"><div class="col-sm-12 my-auto "><a class="btn btn-primary book_this_button" id="book_button_'+res.id+'">Book</a></div></div></div></div></div>');
                            });  
                        }

                    },101)      
                    // setTimeout(function(){
                    //     $(document.querySelectorAll('#next_button')).removeClass('disabled')
                    // },200)
                })           
            }
            console.log(orderStep)
        },1701)

        setTimeout(function(){
            
            if(retrieveStationStatus == false){
                retrieveStationStatus = true
                $(document.querySelectorAll('#next_button')).addClass('disabled')
                retrieveStation().then(res =>{
                    if(!res.error){
                        setTimeout(function(){
                            $from_option.empty()
                            $to_option.empty()
                        },100)
                        setTimeout(function(){
                            $from_option.append('<option class="from_row_option" selected>Please select your Boarding Point</option>')
                            $to_option.append('<option class="to_row_option" selected>Please select your Drop Point</option>')
                        },150)
                        setTimeout(function(){
                            $.each(res, function(Null , res) {
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
                            
                        },200)


                    }else{
                        console.log('retrieveStation Error')
                        retrieveStationStatus = false
                    }
                })
            }
        },1701)
    
        $(document).on("click",'.from_row_option',(function(){
            if(!($('#from_option').val() == 'Select your Boarding Point')){
                if(!($('#to_option').val() == 'Select your Drop Point')){
                    $(document.querySelectorAll('#next_button')).removeClass('disabled')
                }else{
                    $(document.querySelectorAll('#next_button')).addClass('disabled')
                }
            }else{
                $(document.querySelectorAll('#next_button')).addClass('disabled')
            }
    
            $('.to_row_option').removeClass('disp-hide').delay(10).queue(function(){
                $('#to_' + $from_option.val()).addClass('disp-hide')
                $(this).dequeue();
             });
    
    
        }))
    
        $(document).on("click",'.to_row_option',(function(res){
            if(!($('#from_option').val() == 'Please select your Boarding Point')){
                if(!($('#to_option').val() == 'Please select your Drop Point')){
                    $(document.querySelectorAll('#next_button')).removeClass('disabled')
                }else{
                    $(document.querySelectorAll('#next_button')).addClass('disabled')
                }
            }else{
                $(document.querySelectorAll('#next_button')).addClass('disabled')
            }
            $('.from_row_option').removeClass('disp-hide').delay(10).queue(function(){
                $('#from_' + $to_option.val()).addClass('disp-hide')
                $(this).dequeue();
             });
        }))



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
        $(document.querySelectorAll('#next_button')).removeClass('disp-hide')
        console.log(orderStep)
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



})
