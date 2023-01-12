"use strict"

var e = React.createElement;

const members = [
  {img: "static/Joel_Adams.jpg", nameLink: "http://www.calvin.edu/~adams", name: "Joel Adams",
  collegeLink: "http://www.calvin.edu/", college: "Calvin College"},

  {name: "Jeannie Albrecht", nameLink: null, img: null,
   college: "Williams College", collegeLink: null},

  {img: "static/Valerie-Barr.jpg", nameLink: "https://vbarr4.github.io/", name: "Valerie Barr",
  collegeLink: "https://www.bard.edu/", college: "Bard College"},

  {img: "static/alyce_brady.jpg", nameLink: "http://max.cs.kzoo.edu/~abrady/", name: "Alyce Brady",
  collegeLink: "http://www.kzoo.edu/", college: "Kalamazoo College"},

  {name: "Grant Braught", nameLink: null, img: null,
   college: "Dickinson College", collegeLink: null},

  {img: "static/amy_briggs.jpg", nameLink: "http://go.middlebury.edu/briggs", name: "Amy Briggs",
  collegeLink: "http://www.middlebury.edu/", college: "Middlebury College" },

  {name: "America Chambers", nameLink: null, img: null,
   college: "University of Puget Sound", collegeLink: null},

  {name: "Yi Chen", nameLink: null, img: null,
   college: "Pomona College", collegeLink: "http://www.pomona.edu/"},

  {img: "static/janet_davis.jpg", nameLink: "http://cs.whitman.edu/~davisj/", name: "Janet Davis",
  collegeLink: "http://www.whitman.edu/", college: "Whitman College"},

  {img: "static/michael_jipping.jpg", nameLink: "https://hope.edu/directory/people/jipping-michael/index.html", name: "Michael Jipping",
  collegeLink: "http://www.hope.edu/", college: "Hope College" },

  {img: "static/deepak_kumar.jpg", nameLink: "https://cs.brynmawr.edu/~dkumar/", name: "Deepak Kumar",
  collegeLink: "http://www.brynmawr.edu/", college: "Bryn Mawr College"},

  {img: "static/andrea_lawrence.jpg", nameLink: "https://www.spelman.edu/academics/majors-and-programs/computer-and-information-sciences/faculty/andrea-lawrence", name: "Andrea Lawrence",
  collegeLink: "http://www.spelman.edu/", college: "Spelman College"},

  {name: "David Liben-Nowell", img: null, nameLink: null,
  college: "Carleton College", collegeLink: null},

  {name: "Bruce Maxwell", img: null, nameLink: null,
  college: "Colby College", collegeLink: null},

  {img: "static/lisa_meeden.jpg", nameLink: "https://www.cs.swarthmore.edu/~meeden/", name: "Lisa Meeden",
  collegeLink: "http://www.swarthmore.edu/", college: "Swarthmore College"},

  {img: "static/takis_metaxas.jpeg", nameLink: "http://cs.wellesley.edu/~pmetaxas", name: "Takis Metaxas",
  collegeLink: "http://www.wellesley.edu/", college: "Wellesley College" },

  {name: "Darakhshan Mir", nameLink: null, img: null,
   college: "Bucknell University", collegeLink: null},

  {name: "Peter-Michael Osera", nameLink: null, img: null,
   college: "Grinnell College", collegeLink: "https://www.grinnell.edu/"},

  {name: "Raghu Ramanujan", nameLink: "https://www.davidson.edu/people/raghu-ramanujan", 
  img: "static/raghu_ramanujan.jpg", college: "Davidson College", 
  collegeLink: "https://www.davidson.edu/"},

  {img: "static/david_reed.jpg", nameLink: "http://www.creighton.edu/~davereed", name: "David Reed",
  collegeLink: "http://www.creighton.edu/", college: "Creighton University"},

  {img: "static/brad_richards.jpg", nameLink: "http://www.cs.ups.edu/~brichards", name: "Brad Richards",
  collegeLink: "http://www.ups.edu/", college: "University of Puget Sound"},

  {name: "Paul Ruvolo", img: null, nameLink: null,
   college: "Olin College", collegeLink: null},

  {name: "Karl Schmitt", img: null, nameLink: null,
   college: "Trinity Christian College", collegeLink: null},

  {name: "Cynthia Taylor", img: null, nameLink: null,
   college: "Oberlin College", collegeLink: null},

  {name: "Richard Wicentowski", img: null, nameLink: null,
   college: "Swarthmore College", collegeLink: "https://www.swarthmore.edu/"},

  {name: "Rebecca Wright", img: "static/rebecca_wright.jpeg",
   nameLink: "https://www.cs.columbia.edu/~rwright/",
   college: "Barnard College", collegeLink: "https://barnard.edu/"},

]

const emeriti = [

  {img: "static/doug_baldwin.jpeg", nameLink: "https://www.geneseo.edu/math/baldwin", name: "Doug Baldwin",
  collegeLink: "http://www.geneseo.edu/", college: "SUNY Geneseo"},

  {img: "static/kim_bruce.jpg", nameLink: "http://www.cs.pomona.edu/~kim", name: "Kim Bruce",
  collegeLink: "http://www.pomona.edu/", college: "Pomona College"},

  {img: "static/bob_cupper.jpg", nameLink: null, name: "Bob Cupper",
  collegeLink: null, college: "Allegheny College"},

  {img: "static/andrea_danyluk.jpg", nameLink: "http://www.cs.williams.edu/~andrea/", name: "Andrea Danyluk",
  collegeLink: "http://www.williams.edu/", college: "Williams College"},

  {img: "static/scot_drysdale.jpg", nameLink: "http://www.cs.dartmouth.edu/~scot/", name: "Scot Drysdale",
  collegeLink: "http://www.dartmouth.edu/", college: "Dartmouth College"},

  {img: null, nameLink: null, name: "Norm Gibbs",
  collegeLink: null, college: "Bowdoin College" },

  {img: "static/max_hailperin.webp", nameLink: "http://www.gac.edu/~max", name: "Max Hailperin",
  collegeLink: "http://www.gac.edu/", college: "Gustavus Adolphus College"},

  {img: "static/rhys_jones.jpg", nameLink: "http://www.seas.gwu.edu/~rhyspj", name: "Rhys Price Jones",
  collegeLink: "http://www.cs.gwu.edu/", college: "George Washington University"},

  {name: "Charles Kelemen", nameLink: "https://www.cs.swarthmore.edu/~cfk/",
   img: "static/kelemen.jpeg",
   college: "Swarthmore College", collegeLink: "https://www.swarthmore.edu/"},

  {img: "static/bob_noonan.jpg", nameLink: null, name: "Bob Noonan",
  collegeLink: null, college: "William and Mary" },

  {img: null, nameLink: null, name: "Jeff Parker",
  collegeLink: null, college: "Amherst College" },

  {img: "static/allen_tucker.jpeg", nameLink: "https://www.bowdoin.edu/profiles/faculty/allen/index.html", name: "Allen Tucker",
  collegeLink: "https://www.bowdoin.edu/index.html", college: "Bowdoin College"},

  {img: "static/henry_walker.gif", nameLink: "http://www.cs.grinnell.edu/~walker/", name: "Henry M. Walker",
  collegeLink: "https://www.grinnell.edu/", college: "Grinnell College" },
]

function MemProfile (props) {
    var elts = []
    var image = null;
    if (props.img) {
      image = e('img', {src: props.img, alt: props.name}, null);
      elts.push(e('div', {className: "picCont"}, image));
    } else {
      image = e('img', {src: "static/user.png", alt: props.name}, null);
      elts.push(e('div', {className: "picCont"}, image));
    }
    if (props.nameLink) {
      elts.push(e('a', {href: props.nameLink, target: "_blank"}, props.name));
    } else {
      elts.push(e('p', null, props.name));
    }
    if (props.collegeLink) {
      elts.push(e('a', {href: props.collegeLink, target: "_blank"}, props.college));
    } else {
      elts.push(e('p', null, props.college));
    }
    return e('div', {className: "memProfile"}, elts);
  }

function LacsMembers (props) {
  var members = [];
  for (var elt in props) {
    members.push(MemProfile(props[elt]));
  }
  return e('div', {className: "memList"}, members)
}

ReactDOM.render(LacsMembers(members), document.querySelector("#members"));
ReactDOM.render(LacsMembers(emeriti), document.querySelector("#emeriti"));
