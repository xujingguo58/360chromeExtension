      $(function(){
	$('#submit').click(function(){
		
	    var str = $('#website').val()+$('#user').val();
	    var result = hex_sha1(str);
	    result = result.slice(2,12);
	    $('#result').val(result);
})
})