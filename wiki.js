$(document).ready(function(){

	function result(){
		var searchValue=$('#searchValue').val();

		var url="https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchValue+"&format=json&callback=?";
		var glyp="<span class='glyphicon glyphicon glyphicon-globe'></span>";
		$.ajax({
			type:'GET',
			url:url,
			async:false,
			dataType:'json',
			success: function(data){
				$('#output').html('');
				for(var i=0;i<data[1].length;i++){
					$('#output').prepend("<li>"+glyp +"<a href="+data[3][i]+" >"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
				}

				$('#searchValue').val('');
			},
			error: function(errorMessage){
				alert('Error!');
			}
		}); //end ajax
} //end result function

	$('#search').click(function (){
	 result();
	});

	$("#searchValue").keypress(function(e){
      if(e.which==13){
        result();
        return false;
      }
    });

}); //end ready function