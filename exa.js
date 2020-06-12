        $(document).ready(function() {
            var signaturePad = new SignaturePad(document.getElementById('signature-pad'));
           
             //Clear signature area
            $('#clear-pad').on('click', function(){
           signaturePad.clear();
       });
       
            $('#click').click(function(){
             var data = signaturePad.toDataURL('image/png');
             $('#output').val(data);
   
             $("#sign_prev").show();
             $("#sign_prev").attr("src",data);
             // Open image in the browser
             //window.open(data);
            });
           })
   
   
        
     
     $("#myForm").submit(function(e) {
       e.preventDefault();
       $.ajax({
         url: "https://hooks.zapier.com/hooks/catch/7719229/osd33q6/",
         type: "post",
         data: $("#myForm").serialize(),
         success: function() {
           // Redirect to another success page
           alert("your response is submitted and sent successfully.");
           // window.location = "http://google.com";
         }
       });
     });

    

     
  
 