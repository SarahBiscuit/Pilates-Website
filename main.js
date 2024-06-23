//ADD IN EVENT LISTENERS TO GET ACCORDION BUTTONS ON HOME PAGE TO WORK, AND GET ELEMENT BY IDS//
//JAVASCRIPT CODE TO TOGGLE FIRST ACCORDION ON AND OFF//

function toggleAccordion() {
    const myCollapse = document.getElementById('collapseOne');
    const bsCollapse = new bootstrap.Collapse(myCollapse, { toggle: true });
}

toggleAccordion();

//CURRENTLY THIS CODE ISN'T WORKING AND I'M NOT SURE WHY//