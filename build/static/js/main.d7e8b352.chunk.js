(this.webpackJsonpprofile=this.webpackJsonpprofile||[]).push([[0],{137:function(e,a,t){},152:function(e,a,t){e.exports=t.p+"static/media/Vector.d5b61136.svg"},153:function(e,a,t){e.exports=t.p+"static/media/Vector-1.93c9e273.svg"},154:function(e,a,t){e.exports=t.p+"static/media/image8.714d7f4c.png"},157:function(e,a,t){e.exports=t.p+"static/media/Vector.08b2611c.svg"},158:function(e,a,t){e.exports=t.p+"static/media/Vector-1.c79ccbd3.svg"},159:function(e,a,t){e.exports=t.p+"static/media/image8.714d7f4c.png"},168:function(e,a,t){e.exports=t(323)},221:function(e,a,t){},322:function(e,a,t){},323:function(e,a,t){"use strict";t.r(a);var n,l,r=t(0),c=t.n(r),s=t(4),i=t.n(s),m=t(29),o=t(19),d=t(40),p=t(41),u=t(44),E=t(42),f=t(45),v=t(122),N=t(324),h=t(326),b=function(e){var a;return a=e?"annually":"monthly",console.log("checked = "+e),{type:"BILL_TYPE_CHANGED",payload:a}},g=function(e){var a,t,n,l,r,s,i=e.planName,m=e.price;return"true"==e.featured?(a="rectangle10",t="",n={}):(a="",t="rectangle11",n={display:"none"}),"true"==e.selected?(l="default",s="Selected"):(l="selected",r={display:"none"},s="Select"),c.a.createElement("div",{className:"rectangle4_1"},c.a.createElement("div",{className:"wrapper1"},c.a.createElement("div",{className:"rectangle12"}),c.a.createElement("div",{className:t}),c.a.createElement("div",{className:a})),c.a.createElement("div",{style:n,className:"circleopa"}),c.a.createElement("div",{style:n,className:"circle"},c.a.createElement("div",{style:n,className:"crown"})),c.a.createElement("div",{className:"wrapper1"},c.a.createElement("div",{className:"planname"},i),c.a.createElement("div",{className:"planprice"},m),c.a.createElement("div",{className:"permonth"},"per month"),c.a.createElement("div",{className:"plandescription"},"Plan description"),c.a.createElement("div",{className:"descriptiontext"},"Lorem ipsum dolor sit amet, eiusmo dconsectetur adipiscing elit, sed do eiusmod tempor incididunt"),c.a.createElement("div",{className:"buttonwrapper"},c.a.createElement(v.a,{className:"",type:l},s),c.a.createElement("div",{className:"buttontextbox",style:r},c.a.createElement("span",{className:"confirm"}),c.a.createElement("span",{className:"confirm1"})))))},w=function(e){function a(){return Object(d.a)(this,a),Object(u.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this.props,a=e.billType;e.planType;return"monthly"==a?(n="bill bold",l="bill normal"):(n="bill normal",l="bill bold"),c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"rectangle5"},c.a.createElement("div",{className:"titlewrapper"},c.a.createElement("div",{className:"planSettings"},c.a.createElement("span",null,"PLAN")," SETTINGS"),c.a.createElement("hr",{className:"vector65"})),c.a.createElement("div",{className:"rectangle4"},c.a.createElement("div",{className:"switchwrapper"},c.a.createElement("div",{className:n},"Bill monthly"),c.a.createElement("div",{className:"switch"},c.a.createElement(N.a,{onChange:function(e){console.log("switch to ".concat(e)),b(e),console.log(n)}})),c.a.createElement(h.a,{placement:"bottom",title:"Save 8%"},c.a.createElement("div",{className:l},"Bill annually"))),c.a.createElement("div",{className:"cardsumwrapper"},c.a.createElement(g,{planName:"13 DAYS TRIALS PLAN",price:"$ 0",featured:"false",selected:"true"}),c.a.createElement(g,{planName:"PLAN NAME 2",price:"$ 100",featured:"false",selected:"false"}),c.a.createElement(g,{planName:"UNLIMITED PACAGES",price:"$ 300",featured:"true",selected:"false"})))))}}]),a}(r.Component),y={billChanged:b},P=Object(m.b)((function(e){var a=e.planSettings,t=a.billType,n=a.planType;return console.log("billType"),{billType:t,planType:n}}),y)(w),T=t(165),O=(t(221),t(152)),j=t.n(O),C=t(153),S=t.n(C),x=t(154),I=t.n(x),L=function(e){function a(){return Object(d.a)(this,a),Object(u.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this.props,a=e.name,t=e.email,n=e.currentPassword;return c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"rectangle5"},c.a.createElement("div",{className:"rectangle92"},c.a.createElement("div",{className:"rectangle92_1"},c.a.createElement("div",{className:"header"},c.a.createElement("hr",{className:"vector44"}),c.a.createElement("div",{className:"title"}," Your Profile ")),c.a.createElement("div",{className:"editbuttonwrapper"},c.a.createElement(o.b,{to:"/Profile-edit"},c.a.createElement(v.a,{type:"link",className:"edit"},"Edit"))),c.a.createElement("div",{className:"editbuttonwrapper"},c.a.createElement(o.b,{to:"/Profile-edit"},c.a.createElement("div",{className:"ellipse49"}),c.a.createElement("img",{src:j.a,className:"square",alt:""}),c.a.createElement("img",{src:S.a,className:"pen",alt:""})))),c.a.createElement("div",{class:"circlephoto"},c.a.createElement("img",{src:I.a,alt:""})),c.a.createElement("div",{className:"profiledata"},c.a.createElement("div",{className:"nameheading"},"First Last Name"),c.a.createElement("div",{className:"formheading"},c.a.createElement(T.a,{disabled:!0,defaultValue:a})),c.a.createElement("div",{className:"nameheading"},"Email"),c.a.createElement("div",{className:"formheading"},c.a.createElement(T.a,{disabled:!0,defaultValue:t})),c.a.createElement("div",{className:"nameheading"},"Password"),c.a.createElement("div",{className:"formheading"},c.a.createElement(T.a,{disabled:!0,defaultValue:n}))))))}}]),a}(r.Component),k=Object(m.b)((function(e){var a=e.profile;return{name:a.name,email:a.email,currentPassword:a.currentPassword,newPassword:a.newPassword,confirmPassword:a.confirmPassword}}),{})(L),A=function(){return c.a.createElement("div",null,c.a.createElement(k,null))},D=(t(137),t(157)),F=t.n(D),_=t(158),V=t.n(_),B=t(159),R=t.n(B),Y=t(120),G=t(328),q=t(325),H=Y.a.Option,J=G.a.Option,$=function(e){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(l)))).state={confirmDirty:!1,autoCompleteResult:[]},t.handleSubmit=function(e){e.preventDefault(),t.props.form.validateFieldsAndScroll((function(e,a){e||console.log("Received values of form: ",a)}))},t.handleConfirmBlur=function(e){var a=e.target.value;t.setState({confirmDirty:t.state.confirmDirty||!!a})},t.compareToFirstPassword=function(e,a,n){var l=t.props.form;a&&a!==l.getFieldValue("password")?n("Two passwords that you enter is inconsistent!"):n()},t.validateToNextPassword=function(e,a,n){var l=t.props.form;a&&t.state.confirmDirty&&l.validateFields(["confirm"],{force:!0}),n()},t.handleWebsiteChange=function(e){var a;a=e?[".com",".org",".net"].map((function(a){return"".concat(e).concat(a)})):[],t.setState({autoCompleteResult:a})},t}return Object(f.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this.props,a=e.name,t=e.email,n=e.currentPassword,l=this.props.form.getFieldDecorator,r=this.state.autoCompleteResult;l("prefix",{initialValue:"86"})(c.a.createElement(Y.a,{style:{width:70}},c.a.createElement(H,{value:"86"},"+86"),c.a.createElement(H,{value:"87"},"+87"))),r.map((function(e){return c.a.createElement(J,{key:e},e)}));return c.a.createElement(q.a,Object.assign({},{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},{onSubmit:this.handleSubmit}),c.a.createElement("div",null,c.a.createElement("div",{className:"nameheading"},"First Last Name"),c.a.createElement("div",{className:"formheading"},c.a.createElement(q.a.Item,null,l("nickname",{initialValue:a,rules:[{required:!0,message:"Please input your nickname!",whitespace:!0}]})(c.a.createElement(T.a,{placeholder:a})))),c.a.createElement("div",{className:"nameheading"},"Email"),c.a.createElement("div",{className:"formheading"},c.a.createElement(q.a.Item,null,l("email",{initialValue:t,rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]})(c.a.createElement(T.a,null)))),c.a.createElement("div",{className:"nameheading"},"Current Password"),c.a.createElement("div",{className:"formheading"},c.a.createElement(T.a,{disabled:!0,defaultValue:n})),c.a.createElement("div",{className:"nameheading"},"New Password"),c.a.createElement("div",{className:"formheading"},c.a.createElement(q.a.Item,{hasFeedback:!0},l("password",{rules:[{required:!0,message:"Please input your password!"},{validator:this.validateToNextPassword}]})(c.a.createElement(T.a.Password,null)))),c.a.createElement("div",{className:"nameheading"},"Confirm New Password"),c.a.createElement("div",{className:"formheading"},c.a.createElement(q.a.Item,{hasFeedback:!0},l("confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:this.compareToFirstPassword}]})(c.a.createElement(T.a.Password,{onBlur:this.handleConfirmBlur})))),c.a.createElement("div",{className:"buttonrow"},c.a.createElement("div",null,c.a.createElement(o.b,{to:"/profile"},c.a.createElement(v.a,{type:"active"},"Cancel"))),c.a.createElement(q.a.Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},c.a.createElement(v.a,{type:"primary",htmlType:"submit"},"Save")))))}}]),a}(c.a.Component),M=q.a.create({name:"register"})($),U=Object(m.b)((function(e){var a=e.profile;return{name:a.name,email:a.email,currentPassword:a.currentPassword,newPassword:a.newPassword,confirmPassword:a.confirmPassword}}),{})(M),W=function(e){function a(){return Object(d.a)(this,a),Object(u.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this.props;e.name,e.email,e.currentPassword;return c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"rectangle5"},c.a.createElement("div",{className:"rectangle85"},c.a.createElement("div",{className:"rectangle92_1"},c.a.createElement("div",{className:"header"},c.a.createElement("hr",{className:"vector44"}),c.a.createElement("div",{className:"title"}," Your Profile ")),c.a.createElement("div",{className:"exitbuttonwrapper"},c.a.createElement(o.b,{to:"/"},c.a.createElement("img",{src:F.a,className:"circlebtn",alt:""}),c.a.createElement("img",{src:V.a,className:"cross",alt:""})))),c.a.createElement("div",{className:"circlephoto"},c.a.createElement("img",{src:R.a,alt:""})),c.a.createElement("div",{className:"profiledata"},c.a.createElement(U,null)))))}}]),a}(r.Component),z=Object(m.b)((function(e){var a=e.profile;return{name:a.name,email:a.email,currentPassword:a.currentPassword,newPassword:a.newPassword,confirmPassword:a.confirmPassword}}),{})(W),K=function(){return c.a.createElement("div",null,c.a.createElement(z,null))},Q=t(46),X=t(327),Z=(t(322),X.a.Header),ee=(X.a.Footer,X.a.Sider,X.a.Content,function(){return c.a.createElement("main",{role:"main",className:"container"},c.a.createElement("div",{className:"App"},c.a.createElement(X.a,null,c.a.createElement(Z,null,c.a.createElement(o.b,{to:"/"},c.a.createElement(v.a,{type:"link"},"Plan settings")),c.a.createElement(o.b,{to:"/profile"},c.a.createElement(v.a,{type:"link"},"Profile")),c.a.createElement(o.b,{to:"/profile-edit"},c.a.createElement(v.a,{type:"link"},"Profile-edit")))),c.a.createElement(Q.c,null,c.a.createElement(Q.a,{path:"/",component:P,exact:!0}),c.a.createElement(Q.a,{path:"/profile",component:A}),c.a.createElement(Q.a,{path:"/profile-edit",component:K}))))}),ae=t(81),te=t(164),ne=function(e,a){if(void 0===e)return{billType:"monthly",planType:"trials"};switch(a.type){case"BILL_TYPE_CHANGED":return console.log("BILL_TYPE_CHANGED"),{planType:e.planSettings.planType,billType:a.payload};case"PLAN_TYPE_CHANGED":return Object(te.a)({planType:e.planSettings.planType},"planType",a.payload);default:return e.planSettings}console.log(e)},le=function(e,a){if(void 0===e)return{name:"John Due",email:"JohnDue1234@gmail.com",currentPassword:"**********",newPassword:"New Password",confirmPassword:"Confirm New Password"};switch(a.type){case"PROFILE_EDIT":return console.log("PROFILE_EDIT"),{planType:e.planSettings.planType,billType:a.payload};default:return e.profile}},re=function(e,a){return console.log("state"),{planSettings:ne(e,a),profile:le(e,a)}},ce=Object(ae.b)(re);i.a.render(c.a.createElement(m.a,{store:ce},c.a.createElement(o.a,null,c.a.createElement(ee,null))),document.getElementById("root"))}},[[168,1,2]]]);
//# sourceMappingURL=main.d7e8b352.chunk.js.map