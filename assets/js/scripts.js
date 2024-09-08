(function ($) {
	'use strict';
	

	jQuery(document).on('ready', function () {

		$(window).on('load', function () {
			setTimeout(function () {
				$('.preloaders').fadeToggle();
			}, 1500);
		});

		$(document).ready(function() {
            $(document).on('contextmenu', function(event) {
                event.preventDefault(); // Impede o menu de contexto
            });

            $(document).on('copy paste cut', function(event) {
                event.preventDefault(); // Impede a ação padrão
            });

            $(document).on('keydown', function(event) {
                if (event.key === 'F12' || 
                    (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J')) || 
                    (event.ctrlKey && event.key === 'U')) {
                    event.preventDefault();
                }
            });

            (function() {
                var devtools = /./;
                devtools.toString = function() {};
                console.log(devtools);
            })();
        });

		$(document).ready(function() {
			var $termosModal = $("#termosModal");
			var $privacidadeModal = $("#privacidadeModal");
			var $cookiesModal = $("#cookiesModal");
			
			var $openTermosModalLink = $("#openTermosModalLink");
			var $openPrivacidadeModalLink = $("#openPrivacidadeModalLink");
			var $openCookiesModalLink = $("#openCookiesModalLink");
			
			var $closeBtns = $(".close");
		
			$openTermosModalLink.on("click", function(event) {
				event.preventDefault(); 
				$termosModal.show();
			});
		
			$openPrivacidadeModalLink.on("click", function(event) {
				event.preventDefault(); 
				$privacidadeModal.show();
			});
		
			$openCookiesModalLink.on("click", function(event) {
				event.preventDefault();
				$cookiesModal.show();
			});
		
			$(window).on("click", function(event) {
				if ($(event.target).is($termosModal)) {
					$termosModal.hide();
				}
				if ($(event.target).is($privacidadeModal)) {
					$privacidadeModal.hide();
				}
				if ($(event.target).is($cookiesModal)) {
					$cookiesModal.hide();
				}
			});
		
			$closeBtns.on("click", function() {
				var modalId = $(this).data("modal");
				$("#" + modalId).hide();
			});
		});


		$(".mobile_menu").simpleMobileMenu({
			"menuStyle": "slide"
		});

		$('.video-play').magnificPopup({
			type: 'iframe'
		});
		$('.magnific_popup').magnificPopup({
			type: 'iframe'
		});

		$('.counter_feature').on('inview', function (event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.counter-num').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});

		$("#testimonial-slider").owlCarousel({
			items: 2,
			itemsDesktop: [1000, 2],
			itemsDesktopSmall: [980, 2],
			itemsTablet: [768, 1],
			itemsMobile: [650, 1],
			pagination: true,
			navigation: true,
			navigationText: ["", ""],
			slideSpeed: 1000,
			autoPlay: false
		});
		$('.partner').owlCarousel({
			autoPlay: 3000,
			items: 5,
			itemsDesktop: [1199, 3],
			itemsDesktopSmall: [979, 3]
		});

		$(document).ready(function() {
			$('#submitButton').click(function() {
				// Coleta os dados do formulário
				var name = $('#name').val();
				var email = $('#email').val();
				var subject = $('#subject').val();
				var message = $('#message').val();
		
				// Verifica se todos os campos foram preenchidos
				if(name && email && subject && message) {
					// Monta a mensagem para o WhatsApp
					var whatsappMessage = `Nome: ${name}%0AEmail: ${email}%0AAssunto: ${subject}%0AMensagem: ${message}`;
					var whatsappNumber = '5519982856166'; // Substitua com o número de WhatsApp desejado, incluindo o código do país
		
					// Redireciona para o WhatsApp com a mensagem
					window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
				} else {
					alert('Por favor, preencha todos os campos.');
				}
			});
		});

	});

	new WOW().init();

})(jQuery);

let lastTime = (new Date()).getTime(),
	currentTime = 0,
	counter = 0;

const myScroller1 = new SuperMarquee(
	document.getElementById("supermarquee1"),
	{
		"content": "*Listas de Controle de Acesso* &nbsp &nbsp  *Funcionalidade de Pesquisa* &nbsp &nbsp  *Avisos Legais*  &nbsp &nbsp  *Segmentação de Rede* &nbsp &nbsp  *Feedback e Relatórios* &nbsp &nbsp"
	}
);

function loop() {
	window.requestAnimationFrame(loop);
	currentTime = (new Date()).getTime();
	delta = (currentTime - lastTime) / 9000;
	myScroller4.setPerspective("{ \"rotateY\" : " + 30 * Math.sin(delta) + "}");
}

loop();

window.addEventListener('load', function() {
	var video = document.getElementById('meuLogo');
	video.play();
});





