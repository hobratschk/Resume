var bio = {
  "name" : "Blake Hobratschk",
  "role" : "Front-End Developer / Javascript",
  "contacts" : {
    "mobile" : "832-640-8157",
    "email" : "hobratschkbl@gmail.com",
    "location" : "Covington, LA",
    "github" : "https://github.com/hobratschk"
    },
  "welcomeMessage" : "Thank you for viewing my resum&#233. My recent projects, which I made as part of Udacity's coursewokr, are linked below. Please call or email if you have any questions.",
  "biopic" : "images/resume-img.jpg",
  "skills" : [
    "JavaScript",
    "Technical Support",
    "Technical Writing",
    "Collaboration"
  ],
  "display" : function () {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName, formattedRole);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMsgr.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedBioPic, formattedWelcomeMessage);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedContactLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedEmail, formattedMobile, formattedGithub, formattedContactLocation);
    $("#footerContacts").append(formattedEmail, formattedMobile, formattedGithub, formattedContactLocation);

    if(bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      for(index = 0; index < bio.skills.length; index++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[index]);
        $("#skills").append(formattedSkill);
      }
    }
  }
};

var projects = {
  "projects":[
    {
      "title":"Explore Dallas",
      "dates":"2018",
      "description":"I used Google Maps API to build a responsive and interactive app for exploring Dallas, TX. Please note, this is my current project, so I'm still building certain features.",
      "url": "Maps.API.Project/index.html",
      "images":[
        "images/dallas-skyline.jpg"
      ]
    },
    {
      "title":"Get To Da Wataa! A Frogger Imitation Game",
      "dates":"2017",
      "description":"I used a canvas and learned alot about rendering for this project. I had a lot of fun building this one. Watch out for the bugs.",
      "url": "getToTheWater/index.html",
      "images":[
        "images/wataa.jpg"
      ]
    },
    {
      "title":"Simple Click Game - With Sphynxes",
      "dates":"2017",
      "description":"I used knockout JS to create a simple click game. Choose the name of a cat, and click the picture for more cats. This allowed me a lot of practice with functions. Silly names and sphynxes await you!",
      "url": "knockout.cat-clicker/index.html",
      "images":[
        "images/sphynx_5.jpg"
      ]
    }
  ],

  "display": function () {
    for (index = 0; index < projects.projects.length; index++) {
      $("#projects").append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[index].title).replace("#", projects.projects[index].url);;
      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[index].dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[index].description);
      $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
      //nested for loop to display project images - must iterate over images because it's an index w/in each projects index - must specify index of projects.projects in loop, then specify index (represented here by i) of the images when declaring formattedImage - I have to append it within this for loop because formattedImage is not avail to the larger scope of the display function - but for some reason, it works whether I append formattedImage within the nested for loop, or if I append it with the rest of the formatted info.
      for (var i = 0; i < projects.projects[index].images.length; i++) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[index].images[i]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
};

var work = {
  "jobs":[
    {
      "employer":"PEC Safety",
      "title":"Tech Support Supervisor",
      "location":"Mandeville, LA",
      "dates":"2014-Present",
      "description": "Expanded department responsibilities to include system administration, 3 new software applications, and interdepartmental projects, increasing departmental productivity by 50%. Directed and performed system administration to create and modify web content in order to achieve data collection goals of over 40 major clients across over 8,000 contractors. Wrote and maintained 8 system training manuals and 17 standards of operation. Trained and coordinated a team of three technical support representatives to train over 12,000 external users across 7 software applications, maintaining 95% customer satisfaction ratings.",
      "url": "http://pecsafety.com/"
    },
    {
      "employer":"Christ Lutheran Church",
      "title":"Director of Education",
      "location":"San Antonio, TX",
      "dates":"2012-2013",
      "description":"Planned, wrote, and managed multiple education-related programs and events which individually involved up to 150 participants.	Recruited, trained, and managed over 45 volunteers for multiple programs and events, proportionately distributed workloads and catered to multiple scheduling conflicts. Gathered and analyzed feedback from over 100 individuals and surveys in order to alter programs so as to address evolving objectives. Taught history, ethics, and theology lessons to and handled crises for students ranging in age from 5 to 22 years old.",
      "url": "http://clcah.org/"
    }
  ],
      "display": function () {
          for (var index = 0; index < work.jobs.length; index++) {
            //create new div for work experience
            $("#workExperience").append(HTMLworkStart);
            //concat employer and title
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer).replace("#", work.jobs[index].url);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);
            //jQuery selecting every object with class work-entry - :last specifically appends formattedEmployerTitle to the last element with work-entry on page
            $(".work-entry:last").append(formattedEmployerTitle, formattedWorkLocation, formattedDates, formattedDescription);
        }
      }
    };

var education = {
  "schools":[
    {
      "name":"Boston College",
      "location":"Chestnut Hill, MA",
      "degree":"M.Ed.",
      "majors":["Education - GPA: 3.73"],
      "dates":"2010-2012",
      "url":"http://www.bc.edu/"
    },
    {
      "name":"Baylor University",
      "location":"Waco, TX",
      "degree":"BA, cum laude",
      "majors":["Religious Studies - GPA: 3.79"],
      "dates":"2005-2009",
      "url":"http://www.baylor.edu/"
    }
  ],
  "displayEdu": function () {
      for (var index = 0; index < education.schools.length; index++) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[index].name).replace("#", education.schools[index].url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[index].degree);
        //from helper.js we're adding HTMLschoolName and HTMLschoolDegree onto the same line and into a single variable (formattedSchoolDegree)- friggin kewl, bud
        var formattedSchoolDegree = formattedSchoolName + formattedDegree;
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[index].location);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[index].dates);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[index].majors);
        $(".education-entry:last").append(formattedSchoolDegree, formattedSchoolLocation, formattedDates, formattedMajor);
      }
    },
  "onlineCourses": [
    {
      "title":"Front-End Web Developer Nanodegree",
      "school":"Udacity",
      "focus":"Javascript",
      "dates":"2017-Present",
      "url":"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ],
    "displayOnline": function () {
      for (var index = 0; index < education.onlineCourses.length; index++) {
      var formattedOnlineSchool = HTMLonlineTitle.replace("%data%", education.onlineCourses[index].school).replace("#", education.onlineCourses[index].url);
      var formattedOnlineTitle = HTMLonlineSchool.replace("%data%", education.onlineCourses[index].title);
      var formattedOnlineSchoolTitle = formattedOnlineSchool + formattedOnlineTitle;
      var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[index].dates);
      var formattedOnlineFocus = HTMLonlineFocus.replace("%data%", education.onlineCourses[index].focus);
      $(".education-entry:last").append(HTMLonlineClasses, formattedOnlineSchoolTitle, formattedOnlineDates, formattedOnlineFocus);
    }
  },
  "display": function() {
    education.displayEdu();
    education.displayOnline();
  }
};

bio.display();
projects.display();
work.display();
education.display();

$("#mapDiv").append(googleMap);
