//var CKEDITOR = CKEDITOR || {};
	var ckeditorId;
	(function() {
	  var pluginName = 'sharestream';
	  CKEDITOR.plugins.add(pluginName,
	      {    
	    init: function(editor)
	    {
	      editor.addCommand(pluginName, {
	        exec : function(editor) {
	          ckeditorId = editor.name;
	          window.open('/sssakai-tool/service/embedService.htm?siteId='+window.parent.location.pathname.split('/')[3], 'ShareStream', 'width=800,height=500,scrollbars=no,scrolling=no,location=no,toolbar=no,resizable');
	        }
	      });
	      editor.ui.addButton(pluginName, {
	        label: pluginName,
	        command: pluginName,
	        icon: this.path + 'ss_icon.png'
	      });
	    }
	      });
	})();