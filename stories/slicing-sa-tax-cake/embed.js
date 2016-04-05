if (document.location.hostname == "localhost") {
    var baseurl = "/stories/slicing-sa-tax-cake";
} else {
    var baseurl = "https://static.code4sa.org/academy-stories/stories/slicing-sa-tax-cake";
}
document.write('<div id="code4sa-slicing-sa-tax-cake"></div>');
document.write('<script type="text/javascript" src="' + baseurl + '/../../js/pym.js"></script>');
document.write("<script>var pymParent = new pym.Parent('code4sa-slicing-sa-tax-cake', '" + baseurl + "/index.html', {});</script>");
