$(document).ready(function(){$(".button").click(function(){$(this).fadeOut(),$(".circle").addClass("animate-bounce"),$(".control-panel").slideDown()}),$("#radius").mousemove(function(){var e=$(this).val();$(".circle").css("border-radius",e+"%")}),$("#uniform").click(function(){$("#uniform").prop("checked")?$(".circle").addClass("circle--uniform"):$(".circle").removeClass("circle--uniform")}),$("#delete").click(function(){$("#delete").prop("checked")?$(".circle").addClass("animate-shake delete-node"):$(".circle").removeClass("animate-shake delete-node")}),$(".circle").click(function(){$("#delete").prop("checked")?($(this).remove(),$(".deleted-nodes-title:hidden, .deleted-nodes-title:hidden")&&$(".deleted-nodes-title, .deleted-nodes-list").show(),$(".deleted-nodes-list").append("<li>"+$(this).attr("id")+"</li>")):$(this).find(".tooltip").text($(this).attr("id")).hide().fadeIn(50).delay(3e3).fadeOut(400)})});