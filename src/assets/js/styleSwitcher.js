"use strict";
function addSwitcher() {
 // var dlabSwitcher ='<div class="sidebar-right"><div class="bg-overlay"></div> <a class="sidebar-right-trigger wave-effect wave-effect-x" data-bs-toggle="tooltip" data-placement="right" data-original-title="Change Layout" href="javascript:void(0);"><span><i class="fa fa-cog fa-spin"></i></span></a> <a class="sidebar-close-trigger" href="javascript:void(0);"><span><i class="la-times las"></i></span></a><div class="sidebar-right-inner"><h4>Pick your style <a href="javascript:void(0);" onclick="deleteAllCookie()" class="btn btn-primary btn-sm pull-right">Delete All Cookie</a></h4><div class="card-tabs"><ul class="nav nav-tabs" role="tablist"><li class="nav-item"><a class="nav-link active" href="#tab1" data-bs-toggle="tab">Theme</a></li><li class="nav-item"><a class="nav-link" href="#tab2" data-bs-toggle="tab">Header</a></li><li class="nav-item"><a class="nav-link" href="#tab3" data-bs-toggle="tab">Content</a></li></ul></div><div class="tab-content tab-content-default tabcontent-border"><div class="fade tab-pane active show" id="tab1"><div class="admin-settings"><div class="row"><div class="col-sm-12"><p>Background</p> <select class="default-select wide form-control" id="theme_version" name="theme_version"><option value="disabled selected hidden">Choose Mode</option><option value="light">Light</option><option value="dark">Dark</option> </select></div><div class="col-sm-6"><p>Primary Color</p><div> <span data-placement="top" data-bs-toggle="tooltip" title="Color 1"> <input class="chk-col-primary filled-in" id="primary_color_1" name="primary_bg" type="radio" value="color_1"> <label for="primary_color_1" class="bg-label-pattern"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_2" name="primary_bg" type="radio" value="color_2"> <label for="primary_color_2"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_3" name="primary_bg" type="radio" value="color_3"> <label for="primary_color_3"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_4" name="primary_bg" type="radio" value="color_4"> <label for="primary_color_4"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_5" name="primary_bg" type="radio" value="color_5"> <label for="primary_color_5"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_6" name="primary_bg" type="radio" value="color_6"> <label for="primary_color_6"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_7" name="primary_bg" type="radio" value="color_7"> <label for="primary_color_7"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_9" name="primary_bg" type="radio" value="color_9"> <label for="primary_color_9"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_10" name="primary_bg" type="radio" value="color_10"> <label for="primary_color_10"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_11" name="primary_bg" type="radio" value="color_11"> <label for="primary_color_11"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_12" name="primary_bg" type="radio" value="color_12"> <label for="primary_color_12"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_13" name="primary_bg" type="radio" value="color_13"> <label for="primary_color_13"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_14" name="primary_bg" type="radio" value="color_14"> <label for="primary_color_14"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_15" name="primary_bg" type="radio" value="color_15"> <label for="primary_color_15"></label> </span></div></div><div class="col-sm-6"><p>Sidebar</p><div> <span> <input class="chk-col-primary filled-in" id="sidebar_color_1" name="sidebar_bg" type="radio" value="color_1"> <label for="sidebar_color_1" class="bg-label-pattern"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_2" name="sidebar_bg" type="radio" value="color_2"> <label for="sidebar_color_2"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_3" name="sidebar_bg" type="radio" value="color_3"> <label for="sidebar_color_3"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_4" name="sidebar_bg" type="radio" value="color_4"> <label for="sidebar_color_4"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_5" name="sidebar_bg" type="radio" value="color_5"> <label for="sidebar_color_5"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_6" name="sidebar_bg" type="radio" value="color_6"> <label for="sidebar_color_6"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_7" name="sidebar_bg" type="radio" value="color_7"> <label for="sidebar_color_7"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_8" name="sidebar_bg" type="radio" value="color_8"> <label for="sidebar_color_8" class="border"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_9" name="sidebar_bg" type="radio" value="color_9"> <label for="sidebar_color_9"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_10" name="sidebar_bg" type="radio" value="color_10"> <label for="sidebar_color_10"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_11" name="sidebar_bg" type="radio" value="color_11"> <label for="sidebar_color_11"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_12" name="sidebar_bg" type="radio" value="color_12"> <label for="sidebar_color_12"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_13" name="sidebar_bg" type="radio" value="color_13"> <label for="sidebar_color_13"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_14" name="sidebar_bg" type="radio" value="color_14"> <label for="sidebar_color_14"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_15" name="sidebar_bg" type="radio" value="color_15"> <label for="sidebar_color_15"></label> </span></div></div></div></div></div><div class="fade tab-pane" id="tab2"><div class="admin-settings"><div class="row"><div class="col-sm-6"><p>Layout</p> <select class="default-select wide form-control" id="theme_layout" name="theme_layout"><option value="disabled selected hidden">Choose Layout</option><option value="vertical">Vertical</option><option value="horizontal">Horizontal</option> </select></div><div class="col-sm-6"><p>Header position</p> <select class="default-select wide form-control" id="header_position" name="header_position"><option value="disabled selected hidden">Choose Header Positon</option><option value="static">Static</option><option value="fixed">Fixed</option> </select></div><div class="col-sm-6"><p>Sidebar</p> <select class="default-select wide form-control" id="sidebar_style" name="sidebar_style"><option value="disabled selected hidden">Choose Sidebar</option><option value="full">Full</option><option value="mini">Mini</option><option value="compact">Compact</option><option value="modern">Modern</option><option value="overlay">Overlay</option><option value="icon-hover">Icon-hover</option> </select></div><div class="col-sm-6"><p>Sidebar position</p> <select class="default-select wide form-control" id="sidebar_position" name="sidebar_position"><option value="disabled selected hidden">Choose Sidebar Position</option><option value="static">Static</option><option value="fixed">Fixed</option> </select></div></div></div></div><div class="fade tab-pane" id="tab3"><div class="admin-settings"><div class="row"><div class="col-sm-6"><p>Container</p> <select class="default-select wide form-control" id="container_layout" name="container_layout"><option value="disabled selected hidden">Choose Container</option><option value="wide">Wide</option><option value="boxed">Boxed</option><option value="wide-boxed">Wide Boxed</option> </select></div><div class="col-sm-6"><p>Body Font</p> <select class="default-select wide form-control" id="typography" name="typography"><option value="disabled selected hidden">Choose Font</option><option value="cairo">Cairo</option><option value="roboto">Roboto</option><option value="poppins">Poppins</option><option value="opensans">Open Sans</option><option value="HelveticaNeue">HelveticaNeue</option> </select></div></div></div></div></div><div class="note-text"><span class="text-danger">*Note :</span> This theme switcher is not part of product. It is only for demo. you will get all guideline in documentation. please check <a href="https://dompet.dexignlab.com/doc/" target="_blank" class="text-primary">documentation.</a></div></div></div>';

  //var demoPanel = '<div class=dlab-demo-panel><div class=bg-close></div><a class=dlab-demo-trigger href=javascript:void(0) data-original-title="Check out more demos"data-placement=right data-toggle=tooltip><span><i class="las la-tint"></i></span></a><div class=dlab-demo-inner><a class="btn btn-sm btn-primary mb-3 px-2 py-1"href=javascript:void(0); onclick=deleteAllCookie()>Delete All Cookie</a><div class=dlab-demo-header><h4>Select A Demo</h4><a class=dlab-demo-close href=javascript:void(0)><span><i class="las la-times"></i></span></a></div><div class=dlab-demo-content><div class=dlab-wrapper><div class="rounded-lg dlab-demo-bx overlay-bx demo-active"><div class="rounded-lg overlay-wrapper"><img alt=""class=w-100 src=images/demo/pic15.jpg></div><div class=overlay-layer><a class="btn btn-sm btn-secondary mr-2"href=index.html>Dashboard 1</a></div></div><h5 class=text-black>Dashboard 1</h5><hr><div class="rounded-lg dlab-demo-bx overlay-bx"><div class="rounded-lg overlay-wrapper"><img alt=""class=w-100 src=images/demo/pic16.jpg></div><div class=overlay-layer><a class="btn btn-sm btn-secondary mr-2"href=index-2.html>Dashboard 2</a></div></div><h5 class=text-black>Dashboard 2</h5><hr><div class="rounded-lg dlab-demo-bx overlay-bx"><div class="rounded-lg overlay-wrapper"><img alt=""class=w-100 src=images/demo/pic9.jpg></div><div class=overlay-layer><a class="btn btn-sm btn-secondary mr-2"href=index-3.html>Dashboard 3</a></div></div><h5 class=text-black>Dashboard 3</h5><hr><div class="rounded-lg dlab-demo-bx overlay-bx"><div class="rounded-lg overlay-wrapper"><img alt=""class=w-100 src=images/demo/pic10.jpg></div><div class=overlay-layer><a class="btn btn-sm btn-secondary mr-2"href=index-4.html>Dashboard 4</a></div></div><h5 class=text-black>Dashboard 4</h5><hr><div class="rounded-lg dlab-demo-bx overlay-bx"><div class="rounded-lg overlay-wrapper"><img alt=""class=w-100 src=images/demo/pic11.jpg></div><div class=overlay-layer><a class="btn btn-sm btn-secondary mr-2"href=index-5.html>Dashboard 5</a></div></div><h5 class=text-black>Dashboard 5</h5><hr><div class="rounded-lg dlab-demo-bx overlay-bx"><div class="rounded-lg overlay-wrapper"><img alt=""class=w-100 src=images/demo/pic12.jpg></div><div class=overlay-layer><a class="btn btn-sm btn-secondary mr-2"href=index-6.html>Dashboard 6</a></div></div><h5 class=text-black>Dashboard 6</h5><hr><div class="rounded-lg dlab-demo-bx overlay-bx"><div class="rounded-lg overlay-wrapper"><img alt=""class=w-100 src=images/demo/pic13.jpg></div><div class=overlay-layer><a class="btn btn-sm btn-secondary mr-2"href=index-7.html>Dashboard 7</a></div></div><h5 class=text-black>Dashboard 7</h5><hr><div class="rounded-lg dlab-demo-bx overlay-bx"><div class="rounded-lg overlay-wrapper"><img alt=""class=w-100 src=images/demo/pic14.jpg></div><div class=overlay-layer><a class="btn btn-sm btn-secondary mr-2"href=index-8.html>Dashboard 8</a></div></div><h5 class=text-black>Dashboard 8</h5><hr><div class="rounded-lg dlab-demo-bx overlay-bx"><div class="rounded-lg overlay-wrapper"><img alt=""class=w-100 src=images/demo/pic1.jpg></div><div class=overlay-layer><a class="btn btn-sm btn-secondary mr-2 dlab_theme_demo"href=javascript:void(0); data-theme=1>Default</a></div></div><h5 class=text-black>Demo 1</h5><hr><div class="rounded-lg dlab-demo-bx overlay-bx"><div class="rounded-lg overlay-wrapper"><img alt=""class=w-100 src=images/demo/pic2.jpg></div><div class=overlay-layer><a class="btn btn-sm btn-secondary mr-2 dlab_theme_demo"href=javascript:void(0); data-theme=2>Default</a></div></div><h5 class=text-black>Demo 2</h5><hr><div class="rounded-lg dlab-demo-bx overlay-bx"><div class="rounded-lg overlay-wrapper"><img alt=""class=w-100 src=images/demo/pic3.jpg></div><div class=overlay-layer><a class="btn btn-sm btn-secondary mr-2 dlab_theme_demo"href=javascript:void(0); data-theme=3>Default</a></div></div><h5 class=text-black>Demo 3</h5><hr><div class="rounded-lg dlab-demo-bx overlay-bx"><div class="rounded-lg overlay-wrapper"><img alt=""class=w-100 src=images/demo/pic4.jpg></div><div class=overlay-layer><a class="btn btn-sm btn-secondary mr-2 dlab_theme_demo"href=javascript:void(0); data-theme=4>Default</a></div></div><h5 class=text-black>Demo 4</h5><hr><div class="rounded-lg dlab-demo-bx overlay-bx"><div class="rounded-lg overlay-wrapper"><img alt=""class=w-100 src=images/demo/pic5.jpg></div><div class=overlay-layer><a class="btn btn-sm btn-secondary mr-2 dlab_theme_demo"href=javascript:void(0); data-theme=5>Default</a></div></div><h5 class=text-black>Demo 5</h5><hr><div class="rounded-lg dlab-demo-bx overlay-bx"><div class="rounded-lg overlay-wrapper"><img alt=""class=w-100 src=images/demo/pic6.jpg></div><div class=overlay-layer><a class="btn btn-sm btn-secondary mr-2 dlab_theme_demo"href=javascript:void(0); data-theme=6>Default</a></div></div><h5 class=text-black>Demo 6</h5><hr><div class="rounded-lg dlab-demo-bx overlay-bx"><div class="rounded-lg overlay-wrapper"><img alt=""class=w-100 src=images/demo/pic7.jpg></div><div class=overlay-layer><a class="btn btn-sm btn-secondary mr-2 dlab_theme_demo"href=javascript:void(0); data-theme=7>Default</a></div></div><h5 class=text-black>Demo 7</h5><hr><div class="rounded-lg dlab-demo-bx overlay-bx"><div class="rounded-lg overlay-wrapper"><img alt=""class=w-100 src=images/demo/pic8.jpg></div><div class=overlay-layer><a class="btn btn-sm btn-secondary mr-2 dlab_theme_demo"href=javascript:void(0); data-theme=8>Default</a></div></div><h5 class=text-black>Demo 8</h5></div></div><div class=note-text><span class=text-danger>*Note :</span>This theme switcher is not part of product. It is only for demo. you will get all guideline in documentation. please check <a class=text-primary href=https://dompet.dexignlab.com/doc/ target=_blank>documentation.</a></div></div></div>';

  if ($("#dlabSwitcher").length == 0) {
    jQuery("body").append(dlabSwitcher);

    //const ps = new PerfectScrollbar('.sidebar-right-inner');
    //console.log(ps.reach.x);
    //ps.isRtl = false;

    $(".sidebar-right-trigger").on("click", function () {
      $(".sidebar-right").toggleClass("show");
    });
    $(".sidebar-close-trigger,.bg-overlay").on("click", function () {
      $(".sidebar-right").removeClass("show");
    });
  }
}

(function ($) {
  "use strict";
  addSwitcher();

  const body = $("body");
  const html = $("html");

  //get the DOM elements from right sidebar
  const typographySelect = $("#typography");
  const versionSelect = $("#theme_version");
  const layoutSelect = $("#theme_layout");
  const sidebarStyleSelect = $("#sidebar_style");
  const sidebarPositionSelect = $("#sidebar_position");
  const headerPositionSelect = $("#header_position");
  const containerLayoutSelect = $("#container_layout");
  const themeDirectionSelect = $("#theme_direction");

  //change the theme typography controller
  typographySelect.on("change", function () {
    body.attr("data-typography", this.value);

    setCookie("typography", this.value);
  });

  //change the theme version controller
  versionSelect.on("change", function () {
    body.attr("data-theme-version", this.value);

    /* if(this.value === 'dark'){
			//jQuery(".nav-header .logo-abbr").attr("src", "./images/logo-white.png");
			jQuery(".nav-header .logo-compact").attr("src", "images/logo-text-white.png");
			jQuery(".nav-header .brand-title").attr("src", "images/logo-text-white.png");
			
			setCookie('logo_src', './images/logo-white.png');
			setCookie('logo_src2', 'images/logo-text-white.png');
		}else{
			jQuery(".nav-header .logo-abbr").attr("src", "./images/logo.png");
			jQuery(".nav-header .logo-compact").attr("src", "images/logo-text.png");
			jQuery(".nav-header .brand-title").attr("src", "images/logo-text.png");
			
			setCookie('logo_src', './images/logo.png');
			setCookie('logo_src2', 'images/logo-text.png');
		} */

    setCookie("version", this.value);
  });

  //change the sidebar position controller
  sidebarPositionSelect.on("change", function () {
    this.value === "fixed" &&
    body.attr("data-sidebar-style") === "modern" &&
    body.attr("data-layout") === "vertical"
      ? alert("Sorry, Modern sidebar layout dosen't support fixed position!")
      : body.attr("data-sidebar-position", this.value);
    setCookie("sidebarPosition", this.value);
  });

  //change the header position controller
  headerPositionSelect.on("change", function () {
    body.attr("data-header-position", this.value);
    setCookie("headerPosition", this.value);
  });

  //change the theme direction (rtl, ltr) controller
  themeDirectionSelect.on("change", function () {
    html.attr("dir", this.value);
    html.attr("class", "");
    html.addClass(this.value);
    body.attr("direction", this.value);
    setCookie("direction", this.value);
  });

  //change the theme layout controller
  layoutSelect.on("change", function () {
    if (body.attr("data-sidebar-style") === "overlay") {
      body.attr("data-sidebar-style", "full");
      body.attr("data-layout", this.value);
      return;
    }

    body.attr("data-layout", this.value);
    setCookie("layout", this.value);
  });

  //change the container layout controller
  containerLayoutSelect.on("change", function () {
    if (this.value === "boxed") {
      if (
        body.attr("data-layout") === "vertical" &&
        body.attr("data-sidebar-style") === "full"
      ) {
        body.attr("data-sidebar-style", "overlay");
        body.attr("data-container", this.value);

        setTimeout(function () {
          $(window).trigger("resize");
        }, 200);

        return;
      }
    }

    body.attr("data-container", this.value);
    setCookie("containerLayout", this.value);
  });

  //change the sidebar style controller
  sidebarStyleSelect.on("change", function () {
    if (body.attr("data-layout") === "horizontal") {
      if (this.value === "overlay") {
        alert("Sorry! Overlay is not possible in Horizontal layout.");
        return;
      }
    }

    if (body.attr("data-layout") === "vertical") {
      if (body.attr("data-container") === "boxed" && this.value === "full") {
        alert("Sorry! Full menu is not available in Vertical Boxed layout.");
        return;
      }

      if (
        this.value === "modern" &&
        body.attr("data-sidebar-position") === "fixed"
      ) {
        alert(
          "Sorry! Modern sidebar layout is not available in the fixed position. Please change the sidebar position into Static."
        );
        return;
      }
    }

    body.attr("data-sidebar-style", this.value);

    if (body.attr("data-sidebar-style") === "icon-hover") {
      $(".dlabnav").on(
        "hover",
        function () {
          $("#main-wrapper").addClass("iconhover-toggle");
        },
        function () {
          $("#main-wrapper").removeClass("iconhover-toggle");
        }
      );
    }

    setCookie("sidebarStyle", this.value);
  });

  /* jQuery("#nav_header_color_1").on('click',function(){
		jQuery(".nav-header .logo-abbr").attr("src", "./images/logo.png");
		setCookie('logo_src', './images/logo.png');
		return false;
    }); */

  /* jQuery("#sidebar_color_2, #sidebar_color_3, #sidebar_color_4, #sidebar_color_5, #sidebar_color_6, #sidebar_color_7, #sidebar_color_8, #sidebar_color_9, #sidebar_color_10, #sidebar_color_11, #sidebar_color_12, #sidebar_color_13, #sidebar_color_14, #sidebar_color_15").on('click',function(){
		jQuery(".nav-header .logo-abbr").attr("src", "./images/logo-white.png");
		jQuery(".nav-header .brand-title").attr("src", "./images/logo-text-white.png");
		setCookie('logo_src', './images/logo-white.png');
		return false;
    }); */

  /* jQuery("#nav_header_color_3").on('click',function(){
		jQuery(".nav-header .logo-abbr").attr("src", "./images/logo-white.png");
		setCookie('logo_src', './images/logo-white.png');
		return false;
    }); */

  //change the nav-header background controller
  $('input[name="navigation_header"]').on("click", function () {
    body.attr("data-nav-headerbg", this.value);
    setCookie("navheaderBg", this.value);
  });

  //change the header background controller
  $('input[name="header_bg"]').on("click", function () {
    body.attr("data-headerbg", this.value);
    setCookie("headerBg", this.value);
  });

  //change the sidebar background controller
  $('input[name="sidebar_bg"]').on("click", function () {
    body.attr("data-sidebarbg", this.value);
    setCookie("sidebarBg", this.value);
  });

  //change the primary color controller
  $('input[name="primary_bg"]').on("click", function () {
    body.attr("data-primary", this.value);
    setCookie("primary", this.value);
  });
})(jQuery);
