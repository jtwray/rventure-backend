exports.seed = function (knex) {
  return knex("listing").insert(
[
    {id:1,title:"Lake Front Dream Escape",price:"$98.13",landowner_id:28,photo:"https://i.imgur.com/zmbaXFD.jpg",address:"30 MEMORIAL DR",zip:" 02322",state:" MA",city:" AVON",lat:"-71.033226",lon:"42.121796"},
    {id:2,
    title:"Breathtaking Sunrises",price:"$112.78",landowner_id:59,photo:"https://imgur.com/qgRYDex",address:"250 HARTFORD AVE",zip:" 02019",state:" MA",city:" BELLINGHAM",lat:"-71.466995",lon:"42.114178"},
    {id:3,
    title:"Fresh Mountain Air",price:"$161.84",landowner_id:25,photo:"https://imgur.com/l94JiT9",address:"700 OAK ST",zip:" 02301",state:" MA",city:" BROCKTON",lat:"-71.057724",lon:"42.101124"},
    {id:5,
    title:"Clifftop Views and Rolling Hills",price:"$159.55",landowner_id:28,photo:"https://imgur.com/pbUQXCF",address:"591 MEMORIAL DR",zip:" 01020",state:" MA",city:" CHICOPEE",lat:"-72.57639",lon:"42.17348"},
    {id:7,
    title:"Wooded Wonderland Minutes from the Metro",price:"$69.33",landowner_id:10,photo:"https://i.imgur.com/hCA9ZwX.jpg",address:"137 TEATICKET HWY",zip:" 02536",state:" MA",city:" EAST FALMOUTH",lat:"-70.59611",lon:"41.56443"},
    {id:8,
    title:"Wilderness Vacation Miles from anyone",price:"$169.22",landowner_id:81,photo:"https://i.imgur.com/oGncYsR.jpg",address:"42 FAIRHAVEN COMMONS WAY",zip:" 02719",state:" MA",city:" FAIRHAVEN",lat:"-70.88628",lon:"41.644257"},
    {id:9,
    title:"Surfing Sand Dunes and Soaking up Sun Rays",price:"$218.02",landowner_id:87,photo:"https://i.imgur.com/bMPEl58.jpg",address:"374 WILLIAM S CANNING BLVD",zip:" 02721",state:" MA",city:" FALL RIVER",lat:"-71.161514",lon:"41.674385"},
    {id:10,
    title:"Four Wheel Drive Mud Retreat",price:"$179.94",landowner_id:15,photo:"https://i.imgur.com/jMozf8R.jpg",address:"121 WORCESTER RD",zip:" 01701",state:" MA",city:" FRAMINGHAM",lat:"-71.40022",lon:"42.29875"},
    {id:11,
    title:"Fresh Grown Fruit and Vegetables Mountain Hikes and Quiet Morning Coffees",price:"$154.56",landowner_id:17,photo:"https://i.imgur.com/1bC79NF.jpg",address:"677 TIMPANY BLVD",zip:" 01440",state:" MA",city:" GARDNER",lat:"-71.99177",lon:"42.549988"},
    {id:13,
    title:"Wide Open Spaces Super TALL Blue Skies Fresh Air",price:"$193.62",landowner_id:76,photo:"https://i.imgur.com/ZwXXHZf.jpg",address:"295 PLYMOUTH ST",zip:" 02338",state:" MA",city:" HALIFAX",lat:"-70.84345",lon:"41.996315"},
    {id:14,
    title:"River Life at its Best",price:"$137.42",landowner_id:65,photo:"https://i.imgur.com/27rhlxH.jpg",address:"1775 WASHINGTON ST",zip:" 02339",state:" MA",city:" HANOVER",lat:"-70.84535",lon:"42.147366"},
    {id:15,
    title:"Whitewater Rapids Fresh Morning Brew",price:"$260.39",landowner_id:33,photo:"https://i.imgur.com/53oXIGq.jpg",address:"280 WASHINGTON ST",zip:" 01749",state:" MA",city:" HUDSON",lat:"-71.56461",lon:"42.375977"},
    {id:17,
    title:"Breathtaking Sunrises",price:"$247.49",landowner_id:32,photo:"https://i.imgur.com/z5FnKQ0.jpg",address:"11 JUNGLE RD",zip:" 01453",state:" MA",city:" LEOMINSTER",lat:"-71.72751",lon:"42.49107"},
    {id:18,
    title:"Fresh Mountain Air",price:"$260.81",landowner_id:92,photo:"https://i.imgur.com/fqkyi8O.jpg",address:"301 MASSACHUSETTS AVE",zip:" 01462",state:" MA",city:" LUNENBURG",lat:"-71.756516",lon:"42.593716"},
    {id:19,
    title:"Towering Forest Brimming with Wild Life",price:"$186.82",landowner_id:66,photo:"https://i.imgur.com/Zq6sanZ.jpg",address:"780 LYNNWAY",zip:" 01905",state:" MA",city:" LYNN",lat:"-70.96315",lon:"42.45016"},
    {id:21,
    title:"Cabin Escape Just Above the Clouds",price:"$51.68",landowner_id:83,photo:"https://i.imgur.com/QeuTMAd.png",address:"830 CURRAN HWY",zip:" 01247",state:" MA",city:" NORTH ADAMS",lat:"-73.106476",lon:"42.679737"},
    {id:26,
    title:"Fresh Grown Fruit and Vegetables Mountain Hikes and Quiet Morning Coffees",price:"$127.90",landowner_id:49,photo:"https://i.imgur.com/jvJILEi.png",address:"200 OTIS ST",zip:" 01532",state:" MA",city:" NORTHBOROUGH",lat:"-71.65583",lon:"42.28852"},
    {id:27,
    title:"Bird Watchers Paradise (Twitchers Welcome)",price:"$257.76",landowner_id:7,photo:"https://i.imgur.com/OlTKNPt.png",address:"180 N KING ST",zip:" 01060",state:" MA",city:" NORTHAMPTON",lat:"-72.64154",lon:"42.34253"},
    {id:28,
    title:"Wide Open Spaces Super TALL Blue Skies Fresh Air",price:"$215.68",landowner_id:17,photo:"https://i.imgur.com/VlWGiIe.png",address:"555 S MAIN ST",zip:" 01364",state:" MA",city:" ORANGE",lat:"-72.30423",lon:"42.568398"},
    {id:29,
    title:"River Life at its Best",price:"$291.65",landowner_id:62,photo:"https://i.imgur.com/wAlSXth.png",address:"555 HUBBARD AVE",zip:" 01201",state:" MA",city:" PITTSFIELD",lat:"-73.196724",lon:"42.468338"},
    {id:31,
    title:"Lake Front Dream Escape",price:"$80.82",landowner_id:12,photo:"https://i.imgur.com/U6oPRwj.png",address:"301 FALLS BLVD",zip:" 02169",state:" MA",city:" QUINCY",lat:"-70.98604",lon:"42.238014"},
    {id:33,
    title:"Fresh Mountain Air",price:"$78.10",landowner_id:53,photo:"https://i.imgur.com/vXE4VRg.png",address:"450 HIGHLAND AVE",zip:" 01970",state:" MA",city:" SALEM",lat:"-70.934044",lon:"42.493847"},
    {id:34,
    title:"Towering Forest Brimming with Wild Life",price:"$285.68",landowner_id:65,photo:"https://i.imgur.com/FWGnQn6.png",address:"1180 FALL RIVER AVE",zip:" 02771",state:" MA",city:" SEEKONK",lat:"-71.326294",lon:"41.793045"},
    {id:35,
    title:"Clifftop Views and Rolling Hills",price:"$73.40",landowner_id:58,photo:"https://i.imgur.com/pm4hjoP.png",address:"1105 BOSTON RD",zip:" 01119",state:" MA",city:" SPRINGFIELD",lat:"-72.50814",lon:"42.13879"},
    {id:36,
    title:"Cabin Escape Just Above the Clouds",price:"$59.93",landowner_id:42,photo:"https://i.imgur.com/avgI4NE.png",address:"100 CHARLTON RD",zip:" 01566",state:" MA",city:" STURBRIDGE",lat:"-72.05778",lon:"42.12286"},
    {id:38,
    title:"Wilderness Vacation Miles from anyone",price:"$63.13",landowner_id:6,photo:"https://i.imgur.com/WkMRLA9.png",address:"333 MAIN ST",zip:" 01876",state:" MA",city:" TEWKSBURY",lat:"-71.25923",lon:"42.620525"},
    {id:40,
    title:"Four Wheel Drive Mud Retreat",price:"$174.70",landowner_id:69,photo:"https://i.imgur.com/oAVNf6n.png",address:"352 PALMER RD",zip:" 01082",state:" MA",city:" WARE",lat:"-72.28096",lon:"42.239468"},
    {id:41,
    title:"Fresh Grown Fruit and Vegetables Mountain Hikes and Quiet Morning Coffees",price:"$291.83",landowner_id:86,photo:"https://i.imgur.com/B208b09.png",address:"3005 CRANBERRY HWY",zip:" 02538",state:" MA",city:" EAST WAREHAM",lat:"-70.662926",lon:"41.75934"},
    {id:42,
    title:"Bird Watchers Paradise (Twitchers Welcome)",price:"$236.90",landowner_id:3,photo:"https://i.imgur.com/xx4cZRb.png",address:"250 STATE RTE 59",zip:" 10901",state:" NY",city:" AIRMONT",lat:"-74.13641",lon:"41.112392"}
    ,{id:45,
    title:"Whitewater Rapids Fresh Morning Brew",price:"$52.34",landowner_id:6,photo:"https://i.imgur.com/FZWis5M.png",address:"2055 NIAGARA FALLS BLVD",zip:" 14228",state:" NY",city:" AMHERST",lat:"-78.82229",lon:"43.011"},
    {id:46,
    title:"Lake Front Dream Escape",price:"$146.33",landowner_id:72,photo:"https://i.imgur.com/OiVtmvG.png",address:"101 SANFORD AVE",zip:" 12010",state:" NY",city:" AMSTERDAM",lat:"-74.17464",lon:"42.945038"},
    {id:49,
    title:"Towering Forest Brimming with Wild Life",price:"$149.84",landowner_id:82,photo:"https://i.imgur.com/oal0A1B.png",address:"6265 BROCKPORT SPENCERPORT RD",zip:" 14420",state:" NY",city:" BROCKPORT",lat:"-77.93182",lon:"43.1983"},
    {id:51,
    title:"Cabin Escape Just Above the Clouds",price:"$77.58",landowner_id:80,photo:"https://i.imgur.com/NAbRfc1.png",address:"3191 CO RD 10",zip:" 14424",state:" NY",city:" CANANDAIGUA",lat:"-77.245605",lon:"42.87586"},
    {id:52,
    title:"Wooded Wonderland Minutes from the Metro",price:"$221.26",landowner_id:8,photo:"https://i.imgur.com/syiM87E.png",address:"30 CATSKILL CMNS",zip:" 12414",state:" NY",city:" CATSKILL",lat:"-73.881584",lon:"42.21326"},
    {id:54,
    title:"Surfing Sand Dunes and Soaking up Sun Rays",price:"$123.55",landowner_id:62,photo:"https://i.imgur.com/W8EPbaU.png",address:"3018 EAST AVE",zip:" 13036",state:" NY",city:" CENTRAL SQUARE",lat:"-76.14007",lon:"43.284954"},
    {id:56,
    title:"Fresh Grown Fruit and Vegetables Mountain Hikes and Quiet Morning Coffees",price:"$122.73",landowner_id:85,photo:"https://i.imgur.com/cAcpkMt.png",address:"8064 BREWERTON RD",zip:" 13039",state:" NY",city:" CICERO",lat:"-76.12012",lon:"43.16176"}
    ,{id:60,
    title:"Whitewater Rapids Fresh Morning Brew",price:"$237.02",landowner_id:47,photo:"https://i.imgur.com/v4UVlvq.png",address:"85 CROOKED HILL RD",zip:" 11725",state:" NY",city:" COMMACK",lat:"-73.292786",lon:"40.813286"},
    {id:63,
    title:"Fresh Mountain Air",price:"$96.00",landowner_id:67,photo:"https://i.imgur.com/tXN6YmI.png",address:"2465 HEMPSTEAD TPKE",zip:" 11554",state:" NY",city:" EAST MEADOW",lat:"-73.54468",lon:"40.7247"},
    {id:64,
    title:"Towering Forest Brimming with Wild Life",price:"$102.41",landowner_id:19,photo:"https://i.imgur.com/oAVNf6n.png",address:"6438 BASILE ROWE",zip:" 13057",state:" NY",city:" EAST SYRACUSE",lat:"-76.05925",lon:"43.063206"},
    {id:65,
    title:"Clifftop Views and Rolling Hills",price:"$170.65",landowner_id:62,photo:"https://i.imgur.com/B208b09.png",address:"25737 US HWY 11",zip:" 13637",state:" NY",city:" EVANS MILLS",lat:"-75.841125",lon:"44.03924"},
    {id:68,
    title:"Wilderness Vacation Miles from anyone",price:"$178.72",landowner_id:86,photo:"https://i.imgur.com/xx4cZRb.png",address:"10401 BENNETT RD",zip:" 14063",state:" NY",city:" FREDONIA",lat:"-79.31044",lon:"42.455254"},
    {id:70,
    title:"Four Wheel Drive Mud Retreat",price:"$152.02",landowner_id:6,photo:"https://i.imgur.com/whv3jtM.png",address:"4300 LAKEVILLE RD",zip:" 14454",state:" NY",city:" GENESEO",lat:"-77.784775",lon:"42.799103"},
    {id:72,
    title:"Bird Watchers Paradise (Twitchers Welcome)",price:"$206.78",landowner_id:65,photo:"https://i.imgur.com/BvlrxK3.png",address:"311 US HWY 9W",zip:" 12077",state:" NY",city:" GLENMONT",lat:"-73.79052",lon:"42.605846"},
    {id:73,
    title:"Wide Open Spaces Super TALL Blue Skies Fresh Air",price:"$154.36",landowner_id:58,photo:"https://i.imgur.com/FZWis5M.png",address:"200 DUTCH MEADOWS LN",zip:" 12302",state:" NY",city:" GLENVILLE",lat:"-73.94523",lon:"42.8398"},
    {id:75,
    title:"Whitewater Rapids Fresh Morning Brew",price:"$129.18",landowner_id:18,photo:"https://i.imgur.com/OiVtmvG.png",address:"1549 US HWY 9",zip:" 12065",state:" NY",city:" HALFMOON",lat:"-73.74945",lon:"42.845123"},
    {id:76,
    title:"Lake Front Dream Escape",price:"$168.18",landowner_id:59,photo:"https://i.imgur.com/DoNiQTJ.png",address:"5360 SOUTHWESTERN BLVD",zip:" 14075",state:" NY",city:" HAMBURG",lat:"-78.86971",lon:"42.741455"}
    ,{id:77,
    title:"Breathtaking Sunrises",price:"$110.66",landowner_id:31,photo:"https://i.imgur.com/9wWTTgH.png",address:"103 N CAROLINE ST",zip:" 13350",state:" NY",city:" HERKIMER",lat:"-74.9938",lon:"43.023956"},
    {id:79,
    title:"Towering Forest Brimming with Wild Life",price:"$280.72",landowner_id:78,photo:"https://i.imgur.com/oal0A1B.png",address:"1400 CO RD 64",zip:" 14845",state:" NY",city:" HORSEHEADS",lat:"-76.85823",lon:"42.16002"},
    {id:81,
    title:"Cabin Escape Just Above the Clouds",price:"$264.59",landowner_id:18,photo:"https://i.imgur.com/PUI4rs8.png",address:"2 GANNETT DR",zip:" 13790",state:" NY",city:" JOHNSON CITY",lat:"-75.94906",lon:"42.115845"},
    {id:84,
    title:"Surfing Sand Dunes and Soaking up Sun Rays",price:"$292.61",landowner_id:85,photo:"https://i.imgur.com/NAbRfc1.png",address:"350 E FAIRMOUNT AVE",zip:" 14750",state:" NY",city:" LAKEWOOD",lat:"-79.29773",lon:"42.098442"},
    {id:87,
    title:"Bird Watchers Paradise (Twitchers Welcome)",price:"$194.68",landowner_id:79,photo:"https://i.imgur.com/syiM87E.png",address:"5783 S TRANSIT RD",zip:" 14094",state:" NY",city:" LOCKPORT",lat:"-78.69689",lon:"43.14414"},
    {id:89,
    title:"River Life at its Best",price:"$88.63",landowner_id:12,photo:"https://i.imgur.com/GcGYxEz.png",address:"425 STATE RTE 31",zip:" 14502",state:" NY",city:" MACEDON",lat:"-77.297",lon:"43.06974"},
    {id:91,
    title:"Lake Front Dream Escape",price:"$174.31",landowner_id:83,photo:"https://i.imgur.com/W8EPbaU.png",address:"200 SUNRISE MALL",zip:" 11758",state:" NY",city:" MASSAPEQUA",lat:"-73.43535",lon:"40.681034"},
    {id:92,
    title:"Breathtaking Sunrises",price:"$183.75",landowner_id:8,photo:"https://i.imgur.com/ngLMMXm.png",address:"43 STEPHENVILLE ST",zip:" 13662",state:" NY",city:" MASSENA",lat:"-74.876015",lon:"44.92533"},
    {id:93,
    title:"Fresh Mountain Air",price:"$176.82",landowner_id:47,photo:"https://i.imgur.com/cAcpkMt.png",address:"750 MIDDLE COUNTRY RD",zip:" 11953",state:" NY",city:" MIDDLE ISLAND",lat:"-72.94614",lon:"40.882267"},
    {id:95,
    title:"Clifftop Views and Rolling Hills",price:"$76.00",landowner_id:19,photo:"https://i.imgur.com/cxcbiTF.png",address:"3133 MAIN ST",zip:" 10547",state:" NY",city:" MOHEGAN LAKE",lat:"-73.86391",lon:"41.31467"},
    {id:96,
    title:"Cabin Escape Just Above the Clouds",price:"$111.44",landowner_id:85,photo:"https://i.imgur.com/qBWIokl.png",address:"288 LARKIN DR",zip:" 10950",state:" NY",city:" MONROE",lat:"-74.15016",lon:"41.320614"},
    {id:97,
    title:"Wooded Wonderland Minutes from the Metro",price:"$234.77",landowner_id:96,photo:"https://i.imgur.com/7yH4ksV.png",address:"41 ANAWANA LAKE RD",zip:" 12701",state:" NY",city:" MONTICELLO",lat:"-74.68092",lon:"41.670395"},
    {id:98,
    title:"Wilderness Vacation Miles from anyone",price:"$180.67",landowner_id:16,photo:"https://i.imgur.com/v4UVlvq.png",address:"4765 COMMERCIAL DR",zip:" 13413",state:" NY",city:" NEW HARTFORD",lat:"-75.30768",lon:"43.092762"},
    {id:99,
    title:"Surfing Sand Dunes and Soaking up Sun Rays",price:"$279.14",landowner_id:8,address:"1201 STATE RTE 300",zip:" 12550",state:" NY",city:" NEWBURGH",lat:"-74.0723",lon:"41.496624"},
    {id:100,
    title:"Four Wheel Drive Mud Retreat",price:"$290.48",landowner_id:70,address:"255 W MAIN ST",zip:" 06001",state:" CT",city:" AVON",lat:"-72.85602",lon:"41.813335"},
    {id:101,
    title:"Fresh Grown Fruit and Vegetables Mountain Hikes and Quiet Morning Coffees",price:"$102.29",landowner_id:66,photo:"https://imgur.com/l94JiT9",address:"120 COMMERCIAL PKWY",zip:" 06405",state:" CT",city:" BRANFORD",lat:"-72.831245",lon:"41.278526"},
    {id:102,
    title:"Bird Watchers Paradise (Twitchers Welcome)",price:"$201.46",landowner_id:67,photo:"https://imgur.com/hCA9ZwX",address:"1400 FARMINGTON AVE",zip:" 06010",state:" CT",city:" BRISTOL",lat:"-72.90152",lon:"41.698063"},
    {id:103,
    title:"Wide Open Spaces Super TALL Blue Skies Fresh Air",price:"$67.39",landowner_id:26,photo:"https://imgur.com/pbUQXCF",address:"161 BERLIN RD",zip:" 06416",state:" CT",city:" CROMWELL",lat:"-72.71462",lon:"41.607918"},
    {id:105,
    title:"Whitewater Rapids Fresh Morning Brew",price:"$191.85",landowner_id:8,photo:"https://i.imgur.com/W1HFYfS.jpg",address:"656 NEW HAVEN AVE",zip:" 06418",state:" CT",city:" DERBY",lat:"-73.05724",lon:"41.31217"},
    {id:106,
    title:"Lake Front Dream Escape",price:"$197.40",landowner_id:79,photo:"https://i.imgur.com/hCA9ZwX.jpg",address:"69 PROSPECT HILL RD",zip:" 06088",state:" CT",city:" EAST WINDSOR",lat:"-72.606895",lon:"41.922188"},
    {id:108,
    title:"Fresh Mountain Air",price:"$140.85",landowner_id:87,photo:"https://i.imgur.com/oGncYsR.jpg",address:"900 BOSTON POST RD",zip:" 06437",state:" CT",city:" GUILFORD",lat:"-72.67904",lon:"41.288532"},
    {id:110,
    title:"Clifftop Views and Rolling Hills",price:"$154.35",landowner_id:18,photo:"https://i.imgur.com/bMPEl58.jpg",address:"495 FLATBUSH AVE",zip:" 06106",state:" CT",city:" HARTFORD",lat:"-72.71262",lon:"41.742516"},
    {id:113,
    title:"Wilderness Vacation Miles from anyone",price:"$58.98",landowner_id:27,photo:"https://i.imgur.com/jMozf8R.jpg",address:"1365 BOSTON POST RD",zip:" 06460",state:" CT",city:" MILFORD",lat:"-73.03365",lon:"41.24055"},
    {id:114,
    title:"Surfing Sand Dunes and Soaking up Sun Rays",price:"$67.64",landowner_id:14,photo:"https://i.imgur.com/1bC79NF.jpg",address:"1100 NEW HAVEN RD",zip:" 06770",state:" CT",city:" NAUGATUCK",lat:"-73.02807",lon:"41.469112"},
    {id:116,
    title:"Fresh Grown Fruit and Vegetables Mountain Hikes and Quiet Morning Coffees",price:"$133.04",landowner_id:36,photo:"https://i.imgur.com/yhFYwHv.jpg",address:"164 DANBURY RD",zip:" 06776",state:" CT",city:" NEW MILFORD",lat:"-73.41712",lon:"41.552082"},
    {id:117,
    title:"Bird Watchers Paradise (Twitchers Welcome)",price:"$108.11",landowner_id:55,photo:"https://i.imgur.com/ZwXXHZf.jpg",address:"3164 BERLIN TPKE",zip:" 06111",state:" CT",city:" NEWINGTON",lat:"-72.721695",lon:"41.66243"},
    {id:118,
    title:"Wide Open Spaces Super TALL Blue Skies Fresh Air",price:"$50.36",landowner_id:29,photo:"https://i.imgur.com/27rhlxH.jpg",address:"474 BOSTON POST RD",zip:" 06256",state:" CT",city:" NORTH WINDHAM",lat:"-72.168",lon:"41.74574"}
    ,{id:119,
    title:"River Life at its Best",price:"$234.15",landowner_id:9,photo:"https://i.imgur.com/53oXIGq.jpg",address:"650 MAIN AVE",zip:" 06851",state:" CT",city:" NORWALK",lat:"-73.42471",lon:"41.152245"},
    {id:120,
    title:"Whitewater Rapids Fresh Morning Brew",price:"$224.77",landowner_id:73,photo:"https://i.imgur.com/SOamOMF.jpg",address:"680 CONNECTICUT AVE",zip:" 06854",state:" CT",city:" NORWALK",lat:"-73.44991",lon:"41.0946"},
    {id:121,
    title:"Lake Front Dream Escape",price:"$160.56",landowner_id:76,photo:"https://i.imgur.com/z5FnKQ0.jpg",address:"220 SALEM TPKE",zip:" 06360",state:" CT",city:" NORWICH",lat:"-72.13006",lon:"41.506138"},
    {id:123,
    title:"Fresh Mountain Air",price:"$142.72",landowner_id:20,photo:"https://i.imgur.com/fqkyi8O.jpg",address:"625 SCHOOL ST",zip:" 06260",state:" CT",city:" PUTNAM",lat:"-71.8886",lon:"41.924446"},
    {id:124,
    title:"Towering Forest Brimming with Wild Life",price:"$172.87",landowner_id:82,photo:"https://i.imgur.com/Zq6sanZ.jpg",address:"80 TOWN LINE RD",zip:" 06067",state:" CT",city:" ROCKY HILL",lat:"-72.658066",lon:"41.682217"},
    {id:125,
    title:"Clifftop Views and Rolling Hills",price:"$115.93",landowner_id:88,photo:"https://i.imgur.com/gNtMkpU.jpg",address:"465 BRIDGEPORT AVE",zip:" 06484",state:" CT",city:" SHELTON",lat:"-73.11237",lon:"41.289597"},
    {id:126,
    title:"Cabin Escape Just Above the Clouds",price:"$172.40",landowner_id:83,photo:"https://i.imgur.com/QeuTMAd.png",address:"235 QUEEN ST",zip:" 06489",state:" CT",city:" SOUTHINGTON",lat:"-72.87323",lon:"41.625"},
    {id:128,
    title:"Wilderness Vacation Miles from anyone",price:"$73.37",landowner_id:21,photo:"https://i.imgur.com/OWZxfJo.png",address:"970 TORRINGFORD ST",zip:" 06790",state:" CT",city:" TORRINGTON",lat:"-73.08114",lon:"41.820038"},
    {id:129,
    title:"Surfing Sand Dunes and Soaking up Sun Rays",price:"$162.78",landowner_id:39,photo:"https://i.imgur.com/AfAVj0R.png",address:"844 N COLONY RD",zip:" 06492",state:" CT",city:" WALLINGFORD",lat:"-72.81123",lon:"41.479355"},
    {id:130,
    title:"Four Wheel Drive Mud Retreat",price:"$54.87",landowner_id:19,photo:"https://i.imgur.com/VEyRRE1.png",address:"910 WOLCOTT ST",zip:" 06705",state:" CT",city:" WATERBURY",lat:"-73.0079",lon:"41.56631"},
    {id:131,
    title:"Fresh Grown Fruit and Vegetables Mountain Hikes and Quiet Morning Coffees",price:"$233.71",landowner_id:27,photo:"https://i.imgur.com/rhic9us.png",address:"155 WATERFORD PKWY N",zip:" 06385",state:" CT",city:" WATERFORD",lat:"-72.16108",lon:"41.368256"},
    {id:132,
    title:"Bird Watchers Paradise (Twitchers Welcome)",price:"$293.52",landowner_id:30,photo:"https://i.imgur.com/jvJILEi.png",address:"515 SAW MILL RD",zip:" 06516",state:" CT",city:" W HAVEN",lat:"-72.975624",lon:"41.269814"},
    {id:134,
    title:"River Life at its Best",price:"$293.24",landowner_id:18,photo:"https://i.imgur.com/OlTKNPt.png",address:"630 COLONIAL PROMENADE PKWY",zip:" 35007",state:" AL",city:" ALABASTER",lat:"-86.80368",lon:"33.236618"},
    {id:137,
    title:"Breathtaking Sunrises",price:"$97.06",landowner_id:53,photo:"https://i.imgur.com/VlWGiIe.png",address:"5560 MCCLELLAN BLVD",zip:" 36206",state:" AL",city:" ANNISTON",lat:"-85.81838",lon:"33.718227"},
    {id:140,
    title:"Clifftop Views and Rolling Hills",price:"$140.43",landowner_id:58,photo:"https://i.imgur.com/wAlSXth.png",address:"973 GILBERT FERRY RD SE",zip:" 35954",state:" AL",city:" ATTALLA",lat:"-86.09731",lon:"33.99695"},
    {id:142,
    title:"Wooded Wonderland Minutes from the Metro",price:"$105.02",landowner_id:37,photo:"https://i.imgur.com/Y7pxAI8.png",address:"701 MCMEANS AVE",zip:" 36507",state:" AL",city:" BAY MINETTE",lat:"-87.78915",lon:"30.88708"},
    {id:143,
    title:"Wilderness Vacation Miles from anyone",price:"$196.70",landowner_id:89,photo:"https://i.imgur.com/U6oPRwj.png",address:"750 ACADEMY DR",zip:" 35022",state:" AL",city:" BESSEMER",lat:"-87.00301",lon:"33.367256"},
    {id:144,
    title:"Surfing Sand Dunes and Soaking up Sun Rays",price:"$201.53",landowner_id:79,photo:"https://i.imgur.com/1yn4hYQ.png",address:"312 PALISADES BLVD",zip:" 35209",state:" AL",city:" BIRMINGHAM",lat:"-86.81934",lon:"33.468437"},
    {id:145,
    title:"Four Wheel Drive Mud Retreat",price:"$76.13",landowner_id:58,photo:"https://i.imgur.com/vXE4VRg.png",address:"1600 MONTCLAIR RD",zip:" 35210",state:" AL",city:" BIRMINGHAM",lat:"-86.72189",lon:"33.525524"}
    ,{id:147,
    title:"Bird Watchers Paradise (Twitchers Welcome)",price:"$223.46",landowner_id:31,photo:"https://i.imgur.com/FWGnQn6.png",address:"9248 PARKWAY E",zip:" 35206",state:" AL",city:" BIRMINGHAM",lat:"-86.700615",lon:"33.58701"},
    {id:148,
    title:"Wide Open Spaces Super TALL Blue Skies Fresh Air",price:"$96.95",landowner_id:51,photo:"https://i.imgur.com/pm4hjoP.png",address:"1972 US HWY 431",zip:" 35957",state:" AL",city:" BOAZ",lat:"-86.15639",lon:"34.214256"},
    {id:150,
    title:"Whitewater Rapids Fresh Morning Brew",price:"$171.11",landowner_id:99,photo:"https://i.imgur.com/avgI4NE.png",address:"2041 DOUGLAS AVE",zip:" 36426",state:" AL",city:" BREWTON",lat:"-87.06882",lon:"31.139597"},
    {id:151,
    title:"Lake Front Dream Escape",price:"$75.95",landowner_id:15,photo:"https://i.imgur.com/mEWaQ2o.png",address:"5100 US HWY 31",zip:" 35040",state:" AL",city:" CALERA",lat:"-86.74916",lon:"33.14756"},
    {id:157,
    title:"Wooded Wonderland Minutes from the Metro",price:"$241.69",landowner_id:42,photo:"https://i.imgur.com/WkMRLA9.png",address:"27520 US HWY 98",zip:" 36526",state:" AL",city:" DAPHNE",lat:"-87.908264",lon:"30.62564"},
    {id:161,
    title:"Fresh Grown Fruit and Vegetables Mountain Hikes and Quiet Morning Coffees",price:"$136.82",landowner_id:38,photo:"https://i.imgur.com/tXN6YmI.png",address:"4310 MONTGOMERY HWY",zip:" 36303",state:" AL",city:" DOTHAN",lat:"-85.44262",lon:"31.265938"},
    {id:162,
    title:"Bird Watchers Paradise (Twitchers Welcome)",price:"$221.56",landowner_id:93,photo:"https://i.imgur.com/oAVNf6n.png",address:"600 BOLL WEEVIL CIR",zip:" 36330",state:" AL",city:" ENTERPRISE",lat:"-85.86475",lon:"31.33349"},
    {id:164,
    title:"River Life at its Best",price:"$243.71",landowner_id:97,photo:"https://i.imgur.com/B208b09.png",address:"7100 AARON ARONOV DR",zip:" 35064",state:" AL",city:" FAIRFIELD",lat:"-86.91775",lon:"33.468178"},
    {id:165,
    title:"Whitewater Rapids Fresh Morning Brew",price:"$128.59",landowner_id:90,photo:"https://i.imgur.com/xx4cZRb.png",address:"10040 CO RD 48",zip:" 36532",state:" AL",city:" FAIRHOPE",lat:"-87.84938",lon:"30.523624"},
    {id:167,
    title:"Breathtaking Sunrises",price:"$111.70",landowner_id:65,photo:"https://i.imgur.com/whv3jtM.png",address:"3100 HOUGH RD",zip:" 35630",state:" AL",city:" FLORENCE",lat:"-87.6277",lon:"34.83612"}
    ,{id:168,
    title:"Fresh Mountain Air",price:"$57.38",landowner_id:81,photo:"https://i.imgur.com/BvlrxK3.png",address:"2200 S MCKENZIE ST",zip:" 36535",state:" AL",city:" FOLEY",lat:"-87.68332",lon:"30.377443"},
    {id:171,
    title:"Cabin Escape Just Above the Clouds",price:"$205.37",landowner_id:99,photo:"https://i.imgur.com/FZWis5M.png",address:"890 ODUM RD",zip:" 35071",state:" AL",city:" GARDENDALE",lat:"-86.82722",lon:"33.645164"},
    {id:174,
    title:"Surfing Sand Dunes and Soaking up Sun Rays",price:"$241.24",landowner_id:4,photo:"https://i.imgur.com/OiVtmvG.png",address:"170 FORT MORGAN RD",zip:" 36542",state:" AL",city:" GULF SHORES",lat:"-87.68442",lon:"30.26502"},
    {id:175,
    title:"Four Wheel Drive Mud Retreat",price:"$68.60",landowner_id:26,photo:"https://i.imgur.com/DoNiQTJ.png",address:"11697 US HWY 431",zip:" 35976",state:" AL",city:" GUNTERSVILLE",lat:"-86.284744",lon:"34.304108"}
    ,{id:179,
    title:"River Life at its Best",price:"$268.54",landowner_id:39,photo:"https://i.imgur.com/9wWTTgH.png",address:"209 LAKESHORE PKWY",zip:" 35209",state:" AL",city:" HOMEWOOD",lat:"-86.82564",lon:"33.446182"},
    {id:184,
    title:"Towering Forest Brimming with Wild Life",price:"$278.23",landowner_id:87,photo:"https://i.imgur.com/oal0A1B.png",address:"11610 MEMORIAL PKWY SW",zip:" 35803",state:" AL",city:" HUNTSVILLE",lat:"-86.56732",lon:"34.617184"},
    {id:185,
    title:"Clifftop Views and Rolling Hills",price:"$262.95",landowner_id:93,photo:"https://i.imgur.com/PUI4rs8.png",address:"2200 SPARKMAN DR NW",zip:" 35810",state:" AL",city:" HUNTSVILLE",lat:"-86.59372",lon:"34.763058"},
    {id:186,
    title:"Cabin Escape Just Above the Clouds",price:"$217.34",landowner_id:88,photo:"https://i.imgur.com/NAbRfc1.png",address:"330 SUTTON RD",zip:" 35763",state:" AL",city:" HAMPTON COVE",lat:"-86.48732",lon:"34.66002"},
    {id:187,
    title:"Wooded Wonderland Minutes from the Metro",price:"$154.04",landowner_id:94,photo:"https://i.imgur.com/syiM87E.png",address:"6140 UNIVERSITY DR NW",zip:" 35806",state:" AL",city:" HUNTSVILLE",lat:"-86.67574",lon:"34.74374"},
    {id:189,
    title:"Surfing Sand Dunes and Soaking up Sun Rays",price:"$292.38",landowner_id:67,photo:"https://i.imgur.com/GcGYxEz.png",address:"1625 PELHAM RD S",zip:" 36265",state:" AL",city:" JACKSONVILLE",lat:"-85.76169",lon:"33.782402"}
    ,{id:191,
    title:"Fresh Grown Fruit and Vegetables Mountain Hikes and Quiet Morning Coffees",price:"$204.91",landowner_id:45,photo:"https://i.imgur.com/W8EPbaU.png",address:"8551 WHITFIELD AVE",zip:" 35094",state:" AL",city:" LEEDS",lat:"-86.52081",lon:"33.56104"},
    {id:194,
    title:"River Life at its Best",price:"$58.08",landowner_id:54,photo:"https://i.imgur.com/ngLMMXm.png",address:"1970 S UNIVERSITY BLVD",zip:" 36609",state:" AL",city:" MOBILE",lat:"-88.16119",lon:"30.65303"},
    {id:195,
    title:"Whitewater Rapids Fresh Morning Brew",price:"$275.93",landowner_id:85,photo:"https://i.imgur.com/cAcpkMt.png",address:"6350 COTTAGE HILL RD",zip:" 36609",state:" AL",city:" MOBILE",lat:"-88.18902",lon:"30.640219"},
    {id:196,
    title:"Lake Front Dream Escape",price:"$63.63",landowner_id:38,photo:"https://i.imgur.com/cxcbiTF.png",address:"101 S BELTLINE HWY",zip:" 36606",state:" AL",city:" MOBILE",lat:"-88.12512",lon:"30.687267"},
    {id:198,
    title:"Fresh Mountain Air",price:"$86.98",landowner_id:98,photo:"https://i.imgur.com/qBWIokl.png",address:"5245 RANGELINE RD",zip:" 36619",state:" AL",city:" MOBILE",lat:"-88.16054",lon:"30.596573"},
    {id:199,
    title:"Towering Forest Brimming with Wild Life",price:"$245.07",landowner_id:69,photo:"https://i.imgur.com/7yH4ksV.png",address:"685 SCHILLINGER RD S",zip:" 36695",state:" AL",city:" MOBILE",lat:"-88.22547",lon:"30.676332"},
    {id:201,
    title:"Cabin Escape Just Above the Clouds",price:"$183.59",landowner_id:99,photo:"https://i.imgur.com/v4UVlvq.png",address:"10710 CHANTILLY PKWY",zip:" 36117",state:" AL",city:" MONTGOMERY",lat:"-86.13221",lon:"32.356533"},
    {id:202,
    title:"Wooded Wonderland Minutes from the Metro",price:"$272.26",landowner_id:62,photo:"https://i.imgur.com/zmbaXFD.jpg",address:"3801 EASTERN BLVD",zip:" 36116",state:" AL",city:" MONTGOMERY",lat:"-86.23511",lon:"32.328243"},
    {id:203,
    title:"Wilderness Vacation Miles from anyone",price:"$178.41",landowner_id:14,photo:"https://imgur.com/qgRYDex",address:"6495 ATLANTA HWY",zip:" 36117",state:" AL",city:" MONTGOMERY",lat:"-86.18596",lon:"32.382355"},
    {id:204,
    title:"Surfing Sand Dunes and Soaking up Sun Rays",price:"$139.26",landowner_id:17,photo:"https://imgur.com/l94JiT9",address:"851 ANN ST",zip:" 36107",state:" AL",city:" MONTGOMERY",lat:"-86.270966",lon:"32.370766"},
    {id:205,
    title:"Four Wheel Drive Mud Retreat",price:"$101.50",landowner_id:9,photo:"https://imgur.com/hCA9ZwX",address:"15445 STATE RTE 24",zip:" 35650",state:" AL",city:" MOULTON",lat:"-87.27387",lon:"34.49313"},
    {id:207,
    title:"Bird Watchers Paradise (Twitchers Welcome)",price:"$137.99",landowner_id:50,photo:"https://imgur.com/pbUQXCF",address:"5710 MCFARLAND BLVD",zip:" 35476",state:" AL",city:" NORTHPORT",lat:"-87.61144",lon:"33.235645"},
    {id:209,
    title:"River Life at its Best",price:"$126.80",landowner_id:40,photo:"https://i.imgur.com/W1HFYfS.jpg",address:"2900 PEPPERELL PKWY",zip:" 36801",state:" AL",city:" OPELIKA",lat:"-85.42067",lon:"32.635582"},
    {id:213,
    title:"Fresh Mountain Air",price:"$158.85",landowner_id:56,photo:"https://i.imgur.com/hCA9ZwX.jpg",address:"165 VAUGHAN LN",zip:" 35125",state:" AL",city:" PELL CITY",lat:"-86.27678",lon:"33.60811"},
    {id:218,
    title:"Wilderness Vacation Miles from anyone",price:"$199.43",landowner_id:79,photo:"https://i.imgur.com/oGncYsR.jpg",address:"1095 INDUSTRIAL PKWY",zip:" 36571",state:" AL",city:" SARALAND",lat:"-88.08297",lon:"30.797203"},
    {id:221,
    title:"Fresh Grown Fruit and Vegetables Mountain Hikes and Quiet Morning Coffees",price:"$279.13",landowner_id:35,photo:"https://i.imgur.com/bMPEl58.jpg",address:"7855 MOFFETT RD",zip:" 36575",state:" AL",city:" SEMMES",lat:"-88.22698",lon:"30.763655"}
    ,{id:225,
    title:"Whitewater Rapids Fresh Morning Brew",price:"$279.73",landowner_id:78,photo:"https://i.imgur.com/jMozf8R.jpg",address:"214 HAYNES ST",zip:" 35160",state:" AL",city:" TALLADEGA",lat:"-86.082886",lon:"33.43937"},
    {id:226,
    title:"Lake Front Dream Escape",price:"$91.71",landowner_id:84,photo:"https://i.imgur.com/1bC79NF.jpg",address:"1300 GILMER AVE",zip:" 36078",state:" AL",city:" TALLASSEE",lat:"-85.911766",lon:"32.546787"},
    {id:229,
    title:"Towering Forest Brimming with Wild Life",price:"$276.50",landowner_id:21,photo:"https://i.imgur.com/yhFYwHv.jpg",address:"1501 SKYLAND BLVD E",zip:" 35405",state:" AL",city:" TUSCALOOSA",lat:"-87.517044",lon:"33.16844"},
    {id:230,
    title:"Clifftop Views and Rolling Hills",price:"$199.10",landowner_id:2,photo:"https://i.imgur.com/ZwXXHZf.jpg",address:"3501 20TH AVE",zip:" 36854",state:" AL",city:" VALLEY",lat:"-85.15954",lon:"32.793484"},
    {id:233,
    title:"Wilderness Vacation Miles from anyone",price:"$240.03",landowner_id:64,photo:"https://i.imgur.com/27rhlxH.jpg",address:"2575 US HWY 43",zip:" 35594",state:" AL",city:" WINFIELD",lat:"-87.84023",lon:"33.93784"}
    ,{id:234,
    title:"Surfing Sand Dunes and Soaking up Sun Rays",price:"$88.52",landowner_id:48,photo:"https://i.imgur.com/53oXIGq.jpg",address:"19 COSTILLA BLVD",zip:" 81101",state:" CO",city:" ALAMOSA",lat:"-95.859146",lon:"37.47086"}
]
);
};
