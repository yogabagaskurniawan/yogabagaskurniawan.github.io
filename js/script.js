
// scroling pada teks a
// document dari w3shool

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
    
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        
        // Store hash
        var hash = this.hash;
        
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top-50
        }, 800);
        // function(){

        //     // Add hash (#) to URL when done scrolling (default click behavior)
        //     window.location.hash = hash;
        // }
      } // End if
    });
});




// membuat parallax

$(window).scroll(function() {
    
    wScroll = $(this).scrollTop();

    // untuk mengurus jumbotron

    $('.jumbotron img').css({
        'transform' : 'translate( 0px, '+wScroll/4.5+'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate( 0px, '+wScroll/1.5+'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate( 0px, '+wScroll+'%)'
    });


    // untuk mengatur portfolio

    if (wScroll > $('.portfolio').offset().top - 550 ){
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(() => {
                $('.portfolio .thumbnail').eq(i).addClass('muncul')
            }, 300*(i+1));
        })
    }
})        



// mengurus yg about

$(window).on('load',function() {
    setTimeout(() => {
        $('.pKanan').addClass('pMuncul')
        $('.pKiri').addClass('pMuncul')
    }, 2000);

    // mengurus allert
    setTimeout(() => {
        $('.alert').addClass('alertMuncul')
    }, 5000);
})

// mengurus portfolio overlow
$('.gambar1').on('click',function() {
    $('.overlay1').addClass('overlayMuncul1')
})
$('.gambar2').on('click',function() {
    $('.overlay2').addClass('overlayMuncul2')
})
$('.gambar3').on('click',function() {
    $('.overlay3').addClass('overlayMuncul3')
})
$('.gambar4').on('click',function() {
    $('.overlay4').addClass('overlayMuncul4')
})
$('.gambar5').on('click',function() {
    $('.overlay5').addClass('overlayMuncul5')
})
$('.gambar6').on('click',function() {
    $('.overlay6').addClass('overlayMuncul6')
})

// mengurus tombol close
$('.tombol-close').on('click',function() {
    $('.overlay1').removeClass('overlayMuncul1')
})
$('.tombol-close').on('click',function() {
    $('.overlay2').removeClass('overlayMuncul2')
})
$('.tombol-close').on('click',function() {
    $('.overlay3').removeClass('overlayMuncul3')
})
$('.tombol-close').on('click',function() {
    $('.overlay4').removeClass('overlayMuncul4')
})
$('.tombol-close').on('click',function() {
    $('.overlay5').removeClass('overlayMuncul5')
})
$('.tombol-close').on('click',function() {
    $('.overlay6').removeClass('overlayMuncul6')
})



