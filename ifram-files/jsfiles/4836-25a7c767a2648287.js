(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4836],{92408:function(t,e,a){"use strict";a.d(e,{W:function(){return SkipButtonRight},i:function(){return SkipButtonLeft}});var i=a(85893),n=a(18872),r=a(17296),s=a(74906),c=a(53228),o=a(15009),l=a(45296),d=a(5996),u=a(67294),k=a(9473),p=a(66338),v=a(25113),_=a(87425),h=a(18041),C=a.n(h),SkipButtonLeft=function(){var t,e,a=(0,k.v9)(function(t){return t.data.entity}),o=(0,u.useContext)(p.C),l=o.playbackState,h=o.triggerPlaybackOperation,x=!!a.trackList,b=null==l?void 0:null===(t=l.item)||void 0===t?void 0:t.uri,m=(0,k.I0)(),f=(0,d.NT)();return(0,i.jsx)(r.o,{size:"small",className:(0,n.cx)(C().seekButton,C().seekBack),semanticColor:"textBase",disabled:!(null==l?void 0:null===(e=l.restrictions)||void 0===e?void 0:e.canSeek),onClick:function(){var t;(null==l?void 0:null===(t=l.restrictions)||void 0===t?void 0:t.canSeek)&&(x?(h((0,v.ax)()),m((0,_._)({action_type:"click",action_intent:"previous",item_uri:b}))):(h((0,v.WT)()),m((0,_._)({action_type:"click",action_intent:"skip-back-15"}))))},iconOnly:x?s.y:c.v,"aria-label":x?f("spe.playback-control.skip-back","Previous","Accessibility label for a button that skips to the previous track in a playlist"):f("spe.playback-control.skip-backward-15","Skip back 15 seconds","Accessibility label for a button that skips to the previous 15 sec of a track"),condensedAll:!0})},SkipButtonRight=function(){var t,e,a=(0,k.v9)(function(t){return t.data.entity}),s=(0,u.useContext)(p.C),c=s.playbackState,h=s.triggerPlaybackOperation,x=!!a.trackList,b=null==c?void 0:null===(t=c.item)||void 0===t?void 0:t.uri,m=(0,k.I0)(),f=(0,d.NT)();return(0,i.jsx)(r.o,{size:"small",className:(0,n.cx)(C().seekButton,C().seekForward),semanticColor:"textBase",disabled:!(null==c?void 0:null===(e=c.restrictions)||void 0===e?void 0:e.canSeek),onClick:function(){var t;(null==c?void 0:null===(t=c.restrictions)||void 0===t?void 0:t.canSeek)&&(x?(h((0,v.vR)()),m((0,_._)({action_type:"click",action_intent:"next",item_uri:b}))):(h((0,v.ez)()),m((0,_._)({action_type:"click",action_intent:"skip-forward-15"}))))},iconOnly:x?o.W:l.v,"data-testid":"skip-forward","aria-label":x?f("spe.playback-control.skip-forward","Next","Accessibility label for a button that skips to the next track in a playlist"):f("spe.playback-control.skip-forward-15","Skip forward 15 seconds","Accessibility label for a button that skips to the next 15 sec of a track"),condensedAll:!0})}},24836:function(t,e,a){"use strict";a.d(e,{b:function(){return TrackListWidget}});var i=a(75766),n=a(85893),r=a(94184),s=a.n(r),c=a(67294),o=a(9473),l=a(43287),d=a(69238),u=a(35889),k=a(12068),p=a(77727),v=a(97532),_=a(5996),h=a(85931),C=a(44204),x=a(89545),b=a(9219),m=a.n(b),CondensedMetadata=function(){var t=(0,o.v9)(function(t){return t.data.entity}),e=(0,c.useMemo)(function(){return(0,C.C)(t)},[t]).metadata,a=(0,_.bU)();if(!e&&!(null==t?void 0:t.artists))return null;var i=null==e?void 0:e.title,r=null==e?void 0:e.subtitle,s=null==t?void 0:t.artists;return(0,n.jsx)("div",{className:m().condensedMetadataWrapper,children:(0,n.jsx)(v.D,{as:"h1",className:m().title,dir:"auto",children:(0,n.jsx)(x.R,{title:i,speed:.2,iterationCount:"single",children:(0,n.jsxs)(v.D,{className:m().condensedMetadataContainer,children:[i&&(0,n.jsx)(v.D,{children:i}),i&&r&&(0,n.jsx)(v.D,{className:m().separator,children:"\xb7"}),r&&(0,n.jsx)(v.D,{children:r}),(null==s?void 0:s.length)&&(0,n.jsx)(v.D,{children:s.map(function(t){return t.name}).join((0,h.f)(a))||""})]})},i||"")})})},f=a(54677),y=a(95804),j=a.n(y),CoverArtTrackList=function(){return(0,n.jsx)(f.D,{className:j().coverArtTrackList})},g=a(85173),L=a(75910),T=a.n(L),OverflowMenuTracklist=function(){var t=(0,o.v9)(function(t){return t.machineState.showOverflowMenu});return(0,n.jsx)("div",{className:T().wrapper,children:(0,n.jsx)(g.I,{visible:t})})},w=a(74927),N=a(64445),M=a(39201),z=a(5518),S=a(8090),A=a(6394),W=a(92408),P=a(54544),I=a.n(P),PlayerControlsExtendedNoAnimation=function(){var t=(0,w.M)().isCompactTracklist;return(0,n.jsxs)("div",{className:I().playerControlsWrapper,children:[(0,n.jsxs)("div",{className:I().baselineWrapper,children:[(0,n.jsxs)("div",{className:I().progressBarWrapper,dir:"ltr",children:[(0,n.jsx)(W.i,{}),(0,n.jsx)(S.Z,{}),(0,n.jsx)(W.W,{})]}),(0,n.jsx)(A.r,{}),t&&(0,n.jsx)(N.E,{}),(0,n.jsx)(M.c,{})]}),(0,n.jsx)("div",{className:I().playButtonWrapper,children:(0,n.jsx)(z.r,{})})]})},B=a(18872),E=a(61950),O=a(41772),R=a.n(O),PlayerControlsShortWithSkipBtnsPreview=function(){var t=(0,w.M)().isCompactTracklist;return(0,n.jsxs)("div",{className:R().playerControlsWrapper,children:[(0,n.jsxs)("div",{className:(0,B.cx)(R().skipButtonsWrapper,R().lower),children:[(0,n.jsx)(W.i,{}),(0,n.jsx)(W.W,{})]}),t&&(0,n.jsx)(N.E,{}),(0,n.jsx)("div",{className:(R().overflowMenuButtonWrapper,R().lower),children:(0,n.jsx)(M.c,{})}),(0,n.jsx)(E.D,{})]})},V=a(48760),H=a(62141),F=a(81726),D=a(96104),Z=a(24043),G=a(54306),J=a(66338),Q=a(20652),U=a(82759),K=a(25113),X=a(87425),Y=a(56094),$=a(61905),q=a(31630),tt=a.n(q),TrackPlaybackIndicator=function(t){var e,a=t.hoverOnTrack,i=t.isCurrentTrack,r=t.isPaused,s=t.isPlayable,c=t.trackNumber,o=t.hasPlaybackContext,l=(0,_.NT)();return e=s?i&&!r&&o?(0,n.jsx)(Q.k,{"data-testid":"pause-icon",iconSize:16}):a||i&&r&&o?(0,n.jsx)(U.J,{"data-testid":"play-icon",iconSize:16}):c:c,(0,n.jsx)("button",{"data-testid":"playback-indicator",className:tt().trackNumberCellContent,"aria-label":o&&i&&!r?l("spe.playback-control.pause-track","Pause track","Accessibility label for a button that pauses a specific track within a playlist"):l("spe.playback-control.play-track","Play track","Accessibility label for a button that plays a specific track within a playlist"),disabled:!s,children:e})},te=c.forwardRef(function(t,e){var a,r=t.index,l=t.trackNumber,d=t.title,u=t.subtitle,k=t.duration,p=t.isCurrentTrack,v=void 0!==p&&p,_=t.isPlayable,h=t.isExplicit,C=(0,Z._)((0,c.useState)(!1),2),x=C[0],b=C[1],m=(0,c.useContext)(J.C),f=m.playbackState,y=m.triggerPlaybackOperation,j=!!(null==f?void 0:f.hasContext),g=null==f?void 0:f.isPaused,L=null==f?void 0:f.isDisabled,T=(0,o.v9)(function(t){var e,a;return(null===(e=t.data.entity)||void 0===e?void 0:e.trackList)&&(null===(a=t.data.entity)||void 0===a?void 0:a.trackList[r].uri)}),N=(0,o.I0)(),handleNotAvailableEntity=function(){N((0,X._)({action_type:"playback",action_intent:"track-not-available",action_item_id:"tracklist-row",item_uri:T}))},M=(0,w.M)(),z=M.isCompactTracklist,S=M.isCompactLegacy;return(0,n.jsxs)("li",{ref:e,className:s()(tt().trackListRow,(a={},(0,i._)(a,tt().isCurrentTrack,v&&j),(0,i._)(a,tt().isPlayable,_),(0,i._)(a,tt().isExplicit,h),a)),onClick:function(){if(!L){if(!_){handleNotAvailableEntity();return}v?y((0,K.Xh)()):y((0,K.xu)(r)),N((0,X._)({action_type:"click",action_intent:!1===g&&v?"pause":"play",action_item_id:"tracklist-row",item_uri:T}))}},onMouseEnter:function(){return b(!0)},onMouseLeave:function(){return b(!1)},"data-testid":"tracklist-row-".concat(r),children:[!S&&(0,n.jsx)("div",{className:s()(tt().trackNumberCell,(0,i._)({},tt().isCurrentTrack,v)),children:(0,n.jsx)(TrackPlaybackIndicator,{trackNumber:l,hoverOnTrack:x,isCurrentTrack:v,isPlayable:_,hasPlaybackContext:j,isPaused:g})}),z&&(0,n.jsxs)(n.Fragment,{children:[h&&(0,n.jsx)($.t,{className:tt().tag}),(0,n.jsxs)("div",{className:tt().condensedMetadata,children:[(0,n.jsx)("h3",{dir:"auto",className:s()(tt().title,(0,i._)({},tt().isCurrentTrack,v)),children:d}),(0,n.jsx)("span",{className:tt().separator,"aria-hidden":!0,children:"\xb7"}),(0,n.jsx)("h4",{dir:"auto",className:s()(tt().subtitle,(0,i._)({},tt().isCurrentTrack,v)),children:u})]})]}),!z&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h3",{dir:"auto",className:s()(tt().title,(0,i._)({},tt().isCurrentTrack,v)),children:d}),(0,n.jsxs)("h4",{dir:"auto",className:s()(tt().subtitle,(0,i._)({},tt().isCurrentTrack,v)),children:[h&&(0,n.jsx)($.t,{className:tt().tag}),u]}),(0,n.jsx)("div",{className:s()(tt().durationCell,(0,i._)({},tt().isCurrentTrack,v)),children:(0,Y.Z)(k)})]})]})}),ta=a(44114),ti=a.n(ta),TrackList=function(t){var e=t.trackList,a=void 0===e?[]:e,i=t.className,r=(0,c.useContext)(J.C).playbackState,o=!!(null==r?void 0:r.hasContext),l=(0,G.T)(),d=(0,_.NT)(),u=(0,w.M)().isCompactLegacy,k=(0,c.useCallback)(function(t){var e=t.uid;return!!e&&!!o&&e===l},[o,l]),p=(0,Z._)((0,c.useState)(0),2),v=p[0],h=p[1],C=a[v];(0,c.useEffect)(function(){var t=a.findIndex(k);h(t<0?0:t)},[k,a]);var x=(0,c.useRef)(null),b=(0,c.useRef)(null);return(0,c.useEffect)(function(){x.current&&x.current.scrollIntoView({behavior:"smooth",block:"nearest"})},[v]),(0,c.useEffect)(function(){b.current&&!o&&v===a.length-1&&b.current&&b.current.scrollTo({top:0,behavior:"smooth"})},[v,o,a.length]),(0,n.jsx)("div",{className:s()(ti().backgroundColorContainer,i),"data-testid":"tracklist",children:(0,n.jsx)("div",{className:ti().opacityContainer,children:(0,n.jsx)("div",{ref:b,className:ti().wrapper,children:u?C&&(0,n.jsx)(te,{index:v,uid:C.uid,trackNumber:v+1,title:C.title,subtitle:C.subtitle,duration:C.duration||0,isExplicit:C.isExplicit,isCurrentTrack:!0,isPlayable:C.isPlayable}):(0,n.jsx)("ol",{className:ti().trackListContainer,"aria-label":d("spe.track_list","Track list","Accessibility label for the list of tracks in a playlist"),children:a.map(function(t,e){return(0,n.jsx)(te,{ref:k(t)?x:void 0,index:e,uid:t.uid,trackNumber:e+1,title:t.title,subtitle:t.subtitle,duration:t.duration||0,isExplicit:t.isExplicit,isCurrentTrack:k(t),isPlayable:t.isPlayable},t.uid)})})})})})},tn=a(55402),tr=a(61954),ts=a.n(tr),TrackListWidget=function(){(0,l.p)();var t=(0,o.v9)(function(t){return t.machineState.initialized}),e=(0,o.v9)(function(t){return t.machineState.playbackMode}),a=e===k.d.PREVIEW,r=(0,o.v9)(function(t){var e;return null===(e=t.data.entity)||void 0===e?void 0:e.trackList}),v=c.useContext(d.h),_=v.height,h=v.width,C=a&&_&&h&&_>=u.p4.large&&h>=u.Zo.medium,x=(0,o.v9)(function(t){var e;return null===(e=t.data.entity)||void 0===e?void 0:e.uri});return x?(0,n.jsxs)("div",{"data-testid":"embed-widget-container",className:s()("encore-dark-theme",ts().widgetContainer),children:[(0,n.jsxs)("div",{"data-testid":"initialized-".concat(t),className:ts().trackListGridContainer,children:[(0,n.jsx)("div",{className:ts().coverArtContainer,children:(0,n.jsx)(CoverArtTrackList,{})}),(0,n.jsx)("div",{className:s()(ts().spotifyLogoContainer,(0,i._)({},ts().isPreview,a)),children:(0,n.jsx)(V.Z,{trackListLength:null==r?void 0:r.length})}),(0,n.jsx)("div",{className:s()(ts().metadataContainer,(0,i._)({},ts().isPreview,a)),children:_&&_>=u.p4.large?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(D.D,{}),(0,n.jsxs)("span",{className:ts().labelsAndSubtitle,children:[C&&(0,n.jsx)(H.$,{}),(0,n.jsx)(F.Q,{})]}),(0,n.jsx)(p.w,{uri:x,mainView:!0})]}):(0,n.jsx)(CondensedMetadata,{})}),!C&&(0,n.jsx)("div",{className:s()(ts().tagListContainer,(0,i._)({},ts().isPreview,a)),children:(0,n.jsx)(H.$,{})}),(0,n.jsx)("div",{className:s()(ts().playerControlsWrapper,(0,i._)({},ts().isPreview,a)),children:e!==k.d.UNKNOWN&&(a?(0,n.jsx)(PlayerControlsShortWithSkipBtnsPreview,{}):(0,n.jsx)(PlayerControlsExtendedNoAnimation,{}))})]}),(0,n.jsx)(TrackList,{className:ts().trackListContainer,trackList:r}),(0,n.jsx)(OverflowMenuTracklist,{}),(0,n.jsx)(tn.Q,{})]}):null}},9219:function(t){t.exports={condensedMetadataWrapper:"CondensedMetadata_condensedMetadataWrapper__6reTF",condensedMetadataContainer:"CondensedMetadata_condensedMetadataContainer__egWwQ",title:"CondensedMetadata_title__FRgOV",labelsAndSubtitle:"CondensedMetadata_labelsAndSubtitle__cgvUr",separator:"CondensedMetadata_separator__XZW4C"}},95804:function(t){t.exports={coverArtTrackList:"CoverArtTrackList_coverArtTrackList__1YwHX"}},75910:function(t){t.exports={wrapper:"OverflowMenuTracklist_wrapper__KZkjd",menuItem:"OverflowMenuTracklist_menuItem__Q_GUj"}},54544:function(t){t.exports={playerControlsWrapper:"PlayerControlsExtendedNoAnimation_playerControlsWrapper__wWAaU",baselineWrapper:"PlayerControlsExtendedNoAnimation_baselineWrapper__V7JOB",progressBarWrapper:"PlayerControlsExtendedNoAnimation_progressBarWrapper__D4yE2",playButtonWrapper:"PlayerControlsExtendedNoAnimation_playButtonWrapper__lcIQB"}},18041:function(t){t.exports={seekButton:"SkipButtons_seekButton__1Eenz",seekBack:"SkipButtons_seekBack____Vi2",seekForward:"SkipButtons_seekForward__M51Hj"}},44114:function(t){t.exports={backgroundColorContainer:"TrackList_backgroundColorContainer__vm8ks",opacityContainer:"TrackList_opacityContainer__L_yni",wrapper:"TrackList_wrapper__H3yYt",isComposite:"TrackList_isComposite__P0ppA",trackListContainer:"TrackList_trackListContainer__E6i38"}},31630:function(t){t.exports={trackListRow:"TracklistRow_trackListRow__vrAAd",isCurrentTrack:"TracklistRow_isCurrentTrack__N2KN6",isPlayable:"TracklistRow_isPlayable__U6o2r",isExplicit:"TracklistRow_isExplicit__wU5ZL",condensedMetadata:"TracklistRow_condensedMetadata__4typn",separator:"TracklistRow_separator__IPKtc",tag:"TracklistRow_tag__gIvj_",title:"TracklistRow_title__1RtS6",subtitle:"TracklistRow_subtitle___DhJK",trackNumberCell:"TracklistRow_trackNumberCell__GQdAG",trackNumberCellContent:"TracklistRow_trackNumberCellContent__781FQ",durationCell:"TracklistRow_durationCell__CUhMO"}},61954:function(t){t.exports={widgetContainer:"TrackListWidget_widgetContainer__VVETD",coverArtContainer:"TrackListWidget_coverArtContainer__QAXYk",spotifyLogoContainer:"TrackListWidget_spotifyLogoContainer__M1SxS",isPreview:"TrackListWidget_isPreview__ODyOo",metadataContainer:"TrackListWidget_metadataContainer__EP9LF",title:"TrackListWidget_title__vZ3sZ",trackListGridContainer:"TrackListWidget_trackListGridContainer__GZGxh",labelsAndSubtitle:"TrackListWidget_labelsAndSubtitle__IGHar",trackListContainer:"TrackListWidget_trackListContainer__zpYQe",playerControlsWrapper:"TrackListWidget_playerControlsWrapper__MtZxe",tagListContainer:"TrackListWidget_tagListContainer__I8UFM"}},82759:function(t,e,a){"use strict";a.d(e,{J:function(){return IconPlay}});var i=a(67294),n=a(29694);function IconPlay(t){var e,a,r,s,c,o=t.size?n.cy[t.size]:t.iconSize,l=(0,n.Lr)([{size:16,svgContent:"<path d='M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z'/>"},{size:24,svgContent:"<path d='m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z'/>"}],o||24),d=null!==(e=t.autoMirror)&&void 0!==e&&e;return i.createElement(n.JO,Object.assign({},t,{autoMirror:d,viewBox:"0 0 ".concat(l.size," ").concat(l.size),dangerouslySetInnerHTML:{__html:"".concat((a=t.title,r=t.titleId,a?"<title ".concat(r?'id="'.concat(r,'"'):"",">").concat(a,"</title>"):"")).concat((s=t.desc,c=t.descId,s?"<desc ".concat(c?'id="'.concat(c,'"'):"",">").concat(s,"</desc>"):"")).concat(l.svgContent)}}))}},74906:function(t,e,a){"use strict";a.d(e,{y:function(){return IconSkipBack}});var i=a(67294),n=a(29694);function IconSkipBack(t){var e,a,r,s,c,o=t.size?n.cy[t.size]:t.iconSize,l=(0,n.Lr)([{size:16,svgContent:"<path d='M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z'/>"},{size:24,svgContent:"<path d='M6.3 3a.7.7 0 0 1 .7.7v6.805l11.95-6.899a.7.7 0 0 1 1.05.606v15.576a.7.7 0 0 1-1.05.606L7 13.495V20.3a.7.7 0 0 1-.7.7H4.7a.7.7 0 0 1-.7-.7V3.7a.7.7 0 0 1 .7-.7h1.6z'/>"}],o||24),d=null!==(e=t.autoMirror)&&void 0!==e&&e;return i.createElement(n.JO,Object.assign({},t,{autoMirror:d,viewBox:"0 0 ".concat(l.size," ").concat(l.size),dangerouslySetInnerHTML:{__html:"".concat((a=t.title,r=t.titleId,a?"<title ".concat(r?'id="'.concat(r,'"'):"",">").concat(a,"</title>"):"")).concat((s=t.desc,c=t.descId,s?"<desc ".concat(c?'id="'.concat(c,'"'):"",">").concat(s,"</desc>"):"")).concat(l.svgContent)}}))}},53228:function(t,e,a){"use strict";a.d(e,{v:function(){return IconSkipBack15}});var i=a(67294),n=a(29694);function IconSkipBack15(t){var e,a,r,s,c,o=t.size?n.cy[t.size]:t.iconSize,l=(0,n.Lr)([{size:16,svgContent:"<path d='M2.464 4.5h1.473a.75.75 0 1 1 0 1.5H0V2.063a.75.75 0 0 1 1.5 0v1.27a8.25 8.25 0 1 1 10.539 12.554.75.75 0 0 1-.828-1.25A6.75 6.75 0 1 0 2.464 4.5z'/><path d='M.303 8.407c.79 0 1.214-.52 1.214-.907h1.5v8h-1.5V9.907H0v-1.5h.303zm4.832-.911h4.05v1.5H6.33l-.245 1.067c.256-.071.525-.11.804-.11 1.621 0 2.954 1.3 2.954 2.924C9.843 14.5 8.51 15.8 6.89 15.8a2.945 2.945 0 0 1-2.93-2.54l1.487-.197c.092.69.696 1.237 1.443 1.237.813 0 1.454-.647 1.454-1.423s-.64-1.423-1.454-1.423c-.49 0-.92.235-1.183.594l-.01.014-.206.254-1.314-.639.96-4.181z'/>"},{size:24,svgContent:"<path d='M5.286 6H7.25a1 1 0 1 1 0 2H2V2.75a1 1 0 1 1 2 0v1.694A10.97 10.97 0 0 1 11.994 1c6.075 0 11 4.925 11 11a10.99 10.99 0 0 1-4.943 9.183 1 1 0 1 1-1.102-1.668A9 9 0 1 0 5.286 6zm-3.917 7.518c1.005 0 1.591-.666 1.591-1.217h1.6v9.74h-1.6v-6.923H1v-1.6h.369z'/><path d='M7.343 12.41h4.84v1.6H8.616l-.362 1.578a3.53 3.53 0 0 1 1.132-.186c1.914 0 3.484 1.532 3.484 3.446 0 1.914-1.57 3.446-3.484 3.446-1.76 0-3.229-1.296-3.454-2.995l1.586-.21c.119.896.903 1.605 1.868 1.605 1.052 0 1.884-.838 1.884-1.846 0-1.009-.832-1.846-1.884-1.846-.632 0-1.19.304-1.53.77l-.012.015-.248.307-1.402-.681 1.148-5.004z'/>"}],o||24),d=null!==(e=t.autoMirror)&&void 0!==e&&e;return i.createElement(n.JO,Object.assign({},t,{autoMirror:d,viewBox:"0 0 ".concat(l.size," ").concat(l.size),dangerouslySetInnerHTML:{__html:"".concat((a=t.title,r=t.titleId,a?"<title ".concat(r?'id="'.concat(r,'"'):"",">").concat(a,"</title>"):"")).concat((s=t.desc,c=t.descId,s?"<desc ".concat(c?'id="'.concat(c,'"'):"",">").concat(s,"</desc>"):"")).concat(l.svgContent)}}))}},15009:function(t,e,a){"use strict";a.d(e,{W:function(){return IconSkipForward}});var i=a(67294),n=a(29694);function IconSkipForward(t){var e,a,r,s,c,o=t.size?n.cy[t.size]:t.iconSize,l=(0,n.Lr)([{size:16,svgContent:"<path d='M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z'/>"},{size:24,svgContent:"<path d='M17.7 3a.7.7 0 0 0-.7.7v6.805L5.05 3.606A.7.7 0 0 0 4 4.212v15.576a.7.7 0 0 0 1.05.606L17 13.495V20.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-1.6z'/>"}],o||24),d=null!==(e=t.autoMirror)&&void 0!==e&&e;return i.createElement(n.JO,Object.assign({},t,{autoMirror:d,viewBox:"0 0 ".concat(l.size," ").concat(l.size),dangerouslySetInnerHTML:{__html:"".concat((a=t.title,r=t.titleId,a?"<title ".concat(r?'id="'.concat(r,'"'):"",">").concat(a,"</title>"):"")).concat((s=t.desc,c=t.descId,s?"<desc ".concat(c?'id="'.concat(c,'"'):"",">").concat(s,"</desc>"):"")).concat(l.svgContent)}}))}},45296:function(t,e,a){"use strict";a.d(e,{v:function(){return IconSkipForward15}});var i=a(67294),n=a(29694);function IconSkipForward15(t){var e,a,r,s,c,o=t.size?n.cy[t.size]:t.iconSize,l=(0,n.Lr)([{size:16,svgContent:"<path d='M13.536 4.5h-1.473a.75.75 0 1 0 0 1.5H16V2.063a.75.75 0 0 0-1.5 0v1.27A8.25 8.25 0 1 0 3.962 15.887a.75.75 0 1 0 .827-1.25A6.75 6.75 0 1 1 13.535 4.5z'/><path d='M6.303 8.407c.79 0 1.214-.52 1.214-.907h1.5v8h-1.5V9.907H6v-1.5h.303zm4.832-.911h4.05v1.5H12.33l-.245 1.067c.256-.071.525-.11.804-.11 1.621 0 2.954 1.3 2.954 2.924 0 1.624-1.333 2.923-2.954 2.923a2.945 2.945 0 0 1-2.93-2.54l1.487-.197c.092.69.696 1.237 1.443 1.237.813 0 1.454-.647 1.454-1.423s-.64-1.423-1.454-1.423c-.49 0-.92.235-1.183.594l-.01.014-.206.254-1.314-.639.96-4.181z'/>"},{size:24,svgContent:"<path d='M18.714 6H16.75a1 1 0 1 0 0 2H22V2.75a1 1 0 1 0-2 0v1.694A10.97 10.97 0 0 0 12.006 1c-6.075 0-11 4.925-11 11a10.99 10.99 0 0 0 4.943 9.183 1 1 0 1 0 1.102-1.668A9 9 0 1 1 18.714 6z'/><path d='M10.639 13.518c1.005 0 1.591-.666 1.591-1.217h1.6v9.74h-1.6v-6.923h-1.96v-1.6h.369zm5.974-1.108h4.84v1.6h-3.566l-.362 1.578a3.53 3.53 0 0 1 1.132-.186c1.914 0 3.484 1.532 3.484 3.446 0 1.914-1.57 3.445-3.484 3.445-1.76 0-3.229-1.295-3.454-2.994l1.586-.21c.119.896.903 1.604 1.868 1.604 1.052 0 1.884-.837 1.884-1.845 0-1.009-.832-1.846-1.884-1.846-.633 0-1.19.304-1.53.77l-.012.015-.248.307-1.402-.681 1.148-5.004z'/>"}],o||24),d=null!==(e=t.autoMirror)&&void 0!==e&&e;return i.createElement(n.JO,Object.assign({},t,{autoMirror:d,viewBox:"0 0 ".concat(l.size," ").concat(l.size),dangerouslySetInnerHTML:{__html:"".concat((a=t.title,r=t.titleId,a?"<title ".concat(r?'id="'.concat(r,'"'):"",">").concat(a,"</title>"):"")).concat((s=t.desc,c=t.descId,s?"<desc ".concat(c?'id="'.concat(c,'"'):"",">").concat(s,"</desc>"):"")).concat(l.svgContent)}}))}}}]);