(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{508:function(a,s,t){"use strict";t.r(s);var e=t(31),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),t("p",[a._v("kubernetes官方提供的可视化界面，可以对集群进行管理，维护。\n"),t("a",{attrs:{href:"https://kubernetes.io/zh/docs/tasks/access-application-cluster/web-ui-dashboard/",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方地址"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),t("h3",{attrs:{id:"创建镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建镜像"}},[a._v("#")]),a._v(" 创建镜像")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.5.0/aio/deploy/recommended.yaml\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"创建一个访问用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建一个访问用户"}},[a._v("#")]),a._v(" 创建一个访问用户")]),a._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#创建访问账号，准备一个yaml文件； vi admin-user.yaml")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ServiceAccount\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" admin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("user\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kubernetes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("dashboard\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("---")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" rbac.authorization.k8s.io/v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ClusterRoleBinding\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" admin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("user\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("roleRef")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiGroup")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" rbac.authorization.k8s.io\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ClusterRole\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" cluster"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("admin\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("subjects")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ServiceAccount\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" admin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("user\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kubernetes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("dashboard\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br")])]),t("p",[a._v("执行")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("kubectl apply -f admin-user.yaml\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"本机机器开启代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本机机器开启代理"}},[a._v("#")]),a._v(" 本机机器开启代理")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("kubectl proxy\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("访问 "),t("code",[a._v("http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#/login")])]),a._v(" "),t("h3",{attrs:{id:"创建访问者-token"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建访问者-token"}},[a._v("#")]),a._v(" 创建访问者 token")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("kubectl -n kubernetes-dashboard get secret "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("kubectl -n kubernetes-dashboard get sa/admin-user -o "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("jsonpath")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"{.secrets[0].name}"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" -o go-template"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"{{.data.token | base64decode}}"')]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[t("strong",[a._v("Token")])]),a._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("eyJhbGciOiJSUzI1NiIsImtpZCI6InNXd3lJS2lDcldnZzZXelRpQ21tTGJyMVdxZXpQdmVHUl8yTVdjOE82eEEifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJhZG1pbi11c2VyLXRva2VuLXoyN2dnIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6ImFkbWluLXVzZXIiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC51aWQiOiJiNmRiZDZmYi1iN2QxLTRhYzktYjQ4Zi1kY2M1MmVkYjgxOWUiLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6a3ViZXJuZXRlcy1kYXNoYm9hcmQ6YWRtaW4tdXNlciJ9.LV-m4ZN_ko9d6MnPzxlLBZf6QAXktHR6QsaEWkY5rdQwe2tGckGSMTTi7RbATvy1-za4cxTFTl_et7TROZgleYYE6ts5boOqQdD-etLCw1hF7rb7l4rWjL6yxuvaMjepwC2vsvUoFJJDttf-N207BdJJU7PsckwM_ov6j-KOyW993mWSHxXKvFbS1rqCy4VMckSkOBdlEuDSdXFFmycHkHLVtzyDsfKstraEOLwQEAmW4Bs9lFwsM1_JPoCE-DtSD_q6vuVaM8wDeEUyN2WY0WSodGFvE0jv2YYouyigZpyWL6yOKgA98mCgelZuo3nj26xhRzNDquUuVkeSJNg-dg\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"web-页面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web-页面"}},[a._v("#")]),a._v(" web 页面")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/naturalCloud/personal-cloud-image-warehouse/main/naturalCloud/MIK-HacZEq.png",alt:""}})])])}),[],!1,null,null,null);s.default=n.exports}}]);