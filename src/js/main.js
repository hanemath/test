import 'jquery';

const main = () => {
  //LOCAL DATA
  const img = [
    {name: 'Kalikesia-01', title: 'laravel', image: './img/kalikesia-01.JPG'},
    {name: 'Kalikesia-02', title: 'laravel', image: './img/kalikesia-02.JPG'},
    {name: 'Kalikesia-03', title: 'laravel', image: './img/kalikesia-03.JPG'},
    {name: 'Kp-01', title: 'vuejs', image: './img/kp-01.png'},
    {name: 'Kp-02', title: 'vuejs', image: './img/kp-02.png'},
    {name: 'Kp-03', title: 'vuejs', image: './img/kp-03.png'},
    {name: 'Php-01', title: 'ci', image: './img/php-01.JPG'},
    {name: 'Php-02', title: 'ci', image: './img/php-02.JPG'},
    {name: 'Php-03', title: 'ci', image: './img/php-03.JPG'},
    {name: 'Sentimen-01', title: 'vuejs', image: './img/sentimen-01.png'},
    {name: 'Sentimen-02', title: 'vuejs', image: './img/sentimen-02.png'},
    {name: 'Sentimen-03', title: 'vuejs', image: './img/sentimen-03.png'},
    {name: 'Sentimen-04', title: 'vuejs', image: './img/sentimen-04.png'},
    {name: 'Covid-01', title: 'js', image: './img/covid-01.png'},
    {name: 'Covid-02', title: 'js', image: './img/covid-02.png'},
  ];

  img.forEach( item => {
    const imgPortofolioElement = document.querySelector('.showcase');
    const imgElement = document.createElement('div.img-element');
    //console.log(imgPortofolioElement)
    imgElement.innerHTML = "";
    imgElement.innerHTML += `
      <img class="img-fluid capt" src="${item.image}">
    `;
    imgPortofolioElement.appendChild(imgElement)
  });

  //DATA FROM API
  const loadData = (resolve, reject) => {
    return fetch(`http://www.synapsisproject.com/test`, {
      method: 'GET'
    })
    .then( response => {
      return response.json();
    })
    .then( responseJson => {
      if (responseJson) {
        resolve(responseJson)
      } else {
        reject(`Data is not found`)
      }
    })
    .catch( error => {
      console.log(error)
    })
  }

  const handlerSuccess = (resolvedValue) => {
    const text = resolvedValue.description.en
    const apiDivElement = document.querySelector('.api-data');
    const apiElement = document.createElement('div.api-element');
    apiElement.innerHTML = "";
    apiElement.innerHTML += `
    <p>${text}</p>
    `;
    apiDivElement.appendChild(apiElement);
  };

  const apidata = new Promise(loadData);
  apidata.then(handlerSuccess)


  //RESPONSIVE VIEW
  function collapseFunction() {
    var x = document.getElementById("topNav");
    if (x.className === "top-nav") {
      x.className += " responsive";
    } else {
      x.className = "top-nav";
    }
  };

  //JQUERY
  (function($) {
    $(document).ready(function() {
      var s           = $('section .slider'),
          sWrapper    = s.find('.slider-wrapper'),
          sItem       = s.find('.slide'),
          btn         = s.find('.slider-link'),
          sWidth      = sItem.width(),
          sCount      = sItem.length,
          slide_date  = s.find('.slide-date'),
          slide_title = s.find('.slide-title'),
          slide_text  = s.find('.slide-text'),
          slide_more  = s.find('.slide-more'),
          slide_image = s.find('.slide-image img'),
          sTotalWidth = sCount * sWidth;
      
      sWrapper.css('width', sTotalWidth);
      sWrapper.css('width', sTotalWidth);
      
      var clickCount  = 0;
      
      btn.on('click', function(e) {
        e.preventDefault();

        if( $(this).hasClass('next') ) {
          
          ( clickCount < ( sCount - 1 ) ) ? clickCount++ : clickCount = 0;
        } else if ( $(this).hasClass('prev') ) {
          
          ( clickCount > 0 ) ? clickCount-- : ( clickCount = sCount - 1 );
        }
        TweenMax.to(sWrapper, 0.4, {x: '-' + ( sWidth * clickCount ) })

        var fromProperties = {autoAlpha:0, x:'-50', y:'-10'};
        var toProperties = {autoAlpha:0.8, x:'0', y:'0'};

        TweenLite.fromTo(slide_image, 1, {autoAlpha:0, y:'40'}, {autoAlpha:1, y:'0'});
        TweenLite.fromTo(slide_date, 0.4, fromProperties, toProperties);
        TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
        TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
        TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);

      });
            
    });
  })(jQuery);

  $('.overlay').addClass('overlay-blue');
};

export default main;