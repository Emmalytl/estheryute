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


    generated_div ='<div align="left"><br>'+
    '&lt;!--Single Slide--&gt;<br>'+
    '&lt;div class="carousel-item single-portfolio-content" &gt;<br>'+
    '&lt;img class="d-block w-100" src="'+the_link+'" loading="lazy" style="height: 100%;width: 100%;object-fit: contain;" &gt;<br>'+
    '&lt;!--zoom img--&gt;<br>'+
    '&lt;div class="hover-content" &gt;<br>'+
    '&lt;center&gt;<br>'+
    '&lt;a href="'+the_link+'" class="portfolio-img"&gt;&lt;i class="fa fa-eye"&gt;&lt;/i&gt;&lt;/a&gt;<br>'+
    '&lt;/center&gt;<br>'+
    '&lt;/div&gt;<br>'+
    '&lt;/div&gt;<br>'+
    '</div><br>';



    /*generated_div ='<div align="left"><br>'+
    '&lt;!-- Single Slide --&gt;<br>'+
    '&lt;div class="single-portfolio-content"&gt;<br>'+
    '&lt;div class="slider-item"&gt;<br>'+
            '&lt;img src="'+the_link+'" class="" loading="lazy" style="object-fit: contain;height:100vh;width: 100%;overflow: hidden;"&gt;<br>'+
            '&lt;!-- zoom img --&gt;'+
            '<br>&lt;div class="hover-content"&gt;<br>'+
                '&lt;center&gt;<br>'+
                    '&lt;a href="'+the_link+'" class="portfolio-img"&gt;&lt;i class="fa fa-eye"&gt;&lt;/i&gt;&lt;/a&gt;<br>'+
                '&lt;/center&gt;<br>'+
            '&lt;/div&gt;<br>'+
          '&lt;/div&gt;<br>'+
        '&lt;/div&gt;<br><br>';

*/
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



function generate_new_html(image_urls,display_location) 
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

    generated_div ='<div align="left"><br>'+
    '&lt;!--Single Gallery Item--&gt;<br>'+
    '&lt;div class="col-md-4 col-sm-12 col-lg-3 single_gallery_item nature mb-30 wow fadeInUp" data-wow-delay="100ms" &gt;<br>'+
    '&lt;div class="single-portfolio-content"&gt;<br>'+
    '&lt;img src="'+the_link+'" loading="lazy" style="height:400px;width: 100%;object-fit: contain;" &gt;<br>'+
    '&lt;!--zoom img--&gt;<br>'+
    '&lt;div class="hover-content" &gt;<br>'+
    '&lt;center&gt;<br>'+
    '&lt;a href="'+the_link+'" class="portfolio-img"&gt;&lt;i class="fa fa-eye"&gt;&lt;/i&gt;&lt;/a&gt;<br>'+
    '&lt;/center&gt;<br>'+
    '&lt;/div&gt;<br>'+
    '&lt;/div&gt;<br>'+
    '&lt;/div&gt;<br>'+
    '</div><br>';



    /*generated_div ='<div align="left"><br>'+
    '&lt;!-- Single Slide --&gt;<br>'+
    '&lt;div class="single-portfolio-content"&gt;<br>'+
    '&lt;div class="slider-item"&gt;<br>'+
            '&lt;img src="'+the_link+'" class="" loading="lazy" style="object-fit: contain;height:100vh;width: 100%;overflow: hidden;"&gt;<br>'+
            '&lt;!-- zoom img --&gt;'+
            '<br>&lt;div class="hover-content"&gt;<br>'+
                '&lt;center&gt;<br>'+
                    '&lt;a href="'+the_link+'" class="portfolio-img"&gt;&lt;i class="fa fa-eye"&gt;&lt;/i&gt;&lt;/a&gt;<br>'+
                '&lt;/center&gt;<br>'+
            '&lt;/div&gt;<br>'+
          '&lt;/div&gt;<br>'+
        '&lt;/div&gt;<br><br>';

*/
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