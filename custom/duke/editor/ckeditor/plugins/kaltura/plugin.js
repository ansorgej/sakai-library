/*
 * Copyright 2010 Unicon (R) Licensed under the
 * Educational Community License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may
 * obtain a copy of the License at
 *
 * http://www.osedu.org/licenses/ECL-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an "AS IS"
 * BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

//var CKEDITOR = CKEDITOR || {};
var ckeditorId;
(function() {
  var pluginName = 'kaltura';
  CKEDITOR.plugins.add(pluginName,
      {    
    init: function(editor)
    {
      editor.addCommand(pluginName, {
        exec : function(editor) {
          ckeditorId = editor.name;
          window.open('/kaltura/service/fckKalturaSelector.htm', 'Kaltura', 'width=800,height=500,scrollbars=no,scrolling=no,location=no,toolbar=no');
        }
      });
      editor.ui.addButton(pluginName, {
        label: pluginName,
        command: pluginName,
        icon: this.path + 'images/kaltura.gif'
      });
    }
      });
})();
