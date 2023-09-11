'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "dcaf362fafae5dbbb833258934eb52d5",
"index.html": "ae0760e20e6237eb071a5d876c08c877",
"/": "ae0760e20e6237eb071a5d876c08c877",
"main.dart.js": "b97fc02fb63e502f88a7cb8af548fb85",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ddaeab3be7920a3e3dfd5f731bca91ec",
"assets/AssetManifest.json": "f2a21a9987c219674a666f8caad459ee",
"assets/NOTICES": "967456dace405c4b47b13d59dff2474d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/zego_express_engine/assets/ZegoExpressWebFlutterWrapper.js": "d44243f11adf055dab0bbc5901f439cc",
"assets/packages/zego_uikit/assets/icons/member_camera_normal.png": "0c9b7ef19613acc4f7b45b03eaa8c05a",
"assets/packages/zego_uikit/assets/icons/video_view_camera_on.png": "767c529173c084143074a6a97e32f16f",
"assets/packages/zego_uikit/assets/icons/nav_close.png": "d5a4f6a62cf4761f787d0b2e718e535e",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_more_checked.png": "3573c99e2a7720ff2092e4f572b00012",
"assets/packages/zego_uikit/assets/icons/share_screen_stop.png": "abef995e3768c42d16ac5e1b05120cb5",
"assets/packages/zego_uikit/assets/icons/video_view_mic_on.png": "5f4a10f968013313145e45051cb20bf7",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_mic_normal.png": "05b63e5db51f06fcf2fe8d8f2ffe9669",
"assets/packages/zego_uikit/assets/icons/member_mic_off.png": "da54635dfe0e424047509267c747c683",
"assets/packages/zego_uikit/assets/icons/member_camera_off.png": "7e4da8fda7851b9c07bdb16e54532021",
"assets/packages/zego_uikit/assets/icons/video_view_mic_speaking.png": "f36f281fee197efe2eabc76b1355bc88",
"assets/packages/zego_uikit/assets/icons/video_view_full_screen_open.png": "c0fdccb5b807c1d25e9de110a2f24e46",
"assets/packages/zego_uikit/assets/icons/video_view_mic_off.png": "ffcd14ed2c2e4d68554bbab32ca83a7e",
"assets/packages/zego_uikit/assets/icons/video_view_wifi.png": "15ceb63b27034d03ae339e78c63238a6",
"assets/packages/zego_uikit/assets/icons/2.0x/member_camera_normal.png": "0a0decead6773a2ae1b1fc726cb2dba7",
"assets/packages/zego_uikit/assets/icons/2.0x/video_view_camera_on.png": "ceb2dfe462b738ad547939b553ff314d",
"assets/packages/zego_uikit/assets/icons/2.0x/nav_close.png": "faf29b14204b46842cc095efc4131686",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_more_checked.png": "86a57573701177bf50526ddf8919257d",
"assets/packages/zego_uikit/assets/icons/2.0x/share_screen_stop.png": "28751ac6943d6195c81351dd954c9d7e",
"assets/packages/zego_uikit/assets/icons/2.0x/video_view_mic_on.png": "85b79b0c60b1781019350176881d2006",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_mic_normal.png": "bb82e53aa5e2da3ee06e82f1d788c992",
"assets/packages/zego_uikit/assets/icons/2.0x/member_mic_off.png": "4eda86a0a0a6ae75cf8521f63834a54d",
"assets/packages/zego_uikit/assets/icons/2.0x/member_camera_off.png": "fab9cc0caa1ed63244039a2ac50af5a4",
"assets/packages/zego_uikit/assets/icons/2.0x/video_view_mic_speaking.png": "017fb1acbfeafeab17d3119af65dc61b",
"assets/packages/zego_uikit/assets/icons/2.0x/video_view_full_screen_open.png": "655a9f372024d96fca06c6a39d7e80d7",
"assets/packages/zego_uikit/assets/icons/2.0x/video_view_mic_off.png": "ab6fdc4bef804d7470fa95ab724a3493",
"assets/packages/zego_uikit/assets/icons/2.0x/video_view_wifi.png": "d201ad7f9e9401f7fe60f79cd69e807c",
"assets/packages/zego_uikit/assets/icons/2.0x/video_view_full_screen_close.png": "e5d96585b746432238b0c6eec6857526",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_camera_normal.png": "f9749113cfcdcf507dba5962aa71efec",
"assets/packages/zego_uikit/assets/icons/2.0x/message_fail.png": "d0fb57427a0074f574aef0d474f213d8",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_mic_off.png": "0e0d07c9e48304166ba2963ce85c1cba",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_speaker_bluetooth.png": "d24d7aeca55782323f36427f9f68889f",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_end.png": "cb7886e14a43a4d7c6315025032a0272",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_speaker_off.png": "3d36462e98a3dd959cdede0b81c3d311",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_flip_camera.png": "a5e90392059a2957af9e255023ab7c73",
"assets/packages/zego_uikit/assets/icons/2.0x/invite_video.png": "7246561fa86cc404de866e76d9737110",
"assets/packages/zego_uikit/assets/icons/2.0x/video_view_camera_off.png": "a5c8ecf7492e0f8a1487513a4c0ceef9",
"assets/packages/zego_uikit/assets/icons/2.0x/message_loading.png": "dc31511440f51dbf93422c6288644247",
"assets/packages/zego_uikit/assets/icons/2.0x/send_disable.png": "8e810767d851b09a84eb05580e7e83d4",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_speaker_normal.png": "f280aecd1664df5ddb9b41a3265fbc96",
"assets/packages/zego_uikit/assets/icons/2.0x/share_screen_start.png": "dab73df5268a057e660fcab1861a11ca",
"assets/packages/zego_uikit/assets/icons/2.0x/invite_reject.png": "f967ba275f67032b14a0383d8eff0779",
"assets/packages/zego_uikit/assets/icons/2.0x/invite_voice.png": "24970c6bf9acf13244d9b749e3ea8b4f",
"assets/packages/zego_uikit/assets/icons/2.0x/member_mic_speaking.png": "16b678656c45cd19cd11baec8c8ac751",
"assets/packages/zego_uikit/assets/icons/2.0x/send.png": "ade012f5e004a41459da5d44bfd2957f",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_more_normal.png": "e8cf0cb5b4ae57f3634325200b340aef",
"assets/packages/zego_uikit/assets/icons/2.0x/back.png": "3a15fb4e9557ed72c77543500486c5fb",
"assets/packages/zego_uikit/assets/icons/2.0x/member_mic_normal.png": "e2788b3c2302b8b561e29c064e9a99ff",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_camera_off.png": "c0901dd816919eb4e6ffffd5f7239184",
"assets/packages/zego_uikit/assets/icons/video_view_full_screen_close.png": "347b5c7e154224cbe561f5d7a4a02bab",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_camera_normal.png": "101da6ff95cb34d25aaef7a1c058c473",
"assets/packages/zego_uikit/assets/icons/3.0x/member_camera_normal.png": "e0eecc41b8db3333d6e0b73c71af64fb",
"assets/packages/zego_uikit/assets/icons/3.0x/video_view_camera_on.png": "7369f517f02618f0ba7fe5c1e4fe55fd",
"assets/packages/zego_uikit/assets/icons/3.0x/nav_close.png": "6dd30082ee4dd26b634f2d107a320cda",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_more_checked.png": "c3162cc37bc41fb13957b70b06476c3e",
"assets/packages/zego_uikit/assets/icons/3.0x/share_screen_stop.png": "210873b802db239aec4c790855ef6d60",
"assets/packages/zego_uikit/assets/icons/3.0x/video_view_mic_on.png": "2b8b980b6e013bcfdbb0b58f1e5f0640",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_mic_normal.png": "93436ec1f8389307c037521ce840f0a2",
"assets/packages/zego_uikit/assets/icons/3.0x/member_mic_off.png": "a7489c5b6deafcb4eb10a02226bc3d9b",
"assets/packages/zego_uikit/assets/icons/3.0x/member_camera_off.png": "0527fda34af9d6369549d7ae54ec467a",
"assets/packages/zego_uikit/assets/icons/3.0x/video_view_mic_speaking.png": "18354ef4c2606bcf96d4a0b3b9065193",
"assets/packages/zego_uikit/assets/icons/3.0x/video_view_full_screen_open.png": "e4e91ee80390a53294a20c1e12dd783c",
"assets/packages/zego_uikit/assets/icons/3.0x/video_view_mic_off.png": "33d5afecd9378cf570271818d4c56667",
"assets/packages/zego_uikit/assets/icons/3.0x/video_view_wifi.png": "0b78795289c2165bd6646f714cd2159c",
"assets/packages/zego_uikit/assets/icons/3.0x/video_view_full_screen_close.png": "8dafedc394aa80ab9370073413e89be7",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_camera_normal.png": "be38e8cacecd08727f98b23a2cc1b297",
"assets/packages/zego_uikit/assets/icons/3.0x/message_fail.png": "1904f578c97fc26b7ab85980495bb439",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_mic_off.png": "d7b3619803222f891f8d1487e2dd95af",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_speaker_bluetooth.png": "d15c31d947ce16f9f08ed2066542c629",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_end.png": "c0dc110bb095effd61589390546351d3",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_speaker_off.png": "4f9bd995c5123400a3f13b4e4f1ed90c",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_flip_camera.png": "06b289a7d6de55c6f7a5b43d7244afce",
"assets/packages/zego_uikit/assets/icons/3.0x/invite_video.png": "b3fd4d33ffcc9e0c05ac8353657faf0f",
"assets/packages/zego_uikit/assets/icons/3.0x/video_view_camera_off.png": "5275a3c18503c20b5a6238450272d2be",
"assets/packages/zego_uikit/assets/icons/3.0x/message_loading.png": "567cf9465ee6f9b501bb6438207ae3aa",
"assets/packages/zego_uikit/assets/icons/3.0x/send_disable.png": "61577087db110346c44498944d1f491c",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_speaker_normal.png": "2037c7dec37882bf30049d75dd3740c4",
"assets/packages/zego_uikit/assets/icons/3.0x/share_screen_start.png": "be1c3f30eef1e9777618df830e8c406f",
"assets/packages/zego_uikit/assets/icons/3.0x/invite_reject.png": "50fe4208eaf232329d725b6be760ad05",
"assets/packages/zego_uikit/assets/icons/3.0x/invite_voice.png": "f191776d49da7ce3d3f06a557aee74ea",
"assets/packages/zego_uikit/assets/icons/3.0x/member_mic_speaking.png": "e1cea5ddeba80a0a16e608f75dcceac5",
"assets/packages/zego_uikit/assets/icons/3.0x/send.png": "024f9c9faa2127335926a4037e23a684",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_more_normal.png": "45f7fe05bac7f3c1106d63c1078d7a7f",
"assets/packages/zego_uikit/assets/icons/3.0x/back.png": "c9d6e68a3c3d1b3b49723eb745b15e09",
"assets/packages/zego_uikit/assets/icons/3.0x/member_mic_normal.png": "8a0ab49718e61d010bf1830f697511ec",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_camera_off.png": "a1676a233c3fdf883b1b9525c52272c6",
"assets/packages/zego_uikit/assets/icons/message_fail.png": "c4f7303a3963fa31acd74ca482d4e097",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_mic_off.png": "d522490af830e751a9735927194c2e8b",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_speaker_bluetooth.png": "c803bf03b3df3af7a34d36f895c8d0bb",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_end.png": "3db1588b978af3720d74a5a6dbdb4cff",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_speaker_off.png": "941cd4e186d9feeda35b793a55ab05cf",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_flip_camera.png": "6929bd51a1655cf7df3a23a2f3133ec8",
"assets/packages/zego_uikit/assets/icons/invite_video.png": "8278efa5e15b6ea4e3af4b408611fe62",
"assets/packages/zego_uikit/assets/icons/video_view_camera_off.png": "00241c1e4517457be35ec8235b848633",
"assets/packages/zego_uikit/assets/icons/message_loading.png": "41913c24ab8f26819589af76852f6f4c",
"assets/packages/zego_uikit/assets/icons/send_disable.png": "7e80b5c74959ba84cbc7e50beb0e34f1",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_speaker_normal.png": "3783636d5601e7cba03cbefbfc9d9e93",
"assets/packages/zego_uikit/assets/icons/share_screen_start.png": "0cd5f14df5e1bb573d2aef1de2ed32b6",
"assets/packages/zego_uikit/assets/icons/invite_reject.png": "aef7ea169c2aa2c1abfaa366fec54da0",
"assets/packages/zego_uikit/assets/icons/invite_voice.png": "849a299fd3670fc6693da77d392d4e45",
"assets/packages/zego_uikit/assets/icons/member_mic_speaking.png": "cf6b2e626ec6571f11d8638ae3fb8609",
"assets/packages/zego_uikit/assets/icons/send.png": "b6f3a4923052cce9db8ef6fc39d2c90b",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_more_normal.png": "96fb3eb790757ec86896cbdd56953e97",
"assets/packages/zego_uikit/assets/icons/back.png": "1cc8237aa89ef773a1e65d57293a5c06",
"assets/packages/zego_uikit/assets/icons/member_mic_normal.png": "9c6cc34ee53802ea794e0d9e55b92124",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_camera_off.png": "47c428aed459e061d743f6286c61b0ba",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/top_camera_normal.png": "dc6b7ac94eaed5424802fcbead3fa668",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/top_speaker_bluetooth.png": "b04390d87db444304e3d4398631fc56e",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/top_speaker_off.png": "3c95a868a57075926045623d8b44cbfa",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/2.0x/top_camera_normal.png": "5940d30e7642f8459debe9e01ce829a9",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/2.0x/top_speaker_bluetooth.png": "78fcd46c9972d99710907c5f8ccf94bb",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/2.0x/top_speaker_off.png": "fcf47a9efe886a5d482bdde54aaeeec5",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/2.0x/im.png": "5419f695006e601b7bcc4e85e94d177f",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/2.0x/top_camera_off.png": "d434a043cbe06be56ede4f281964d581",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/2.0x/top_im.png": "bfae7b2c9d0cc8d79f94310fb3498818",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/2.0x/top_mic_off.png": "28554ecad59db57575dc4b637b53aa1f",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/2.0x/top_speaker_normal.png": "020a8d6c4d96d32b1a20e6aff07925c0",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/2.0x/top_mic_normal.png": "3ea2d932172c0454a09c45f078664d5b",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/2.0x/top_member_normal.png": "21a466088f1aa00d0c77260dbea684cb",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/2.0x/top_camera_overturn.png": "f648e99e1db0435a3641ef0c59bce702",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/2.0x/top_leave.png": "dcda26c480ba5902e955fc92107d7bea",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/2.0x/back.png": "3a15fb4e9557ed72c77543500486c5fb",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/im.png": "e69aca2198610729852a6571f06633cb",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/top_camera_off.png": "c9cf4be875b6199968563a2cd1c074f0",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/top_im.png": "eb0fc118673f25f108dae6cf100349bd",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/3.0x/top_camera_normal.png": "2a36e0e76624b90c4fabeb99b1dad43a",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/3.0x/top_speaker_bluetooth.png": "ec25a7d033d06aaae7148174c4013a47",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/3.0x/top_speaker_off.png": "a1492cc22394b4bc1c0108ac6b85df6b",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/3.0x/im.png": "a204a9ee814519e5405e5faa4c3c723e",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/3.0x/top_camera_off.png": "fb03b4577458f4f7e02975babac44b29",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/3.0x/top_im.png": "7c406701f8f17e2d1fda20fbd37aa660",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/3.0x/top_mic_off.png": "0ab8bfe26ea6668e4deb1a44f45934f5",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/3.0x/top_speaker_normal.png": "f5e8192c65d25a03b5de7ae63b65c7ac",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/3.0x/top_mic_normal.png": "44b994d15577bf5ee3d48ce3d40f08f6",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/3.0x/top_member_normal.png": "eb5dee3f434a0a9fc2c601458d608841",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/3.0x/top_camera_overturn.png": "522c321eae222817299840e170496638",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/3.0x/top_leave.png": "5bedec991805e42f6f7d0eb47818ca9f",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/3.0x/back.png": "c9d6e68a3c3d1b3b49723eb745b15e09",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/top_mic_off.png": "af8999a1c16c95613205861be9149cdc",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/top_speaker_normal.png": "0ef8e12a60da54ce226ab88832c01455",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/top_mic_normal.png": "ac4e085d93f6f938a140a6917ecfe540",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/top_member_normal.png": "4a669238d6446736c1add5e321688145",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/top_camera_overturn.png": "07d7ce9e0ce2e0d5c3a3e7e3325e036e",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/top_leave.png": "e32ee1406a52f377e4ca331754648ac8",
"assets/packages/zego_uikit_prebuilt_video_conference/assets/icons/back.png": "1cc8237aa89ef773a1e65d57293a5c06",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "4796bfa3a448dcdae227092df2f679ae",
"assets/fonts/MaterialIcons-Regular.otf": "5319b7c271c69ff3ae40242a55b969a2",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/canvaskit%202.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit%202.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/skwasm.worker%202.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
