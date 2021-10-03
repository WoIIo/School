//import { checkFunctionReturn} from './check_helper.js'
const {
  checkFunctionReturn
} = require('./check_helper')

// SKIP TO 'exercise1', here all data is defined which will be used by the exercises

const impacts = require('./datasets/meteor-impacts');
const courses = [{
    "id": 1098,
    "name": "webapps",
    "teacher": "pieter",
    "hours": 3
  },
  {
    "id": 3872,
    "name": "android",
    "teacher": "jens",
    "hours": 2
  },
  {
    "id": 7291,
    "name": "ios",
    "teacher": "steven",
    "hours": 2
  },
  {
    "id": 981,
    "name": "windows",
    "teacher": "joeri",
    "hours": 3
  }
];
//-------------------------------------------------------------------
//  START HERE
//-------------------------------------------------------------------
function exercise1() {
  // return the names of all the teachers  using forEach
  // (uncomment and complete the line below, in later exercises it 
  // won't simply be one liners, so you'll have to add code too)
  let courseNames = [];

  courses.forEach(course => courseNames.push(course.teacher));
  //courses.forEach(teacher => courseNames.push(teacher)); same ma beter
  return courseNames;
}

function exercise2() {
  // Use forEach to create and add objects with only the {id, name} of all the courses to this array
  let idNameArray = [];

  courses.forEach(course => idNameArray.push({
    id: course.id,
    name: course.name,
  }));
  // courses.forEach(({ zelfde ma schoner
  //   id,
  //   name
  // }) => idNameArray.push({
  //   id,
  //   name,
  // }))
  return idNameArray;
}

function exercise3() {
  // this is the kind of problem where we'd use the map function, 
  // rewrite exercise2 using map

  return courses.map(({
    id,
    name
  }) => {
    return {
      id,
      name
    }
  })
}

function exercise4() {
  // use forEach to only map the courses which take 3 hours each week
  // return an array with those courses
  let threehr = [];
  courses.forEach(course => {
    if (course.hours == 3) threehr.push(course)
  });
  return threehr;
}

function exercise5() {
  // once again, we have a built in version: 'filter', rewrite exercise4 using filter

  return courses.filter(course => {
    if (course.hours == 3) {
      return course
    }
  })
}

function exercise6() {
  // real power comes from combining all these operators, use filter and map to only get the names of the teachers
  // from courses that take 3 hours
  return courses.filter(course => course.hours == 3).map(course => course.teacher);
}

function exercise7() {
  // both map and filter work on one item at a time, sometimes you need to perform an operation
  // that needs to know about more, or all, items in the list
  // use forEach to return the course with the largest id
  let grootsteID = -1;
  let largestCourse;
  courses.forEach(course => {
    if (course.id > grootsteID) {
      largestCourse = course;
      grootsteID = course.id;
    }
  })
  return largestCourse;

}

function exercise8() {
  // once again, there is a built in way to do this: reduce, rewrite exercise7 using the reduce function

  return courses.reduce((acc, current) => {
    if (current.id > acc.id) return current;
    return acc;
  })

}

function exercise9() {
  // let's use the acc(umulator) as an accumulator, return the sum of all hours the courses take combined
  return courses.reduce((acc, current) => {
    return acc + current.hours;
  }, 0);
}

//-------------------------------------------------------------------
// from now on, primarly use map / filter / reduce to solve the exercises
// while everything can be solved using elaborate forEach's too, 
// that's not really the point of these exercises
//
// (it's possible you have to write helper functions btw,
// or rather, you'll be able to reuse parts of one solution in
// other exercies

function exercise10() {
  // return the name of the teacher of the course with the smallest id

  return courses.reduce((smallestID, course) => {
    if (course.id < smallestID.id) {
      return course
    };
    return smallestID
  }, {
    id: Number.MAX_VALUE
  }).teacher;
}

///////////////////////////////////////////////////////////
//
// STARTING THIS EXERCISE, USE impacts DATA NOT COURSES
//
///////////////////////////////////////////////////////////
function exercise11() {

  // return the amount of meteor impacts that have a geolocation
  
  //return impacts.filter(
}

function exercise12() {
  // return an array with the names of all the impacts that have no geolocation
  //  return impacts.filter(
}


// currying is a functional programming technique, simply put rather than creating a function with multiple
// arguments, you create a function with one argument, that returns a function that takes an argument, and so on
//
// so you wouldn't call it like fn(a, b, c), but rather fn(a)(b)(c)
// 
// this allows the partial application of a function's arguments. Simply put you can either pass all arguments
// a function is expecting and get the result, or pass a subset of those arguments and get a function back that's
// waiting for the rest of the arguments
//
// use this technique in the following exercise(s)

function _exercise13(impactSize) {
  // return an array with the names of all the impacts that have a greater mass than 'impactSize' (passed as parameter)
  // (you'll want to use parseInt())
}

function _exercise14(age) {
  // return an array with the names of all the impacts that happened after a certain year
}

function exercise15() {
  // return an object of the type { year: #impacts } for example {1951: 2, 2012: 3, ...} of all impacts that happened after 1945
}

function exercise16() {
  // return whether there are any impacts registered after 2012 (return true or false)
  // re-use any previously created curried function
  // use a builtin Array function which you didn't use before
}

function exercise17() {
  // return whether all impacts have a geolocation (return true or false)
  // re-use any previously created curried function
  // use a builtin Array function which you didn't use before
}

function _exercise18(id) {
  // return whether the impacts array contains an impact with the given id
  // ensure your filter predicate is re-usable, you'll want to use parseInt to parse the id
}


function exercise19() {
  // return an array containing all impact ids as numbers and sorted from smallest to largest
  // you'll want to use parseInt to parse the id
}

function exercise20() {
  // return an array containing the smallest and largest mass
  // you'll want to use parseInt to parse the id, don't use sort()
  // caution! some masses are not defined
}

//-------------------------------------------------------------------
//  DO NOT TOUCH ANYTHING BELOW THIS LINE - 
//  this checks the correct output of your functions
//-------------------------------------------------------------------

cont = checkFunctionReturn(exercise1, ["pieter", "jens", "steven", "joeri"]);
cont = cont && checkFunctionReturn(exercise2, [{
  "id": 1098,
  "name": "webapps"
}, {
  "id": 3872,
  "name": "android"
}, {
  "id": 7291,
  "name": "ios"
}, {
  "id": 981,
  "name": "windows"
}])
cont = cont && checkFunctionReturn(exercise3, [{
  "id": 1098,
  "name": "webapps"
}, {
  "id": 3872,
  "name": "android"
}, {
  "id": 7291,
  "name": "ios"
}, {
  "id": 981,
  "name": "windows"
}])
cont = cont && checkFunctionReturn(exercise4, [{
  "id": 1098,
  "name": "webapps",
  "teacher": "pieter",
  "hours": 3
}, {
  "id": 981,
  "name": "windows",
  "teacher": "joeri",
  "hours": 3
}])
cont = cont && checkFunctionReturn(exercise5, [{
  "id": 1098,
  "name": "webapps",
  "teacher": "pieter",
  "hours": 3
}, {
  "id": 981,
  "name": "windows",
  "teacher": "joeri",
  "hours": 3
}])
cont = cont && checkFunctionReturn(exercise6, ["pieter", "joeri"])
cont = cont && checkFunctionReturn(exercise7, {
  "id": 7291,
  "name": "ios",
  "teacher": "steven",
  "hours": 2
})
cont = cont && checkFunctionReturn(exercise8, {
  "id": 7291,
  "name": "ios",
  "teacher": "steven",
  "hours": 2
})
cont = cont && checkFunctionReturn(exercise9, 10);
cont = cont && checkFunctionReturn(exercise10, "joeri");
cont = cont && checkFunctionReturn(exercise11, 988);
cont = cont && checkFunctionReturn(exercise12, ["Bulls Run", "Clohars", "Jalanash", "Jemlapur", "Cumulus Hills 04075", "Maria Linden", "Natal", "Niger (L6)", "Niger (LL6)", "Dominion Range 03239", "Dominion Range 03240", "Talampaya"]);
let exercise13 = () => _exercise13(200000);
cont = cont && checkFunctionReturn(exercise13, ["Alfianello", "Allende", "Bjurböle", "Boguslavka", "Bruderheim", "Estherville", "Holbrook", "Homestead", "Jianshi", "Jilin", "Knyahinya", "Kunya-Urgench", "Millbillillie", "Mocs", "New Concord", "Norton County", "Ochansk", "Omolon", "Paragould", "Pultusk", "Putinga", "Saint-Séverin", "Sikhote-Alin", "Sterlitamak", "Suizhou"]);
let exercise14 = () => _exercise14(1920);
cont = cont && checkFunctionReturn(exercise14, ["Aarhus", "Abee", "Acapulco", "Adzhi-Bogdo (stone)", "Aguada", "Aioun el Atrouss", "Aïr", "Akaba", "Akwanga", "Akyumak", "Al Rais", "Al Zarnkh", "Alberta", "Alby sur Chéran", "Allende", "Almahata Sitta", "Alta'ameem", "Andreevka", "Andura", "Ankober", "Anlong", "Aomori", "Arbol Solo", "Archie", "Arroyo Aguiar", "Ash Creek", "Ashdon", "Athens", "Atoka", "Avanhandava", "Awere", "Aztec", "Bahjoi", "Bald Mountain", "Baldwyn", "Ban Rong Du", "Banten", "Barwell", "Bassikounou", "Baszkówka", "Battle Mountain", "Bawku", "Beardsley", "Beddgelert", "Bells", "Belville", "Benguerir", "Beni M'hira", "Benld", "Benoni", "Bensour", "Benton", "Berduc", "Béréba", "Berthoud", "Beyrout", "Bhawad", "Bhola", "Bilanga", "Binningup", "Birni N'konni", "Black Moshannan Park", "Bloomington", "Bo Xian", "Bogou", "Boriskino", "Boumdeid (2003)", "Boumdeid (2011)", "Bovedy", "Breitscheid", "Brient", "Bruderheim", "Bukhara", "Bulls Run", "Bunburra Rockhole", "Bununu", "Burnwell", "Bursa", "Buzzard Coulee", "Cali", "Campos Sales", "Çanakkale", "Canon City", "Capilla del Monte", "Carancas", "Ceniceros", "Centerville", "Chadong", "Chajari", "Changde", "Chaves", "Chela", "Chelyabinsk", "Chergach ", "Chernyi Bor", "Cherokee Springs", "Chervony Kut", "Chiang Khan", "Chicora", "Chisenga", "Chitado", "Chitenay", "Cilimus", "Claxton", "Coleman", "Conquista", "Crescent", "Dahmani", "Dashoguz", "Daule", "Denver", "Dergaon", "Desuri", "Devgaon", "Devri-Khera", "Dhajala", "Didim", "Distrito Quebracho", "Djermaia", "Djoumine", "Dong Ujimqin Qi", "Dongtai", "Dosso", "Douar Mghila", "Dowa", "Dresden (Ontario)", "Dubrovnik", "Dunbogan", "Dunhua", "Duwun", "Dwaleni", "Dyarrl Island", "Eagle", "Ehole", "Ekeby", "El Idrissia", "El Paso de Aguila", "El Tigre", "Elbert", "Elenovka", "Ellemeet", "Enshi", "Erakot", "Essebi", "Farmville", "Fayetteville", "Fenghsien-Ku", "Fermo", "Florence", "Forest Vale", "Forksville", "Fort Flatters", "Fuhe", "Fuyang", "Galim (a)", "Galim (b)", "Galkiv", "Gao-Guenie", "Garland", "Gashua", "Gasseltepaoua", "Geidam", "Git-Git", "Glanerbrug", "Glanggang", "Glatton", "Gorlovka", "Granes", "Grefsheim", "Grimsby", "Gualeguaychú", "Guangmingshan", "Guangnan", "Guangrao", "Guibga", "Guidder", "Gujargaon", "Gujba", "Gursum", "Gyokukei", "Hainaut", "Hallingeberg", "Hamlet", "Haripura", "Harleton", "Haverö", "Hedeskoga", "Hiroshima", "Hoima", "Hökmark", "Holetta", "Hotse", "Hoxie", "Huaxi", "Ibitira", "Ibrisim", "Ichkala", "Idutywa", "Iguaracu", "Ijopega", "Inner Mongolia", "Innisfree", "Ipiranga", "Ishinga", "Isthilart", "Itqiy", "Ivuna", "Jajh deh Kot Lalu", "Jalanash", "Jartai", "Jesenice", "Jiange", "Jilin", "Jodiya", "Johnstown", "Jolomba", "Juancheng", "Jumapalo", "Junan", "Juromenha", "Kabo", "Kaidun", "Kainsaz", "Kalaba", "Kamalpur", "Kandahar (Afghanistan)", "Kapoeta", "Kaprada", "Kaptal-Aryk", "Karatu", "Karewar", "Karloowala", "Karoonda", "Kasamatsu", "Kasauli", "Katagum", "Kavarpura", "Kayakent", "Kediri", "Kemer", "Kendleton", "Kendrapara", "Khanpur", "Khmelevka", "Khor Temiki", "Kidairat", "Kiel", "Kiffa", "Kilabo", "Kingai", "Kitchener", "Kobe", "Kokubunji", "Komagome", "Konovo", "Košice", "Krasnyi Klyuch", "Krymka", "Kukschin", "Kulak", "Kunashak", "Kunya-Urgench", "Kutais", "Kuznetzovo", "La Colina", "La Criolla", "Lahrauli", "Cumulus Hills 04075", "Långhalsen", "Lanxi", "Lanzenkirchen", "Laochenzhen", "Lavrentievka", "Leedey", "Leighlinbridge", "Lichtenberg", "Lillaverke", "Lishui", "Lohawat", "Lorton", "Lost City", "Louisville", "Łowicz", "Lua", "Lunan", "Lusaka", "Mabwe-Khoywa", "Machinga", "Macibini", "Madhipura", "Madiun", "Mafra", "Magombedze", "Mahadevpur", "Maigatari-Danduma", "Malaga", "Malakal", "Malampaka", "Malotas", "Malvern", "Mamra Springs", "Mangwendi", "Manych", "Mardan", "Maria Linden", "Maribo", "Maridi", "Marilia", "Maromandia", "Maryville", "Mason Gully", "Mayo Belwa", "Maziba", "Mbale", "Medanitos", "Meru", "Messina", "Mezel", "Mianchi", "Mifflin", "Mihonoseki", "Mike", "Millbillillie", "Miller (Arkansas)", "Min-Fan-Zhun", "Molteno", "Monahans (1998)", "Monte das Fortes", "Montferré", "Monze", "Moorleah", "Morávka", "Moss", "Mount Tazerzait", "Mtola", "Muraid", "Murchison", "Murray", "Muzaffarpur", "Nadiabondi", "Nagai", "Nakhon Pathom", "Nantong", "Naoki", "Naragh", "Narellan", "Nassirah", "Natal", "Neagari", "Nejo", "Neuschwanstein", "New Halfa", "New Orleans", "Niger (L6)", "Niger (LL6)", "Nikolaevka", "Nikolskoe", "Ningbo", "Ningqiang", "Noblesville", "Norton County", "Noventa Vicentina", "Noyan-Bogdo", "Nuevo Mercurio", "Numakai", "Nyaung", "Oesede", "Ohuma", "Ojuelos Altos", "Okabe", "Oldenburg (1930)", "Olivenza", "Olmedilla de Alarcón", "Omolon", "Orlando", "Oterøy", "Ouadangou", "Oued el Hadjar", "Oum Dreyga", "Ourique", "Padvarninkai", "Palca de Aparzo", "Palmyra", "Palolo Valley", "Dominion Range 03239", "Pantar", "Paragould", "Parambu", "Paranaiba", "Park Forest", "Parsa", "Pasamonte", "Patora", "Patrimonio", "Patti", "Patwar", "Pavel", "Pavlodar (stone)", "Pê", "Peace River", "Peckelsheim", "Peekskill", "Peña Blanca Spring", "Perpeti", "Pervomaisky", "Pesyanoe", "Pétèlkolé", "Phum Sambo", "Phuoc-Binh", "Piancaldoli", "Piplia Kalan", "Pitts", "Plantersville", "Pleşcoi", "Dominion Range 03240", "Pollen", "Pontlyfni", "Portales Valley", "Po-wang Chen", "Prambachkirchen", "Pribram", "Puerto Lápice", "Putinga", "Qidong", "Qingzhen", "Queen's Mercy", "Quija", "Raco", "Raghunathpura", "Rahimyar Khan", "Ramnagar", "Ramsdorf", "Rangala", "Ras Tanura", "Red Canyon Lake", "Reliegos", "Renca", "Repeev Khutor", "Revelstoke", "Rewari", "Uzcudun", "Richland Springs", "Rio Negro", "Rose City", "Ruhobobo", "Rumuruti", "Rupota", "Sabrum", "Saint-Séverin", "Salem", "Salzwedel", "Samelia", "San Juan Capistrano", "San Michele", "San Pedro de Quiles", "San Pedro Jacuaro", "Santa Cruz", "Santa Isabel", "Santa Lucia (2008)", "São Jose do Rio Preto", "Sayama", "Sazovice", "Schenectady", "Selakopi", "Seldebourak", "Semarkona", "Senboku", "Seoni", "Serra de Magé", "Sfax", "Sharps", "Sheyang", "Shikarpur", "Shuangyang", "Sikhote-Alin", "Silao", "Sinnai", "Sioux County", "Sivas", "Sixiangkou", "Soheria", "Sołtmany", "Songyuan", "Sopot", "Soroti", "St. Louis", "St.-Chinian", "Ste. Marguerite", "Sterlitamak", "Stratford", "St-Robert", "Success", "Suchy Dul", "Suizhou", "Sulagiri", "Sungach", "Sutter's Mill", "Sylacauga", "Tagish Lake", "Tahara", "Talampaya", "Tambakwatu", "Tamdakht", "Taonan", "Tatahouine", "Tathlith", "Tauk", "Tauti", "Thal", "Thika", "Thuathe", "Tianzhang", "Tilden", "Tillaberi", "Tirupati", "Tissint", "Tjerebon"]);
cont = cont && checkFunctionReturn(exercise15, {
  "1946": 4,
  "1947": 6,
  "1948": 3,
  "1949": 12,
  "1950": 10,
  "1951": 6,
  "1952": 5,
  "1953": 3,
  "1954": 5,
  "1955": 3,
  "1956": 8,
  "1957": 5,
  "1958": 2,
  "1959": 5,
  "1960": 4,
  "1961": 7,
  "1962": 6,
  "1963": 5,
  "1964": 6,
  "1965": 4,
  "1966": 4,
  "1967": 6,
  "1968": 5,
  "1969": 6,
  "1970": 7,
  "1971": 6,
  "1972": 2,
  "1973": 4,
  "1974": 7,
  "1975": 3,
  "1976": 10,
  "1977": 9,
  "1978": 3,
  "1979": 2,
  "1980": 5,
  "1981": 7,
  "1982": 2,
  "1983": 5,
  "1984": 7,
  "1985": 2,
  "1986": 7,
  "1987": 1,
  "1988": 4,
  "1989": 6,
  "1990": 7,
  "1991": 5,
  "1992": 3,
  "1993": 4,
  "1994": 6,
  "1995": 6,
  "1996": 3,
  "1997": 1,
  "1998": 8,
  "1999": 7,
  "2000": 3,
  "2001": 5,
  "2002": 10,
  "2003": 10,
  "2004": 5,
  "2006": 4,
  "2007": 8,
  "2008": 9,
  "2009": 4,
  "2010": 5,
  "2011": 4,
  "2012": 2,
  "2013": 1
});
cont = cont && checkFunctionReturn(exercise16, true);
cont = cont && checkFunctionReturn(exercise17, false);
let exercise18 = () => _exercise18(24015);
cont = cont && checkFunctionReturn(exercise18, false);
cont = cont && checkFunctionReturn(exercise19, [1, 2, 6, 10, 370, 379, 390, 392, 398, 417, 423, 424, 425, 426, 427, 432, 433, 446, 447, 448, 453, 454, 458, 461, 462, 463, 465, 466, 2276, 2278, 2284, 2290, 2294, 2295, 2296, 2298, 2301, 2302, 2304, 2305, 2313, 2318, 2320, 2325, 2329, 2340, 2345, 2346, 2353, 4883, 4884, 4885, 4888, 4893, 4899, 4900, 4903, 4905, 4906, 4907, 4910, 4913, 4917, 4922, 4925, 4926, 4928, 4934, 4935, 4936, 4937, 4938, 4942, 4944, 4946, 4947, 4948, 4949, 4954, 4957, 4974, 4975, 4976, 4977, 4984, 4986, 4993, 5005, 5009, 5011, 5018, 5021, 5023, 5024, 5026, 5028, 5029, 5032, 5034, 5035, 5037, 5039, 5040, 5041, 5042, 5043, 5045, 5051, 5056, 5059, 5060, 5063, 5064, 5065, 5068, 5071, 5072, 5076, 5090, 5093, 5097, 5098, 5110, 5111, 5112, 5113, 5114, 5117, 5121, 5128, 5133, 5134, 5135, 5140, 5156, 5163, 5165, 5169, 5175, 5177, 5178, 5181, 5183, 5185, 5186, 5187, 5200, 5249, 5250, 5251, 5252, 5253, 5260, 5264, 5265, 5291, 5292, 5293, 5295, 5296, 5306, 5307, 5308, 5313, 5314, 5315, 5316, 5320, 5321, 5322, 5325, 5328, 5329, 5330, 5331, 5332, 5334, 5338, 5339, 5340, 5341, 5342, 5344, 5345, 5349, 5355, 5356, 5357, 5364, 5374, 5383, 5395, 5397, 5401, 5403, 5418, 5451, 5465, 5470, 5474, 5476, 5477, 5496, 5500, 5504, 5511, 5513, 5514, 6603, 6604, 6621, 6634, 6642, 6649, 6660, 6664, 6693, 6694, 6696, 6698, 6699, 7640, 7642, 7649, 7652, 7656, 7657, 7658, 7659, 7661, 7706, 7707, 7708, 7718, 7722, 7723, 7725, 7728, 7731, 7736, 7743, 7745, 7749, 7750, 7752, 7754, 7755, 7757, 7758, 7760, 7774, 7775, 7776, 7777, 7807, 7819, 7822, 7823, 7824, 10019, 10033, 10038, 10039, 10041, 10042, 10043, 10044, 10049, 10051, 10055, 10059, 10074, 10075, 10078, 10079, 10080, 10081, 10086, 10088, 10091, 10107, 10111, 10119, 10120, 10123, 10163, 10164, 10166, 10177, 10836, 10838, 10839, 10840, 10846, 10848, 10849, 10850, 10851, 10854, 10860, 10861, 10866, 10870, 10914, 10917, 10919, 10923, 10924, 10926, 10930, 10936, 10948, 10949, 10956, 11196, 11206, 11207, 11208, 11426, 11429, 11432, 11435, 11436, 11437, 11439, 11440, 11442, 11443, 11448, 11449, 11450, 11464, 11465, 11466, 11467, 11468, 11472, 11479, 11485, 11824, 11829, 11830, 11842, 11848, 11852, 11855, 11859, 11869, 11870, 11875, 11878, 11883, 11884, 11889, 11893, 11894, 11895, 11901, 11904, 11913, 11915, 11916, 11986, 11989, 11992, 11993, 11994, 11995, 12000, 12003, 12004, 12027, 12028, 12037, 12039, 12043, 12049, 12053, 12056, 12058, 12063, 12065, 12067, 12068, 12069, 12072, 12074, 12078, 12079, 12085, 12086, 12087, 12171, 12173, 12198, 12199, 12202, 12203, 12207, 12209, 12210, 12213, 12214, 12218, 12220, 12221, 12222, 12227, 12228, 12229, 12230, 12231, 12232, 12236, 12238, 12240, 12241, 12243, 12245, 12246, 12251, 12253, 12256, 12258, 12260, 12262, 12263, 12264, 12266, 12268, 12270, 12275, 12276, 12282, 12284, 12286, 12288, 12289, 12291, 12294, 12296, 12297, 12298, 12299, 12300, 12301, 12303, 12305, 12306, 12307, 12308, 12309, 12316, 12321, 12325, 12326, 12332, 12335, 12336, 12342, 12343, 12344, 12353, 12355, 12357, 12363, 12364, 12368, 12369, 12370, 12373, 12377, 12379, 12381, 12382, 12383, 12384, 12385, 12390, 12392, 12394, 12395, 12396, 12408, 12433, 12434, 12435, 12451, 12455, 12456, 12461, 12464, 12465, 12466, 12740, 12743, 12748, 12749, 12755, 12756, 12759, 12760, 12765, 12769, 12772, 14646, 14650, 14652, 14655, 14659, 14661, 14664, 14670, 14675, 14678, 14708, 14711, 14716, 14718, 14721, 14724, 14753, 14754, 14755, 14756, 14757, 14759, 14764, 15370, 15371, 15372, 15379, 15380, 15382, 15383, 15386, 15387, 15393, 15394, 15395, 15397, 15400, 15401, 15402, 15403, 15405, 15409, 15414, 15418, 15419, 15421, 15422, 15424, 15426, 15429, 15430, 15436, 15438, 15443, 15446, 15447, 15451, 15453, 15454, 15455, 15467, 15469, 15470, 15485, 15486, 15489, 15491, 15492, 15495, 16626, 16627, 16628, 16629, 16631, 16632, 16634, 16635, 16636, 16640, 16643, 16645, 16692, 16696, 16697, 16700, 16701, 16703, 16707, 16709, 16711, 16713, 16715, 16717, 16719, 16720, 16725, 16726, 16727, 16729, 16733, 16736, 16737, 16738, 16740, 16742, 16747, 16759, 16762, 16766, 16804, 16805, 16820, 16841, 16851, 16874, 16875, 16882, 16885, 16887, 16889, 16890, 16892, 16893, 16898, 16899, 16902, 16903, 16904, 16907, 16908, 16909, 16912, 16914, 16922, 16923, 16927, 16934, 16935, 16941, 16945, 16950, 16953, 16954, 16960, 16966, 16968, 16970, 16974, 16975, 16976, 16977, 16980, 16981, 16982, 16983, 16984, 16985, 16988, 16989, 16994, 17922, 17930, 17933, 17934, 17935, 17936, 17938, 17959, 17960, 17969, 17970, 17979, 17988, 17989, 17990, 17994, 17995, 17996, 17997, 17998, 18000, 18002, 18009, 18012, 18013, 18015, 18019, 18026, 18030, 18033, 18034, 18042, 18045, 18046, 18050, 18052, 18055, 18058, 18062, 18068, 18069, 18072, 18073, 18074, 18077, 18079, 18082, 18093, 18098, 18101, 18102, 18103, 18106, 18108, 18109, 18110, 18112, 18116, 18118, 18171, 18173, 18175, 18176, 18177, 18179, 18180, 18181, 18782, 18786, 18792, 18793, 18797, 18798, 18799, 18800, 18801, 18804, 18808, 18809, 18811, 18812, 18813, 18816, 18822, 18831, 18832, 18834, 18835, 18837, 18846, 18849, 18851, 18853, 18858, 18860, 18865, 18874, 18876, 18879, 18883, 18887, 18888, 18899, 18901, 18902, 18905, 18907, 18908, 22357, 22358, 22360, 22361, 22363, 22368, 22371, 22376, 22384, 22385, 22386, 22387, 22390, 22392, 22394, 22395, 22396, 22398, 22584, 22585, 22586, 22587, 22589, 22590, 22592, 22593, 22597, 22599, 22602, 22603, 22611, 22614, 22637, 22640, 22641, 22642, 22766, 22773, 22780, 22782, 22783, 22791, 22792, 22793, 22796, 23081, 23082, 23083, 23087, 23089, 23090, 23091, 23092, 23093, 23097, 23099, 23101, 23102, 23103, 23107, 23111, 23114, 23115, 23128, 23130, 23161, 23164, 23165, 23171, 23176, 23187, 23188, 23190, 23192, 23455, 23457, 23458, 23460, 23472, 23473, 23476, 23481, 23483, 23487, 23495, 23496, 23500, 23501, 23502, 23504, 23508, 23509, 23512, 23521, 23525, 23529, 23530, 23531, 23534, 23582, 23583, 23584, 23586, 23593, 23594, 23603, 23606, 23611, 23613, 23614, 23616, 23617, 23619, 23621, 23626, 23645, 23660, 23661, 23663, 23667, 23668, 23670, 23671, 23712, 23713, 23717, 23724, 23726, 23728, 23729, 23732, 23733, 23736, 23737, 23738, 23741, 23745, 23760, 23773, 23776, 23778, 23782, 23784, 23789, 23791, 23795, 23801, 23873, 23884, 23885, 23887, 23888, 23897, 23898, 23908, 23976, 23984, 23989, 23998, 23999, 24004, 24009, 24011, 24012, 24019, 24140, 30443, 30448, 30740, 30751, 31282, 31302, 31315, 32531, 32591, 32592, 34063, 34489, 35465, 36591, 36592, 44714, 44876, 44882, 45817, 45976, 45977, 45984, 47347, 47350, 47351, 47355, 47357, 47361, 47362, 48653, 48654, 48691, 48915, 48951, 48954, 48973, 48975, 50693, 50909, 50911, 51559, 51589, 51706, 52090, 52412, 52843, 53502, 53653, 53654, 53810, 53829, 54493, 54719, 54823, 55529, 55584, 56133, 56729, 57165, 57167, 57168]);
cont = cont && checkFunctionReturn(exercise20, [1, 23000000]);