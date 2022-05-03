const lessons = [
    //lesson1
    ["sss","sf","afas","sasd","ff","asf","dfd","add","fdd","sd","aas","aad","asdf","sadas","saa","fdd","asd","sdfad","dssda","dasa","afasf","ssffs","dfff","dffdf","aad","ssafa","ddsa","afass","dads","adf","aas","sfaa","ff","dsf","dffd","dsafd","dfs","das","ddaa","daf","asasa"],
    //lesson2
    ["ljl","jkjčj","kjlkč","lljjj","čjll","jjčl","kkll","jjj","kjl","čkjkk","klčč","čkj","jljk","lkkl","čkj","lkjč","čjk","kkk","čjj","lkjkk","kjj","lkč","jkkj","jčjj","čjčj","čk","jll","kjl","kkč","lkkl","lkkjk","ll","čkjjč","kjčč","jk","llk","čjkkj","kččl","llčjj","kllj","člj"],
    //lesson3
    ["jsfja","ffs","dlk","klkk","ddlf","jsda","ksl","asdč","ajlk","aakf","kfl","kjl","ksdd","afljs","čaa","ajkdk","sfjaj","ss","kasl","dlas","kačd","ssdf","čaad","sjka","lflj","fčd","dkjj","jkk","čjk","kjj","sjfs","dadf","jjkl","kkdsk","jskj","dkkfj","jsča","fdflf","lkds"],
    //lesson4
    ["glh","dhfg","gjgj","ahhgg","sljg","gkaa","hk","jaf","gkhj","hčč","fkač","gčjg","asfh","lčf","dsl","hdll","lkl","shdg","hač","sklč","agl","ak","jghj","gf","dj","ghld","lj","asf","shdg","hgkh","hshlf","gl","fddk","dkhs","ds","hg","jfdj","hfg","hgg","halgg","gsg","gahhs"],
    //lesson5
    ["lslfa","fdf","čljč","sgk","jad","sžf","sžd","žžgg","žkd","jgžj","ddkks","dfg","žhž","lčgžf","ksd","gfls","sslja","flk","sdh","hsl","hgds","jkjč","ačh","hhfč","žlglž","hfk","žžgsa","čkakč","ahžkž","žahha","žjl","ddč","hkl","hjl","sk","hž","čfdž","ggžž","lžža","als","žkgg"],
    //lesson6
    ["FLJlH","fKA","hjg","čhlž","lh","Jkdč","Jgč","AaSH","GgAh","lk","aJgh","džž","fsda","čkkk","Kdjč","afaj","kčlž","fsf","lHka","fal","dFh","dddg","gčča","kjk","lk","jžH","KsD","lžg","ldd","gFs","Kasč","DsD","Ddakh","slH","AjlL","ka","Kkč","FLksG","gčd","DFgs","Jžč","Jdk","lLkaa"],
    //lesson7
    ["efQ","wjst","Te","qQds","etr","Htq","Laj","wSs","fer","Gqqt","čea","tqa","rwQR","Wqfwe","tJ","wh","tthek","taE","Qgk","tttl","kht","Esr","whč","fkgA","rw'a","eslT","eWq","tfer","TQd","Qqj","rdTw","khQq","tWrQJ","rAq","Qqg","EKEr","age","rretW","eF","tdt","ear","rwgqg"],
    //lesson8
    ["zžPz","ipoU","ouoT","ppl","jouq","uuu","žiOf","uza","Aui","Pple","ppPž","zeu","keGii","uil","roz","hij","iUoP","zfiu","uRuf","uDU","twfu","iJR","uO","pžif","RUr","ifčUp","iozg","loaz","HawsQ","zfop","dGiz","rqt","uip","oouD","rkul","zoz","hQzp","iop","uuog","zza","oQoji"],
    //lesson9
    ["xbxip","ebu","ltoiD","pyCQv","FCf","ucyt","qcy","vbbX","yfxTw","bXv","cvf","XvbB","Fbcx","rby","yi","IyP","wcd","žvHuo","xbiy","pfL","yvrvx","xL","yLXd","vxb","cdkb","KQwy","pxyvc","Cy","cao","ievls","btJ","kGWC","HqX","yaxvx","žRcy","gyb","ydb","vvčP","ycb","sxJc"],
    //lesson10
    ["Mar",".uft","m,v","raOd","nvlf","iyymH","Mdn,","k.dA","ngY.","r,vme","bmrg","kjlE","nuImW","Ct","n,","'FM","-Ni","gsen",";m",".p-,","tyr","uPp","qn.p","i.p","Q.,T","ms,e",",mfY","m-.","-.tm,","mN",",mUm","Mpxjm","kcF",".yMn.",".-s",".jmhm","nn","x-V","snEE","Rbno",".qh."],
    //lesson11
    ["-1-","oC4k","i5","2y4vw","l4","1412","42U","4-1t","dKfj","15R2","č.3","i-q","R,11","232pz","42","34rl","45r","l5č4","2223k","sc","E241","t12","4čo","bgO","4.5U","huG","1yu3n","5nYM3","u,11n","zlG","3zVO","-m5č","e22","ž-4k","jy1c","3s3","e2S5","35N","23l4","c1bq","23z15"],
    //lesson12
    ["96939","978ž","hn7z","g.f9","A0a",".v9S","59?5h","058","jP9O","?0BX","th1n","q.c","č6p","6y","77n8","0A","s8","8Scy0","zrm","c7l","Oi","7m89","z99L","4077h","Vq8n",".nz","č8","gd08n","8rwL","k96","08t","760","6ri","88ym9","77ožz","G8K","H8e7","P0?","X6s90","649C","69Z8W"],
    //final
    [
        "akord",
        "angel",
        "arhiv",
        "arzen",
        "asket",
        "balet",
        "balon",
        "banjo",
        "barje",
        "baron",
        "bedro",
        "blago",
        "blato",
        "bledo",
        "bojna",
        "bojna",
        "bolan",
        "borec",
        "boren",
        "borne",
        "borza",
        "botra",
        "breja",
        "breza",
        "čekan",
        "čisto",
        "dalje",
        "deblo",
        "delen",
        "demon",
        "denar",
        "dlaka",
        "dober",
        "dober",
        "dobre",
        "dobre",
        "dohod",
        "dojka",
        "dokaj",
        "donos",
        "dosti",
        "dotok",
        "drevo",
        "ekran",
        "garje",
        "glava",
        "globa",
        "gorat",
        "grade",
        "graje",
        "greda",
        "greti",
        "hotel",
        "hrast",
        "idiot",
        "iznad",
        "izven",
        "izvod",
        "jalov",
        "jasen",
        "jokav",
        "kader",
        "kakor",
        "kalij",
        "kamen",
        "kamor",
        "karat",
        "karta",
        "kitov",
        "klada",
        "koder",
        "komar",
        "kopel",
        "korak",
        "kreda",
        "krona",
        "krsta",
        "kupna",
        "lajež",
        "laket",
        "lapor",
        "lažen",
        "leden",
        "ledja",
        "lesti",
        "letak",
        "ležaj",
        "ležaj",
        "lijak",
        "liter",
        "litre",
        "lopar",
        "maslo",
        "mejna",
        "merit",
        "metal",
        "meter",
        "metla",
        "metre",
        "mezda",
        "miner",
        "miren",
        "miren",
        "mleko",
        "močan",
        "močna",
        "moden",
        "modna",
        "modro",
        "molek",
        "moten",
        "naboj",
        "nabor",
        "nagel",
        "naglo",
        "najem",
        "najet",
        "nakup",
        "nalet",
        "nalog",
        "napis",
        "narek",
        "nasip",
        "nasip",
        "navoj",
        "nečak",
        "nekam",
        "nekdo",
        "nekod",
        "nemir",
        "nerad",
        "nered",
        "nomad",
        "norma",
        "notes",
        "oblat",
        "obrat",
        "obrat",
        "obraz",
        "obred",
        "ocean",
        "ocena",
        "odhod",
        "oditi",
        "odkar",
        "odmor",
        "odnos",
        "odpor",
        "odtis",
        "odtok",
        "odziv",
        "oglas",
        "oklep",
        "okraj",
        "oliva",
        "opiti",
        "orkan",
        "oster",
        "ostra",
        "paste",
        "pelod",
        "pirat",
        "pisan",
        "plaho",
        "ploha",
        "podel",
        "poiti",
        "poker",
        "polet",
        "polom",
        "pomol",
        "poraz",
        "porod",
        "potem",
        "prati",
        "preko",
        "preža",
        "prost",
        "proti",
        "proza",
        "proza",
        "rakov",
        "rasti",
        "raven",
        "ravno",
        "razen",
        "reden",
        "redko",
        "resno",
        "ritem",
        "robat",
        "robat",
        "robec",
        "rogat",
        "rojak",
        "rokav",
        "rokav",
        "roman",
        "rosen",
        "rovka",
        "sadje",
        "salva",
        "salve",
        "sanje",
        "saten",
        "satir",
        "satir",
        "scene",
        "sedaj",
        "sekta",
        "senat",
        "senat",
        "sence",
        "siten",
        "slava",
        "slave",
        "sloga",
        "smola",
        "sneti",
        "sneti",
        "sorta",
        "speti",
        "spite",
        "stare",
        "stari",
        "stark",
        "stark",
        "stena",
        "stepa",
        "store",
        "stoti",
        "strah",
        "stran",
        "strop",
        "stvar",
        "table",
        "tabor",
        "tabor",
        "tajen",
        "talen",
        "talon",
        "tanek",
        "teloh",
        "temno",
        "tempo",
        "tenis",
        "tenka",
        "tesar",
        "tesno",
        "tiger",
        "tisoč",
        "tisto",
        "tkivo",
        "tnalo",
        "tolpa",
        "topel",
        "topla",
        "torba",
        "trans",
        "trava",
        "trden",
        "trend",
        "tresk",
        "treti",
        "trite",
        "tropi",
        "trska",
        "trske",
        "tujka",
        "tukaj",
        "ubran",
        "urban",
        "varen",
        "varno",
        "vedno",
        "vedro",
        "vezni",
        "vihar",
        "viola",
        "vitez",
        "vlaga",
        "vloga",
        "voden",
        "vogal",
        "vojak",
        "vojna",
        "volan",
        "volja",
        "volna",
        "vrata",
        "vrsta",
        "vzeti",
        "zapor",
        "zebra",
        "zidan",
        "zmeda",
        "žalen",
        "želja",
        "žepar",
        "žilav",
        "žival",
        "david",
    ],
]

export default lessons;