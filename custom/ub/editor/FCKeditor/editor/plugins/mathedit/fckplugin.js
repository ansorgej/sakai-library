// mathedit plugin for WebEQ -- Catherine Weresow weresow@rutgers.edu
/* 
FCKCommands.RegisterCommand(commandName, command)
       commandName - Command name, referenced by the Toolbar, etc...
       command - Command object (must provide an Execute() function).
*/

// Register the related commands.
FCKCommands.RegisterCommand(
   'mathedit',
    new FCKDialogCommand(
        FCKLang['MathEditName'],
        FCKLang['MathEditTitle'],
        FCKConfig.PluginsPath + 'mathedit/meditor.html', 800, 500));

// Create the toolbar button.        
var oMathEdit = new FCKToolbarButton('mathedit', FCKLang['MathEditBtn']);
oMathEdit.IconPath = FCKConfig.PluginsPath + 'mathedit/mathedit.gif' ;

FCKToolbarItems.RegisterItem( 'MathEdit', oMathEdit ) ;

// The object used for all MathEdit operations. 
var FCKMathEdit = new Object() ; 
 
// returns true if the string only contains characters 0-9
function isNumeric(str){
  var re = /[\D]/g
  if (re.test(str)) return false;
  return true;
}
 
FCKMathEdit.EQSave = function( EQeditor, font, height, width ) 
{ 

if(!isNumeric(font)) { 
	font = "14"; 
}
if(!isNumeric(height)) {
	height = "100";
}
if(!isNumeric(width)) {
	width = "250";
}

var mml_txt = EQeditor.getEscapedMathML();

var app_tag = "<applet archive=\"WebEQApplet.jar\" codebase=\"/library/editor/FCKeditor/editor/plugins/mathedit/classes\" code=\"webeq3.ViewerControl\" height=\""+height+"\" width=\""+width+"\">\n";
app_tag += "<param name=\"useslibrary\" value=\"WebEQApplet\">\n";
app_tag += "<param name=\"useslibrarycodebase\" value=\"WebEQApplet.cab\">\n";
app_tag += "<param name=\"useslibraryversion\" value=\"3,7,0,0\">\n";
app_tag += "<param name=\"background\" value=\"white\"/>\n";
app_tag += "<param name=\"foreground\" value=\"black\"/>\n";
app_tag += "<param name=\"controls\" value=\"false\"/>\n";
app_tag += "<param name=\"parser\" value=\"mathml\">\n";
app_tag += "<param name=\"size\" value=\""+font+"\">\n";
app_tag += "<param name=\"url_encoded_eq\" value=\""+mml_txt+"\"/>\n";
app_tag += "</applet>\n";

FCK.InsertHtml(app_tag);

} 
