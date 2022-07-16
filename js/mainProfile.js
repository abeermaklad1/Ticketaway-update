


$(document).ready(function(){

    /** connect div 
    
    $(function(){
        $(".aside-menu a").click(function(e){

            e.preventDefault();

            if(!$(this).find('i').hasClass('actv'))
            {
                $(".aside-menu a i.actv").removeClass("actv");
                $(this).find('i').addClass("actv");        
            }

            if(!$(this).find('span').hasClass('actv'))
            {
                $(".aside-menu a span.actv").removeClass("actv");
                $(this).find('span').addClass("actv");        
            }

            $(this).parents('.profile').find('.hh').hide();

            $('.' + $(this).data('connect') ).show();
      });
    }); */


    $(function(){

        $(".aside-menu").click(function(){


            if(!$(this).hasClass('actvv'))
            {
                $(".aside-menu ").removeClass("actvv");
                $(this).addClass("actvv");        
            }

            if(!$(this).find('i').hasClass('actv'))
            {
                $(".aside-menu a i.actv").removeClass("actv");
                $(this).find('i').addClass("actv");        
            }

            if(!$(this).find('span').hasClass('actv'))
            {
                $(".aside-menu a span.actv").removeClass("actv");
                $(this).find('span').addClass("actv");        
            }


            $(this).parents('.profile').find('.hh').hide();

            $('.' + $(this).find('a').data('connect') ).show();
      });
    });

          

    /** (personal details) disibled edit during other edit is opened  */
    $('.personal-detailss .edit-a').each(function(){

        $(this).on('click' , function(e){

            e.preventDefault();

            if(!$(this).hasClass('disbld'))
            {
                $(this).removeClass("disbld");
                $('.personal-detailss .edit-a').addClass('disbld');    
                $('.personal-detailss .span-click').addClass('disbldspan');          
            }
        });
    });

    $('.personal-detailss .cancle-btn').click(function(){
        $('.personal-detailss .edit-a').removeClass('disbld');
    });


    $('.personal-detailss .span-click').each(function(){

        $(this).on('click' , function(){

            $('.personal-detailss .edit-a').addClass('disbld'); 

            if(!$(this).hasClass('disbldspan'))
            {
                $(this).removeClass("disbldspan");
                $('.personal-detailss .span-click').addClass('disbldspan');          
            }
        });
    });

    $('.personal-detailss .cancle-btn').click(function(){
        $('.personal-detailss .span-click').removeClass('disbldspan');
    });


    /** (securityy) disibled edit during other edit is opened  */
    $('.securityy .edit-a').each(function(){

        $(this).on('click' , function(e){

            e.preventDefault();

            if(!$(this).hasClass('disbld'))
            {
                $(this).removeClass("disbld");
                $('.securityy .edit-a').addClass('disbld');
                $('.securityy .span-click').addClass('disbldspan');                 
            }
        });
    });

    $('.securityy .cancle-btn').click(function(){
        $('.securityy .edit-a').removeClass('disbld');
    });


    $('.securityy .span-click').each(function(){

        $(this).on('click' , function(){

            $('.securityy .edit-a').addClass('disbld'); 

            if(!$(this).hasClass('disbldspan'))
            {
                $(this).removeClass("disbldspan");
                $('.securityy .span-click').addClass('disbldspan');          
            }
        });
    });

    $('.securityy .cancle-btn').click(function(){
        $('.securityy .span-click').removeClass('disbldspan');
    });



   /** name */

    $('.name-info .edit-a , .name-info .span-click ').on('click',function(e){
        e.preventDefault();
        $('.name-info .edit-a').fadeOut();
        $('.name-info .span-click').fadeOut(300 ,function(){
            $('.name-info .part-hide , .name-info .cancle-btn , .name-info .save-btn ').fadeIn();
        });    
    });

    $('.name-info .cancle-btn').on('click' ,function(){
        $('.name-info .part-hide , .name-info .cancle-btn , .name-info .save-btn').fadeOut(300,function(){
            $('.name-info .edit-a').fadeIn();
            $('.name-info .span-click').fadeIn();

        });
    });

    /**phone */

    $('.phonenum-info .edit-a , .phonenum-info .span-click ').on('click',function(e){
        e.preventDefault();
        $('.phonenum-info .edit-a').fadeOut();
        $('.phonenum-info .span-click').fadeOut(300 , function(){
            $('.phonenum-info .part-hide , .phonenum-info .cancle-btn , .phonenum-info .save-btn ').fadeIn();
        });
    });

    $('.phonenum-info .cancle-btn').on('click' ,function(){
        $('.phonenum-info .part-hide , .phonenum-info .cancle-btn , .phonenum-info .save-btn').fadeOut(300,function(){
            $('.phonenum-info .edit-a').fadeIn();
            $('.phonenum-info .span-click').fadeIn();
        });
    });

    /**email */

    $('.email-info .edit-a , .email-info .span-click ').on('click',function(e){
        e.preventDefault();
        $('.email-info .edit-a').fadeOut();
        $('.email-info .span-click').fadeOut(300,function(){
            $('.email-info .part-hide , .email-info .cancle-btn , .email-info .save-btn ').fadeIn();
        });
    });

    $('.email-info .cancle-btn').on('click' ,function(){
        $('.email-info .part-hide , .email-info .cancle-btn , .email-info .save-btn').fadeOut(300,function(){
            $('.email-info .edit-a').fadeIn();
            $('.email-info .span-click').fadeIn();

        });
    });


    /**password */

    $('.password-info .edit-a , .password-info .span-click ').on('click',function(e){
        e.preventDefault();
        $('.password-info .edit-a').fadeOut();
        $('.password-info .span-click').fadeOut(300,function(){
            $('.password-info .part-hide , .password-info .cancle-btn , .password-info .save-btn ').fadeIn();
        });
    });

    $('.password-info .cancle-btn').on('click' ,function(){
        $('.validation').fadeOut();
        $('.password-info .part-hide , .password-info .cancle-btn , .password-info .save-btn').fadeOut(300,function(){
            $('.password-info .edit-a').fadeIn();
            $('.password-info .span-click').fadeIn();
        });
    });

    /**delete account */

    $('.deletacc-info .edit-a , .deletacc-info .span-click ').on('click',function(e){
        e.preventDefault();
        $('.deletacc-info .edit-a').fadeOut();
        $('.deletacc-info .span-click').fadeOut(300,function(){
            $('.deletacc-info .part-hide , .deletacc-info .cancle-btn , .deletacc-info .save-btn ').fadeIn();
        });
    });

    $('.deletacc-info .cancle-btn').on('click' ,function(){
        $('.deletacc-info .part-hide , .deletacc-info .cancle-btn , .deletacc-info .save-btn').fadeOut(300,function(){
            $('.deletacc-info .edit-a').fadeIn();
            $('.deletacc-info .span-click').fadeIn();
        });
    });


    /** delet account other */

    $('.deletacc-info .other-del').on('click',function(){
        $('.deletacc-info .other-del-mssg').fadeIn();
    });

    $('.deletacc-info .use-diff-email').on('click',function(){
        $('.deletacc-info .other-del-mssg').fadeOut();
    });


    /** pay with new card */

    $('.Payment-card .edit-a , .Payment-card .span-click ').on('click',function(e){
        e.preventDefault();
        $('.Payment-card .edit-a').fadeOut();
        $('.Payment-card .span-click').fadeOut(300,function(){
            $('.Payment-card .part-hide , .Payment-card .cancle-btn , .Payment-card .save-btn ').fadeIn();
        });
    });

    $('.Payment-card .cancle-btn').on('click' ,function(){
        $('.Payment-card .part-hide , .Payment-card .cancle-btn , .Payment-card .save-btn').fadeOut(300,function(){
            $('.Payment-card .edit-a').fadeIn();
            $('.Payment-card .span-click').fadeIn();
        });
    });


    /** check validation of password */

    var $password = $(".psw1");
    var $confirmPassword = $(".psw1-repeat");
    //Uppercase and number check variables
    // var upperCase= new RegExp('[A-Z]');
    // var numbers = new RegExp('[0-9]');

    $('.validation').hide();

    //Password rules
    function isPasswordValid() {	
        //Check length and then check that password has an uppercase
        return $password.val().length > 6  
          // && $password.val().match(upperCase) &&
          //  $password.val().match(numbers)
          ;
    }

    function arePasswordsMatching() {
        return $password.val() === $confirmPassword.val();
    }

    //Can submit
    function canSubmit() {
        return isPasswordValid() && arePasswordsMatching();
    }

    //Check password is over 8 characters
    function passwordEvent() {
    
        if(isPasswordValid()) {
            $password.next().hide();
        } else {
            $password.next().show();
        } 
    }

    //Check Passwords match
    function confirmPasswordEvent() {
    
        if(arePasswordsMatching()) {
            $confirmPassword.next().hide();
        } else {
            $confirmPassword.next().show();
        } 
    }
    //Enable or disablethe submit button 
    function enableSubmitEvent() {
        $('.password-info .save-btn').prop("disabled", !canSubmit());
    }

    //Run passwords length check
    $password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

    //Run passwords match check
    $confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

    //Run submit button function code
    enableSubmitEvent();









































});    