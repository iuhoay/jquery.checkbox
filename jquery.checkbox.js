/**
* jquery.checkbox.js v0.0.1
*/
(function($){
  $.fn.checkbox = function() {
    var $el = $(this),
        children_select = $el.data("children");

    if (!children_select) return false;

    $el.on("change", function() {
      $(children_select).prop("checked", $el.prop("checked"));
    })

    $(children_select).on("change", function() {
      var $children = $(children_select);
      $el.prop("checked", $children.length == $(children_select + ":checked").length);
    })

    this.values = function() {
      var result = [];
      $(children_select + ":checked").each(function() {
        result.push($(this).val());
      });
      return result;
    }

    return this;
  }
})(jQuery);
