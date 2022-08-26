(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[78821,3278,82020,27950],{782677:(e,r,t)=>{function o(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,r,t){return r&&o(e.prototype,r),t&&o(e,t),e}function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function n(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r}function a(e){return!(!e||"function"!=typeof e.hasOwnProperty||!(e.hasOwnProperty("__ownerID")||e._map&&e._map.hasOwnProperty("__ownerID")))}function c(e,r,t){return Object.keys(e).reduce((function(r,o){var i=""+o;return r.has(i)?r.set(i,t(r.get(i),e[i])):r}),r)}t.d(r,{Fv:()=>T,cY:()=>h,fK:()=>I});var d=function(){function e(e,r,t){if(void 0===r&&(r={}),void 0===t&&(t={}),!e||"string"!=typeof e)throw new Error("Expected a string key for Entity, but found "+e+".");var o=t,i=o.idAttribute,n=void 0===i?"id":i,c=o.mergeStrategy,d=void 0===c?function(e,r){return s({},e,r)}:c,u=o.processStrategy,l=void 0===u?function(e){return s({},e)}:u,_=o.fallbackStrategy,p=void 0===_?function(e,r){}:_;this._key=e,this._getId="function"==typeof n?n:function(e){return function(r){return a(r)?r.get(e):r[e]}}(n),this._idAttribute=n,this._mergeStrategy=d,this._processStrategy=l,this._fallbackStrategy=p,this.define(r)}var r=e.prototype;return r.define=function(e){this.schema=Object.keys(e).reduce((function(r,t){var o,i=e[t];return s({},r,((o={})[t]=i,o))}),this.schema||{})},r.getId=function(e,r,t){return this._getId(e,r,t)},r.merge=function(e,r){return this._mergeStrategy(e,r)},r.fallback=function(e,r){return this._fallbackStrategy(e,r)},r.normalize=function(e,r,t,o,i,s){var n=this,a=this.getId(e,r,t),c=this.key;if(c in s||(s[c]={}),a in s[c]||(s[c][a]=[]),s[c][a].some((function(r){return r===e})))return a;s[c][a].push(e);var d=this._processStrategy(e,r,t);return Object.keys(this.schema).forEach((function(r){if(d.hasOwnProperty(r)&&"object"==typeof d[r]){var t=n.schema[r],a="function"==typeof t?t(e):t;d[r]=o(d[r],d,r,a,i,s)}})),i(this,d,e,r,t),a},r.denormalize=function(e,r){var t=this;return a(e)?c(this.schema,e,r):(Object.keys(this.schema).forEach((function(o){if(e.hasOwnProperty(o)){var i=t.schema[o];e[o]=r(e[o],i)}})),e)},i(e,[{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),e}(),u=function(){function e(e,r){r&&(this._schemaAttribute="string"==typeof r?function(e){return e[r]}:r),this.define(e)}var r=e.prototype;return r.define=function(e){this.schema=e},r.getSchemaAttribute=function(e,r,t){return!this.isSingleSchema&&this._schemaAttribute(e,r,t)},r.inferSchema=function(e,r,t){if(this.isSingleSchema)return this.schema;var o=this.getSchemaAttribute(e,r,t);return this.schema[o]},r.normalizeValue=function(e,r,t,o,i,s){var n=this.inferSchema(e,r,t);if(!n)return e;var a=o(e,r,t,n,i,s);return this.isSingleSchema||null==a?a:{id:a,schema:this.getSchemaAttribute(e,r,t)}},r.denormalizeValue=function(e,r){var t=a(e)?e.get("schema"):e.schema;return this.isSingleSchema||t?r((this.isSingleSchema?void 0:a(e)?e.get("id"):e.id)||e,this.isSingleSchema?this.schema:this.schema[t]):e},i(e,[{key:"isSingleSchema",get:function(){return!this._schemaAttribute}}]),e}(),l=function(e){function r(r,t){if(!t)throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');return e.call(this,r,t)||this}n(r,e);var t=r.prototype;return t.normalize=function(e,r,t,o,i,s){return this.normalizeValue(e,r,t,o,i,s)},t.denormalize=function(e,r){return this.denormalizeValue(e,r)},r}(u),_=function(e){function r(){return e.apply(this,arguments)||this}n(r,e);var t=r.prototype;return t.normalize=function(e,r,t,o,i,n){var a=this;return Object.keys(e).reduce((function(r,t,c){var d,u=e[t];return null!=u?s({},r,((d={})[t]=a.normalizeValue(u,e,t,o,i,n),d)):r}),{})},t.denormalize=function(e,r){var t=this;return Object.keys(e).reduce((function(o,i){var n,a=e[i];return s({},o,((n={})[i]=t.denormalizeValue(a,r),n))}),{})},r}(u),p=function(e){if(Array.isArray(e)&&e.length>1)throw new Error("Expected schema definition to be a single schema, but found "+e.length+".");return e[0]},R=function(e){return Array.isArray(e)?e:Object.keys(e).map((function(r){return e[r]}))},E=function(e,r,t,o,i,s,n){return e=p(e),R(r).map((function(r,a){return i(r,t,o,e,s,n)}))},y=function(e,r,t){return e=p(e),r&&r.map?r.map((function(r){return t(r,e)})):r},f=function(e){function r(){return e.apply(this,arguments)||this}n(r,e);var t=r.prototype;return t.normalize=function(e,r,t,o,i,s){var n=this;return R(e).map((function(e,a){return n.normalizeValue(e,r,t,o,i,s)})).filter((function(e){return null!=e}))},t.denormalize=function(e,r){var t=this;return e&&e.map?e.map((function(e){return t.denormalizeValue(e,r)})):e},r}(u),S=function(e,r,t,o,i,n,a){var c=s({},r);return Object.keys(e).forEach((function(t){var o=e[t],s="function"==typeof o?o(r):o,d=i(r[t],r,t,s,n,a);null==d?delete c[t]:c[t]=d})),c},m=function(e,r,t){if(a(r))return c(e,r,t);var o=s({},r);return Object.keys(e).forEach((function(r){null!=o[r]&&(o[r]=t(o[r],e[r]))})),o},A=function e(r,t,o,i,s,n){return"object"==typeof r&&r?"object"!=typeof i||i.normalize&&"function"==typeof i.normalize?i.normalize(r,t,o,e,s,n):(Array.isArray(i)?E:S)(i,r,t,o,e,s,n):r},I={Array:f,Entity:d,Object:function(){function e(e){this.define(e)}var r=e.prototype;return r.define=function(e){this.schema=Object.keys(e).reduce((function(r,t){var o,i=e[t];return s({},r,((o={})[t]=i,o))}),this.schema||{})},r.normalize=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return S.apply(void 0,[this.schema].concat(r))},r.denormalize=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return m.apply(void 0,[this.schema].concat(r))},e}(),Union:l,Values:_},T=function(e,r){if(!e||"object"!=typeof e)throw new Error('Unexpected input given to normalize. Expected type to be "object", found "'+(null===e?"null":typeof e)+'".');var t={},o=function(e){return function(r,t,o,i,s){var n=r.key,a=r.getId(o,i,s);n in e||(e[n]={});var c=e[n][a];e[n][a]=c?r.merge(c,t):t}}(t);return{entities:t,result:A(e,e,null,r,o,{})}},g=function(e){var r={},t=b(e);return function e(o,i){return"object"!=typeof i||i.denormalize&&"function"==typeof i.denormalize?null==o?o:i instanceof d?function(e,r,t,o,i){var n=o(e,r);if(void 0===n&&r instanceof d&&(n=r.fallback(e,r)),"object"!=typeof n||null===n)return n;if(i[r.key]||(i[r.key]={}),!i[r.key][e]){var c=a(n)?n:s({},n);i[r.key][e]=c,i[r.key][e]=r.denormalize(c,t)}return i[r.key][e]}(o,i,e,t,r):i.denormalize(o,e):(Array.isArray(i)?y:m)(i,o,e)}},b=function(e){var r=a(e);return function(t,o){var i=o.key;return"object"==typeof t?t:r?e.getIn([i,t.toString()]):e[i]&&e[i][t]}},h=function(e,r,t){if(void 0!==e)return g(t)(e,r)}},983360:(e,r,t)=>{t.d(r,{$o:()=>a,$t:()=>L,AO:()=>re,AZ:()=>S,Ae:()=>D,BM:()=>R,CB:()=>ce,CD:()=>m,DC:()=>b,Df:()=>I,F5:()=>s,Fi:()=>y,Fl:()=>p,GG:()=>Q,HQ:()=>V,IY:()=>oe,JG:()=>K,K0:()=>n,Kp:()=>te,L6:()=>i,LB:()=>C,Ly:()=>G,MA:()=>k,MU:()=>o,NE:()=>ue,OO:()=>W,Pz:()=>q,Qj:()=>X,ST:()=>le,Th:()=>Y,U1:()=>w,UD:()=>Ee,Wn:()=>_e,XA:()=>ie,YZ:()=>u,Yn:()=>A,ZX:()=>v,a9:()=>g,aj:()=>H,b6:()=>l,c7:()=>T,cZ:()=>U,cs:()=>F,dF:()=>N,dO:()=>ne,eI:()=>M,fz:()=>d,hC:()=>fe,hl:()=>h,il:()=>ye,j_:()=>pe,l_:()=>c,le:()=>j,lj:()=>Re,mU:()=>ae,nk:()=>E,o3:()=>ee,pM:()=>$,pV:()=>x,pd:()=>de,q:()=>Z,tg:()=>B,u2:()=>_,vH:()=>z,vW:()=>se,wc:()=>f,xV:()=>O,xl:()=>P,zB:()=>J});const o="APPEND_FEED_ITEMS",i="DISMISS_UNAUTH_APP_UPSELL",s="SETTINGS_CHANGE",n="TOPIC_FOLLOW",a="PIN_ADD",c="PIN_DELETE",d="PIN_EDIT",u="PIN_UNDO_SAVE",l="PIN_IMPRESSIONS",_="PINS_MOVE",p="PINS_MOVE_ALL",R="SET_SESSION_DATA",E="BOARD_SECTION_EDIT",y="BOARD_COLLABORATOR_DELETE",f="BOARD_COLLABORATOR_ADD",S="BOARD_INVITE_APPROVED_BY_VIEWER",m="BOARD_INVITE_DENIED_BY_VIEWER",A="BOARD_SECTION_DELETE",I="AUTHENTICATE_USER",T="REGISTER_USER",g="SET_LOGIN_SIGNUP_FROM",b="UPDATE_CURRENT_SEARCH",h="UPDATE_RECENT_SEARCHES",O="CLEAR_RECENT_SEARCH",D="CLEAR_RECENT_PERSONAL_SEARCH",P="CLEAR_RECENT_SEARCHES",N="CLEAR_RECENT_PERSONAL_SEARCHES",v="COMPLETE_STORY",L="SET_NUM_SIGNUP_STEPS",C="SET_OWN_PROFILE_PINS_REFRESH",F="SHOW_REPIN_ANIMATION",B="HIDE_REPIN_ANIMATION",$="SEND_CONVERSATION_MESSAGE",U="ONE_TAP_SAVE",w="ONE_TAP_UNSAVE",M="CLEAR_MESSAGES_BADGE",k="CLEAR_MESSAGE_BADGE",G="RELOAD_VISUAL_SEARCH_ANNOTATIONS",H="SHOW_NUX_HOMEFEED_LOADER",V="SHOW_BIZ_NUX_HOMEFEED_LOADER",z="SET_VIEWED_IMAGE",j="SET_VIEWED_SHARED_PINS",x="SHOW_NAV_FOOTER",K="HIDE_NAV_FOOTER",Y="SET_MESSENGER_CAMPAIGN_DATA",q="LOGGED_OUT_USER_INFO_FOUND",W="LOGGED_OUT_USER_INFO_NOT_FOUND",Z="PIN_BUILDER_LOADED_IMAGES",Q="UPDATE_PIN_BUILDER_INPUT",X="SET_ACTIVE_HOMEFEED_TAB",J="SET_MARKETING_PARAMS",ee="SET_SOCIAL_SEASONAL_BOARD",re="SET_SHARE_ON_BOARD_PAGE",te="UPDATE_PIN_REACTION_COUNT",oe="SET_FLASHLIGHT_CROP_SOURCE",ie="ALLOW_ALL_COOKIES",se="SCROLL_TO_CLOSEUP_PIN",ne="STOP_SCROLL_TO_CLOSEUP_PIN",ae="UPDATE_CONTACT_REQUEST_STATUS",ce="REMOVE_CONTACT_REQUESTS",de="SHOW_TOAST_CONTACT_REQUEST_UNDO",ue="SHOW_BLOCK_UNBLOCK_MODAL_CONTACT_REQUEST",le="REMOVE_CONVERSATION",_e="DISMISS_UNAUTH_SAVE",pe="SET_UNAUTH_SAVE_PIN_ID",Re="COMPLETE_UNAUTH_SAVE_ACTION",Ee="UPDATE_USER_FIRST_HOME_FEED_REQUEST_AFTER_NUX",ye="SET_LANDING_PAGE_TYPE",fe="REPLACE_STATE"},932995:(e,r,t)=>{function o(e,r,t){const o=[...e],i=o.splice(r,1)[0];return o.splice(t,0,i),o}t.d(r,{Z:()=>o})},909499:(e,r,t)=>{t.d(r,{Hd:()=>n,_R:()=>i,lw:()=>o,wF:()=>s});const o={PINS:"pins",PINS_BUYABLE:"buyable_pins",PINS_MINE:"my_pins",PINS_VIDEO:"videos",BOARDS:"boards",USERS:"users",IDEA_PINS:"idea_pins"},i=e=>{switch(e){case o.PINS:return 43;case o.PINS_MINE:return 107;case o.PINS_BUYABLE:return 254;case o.PINS_VIDEO:return 3306;case o.BOARDS:return 44;case o.USERS:return 45;default:return null}},s=e=>{switch(e){case o.PINS:return 60;case o.PINS_MINE:return 63;case o.PINS_BUYABLE:return 3800;case o.PINS_VIDEO:return 64;case o.BOARDS:return 61;case o.USERS:return 62;default:return null}},n=e=>{switch(e){case o.USERS:return 1000392;case o.PINS_BUYABLE:return 1000391;case o.PINS:default:return 29}}},648284:(e,r,t)=>{function o({appliedProductFilters:e,autoCorrectionDisabled:r,filters:t,query:o,scope:i,selectedPinImgSig:s,user:n}){const a=[i,t,e,n,s,o].map((e=>null!=e?e:"")).join(":");return r?"auto-correction-disabled:"+a:a}function i({autoCorrectionDisabled:e=!1,appliedFilters:r=null,appliedProductFilters:t=null,bubbleId:o=null,filters:i=null,query:s=null,rs:n="direct_navigation",scope:a="pins",selectedPinImgSig:c=null,sourceId:d=null,user:u}){return{article:o,applied_filters:r,appliedProductFilters:t,auto_correction_disabled:e,corpus:c?"personalize":null,customized_rerank_type:c?"manas_graph_sage_only_wand_rewrite":null,filters:i,query:s,query_pin_sigs:c,redux_normalize_feed:!0,rs:n,scope:a,source_id:d,user:u}}function s(e){const{autoCorrectionDisabled:r,appliedProductFilters:t,appliedFilters:o,filters:s,selectedPinImgSig:n,query:a,rs:c,scope:d,bubbleId:u,user:l}=e;return{name:"BaseSearchResource",options:i({autoCorrectionDisabled:!!r,appliedProductFilters:t,appliedFilters:o,filters:s,query:a,rs:c,scope:d,selectedPinImgSig:n,bubbleId:u,user:l})}}t.d(r,{Ht:()=>s,Tb:()=>o,dM:()=>i})},91456:(e,r,t)=>{t.d(r,{GY:()=>n,LM:()=>c,h9:()=>d,r$:()=>a});var o=t(385740),i=t(909499);const s=["search_articles_story","shop_tab_upsell","story_pins_search_upsell","structured_search_bubble","user_style_story_v2","search_for_you_upsell"];function n({query:e,scope:r}){return`${e}-${r}`}function a({query:e,rs:r,scope:t},s){const n=(0,o.BE)(),a=!(null!=n&&n.viewType||null!=n&&n.viewParameter),c=(0,i.wF)(t);if(!a&&c){const{viewType:t,viewParameter:o}=null!=n?n:{};s({event_type:c,view_type:t,view_parameter:o,aux_data:{query:e,rs:r||"Unknown"}})}"hashtag_closeup"===r?s({event_type:101,component:13065,element:10273,view_type:142}):"hashtag_pinrep"===r&&s({event_type:101,component:0,element:10349,view_type:142})}const c=(e=[])=>{let r=!0;return e.reduce(((e,t)=>{var o;return r&&t.story_type&&s.includes(t.story_type)&&0===(null===(o=t.display_options)||void 0===o?void 0:o.num_columns_requested)?e.searchFullWidthStories.push(t):(r=!1,e.filteredResults.push(t)),e}),{searchFullWidthStories:[],filteredResults:[]})};function d(e){const{results:r=[]}=e||{};return!!r.find((e=>!(null==e||!e.is_eligible_for_filters)))}},848900:(e,r,t)=>{t.d(r,{Z:()=>o});const o=(e,r)=>`${e}:${r||""}`},47495:(e,r,t)=>{t.d(r,{Z:()=>i});var o=t(583228);const i={AggregatedCommentResource:o.rm,AggregatedCommentFeedResource:o.LR,AggregatedCommentReplyResource:o.rm,AggregatedCommentReplyFeedResource:o.LR,AggregatedActivityFeedResource:o.LR,BestPinsFeedAltResource:o.LR,BoardArchiveResource:o.LR,BoardCollaboratorsResource:o.LR,BoardContentRecommendationResource:o.LR,BoardFeedResource:o.LR,BoardFollowingResource:o.LR,BoardInviteResource:o.sf,BoardInvitesResource:o.Ht,BoardlessPinsResource:o.LR,BoardPickerBoardsResource:{all_boards:o.LR,boards_shortlist:o.LR},BoardSectionEditResource:o._F,BoardSectionsRepinResource:o.LR,BoardSectionsResource:o.LR,BoardsFeedResource:o.LR,BoardResource:o.IY,BoardSectionResource:o._F,BoardSectionPinsResource:o.LR,BoardToolsFeedResource:o.LR,ContactRequestsResource:o.LR,ConversationsResource:o.LR,ConversationMessagesResource:o.dq,DidItCommentsResource:o.LR,DidItLikedByResource:o.Gn,DidItUserFeedResource:o.LR,ExploreArticleBlockPinResource:o.LR,ExploreArticleBlockSearchResource:o.LR,ExploreArticleBlockUserResource:o.LR,ExploreArticleBlockUserDidItDataResource:o.LR,ExploreArticleResource:o.yg,FollowingFeedResource:o.LR,HolidaySpotlightRelatedFeedResource:o.LR,HolidaySpotlightResource:o.LR,InterestFollowingResource:o.LR,InterestResource:o.cC,MoreIdeasTabsBoardsResource:o.LR,NewsHubResource:o.LR,NewsHubDetailsResource:o.LR,NewsHubSummaryResource:o.t6,NuxInterestsResource:o.LR,NuxTopicToCreatorsResource:o.Gn,PartnerPermissionsResource:o.Ay,PinResource:o.Cj,PinCatalogResource:o.LR,PinsFromBrandResource:o.LR,ReactionsResource:o.fE,RelatedArticlesResource:o.LR,RelatedInterestsResource:o.LR,RelatedModulesResource:o.LR,RelatedPinFeedResource:o.LR,RelatedProductFeedResource:o.LR,RelatedStreamResource:o.LR,RepinResource:o.Cj,BaseSearchResource:{results:o.LR},SearchResource:o.LR,SectionToolsFeedResource:o.LR,ShareSuggestionsTypeaheadResource:{items:o.LR},ShoppingFeedModularizedResource:o.LR,StoryFeedResource:o.LR,StoryPinTaggedProductsResource:o.LR,SuggestedCreatorFollowsResource:o.Gn,TodayArticleFeedResource:o.LR,IdeasHubTodayArticlesResource:o.LR,TodayArticleResource:o.iF,TodayTabInterestFeedResource:o.LR,TodayTabResource:o.LR,TopicFeedResource:o.LR,UnifiedCommentsResource:o.LR,UserActivityPinsResource:o.LR,UserFollowingResource:o.LR,UserRecentActivityResource:o.LR,UserSimilarBusinessesResource:o.LR,UserHomefeedResource:o.LR,UserPinsResource:o.LR,UserSettingsResource:o.EA,UserStoryPinsFeedResource:o.LR,UserResource:o.EA,VideosFeedResource:o.LR,VisualLiveSearchResource:{results:o.LR},VisualLiveSearchProductFeedResource:o.LR,VisualSearchFlashlightUnifiedResource:o.LR,SeoTier1CandidateResource:o.LR}},583228:(e,r,t)=>{t.d(r,{Ay:()=>v,Cj:()=>d,EA:()=>s,Fx:()=>p,Gn:()=>D,Ht:()=>O,IY:()=>c,LR:()=>N,_F:()=>_,cC:()=>A,dq:()=>E,fE:()=>l,iF:()=>m,rm:()=>n,sN:()=>P,sf:()=>T,t6:()=>h,yg:()=>f});var o=t(782677);const i=Object.freeze({aggregatedComment:"aggregatedComments",article:"articles",board:"boards",boardsection:"boardsections",contactrequest:"contactrequests",conversation:"conversations",conversationMessage:"conversationMessages",creatorRecommendationItem:"creatorRecommendationItems",inbox:"inbox",notification:"notifications",partnerPermissions:"partnerPermissions",pin:"pins",reaction:"reactions",reportReasons:"reportReasons",story:"stories",todayArticle:"todayArticles",topic:"topics",triedit:"triedits",user:"users",invite:"collaboratorinvite",offer:"offers"}),s=new o.fK.Entity(i.user),n=new o.fK.Entity(i.aggregatedComment,{user:s,tagged_users:[s]}),a=new o.fK.Entity(i.article,{curator:s}),c=new o.fK.Entity(i.board),d=new o.fK.Entity(i.pin,{board:c,comments:{data:[{commenter:s}]}}),u=new o.fK.Entity(i.reaction,{user:s}),l=new o.fK.Array(u),_=new o.fK.Entity(i.boardsection,{board:c,preview_pins:[d]}),p=new o.fK.Entity(i.conversation,{sender:s,users:[s]}),R=new o.fK.Entity(i.conversationMessage,{sender:s,users:[s],board:c,pin:d,user:s}),E=new o.fK.Array(R),y=new o.fK.Entity(i.contactrequest),f=new o.fK.Entity(i.story,{cover_pin:d,user:s}),S=new o.fK.Entity(i.triedit,{pin:d,user:s}),m=new o.fK.Entity(i.todayArticle,{article_creator_user:s,content_pin:d,content_pin_official_user:s,video_pin:d}),A=new o.fK.Entity(i.topic,{},{processStrategy:(e,r,t)=>({...e,slug:e.slug?e.slug:e.url_name?e.url_name.includes(":")?e.url_name.split(":")[1]:e.url_name:""})}),I=new o.fK.Entity(i.creatorRecommendationItem,{user:s,interest:A}),T=new o.fK.Entity(i.invite,{invited_by_user:s,invited_user:s,board:c},{idAttribute:e=>`${e.board.id}:${e.invited_user.id}`}),g=e=>{switch(e.type){case"aggregatedcomment":return"aggregatedComment";case"conversationMessage":return"conversationMessage";case"creatorrecommendationitem":return"creatorRecommendationItem";case"explorearticle":return"article";case"news":return"notification";case"interest":return"topic";case"userdiditdata":return"triedit";case"board_section":return"boardsection";case"klp_featured_data":return"topic";case"todayarticle":return"todayArticle";default:return e.type}},b=new o.fK.Union({user:s,board:c,invite:T,pin:d,topic:A,triedit:S},g),h=new o.fK.Entity(i.notification,{content_items:[{content_object:b}],header_icon_objects:[b]}),O=new o.fK.Array(T),D=new o.fK.Array(s),P=new o.fK.Array(c),N=new o.fK.Array({aggregatedComment:n,article:a,board:c,boardsection:_,contactrequest:y,conversation:p,conversationMessage:R,creatorRecommendationItem:I,notification:h,pin:d,story:f,todayArticle:m,topic:A,triedit:S,user:s},g,(e=>{switch(e.type){case"collaboratorinvite":return e.board.id;case"category":return"key";default:return"id"}}));f.define({objects:N});const v=new o.fK.Entity(i.partnerPermissions)},778821:(e,r,t)=>{t.d(r,{DV:()=>l,J:()=>y,ZP:()=>A});var o=t(848900),i=t(932995),s=t(47495),n=t(91456),a=t(648284),c=t(983360),d=t(583228),u=t(338739);const l={AGGREGATED_COMMENTS:"aggregatedComments",AGGREGATED_COMMENT_REPLIES:"aggregatedCommentReplies",BOARD_PINS:"boardPins",BOARDLESS_PINS:"boardlessPins",BOARD_SECTIONS:"boardSections",CALL_TO_CREATE_RESPONSES_FEED:"callToCreateResponsesFeed",CREATED_TAB_STORY_PINS_FEED:"createdTabStoryPinsFeed",CREATED_TAB_ACTIVITY_PINS_FEED:"createdTabActivityPinsFeed",PROFILE_BOARDS:"profileBoards",SEARCH_PINS:"searchPins",SECTION_PINS:"sectionPins",STORY_PIN_DATA:"storyPinData",TODAY_ARTICLE_INTEREST_FEED:"todayArticleInterestFeed",TODAY_TAB:"todayTabFeed",UNIFIED_COMMENTS:"unifiedComments",USER_DID_IT_DATA:"userDidItData"},_=new Set(["PinResource","RepinResource"]),p={ApiResource:e=>{return"/v3/orientation/nux_creator_recommendations/"===(null==e?void 0:e.url)?"nux-creator-recommendations":null!=e&&e.url.match(/\/v3\/call_to_create_pins\/([0-9]|[a-z]|[A-Z])+\/pins\//)?`call-to-create-pins:${e.pin_id}`:"/v3/users/me/interests/"===(null==e?void 0:e.url)?`recommended-interests:${null===(r=e.data)||void 0===r?void 0:r.blend_type}`:"";var r},AggregatedActivityFeedResource:e=>`trieditfeed:${e.aggregated_pin_data_id}`,AggregatedCommentFeedResource:e=>`aggregated-comments:${e.objectId}`,AggregatedCommentReplyFeedResource:e=>`aggregated-comment-replies:${e.objectId}`,BoardlessPinsResource:e=>`boardless-pins:${e.userId}`,BestPinsFeedAltResource:e=>`idea-page-best-pins:${e.interest}`,BoardArchiveResource:e=>"archived-boards",BoardCollaboratorsResource:e=>`board-collaborators:${e.board_id}`,BoardContentRecommendationResource:e=>`recommendation-feed:${e.id}`,BoardFeedResource:e=>`boardfeed:${e.board_id}`,BoardSectionsRepinResource:e=>`board-sections:${e.board_id}`,BoardSectionsResource:e=>`board-sections:${e.board_id}`,BoardSectionPinsResource:e=>`board-section-pins:${e.section_id}`,BoardsFeedResource:e=>`profile-boards:${e.username}`,BoardToolsFeedResource:e=>`board-tools:${e.boardId}`,ConversationsResource:e=>"conversations",DidItCommentsResource:e=>`aggregated-comment-replies:${e.objectId}`,DidItLikedByResource:e=>`triedit-likes:${e.didItDataId}`,DidItUserFeedResource:e=>`profile-tried:${e.username}`,ExploreArticleBlockSearchResource:e=>`explore-search:${e.article_id}:${e.block_id}`,ExploreArticleBlockUserResource:e=>`explore-user:${e.article_id}:${e.block_id}`,ExploreArticleBlockPinResource:e=>`explore-pin:${e.article_id}:${e.block_id}`,ExploreArticleBlockUserDidItDataResource:e=>`explore-did_it:${e.article_id}:${e.block_id}`,ExploreArticleResource:({response:e})=>{if(!e)return"";const r="explore_tab_pin".length,t=e.resource_response.data,{story_type:o}=t?t.objects[0]:{story_type:""};return`explore-${o.slice(r)}:${t.id}`},FollowingFeedResource:()=>"following",HolidaySpotlightRelatedFeedResource:e=>`holiday-spotlight-related:${e.storyType}`,HolidaySpotlightResource:e=>`holiday-spotlight:${e.storyType}`,InterestResource:e=>`klp-pins:${e.interest}`,MoreIdeasTabsBoardsResource:()=>"homefeed-more-ideas-tabs",NewsHubResource:()=>"notifications",NewsHubDetailsResource:e=>`newshubdetail:${e.news_id}`,NuxInterestsResource:e=>"nuxTopics",PinsFromBrandResource:e=>`brand-pins:${e.pin}`,ReactionsResource:e=>`reactions:${e.pin_id}`,RelatedArticlesResource:e=>`related-articles:${e.article_id}`,RelatedModulesResource:e=>`related-modules:${e.pin_id}`,RelatedPinFeedResource:e=>`related-pins:${e.pin}`,RelatedProductFeedResource:e=>"pin"===e.shop_source?`closeup-related-products:${e.pin}`:`related-products:${e.pin}`,RelatedStreamResource:e=>`related-story-pins:${e.pinId}`,SearchResource:e=>{const r=`search:${e.scope}:${e.query}:${e.filters||""}:${e.article||""}`;return e.auto_correction_disabled?`${r}:auto-correction-disabled`:r},BaseSearchResource:e=>{const r=`search:${e.scope}:${e.query}:${e.filters||""}:${e.appliedProductFilters}:${e.article||""}`;return e.auto_correction_disabled?`${r}:auto-correction-disabled`:r},SectionToolsFeedResource:e=>`section-tools:${e.sectionId}`,ShareSuggestionsTypeaheadResource:e=>`share-suggestions:${e.board||e.user}:${e.term}`,ShoppingFeedModularizedResource:e=>e.saved_products_only?`board-shop-saved:${e.board_id}`:`board-shop-related:${e.board_id}`,StoryFeedResource:e=>`story-feed:${e.feed_type}:${e.request_params}`,SuggestedCreatorFollowsResource:()=>"suggested-creator-follows",StoryPinTaggedProductsResource:()=>"story-pin-tagged-products",TodayArticleFeedResource:e=>`today-article:${e.id}`,IdeasHubTodayArticlesResource:e=>`today-article:${e.interest_id}`,TodayTabInterestFeedResource:e=>`today-article-interestfeed:${e.interest_id}`,TodayTabResource:()=>"today-tab",SeoTier1CandidateResource:()=>"tier1-feed",UnifiedCommentsResource:e=>`unified-comments:${e.aggregated_pin_id}`,UserActivityPinsResource:e=>`profile-pins-feed:${e.user_id}`,UserHomefeedResource:e=>e.pin_quiz?"pin-quiz":"homefeed",UserFollowingResource:e=>`user-following:${e.username}`,UserRecentActivityResource:()=>"user-recent-activity",UserSimilarBusinessesResource:e=>`user-similar-business:${e.username}`,UserStoryPinsFeedResource:e=>`story-pins-feed:${e.user_id}`,VideosFeedResource:e=>"videos-feed",VisualLiveSearchResource:e=>`visual-search:${e.pin_id}:${e.crop.x}${e.crop.y}${e.crop.w}${e.crop.h}`,VisualLiveSearchProductFeedResource:e=>`visual-search-products:${e.pin_id}:${e.crop.x}${e.crop.y}${e.crop.w}${e.crop.h}`,VisualSearchFlashlightUnifiedResource:e=>`related-products-unified:${e.pin_id}`,BoardFollowingResource:e=>`board-following:${e.username}`,InterestFollowingResource:e=>`topic-following:${e.username}`,UserPinsResource:e=>`profile-pins:${e.username}`,TopicFeedResource:e=>e.best_pins?`best-topic-pins:${e.interest}`:`topic-pins:${e.interest}`},R={ApiResource:({options:e})=>null!=e&&e.url.match(/\/v3\/call_to_create_pins\/([0-9]|[a-z]|[A-Z])+\/pins\//)?{type:l.CALL_TO_CREATE_RESPONSES_FEED,id:e.pin_id}:null,AggregatedActivityFeedResource:({options:{aggregated_pin_data_id:e}})=>({type:l.USER_DID_IT_DATA,id:e}),AggregatedCommentFeedResource:({options:{objectId:e}})=>({type:l.AGGREGATED_COMMENTS,id:e}),AggregatedCommentReplyFeedResource:({options:{isUnifiedComment:e,objectId:r}})=>({type:e?l.AGGREGATED_COMMENT_REPLIES:l.AGGREGATED_COMMENTS,id:r,reversed:!0}),BoardFeedResource:({options:{board_id:e}})=>({type:l.BOARD_PINS,id:e}),BoardlessPinsResource:({options:{userId:e}})=>({type:l.BOARDLESS_PINS,id:e}),BoardSectionPinsResource:({options:{section_id:e}})=>({type:l.SECTION_PINS,id:e}),BoardSectionsResource:({options:{board_id:e}})=>({type:l.BOARD_SECTIONS,id:e}),BoardsResource:({options:{username:e,sort:r}})=>({type:l.PROFILE_BOARDS,id:(0,o.Z)(e,r)}),BaseSearchResource:({options:{auto_correction_disabled:e,appliedProductFilters:r,scope:t,filters:o,query_pin_sigs:i,query:s,user:c},response:d})=>{var u;return{type:l.SEARCH_PINS,id:(0,a.Tb)({appliedProductFilters:r,autoCorrectionDisabled:e,filters:o,query:s,selectedPinImgSig:i,scope:t,user:c}),items:null!==(u=d.resource_response.data)&&void 0!==u&&u.results?(0,n.LM)(d.resource_response.data.results).filteredResults:[]}},DidItCommentsResource:({options:{objectId:e}})=>({type:l.AGGREGATED_COMMENTS,id:e,reversed:!0}),DidItUserFeedResource:({options:{username:e}})=>({type:l.USER_DID_IT_DATA,id:e}),IdeasHubTodayArticlesResource:({options:{interest_id:e}})=>({type:l.TODAY_TAB,id:e}),RelatedArticlesResource:({options:{article_id:e}})=>({type:l.TODAY_TAB,id:e}),StoryPinDraftsResource:({options:{userId:e}})=>({type:l.STORY_PIN_DATA,id:e}),TodayTabInterestFeedResource:({options:{interest_id:e}})=>({type:l.TODAY_ARTICLE_INTEREST_FEED,id:e}),TodayTabResource:()=>({type:l.TODAY_TAB,id:"todayTab"}),UnifiedCommentsPreviewResource:({options:{aggregated_pin_id:e}})=>({type:l.UNIFIED_COMMENTS,id:e}),UnifiedCommentsResource:({options:{aggregated_pin_id:e,is_reversed:r}})=>({type:l.UNIFIED_COMMENTS,id:e,reversed:r}),UserActivityPinsResource:({options:{user_id:e}})=>({type:l.CREATED_TAB_ACTIVITY_PINS_FEED,id:e}),UserStoryPinsFeedResource:({response:e,options:{user_id:r}})=>({type:l.CREATED_TAB_STORY_PINS_FEED,id:r,items:e.resource_response.data||[]})},E=(e,{pinId:r,oldFeedId:t,newFeedId:o})=>t===o?e:((e,{pinId:r,feedId:t})=>e[t]?{...e,[t]:[{type:"pin",id:r},...e[t]]}:e)(((e,{pinId:r,feedId:t})=>e[t]?{...e,[t]:e[t].filter((e=>!("pin"===e.type&&e.id===r)))}:e)(e,{pinId:r,feedId:t}),{pinId:r,feedId:o}),y=(e,r)=>e in p?p[e](r):null,f=(e,r)=>r?`board-section-pins:${r}`:`boardfeed:${e}`,S=(e,r)=>e.map((({id:e,schema:t})=>{var o;return t?{id:e,type:t,trackingParams:"pin"===t?r.pins[e].tracking_params:void 0,user_id:"creatorRecommendationItem"===t?null===(o=r.creatorRecommendationItems[e])||void 0===o?void 0:o.user_id:void 0}:null})).filter(Boolean),m=(e,r,t)=>Object.keys(e).reduce(((o,i)=>{const s=e[i]||[],n=s.filter((e=>!(e.type===r&&e.id===t)));return s.length!==n.length&&(o[i]=n),o}),{...e}),A=(e={},r)=>{switch(r.type){case u.zP:case u.aW:{const{payload:o}=r,{resource:i,options:n,normalizedResponse:a,schema:c}=o;if(a&&i in p){const t=((e,r,t)=>{const o=t||s.Z[e];if(o===d.LR)return r.result;if(o===d.sN)return r.result.map((e=>({id:e,schema:"board"})));if(o===d.Gn)return r.result.map((e=>({id:e,schema:"user"})));if(o===d.Ht)return r.result.map((e=>({id:e,schema:"invite"})));if(o===d.fE)return r.result.map((e=>({id:e,schema:"reaction"})));if("object"==typeof o){const e=Object.entries(o).find((([e,r])=>r===d.LR));if(e)return r.result[e[0]]}return null})(i,a,c);if(t&&Array.isArray(t)){const o=p[i](n);if("ShoppingFeedModularizedResource"===i){const{board_id:r,saved_products_only:o}=null!=n?n:{},i=`board-shop-related:${r}`,s=`board-shop-saved:${r}`,c=`board-shop-saved-preview:${r}`,d=[...e[i]||[]],u=[...e[s]||[]],l=[...e[c]||[]];return S(t,a.entities).forEach((e=>{var t;o?u.push(e):a.entities.pins&&(null===(t=a.entities.pins[e.id])||void 0===t?void 0:t.board)===r?l.push(e):d.push(e)})),{...e,[i]:d,[s]:u,[c]:l}}if("BoardToolsFeedResource"===i||"SectionToolsFeedResource"===i)return{...e,[o]:t};{const i=(r.type===u.aW&&e[o]||[]).concat(S(t,a.entities));return{...e,[o]:i}}}}else{var t;const i=o.response.resource_response.data;if(null===(t=o.options)||void 0===t||!t.redux_normalize_feed)return e;const s=R[o.resource](o);if(s){const{type:t,id:o,items:n,reversed:a}=s;let c=(n||i||[]).map((e=>((e,r)=>{switch(e.type){case"story":return{id:e.id,type:"story",story_type:e.story_type};case"module":return{id:e.id,type:"module",name:e.name};case"user":return{id:e.id,type:"user"};case"board":return r===l.PROFILE_BOARDS?{id:e.id,type:"board",onProfile:!0,profileGroup:e.archived_by_me_at?"archived":e.privacy||"public"}:{id:e.id,type:"board",onProfile:!1};case"board_section":return{type:"board_section",id:e.id};case"userdiditdata":return{type:"userdiditdata",id:e.id};case"aggregatedcomment":return{type:"aggregatedcomment",id:e.id};case"home_feed_tab":return{type:"home_feed_tab",id:e.id,name:e.name};case"storypindata":return{id:e.id,type:"storypindata"};case"todayarticle":return{type:"todayarticle",id:e.id};case"unifiedcommentspreview":return"userdiditdata"===e.unified_comment.type?{type:"userdiditdata",id:e.unified_comment.id}:{type:"aggregatedcomment",id:e.unified_comment.id};default:return{type:"pin",id:e.id}}})(e,t)));a&&(c=c.reverse());const d=`${t}:${o}`,_=e[d];if(_||r.type!==u.aW){const t=_||[];let o=c;return r.type===u.aW&&(o=a?c.concat(t):t.concat(c)),{...e,[d]:o}}}}break}case"FEED_ITEM_REORDERED":{const{payload:{feedType:t,feedId:o,itemType:s,targetItemId:n,sourceItemId:a}}=r,c=`${t}:${o}`,d=e[c]||[];let u=-1,_=-1;if([l.BOARD_PINS,l.SECTION_PINS,l.BOARD_SECTIONS,"profileBoards"].includes(t)&&(u=d.findIndex((e=>e.type===s&&e.id===a)),_=d.findIndex((e=>e.type===s&&e.id===n))),-1!==u&&-1!==_)return{...e,[c]:(0,i.Z)(d,u,_)};break}case"FEED_ITEMS_REMOVED":{const{payload:{feedType:t,feedId:o,inverseSelection:i,itemType:s,itemIds:n=[]}}=r,a=`${t}:${o}`,c=e[a]||[];if(c&&c.length>0&&(t===l.SECTION_PINS||t===l.BOARD_PINS)){const r=c.filter((e=>{const r=n.includes(e.id);return!(e.type===s&&(i&&!r||!i&&r))})),t=!!r.find((e=>"pin"===e.type));return{...e,[a]:t?r:[]}}if(c&&c.length>0&&t===l.BOARD_SECTIONS){const r=c.filter((e=>{const r=n.includes(e.id);return!(e.type===s&&r)}));return{...e,[a]:r}}if(c&&c.length>0&&(t===l.AGGREGATED_COMMENTS||t===l.BOARDLESS_PINS||t===l.CREATED_TAB_ACTIVITY_PINS_FEED||t===l.CREATED_TAB_STORY_PINS_FEED||t===l.UNIFIED_COMMENTS||t===l.USER_DID_IT_DATA||t===l.STORY_PIN_DATA)){const r=c.filter((e=>{const r=n.includes(e.id);return!(e.type===s&&r)}));return{...e,[a]:r}}break}case"FEED_ITEMS_ADDED":{const{payload:{feedType:t,feedId:o,itemType:i,itemIds:s=[],prepend:n}}=r,a=`${t}:${o}`,c=e[a]||[];if(c&&(t===l.SECTION_PINS||t===l.BOARD_PINS||t===l.BOARDLESS_PINS)){const r=s.map((e=>({id:e,type:i})));let t=0;"story"===(c[0]||{}).type&&(t=1),"story"===(c[1]||{}).type&&(t=2);const o=[...c.slice(0,t),...r,...c.slice(t)];return{...e,[a]:o}}if(c&&t===l.BOARD_SECTIONS){const r=[...s].reverse().map((e=>({id:e,type:"board_section"}))),t=c?[...r,...c]:[...r];return{...e,[a]:t}}if(t===l.AGGREGATED_COMMENTS||t===l.AGGREGATED_COMMENT_REPLIES||t===l.CREATED_TAB_ACTIVITY_PINS_FEED||t===l.CREATED_TAB_STORY_PINS_FEED||t===l.UNIFIED_COMMENTS){const r=s.map((e=>({id:e,type:i}))),t=c?[...n?r:c,...n?c:r]:r;return{...e,[a]:t}}if(t===l.USER_DID_IT_DATA){const r=s.map((e=>({id:e,type:i}))),t=c?[...r,...c]:r;return{...e,[a]:t}}break}case"FEED_INVALIDATE":{const{payload:{feedType:t,feedId:o}}=r,i=`${t}:${o}`;if(e[i]||[])return{...e,[i]:null};break}case c.MU:{const{payload:{id:t,items:o,options:i}}=r,s=e[t];if(s){let r;return r=i.isPrepend?s[0]&&"story"===s[0].type?[].concat(s[0],o,s.slice(1)):o.concat(s):s.concat(o),{...e,[t]:r}}return{...e,[t]:o}}case c.l_:{const{payload:{pinId:t}}=r;return m(e,"pin",t)}case"BOARD_ARCHIVE":{const{payload:{boardId:t,username:o}}=r,i=`profile-boards:${null!=o?o:""}`;if(e[i])return{...e,[i]:e[i].filter((e=>e.id!==t))};break}case"BOARD_UNARCHIVE":{const{payload:{boardId:t}}=r,o="archived-boards";if(e[o])return{...e,[o]:e[o].filter((e=>e.id!==t))};break}case"BOARD_DELETE":{const{payload:{boardId:t}}=r;return m(e,"board",t)}case c.Yn:{const{payload:{boardSectionId:t}}=r;return m(e,"boardsection",t)}case c.u2:{const{payload:{source:t,target:o,pinIds:i,userId:s}}=r,n=t.boardlessPins&&s&&`boardless-pins:${s}`||t.boardId&&f(t.boardId,t.sectionId),a=f(o.boardId,o.sectionId);return i.reduce(((e,r)=>E(e,{pinId:r,oldFeedId:n,newFeedId:a})),e)}case c.Fl:{const{payload:{source:t,target:o,excludePinIds:i}}=r,s=f(t.boardId,t.sectionId),n=f(o.boardId,o.sectionId),a={...e,[s]:i.map((e=>({type:"pin",id:e})))};return delete a[n],a}case c.fz:{const{payload:{pinId:t,boardId:o,section:i,source:{boardId:s,sectionId:n}}}=r,a=f(s,n),c=f(o,null==i?void 0:i.id);return E(e,{pinId:t,oldFeedId:a,newFeedId:c})}case u.AF:if(_.has(r.payload.resource)){const t=r.payload.response.resource_response.data,o=t.board;let i;if("quick_saves"===o.layout)i=`boardless-pins:${r.payload.options.user_id}`;else{const e=r.payload.options.section;i=e?`board-section-pins:${e}`:`boardfeed:${o.id}`}if(e[i]){const r={...e},o={id:t.id,type:"pin",trackingParams:null==t?void 0:t.tracking_params};return r[i]=[o].concat(e[i]),r}}if("BoardSectionResource"===r.payload.resource&&r.payload.normalizedResponse){const t=r.payload.normalizedResponse.result,o=`board-sections:${r.payload.normalizedResponse.entities.boardsections[t].board}`;if(e[o]){const r={...e},i={id:t,type:"boardsection"};return r[o]=[i].concat(e[o]),r}}if("Agg2regatedCommentResource"===r.payload.resource&&r.payload.normalizedResponse){const t={id:r.payload.normalizedResponse.result,type:"aggregatedcomment"},o=["aggregated-comments","unified-comments"];let i={...e};for(const s of o){const o=`${s}:${r.payload.options.objectId}`;e[o]&&(i={...i,[o]:[t].concat(i[o])})}return i}if("AggregatedCommentReplyResource"===r.payload.resource&&r.payload.normalizedResponse){const t=`aggregated-comment-replies:${r.payload.options.objectId}`;return{...e,[t]:[...e[t]||[],{id:r.payload.normalizedResponse.result,type:"aggregatedComment"}]}}if("ReactionsResource"===r.payload.resource&&r.payload.normalizedResponse){const{reaction_pin_id:t}=r.payload.options;if("reaction"===r.payload.options.action_type){const o=`reactions:${r.payload.options.pin_id}`,i={...e},s={id:`${t}:${r.payload.options.user_id}`,type:"reaction",trackingParams:void 0};return i[o]=[s].concat(e[o]),i}if("unreaction"===r.payload.options.action_type){const o=`${t}:${r.payload.options.user_id}`;return m(e,"reaction",o)}}break;case c.ZX:{const{payload:{storyId:t}}=r;return m(e,"story",t)}}return e}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/78821-c165bd20825e360b.mjs.map