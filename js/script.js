addEventListener("DOMContentLoaded", () => {
  // Change Mood Cood
  let mood = document.getElementById("Mood");
  mood.addEventListener("click", () => {
    mood.classList.toggle("fa-sun");
    mood.classList.toggle("fa-moon");
  });

  // Show Date Code
  let showDate = document.getElementById("ShowDate");
  let date = new Date();

  let options = {
    month : 'long',
    day : 'numeric',
    weekday : 'long',
  }

  showDate.textContent = `${date.toLocaleDateString('fa-IR' , options)}`;

  // Start Form Button Code ---- Show/Hide Form

  let loginBtn = document.getElementById('Login'); 
  let signBtn = document.getElementById('Sign'); 
  let loginForm = document.getElementById('ShowLoginForm');
  let signForm = document.getElementById('ShowSignForm');
  let closeLoginBtn = document.getElementById('CloseLoginForm');
  let closeSignBtn = document.getElementById('CloseSignForm');
  let inputs = document.querySelectorAll('input');

  loginBtn.addEventListener('click' , () => {
    loginForm.classList.toggle('hide');
    signForm.classList.add('hide');
    inputs.forEach(item => {
        item.value = '';
    })
  })
  closeLoginBtn.addEventListener('click' , () => {
    loginForm.classList.add('hide');
  })

  signBtn.addEventListener('click' , () => {
    signForm.classList.toggle('hide');
    loginForm.classList.add('hide');
    inputs.forEach(item => {
        item.value = '';
    })
  })
  closeSignBtn.addEventListener('click' , () => {
    signForm.classList.add('hide');
  })

  // Start Rgester Form Code
  let dataBase = [
    {id : 1 , userName : 'ali-ahmadian' , password : 123456789},
    {id : 2 , userName : 'Bolori' , password : 'ajab-12345'},
    {id : 3 , userName : 'mohammdQolam' , password : 987654321},
    {id : 4 , userName : 'Kazem' , password : 147852369},
  ]

  let userNameLogin = document.getElementById('UserNameLogin');
  let showLoginEror = document.getElementById('UserNameLoginEror');
  let userPassLogin = document.getElementById('PasswordLogin');
  let loginFormBtn = document.getElementById('LoginFormBtn');

  loginFormBtn.addEventListener('click' , () => {
    let result = dataBase.filter( item => {
      if(item.userName == userNameLogin.value && item.password == userPassLogin.value){
        return item
      }
    })
    if(result.length > 0){
      showLoginEror.textContent = '';
      alert('وارد شدید')
    }else{
      showLoginEror.textContent = 'نام کاربری یا رمز عبور اشتباه میباشد';
    } 
  })

  let userNamePattern = /^(?=[a-zA-Z0-9._-]{8,20}$)(?!.*[-_.]{2})[^-_.].*[^-_.]$/;
  let userPassPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  let userEmailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  let userNameSign = document.getElementById('UserNameSign');
  let userNameErorSign = document.getElementById('UserNameErorSign');
  let userPassSign = document.getElementById('UserEmailSign');
  let userPassErorSign = document.getElementById('UserPassErorSign');
  let userEmailSign = document.getElementById('PasswordSign');
  let userEmailEror = document.getElementById('UserEmailEror');
  let userAgeSign = document.getElementById('AgeSign');
  let userAgeEror = document.getElementById('UserAgeEror');
  let check = document.getElementById('Check');
  let signFormBtn = document.getElementById('SignUpFormBtn');
  
  // UserName 
  userNameSign.addEventListener('keyup' , () => {
    if(userNamePattern.test(userNameSign.value)){
        userNameErorSign.textContent = '';
    }else{
        userNameErorSign.textContent = 'نام کاربری معتبر نمیباشد ';
    }
  })
  // UserPassword 
  userPassSign.addEventListener('keyup' , () => {
    if(userPassPattern.test(userPassSign.value)){
        userPassErorSign.textContent = '';
    }else{
        userPassErorSign.textContent = 'رمز عبور معتبر نمیباشد ';
    }
  })
  // UserEmail
  userEmailSign.addEventListener('keyup' , () => {
    if(userPassPattern.test(userEmailPattern.value)){
        userEmailEror.textContent = '';
    }else{
        userEmailEror.textContent = 'ایمیل معتبر نمیباشد ';
    }
  })
  // Age
  userAgeSign.addEventListener('keyup' , () => {
    if(userAgeSign.value > 100 || userAgeSign.value < 10){
        userAgeEror.textContent = 'لطفا سن خود را درست وارد کنید';
    }else{
        userAgeEror.textContent = '';
    }
  })
  // CheckBox
  check.addEventListener('change' , () => {
    if(check.checked){
        signFormBtn.removeAttribute('disabled' , '')
    }else{
        signFormBtn.setAttribute('disabled' , '')
    }
  })
  
  // Start Menu Code

  let menu = document.getElementById('Menu');
  let menuBtn = document.getElementById('MenuBtn');
  let menuIcon = document.getElementById('MenuToggleIcon');
  
  menuBtn.addEventListener('click' , () => {
    menuIcon.classList.toggle('fa-close')
    menu.classList.toggle('show-menu')
  })

  // Start SLider 
  
  let items = document.querySelectorAll('.item');
  let sliderBtnRight = document.getElementById('SliderBtnRight');
  let sliderBtnLeft = document.getElementById('SliderBtnLeft');
  let sliderIndex = 0;

  const changeSlider = direction => {
    if(direction == 'right'){
      sliderIndex++;
        if(sliderIndex == items.length){
          sliderIndex = 0 ;
        }
    }else{
      if(sliderIndex == 0){
        sliderIndex = items.length-1;
      }else{
        sliderIndex--;
      }
    }
    items.forEach( item => {
      item.classList.remove('item-active')
    })
    items[sliderIndex].classList.toggle('item-active')
  }

  sliderBtnRight.addEventListener('click' , () => {
    changeSlider('right')
  })
  sliderBtnLeft.addEventListener('click' , () => {
    changeSlider('left')
  })

  // Start Main Offer Section

  let saleBtn = document.getElementById('Sale');
  let saleShow = document.getElementById('SaleShow');
  let vamBtn = document.getElementById('Vam');
  let vamShow = document.getElementById('VamShow');
  let bimeBtn = document.getElementById('Bime');
  let bimeShow = document.getElementById('BimeShow');

  saleBtn.addEventListener('click' , () => {
    saleShow.classList.toggle('offer-active')
    vamShow.classList.remove('offer-active')
    bimeShow.classList.remove('offer-active')

    saleBtn.classList.toggle('offer-click')
    vamBtn.classList.remove('offer-click')
    bimeBtn.classList.remove('offer-click')
  })
  vamBtn.addEventListener('click' , () => {
    vamShow.classList.toggle('offer-active')
    saleShow.classList.remove('offer-active')
    bimeShow.classList.remove('offer-active')

    vamBtn.classList.toggle('offer-click')
    saleBtn.classList.remove('offer-click')
    bimeBtn.classList.remove('offer-click')
  })
  bimeBtn.addEventListener('click' , () => {
    bimeShow.classList.toggle('offer-active')
    saleShow.classList.remove('offer-active')
    vamShow.classList.remove('offer-active')

    bimeBtn.classList.toggle('offer-click')
    saleBtn.classList.remove('offer-click')
    vamBtn.classList.remove('offer-click')
  })










  










  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
});
