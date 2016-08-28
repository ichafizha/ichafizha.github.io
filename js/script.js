var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var github = document.getElementById('github');
  var linkedin = document.getElementById('linkedin');
  var facebook = document.getElementById('facebook');
  var twitter = document.getElementById('twitter');
  var googleplus = document.getElementById('googleplus');
  var pinterest = document.getElementById('pinterest');
  var instagram = document.getElementById('instagram');
  //var blog = document.getElementById('blog');

  // blog.addEventListener('click', function (e) {
  //   location.href = 'https://ichafizha.github.io/blog';
  // })

  github.addEventListener('click', function(e) {
    window.open('https://github.com/ichafizha', '_blank')
  });

  linkedin.addEventListener('click', function(e) {
    window.open('https://id.linkedin.com/in/hafizha-husnaisa-3581b4b4', '_blank')
  });

  facebook.addEventListener('click', function(e) {
    window.open('https://www.facebook.com/Icha.Fizha', '_blank')
  });

  twitter.addEventListener('click', function(e) {
    window.open('https://twitter.com/ichafizha', '_blank')
  });

  googleplus.addEventListener('click', function(e) {
    window.open('https://plus.google.com/+HafizhaHusnaisa', '_blank')
  });

  pinterest.addEventListener('click', function(e) {
    window.open('https://id.pinterest.com/hafizhahusnaisa/', '_blank')
  });

  instagram.addEventListener('click', function(e) {
    window.open('https://www.instagram.com/ichafizha/', '_blank')
  });

  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};
