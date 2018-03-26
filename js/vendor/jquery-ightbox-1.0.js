(function($){
    $.fn.extend({
        lightbox:function(){

            $(this).click(function(){
                var img = $(this).attr("data-name");
                openLightbox(img);
                
            });

            function openLightbox(img){

                $('#light-box').show(); 
            
                $( '#light-box').append( '<span class="close" id="close-light-box">×</span>')
            
                $( '#light-box').append( '<img src="img/'+img+'.jpg" alt="Ejemplo Lightbox" class="img-light-box">' );
            
                $("#close-light-box").click(function(){
                    closeLightbox();
                });
            
            }
            
            function closeLightbox(){
            
                $('#light-box').hide(); 
            
                $( '#light-box').empty()
            }
        }
    });
    
    /* código */
     
})(jQuery)