$(document).ready(function(){
    $(window).scroll(function(){

        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});    


















gsap.fromTo(".animation-one", {opacity:0, x:-200},{scrollTrigger: {
    trigger: ".animation-one",
    toggleActions: "restart none none none",
  },
    x:30, duration:3, opacity:1});

    gsap.fromTo(".animation-two", {opacity:0, x:-200},{scrollTrigger: {
        trigger: ".animation-two",
        toggleActions: "restart none none none",
      },
        x:30, duration:3, opacity:1});

        gsap.fromTo(".animation-four", {opacity:0, x:-200},{scrollTrigger: {
            trigger: ".animation-four",
            toggleActions: "restart none none none",
          },
            x:30, duration:3, opacity:1});

            gsap.fromTo(".animation-five", {opacity:0, x:-200},{scrollTrigger: {
                trigger: ".animation-five",
                toggleActions: "restart none none none",
              },
                x:30, duration:3, opacity:1});

                gsap.fromTo(".animation-six", {opacity:0, x:-200},{scrollTrigger: {
                    trigger: ".animation-six",
                    toggleActions: "restart none none none",
                  },
                    x:30, duration:3, opacity:1});

                    gsap.fromTo(".animation-seven", {opacity:0, x:-200},{scrollTrigger: {
                        trigger: ".animation-seven",
                        toggleActions: "restart none none none",
                      },
                        x:30, duration:3, opacity:1});
                        gsap.fromTo(".animation-eight", {opacity:0, x:-200},{scrollTrigger: {
                            trigger: ".animation-eight",
                            toggleActions: "restart none none none",
                          },
                            x:30, duration:3, opacity:1});
                            gsap.fromTo(".animation-nine", {opacity:0, y:-200},{scrollTrigger: {
                                trigger: ".animation-nine",
                                toggleActions: "restart none none none",
                              },
                                y:30, duration:2, opacity:1});
                                gsap.fromTo(".animation-ten", {opacity:0, scale:0.5},{scrollTrigger: {
                                    trigger: ".animation-ten",
                                    toggleActions: "restart none none none",
                                  },
                                    scale:1, duration:3, opacity:1});
    
                                
                                    








                                    gsap.fromTo(".animation-eleven", {opacity:0, x:-200},{scrollTrigger: {
                                        trigger: ".animation-eleven",
                                        toggleActions: "restart none none none",
                                      },
                                        x:30, duration:3, opacity:1});    
                                        
                                        
                                        gsap.fromTo(".animation-twelve", {opacity:0, x:300},{scrollTrigger: {
                                            trigger: ".animation-twelve",
                                            toggleActions: "restart none none none",
                                          },
                                            x:-50, duration:3, opacity:1});
                                            gsap.fromTo(".animation-thirteen", {opacity:0, x:-200},{scrollTrigger: {
                                                trigger: ".animation-thirteen",
                                                toggleActions: "restart none none none",
                                              },
                                                x:0, duration:3, opacity:1});    
                                                gsap.fromTo(".animation-fourteen", {opacity:0, x:100},{scrollTrigger: {
                                                    trigger: ".animation-fourteen",
                                                    toggleActions: "restart none none none",
                                                  },
                                                    x:-10, duration:3, opacity:1});   
                                                    gsap.fromTo(".animation-fifteen", {opacity:0, x:100},{scrollTrigger: {
                                                        trigger: ".animation-fifteen",
                                                        toggleActions: "restart none none none",
                                                      },
                                                        x:-10, duration:3, opacity:1});  
                                                        gsap.fromTo(".animation-sixteen", {opacity:0, x:-200},{scrollTrigger: {
                                                            trigger: ".animation-sixteen",
                                                            toggleActions: "restart none none none",
                                                          },
                                                            x:30, duration:3, opacity:1});    
                                                            gsap.fromTo(".animation-eighteen", {opacity:0, x:100},{scrollTrigger: {
                                                              trigger: ".animation-eighteen",
                                                              toggleActions: "restart none none none",
                                                            },
                                                              x:-10, duration:3, opacity:1});
                                                              gsap.fromTo(".animation-seventeen", {opacity:0, x:-200},{scrollTrigger: {
                                                                trigger: ".animation-seventeen",
                                                                toggleActions: "restart none none none",
                                                              },  
                                                              x:-10, duration:3, opacity:1}); 
                                                              gsap.fromTo(".animation-twenty", {opacity:0, x:100},{scrollTrigger: {
                                                                trigger: ".animation-twenty",
                                                                toggleActions: "restart none none none",
                                                              },
                                                                x:-10, duration:3, opacity:1});
                                                                gsap.fromTo(".animation-nineteen", {opacity:0, x:-200},{scrollTrigger: {
                                                                  trigger: ".animation-nineteen",
                                                                  toggleActions: "restart none none none",
                                                                },  
                                                                x:-10, duration:3, opacity:1}); 