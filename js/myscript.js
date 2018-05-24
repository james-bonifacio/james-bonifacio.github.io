var height = $(document).height();

var content_height = height - menu_height;

$(".content").css("height", content_height);
$(".content").css("top", menu_height);