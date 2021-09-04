$('.main_slider').slick({
  autoplay:true,
    nextArrow: '<div class="slider__arrow slide__next"><i class="fa fa-angle-right"></i></div>',
    prevArrow: '<div class="slider__arrow slide__prev"><i class="fa fa-angle-left"></i></div>'
});

var menu_service = document.querySelectorAll('.service_item');
var privious = document.querySelector('.delivery_service')
var privious_color = document.querySelector('#delivery_service')
menu_service.forEach(service =>service.addEventListener('click', (e)=> change_serveces(e)) )

  function change_serveces(e){
    var target_service = document.querySelector("."+e.target.attributes.id.nodeValue)
    if (privious != target_service) {
      e.target.style.background = '#ffffff'
      e.target.style.color = '#32425c'
      privious_color.style.background = '#32425c'
      privious_color.style.color = '#ffffff'
      privious_color = e.target
        privious.classList.remove('active_service')
        target_service.classList.add('active_service')
        privious = target_service
  }
  }


  var write_btn = document.querySelector(".contacts_bnt")
  var module_window = document.querySelector(".feedback")
  var close_module = document.querySelector(".module_icon")
  var sent_btn = document.querySelector('.module_submit_btn')

  write_btn.addEventListener('click', (e)=>{
    e.preventDefault()
    module_window.classList.add('module_window_feedback_active')
  })
  close_module.addEventListener('click',()=>module_window.classList.remove('module_window_feedback_active'))
  sent_btn .addEventListener('click',()=>module_window.classList.remove('module_window_feedback_active'))