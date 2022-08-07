function generate_html(image_urls,display_location) 
{

  let all_urls=image_urls;
  let urls_array = all_urls.split(",");

  document.getElementById(display_location).innerHTML="";


  for (var i = 0; i<= urls_array.length-1; i++) 
  {

    let str=urls_array[i];

    let part = str.substring(
        str.lastIndexOf("src=\"") + 5, 
        str.lastIndexOf("\" alt")
    );

    let the_link=part;


    
    


    let generated_div ="";
    generated_div ='<div align="left">&lt;!-- Single Slide --&gt;<br>'+
    '&lt;div class="single-welcome-slide bg-img bg-overlay single-portfolio-content" style="background-image: url('+the_link+');"&gt;'+
        '&lt;div class="container h-100"&gt;'+
            '&lt;div class="row h-100 align-items-center"&gt;'+
                '&lt;!-- Welcome Text --&gt;'+
                '&lt;div class="col-12 col-lg-12 col-xl-12"&gt;'+
                    '&lt;div class="hover-content"&gt;'+
                    '&lt;center&gt;'+
                    '&lt;a href="'+the_link+'" class="portfolio-img"&gt;'+
                    '&lt;i class="fa fa-eye"&gt;&lt;/i&gt;'+
                    '&lt;/a&gt;'+
                    '&lt;/center&gt;'+
                    '&lt;/div&gt;'+
                '&lt;/div&gt;'+
            '&lt;/div&gt;'+
        '&lt;/div&gt;'+
    '&lt;/div&gt;';


    // let generated_div ="";
    // generated_div ='<div align="left">&lt;!-- Single Gallery Item --&gt;<br>'+
    // '&lt;div class="col-12 col-sm-6 col-lg-3 single_gallery_item nature mb-30 wow fadeInUp" data-wow-delay="100ms"&gt;'+
    //   '&lt;div class="single-portfolio-content"&gt;'+
    //     '&lt;img src="'+the_link+'" alt="rico photography '+the_link+'"&gt;'+
    //     '&lt;div class="hover-content"&gt;'+
    //       '&lt;a href="'+the_link+'" class="portfolio-img"&gt;+&lt;/a&gt;'+
    //     '&lt;/div&gt;'+
    //   '&lt;/div&gt;'+
    // '&lt;/div&gt;</div><br>';

    document.getElementById(display_location).innerHTML=document.getElementById(display_location).innerHTML+generated_div;
    
  }

  
}