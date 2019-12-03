
    //Head Click & Close
   
    function openHead() {
        document.getElementById("starter").style.display = "none"
        document.getElementById("legsModalId").style.display = "none"
        document.getElementById("absModalId").style.display = "none"
        document.getElementById("armsModalId").style.display = "none"
        document.getElementById("headModalId").style.display = "block"
        
    }
   
    function closeHead() {
        var headModalElement = document.getElementById ("headModalId")
        headModalElement.style.display = "none"
    }
    
    //Arms click & close
    function openArms() {
        document.getElementById("starter").style.display = "none"
        document.getElementById("headModalId").style.display = "none"
        document.getElementById("legsModalId").style.display = "none"
        document.getElementById("absModalId").style.display = "none"
        document.getElementById("armsModalId").style.display = "block"
    }
    function closeArms() {
        var armsModalElement = document.getElementById ("armsModalId")
        armsModalElement.style.display = "none"
    }

    //Abs click & close
    function openAbs() {
        document.getElementById("starter").style.display = "none"
        document.getElementById("headModalId").style.display = "none"
        document.getElementById("armsModalId").style.display = "none"
        document.getElementById("legsModalId").style.display = "none"
        document.getElementById("absModalId").style.display = "block"
    }
    function closeAbs() {
        var absModalElement = document.getElementById ("absModalId")
        absModalElement.style.display = "none"
    }
    //legs click & close
    function openLegs() {
        document.getElementById("starter").style.display = "none"
        document.getElementById("headModalId").style.display = "none"
        document.getElementById("armsModalId").style.display = "none"
        document.getElementById("absModalId").style.display = "none"
        document.getElementById("legsModalId").style.display = "block"
    }
    function closeLegs() {
        var legsModalElement = document.getElementById ("legsModalId")
        legsModalElement.style.display = "none"
    }

    /* sidenav */
    function opensidenav() {
        document.getElementById('sidenav').style.left="0px";
        document.getElementById('openbutton').style.display="none";
    }
    function closesidenav() {
        document.getElementById('sidenav').style.left="-200px";
        document.getElementById('openbutton').style.display="block";
    }
