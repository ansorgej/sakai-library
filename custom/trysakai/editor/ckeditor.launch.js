/*******************************************************************************
 * $URL:  $
 * $Id:  $
 * **********************************************************************************
 *
 * Copyright (c) 2010 The Sakai Foundation
 *
 * Licensed under the Educational Community License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.osedu.org/licenses/ECL-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 ******************************************************************************/

var sakai = sakai || {};
sakai.editor = sakai.editor || {};
sakai.editor.editors = sakai.editor.editors || {};

sakai.editor.editors.ckeditor = {};
// Please note that no more parameters should be added to this signature.
// The config object allows for name-based config options to be passed.
// The w and h parameters should be removed as soon as their uses can be migrated.
sakai.editor.editors.ckeditor.launch = function(targetId, config, w, h) {
    var folder = "";
    if (sakai.editor.collectionId) {
        folder = "&CurrentFolder=" + sakai.editor.collectionId;
    }

    var ckconfig = {
        skin: 'moono',
        height: 310,
        width: 640,
        filebrowserBrowseUrl :'/library/editor/FCKeditor/editor/filemanager/browser/default/browser.html?Connector=/sakai-fck-connector/web/editor/filemanager/browser/default/connectors/jsp/connector' + folder,
        filebrowserImageBrowseUrl : '/library/editor/FCKeditor/editor/filemanager/browser/default/browser.html?Type=Image&Connector=/sakai-fck-connector/web/editor/filemanager/browser/default/connectors/jsp/connector' + folder,
        filebrowserFlashBrowseUrl :'/library/editor/FCKeditor/editor/filemanager/browser/default/browser.html?Type=Flash&Connector=/sakai-fck-connector/web/editor/filemanager/browser/default/connectors/jsp/connector' + folder,
        //extraPlugins: (sakai.editor.enableResourceSearch ? 'resourcesearch' : '')+'atd-ckeditor',
        extraPlugins: 'ckeditor_wiris',
	//atd_rpc: '/proxy/atd',

        // These two settings enable the browser's native spell checking and context menus.
        // Control-Right-Click (Windows/Linux) or Command-Right-Click (Mac) on highlighted words
        // will cause the CKEditor menu to be suppressed and display the browser's standard context
        // menu. In some cases (Firefox and Safari, at least), this supplies corrections, suggestions, etc.
        disableNativeSpellChecker: false,
        browserContextMenuOnCtrl: true,

        // DTCC custom!
        font_names: 'Arial/Arial, sans-serif;Courier New/Courier New, Courier, Fixed, monospace;Times New Roman/Times New Roman, Times, serif;Trebuchet MS/Trebuchet MS, trebuchet, arial, helvetica, sans-serif;Verdana',
        toolbarCanCollapse: false,

        toolbar_Basic:
        [
            ['Source', '-', 'Bold', 'Italic', 'Link', 'Unlink']
        ],
        toolbar_Full:
        [
            // Uncomment the next line and comment the following to enable the default spell checker.
            // Note that it uses spellchecker.net, displays ads and sends content to remote servers without additional setup.
            //['Cut','Copy','Paste','PasteText','PasteFromWord','-','Print', 'SpellChecker', 'Scayt'],
            ['Bold','Italic','Underline','-','Strike','Subscript','Superscript'],['TextColor','BGColor'],
            ['NumberedList','BulletedList','-','Outdent','Indent','Blockquote','-','RemoveFormat'],
            ['JustifyLeft','JustifyCenter','JustifyRight'],
            '/',
            ['Font','FontSize'],
            ['Link','Unlink',],
            ['Image','-','Table','-','HorizontalRule','-','SpecialChar'],
            ['Cut','Copy','Paste','PasteText'],['ckeditor_wiris_formulaEditor'],
            ['Source']
        ],
        toolbar: 'Full',
        resize_dir: 'both'
    };

    //NOTE: The height and width properties are handled discretely here.
    //      The ultimate intent is that the caller-supplied config will simply
    //      overlay the default config. The outstanding question is whether
    //      some properties should disallow override (because of specific setup
    //      here that we would not want duplicated throughout calling code) or
    //      if their override would just be discouraged. We also probably want
    //      some symbolic things like editorSize: 'small', where the supplied
    //      values are interpreted and translated into dimensions, toolbar set,
    //      and anything else relevant. This will allow editor indifference
    //      on the part of tool code, requesting whatever editor be launched
    //      with appropriate settings applied, rather than detecting the editor
    //      and supplying specific values for the desired effect. This set of
    //      "logical" configuration options is yet to be determined.
    if (config) {
        if (config.width) {
            ckconfig.width = config.width;
        } else if (w) {
            ckconfig.width = w;
        }

        if (config.height) {
            ckconfig.height = config.height;
        } else if (h) {
            ckconfig.height = h;
        }

        if (config && config.toolbarSet && ckconfig['toolbar_' + config.toolbarSet]) {
            ckconfig.toolbar = config.toolbarSet;
        }
    }

    CKEDITOR.replace(targetId, ckconfig);
}

sakai.editor.launch = sakai.editor.editors.ckeditor.launch;

