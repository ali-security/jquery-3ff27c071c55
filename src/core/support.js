define([
	"../var/support"
], function( support ) {

// Support: Safari 8+
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Support: Android<4.1
// In Android 4.0 and older <form>s created via document.createDocumentFragment()
// lose their parseHTML-inherited (i.e. document-wide) form-related behaviour
support.createHTMLDocument = (function() {
	if ( !document.implementation.createHTMLDocument ) {
		return false;
	}
	var doc = document.implementation.createHTMLDocument( "" );
	doc.body.innerHTML = "<form></form><form></form>";
	return doc.body.childNodes.length === 2;
})();

return support;

});
