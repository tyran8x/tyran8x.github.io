import{bA as v,Y as e,bB as N,bC as A}from"../jse/index-index-DsynDTz_.mjs";function D(){const t=v.getPreferences(),b=v.getInitialPreferences(),h=e(()=>N(b,t)),a=e(()=>t.app),o=e(()=>t.shortcutKeys),s=e(()=>A(t.theme.mode)),l=e(()=>a.value.isMobile),f=e(()=>s.value?"dark":"light"),g=e(()=>l.value?"sidebar-nav":a.value.layout),u=e(()=>a.value.layout==="full-content"),c=e(()=>a.value.layout==="sidebar-nav"),i=e(()=>a.value.layout==="sidebar-mixed-nav"),p=e(()=>a.value.layout==="header-nav"),d=e(()=>a.value.layout==="mixed-nav"),y=e(()=>d.value||i.value||c.value),P=e(()=>t.sidebar.collapsed),S=e(()=>t.tabbar.enable&&t.tabbar.keepAlive),m=e(()=>a.value.authPageLayout==="panel-left"),L=e(()=>a.value.authPageLayout==="panel-right"),k=e(()=>a.value.authPageLayout==="panel-center"),M=e(()=>{const n=t.header.hidden,r=t.sidebar.hidden;return n&&r&&!u.value}),x=e(()=>{const{enable:n,globalSearch:r}=o.value;return n&&r}),K=e(()=>{const{enable:n,globalLogout:r}=o.value;return n&&r}),C=e(()=>{const{enable:n,globalLockScreen:r}=o.value;return n&&r}),I=e(()=>{const{enable:n,globalPreferences:r}=o.value;return n&&r});return{authPanelCenter:k,authPanelLeft:m,authPanelRight:L,contentIsMaximize:M,diffPreference:h,globalLockScreenShortcutKey:C,globalLogoutShortcutKey:K,globalPreferencesShortcutKey:I,globalSearchShortcutKey:x,isDark:s,isFullContent:u,isHeaderNav:p,isMixedNav:d,isMobile:l,isSideMixedNav:i,isSideMode:y,isSideNav:c,keepAlive:S,layout:g,sidebarCollapsed:P,theme:f}}export{D as u};
