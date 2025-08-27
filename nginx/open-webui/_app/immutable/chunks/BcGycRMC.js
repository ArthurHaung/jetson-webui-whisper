import{S as ft,i as dt,s as mt,H as De,I as We,C as X,l as q,e as m,t as R,D as Z,p as N,c as h,a as _,d,b as W,f as c,E as x,g as te,h as r,G as ge,J as ht,K as je,j as J,y as _t,r as H,u as pt,q as O,F as ee,P as gt,k as rt,v as vt,n as Ye,L as ve,M as Ge}from"./BCvnKofF.js";import"./IHki7fMi.js";import{C as wt}from"./B-QM9P9S.js";import{g as bt}from"./xuwbn1vA.js";import{C as yt}from"./OFvj_JRi.js";import{C as kt}from"./ZQJa094U.js";import{T as Ue}from"./APGfqsGw.js";import{L as Et}from"./CxpIi-1u.js";import{A as It}from"./NpKckvng.js";import{u as Tt}from"./__JRYNd1.js";function Ct(s){let e,t,n,u,a;return t=new kt({props:{strokeWidth:"2.5"}}),{c(){e=m("button"),X(t.$$.fragment),this.h()},l(i){e=h(i,"BUTTON",{class:!0,type:!0});var p=_(e);Z(t.$$.fragment,p),p.forEach(d),this.h()},h(){c(e,"class","w-full text-left text-sm py-1.5 px-1 rounded-lg dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-gray-850"),c(e,"type","button")},m(i,p){te(i,e,p),x(t,e,null),n=!0,u||(a=ge(e,"click",s[20]),u=!0)},p:Ye,i(i){n||(O(t.$$.fragment,i),n=!0)},o(i){H(t.$$.fragment,i),n=!1},d(i){i&&d(e),ee(t),u=!1,a()}}}function Dt(s){let e,t,n,u;return{c(){e=m("input"),this.h()},l(a){e=h(a,"INPUT",{class:!0,type:!0,placeholder:!0}),this.h()},h(){c(e,"class","w-full text-2xl font-medium bg-transparent outline-hidden font-primary"),c(e,"type","text"),c(e,"placeholder",t=s[12].t("Tool Name")),e.required=!0},m(a,i){te(a,e,i),ve(e,s[0]),n||(u=ge(e,"input",s[21]),n=!0)},p(a,i){i[0]&4096&&t!==(t=a[12].t("Tool Name"))&&c(e,"placeholder",t),i[0]&1&&e.value!==a[0]&&ve(e,a[0])},d(a){a&&d(e),n=!1,u()}}}function Pt(s){let e,t;return e=new Ue({props:{className:"w-full",content:s[12].t("e.g. my_tools"),placement:"top-start",$$slots:{default:[qt]},$$scope:{ctx:s}}}),{c(){X(e.$$.fragment)},l(n){Z(e.$$.fragment,n)},m(n,u){x(e,n,u),t=!0},p(n,u){const a={};u[0]&4096&&(a.content=n[12].t("e.g. my_tools")),u[0]&4132|u[1]&16&&(a.$$scope={dirty:u,ctx:n}),e.$set(a)},i(n){t||(O(e.$$.fragment,n),t=!0)},o(n){H(e.$$.fragment,n),t=!1},d(n){ee(e,n)}}}function Vt(s){let e,t;return{c(){e=m("div"),t=R(s[2]),this.h()},l(n){e=h(n,"DIV",{class:!0});var u=_(e);t=W(u,s[2]),u.forEach(d),this.h()},h(){c(e,"class","text-sm text-gray-500 shrink-0")},m(n,u){te(n,e,u),r(e,t)},p(n,u){u[0]&4&&J(t,n[2])},i:Ye,o:Ye,d(n){n&&d(e)}}}function qt(s){let e,t,n,u;return{c(){e=m("input"),this.h()},l(a){e=h(a,"INPUT",{class:!0,type:!0,placeholder:!0}),this.h()},h(){c(e,"class","w-full text-sm disabled:text-gray-500 bg-transparent outline-hidden"),c(e,"type","text"),c(e,"placeholder",t=s[12].t("Tool ID")),e.required=!0,e.disabled=s[5]},m(a,i){te(a,e,i),ve(e,s[2]),n||(u=ge(e,"input",s[23]),n=!0)},p(a,i){i[0]&4096&&t!==(t=a[12].t("Tool ID"))&&c(e,"placeholder",t),i[0]&32&&(e.disabled=a[5]),i[0]&4&&e.value!==a[2]&&ve(e,a[2])},d(a){a&&d(e),n=!1,u()}}}function Nt(s){let e,t,n,u;return{c(){e=m("input"),this.h()},l(a){e=h(a,"INPUT",{class:!0,type:!0,placeholder:!0}),this.h()},h(){c(e,"class","w-full text-sm bg-transparent outline-hidden"),c(e,"type","text"),c(e,"placeholder",t=s[12].t("Tool Description")),e.required=!0},m(a,i){te(a,e,i),ve(e,s[3].description),n||(u=ge(e,"input",s[24]),n=!0)},p(a,i){i[0]&4096&&t!==(t=a[12].t("Tool Description"))&&c(e,"placeholder",t),i[0]&8&&e.value!==a[3].description&&ve(e,a[3].description)},d(a){a&&d(e),n=!1,u()}}}function At(s){let e,t,n,u=s[12].t("Please carefully review the following warnings:")+"",a,i,p,v,b=s[12].t("Tools have a function calling system that allows arbitrary code execution.")+"",y,A,w,E=s[12].t("Do not install tools from sources you do not fully trust.")+"",T,k,V,I=s[12].t("I acknowledge that I have read and I understand the implications of my action. I am aware of the risks associated with executing arbitrary code and I have verified the trustworthiness of the source.")+"",C;return{c(){e=m("div"),t=m("div"),n=m("div"),a=R(u),i=q(),p=m("ul"),v=m("li"),y=R(b),A=q(),w=m("li"),T=R(E),k=q(),V=m("div"),C=R(I),this.h()},l(g){e=h(g,"DIV",{class:!0});var D=_(e);t=h(D,"DIV",{class:!0});var B=_(t);n=h(B,"DIV",{});var L=_(n);a=W(L,u),L.forEach(d),i=N(B),p=h(B,"UL",{class:!0});var $=_(p);v=h($,"LI",{});var se=_(v);y=W(se,b),se.forEach(d),A=N($),w=h($,"LI",{});var S=_(w);T=W(S,E),S.forEach(d),$.forEach(d),B.forEach(d),k=N(D),V=h(D,"DIV",{class:!0});var P=_(V);C=W(P,I),P.forEach(d),D.forEach(d),this.h()},h(){c(p,"class","mt-1 list-disc pl-4 text-xs"),c(t,"class","bg-yellow-500/20 text-yellow-700 dark:text-yellow-200 rounded-lg px-4 py-3"),c(V,"class","my-3"),c(e,"class","text-sm text-gray-500")},m(g,D){te(g,e,D),r(e,t),r(t,n),r(n,a),r(t,i),r(t,p),r(p,v),r(v,y),r(p,A),r(p,w),r(w,T),r(e,k),r(e,V),r(V,C)},p(g,D){D[0]&4096&&u!==(u=g[12].t("Please carefully review the following warnings:")+"")&&J(a,u),D[0]&4096&&b!==(b=g[12].t("Tools have a function calling system that allows arbitrary code execution.")+"")&&J(y,b),D[0]&4096&&E!==(E=g[12].t("Do not install tools from sources you do not fully trust.")+"")&&J(T,E),D[0]&4096&&I!==(I=g[12].t("I acknowledge that I have read and I understand the implications of my action. I am aware of the risks associated with executing arbitrary code and I have verified the trustworthiness of the source.")+"")&&J(C,I)},d(g){g&&d(e)}}}function St(s){var Xe,Ze,xe,et;let e,t,n,u,a,i,p,v,b,y,A,w,E,T,k,V,I,C,g,D,B,L=s[12].t("Access")+"",$,se,S,P,U,me,j,we,oe,F,be,G,ae,M,l,ye=s[12].t("Warning:")+"",Pe,Me,ke=s[12].t("Tools are a function calling system with arbitrary code execution")+"",Ve,Be,Le,$e,he,Ee=s[12].t("don't install random tools from sources you don't trust.")+"",qe,Fe,ie,Ie=s[12].t("Save")+"",Ne,Ae,Y,He,Q,Oe,Ke;function lt(o){s[18](o)}function it(o){s[19](o)}let Re={accessRoles:["read","write"],allowPublic:((xe=(Ze=(Xe=s[11])==null?void 0:Xe.permissions)==null?void 0:Ze.sharing)==null?void 0:xe.public_tools)||((et=s[11])==null?void 0:et.role)==="admin"};s[8]!==void 0&&(Re.show=s[8]),s[4]!==void 0&&(Re.accessControl=s[4]),e=new It({props:Re}),De.push(()=>We(e,"show",lt)),De.push(()=>We(e,"accessControl",it)),w=new Ue({props:{content:s[12].t("Back"),$$slots:{default:[Ct]},$$scope:{ctx:s}}}),k=new Ue({props:{content:s[12].t("e.g. My Tools"),placement:"top-start",$$slots:{default:[Dt]},$$scope:{ctx:s}}}),g=new Et({props:{strokeWidth:"2.5",className:"size-3.5"}});const ze=[Vt,Pt],ne=[];function Je(o,f){return o[5]?0:1}P=Je(s),U=ne[P]=ze[P](s),j=new Ue({props:{className:"w-full self-center items-center flex",content:s[12].t("e.g. Tools for performing various operations"),placement:"top-start",$$slots:{default:[Nt]},$$scope:{ctx:s}}});let ut={value:s[1],lang:"python",boilerplate:s[14],onChange:s[25],onSave:s[26]};F=new wt({props:ut}),s[27](F);function ct(o){s[30](o)}let Qe={$$slots:{default:[At]},$$scope:{ctx:s}};return s[7]!==void 0&&(Qe.show=s[7]),Y=new yt({props:Qe}),De.push(()=>We(Y,"show",ct)),Y.$on("confirm",s[31]),{c(){X(e.$$.fragment),u=q(),a=m("div"),i=m("div"),p=m("form"),v=m("div"),b=m("div"),y=m("div"),A=m("div"),X(w.$$.fragment),E=q(),T=m("div"),X(k.$$.fragment),V=q(),I=m("div"),C=m("button"),X(g.$$.fragment),D=q(),B=m("div"),$=R(L),se=q(),S=m("div"),U.c(),me=q(),X(j.$$.fragment),we=q(),oe=m("div"),X(F.$$.fragment),be=q(),G=m("div"),ae=m("div"),M=m("div"),l=m("span"),Pe=R(ye),Me=q(),Ve=R(ke),Be=q(),Le=m("br"),$e=R(`—
							`),he=m("span"),qe=R(Ee),Fe=q(),ie=m("button"),Ne=R(Ie),Ae=q(),X(Y.$$.fragment),this.h()},l(o){Z(e.$$.fragment,o),u=N(o),a=h(o,"DIV",{class:!0});var f=_(a);i=h(f,"DIV",{class:!0});var ue=_(i);p=h(ue,"FORM",{class:!0});var _e=_(p);v=h(_e,"DIV",{class:!0});var K=_(v);b=h(K,"DIV",{class:!0});var re=_(b);y=h(re,"DIV",{class:!0});var z=_(y);A=h(z,"DIV",{class:!0});var ce=_(A);Z(w.$$.fragment,ce),ce.forEach(d),E=N(z),T=h(z,"DIV",{class:!0});var pe=_(T);Z(k.$$.fragment,pe),pe.forEach(d),V=N(z),I=h(z,"DIV",{class:!0});var Te=_(I);C=h(Te,"BUTTON",{class:!0,type:!0});var fe=_(C);Z(g.$$.fragment,fe),D=N(fe),B=h(fe,"DIV",{class:!0});var Ce=_(B);$=W(Ce,L),Ce.forEach(d),fe.forEach(d),Te.forEach(d),z.forEach(d),se=N(re),S=h(re,"DIV",{class:!0});var de=_(S);U.l(de),me=N(de),Z(j.$$.fragment,de),de.forEach(d),re.forEach(d),we=N(K),oe=h(K,"DIV",{class:!0});var tt=_(oe);Z(F.$$.fragment,tt),tt.forEach(d),be=N(K),G=h(K,"DIV",{class:!0});var Se=_(G);ae=h(Se,"DIV",{class:!0});var st=_(ae);M=h(st,"DIV",{class:!0});var le=_(M);l=h(le,"SPAN",{class:!0});var ot=_(l);Pe=W(ot,ye),ot.forEach(d),Me=N(le),Ve=W(le,ke),Be=N(le),Le=h(le,"BR",{}),$e=W(le,`—
							`),he=h(le,"SPAN",{class:!0});var at=_(he);qe=W(at,Ee),at.forEach(d),le.forEach(d),st.forEach(d),Fe=N(Se),ie=h(Se,"BUTTON",{class:!0,type:!0});var nt=_(ie);Ne=W(nt,Ie),nt.forEach(d),Se.forEach(d),K.forEach(d),_e.forEach(d),ue.forEach(d),f.forEach(d),Ae=N(o),Z(Y.$$.fragment,o),this.h()},h(){c(A,"class","shrink-0 mr-2"),c(T,"class","flex-1"),c(B,"class","text-sm font-medium shrink-0"),c(C,"class","bg-gray-50 hover:bg-gray-100 text-black dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-white transition px-2 py-1 rounded-full flex gap-1 items-center"),c(C,"type","button"),c(I,"class","self-center shrink-0"),c(y,"class","flex w-full items-center"),c(S,"class","flex gap-2 px-1 items-center"),c(b,"class","w-full mb-2 flex flex-col gap-0.5"),c(oe,"class","mb-2 flex-1 overflow-auto h-0 rounded-lg"),c(l,"class","font-semibold dark:text-gray-200"),c(he,"class","font-medium dark:text-gray-400"),c(M,"class","text-xs text-gray-500 line-clamp-2"),c(ae,"class","flex-1 pr-3"),c(ie,"class","px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full"),c(ie,"type","submit"),c(G,"class","pb-3 flex justify-between"),c(v,"class","flex flex-col flex-1 overflow-auto h-0 rounded-lg"),c(p,"class","flex flex-col max-h-[100dvh] h-full"),c(i,"class","mx-auto w-full md:px-0 h-full"),c(a,"class","flex flex-col justify-between w-full overflow-y-auto h-full")},m(o,f){x(e,o,f),te(o,u,f),te(o,a,f),r(a,i),r(i,p),r(p,v),r(v,b),r(b,y),r(y,A),x(w,A,null),r(y,E),r(y,T),x(k,T,null),r(y,V),r(y,I),r(I,C),x(g,C,null),r(C,D),r(C,B),r(B,$),r(b,se),r(b,S),ne[P].m(S,null),r(S,me),x(j,S,null),r(v,we),r(v,oe),x(F,oe,null),r(v,be),r(v,G),r(G,ae),r(ae,M),r(M,l),r(l,Pe),r(M,Me),r(M,Ve),r(M,Be),r(M,Le),r(M,$e),r(M,he),r(he,qe),r(G,Fe),r(G,ie),r(ie,Ne),s[28](p),te(o,Ae,f),x(Y,o,f),Q=!0,Oe||(Ke=[ge(C,"click",s[22]),ge(p,"submit",ht(s[29]))],Oe=!0)},p(o,f){var Te,fe,Ce,de;const ue={};f[0]&2048&&(ue.allowPublic=((Ce=(fe=(Te=o[11])==null?void 0:Te.permissions)==null?void 0:fe.sharing)==null?void 0:Ce.public_tools)||((de=o[11])==null?void 0:de.role)==="admin"),!t&&f[0]&256&&(t=!0,ue.show=o[8],je(()=>t=!1)),!n&&f[0]&16&&(n=!0,ue.accessControl=o[4],je(()=>n=!1)),e.$set(ue);const _e={};f[0]&4096&&(_e.content=o[12].t("Back")),f[1]&16&&(_e.$$scope={dirty:f,ctx:o}),w.$set(_e);const K={};f[0]&4096&&(K.content=o[12].t("e.g. My Tools")),f[0]&4097|f[1]&16&&(K.$$scope={dirty:f,ctx:o}),k.$set(K),(!Q||f[0]&4096)&&L!==(L=o[12].t("Access")+"")&&J($,L);let re=P;P=Je(o),P===re?ne[P].p(o,f):(_t(),H(ne[re],1,1,()=>{ne[re]=null}),pt(),U=ne[P],U?U.p(o,f):(U=ne[P]=ze[P](o),U.c()),O(U,1),U.m(S,me));const z={};f[0]&4096&&(z.content=o[12].t("e.g. Tools for performing various operations")),f[0]&4104|f[1]&16&&(z.$$scope={dirty:f,ctx:o}),j.$set(z);const ce={};f[0]&2&&(ce.value=o[1]),f[0]&512&&(ce.onChange=o[25]),f[0]&64&&(ce.onSave=o[26]),F.$set(ce),(!Q||f[0]&4096)&&ye!==(ye=o[12].t("Warning:")+"")&&J(Pe,ye),(!Q||f[0]&4096)&&ke!==(ke=o[12].t("Tools are a function calling system with arbitrary code execution")+"")&&J(Ve,ke),(!Q||f[0]&4096)&&Ee!==(Ee=o[12].t("don't install random tools from sources you don't trust.")+"")&&J(qe,Ee),(!Q||f[0]&4096)&&Ie!==(Ie=o[12].t("Save")+"")&&J(Ne,Ie);const pe={};f[0]&4096|f[1]&16&&(pe.$$scope={dirty:f,ctx:o}),!He&&f[0]&128&&(He=!0,pe.show=o[7],je(()=>He=!1)),Y.$set(pe)},i(o){Q||(O(e.$$.fragment,o),O(w.$$.fragment,o),O(k.$$.fragment,o),O(g.$$.fragment,o),O(U),O(j.$$.fragment,o),O(F.$$.fragment,o),O(Y.$$.fragment,o),Q=!0)},o(o){H(e.$$.fragment,o),H(w.$$.fragment,o),H(k.$$.fragment,o),H(g.$$.fragment,o),H(U),H(j.$$.fragment,o),H(F.$$.fragment,o),H(Y.$$.fragment,o),Q=!1},d(o){o&&(d(u),d(a),d(Ae)),ee(e,o),ee(w),ee(k),ee(g),ne[P].d(),ee(j),s[27](null),ee(F),s[28](null),ee(Y,o),Oe=!1,gt(Ke)}}}function Ut(s,e,t){let n,u;rt(s,Tt,l=>t(11,n=l));const a=vt("i18n");rt(s,a,l=>t(12,u=l));let i=null,p=!1,v=!1,{edit:b=!1}=e,{clone:y=!1}=e,{onSave:A=()=>{}}=e,{id:w=""}=e,{name:E=""}=e,{meta:T={description:""}}=e,{content:k=""}=e,{accessControl:V={}}=e,I="";const C=()=>{t(9,I=k)};let g,D=`import os
import requests
from datetime import datetime
from pydantic import BaseModel, Field

class Tools:
    def __init__(self):
        pass

    # Add your custom tools using pure Python code here, make sure to add type hints and descriptions
	
    def get_user_name_and_email_and_id(self, __user__: dict = {}) -> str:
        """
        Get the user name, Email and ID from the user object.
        """

        # Do not include a descrption for __user__ as it should not be shown in the tool's specification
        # The session user object will be passed as a parameter when the function is called

        print(__user__)
        result = ""

        if "name" in __user__:
            result += f"User: {__user__['name']}"
        if "id" in __user__:
            result += f" (ID: {__user__['id']})"
        if "email" in __user__:
            result += f" (Email: {__user__['email']})"

        if result == "":
            result = "User: Unknown"

        return result

    def get_current_time(self) -> str:
        """
        Get the current time in a more human-readable format.
        """

        now = datetime.now()
        current_time = now.strftime("%I:%M:%S %p")  # Using 12-hour format with AM/PM
        current_date = now.strftime(
            "%A, %B %d, %Y"
        )  # Full weekday, month name, day, and year

        return f"Current Date and Time = {current_date}, {current_time}"

    def calculator(
        self,
        equation: str = Field(
            ..., description="The mathematical equation to calculate."
        ),
    ) -> str:
        """
        Calculate the result of an equation.
        """

        # Avoid using eval in production code
        # https://nedbatchelder.com/blog/201206/eval_really_is_dangerous.html
        try:
            result = eval(equation)
            return f"{equation} = {result}"
        except Exception as e:
            print(e)
            return "Invalid equation"

    def get_current_weather(
        self,
        city: str = Field(
            "New York, NY", description="Get the current weather for a given city."
        ),
    ) -> str:
        """
        Get the current weather for a given city.
        """

        api_key = os.getenv("OPENWEATHER_API_KEY")
        if not api_key:
            return (
                "API key is not set in the environment variable 'OPENWEATHER_API_KEY'."
            )

        base_url = "http://api.openweathermap.org/data/2.5/weather"
        params = {
            "q": city,
            "appid": api_key,
            "units": "metric",  # Optional: Use 'imperial' for Fahrenheit
        }

        try:
            response = requests.get(base_url, params=params)
            response.raise_for_status()  # Raise HTTPError for bad responses (4xx and 5xx)
            data = response.json()

            if data.get("cod") != 200:
                return f"Error fetching weather data: {data.get('message')}"

            weather_description = data["weather"][0]["description"]
            temperature = data["main"]["temp"]
            humidity = data["main"]["humidity"]
            wind_speed = data["wind"]["speed"]

            return f"Weather in {city}: {temperature}°C"
        except requests.RequestException as e:
            return f"Error fetching weather data: {str(e)}"
`;const B=async()=>{A({id:w,name:E,meta:T,content:k,access_control:V})},L=async()=>{if(g){t(1,k=I),await Ge();const l=await g.formatPythonCodeHandler();await Ge(),t(1,k=I),await Ge(),l&&B()}};function $(l){v=l,t(8,v)}function se(l){V=l,t(4,V)}const S=()=>{bt("/workspace/tools")};function P(){E=this.value,t(0,E)}const U=()=>{t(8,v=!0)};function me(){w=this.value,t(2,w),t(0,E),t(5,b),t(16,y)}function j(){T.description=this.value,t(3,T)}const we=l=>{t(9,I=l)},oe=async()=>{i&&i.requestSubmit()};function F(l){De[l?"unshift":"push"](()=>{g=l,t(10,g)})}function be(l){De[l?"unshift":"push"](()=>{i=l,t(6,i)})}const G=()=>{b?L():t(7,p=!0)};function ae(l){p=l,t(7,p)}const M=()=>{L()};return s.$$set=l=>{"edit"in l&&t(5,b=l.edit),"clone"in l&&t(16,y=l.clone),"onSave"in l&&t(17,A=l.onSave),"id"in l&&t(2,w=l.id),"name"in l&&t(0,E=l.name),"meta"in l&&t(3,T=l.meta),"content"in l&&t(1,k=l.content),"accessControl"in l&&t(4,V=l.accessControl)},s.$$.update=()=>{s.$$.dirty[0]&2&&k&&C(),s.$$.dirty[0]&65569&&E&&!b&&!y&&t(2,w=E.replace(/\s+/g,"_").toLowerCase())},[E,k,w,T,V,b,i,p,v,I,g,n,u,a,D,L,y,A,$,se,S,P,U,me,j,we,oe,F,be,G,ae,M]}class Gt extends ft{constructor(e){super(),dt(this,e,Ut,St,mt,{edit:5,clone:16,onSave:17,id:2,name:0,meta:3,content:1,accessControl:4},null,[-1,-1])}}export{Gt as T};
//# sourceMappingURL=BcGycRMC.js.map
