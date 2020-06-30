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
    {name: 'Php-01', title: 'php', image: './img/php-01.JPG'},
    {name: 'Php-02', title: 'php', image: './img/php-02.JPG'},
    {name: 'Php-03', title: 'php', image: './img/php-03.JPG'},
    {name: 'Sentimen-01', title: 'vuejs', image: './img/sentimen-01.png'},
    {name: 'Sentimen-02', title: 'vuejs', image: './img/sentimen-02.png'},
    {name: 'Sentimen-03', title: 'vuejs', image: './img/sentimen-03.png'},
    {name: 'Sentimen-04', title: 'vuejs', image: './img/sentimen-04.png'},
    {name: 'Covid-01', title: 'js', image: './img/covid-01.png'},
    {name: 'Covid-02', title: 'js', image: './img/covid-02.png'},
  ];

  //FILTER PORTFFOLIO
  const loadJs = () => {
    const jsFiltered = img.filter( item => {
      return item.title === 'js'
    });
    const showcaseElement = document.querySelector('.showcase');
    showcaseElement.innerHTML = "";
    jsFiltered.forEach(item => {
      const imgElement = document.createElement('div.img-element');
      imgElement.innerHTML = "";
      imgElement.innerHTML += `
        <img class="img-fluid capt" src="${item.image}">
      `;
      showcaseElement.appendChild(imgElement)
    })
    const buttonItem = document.querySelector('#js');
    buttonItem.className += ' actived';
  }

  const loadPhp = () => {
    const phpFiltered = img.filter( item => {
      return item.title === 'php'
    });
    const showcaseElement = document.querySelector('.showcase');
    showcaseElement.innerHTML = "";
    phpFiltered.forEach(item => {
      const imgElement = document.createElement('div.img-element');
      imgElement.innerHTML = "";
      imgElement.innerHTML += `
        <img class="img-fluid capt" src="${item.image}">
      `;
      showcaseElement.appendChild(imgElement)
    })
    const buttonItem = document.querySelector('#php');
    buttonItem.className += ' actived';
  }

  const loadVuejs = () => {
    const vueFiltered = img.filter( item => {
      return item.title === 'vuejs'
    });
    const showcaseElement = document.querySelector('.showcase');
    showcaseElement.innerHTML = "";
    vueFiltered.forEach(item => {
      const imgElement = document.createElement('div.img-element');
      imgElement.innerHTML = "";
      imgElement.innerHTML += `
        <img class="img-fluid capt" src="${item.image}">
      `;
      showcaseElement.appendChild(imgElement)
    })
    const buttonItem = document.querySelector('#vuejs');
    buttonItem.className += ' actived';
  }

  const loadLaravel = () => {
    const laravelFiltered = img.filter( item => {
      return item.title === 'laravel'
    });
    const showcaseElement = document.querySelector('.showcase');
    showcaseElement.innerHTML = "";
    laravelFiltered.forEach(item => {
      const imgElement = document.createElement('div.img-element');
      imgElement.innerHTML = "";
      imgElement.innerHTML += `
        <img class="img-fluid capt" src="${item.image}">
      `;
      showcaseElement.appendChild(imgElement)
    })
    const buttonItem = document.querySelector('#laravel');
    buttonItem.className += ' actived';
  }


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

  //JQUERY SLIDER
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
      
      sWrapper.css('width', sWidth);
      sWrapper.css('width', sWidth);
      
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

  //FOR EVERY FILTER BUTTON
  const filterJavascript = document.querySelector('#js');
  filterJavascript.addEventListener('click', loadJs);

  const filterPhp = document.querySelector('#php');
  filterPhp.addEventListener('click', loadPhp); 

  const filterVuejs = document.querySelector('#vuejs');
  filterVuejs.addEventListener('click', loadVuejs);

  const filterLaravel = document.querySelector('#laravel');
  filterLaravel.addEventListener('click', loadLaravel);

  const buttonNav = document.querySelector('#icon-nav');
  buttonNav.addEventListener('click', collapseFunction);
};

export default main;