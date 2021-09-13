function ajax()
{

    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
            var response=JSON.parse(this.responseText);
            var list=response.Grocery;
            var output="";
            
                output +="<tr>"+ 
                    "<th>"+ "SL.NO" +"</th>"+
                    "<th>"+ "NAME"+"</th>"+
                    "<th>"+ "QUANTITY" +"</th>"+
                    "<th>"+ "UNIT" +"</th>"+
                    "<th>"+ "DEPARTMENT" +"</th>"+
                    "<th>"+ "NOTES" +"</th>"
                +"<tr>";
              

            for(var i=0;i<list.length;i++){
                   
            output +="<tr>"+ 
                "<td>"+ list[i].SLNO +"</td>"+
                "<td>"+ list[i].NAME +"</td>"+
                "<td>"+ list[i].QUANTITY +"</td>"+
                "<td>"+ list[i].UNIT +"</td>"+
                "<td>"+ list[i].DEPARTMENT +"</td>"+
                "<td>"+ list[i].NOTES +"</td>"
            +"<tr>";
               
           
            }
            // console.log(output);
            document.getElementById("table").innerHTML=output;
           
         }
    
    }
    xhttp.open("GET","grocery.json",true);
    xhttp.send();
}