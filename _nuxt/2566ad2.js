(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{381:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"nav":{"articles":"Articles","courses":"Cours","talks":"Talks","activities":"Activités"}},"en":{"nav":{"articles":"Articles","courses":"Courses","talks":"Talks","activities":"Activities"}}}'),delete e.options._Ctor}},382:function(e,t,n){var content=n(385);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(59).default)("4c645746",content,!0,{sourceMap:!1})},383:function(e,t,n){"use strict";n(51),n(52);var o=n(380),r=n(388),l=n(389),c={components:{Typography:o.a,Logo:r.a,LanguageSwitcher:l.a},props:{title:{type:String,required:!0},backLink:{type:String,required:!1,default:"/"}}},d=(n(384),n(50)),m=n(386),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("header",{staticClass:"header"},[t("div",{staticClass:"header__logo"},[t("nuxt-link",{attrs:{to:e.localePath(e.backLink),"aria-label":"Back to home"}},[t("Logo")],1)],1),e._v(" "),t("Typography",{staticClass:"title",attrs:{variant:"header__title",component:"h1"}},[e._v("\n    "+e._s(e.title)+"\n  ")]),e._v(" "),t("div",{staticClass:"header__actions"},[t("div",{staticClass:"tabs"},[t("nuxt-link",{attrs:{to:e.localePath("/articles"),tabindex:e.$route.path.includes("/articles")?-1:0}},[t("Typography",{staticClass:"tab",class:{active:e.$route.path.includes("/articles")},attrs:{component:"span"}},[e._v("\n          "+e._s(e.$t("nav.articles"))+"\n        ")])],1),e._v(" "),t("nuxt-link",{attrs:{to:e.localePath("/courses"),tabindex:e.$route.path.includes("/courses")?-1:0}},[t("Typography",{staticClass:"tab",class:{active:e.$route.path.includes("/courses")},attrs:{component:"span"}},[e._v("\n          "+e._s(e.$t("nav.courses"))+"\n        ")])],1),e._v(" "),t("nuxt-link",{attrs:{to:e.localePath("/talks"),tabindex:e.$route.path.includes("/talks")?-1:0}},[t("Typography",{staticClass:"tab",class:{active:e.$route.path.includes("/talks")},attrs:{component:"span"}},[e._v("\n          "+e._s(e.$t("nav.talks"))+"\n        ")])],1),e._v(" "),t("nuxt-link",{attrs:{to:e.localePath("/activities"),tabindex:e.$route.path.includes("/activities")?-1:0}},[t("Typography",{staticClass:"tab",class:{active:e.$route.path.includes("/activities")},attrs:{component:"span"}},[e._v("\n          "+e._s(e.$t("nav.activities"))+"\n        ")])],1)],1)]),e._v(" "),t("LanguageSwitcher")],1)}),[],!1,null,"0a120701",null);"function"==typeof m.default&&Object(m.default)(component);t.a=component.exports},384:function(e,t,n){"use strict";n(382)},385:function(e,t,n){var o=n(58)(!1);o.push([e.i,'.header[data-v-0a120701]{height:9rem;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--color-dark)}.header__logo[data-v-0a120701]{margin:.5rem}.header__title[data-v-0a120701]{text-align:center}.header__actions[data-v-0a120701],.header__logo[data-v-0a120701],.header__title[data-v-0a120701]{width:33%}.header__actions[data-v-0a120701]{align-self:flex-end}.tabs[data-v-0a120701]{display:flex;justify-content:flex-end;padding-right:2rem}.tabs .tab[data-v-0a120701]{position:relative;display:inline-block;margin:0 1rem -1px;border-top-left-radius:.5rem;border-top-right-radius:.5rem;border-bottom:1px solid var(--color-dark);border:1px solid var(--color-dark);border-bottom-color:var(--color-black);background:var(--color-black);cursor:pointer;padding:1rem;width:6rem;height:3rem;transition:all .5s ease;box-shadow:0 -.25rem .25rem var(--color-black);transform-origin:bottom center;text-decoration:none;text-align:center;box-sizing:border-box}.tabs .tab[data-v-0a120701]:after{position:absolute;content:"";display:block;width:calc(100% + 4rem);height:2rem;left:-2rem;bottom:calc(-2rem - 1px);background-color:var(--color-black)}.tabs :focus .tab[data-v-0a120701]:not(.active),.tabs :hover .tab[data-v-0a120701]:not(.active){border-bottom:1px solid var(--color-light);border:1px solid var(--color-light);border-bottom-color:var(--color-black);transform:scale(1.3);box-shadow:0 0 2rem var(--color-light)}.tabs a[data-v-0a120701]:focus{outline:none}.tabs .tab.active[data-v-0a120701]{border-bottom:1px solid var(--color-light);border:1px solid var(--color-light);border-bottom-color:var(--color-black);box-shadow:0 0 1rem var(--color-light);cursor:default}@media screen and (max-width:850px){.header[data-v-0a120701]{height:auto;flex-direction:column;align-items:center}.header__actions[data-v-0a120701],.header__logo[data-v-0a120701],.header__title[data-v-0a120701]{width:auto}.header__title[data-v-0a120701]{margin-bottom:1rem}.header__actions[data-v-0a120701]{align-self:center}.tabs[data-v-0a120701]{justify-content:center;padding-right:0}.tabs .tab[data-v-0a120701]{padding:.5rem;margin:0 .5rem -1px;width:auto;font-size:.8rem}}',""]),e.exports=o},386:function(e,t,n){"use strict";var o=n(381),r=n.n(o);t.default=r.a},423:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"talks":{"title":"Sujets de conférences","meta_description":"Liste des conférences que j\'ai eu la chance de donner.","video_title":"Vidéo de la conférence","slide_link":"Lien vers les slides","alternative":"L\'ensemble des versions","alternative_video":"Vidéo","alternative_slide":"Slides"}},"en":{"talks":{"title":"Conferences talks","meta_description":"List of conferences I had the chance to lead.","video_title":"Video of the conference","slide_link":"Slide link","alternative":"Alternative versions","alternative_video":"Video","alternative_slide":"Slides"}}}'),delete e.options._Ctor}},445:function(e,t,n){var content=n(504);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(59).default)("52373ae4",content,!0,{sourceMap:!1})},498:function(e,t){e.exports={name:"Designer, Développeur, créons la différence ! (feat C. Freyd-Foucault)",metaInfo:"Paris Web - Octobre 2019",video:"https://player.vimeo.com/video/381753514",slides:"https://docs.google.com/presentation/d/1KJLG4BcdEWQHLhcvTYIbLxqhph0y052LVoSvMEDMaUk/edit?usp=sharing",description:"\n    On utilise tous une bibliothèque de composants comme Material, Bootstrap & co. C’est très pratique car cela nous fournit un Design System clé en main. Seulement, le projet manque de personnalité et ne se différencie pas.\n    <br/>\n    <br/>\n    Avec notre équipe composée de designers (Cécile) et de développeurs (Florent), comment pouvons-nous donner une identité à nos projets ? Y a-t-il des méthodes que nous pouvons appliquer pour que la production de l’interface soit différenciante, cohérente et agréable ?\n    <br/>\n    <br/>\n    Nous vous proposons donc de définir quelles sont les différentes méthodes et techniques pour y arriver. Nous débuterons par explorer et établir notre identité pour ensuite mettre en place nos éléments fonctionnels et arriver rapidement à un Design System adapté en respectant les normes de l’Atomic Design. Nous vous proposons de partir d’un projet qui a choisi la facilité, où la communication est inexistante dans l’équipe. Nous améliorerons notre manière de travailler de façon itérative pour arriver à construire notre propre Design System au fil des explications théoriques.\n  ",alternatives:[{name:"Bdx.io",video:"https://www.youtube.com/embed/iD0Hy7jsuMc",slide:"https://docs.google.com/presentation/d/1-bbtog4Yzf4rldcejvftwVxhSeMlYzhW8ddjk7EBgcE/edit?usp=sharing",date:"Octobre 2019"},{name:"Devfest Lille",video:"https://www.youtube.com/embed/W6Lo6FkaUm8",slide:"https://docs.google.com/presentation/d/14NBP1g7bBRw159fwQjI5mD4UCXA4MsNzJZB0tWjjJxA/edit?usp=sharing",date:"Juin 2019"},{name:"Best Of Web",video:"https://www.youtube.com/embed/cZfqxLribBc",slide:"https://docs.google.com/presentation/d/14NBP1g7bBRw159fwQjI5mD4UCXA4MsNzJZB0tWjjJxA/edit?usp=sharing",date:"Juin 2019"},{name:"Devoxx 2019",video:"https://www.youtube.com/embed/jXcO7Qu1Gjs",slide:"https://docs.google.com/presentation/d/1TysGKTvqLzjbnMgr5vycZsqMbTXkVJ8JpUAelNA-CC0/edit?usp=sharing",date:"avril 2019"}]}},499:function(e,t){e.exports={name:"React Fiber : une innovation discrète, des implications retentissantes (feat M.Lux et M. Frachet)",metaInfo:"Voxxed Days Luxembourg - Juin 2019",video:"https://www.youtube.com/embed/VtBXexNtVhk",slides:"https://docs.google.com/presentation/d/1zfuQ8tgtcYpUMsyydrD4R88F9NG-c8SguHlR77Mt2J4/edit?usp=sharing",demo:"http://pokemon.lux.frachet.berthelot.io/",description:"\nL’équipe de React a fait de nombreuses annonces à propos de nouvelles APIs ces derniers temps. On parle de : Suspense, Lazy Hooks, Error Boundaries, Time Slicing ou encore Concurrent React.\n<br/><br/>\nIl y a des choses particulièrement intéressantes comme de nouveaux patterns de programmation qui pourraient changer la manière de coder des interfaces dans le futur. Mais il faut avouer qu’il peut devenir difficile de suivre toutes les évolutions proposées et en comprendre la direction.\n<br/><br/>\nL’effervescence autour des nouvelles fonctionnalités a pour origine la ré-implémentation du moteur de React dans sa version 16 : nom de code React Fiber (sorti en septembre 2017). Cette refonte très technique n’a pas fait de buzz et n’a rien changé directement dans l’API. Elle a en revanche libéré un potentiel incroyable pour trouver de nouveaux concepts que Facebook ajoute petit à petit dans sa bibliothèque.\n<br/><br/>\nNous vous proposons de reprendre le sujet dans l’ordre : qu’est ce que React Fiber ? Qu’est ce qui change dans le moteur et ce que cela veut dire pour vous ? Nous nous intéresserons ensuite à chacune des nouveautés (Suspense, Lazy, Hooks, Error Boundaries, Time Slicing, ...) pour en détailler le fonctionnement, ce que cela apporte et son lien avec Fiber.\n  ",alternatives:[{name:"Riviera Dev",slide:"https://docs.google.com/presentation/d/1g8AvGn9tt6Qqjsfegq1TsGnUrnWdStgMehGLjFYKxIc/edit?usp=sharing",date:"Mai 2019"}]}},500:function(e,t){e.exports={name:"La toile en VR (feat B. Jonathan)",metaInfo:"Devoxx France - Avril 2018",video:"https://www.youtube.com/embed/JLhugL7Hvgc",slides:"https://fberthelot.github.io/la_toile_en_vr/",description:"\n  L’émergence de l’Oculus Rift et des casques de VR ont conduit le monde du développement à se réintéresser à la 3D. Jusqu’alors Three.js était une référence quant à la façon dont les développeurs faisaient de la 3D sur les navigateurs web.\n<br /><br />\n  Le Web étant fait pour être simple - si si on vous assure, même le CSS -, il a fallu repenser la manière dont nous faisions de la 3D.\n<br /><br />\n  En premier lieu grâce à l’API WebVR, nous donnant un accès plus franc aux capacités matérielles de nos machines. Puis plus récemment grâce aux nouveaux framework émergeant nous rendant la tâche encore plus simple (et toujours avec moins de lignes de code). Il y a actuellement deux principaux frameworks React VR et A-Frame, dont nous vous expliquerons les différentes approches.\n<br /><br />\n  Nous allons dans cette conférence vous donner les clés pour démarrer en VR facilement et peut-être atterrir dans la réalité augmenté ou même la réalité mixte.\n  "}},501:function(e,t){e.exports={name:"Réconcilions web et audio (feat B. Plouzennec)",metaInfo:"Riviera Dev - mai 2017",slides:"http://slides.com/benjaminplouzennec/reconcilions-web-et-audio#/",description:"\n  Dans la préhistoire du web existait 'bgsound', une balise HTML qui associait un son “d’ambiance” à la page. La mauvaise conception de ces éléments ont amené une haine viscérale envers les sites web lançant de la musique automatiquement. Pourquoi ne pas tout remettre à plat pour repenser ce qu’est l’audio dans le monde du web et ce qu’il peut nous apporter ? Aujourd’hui les nouveaux outils mis à disposition nous permettent de faire énormément de chose, quitte à envisager un retour des sites web avec de la musique.\n<br/><br/>\n  Nous vous proposons de partir d’un riff de guitare acoustique et de transformer ce son vers un solo de guitare électrique digne de Jimi Hendrix à Woodstock – l’autotune n’a qu'à bien se tenir ! – à travers un live coding dans lequel nous réaliserons une pédale de distorsion entièrement Web. Ce sera l’occasion de découvrir par étapes certains éléments techniques comme Distortion, Reverb, Tone balance et l'affichage d’un spectre de son.\n<br/><br/>\n  Et bien sûr, nous analyserons tout au long de cette expérience les erreurs qui peuvent transformer une expérience sensorielle en cauchemar sonore afin d’en déduire les bonnes pratiques à respecter pour favoriser au mieux l’expérience utilisateur !\n"}},502:function(e,t){e.exports={name:"Package ? Tout compris !",metaInfo:"Snowcamp - Février 2017",slides:"https://docs.google.com/presentation/d/1JuNunEmZk8zQf2lJccUP1YfJYRPWzHxgkhD9GQaQIFw/edit?usp=sharing",description:"\n  Le 11 Octobre 2016, Facebook – qui n'utilisait déjà plus NPM – a open-sourcé avec google son propre gestionnaire de paquets :  'yarn'. Comment accueillir la nouvelle ? Doit-on se réjouir – pour sa rapidité notamment – ou s'inquiéter de la disparition potentielle de 'NPM' ?\n<br/><br/>\n  Afin d’avoir un raisonnement logique pour répondre à cette question, je vous invite à prendre du recul sur les gestionnaire de paquets. Quel est leur rôle ? Comment doivent-ils s’utiliser ? Comment être certain d’avoir les même version de nos dépendances en production et en développement ? Comment gérer les dépendances : en arbre, à plat ou même les deux à la fois ? Comment sont stockés ces paquets, peuvent-ils être supprimés ?\n<br/><br/>\n  Continuons notre exploration et nous nous apercevons très vite que les gestionnaires de paquets sont principalement influencés par la manière dont les dépendances sont importées dans notre code. Le TC-39 est en train de réfléchir sur les spécifications du ES Module Loader ; mettons-nous à leur place et voyons quelles sont les différentes options.\n"}},503:function(e,t,n){"use strict";n(445)},504:function(e,t,n){var o=n(58)(!1);o.push([e.i,"#talks-page[data-v-602343ed]{height:100%}.subjects[data-v-602343ed]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-around;padding:3rem;box-sizing:border-box;min-height:calc(100% - 14rem - 1px)}.subject[data-v-602343ed]{margin:2rem;width:55%}@media screen and (max-width:850px){.subjects[data-v-602343ed]{padding:1rem}.subject[data-v-602343ed]{margin:1rem;width:90%}}",""]),e.exports=o},505:function(e,t,n){"use strict";var o=n(423),r=n.n(o);t.default=r.a},555:function(e,t,n){"use strict";n.r(t);n(26),n(29),n(42);var o=n(396),r=n(380),header=n(383),footer=n(387),l=(n(43),n(34),n(17),n(60),n(35),n(61),n(25)),c=(n(41),n(498)),d=n.n(c),m=n(499),v=n.n(m),h=n(500),f=n.n(h),_=n(501),x=n.n(_),y=n(502),k=n.n(y);function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var C=[d.a,v.a,f.a,x.a,k.a].map((function(s){return j(j({},s),{},{type:"talk"})})),L={components:{Card:o.a,CardTitle:o.e,CardMeta:o.c,CardVideo:o.f,CardLink:o.b,CardSecondary:o.d,Typography:r.a,Header:header.a,Footer:footer.a},data:function(){return{subjects:C}},head:function(){return{htmlAttrs:{lang:this.$i18n.locale},title:"Florent Berthelot - ".concat(this.$t("talks.title")),meta:[{hid:"twitter:title",name:"twitter:title",content:"Florent Berthelot - ".concat(this.$t("talks.title"))},{hid:"og:title",property:"og:title",content:"Florent Berthelot - ".concat(this.$t("talks.title"))},{hid:"description",name:"description",content:this.$t("talks.meta_description")},{hid:"twitter:description",name:"twitter:description",content:this.$t("talks.meta_description")},{hid:"og:description",property:"og:description",content:this.$t("talks.meta_description")},{hid:"og:url",property:"og:url",content:"https://berthelot.io/talks"}]}}},O=(n(503),n(50)),D=n(505),component=Object(O.a)(L,(function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"talks-page"}},[t("Header",{attrs:{title:e.$t("talks.title")}}),e._v(" "),t("main",{staticClass:"subjects"},e._l(e.subjects,(function(n){return t("Card",{key:n.name,staticClass:"subject"},[t("CardTitle",[e._v(e._s(n.name))]),e._v(" "),t("Typography",[t("span",{domProps:{innerHTML:e._s(n.description)}})]),e._v(" "),t("CardMeta",[e._v(e._s(n.metaData))]),e._v(" "),n.video?t("CardVideo",{attrs:{video:n.video,title:e.$t("talks.video_title")}}):e._e(),e._v(" "),t("CardLink",{attrs:{href:n.slides,target:"_blank",rel:"noopener"}},[e._v(e._s(e.$t("talks.slide_link")))]),e._v(" "),n.alternatives?t("CardSecondary",[t("Typography",{attrs:{variant:"title--extra-small"}},[e._v("\n          "+e._s(e.$t("talks.alternative"))+"\n        ")]),e._v(" "),t("ul",e._l(n.alternatives,(function(n){return t("Typography",{key:n.name,attrs:{component:"li"}},[e._v("\n            "+e._s(n.name)+":\n            "),n.video?t("Typography",{attrs:{component:"a",target:"_blank",rel:"noopener",href:n.video}},[e._v(e._s(e.$t("talks.alternative_video")))]):e._e(),e._v(" "),n.slide?t("Typography",{attrs:{component:"a",target:"_blank",rel:"noopener",href:n.slide}},[e._v(e._s(e.$t("talks.alternative_slide")))]):e._e(),e._v("\n            - "+e._s(n.date)+"\n          ")],1)})),1)],1):e._e()],1)})),1),e._v(" "),t("Footer")],1)}),[],!1,null,"602343ed",null);"function"==typeof D.default&&Object(D.default)(component);t.default=component.exports}}]);