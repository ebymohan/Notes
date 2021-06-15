		$(document).ready(function() {
		if (!('hasCodeRunBefore' in sessionStorage)) {
        

		$(function() {
		$("#dialog").dialog({
		autoOpen: true,
		height: 198,
		width: 350,
		modal: true
		});
//		$("#dialog").dialog("open");
		});
		// Validating Form Fields.....
		$("#submit").click(function(e) {
		var email = $.cookie("userID");
		var pass = $("#pass").val();
		if (name === '') {
		alert("Please enter the password");
		e.preventDefault();
		} else {
		alert("Form Submitted Successfully......");
		}
		});
		$("pass").remove();
		$("submit").remove();
		sessionStorage.setItem("hasCodeRunBefore", true);
		}
		});