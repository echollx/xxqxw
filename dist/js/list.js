require(["config"],function(){require(["jquery","template","load"],function(n,o){n.getJSON("/mock/list.json",function(t){var e={products:t.res_body.data},i=o("list_template",e);n(".main").html(i)})})});