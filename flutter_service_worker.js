'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/dsc.png": "bd954ceeeb42b91899ebe1c3b0d79850",
"assets/assets/services/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/open_b.png": "b65517dd1a07922b014409bb8dcb1e81",
"assets/assets/services/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"assets/assets/services/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/services/fiverr.png": "9d4018924e1f0e983a86e7eaf8a0958b",
"assets/assets/services/ui.png": "3cf727247752b730a05f51fe0177036f",
"assets/assets/fonts/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/cui.png": "b5608c4d79345ca955f990a24a454554",
"assets/assets/flutterIsl.png": "aaaeddae163a2e71636d9d494e16f2db",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/mob.png": "b73399d02fceb26b510b6abe92894d80",
"assets/assets/web.png": "968671063715cb94339f2bd9bbefbaac",
"assets/assets/1.png": "78d49bb1d6ba051d64f67c019f97786a",
"assets/assets/projects/covidB.png": "1884ac58a9de5d81e995f1e46e4b7398",
"assets/assets/projects/covid.png": "27c600501d335324e8fce4c5d6c22b76",
"assets/assets/projects/medkit.png": "915431d4f438d5bc7c642fed8dbfb419",
"assets/assets/projects/java.png": "62be9fb6e1d7166e9cbeeed913096752",
"assets/assets/projects/android.png": "765adf924dae4d5e67bfb640bcd05c48",
"assets/assets/projects/medkitB.png": "058d00d54c3ee8a953442d0cf3bfb866",
"assets/assets/projects/hereiamB.png": "16ee68a57fbf0eae5c50e1b8376064df",
"assets/assets/projects/messenger.png": "f28ead750653b586737ed63db6f2d53a",
"assets/assets/projects/earbender.png": "64099d76f6c7df0fac39c222293fd473",
"assets/assets/projects/quran.png": "55e8a0c928bc192f682ca0e61cb61ce3",
"assets/assets/projects/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/projects/hereiam.png": "cbb5a77a5e19e1224080dcaf0e3b5407",
"assets/assets/projects/quranB.png": "3cf070457b64cf93d11ad2073bff88e2",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/AssetManifest.json": "76b289da33a44f9834ae7b9d98587733",
"assets/NOTICES": "8827320df0a000375a68b0d669e98135",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "c6025de146e227fabb43e7a91f3ba4a0",
"main.dart.js": "c5bb55ad6699d0a7fd0a52a6e12283d9",
"icons/Icon-512.png": "84780d2dfe97536ad1b68213079cc78b",
"icons/Icon-192.png": "002516a4b23f153b7ac2928347c377b1",
"favicon.png": "61b493df9635f221d909421e8769acb0",
"manifest.json": "5b09c13b148111ae67ccf33f74f43f45",
"index.html": "c2ff6d1d7d3472698de1e77ed1b79f8a",
"/": "c2ff6d1d7d3472698de1e77ed1b79f8a",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/config": "4a12f63e6f3ef382cc75839d9b733f63",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/fd/f40486332ebae51ec9c07e17dedd110dde56e1": "a41269fc368b0790dd3f40bb672d3373",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/28/f14354dad5e8192003df1785abf6235d8e49c4": "028f9a76743c63cfbc4aa5b7e1f741f3",
".git/objects/f6/47e6b624f24322a3b9b3ed8eea33c1426102f2": "ffa4f73e3b97353d3d5271cd9528f073",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/ac/c8f80e5d2bb08d404d38ad042619b03152e28a": "7c947cb5684ea52eb45ea8a44bffcca2",
".git/objects/57/6f3378e532c6249a53a91df460fe0bbf5112f0": "5a230287b1ee6cf0914febebc8165340",
".git/objects/d1/a4a34bdedd78c68044755f680e41ffd0327884": "b39587e458bfb5cb548c057e533b35c9",
".git/objects/3b/922cbbcd2d579285d82383e754091c63c65e77": "6f0601be3c0640b7f4ad501f19da7ec9",
".git/objects/89/3ff4019d7e2c4971d72f0a76aa2af3b495ffc3": "477bc7207d22ee43fe66afe608c7754e",
".git/objects/89/62a01d01fd09337763a091f5c38f8bc6db74c5": "391861412f7e6dcb8bf7d00bf71b3799",
".git/objects/a7/c5e7dc5e3272c22d781c1e868fbdc49da59177": "f700387c290a9faca9677ca4aeda9448",
".git/objects/0d/4e6fa0b41390f08728fdfdf98d931b766671b5": "ba36ee0b15592d252cc5ef530e4e3f43",
".git/objects/0d/ed09550ec10486583824919a863ed288a6b3cb": "84a58aeedea364d635f1a18eb1167224",
".git/objects/35/9be0b3687330885f4a1bc0fb7c82e7a292c60d": "a70206545a032a6d5d60835c950d2343",
".git/objects/b2/772fa07779063c80e4fc061799464286babf4d": "73c160e31ef637da20a5e4bccf3f2b9c",
".git/objects/9b/12488c1522045db9dd253c2d138b5d8e11e1b4": "0c6b91db59c6834d6f8361c2d30231ab",
".git/objects/9b/aa2160bf1fbd29ec7d9f466a0c6dfe2e762283": "621afcb817079f5bae3a8c84372bc655",
".git/objects/74/1ae4dfbaf16b17b0545612fbd7c96b2813992c": "fed03ad54db2421e7bdc5e7c12e40ab4",
".git/objects/8c/83f3d09158bf1e114f6ae04c0aad445606f73e": "12ad57691393586d12467b0f92103e43",
".git/objects/47/95541a6364c537c4dbb96f2445260d62aff500": "859f9dd4574ed1e6ab5b015c95e20894",
".git/objects/33/50c4c58167bf1f049f7bd24a1862881deacf0f": "0ae9ece8016106880f4d6a2b7625c35c",
".git/objects/91/6a31388db6c80f3010f5a921d45c179773247d": "04abb4441e388be7dc48120761802172",
".git/objects/22/e8f2643b0721ff22997fe04cb21ae88d55ff4e": "5dae35cb9f95d71d2863ea8c7df6b953",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/34/6dbbea6bcb06ec37df5dec5c4b364d9fd4978e": "fc330277dcd553d4b0672df129ba204a",
".git/objects/c0/d44a7cd7a69d948c8cfb3fc900a9971464892d": "ce9378939bdd551410962d1b1e4bb06d",
".git/objects/f4/77d95f34c5493e57a063e06977a35b12a7c11d": "3722c103580f333ee120432f4c25e110",
".git/objects/2a/fe51d033d6cd27789a5caf9df0f97d6955b07a": "7407636f2a4e435a653142bae061520e",
".git/objects/46/1ae775788908ad36d572b9e6f0148ee092f1f4": "f699d3969827387d38af50306aaf12f2",
".git/objects/79/2d5d5e329bf739dfa4833e158af631baee3a89": "4bd0cda28e7429b10376529f7200e3be",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/70/ccde91726fe4f293ea7fe68431ef261d057d73": "386ed0a6db93d348780b30933ab9b50c",
".git/objects/b9/eaf6f8f3485bc9b595bfca2bc1f950a0dcf24d": "86efc6228ca16cca1271399f134f74d7",
".git/objects/90/5c3c41b3d92930bf8587d4ee7f7e224076705f": "2778c1b8fc74f6f1e3fe2829ce96e01a",
".git/objects/90/5eb36e068e56bd147876e07c5a85533b5c428b": "04549b852b4175189ad1f153ca8305e3",
".git/objects/80/ffc961c1e3d9555cb5450891731313ae51077f": "5fda89234ee19cbba7910edbb5ab1195",
".git/objects/61/0418468b2a61e645f07a5083334a435f5dcc17": "827f40e679280ce34cb2125a71fdb18f",
".git/objects/9c/72f0967221c414af9a5610dfbbe766c8004e59": "83c07b28f8addcd82a9a5b109ff7c4cc",
".git/objects/9c/af7cd5632d3cc1a8e2c4e9499a91696d784a9e": "cf7b4b3fabf9d539562b2fc30a81c6db",
".git/objects/a2/4d59232d990429de9c1239442023c64f66739a": "3ae013374054e1de77e958e6961602db",
".git/objects/a2/3cdb551b8013486878057add75dc603a531d08": "076136871099dc126720fe03ea86ef5f",
".git/objects/67/30eb346846c864ae7593a6eb00f6310161beb2": "e3ebf27d27e0672d708b1d6b77bd93e7",
".git/objects/ab/5c8a1f279f8dac2b920af3cc5eb104fb9ab3b8": "db44cea57fac3d6905a2a1fd4267b5cb",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/7e/ed3d4864e06812dc78cb4c224d8dc6451f2bbb": "bef02ff590a2d30fda06a46cbf1ad3aa",
".git/objects/7e/fa5e86e2e91478792cb3f735ea22a6ce3e5074": "22a2460fb98fc97f60d00b15e90ef267",
".git/objects/96/54c7728414b0d66eec0f6c57ed58ccd871531c": "a59d6353fc96ea71d6ac97efcd096bd4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/83/c6ef881096f79564afc4ff6d6ff91fc709d3e1": "56b870a5968d3251b46327b2c82e3b54",
".git/objects/17/9f44e634c15ca00de11a350be1fcd02d8312dc": "ce8a7bfdcba572ba1374c46edce12d26",
".git/objects/17/a4de0aa37da6ae5ee7d0d9c14d2f59bf44dc72": "9ea3daed8e42ae1e70aef767c8fa1119",
".git/objects/63/df4c59836f60727b10d3e10c91a6085ac0254e": "1d7f7fc440ba79d211e8d3e77d4128b7",
".git/objects/63/8e2fc7b9c9eb69c4303511ff8c8a18829320b6": "beb6e9b62060515af73a44dd7f4eb373",
".git/objects/cf/b0e4cc433952556d9c5d9374115fd843a0661e": "7c9f29cf8007eeaa983c951b1652dc0a",
".git/objects/87/251b75ccc0d225aa6b85a894c13348cfd7d728": "8d7573dbd010c411d6eee214605fa49c",
".git/objects/fe/eeea66e2090e3a09345f31da96eff078de29a3": "bd18d90aef69a8fe8c712bf53322f85c",
".git/objects/29/478e303e90bcdc2f1c12633c8d332656906095": "a3f6c3e63d0319119c1882f96b4052ca",
".git/objects/a4/5e449920d4f297aad13791546defd83ee28474": "bdf676282bf609402aa57a128bba9398",
".git/objects/ca/c7268d3b665c1828c476a18e609b470952c68f": "c87e536e03767d442af9ebe2e64f1bfd",
".git/objects/09/b2139db44c62538dcb2023d710739330561915": "062382e001f0bc18e3c4ddb0f1caa6c8",
".git/objects/cd/dca07fe4b261460b46ad13d06c68cf8f0317b5": "b71969d20b0678377b6e5ea24bc0c71c",
".git/objects/5c/d9720aeb5b6099033eacab6665d8b6f3f830d3": "01185f6968ee6bb45015874354bced36",
".git/objects/5d/95a5e8f7f973f5cbb75706699d7c53241d6e47": "c59b564eb0a1e54c47675a3d644a435c",
".git/objects/5a/281bb22907a9990cbf889e1fa03c2e2e16c394": "aa2187abe1cefb8c44d3d0c70b0cdd96",
".git/objects/d8/adcb63a417320ac1966cf65da29d399b408693": "e6b000c896a12497525362319e5c4ad3",
".git/objects/7a/4f1fd5c7a662dd03555c304b868f364a18d810": "1407f60f1d9baa92c4add5e00bbeefd7",
".git/objects/ba/8ae262f0885d1ea0f59d32f049850d736fa97e": "ff5bfff40c6afc62b9da328bc55340f3",
".git/objects/55/a52bd6be0db913e5a9d7396fba643b71518aaa": "4b01dcd6070fecbf5f649fd45cdf141e",
".git/objects/0a/808f85b89a7b3d994b70a4fc2511cb6e2b2ff6": "8ccdc1d001c297b0fc6fb7cf1d3e937f",
".git/objects/ad/66817b7cd83d783e205d080b0f7cb01d9cacd8": "e6de1ccd2589ed33f8440a4110e8f964",
".git/objects/ad/7c0953657a828c33882cc5d1991cd8a8333128": "1d6c15865dfbd4566573ac94c3b35bb8",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/02/c9f93a8e4cfcd7001116e1975e7793a726ca89": "6d21aefd3855ab4b610554773e6a442f",
".git/objects/a1/0724cc610c2312eb3adbf776ecebcf5200bc82": "7ce243f3b69cf1eb6aa6d7d339b3264e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/9e/7e46f425666e01f8f31f2f2bee419b52b42468": "4ca1d28e76f84b6bd7c157f4e720e678",
".git/objects/21/4ba1b004d874802481d4c5b0431219326212f2": "5f67921c8a8ae6012f2def31b6e79f04",
".git/objects/20/8180a10143a4c069cafa131ad60b89df7bcddd": "2b9f3f4ffba79325ebaa796d932bf12b",
".git/objects/20/ee1392b0ce74e97b4eef5f31e078cd11bf9e5f": "90737ba2e23d403e9978429413e4777f",
".git/objects/2d/9d52fff98ad41325ac3e82cbf4f688632e6cd4": "af22797e50beacb1e314ecabba614638",
".git/objects/c9/fffc92840206ff157a9a1211497dbbe0df1920": "7b49077d4e23bea6fb5bfc1f53783162",
".git/objects/9f/20c17ce2ee9b97cd8f9a2be7b4fbce20958f9c": "ae2c012c4620b6082ff24e509669629c",
".git/objects/3a/ad58f6e2c2471967fdff69eddaa32ad9d5b02b": "6024de5fa3b7497ee3cfc3fe1a2479f6",
".git/objects/bd/36939dd0c5799b819a405b3ce8645dec4a8863": "735b9237713ed444d5fdb93d677fb6cb",
".git/objects/12/05a19b55d504535fa4542f0e9224271796627b": "0edabc2217eef68d0c5f6fd0dd28dd4a",
".git/objects/06/59e49cb067992f30b79b8065cdc9008d585472": "d596cd4faad14c0d92ccee6e01e9af31",
".git/objects/36/3425ca86e53a6bced022bb815d3f512414866c": "8538381205a933a0982d0128dd435395",
".git/objects/bf/0ef2becbb9ddbbcd15bdc0f20e43e42eccf023": "b6549e29699f76e33afaf6356356fb55",
".git/objects/bf/eba7037514fb4db6de493b33312f1e2b3b1e58": "538b322135035ff48e9d4d38dfd7e5b2",
".git/objects/1b/ccb3d07bfc77df8c08bacda9b2e97733ae08af": "eaedbcd714adee7aee97c3f0b7131f5d",
".git/objects/af/6719ace2c155cee049b7f456c55cc0dd4a82ce": "dd438cc5aabd42f23ea22195c31e8875",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/aa/db1dde20d22c8d8927eeba45b2110e1f81a192": "ebb4de2c376cd9c2ef9a7b286de7cb1b",
".git/objects/fc/5e54e2f52659301d89bed4d309e214fe37cb57": "46025bfce74587d36ba2e49a19970b16",
".git/objects/84/d5b8aa9ffebfdc3bd0d240f435cf5aced4e97c": "e52266d270abfd208db72954320125f4",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/82/c637e801da6700bb84bd60b12e5102f3215127": "642e95b9232c66676b2513e7011b2c88",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/13/bddb6b5f6e32531564c52ca97afafa07c77d43": "31a60c874bdc73fbb7db352a64dd0538",
".git/objects/e4/bd8ba5c440a802653318a0c711d594a2e8472b": "bfc55cde66b187443468c4a26d522294",
".git/objects/e4/a32c379069c6dad75ce36e44d2af6d8976cb48": "3a75ea093cadba46fac7e346a3c0cd04",
".git/objects/8e/218563477c67cc54688ce953f9348a7d18c553": "668f5a2704e46da5951b356cdd905ffa",
".git/objects/8e/15bcbeaf58e67c39ddbe0587aad5584cd7d7fb": "bb6933b3ced626f830aadee6c08c3d16",
".git/objects/f3/16242a5d223fc4a35caf4ebdb480de4289bc79": "19afabc0c8cb874d2f4ccf2d8e1409b3",
".git/objects/f2/e182137f938bac73245814419a7d84190a3f4f": "3d941e7a053ba8c5053ae8be0ddc8a5d",
".git/objects/7d/54a04634cedaa8d68cdbeeaf7197dfe995ffd6": "71ffab4ff37ab952df8868bc0caabf68",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/4d/e218c6894ecbcae1f0a1efbbd56c95dc2bd252": "916182ed67a8ab840ffa1a3003b7886c",
".git/objects/86/982c9c9cba3e2a0a71ace57ea970f626abcae2": "48551eb98532fdaaa43e56f45543b55c",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/93/2105abbb82257c8e28e518a987eec7aade4b77": "c1a8c744009f7f7090e47bc494c85d0b",
".git/objects/14/d77a9c2f87c62ea2c37d158c4ef00e5347ec59": "04ece9a8dad293f1e5119178d6c50271",
".git/objects/a5/5793fbcde93e83fee957f63e150508e09b14c3": "1b4687c0043d26ebd00bd55b51a09c32",
".git/objects/1d/7dc079b3bf5aa9285e67722cb6bff6f050af06": "c47fe340fc72be693a7fe1cc2a2d5a61",
".git/objects/45/c084c7c6cb855b94837cad4b85ec4db8788001": "d5d29e70c7ad2b5568d47d4705a1e7f4",
".git/objects/b1/7744900d2a68a229523d05e3cd733ac82f145c": "5f10325996becaacfb2afec2160813de",
".git/objects/3f/4246826353c94f0bb73628b0ce014c55600f54": "acbec3b08bf4c13b1e75073d8c7ed556",
".git/objects/3f/0b6320b6b61052d44cf9745fe811fb5381f9e3": "5d373500eb9253cc5a77619aada7e9eb",
".git/objects/3f/6fff45814b0cd65b50e8059d192484d6893fb6": "8f048f4961b51f48696c8e855b1d28b9",
".git/objects/8b/a6d2b46a29e7953dddd21343093639cf737843": "56b98587676412eeea925c13e13bbc2e",
".git/objects/8b/d52d9e31f2e2af4dc29344a2653ba1e2feea3e": "3566624a0fabd29d3dd6588e35d56e96",
".git/objects/1e/4cddb49a3b815f0abe1e9c057a35175d6f2d77": "30e4a7cbc42fb686d6e1910ceb822939",
".git/objects/cc/7956034b36a78ad7a30e8d4761ae6c937d6514": "400b5c12dd8e803142ae98b301c470bf",
".git/objects/cc/76003aad294a13d856ef681748a198b906c57b": "4c0fbb6dee9c9ba1c0f17930b258f111",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/cb/ee10a299b9a1e645272b310c4b5bae6adee254": "debe6b019fa093be61198001a8ebbcc0",
".git/objects/cb/af78a83e9bf4ad8a5ff61956ff1a7c87a84a6e": "d05e87971bcbe5c6da748da8ef50fd20",
".git/objects/94/8218209a1bdd4756bad1f5bd5642f822fc479c": "34b31cb5f198081e20741cd28458492d",
".git/objects/62/c37bece9ffc502b05bb4c55e946b890d63c4b9": "90732ffa5e22ff3ecf0f8b282f3665d2",
".git/objects/c6/85cc701f99d7f66f6fd53c81fe198228490367": "77860517c108ab5304ab9e470fd00f90",
".git/objects/c6/360144e3dbeacde43bdbdefe0dc57542252b18": "875d6d6b64e63b3fba96a7d7502033bc",
".git/objects/c6/9df815041de845c80b02963c4e639636acfe7d": "eb82b1686fe3c50a4824f7c9a0a67675",
".git/objects/e0/4de294698c835e97e1bed23d5ed0b7510e947d": "efd84b15f9b8346c1768010a879bb3f6",
".git/objects/5f/dc637875ee91576899cdd845ba26fee2896662": "1fdead60e35cc682351812046d6a4d1d",
".git/objects/d0/4ecb7d72fcee00e1ab5fd814765adf36abd405": "6e879a9c401e305be5a729c1a6586075",
".git/objects/ee/932a69a6b5b4d3112615d6f96e2cdc2cd76378": "23129682b3bfcdc0532146bb86d959fe",
".git/objects/be/fa1caf35e2593ef36d028cf49dc076c824adfb": "7702b2b27e1d232a25458555809b4a61",
".git/objects/01/3b2349853052fdc349d00673e84f8359bc2d15": "bb28a4333850175b622927f3c762af05",
".git/objects/01/959ec11f53e40890db235a8344362a556b8624": "74946817e6c02777dd745e8457f1f682",
".git/objects/11/0428e4d24864f2418adcee0dbd9fff6ce9dd38": "d6f566202d81c76150ff41d3bcf3529e",
".git/objects/d3/8afd035bde1a7078fea82b9dbb431317abd805": "f33a61189a73bbd246a3946730a14f5b",
".git/objects/40/67295b648bc4cac6a05c86bd7783149679be8c": "9e45f81c137c30f9d12b8aeb1c1f7377",
".git/objects/40/0a3ba674fb45cb827a99e865c45f8ff6fec861": "6620a2e7c77a009db627efee05764ecc",
".git/objects/40/55861e1ceac96b14f777d48b949f25dfa9297e": "3794c5fbca8f5cd062caa49fc9d85c89",
".git/objects/e8/ff7f072c25b97f27f13eb9ac01d3112647850f": "a47cd5dc03311883531c5fbfe0366ae8",
".git/objects/e8/a1aa424d873c7274e1ce615d1cdd130a237a10": "6c94cb44fc629ad7347ad94267a25367",
".git/objects/f8/d483548dc1906c1466c735e4507fec3c3a3b74": "a78e53af3ccfa4f19c2dca4e6094119d",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/index": "7b2dc1fd0f2025f2daedd0e8b2923986",
".git/refs/remotes/origin/master": "89e96832fc752002375d03886eb8fb73",
".git/refs/heads/master": "89e96832fc752002375d03886eb8fb73",
".git/COMMIT_EDITMSG": "c0c2c37026d4ec6aa3f1350360175827",
".git/logs/HEAD": "0cfb9b5fd92fcf47c217dd2805d2583a",
".git/logs/refs/remotes/origin/master": "eda69857fd2a426358337f3dcbf4b558",
".git/logs/refs/heads/master": "0cfb9b5fd92fcf47c217dd2805d2583a",
"version.json": "1cefaf2a48f42633ff4b37ffe0e9de96"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
