'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/services/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/open_b.png": "b65517dd1a07922b014409bb8dcb1e81",
"assets/assets/services/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"assets/assets/services/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/services/fiverr.png": "9d4018924e1f0e983a86e7eaf8a0958b",
"assets/assets/services/ui.png": "3cf727247752b730a05f51fe0177036f",
"assets/assets/fonts/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/udacity_logo.png": "17db4d12ba8e1e54d2c1e6bbe62fb575",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/mob.png": "b73399d02fceb26b510b6abe92894d80",
"assets/assets/web.png": "968671063715cb94339f2bd9bbefbaac",
"assets/assets/1.png": "78d49bb1d6ba051d64f67c019f97786a",
"assets/assets/khan_academy.png": "50223c44399cd4f936566a5e6497f213",
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
"assets/AssetManifest.json": "1cd1f16cb570f10355b90230c47dbc95",
"assets/NOTICES": "8827320df0a000375a68b0d669e98135",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "c6025de146e227fabb43e7a91f3ba4a0",
".sass-cache/cc8e2228cfbf8ec994102b36e6122bfd8ca93d77/style.scssc": "67f7c2bd12d624ad78e319fe7d22ace2",
"style.css": "4b0c4aa89ddc3c8570e40636e29e998e",
"main.dart.js": "ef8a7943b0ae446d78e6b75db325dc65",
"icons/Icon-512.png": "2eb00b636957129d319c6c195f7c475d",
"icons/Icon-192.png": "8f79675a484031cd5372a20f3f9ea528",
"favicon.png": "8e8145e7f5c31023f9c01da958a54634",
"manifest.json": "5b09c13b148111ae67ccf33f74f43f45",
"index.html": "514795dabaec96e152c7ddce81c8f3b2",
"/": "514795dabaec96e152c7ddce81c8f3b2",
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
".git/objects/d6/777e9133ab032c9059b001c976124cfdae7d09": "4f9b40bac1145b4a88335d5f521914d8",
".git/objects/d6/e72c8187a61995d8d271f2efc105db3be326db": "524267b33b80d9d70cae8fe1aa4d0c72",
".git/objects/d6/e087a125a339b5179b097c0ac64cdc5f1bc058": "cf0bfd28ca9f5badcaa9302ae75d29ec",
".git/objects/d6/16c82c2ad07cd5c55765abf7ddb090b21b02a8": "7aa3542d0ff6e2b3057cfc7283d16f5b",
".git/objects/d6/866d54cb6e41bc6b081ac08a796c31d22d9a21": "c81368cafad18c0149a33fbfe3947cc3",
".git/objects/0b/86c9adb49760cf8408fda457a58d4a821c6cdc": "ea5d99391172aecfaf238aa0525a21cc",
".git/objects/0b/e7f2c2e7a982cabd3f681ab21dd237597e5e7d": "7e9f0f137b6af2fc677e628fa3aacf62",
".git/objects/fd/f40486332ebae51ec9c07e17dedd110dde56e1": "a41269fc368b0790dd3f40bb672d3373",
".git/objects/5e/465f4ea918f8722fa8766c3b51e07b03742be7": "b482db8458d818514e801f1097385a24",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/ea/82813a0e71a756b288ff5f396a328d3f0a0473": "5b3a20e215774b294f0ddc89ca900b85",
".git/objects/28/f14354dad5e8192003df1785abf6235d8e49c4": "028f9a76743c63cfbc4aa5b7e1f741f3",
".git/objects/f6/15cbac95350d7a20b095a0e4c3a1b43d47deda": "4cc0044ee997a84ac7e70e2d4d7ebac4",
".git/objects/f6/47e6b624f24322a3b9b3ed8eea33c1426102f2": "ffa4f73e3b97353d3d5271cd9528f073",
".git/objects/b8/97668de5177cebb1aa68098986d49cae4fb5b2": "448969c8a19c9cc1a21647d316eb5e01",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/b8/2b948b00c56b009f9ae140d26411f7349a8bf6": "3464c592cb4492359cb2aae33c5d394b",
".git/objects/b8/4d5e6180c3a2b1d918d0c0c53393eaeca361b6": "17306d6b15e8223d33bb9beffb5ef872",
".git/objects/ac/c8f80e5d2bb08d404d38ad042619b03152e28a": "7c947cb5684ea52eb45ea8a44bffcca2",
".git/objects/ac/ee38d47806155e61c9d8f79f816b79ae661a55": "a67a150faecae5c03563aeb77b62f048",
".git/objects/2f/71d2e68f00d65237498800006d01f3239ff247": "219bbf1522c4eb4e5016a4adf043b0b8",
".git/objects/2f/ee80828b3fe35b612a74d5f625558a789fd105": "8794dc3f4a562cbfc4569348abd32628",
".git/objects/ce/20fd3c180f1384652d2422df7840e531bb4acb": "c661903100afa625ff402a9344f3a6ab",
".git/objects/ce/b1314234e31c6294c2c39cde667303169adf0f": "d0d5cab2378a1858079888e57453afcd",
".git/objects/60/e85cb2558c27283951dc62d8ff4993532ac28a": "354ebcffe8f10d5787623a1cef0a14a7",
".git/objects/57/6f3378e532c6249a53a91df460fe0bbf5112f0": "5a230287b1ee6cf0914febebc8165340",
".git/objects/57/73113bd055cdd7eccff75722833c7aa74fef06": "bc28aa2cdaf95fa4dd2c698b967bb241",
".git/objects/57/68d92250a26179a20ea50284975d016ed1d507": "4327744948132c85a5da72bb9c9eff87",
".git/objects/d1/a4a34bdedd78c68044755f680e41ffd0327884": "b39587e458bfb5cb548c057e533b35c9",
".git/objects/71/6dbc796ca5d43c6057e9cbff334668b45e3086": "d2b2a4655267cc998891233d2dccd64a",
".git/objects/3b/922cbbcd2d579285d82383e754091c63c65e77": "6f0601be3c0640b7f4ad501f19da7ec9",
".git/objects/89/3ff4019d7e2c4971d72f0a76aa2af3b495ffc3": "477bc7207d22ee43fe66afe608c7754e",
".git/objects/89/62a01d01fd09337763a091f5c38f8bc6db74c5": "391861412f7e6dcb8bf7d00bf71b3799",
".git/objects/ec/c92587739398b939d1f4194650aa13b9b2d5b5": "725ee3b088dbea94b4b2ec445af47a61",
".git/objects/ec/a56bbc66c661478f3303898584b916bf25b67a": "7a941ed8a02f1d3ca9a7a7b776004dbf",
".git/objects/a7/377d2b5c6acf66797b2eaede4598c04a4f7970": "3f7d2b3428147cca4e6f2abe1026af00",
".git/objects/a7/c5e7dc5e3272c22d781c1e868fbdc49da59177": "f700387c290a9faca9677ca4aeda9448",
".git/objects/0d/4e6fa0b41390f08728fdfdf98d931b766671b5": "ba36ee0b15592d252cc5ef530e4e3f43",
".git/objects/0d/f629c9d0b4035e619df4ce25577e6c3bdb080f": "f71346faed1ad86ec558b89e70f55d30",
".git/objects/0d/ed09550ec10486583824919a863ed288a6b3cb": "84a58aeedea364d635f1a18eb1167224",
".git/objects/35/9be0b3687330885f4a1bc0fb7c82e7a292c60d": "a70206545a032a6d5d60835c950d2343",
".git/objects/35/4213d2c427dba48fffa06fb0a5338679b99c64": "ec5f98c48b1713589b246ef1150eda44",
".git/objects/35/c275cfcbbf7355457584f6dd4a371e46a46d1a": "e43b6b9e040a61c3cec75bdad85acd86",
".git/objects/b2/772fa07779063c80e4fc061799464286babf4d": "73c160e31ef637da20a5e4bccf3f2b9c",
".git/objects/9b/12488c1522045db9dd253c2d138b5d8e11e1b4": "0c6b91db59c6834d6f8361c2d30231ab",
".git/objects/9b/aa2160bf1fbd29ec7d9f466a0c6dfe2e762283": "621afcb817079f5bae3a8c84372bc655",
".git/objects/74/1ae4dfbaf16b17b0545612fbd7c96b2813992c": "fed03ad54db2421e7bdc5e7c12e40ab4",
".git/objects/74/757d9e317b7eaa44db533018c8729acf6a185b": "7240bf4744046a9bd7fbbba19c6379e1",
".git/objects/97/fd42b78601a813bda4cf8d8fa1eb9dd3f8a705": "60ef618fc809d8f42d207ae673120abc",
".git/objects/23/08c5efebf5c638b37849265b70cd222a6e202e": "80e9580a5456029708211d159cbbfbd7",
".git/objects/0c/1f5b6c3b2f777c1db11535dfc6c50cd91eedd3": "993679f04d474947c4fbb10746a316aa",
".git/objects/6a/c66488489d769881f6935f92d4fafbf9ba682b": "af01fa50810fde0605362a0bf9fcaaeb",
".git/objects/6a/f2c543486399545d34bf092567a86e66208c1c": "95a25bf7d20697e563b89afd37349545",
".git/objects/8c/83f3d09158bf1e114f6ae04c0aad445606f73e": "12ad57691393586d12467b0f92103e43",
".git/objects/9a/f90e086801932a5206af02c96f75a40c07f275": "c4b384ccebc9f57b4755189b033d6890",
".git/objects/f5/953f1647910b647b65c4b6f62fed687d4567a3": "e0d7f69106f86dfae4121f54eeec890e",
".git/objects/54/1c31072103ae63dce7b5458e2063b40b63f347": "685cbc872aed178277eedf3fd31b6eeb",
".git/objects/04/1128f4fcced4950d67aefecfb4a3891141d995": "57d4481c365256ba16e0db124a96de96",
".git/objects/47/95541a6364c537c4dbb96f2445260d62aff500": "859f9dd4574ed1e6ab5b015c95e20894",
".git/objects/47/7b5d6b350d634d10c29efb1ba65de1a37fd744": "36d473aa8b31c0b72945e791a86abb15",
".git/objects/33/ed767da8c61166dd55546dc0f03c33941633eb": "6f50195611ef8f2eb76a966a510d318f",
".git/objects/33/50c4c58167bf1f049f7bd24a1862881deacf0f": "0ae9ece8016106880f4d6a2b7625c35c",
".git/objects/33/38b06fcde6249a7a0e73c689241d4bd79a2183": "17df5fe88b21fcdc008a9dea5086f90a",
".git/objects/c5/690ec62b904b347abcba1294a784e7d335bc75": "7fed3ed5babddd48ab441479e9556ea7",
".git/objects/c5/97cd8c12ebc3b0393c7f84b45fd8d98cf4d1f6": "1a0cf5a78bc1f8e1979ae5aa5957afff",
".git/objects/e9/5d7b2701c5e72aa7db13783ba867817292d5b0": "d0855edf99c26cfd5c646c83d56fc06b",
".git/objects/e9/dfa325a622f456f3592af4d3434db92d0a7999": "c878513fe32a0b3c2091a8ec4d40b05b",
".git/objects/91/4f18ca4f478dc1ae83bdce3910bc9e3181dc48": "331b3d4bd39ea02bfa036d9f4a7fe08c",
".git/objects/91/6a31388db6c80f3010f5a921d45c179773247d": "04abb4441e388be7dc48120761802172",
".git/objects/75/b6e55ebf3925810fe7c9814cd8ced461be313f": "681245bd6abc535934947d1468eb942b",
".git/objects/75/40d9f857b33b0687dbd41d6a53b785fe40e7a2": "38cef18dd0cfb5266232a972f542c1f1",
".git/objects/b6/34cc7dd8aa639758952ffb0a9faf28cd9563e1": "f5af6c5ccad8d2ceeb2f901b787e3749",
".git/objects/22/e8f2643b0721ff22997fe04cb21ae88d55ff4e": "5dae35cb9f95d71d2863ea8c7df6b953",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/34/b630de8c2e10ed121ee8559f63fa5e542f707e": "e3f330488843fd98f7c02bd6d9a5efa2",
".git/objects/34/6dbbea6bcb06ec37df5dec5c4b364d9fd4978e": "fc330277dcd553d4b0672df129ba204a",
".git/objects/34/61916a539ed3161a3be4150ac61530834665c9": "01f70f43f93fcf2dfa5b5df36ea74087",
".git/objects/34/855221aa238295e91c48628aaf8adf5c6409ae": "3e65846531ad0c60b073c119da10a5ed",
".git/objects/a3/8d9dfed65eeba7c43f77bf62ed0c582a661051": "6e30e9eb4315de0109eb709425155af1",
".git/objects/42/32e7fed329c7c7becdd04c26b1abc81cac8aa2": "4820c05b9f649b5c09fb8c8e146c0fcf",
".git/objects/42/69bd9052305fe5645c6b247fdde0ac1dabc957": "b45da3a2c69b57bdc9971567006427ec",
".git/objects/c0/d44a7cd7a69d948c8cfb3fc900a9971464892d": "ce9378939bdd551410962d1b1e4bb06d",
".git/objects/f4/77d95f34c5493e57a063e06977a35b12a7c11d": "3722c103580f333ee120432f4c25e110",
".git/objects/f4/007bcbf610ae029711dec9d11692b39d2cae1e": "6a8a3491a740e5ce29a6ee0d2fcde397",
".git/objects/2a/83881ac34ee3cd02b5b8bda62a2dc98f6c25fd": "c6c0945ddab89beec12f9087eeaa23cf",
".git/objects/2a/fe51d033d6cd27789a5caf9df0f97d6955b07a": "7407636f2a4e435a653142bae061520e",
".git/objects/46/1ae775788908ad36d572b9e6f0148ee092f1f4": "f699d3969827387d38af50306aaf12f2",
".git/objects/73/ca5b9198b43feb9dd1b5c644908f5a7de0e48f": "ca4b2e0193e33c54dea296914f37491e",
".git/objects/73/8c19b292e4115ab769bba2f42f51f51164adb8": "57e00360cfeaa911ccc297d7e3e97bbf",
".git/objects/79/e4b35440e213c532a7e023b6a9957d034762aa": "bb02c6e21db2ba8fd31e20c4d8608140",
".git/objects/79/2d5d5e329bf739dfa4833e158af631baee3a89": "4bd0cda28e7429b10376529f7200e3be",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/00/18c57d611d11a6ae2ca5eca409b87b7699e79f": "ff466b070a5c4be10b129d72b8de9c72",
".git/objects/3e/c0f0d19e5fea7c1d322a9d1d6c1a7a10e666e1": "69bdab05b2b346916e5971fa6cdf80df",
".git/objects/bb/3418e4d5c66472c43d8d16732fc6a05e954ccc": "33dee89901232edf7b278185609c8b7a",
".git/objects/3d/8fea6dc1080cffe91f4df9ae4c6d7ab2557a21": "ba175cf1a3394331acba4b1b6afd1c8a",
".git/objects/3d/d06879c28ebe5f95391102cf89ebf89543c04a": "4cc730906484a3611572bd9fb334ebbe",
".git/objects/70/ccde91726fe4f293ea7fe68431ef261d057d73": "386ed0a6db93d348780b30933ab9b50c",
".git/objects/70/8809186df839124a6e56c5d9208f1131b2e479": "232126b756f0558181652c907e0d2828",
".git/objects/78/a60450c5827b0d07bed908dfae1c7fe27a1a0b": "daa032a047fc750b17cf4b112d14211a",
".git/objects/78/82890b2a5b71dac45dff9c30fedf071090189b": "05f0f421476cf730266356f963ee291c",
".git/objects/78/70044302ddcd8e26bd346a88b0fe982764f996": "d16c206f02cce7e405c1d13fe1a3b4ac",
".git/objects/3c/8a10d771371d221224bc1c08fde5210a1956d6": "4326953ac7a10ac9f10584da5fbc2909",
".git/objects/b9/eaf6f8f3485bc9b595bfca2bc1f950a0dcf24d": "86efc6228ca16cca1271399f134f74d7",
".git/objects/b9/dcd6df1d69bd934fa215f956ed2d5472d5f330": "47187496a7745d83674f9aa4eedf5a0b",
".git/objects/2e/49f6caca74125c356aea971d45b3d369266963": "0ec775e43879b6784b86fcc88cd57b2b",
".git/objects/90/0319a737977024017b5e6410959b9e43ad216f": "45f01e7f0489d7ae3d64780d1cdfc3e9",
".git/objects/90/5c3c41b3d92930bf8587d4ee7f7e224076705f": "2778c1b8fc74f6f1e3fe2829ce96e01a",
".git/objects/90/5eb36e068e56bd147876e07c5a85533b5c428b": "04549b852b4175189ad1f153ca8305e3",
".git/objects/f1/4ef4d4b3d53689a3b36457952a0a56b2e5665f": "b1e426d18d8671c6b5f7f36f216d82fc",
".git/objects/f1/9ad7a050d1f41f3550b03d208f6b11b4b39895": "bb525ae03e7370d20c9cec3a361bb745",
".git/objects/1a/410aef8da45cdca038cf0171c111501787c0db": "d1d9cee9b7d176d38d7941125c1be189",
".git/objects/1a/df1eee5339e96943dc4bdc81545227eea407a4": "d2c449b5c37c89a2cd1ef22034b49695",
".git/objects/51/44c94373d2bcb6f8b925f8280255a9ea69870e": "81af48154021ca1a2d337c3d59310997",
".git/objects/80/ffc961c1e3d9555cb5450891731313ae51077f": "5fda89234ee19cbba7910edbb5ab1195",
".git/objects/61/36c0a2a57b644077339f1a14cf3388c3b9465d": "b09ce75df2654d441017b2fe4b5515de",
".git/objects/61/0418468b2a61e645f07a5083334a435f5dcc17": "827f40e679280ce34cb2125a71fdb18f",
".git/objects/58/6301d7db1a30890b58081e1f8148fc69a76246": "193b6a4518900054aee9c22022fe1938",
".git/objects/9c/72f0967221c414af9a5610dfbbe766c8004e59": "83c07b28f8addcd82a9a5b109ff7c4cc",
".git/objects/9c/af7cd5632d3cc1a8e2c4e9499a91696d784a9e": "cf7b4b3fabf9d539562b2fc30a81c6db",
".git/objects/a2/405fd493903a0dfdc9cc506fec1d47134ea7cb": "8328a34f7e69a57bc25eb6f9034d3301",
".git/objects/a2/4d59232d990429de9c1239442023c64f66739a": "3ae013374054e1de77e958e6961602db",
".git/objects/a2/3cdb551b8013486878057add75dc603a531d08": "076136871099dc126720fe03ea86ef5f",
".git/objects/67/dd91c3e819dd48dffadb9ff4c4795cb63e8b2a": "69f8b21efbdf7f5e6e676fbc08cf7d78",
".git/objects/67/b87d5b41f81de4c5c3a1e39ad9ee83c4eb9649": "4fa7b5ccd33800c6f1651cec0da360e4",
".git/objects/67/30eb346846c864ae7593a6eb00f6310161beb2": "e3ebf27d27e0672d708b1d6b77bd93e7",
".git/objects/ab/5c8a1f279f8dac2b920af3cc5eb104fb9ab3b8": "db44cea57fac3d6905a2a1fd4267b5cb",
".git/objects/08/ee663e961dd470d92d79eb4074ca73eadd874e": "0b2d8a9d38a5d33a91812218412de99b",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/7e/ed3d4864e06812dc78cb4c224d8dc6451f2bbb": "bef02ff590a2d30fda06a46cbf1ad3aa",
".git/objects/7e/fa5e86e2e91478792cb3f735ea22a6ce3e5074": "22a2460fb98fc97f60d00b15e90ef267",
".git/objects/7e/60db79b79ec3537536aa31d1b6e5b5c33ae263": "e5c0536a6a45252326c0fb486d22d335",
".git/objects/bc/f2cb83359b2586518d71032ab27623044b4345": "da700507691f5ebf9111beadb7fcd365",
".git/objects/96/54c7728414b0d66eec0f6c57ed58ccd871531c": "a59d6353fc96ea71d6ac97efcd096bd4",
".git/objects/96/8caeefd99d64a909a0be409e45fcb34243ec7b": "0e69812d9ff8f14066c47efe1dbe3c44",
".git/objects/e1/d7ffafe1885998bce11649eea28fadb3bafc5c": "80d6427107dbdf1ee9eebcaf91c14b6b",
".git/objects/30/f2f7e8c032e64d651c9315cda7813931e5d1d9": "170b11b930c30361ce26cf1b1ebff589",
".git/objects/e5/2b0eda09dad75a7ed6b96955e8da9a1867480c": "2f999c2ec1e663037b47d1d7050c2d87",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/72/a7aca5a83b3474b3dabbe1b7b69b33c5c846b8": "2d71951f86eb39ed6f5fa326fdd4ef63",
".git/objects/72/2024e96be643b5feaa5c45f4d41f1bcda8b365": "27637443d89737309ea71dec3eeb3b3f",
".git/objects/24/32c3d9b31e71aeaee0d8b5a2c4ea4cf81cba35": "f609475d0453e099936178f5b4179524",
".git/objects/24/635fb4dd52499df60a65f74ca1527c8e51eabb": "c2785327e11076f05d6679590b124df2",
".git/objects/83/c6ef881096f79564afc4ff6d6ff91fc709d3e1": "56b870a5968d3251b46327b2c82e3b54",
".git/objects/17/9f44e634c15ca00de11a350be1fcd02d8312dc": "ce8a7bfdcba572ba1374c46edce12d26",
".git/objects/17/e9fb1f7ffd28f529e7846b3d5943191e7f7835": "544f742b9fa65a6ba8be868ddf68a40e",
".git/objects/17/a4de0aa37da6ae5ee7d0d9c14d2f59bf44dc72": "9ea3daed8e42ae1e70aef767c8fa1119",
".git/objects/77/96c55b5573a5e438ca723703ccae1a7808e73a": "d403974d5f37dc51d96b2ac7b1ec3c42",
".git/objects/77/32dfc6ef2835d96d52656a37f3471e3b5d58c4": "7cb7d6fc738cabdea2234cffca3e9b98",
".git/objects/63/df4c59836f60727b10d3e10c91a6085ac0254e": "1d7f7fc440ba79d211e8d3e77d4128b7",
".git/objects/63/8e2fc7b9c9eb69c4303511ff8c8a18829320b6": "beb6e9b62060515af73a44dd7f4eb373",
".git/objects/63/c891ade02c40a3779ebe1a816b7f138aff92e6": "9ff509c49796dfa8cef2a41a4b67d67a",
".git/objects/df/0910f4d446e076698f8015caa94e36e580bb42": "25d3ac63c31e47d4deedf5dfdf813638",
".git/objects/cf/fedf39796abbb7322a417a7c8c61333c0943f4": "b2e2c5d23583a1217cd97ba8144fe439",
".git/objects/cf/b0e4cc433952556d9c5d9374115fd843a0661e": "7c9f29cf8007eeaa983c951b1652dc0a",
".git/objects/87/251b75ccc0d225aa6b85a894c13348cfd7d728": "8d7573dbd010c411d6eee214605fa49c",
".git/objects/fe/eeea66e2090e3a09345f31da96eff078de29a3": "bd18d90aef69a8fe8c712bf53322f85c",
".git/objects/fe/5e6fa346fc3de0612598d4564ff7fff1ba3ddd": "95de967e7962c0528304d7abc7213225",
".git/objects/68/0854a6d47335f9a66a4f0db2c27a313d0cf542": "ef130fc29e096eafcc17e4e327240de3",
".git/objects/29/9cbfd843ca627af3c8045ac36732e3ffff48d7": "83dfc7b41e47e3ab443c181a8ef721f8",
".git/objects/29/478e303e90bcdc2f1c12633c8d332656906095": "a3f6c3e63d0319119c1882f96b4052ca",
".git/objects/29/61275c15220370e14a70dd86dd722240863902": "2fc8f07b8a82962a20c0ca1e8b82548b",
".git/objects/c8/6279d8e80f92ec74a323fe96cbc182602fe864": "fe3f0194e31a82ecc5a079e357d0fbbe",
".git/objects/7f/a11093366725cd73aa96efef49116e9875f203": "c6dd7fe947ec4ff0d7c834b21250e093",
".git/objects/7f/8afc55e37c5cb28395590f56fade0957c5066b": "d1225488d50ab5ce4fb7cf187cca923c",
".git/objects/a4/c6d058d3507550a3e268e50e4e0b61bf8b68f8": "16f2b3b878eb85a40dc45465ad154fe0",
".git/objects/a4/5e449920d4f297aad13791546defd83ee28474": "bdf676282bf609402aa57a128bba9398",
".git/objects/44/5baeb62a40ada34785993124ad61d95a9a3af2": "944d769a5730249f763f74313b108166",
".git/objects/44/2687887d85674f61e5497d03726348af92e4ac": "0f989f6e2c94461a7885af7d262fe857",
".git/objects/44/0a25a235c879a7b910db0a071ed9d0b0beaea4": "1dc0901a312a6cde0f117dd68ecd0c6d",
".git/objects/44/a33498ca28386c417ae5dc92d5f46a9bdd7c85": "d00129495aa4cbc44add0c40ee3facad",
".git/objects/ca/c7268d3b665c1828c476a18e609b470952c68f": "c87e536e03767d442af9ebe2e64f1bfd",
".git/objects/09/641c89bb0c3a537dd711a1a28b9b5bce137647": "37941e342a1911c231bcd760bdd31d28",
".git/objects/09/b2139db44c62538dcb2023d710739330561915": "062382e001f0bc18e3c4ddb0f1caa6c8",
".git/objects/09/d8312f1380af35bc183e716c180ca6326a6f4c": "37125d1cf149f94a4100e79bccf40548",
".git/objects/cd/dca07fe4b261460b46ad13d06c68cf8f0317b5": "b71969d20b0678377b6e5ea24bc0c71c",
".git/objects/cd/63a072c5dc04eb7fac6fac5a957729f4a191d8": "2f8983650638cff2939ac8da89d19e9e",
".git/objects/48/17aa3d257329d6d3d7991a4f75fd41cb6e4425": "b58d685c96175ad2c78e07c010b92665",
".git/objects/da/e94e69701b83e83857787dae2abd71c2704374": "783c489fd8f627336eaadb21cb6c29ea",
".git/objects/52/ca1a3d7806517a0e579cbd75d8d74b00202173": "fad3ffccce109afeb8f3b230429f8c9d",
".git/objects/52/dac9320de6ca9f208329aa8ebb2213827a0475": "fdd6c4211852bca22fe87b2cc1a3a234",
".git/objects/5c/dd0f55e93506e858eb98383c1d928b66adc9bd": "3d5beb9e44cbf9cfdd16d0925e20f5f9",
".git/objects/5c/d9720aeb5b6099033eacab6665d8b6f3f830d3": "01185f6968ee6bb45015874354bced36",
".git/objects/db/b1a6367af5b86daf6fbe4c521b01cc1dd7af51": "872902ecc8e0a676dccb295dff0bfb52",
".git/objects/5d/3f90140308d072bd0f8d7f9e53eedc14782a3a": "3a4bff988b69a1e94b2cee1c9d924114",
".git/objects/5d/95a5e8f7f973f5cbb75706699d7c53241d6e47": "c59b564eb0a1e54c47675a3d644a435c",
".git/objects/5a/281bb22907a9990cbf889e1fa03c2e2e16c394": "aa2187abe1cefb8c44d3d0c70b0cdd96",
".git/objects/2c/e120ae17ba882423614ba4b0f2b35af8b1396c": "cca1a3f8d1f7f7c7930cabaa96d0ce37",
".git/objects/2c/f1f5ca512d4c803633c0c32532546d796b606d": "d6c95f4bdddb6636fc76eefbb42a8c0f",
".git/objects/85/f699bcb015a4c872412068959dcfbd6eebd222": "5241476f827d8de40d870badb9d215d8",
".git/objects/d8/adcb63a417320ac1966cf65da29d399b408693": "e6b000c896a12497525362319e5c4ad3",
".git/objects/7a/4f1fd5c7a662dd03555c304b868f364a18d810": "1407f60f1d9baa92c4add5e00bbeefd7",
".git/objects/7a/421c65e484095bdd968d7cdb13354294cf0773": "8b07c2eda659e5cb46a48e6caf09552c",
".git/objects/c1/3c92be7e9d0f7a641cef4bdd759610f9000845": "483e98511da0ea459e6a9af11fcb95b5",
".git/objects/ba/8ae262f0885d1ea0f59d32f049850d736fa97e": "ff5bfff40c6afc62b9da328bc55340f3",
".git/objects/55/02a5a8f4e86a2323a5a2ef38529f24ec2a022d": "79e22e8fbaee07b3254976fe29525a7d",
".git/objects/55/98b94a71b00b8a378e1cd15f83b85e946444fb": "60e10ff5ac3747619db6cb9bc48e7195",
".git/objects/55/a52bd6be0db913e5a9d7396fba643b71518aaa": "4b01dcd6070fecbf5f649fd45cdf141e",
".git/objects/16/c09baa82e0aa1cf864d4dc6e92ab35aa05966c": "706af250d3727a6880aaa753288bb108",
".git/objects/0a/808f85b89a7b3d994b70a4fc2511cb6e2b2ff6": "8ccdc1d001c297b0fc6fb7cf1d3e937f",
".git/objects/ad/c3d8ee5a86df6febd33e37562681d1d23030bc": "be14e41f127e6809e6be45e4373c143b",
".git/objects/ad/66817b7cd83d783e205d080b0f7cb01d9cacd8": "e6de1ccd2589ed33f8440a4110e8f964",
".git/objects/ad/7c0953657a828c33882cc5d1991cd8a8333128": "1d6c15865dfbd4566573ac94c3b35bb8",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ae/d24b1e1498fdd7554170da9699893e1eda6cd2": "6d591cbfc8b9b8c6d2e011f5c970df8b",
".git/objects/ae/249d14bd2f283019e544cbf783ca2a9bccb70c": "3c011943766afa20ba2ef7de32100754",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/02/b2bfd9149a5af9eda47187477805900b79051e": "8fbf5d811dff304dba47e349237ce776",
".git/objects/02/c9f93a8e4cfcd7001116e1975e7793a726ca89": "6d21aefd3855ab4b610554773e6a442f",
".git/objects/95/0b5964d393cbb4a8b791c01ac6eb8153feab1b": "0d0043d175b201d3291eef44607e28b1",
".git/objects/95/a2961947a6f0320861a76e2ec20591e820a6ca": "c13a708ad9ef52f9732ed8c8f8fb5cb0",
".git/objects/a1/0724cc610c2312eb3adbf776ecebcf5200bc82": "7ce243f3b69cf1eb6aa6d7d339b3264e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/49/0d534bfcd4de21d1f3a009ddfcf55eb6a0ff0b": "3c0c86b792c70493d0e3b42791be72d2",
".git/objects/9e/7e46f425666e01f8f31f2f2bee419b52b42468": "4ca1d28e76f84b6bd7c157f4e720e678",
".git/objects/65/0ea433272d2a6bd3a0f50b9ae4abfce6747e73": "cc484123db57f32147789968ef72df51",
".git/objects/21/4ba1b004d874802481d4c5b0431219326212f2": "5f67921c8a8ae6012f2def31b6e79f04",
".git/objects/20/b16132cd153b9106d9096b6ad02dd221a9bd69": "fc3382263d28f0df3654a77fcce27844",
".git/objects/20/5994ec4a4d4b12f7b9bbfc0f7d16dad5f8e760": "da6546411fe740a54424ff928ed5e960",
".git/objects/20/8180a10143a4c069cafa131ad60b89df7bcddd": "2b9f3f4ffba79325ebaa796d932bf12b",
".git/objects/20/c367673110aaa60967ffd3d6641633c7f8cd4c": "5c25da4c34ebb5a63d9b92552ac2005e",
".git/objects/20/ee1392b0ce74e97b4eef5f31e078cd11bf9e5f": "90737ba2e23d403e9978429413e4777f",
".git/objects/ff/fe553d19898d3e5a55561573635acbcaa3d526": "12040641a116773479a0d98fe4435af9",
".git/objects/a6/250f34d3e8110adb080dfc75572a64588fd977": "19bf27d33ba75fc6085bc96756c06f46",
".git/objects/2d/9d52fff98ad41325ac3e82cbf4f688632e6cd4": "af22797e50beacb1e314ecabba614638",
".git/objects/c4/17694d8527313eb3404d0620e3687b304c3a10": "1eaed1ba9c349f972e5913a6d7045b10",
".git/objects/c4/f303569dc4a763614932f0f97de2224cca1cf6": "3be58b171e16f079c87918551862f315",
".git/objects/c9/0162ad0041ed18881546b2823c68eee2af40d1": "175c9e14a197e97d30fba4e95c5b8f4c",
".git/objects/c9/fffc92840206ff157a9a1211497dbbe0df1920": "7b49077d4e23bea6fb5bfc1f53783162",
".git/objects/9f/20c17ce2ee9b97cd8f9a2be7b4fbce20958f9c": "ae2c012c4620b6082ff24e509669629c",
".git/objects/3a/ad58f6e2c2471967fdff69eddaa32ad9d5b02b": "6024de5fa3b7497ee3cfc3fe1a2479f6",
".git/objects/66/8b782a906ecd69eea0f7c99ec72339aa04f2c8": "ac3ea0086a0ae4ef5997c139cf7d8faf",
".git/objects/66/aa941c1647069e8172bc77914ca47bf78dbf16": "1470dba6528a513a96dc5a06e6644de3",
".git/objects/bd/36939dd0c5799b819a405b3ce8645dec4a8863": "735b9237713ed444d5fdb93d677fb6cb",
".git/objects/bd/ca450e4950c950ca7e04fa72782ee266d09c07": "ba2c01c668c101b707641f5fc68420df",
".git/objects/12/05a19b55d504535fa4542f0e9224271796627b": "0edabc2217eef68d0c5f6fd0dd28dd4a",
".git/objects/06/59e49cb067992f30b79b8065cdc9008d585472": "d596cd4faad14c0d92ccee6e01e9af31",
".git/objects/06/599545b303b8ab622846562f46d4ed48a2d16c": "bf011a0a0b573a2c4b0561c7b3278396",
".git/objects/e2/b24ca0349e4dd5e7a395f0c15376a6ac925320": "f28642c39ac40afe1d44e046c432dab3",
".git/objects/e2/a14c3640e2062757bc7c3e0dab2955d847d29b": "94fe91de166b2ef803ef1addad0738a4",
".git/objects/36/e6a62d3b2af6c1e6bd2f34bcd84b017b8d2b1e": "f383437995403f2dc44f4b6ef572db7c",
".git/objects/36/6669bad8fe617e7e9da8a573761bfd22768d03": "e50d812891bf3d88244c8263b2e4fffa",
".git/objects/36/3425ca86e53a6bced022bb815d3f512414866c": "8538381205a933a0982d0128dd435395",
".git/objects/27/846759abee83766f0eb3240cc9c5f5622e0a75": "0bafebfa0be940f46ce0375414d1bfb3",
".git/objects/bf/0ef2becbb9ddbbcd15bdc0f20e43e42eccf023": "b6549e29699f76e33afaf6356356fb55",
".git/objects/bf/eba7037514fb4db6de493b33312f1e2b3b1e58": "538b322135035ff48e9d4d38dfd7e5b2",
".git/objects/99/5cf256fe3b23f52702e368f465693efc423285": "05902d87b8c385ce2c537feebcaed23b",
".git/objects/99/ac6f3496dd727308e5703b3f86561561d273ef": "71534454f2ec8eb1f5aa4d4ff02edda0",
".git/objects/8a/454bfe5038e68eb5dc8637f753a865490b8ae8": "6dd0237a925dda522c6ad8c950966c04",
".git/objects/8a/86b393552920afe38e9b6c8cc8989b936e607a": "d9a0fe1966fcb69187930f961c5d4269",
".git/objects/8a/d68b69ade48faab03bd24372767dfbcb3714a6": "208ad9265377382ff9651c0849155199",
".git/objects/8a/637253e68c51a14776029e189a966662f634e2": "902e7b7ac8c0bc947dece938b67cd99b",
".git/objects/1b/ccb3d07bfc77df8c08bacda9b2e97733ae08af": "eaedbcd714adee7aee97c3f0b7131f5d",
".git/objects/af/6719ace2c155cee049b7f456c55cc0dd4a82ce": "dd438cc5aabd42f23ea22195c31e8875",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/aa/db1dde20d22c8d8927eeba45b2110e1f81a192": "ebb4de2c376cd9c2ef9a7b286de7cb1b",
".git/objects/eb/963e903be9d6c3b2ec748a40956da6f28b0cfe": "4e079e3c56b7b7f03d110e90e6f098a8",
".git/objects/eb/36abdf6383eb6c8c2de9ec063e32f473fc96e8": "fcc62df49ab1370c9dd1c1e19c351520",
".git/objects/fc/3e991f701b0fc8b3394fcb63c77ce9597759d1": "2d8448016101213ad6f798433ba3befb",
".git/objects/fc/5e54e2f52659301d89bed4d309e214fe37cb57": "46025bfce74587d36ba2e49a19970b16",
".git/objects/19/95e58cac567834d40f10b7f4013f98e1dcac40": "72c474cec119d27ece8a558363177bb2",
".git/objects/19/c0402f64ad7e83f2b5e356de71d2e3eb0400b6": "3dc4dea1d2373f1e8bd3707bb08df2f9",
".git/objects/2b/f0ef1a3c3284ea5a70a9932a1d4d45686dbc15": "c40e76dd051dd8c4fac476c9a4cbe7e0",
".git/objects/84/d5b8aa9ffebfdc3bd0d240f435cf5aced4e97c": "e52266d270abfd208db72954320125f4",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/0f/d5778d6f075440c250d810348a972c943e8053": "d13c1a1d9714fd5887b74ea4281689e0",
".git/objects/4b/49faf15a1540e1057f71c717c31399ba2f6319": "23ecbbaea4cdb73828ddb3f2e84cf485",
".git/objects/82/c637e801da6700bb84bd60b12e5102f3215127": "642e95b9232c66676b2513e7011b2c88",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/13/bddb6b5f6e32531564c52ca97afafa07c77d43": "31a60c874bdc73fbb7db352a64dd0538",
".git/objects/e4/bd8ba5c440a802653318a0c711d594a2e8472b": "bfc55cde66b187443468c4a26d522294",
".git/objects/e4/a32c379069c6dad75ce36e44d2af6d8976cb48": "3a75ea093cadba46fac7e346a3c0cd04",
".git/objects/6d/136e4bd1fd8be21d5091a6d083e7add13a68dd": "f55479327f6177402c329f1073e91e15",
".git/objects/8e/218563477c67cc54688ce953f9348a7d18c553": "668f5a2704e46da5951b356cdd905ffa",
".git/objects/8e/15bcbeaf58e67c39ddbe0587aad5584cd7d7fb": "bb6933b3ced626f830aadee6c08c3d16",
".git/objects/f3/16242a5d223fc4a35caf4ebdb480de4289bc79": "19afabc0c8cb874d2f4ccf2d8e1409b3",
".git/objects/38/33114878cfe2d6f2a3d3993a2db166f44dee32": "dbceab4d4c617dc3c8a922c5fa0fcf21",
".git/objects/38/f39ef0b07e54e185eb9556d4b84bffd18811fd": "1b13cbd4d2d42718ebcd0077aa6feb6e",
".git/objects/f2/fa6a68481c50656e626a481769fde7289706e2": "9d4bf52164487a089b8ef14f66203273",
".git/objects/f2/750b5f891f666b5a0d856383b526e99f35b113": "5abc2f312df6da5a2d4e0bdc2c915acb",
".git/objects/f2/e182137f938bac73245814419a7d84190a3f4f": "3d941e7a053ba8c5053ae8be0ddc8a5d",
".git/objects/7d/54a04634cedaa8d68cdbeeaf7197dfe995ffd6": "71ffab4ff37ab952df8868bc0caabf68",
".git/objects/4f/971d8ffd78d6dcce65ef20b60580b17e69b9cd": "360d5b9bf86425cf1eec4e1da81cf167",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/1f/f69f3149639dc66486f9291b94ae2e101bdc5a": "3b004c43415eea6f452f0f47cd285568",
".git/objects/4d/1a0402cde3ab3bd1c4bcc48de7d0c2ff344495": "903f2a18f5fce51832be4cf784cfb67f",
".git/objects/4d/e218c6894ecbcae1f0a1efbbd56c95dc2bd252": "916182ed67a8ab840ffa1a3003b7886c",
".git/objects/4d/fd14ea7b1524ab17997b4074ae1d869c33010f": "d44696785619805ad0ee2b242ac15892",
".git/objects/86/e0c9e078ede501a60cd42b6a3e54e743ffb6ad": "9f66f41c75de5bfd43bfc2eb7360438b",
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
".git/objects/c3/7746fabe20d7d844cb2f946e644ce13048497e": "44a801cd2291a3fd392486b594dfcb98",
".git/objects/8b/cb491db38a0417b7c668fb45799ad1a2d74444": "25dd9b2be9c5aedd917f2055d90af0cd",
".git/objects/8b/a6d2b46a29e7953dddd21343093639cf737843": "56b98587676412eeea925c13e13bbc2e",
".git/objects/8b/d52d9e31f2e2af4dc29344a2653ba1e2feea3e": "3566624a0fabd29d3dd6588e35d56e96",
".git/objects/d5/bc6fd40ab269a8a9ceb48138ec1b00f7493960": "4439855acfc43e8547947e915c8f785a",
".git/objects/1e/ea0e0c881b626654409ebb256a674a475d5ddf": "bdeb40b413870069faab5cc6ab667016",
".git/objects/1e/8ff85289a8a44062046693f3ad2b97913c5363": "c66ee6563a92f3cadfb6c992e601431a",
".git/objects/1e/5efe1df6a956c729a6ae8025c5e5535e811b05": "259142ea6256e0afe4b67ccd57378bc4",
".git/objects/1e/4cddb49a3b815f0abe1e9c057a35175d6f2d77": "30e4a7cbc42fb686d6e1910ceb822939",
".git/objects/cc/7956034b36a78ad7a30e8d4761ae6c937d6514": "400b5c12dd8e803142ae98b301c470bf",
".git/objects/cc/76003aad294a13d856ef681748a198b906c57b": "4c0fbb6dee9c9ba1c0f17930b258f111",
".git/objects/cc/a576ea1fd0af1b6d292a7ef597fb9c10930be4": "16a276640045b7e414a7088772761946",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/c2/fe24fc86e221fbff55d87ba11093e34b45db89": "816336f1da5911d264d4e19ba453682e",
".git/objects/c2/ee1e8318c15c20fe537486fee1ca1a48adfd74": "b39fdf8d69797c475e551c477554d674",
".git/objects/c2/58f6ac813c57149af098a249f2ded4c0133337": "20eb23cb8e4cda103359e6aa405a8e18",
".git/objects/c2/fac09f9864b6ec198699ea9e0c5a022e9c0d10": "5262399287250855cb7139f2a89e7909",
".git/objects/c2/711e722e1364b9c176df383952e7c02264d8cf": "e07999b2861db9f16166479d3379c974",
".git/objects/c2/c88e10d370af181a3b0b660fb700e6339c5c1f": "243bc3232026d0eabfa4dc4ad6779553",
".git/objects/cb/ee10a299b9a1e645272b310c4b5bae6adee254": "debe6b019fa093be61198001a8ebbcc0",
".git/objects/cb/af78a83e9bf4ad8a5ff61956ff1a7c87a84a6e": "d05e87971bcbe5c6da748da8ef50fd20",
".git/objects/94/8218209a1bdd4756bad1f5bd5642f822fc479c": "34b31cb5f198081e20741cd28458492d",
".git/objects/94/97f29dcc548b816a1bc8a7e1bad5f4481d2ebf": "55a4506e533eeda2797b0ce37fda4601",
".git/objects/6c/6cb2d254be23f793f8ec8ba2088dac43cc1b25": "890118d2c42ac9b793a21ed6e988dd7f",
".git/objects/62/716af7e5513373ed843ade581d03aeac3cea08": "141cc2c7a686d7b7d4571096be785616",
".git/objects/62/c37bece9ffc502b05bb4c55e946b890d63c4b9": "90732ffa5e22ff3ecf0f8b282f3665d2",
".git/objects/c6/17ed7a0e545fbb41bb67bb7bd7289c54776944": "103ad6a4dc752f89690f6599e6e15c93",
".git/objects/c6/85cc701f99d7f66f6fd53c81fe198228490367": "77860517c108ab5304ab9e470fd00f90",
".git/objects/c6/360144e3dbeacde43bdbdefe0dc57542252b18": "875d6d6b64e63b3fba96a7d7502033bc",
".git/objects/c6/9df815041de845c80b02963c4e639636acfe7d": "eb82b1686fe3c50a4824f7c9a0a67675",
".git/objects/c6/ce4421990f3b48b83d6aa4fa329f39a50723e3": "681f0a35cdee820615ba5f7600514c82",
".git/objects/e0/fdaae9988e00ad80409d6b0b37ae3adaccaf03": "5939b2ea910bdaf0b2d00a562c354203",
".git/objects/e0/17bb61305de68b28dfbfb770cd86783e7e1c6c": "a56c135cbb500ec2a3b42b1e2e6b750c",
".git/objects/e0/4de294698c835e97e1bed23d5ed0b7510e947d": "efd84b15f9b8346c1768010a879bb3f6",
".git/objects/5f/dc637875ee91576899cdd845ba26fee2896662": "1fdead60e35cc682351812046d6a4d1d",
".git/objects/d0/3b4186fb3e2208f1ef314205e29fbecc2dc0a2": "cb00322f7a5cec5eed02f19ddbab7ee1",
".git/objects/d0/4ecb7d72fcee00e1ab5fd814765adf36abd405": "6e879a9c401e305be5a729c1a6586075",
".git/objects/ee/4f025a7477f3312f5fb6a8ceef6516f7fcabc4": "5ca9247d8bd6a271b16a0792c66a08bd",
".git/objects/ee/932a69a6b5b4d3112615d6f96e2cdc2cd76378": "23129682b3bfcdc0532146bb86d959fe",
".git/objects/f9/9c4e25fdbb50662c87e163ef7937c58929517b": "5ea7a459cbdab2a71956aacc4ea67dcb",
".git/objects/dd/d6aaaa4ce4f3c279ac022a0873d6bf746d616c": "b3b50d463095819b0682d8246fc740c3",
".git/objects/be/fa1caf35e2593ef36d028cf49dc076c824adfb": "7702b2b27e1d232a25458555809b4a61",
".git/objects/01/3b2349853052fdc349d00673e84f8359bc2d15": "bb28a4333850175b622927f3c762af05",
".git/objects/01/959ec11f53e40890db235a8344362a556b8624": "74946817e6c02777dd745e8457f1f682",
".git/objects/59/274d61a453eab6e306e12182c295fc77b1fb32": "6b9de292a075cfb253221ad140dfcce7",
".git/objects/59/0aa08bcace6810f3a473bca86a65ca5c9c0e31": "9030116c23e7e0d5c79d38f3c210c03d",
".git/objects/7b/0f47bc148585921611bdf387e24b70e6e35f0b": "ace706cb9e663b3fa7aed283d4df9bee",
".git/objects/11/0428e4d24864f2418adcee0dbd9fff6ce9dd38": "d6f566202d81c76150ff41d3bcf3529e",
".git/objects/11/1fd7cd54375e8e9dd08bbfbdf3c6cd23c5c10b": "121566774345b3a1cb249bb2ee1ce961",
".git/objects/d3/8afd035bde1a7078fea82b9dbb431317abd805": "f33a61189a73bbd246a3946730a14f5b",
".git/objects/40/67295b648bc4cac6a05c86bd7783149679be8c": "9e45f81c137c30f9d12b8aeb1c1f7377",
".git/objects/40/0a3ba674fb45cb827a99e865c45f8ff6fec861": "6620a2e7c77a009db627efee05764ecc",
".git/objects/40/f79f2d9e548d5d9305eca3934496b163505e01": "eb4b5574ae11b55029bd53d323333967",
".git/objects/40/55861e1ceac96b14f777d48b949f25dfa9297e": "3794c5fbca8f5cd062caa49fc9d85c89",
".git/objects/b5/ce360166e1d08d52ee1eb68395c8ef63f364ec": "a5fd8f9eb67799ae3c85e5041d4c6b40",
".git/objects/e8/ff7f072c25b97f27f13eb9ac01d3112647850f": "a47cd5dc03311883531c5fbfe0366ae8",
".git/objects/e8/a1aa424d873c7274e1ce615d1cdd130a237a10": "6c94cb44fc629ad7347ad94267a25367",
".git/objects/f8/d483548dc1906c1466c735e4507fec3c3a3b74": "a78e53af3ccfa4f19c2dca4e6094119d",
".git/objects/f8/63dbb548580e14a30ab194ca2acb3aab825274": "18f912d978f662d3052bebc308457619",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/ORIG_HEAD": "e3e8a5a5b9bafdbc38b293e15b489bd0",
".git/index": "90c91334c8c6efcc349cadb3f6d8d69f",
".git/refs/remotes/origin/master": "1db34b8b5e24ed7c2350bd8dcec3038b",
".git/refs/heads/master": "1db34b8b5e24ed7c2350bd8dcec3038b",
".git/FETCH_HEAD": "5441e7233f08765ccb64cf78fd8dc11a",
".git/COMMIT_EDITMSG": "66e652588c1d636673c59e31a468eb5b",
".git/logs/HEAD": "93e42ede0d6e494ae60d34b7231e798c",
".git/logs/refs/remotes/origin/master": "db987d345527aee3dda266ad971daabc",
".git/logs/refs/heads/master": "93e42ede0d6e494ae60d34b7231e798c",
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
