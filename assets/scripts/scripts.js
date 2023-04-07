var requestOptions = {
    method: 'GET',
};
  
fetch("https://wtfismyip.com/json", requestOptions)
.then(response => response.json())
.then(result => {
    console.log(result); // Check the value of result
    const cityName = result.YourFuckingCity;
    const cityElements = document.getElementsByClassName("address");
    for (let i = 0; i < cityElements.length; i++) {
    cityElements[i].innerHTML = cityName;
    }
})
.catch(error => console.log('error', error));

function loadMore() {
    $('#more').show()
    $('.fb-comments-loadmore').hide().remove()
}

$('like').on('click', function() {
    if ($(this).hasClass('liked')) {
        $(this).parents('.fb-comments-wrapper, .fb-comments-reply-wrapper').find('likes').text(parseInt($(this).parents('.fb-comments-wrapper, .fb-comments-reply-wrapper').find('likes').text()) - 1)
        $(this).removeClass('liked')
        $(this).text('Curtir')
    } else {
        $(this).parents('.fb-comments-wrapper, .fb-comments-reply-wrapper').find('likes').text(parseInt($(this).parents('.fb-comments-wrapper, .fb-comments-reply-wrapper').find('likes').text()) + 1)
        $(this).addClass('liked')
        $(this).text('Descurtir')
    }
})

function setReturningVisitorCookie() {
var d = new Date();
d.setTime(d.getTime() + 1510000);
var expires = "expires=" + d.toUTCString();
document.cookie = "returningVisitor=yes;" + expires + ";path=/;max-age=31536000";
}
setTimeout(setReturningVisitorCookie, 1510000);

const cookieValue = document.cookie.match('(^|;)\\s*' + 'returningVisitor' + '\\s*=\\s*([^;]+)');
if (cookieValue) {
    setTimeout(function() {
        var elementos = document.getElementsByClassName("add-to-cart");
        for (var i = 0; i < elementos.length; i++) {
            elementos[i].style.display = "flex";
        }
    }, 0);
}

setTimeout(function() {
    var elementos = document.getElementsByClassName("add-to-cart");
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.display = "flex";
    }
}, 1510000);

let num = 450;
let rateUp = 1.01;
let rateDown = 1.005;

function updateNumber() {
let random = Math.random();
if (random < 0.5) {
  num *= rateUp;
} else {
  num /= rateDown;
}
document.getElementById("num").textContent = num.toFixed(0);
}

setInterval(updateNumber, 2000);