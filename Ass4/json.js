<script>
             $(document).ready(function(){
                   display(1);
             });
             $(document).ready(function(){
                   $("#btnm").click(function(){
                   $("#form").show();
             });
             });
            
 

             
            function display(btnvalue)
            {
                ptr = btnvalue;
                $("tbody").children().remove();
                $.ajax({
                 url: "https://reqres.in/api/users?page="+btnvalue,
                 data: {},
                 beforeSend: function(){}
             }).done(function(response) {
                 var trArr = new Array();
                 $.each(response.data, function(i, v){
                     trArr.push('<tr><td>' + v.first_name  + '</td><td>' + v.email + '</td><td><img id="img" src="' 
                     + v.avatar + '" width="100px" /></td><td><a href="#form"><span class="glyphicon glyphicon-pencil"></span></a> &nbsp; <a href="#"><span class="glyphicon glyphicon-trash"></span></a>' + '</td></tr>'  );
                     
                 });
                 $('table#alk-table tbody').append(trArr.join('\n'));
             });
            }
             </script>
             <script>
    
                    var name1= document.getElementById('firstname');
                    var email1= document.getElementById('email');
                    var lname =  document.getElementById('lastname');
                    $(document).ready(function(){
                    $(".submit").click(function(){
                        var list={
                          
                        };
                    $.ajax({
                    url: "https://reqres.in/api/users",
                    type: 'POST',
                    data :
                    {
                            first_name:name1,
                            last_name:lname,
                            email : email1,
                    },
                    success: function(response){
                        console.log(response);
                        
                    }
                });
                });
                });
                
                    </script>