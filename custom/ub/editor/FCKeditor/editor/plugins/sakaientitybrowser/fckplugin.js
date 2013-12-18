/**
 * FCK plugin to browse for and insert link to Sakai entity
 *
 * @author: Joshua Ryan  josh@asu.edu  alt^I
 */

FCKCommands.RegisterCommand('Sakai_Entity_Link', new FCKDialogCommand(FCKLang['DlgEntityTitle'], FCKLang['DlgEntityTitle'], FCKConfig.PluginsPath + 'sakaientitybrowser/fck_link.html', 505, 350));

var oEntityItem = new FCKToolbarButton('Sakai_Entity_Link', FCKLang['DlgMyFindTitle']);
oEntityItem.IconPath = '/library/icon/favicon.ico';

FCKToolbarItems.RegisterItem('Sakai_Entity_Link', oEntityItem);
