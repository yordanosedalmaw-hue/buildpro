//==============================
// nav bar click
//==============================
 // ------- all  nav vars ----------
const about_nav=document.getElementById("about_nav");
const service_nav=document.getElementById("service_nav");
const project_nav=document.getElementById("project_nav");
const contact_nav=document.getElementById("contact_nav");
// ------------ for about click ---------------
if(about_nav){
    about_nav.addEventListener("click",()=>{
    
    window.location.href="about.html";
});
}
// ------------ for service click ---------------
if(service_nav){
    service_nav.addEventListener("click", () => {
    window.location.href = "services.html";
});
}
// ------------ for project click ---------------
if(project_nav){
    project_nav.addEventListener("click", () => {
    window.location.href = "projects.html";
});
}
// ------------ for contact click ---------------
if(contact_nav){
    contact_nav.addEventListener("click", () => {
    window.location.href = "contact.html";
});
}

//========================
// Get  A Quote click
//========================
const get_quote=document.getElementById("get_quote");

//========================
// Get  A Explore click
//========================
const explore_btn=document.getElementById("explore_btn");

explore_btn.addEventListener("click",()=>{
     window.location.href = "projects.html";
});
//----------scroll explore button-------------------
const scroll_explore_btn =
    document.getElementById("scroll_explore_btn");

scroll_explore_btn.addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});

// ------------ for Discover click ---------------
const dicover_btn =
    document.getElementById("dicover_btn");

dicover_btn.addEventListener("click",()=>{
    
    window.location.href="about.html";
});
// ------------ for Building card btn click ---------------
const building_btn =
    document.getElementById("building_btn");

building_btn.addEventListener("click",()=>{
    
    window.location.href="building-construction.html";
});

// ------------ for Architectural card btn click ---------------
const architectural_btn =
    document.getElementById("architectural_btn");

architectural_btn.addEventListener("click",()=>{
    
    window.location.href="architecture.html";
});

// ------------ for Road card btn click ---------------
const road_btn =
    document.getElementById("road_btn");

road_btn.addEventListener("click",()=>{
    
    window.location.href="road-construction.html";
});

// ------------ for Residntial card btn click ---------------
const residntial_btn =
    document.getElementById("residntial_btn");

residntial_btn.addEventListener("click",()=>{
    
    window.location.href="residential-construction.html";
});

// ------------ for Renovtion card btn click ---------------
const renovation_btn =
    document.getElementById("renovation_btn");

renovation_btn.addEventListener("click",()=>{
    
    window.location.href="renovation.html";
});

// ------------ for view all project card btn click ---------------
const view_all_pro_btn =
    document.getElementById("view_all_pro_btn");

view_all_pro_btn.addEventListener("click",()=>{
    
    window.location.href="projects.html";
});

// ------------ for Review card btn click ---------------
const review_btn =
    document.getElementById("review_btn");
const reviewPopup=
    document.getElementById("reviewPopup");
const closeReview=
    document.getElementById("closeReview");
const cancelReview=
    document.getElementById("cancelReview");
const submitreview=
      document.getElementById("submit-review");

// ------------- review btn click -------------
review_btn.addEventListener("click",(e)=>{
    e.stopPropagation();
    reviewPopup.style.display="flex";
     document.body.style.overflow = "hidden";
});
// -------------for footer review btn click -------------
submitreview.addEventListener("click",(e)=>{
    e.stopPropagation();
    reviewPopup.style.display="flex";
     document.body.style.overflow = "hidden";
});
// ------------ close btn click -----------
closeReview.addEventListener("click",()=>{
      reviewPopup.style.display="none";
      document.body.style.overflow = "auto";
});
// ------------- cancel btn click ------------
cancelReview.addEventListener("click",()=>{
      reviewPopup.style.display="none";
      document.body.style.overflow = "auto";
});
reviewPopup.addEventListener("click", (event) => {

    if (event.target === reviewPopup) {

        reviewPopup.style.display = "none";

        document.body.style.overflow = "auto";

    }

});

//===============================
// fillter projects by catgory
//===============================

const filterbtn=
      document.querySelectorAll(".filter-btn");
const projectcard=
      document.querySelectorAll(".project-card");

if(filterbtn){
    filterbtn.forEach(fbtn=>{

       fbtn.addEventListener("click",()=>{
         filterbtn.forEach(btn=>{
            btn.classList.remove("active");
        });
        fbtn.classList.add("active");

        const selectedFilter=fbtn.dataset.filter;
      if(projectcard){
         projectcard.forEach(card=>{
        const projectCategory =card.dataset.category;
        if(selectedFilter === "all" ||
            selectedFilter === projectCategory
        ){
         card.style.display="block";
        }
        else{
           card.style.display="none"; 
        }
       });
      };
       });
    
    });
};

//=========================
// display project Detille
//=========================

// Project information
const projects = {

    1: {
        title: "Modern Office Complex",
        image: "images/con3.jfif",
        location: "Addis Ababa, Ethiopia",
        category: "Buildings",
        description:
            "A modern commercial office complex designed with innovative architecture, high-quality construction materials and spacious working environments."
    },

    2: {
        title: "Main Highway Project",
        image: "images/con5.jfif",
        location: "Oromia, Ethiopia",
        category: "Infrastructure",
        description:
            "A quality road construction project designed to improve transportation, road safety and connectivity between communities."
    },

    3: {
        title: "Luxury Residential Villas",
        image: "images/con4.jfif",
        location: "Addis Ababa, Ethiopia",
        category: "Residential",
        description:
            "Modern residential villas combining comfort, elegant architecture and functional living spaces."
    }

};

// Get popup elements
const projectPopup = document.getElementById("projectPopup");

const closeProject = document.getElementById("closeProject");

const popupImage = document.getElementById("popupImage");

const popupTitle = document.getElementById("popupTitle");

const popupLocation = document.getElementById("popupLocation");

const popupCategory = document.getElementById("popupCategory");

const popupDescription = document.getElementById("popupDescription");


// Get all View Project buttons
const viewProjectButtons =
    document.querySelectorAll(".view-project-btn");

viewProjectButtons.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
        e.stopPropagation();
         const projectId = btn.dataset.id; 

    const project=projects[projectId];

     if (!project) {
            return;
        }

        // Display project information
        popupImage.src = project.image;
        popupImage.alt = project.title;

        popupTitle.textContent = project.title;

        popupLocation.textContent = project.location;

        popupCategory.textContent = project.category;

        popupDescription.textContent = project.description;

        // Show popup
        projectPopup.style.display = "flex";

        // Prevent background scrolling
        document.body.style.overflow = "hidden";
    });
   
});

//==================
// close popup 
//==================
closeProject.addEventListener("click",()=>{
     projectPopup.style.display = "none";
     document.body.style.overflow = "auto";
});
projectPopup.addEventListener("click", (event) => {

    if (event.target === projectPopup) {

        projectPopup.style.display = "none";

        document.body.style.overflow = "auto";

    }

});