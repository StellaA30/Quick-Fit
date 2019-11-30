/* sidenav */
function opensidenav() {
    document.getElementById('sidenav').style.left="0px";
    document.getElementById('openbutton').style.display="none";
}
function closesidenav() {
    document.getElementById('sidenav').style.left="-200px";
    document.getElementById('openbutton').style.display="block";
}