var bio = {
  "name" : "Blake Hobratschk",
  "role" : "JavaScript Programmer",
  "contacts" : {
    "mobile" : "832-640-8157",
    "email" : "hobratschkbl@gmail.com",
    "location" : "Covington, LA",
    "github" : "https://github.com/hobratschk"
    },
  "welcomeMessage" : "Thank you for viewing my profile. Obviously, please contact me if you have any interest in or questions regarding my resum&#233.",
  "biopic" : "images/resume-img.jpg",
  "skills" : [
    "JavaScript",
    "Technical Writing",
    "Tech Support"
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
      "title":"Project 1",
      "dates":"2017",
      "description":"Thorough description of project 1.",
      "images":[
        "images/learn-javascript.jpg"
      ]
    },
    {
      "title":"Project 2",
      "dates":"2017",
      "description":"Thorough description of project 2.",
      "images":[
        "images/JShero.jpg"
      ]
    }
  ],
  "display": function () {
    for (index = 0; index < projects.projects.length; index++) {
      $("#projects").append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[index].title);
      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[index].dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[index].description);
      $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
      //nested for loop to display project images - must iterate over images because it's an index w/in each projects index - must specify index of projects.projects in loop, then specify index (represented here by i) of the images when declaring formattedImage - I have to append it within this for loop because formattedImage is not avail to the larger scope of the display function - but for some reason, it works whether I append formattedImage within the nested for loop, or if I append it with the rest of the formatted info. Either way it works. Reviewer, please help me out here and briefly explain in review, thanks! :)
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
      "dates":"2014-Current",
      "description": "Wrote and supervised the production of multiple training manuals for Technical Support Department (Tier 1) in order to ensure internal efficiency and accuracy in data management and customer service. Professionally and patiently trained over 650 contractors to use PEC databases and software applications in order to comply with operator-specific requirements. Provided 24x7 support for a software program which managed personnel hours for over 30 oil processing facilities for BHP Billiton.",
      "url": "http://pecsafety.com/"
    },
    {
      "employer":"Christ Lutheran Church",
      "title":"Director of Education",
      "location":"San Antonio, TX",
      "dates":"2012-2013",
      "description":"Balanced institutional effectiveness and flexibility by designing an annual volunteer schedule then recruiting, training, and managing over 45 volunteers for multiple programs and events. Developed, wrote, and managed multiple programs which individually involved up to 150 people. Gathered and analyzed feedback from over 100 individuals and surveys in order to alter programming so as to address evolving objectives. Taught culturally appropriate history, ethics, and theology lessons to and handled crises involving numerous clients ranging in age from 5 to 22 years old.",
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
      "majors":["Education"],
      "dates":"2010-2012",
      "url":"http://www.bc.edu/"
    },
    {
      "name":"Baylor University",
      "location":"Waco, TX",
      "degree":"BA, cum laude",
      "majors":["Religious Studies"],
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
      "focus":"JavaScript",
      "dates":"2016-2017",
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
