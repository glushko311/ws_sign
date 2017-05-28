
$(document).ready(function(){

	function scroll_icon_animate(){
		var activeElIndex = $(".arr_active").index();
			
			if(activeElIndex>2){
				activeElIndex = 0;
				$('.arrow').removeClass('arr_active');
				$(".arrow").eq(activeElIndex).addClass('arr_active');
			}else{
				activeElIndex++;
				$('.arrow').removeClass('arr_active');
				$(".arrow").eq(activeElIndex).addClass('arr_active');
			}
			
	}
	setInterval(scroll_icon_animate, 200)
});//ready функция анимации скролл иконок

$ (document).ready(function(){
	$ ('.nav-item-link').on('click', function (e){
		e.preventDefault();
		showSection ($(this).attr('href'), true);
		hideBurger()
	});
	
function hideBurger(){
	if($('header .pc_menu .burger_menu').css('display') == 'block'){
		$('header .pc_menu ul').fadeOut('fast');
	};
};//Функция скрывает бургер меню в мобильном режиме	


function showSection (section, inAnamat){
	var direction = section.replace(/#/, ''),
		reqSection=$('.section').filter('[data-section="'+direction+'"]'),
		reqSectionTop=reqSection.offset().top;
		
		if (inAnamat) {
			$('body, html').animate({scrollTop:reqSectionTop}, 1000);
		} else {
			$('body, html').scrollTop (reqSectionTop);
		};
};



function checkSection () {
	$ ('.section').each (function () {
		var topSection=$(this).offset().top-50,
			bottomSection = topSection+$(this).height(),
			wScroll=$(window).scrollTop();
		if (topSection<wScroll && bottomSection>wScroll) {
			var currentId=$(this).data ('section'),
				reqLinK = $ ('.nav-item-link').filter ('[href="#'+currentId+'"]');
				
				//window.location.hash = currentId;
		};
	});
};

$ (window).scroll(function(){
	checkSection ();
	
});
});//ready функция плавной прокрутки и перехода по пунктам меню


$(document).ready(function(){
	$('header .pc_menu .burger_menu').on('click', function(){
		if($('header .pc_menu ul').css('display') == 'none'){
			$('header .pc_menu ul').fadeIn('fast');
		}else{
			$('header .pc_menu ul').fadeOut('fast');
		}
	});//клик по бургеру
	
});//ready функция подсветки пунктов бургер меню 

$(document).ready(function(){
	$('.slider_control div:nth-child(1)').on('click', function(){
		$(this).siblings().removeClass('active_btn');
		$(this).addClass('active_btn');
		$('.review_slider .slides .slide').removeClass('active_slide');
		$('.review_slider .slides .slide1').addClass('active_slide');
		$('.review_slider .slides .slide2').addClass('active_slide');
	});
	$('.slider_control div:nth-child(2)').on('click', function(){
		$(this).siblings().removeClass('active_btn');
		$(this).addClass('active_btn');
		$('.review_slider .slides .slide').removeClass('active_slide');
		$('.review_slider .slides .slide3').addClass('active_slide');
		$('.review_slider .slides .slide4').addClass('active_slide');
	});
	$('.slider_control div:nth-child(3)').on('click', function(){
		$(this).siblings().removeClass('active_btn');
		$(this).addClass('active_btn');
		$('.review_slider .slides .slide').removeClass('active_slide');
		$('.review_slider .slides .slide5').addClass('active_slide');
		$('.review_slider .slides .slide6').addClass('active_slide');
	});
							 
});//ready функция переклацывания слайдов отзывов

$(document).ready(function(){
	$('.order_but').on('click', function(){
		openModalWindow();
	});//клик по кнопке "заказать сайт" в хедере
	
	$('.footer_order_bt').on('click', function(){
		openModalWindow();
	});//клик по кнопке "напишите нам" в футере
	
	$('.order_call').on('click', function(){
		openModalWindow();
	});//клик по кнопке "заказать звонок" в футере
	
	$('.modal_bt').on('click', function(){
		closeModalWindow();
	});//клик по крестику в модальном окне
	
	function openModalWindow(){
		if($('.modal_window').css('display')=='none'){
			$('.modal_window').css('display','block');
			$('.modal_wrap').css('display','block');
			$('.modal_window form').addClass('active_form');//этот класс ищет обработчик формы
			$('.contact_us .form_block form').removeClass('active_form');//этот класс ищет обработчик формы
		};
	};//функция открытия модального окна и переключения активной формы в модальное окно
	
	function closeModalWindow(){
		if($('.modal_window').css('display')=='block'){
			$('.modal_window').css('display','none');
			$('.modal_wrap').css('display','none');
			//$('.modal_window form').removeClass('active_form');//этот класс ищет обработчик формы
			//$('.contact_us .form_block form').addClass('active_form');//этот класс ищет обработчик формы
		};
	};//клик по кнопке закрыть форму(крестик)
});//ready функция включение модального окна modal_form

$(document).ready(function(){
	$('.work_wrap .black_white').on('mouseover', function(){
		$(this).animate({opacity:0}, 200);
	});//событие наведение мыши на картинки
	/*$('.pc_menu').on('mouseenter',function(){
		$('.black_white').on('click',function(event){
			event.preventDefault();
		});
	});*///при наведении мыши на  меню все картинки гаснут
	$('.work_wrap .black_white').on('mouseout', function(){
		$(this).animate({opacity:1}, 200);
	});//событие уходе мыши с картинки
});//ready функция  изменение рисунков на цветные при наведении (Наши работы)

$(document).ready(function(){
	$('.main_form').submit(function(event){ 
 	event.preventDefault(); 

    var name = $(this).find('input[name="clientname"]').val();
    var mail = $(this).find('input[name="emailPhone"]').val();
    var mes = $(this).find('textarea[name="message"]').val();
    $(this).find('.zajavka').load("./mail1.php",{'name':name, 'mail':mail, 'mes':mes});
    $(this).find('input[name="clientname"]').val('');
    $(this).find('input[name="emailPhone"]').val('');
    $(this).find('textarea[name="message"]').val('');
	});
});//ready функция работа с main_form формой

$(document).ready(function(){
	$('.modal_form').submit(function(event){ 
 	event.preventDefault(); 

    var name = $(this).find('input[name="clientname"]').val();
    var mail = $(this).find('input[name="emailPhone"]').val();
    var mes = $(this).find('textarea[name="message"]').val();
    $(this).find('.zajavka').load("./mail2.php",{'name':name, 'mail':mail, 'mes':mes});
    $(this).find('input[name="clientname"]').val('');
    $(this).find('input[name="emailPhone"]').val('');
    $(this).find('textarea[name="message"]').val('');
	});
});//ready функция работа с modal_form формой

$(document).ready(function(){
	$('.modal_form_price').submit(function(event){ 
 	event.preventDefault(); 

    var name = $(this).find('input[name="clientname"]').val();
    var mail = $(this).find('input[name="emailPhone"]').val();
	var price = $(this).find('input[name="website"]').val();
    var mes = $(this).find('textarea[name="message"]').val();
    $(this).find('.zajavka').load("./mail3.php",{'name':name, 'mail':mail, 'price':price, 'mes':mes});
    $(this).find('input[name="clientname"]').val('');
    $(this).find('input[name="emailPhone"]').val('');
	$(this).find('input[name="website"]').val('');
    $(this).find('textarea[name="message"]').val('');
	});
});//ready функция работа с modal_form_price формой

$(document).ready(function(){
	var price_web = '';
	$('.price_item .econom').on('click', function(){
		
		price_web = $(this).parent().find('h3').text()+' $'+$(this).parent().find('.price_item_img p').text();
		
		openModalWindow();	
	});//клик по кнопке "Choose" в блоке Econom
	$('.price_item .basic').on('click', function(){
		
		price_web = $(this).parent().find('h3').text()+' $'+$(this).parent().find('.price_item_img p').text();
		
		openModalWindow();
	});//клик по кнопке "Choose" в блоке Basic
	$('.price_item .premium').on('click', function(){

		price_web = $(this).parent().find('h3').text()+' $'+$(this).parent().find('.price_item_img p').text();
		
		openModalWindow();		
	});//клик по кнопке "Choose" в блоке Basic


	
	$('.modal_bt').on('click', function(){
		closeModalWindow();
	});//клик по крестику в модальном окне
	
	function openModalWindow(){
		if($('.modal_window_price').css('display')=='none'){
			$('.modal_window_price').css('display','block');
			$('.modal_form_price input[name="website"]').val('');
			$('.modal_form_price input[name="website"]').val(price_web);
			$('.modal_wrap').css('display','block');
			$('.modal_window_price form').addClass('active_form');//этот класс ищет обработчик формы
			//$('.contact_us .form_block form').removeClass('active_form');//этот класс ищет обработчик формы
		};
	};//функция открытия модального окна и переключения активной формы в модальное окно
	
	function closeModalWindow(){
		if($('.modal_window_price').css('display')=='block'){
			$('.modal_window_price').css('display','none');
			$('.modal_wrap').css('display','none');
			//$('.modal_window form').removeClass('active_form');//этот класс ищет обработчик формы
			//$('.contact_us .form_block form').addClass('active_form');//этот класс ищет обработчик формы
		};
	};//клик по кнопке закрыть форму(крестик)
});//ready функция включение модального окна modal_form_price