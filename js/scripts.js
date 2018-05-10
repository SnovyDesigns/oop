(function ($) {

	function Button (text) {
		this.text = text || 'Hello'; 
	}	

	Button.prototype = {
		create: function () {
			self = this;
			this.$element = $('<button></button>');
			this.$element.text(this.text);
			this.$element.click(function() {
				alert(self.text);
			});
			this.$element.appendTo('body');
		}
	};

	var btn1 = new Button();

	btn1.create();
	
})(jQuery);