jQuery(document).ready(function(t){!function(){var e,n,o,a,c,s;e=t(":focusable"),a=e.length-1,n=t("html"),n.hasClass("lt-ie8")&&(o="*{noFocusLine: expression(this.hideFocus=true);}",c=document.getElementsByTagName("head")[0],s=document.createElement("style"),s.type="text/css",s.styleSheet.cssText=o,c.appendChild(s),t("form").each(function(){var n;return n=t(this),n.find("input[type=submit]").each(function(){return n=t(this),n.after("<a href='#' tabindex='"+n.attr("tabindex")+"' class='button submit'>"+n.val()+"</a>").remove()}),n.find("input[type=reset]").each(function(){return n=t(this),n.after("<a href='#' tabindex='"+n.attr("tabindex")+"' class='button reset'>"+n.val()+"</a>").remove()}),n.find("input[type=button]").each(function(){return n=t(this),n.after("<a href='#' tabindex='"+n.attr("tabindex")+"' class='button'>"+n.val()+"</a>").remove()}),e=t(":focusable")}),t("label.checkbox").on("mousedown",function(){return t(this).find("input.checkbox").focus()}),t("a.submit").on("click",function(e){return e.preventDefault(),t(this).closest("form").submit()}),t("input, textarea, a.button").on("focus",function(){var e;return e=t(this),e.hasClass("file")||e.hasClass("checkbox")?e.next().addClass("focused"):e.addClass("focused")}),t("input, textarea, a.button").on("blur",function(){var e;return e=t(this),e.hasClass("file")||e.hasClass("checkbox")?e.next().removeClass("focused"):e.removeClass("focused")}),t("input[type=file]").on("keydown",function(e){var n,o;return n=t(this),13===(o=e.which)||32===o?(e.preventDefault(),n.click()):void 0}),t("input[type=text], input[type=password]").on("keydown",function(e){var n;return n=t(this),13===e.which?n.closest("form").submit():void 0})),t(document).on("mouseup",function(){return t(".active-button").removeClass("active-button"),t(".active-checkbox").removeClass("active-checkbox")}),t(document).on("mousedown",".button",function(){return t(this).addClass("active-button")}),(n.hasClass("opacity")||n.hasClass("ie"))&&(t(document).on("mousedown","label.checkbox",function(){return t(this).find("span.faux-checkbox").addClass("active-checkbox")}),t("form").each(function(){var e;return e=t(this),n.hasClass("lt-ie7")===!1&&e.find("input.checkbox").each(function(){return t(this).after("<span class='faux-checkbox' id='for-"+this.id+"'>                  <span unselectable='on' class='checkmark'>&#x2713;</span>              </span>")}),e.find("input.file").each(function(){return e=t(this),e.after("<span unselectable='on' id='for-"+this.id+"' class='button'>"+e.attr("data-label")+"</span>"),e.parent().after("<p class='file'>File to be uploaded: <span id='label-"+this.id+"'>none</span></p>")})}),t("input.file").on("focus",function(){return t(this).next().addClass("focused-button")}),t("input.file").on("blur",function(){return t(this).next().removeClass("focused-button")}),t("input.file").on("change",function(){var e;return e=t(this)}),t("form").on("keydown",function(n){var o,c,s;return e=t(":focusable"),c=e.length-1,9===n.which?(n.preventDefault(),n.stopPropagation(),o=e.index(n.target),s=n.shiftKey?0===o?a:o-1:o===a?0:o+1,e.eq(s).focus()):void 0}),t(".ie div.file span.button").on("click",function(e){var n;return e.preventDefault(),n=t(document.getElementById(this.id.substring(4))),n.click()}),t("input.file").on("keydown",function(e){var n;return 13===(n=e.which)||32===n?(e.preventDefault(),t(this).click()):void 0}),t("label.checkbox").on("click",function(e){var n;return e.preventDefault(),n=t(this),t("#"+n.attr("for")).click()}),t("input.checkbox").on("click",function(e){var n;return e.stopPropagation(),n=t(this),n.is(":checked")===!0?n.parent().addClass("checked"):n.parent().removeClass("checked")}))}.call(this)});