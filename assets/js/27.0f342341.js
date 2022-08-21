(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{506:function(s,a,n){"use strict";n.r(a);var e=n(31),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"云服务器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#云服务器"}},[s._v("#")]),s._v(" 云服务器")]),s._v(" "),n("p",[s._v("开通腾讯云 3 台服务器，操作系统 "),n("strong",[s._v("centos8")]),s._v(" 计量收费")]),s._v(" "),n("h2",{attrs:{id:"服务器环境初始化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#服务器环境初始化"}},[s._v("#")]),s._v(" 服务器环境初始化")]),s._v(" "),n("h3",{attrs:{id:"设置本地化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置本地化"}},[s._v("#")]),s._v(" 设置本地化")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export LC_ALL=en_US.UTF-8"')]),s._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("  /etc/profile\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v("  /etc/profile\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"分别设置各主机域名"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分别设置各主机域名"}},[s._v("#")]),s._v(" 分别设置各主机域名")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("hostnamectl set-hostname kmaster\nhostnamectl set-hostname knode1\nhostnamectl set-hostname knode2\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"关闭-swap-优化-iptables"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关闭-swap-优化-iptables"}},[s._v("#")]),s._v(" 关闭 "),n("strong",[s._v("swap")]),s._v(" ，优化 "),n("strong",[s._v("iptables")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 SELinux 设置为 permissive 模式（相当于将其禁用）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" setenforce "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/^SELINUX=enforcing$/SELINUX=permissive/'")]),s._v(" /etc/selinux/config\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#关闭swap")]),s._v("\nswapoff -a  \n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -ri "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/.*swap.*/#&/'")]),s._v(" /etc/fstab\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#允许 iptables 检查桥接流量")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF"),n("span",{pre:!0,attrs:{class:"token bash punctuation"}},[s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/modules-load.d/k8s.conf")]),s._v("\nbr_netfilter\nEOF")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF"),n("span",{pre:!0,attrs:{class:"token bash punctuation"}},[s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/sysctl.d/k8s.conf")]),s._v("\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.bridge.bridge-nf-call-iptables = 1\nEOF")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" sysctl --system\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /proc/sys/net/ipv4/ip_forward\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("h3",{attrs:{id:"安装-zsh"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装-zsh"}},[s._v("#")]),s._v(" 安装 zsh")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" \nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("zsh")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置zsh为默认shell ")]),s._v("\nchsh -s "),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("zsh")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"oh-my-zsh"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#oh-my-zsh"}},[s._v("#")]),s._v(" oh-my-zsh")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("使用curl安装")]),s._v(" "),n("p",[s._v("命令："),n("code",[s._v('sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"')])])]),s._v(" "),n("li",[n("p",[s._v("使用wget安装")]),s._v(" "),n("p",[s._v("命令："),n("code",[s._v('sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"')])])]),s._v(" "),n("li",[n("p",[s._v("手动安装")]),s._v(" "),n("p",[n("code",[s._v("https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh")])]),s._v(" "),n("p",[s._v("将脚本存到服务器，后面使用 "),n("code",[s._v("sh install.sh")]),s._v("命令运行安装。")])])]),s._v(" "),n("h3",{attrs:{id:"安装-docker"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker"}},[s._v("#")]),s._v(" 安装 "),n("strong",[s._v("docker")])]),s._v(" "),n("ol",[n("li",[s._v("移除之前安装的 "),n("strong",[s._v("docker")])])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum remove "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-client "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-client-latest "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-common "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-latest "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-latest-logrotate "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-logrotate "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-engine\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[s._v("配置 "),n("strong",[s._v("yum")]),s._v(" 源")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y yum-utils\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum-config-manager "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--add-repo "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nhttp://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ol",{attrs:{start:"3"}},[n("li",[s._v("安装docker")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#sudo yum install -y docker-ce docker-ce-cli containerd.io")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#以下是在安装k8s的时候使用")]),s._v("\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y docker-ce-20.10.7 docker-ce-cli-20.10.7  containerd.io-1.4.6\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("ol",{attrs:{start:"4"}},[n("li",[s._v("启动 "),n("strong",[s._v("docker")])])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("systemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" --now\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ol",{attrs:{start:"5"}},[n("li",[s._v("docker 加速")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /etc/docker\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/docker/daemon.json "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<-")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'EOF\'\n{\n  "registry-mirrors": ["https://82m9ar63.mirror.aliyuncs.com"],\n  "exec-opts": ["native.cgroupdriver=systemd"],\n  "log-driver": "json-file",\n  "log-opts": {\n    "max-size": "100m"\n  },\n  "storage-driver": "overlay2"\n}\nEOF')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl daemon-reload\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h2",{attrs:{id:"集群安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集群安装"}},[s._v("#")]),s._v(" 集群安装")]),s._v(" "),n("h3",{attrs:{id:"kubelet、kubeadm、kubectl"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kubelet、kubeadm、kubectl"}},[s._v("#")]),s._v(" kubelet、kubeadm、kubectl")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF"),n("span",{pre:!0,attrs:{class:"token bash punctuation"}},[s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/yum.repos.d/kubernetes.repo")]),s._v("\n[kubernetes]\nname=Kubernetes\nbaseurl=http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64\nenabled=1\ngpgcheck=0\nrepo_gpgcheck=0\ngpgkey=http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg\n   http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg\nexclude=kubelet kubeadm kubectl\nEOF")]),s._v("\n \n\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y kubelet-1.20.9 kubeadm-1.20.9 kubectl-1.20.9 --disableexcludes"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubernetes\n\n\n\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个默认装的最新版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#sudo yum install -y kubelet kubeadm kubectl --disableexcludes=kubernetes")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#yum remove kubelet kubeadm kubectl")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" --now kubelet\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("h3",{attrs:{id:"kubeadm引导集群"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kubeadm引导集群"}},[s._v("#")]),s._v(" kubeadm引导集群")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("各个机器下载镜像")]),s._v(" "),n("ul",[n("li",[s._v("kube-apiserver:v1.20.9")]),s._v(" "),n("li",[s._v("kube-proxy:v1.20.9")]),s._v(" "),n("li",[s._v("kube-controller-manager:v1.20.9")]),s._v(" "),n("li",[s._v("kube-scheduler:v1.20.9")]),s._v(" "),n("li",[s._v("coredns:1.7.0")]),s._v(" "),n("li",[s._v("etcd:3.4.13-0")]),s._v(" "),n("li",[s._v("pause:3.2")])])])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" ./images.sh "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<-")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'EOF'\n#!/bin/bash\nimages=(\nkube-apiserver:v1.20.9\nkube-proxy:v1.20.9\nkube-controller-manager:v1.20.9\nkube-scheduler:v1.20.9\ncoredns:1.7.0\netcd:3.4.13-0\npause:3.2\n)\nfor imageName in ${images[@]} ; do\ndocker pull registry.cn-hangzhou.aliyuncs.com/lfy_k8s_images/$imageName\ndone\nEOF")]),s._v("\n   \n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x ./images.sh "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" ./images.sh\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[s._v("各主机添加 host 映射")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n172.31.0.17 kmaster\n172.31.0.14 knode1\n172.31.0.4  knode2   \n"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/hosts\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("ol",{attrs:{start:"3"}},[n("li",[s._v("初始化 "),n("strong",[s._v("master")])])]),s._v(" "),n("ul",[n("li",[s._v("初始化")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#主节点初始化")]),s._v("\nkubeadm init "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--apiserver-advertise-address"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.31")]),s._v(".0.17 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--control-plane-endpoint"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kmaster "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--image-repository registry.cn-hangzhou.aliyuncs.com/lfy_k8s_images "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--kubernetes-version v1.20.9 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--service-cidr"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.96")]),s._v(".0.0/16 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--pod-network-cidr"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".0.0/16\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#所有网络范围不重叠")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("执行完成结果")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('Your Kubernetes control-plane has initialized successfully!\n\nTo start using your cluster, you need to run the following as a regular user:\n\n  mkdir -p $HOME/.kube\n  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\n  sudo chown $(id -u):$(id -g) $HOME/.kube/config\n\nAlternatively, if you are the root user, you can run:\n\n  export KUBECONFIG=/etc/kubernetes/admin.conf\n\nYou should now deploy a pod network to the cluster.\nRun "kubectl apply -f [podnetwork].yaml" with one of the options listed at:\n  https://kubernetes.io/docs/concepts/cluster-administration/addons/\n\nYou can now join any number of control-plane nodes by copying certificate authorities\nand service account keys on each node and then running the following as root:\n\n  kubeadm join kmaster:6443 --token 1flfi8.aoqhlnyrna0nwnre \\\n    --discovery-token-ca-cert-hash sha256:83e1a7bb8d78923de2ae54a603521ecb6d75ed0ab9390909d9369d29880d64b5 \\\n    --control-plane \n\nThen you can join any number of worker nodes by running the following on each as root:\n\nkubeadm join kmaster:6443 --token 1flfi8.aoqhlnyrna0nwnre \\\n    --discovery-token-ca-cert-hash sha256:83e1a7bb8d78923de2ae54a603521ecb6d75ed0ab9390909d9369d29880d64b5 \n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])]),n("ul",[n("li",[s._v("设置 config")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.kube\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -i /etc/kubernetes/admin.conf "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.kube/config\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" -u"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" -g"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.kube/config\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ul",[n("li",[s._v("安装网络插件")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("\nkubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml\n\nkubectl apply -f kube-flannel.yml\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 下边的 创建网络失败")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#curl https://docs.projectcalico.org/manifests/calico.yaml -O")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#kubectl apply -f calico.yaml")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h3",{attrs:{id:"work-加入-集群"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#work-加入-集群"}},[s._v("#")]),s._v(" work 加入 集群")]),s._v(" "),n("p",[s._v("各个 "),n("strong",[s._v("work")]),s._v(" 加入 master")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("kubeadm "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" kmaster:6443 --token 1flfi8.aoqhlnyrna0nwnre "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --discovery-token-ca-cert-hash sha256:83e1a7bb8d78923de2ae54a603521ecb6d75ed0ab9390909d9369d29880d64b5 \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("查看 "),n("strong",[s._v("master")]),s._v(" 节点查看 "),n("strong",[s._v("node")]),s._v(" 状态 , "),n("code",[s._v("reday")]),s._v(" 创建成功")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("kubectl get nodes\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://raw.githubusercontent.com/naturalCloud/personal-cloud-image-warehouse/main/blog20220604205712.png",alt:""}})]),s._v(" "),n("h2",{attrs:{id:"重置集群"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#重置集群"}},[s._v("#")]),s._v(" 重置集群")]),s._v(" "),n("ol",[n("li",[s._v("所有 "),n("strong",[s._v("node 节点")]),s._v(" 删除工作目录，并重置kubeadm")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /etc/kubernetes/*\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /proc/sys/net/ipv4/ip_forward\n\nkubeadm reset -f\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[n("strong",[s._v("Master")]),s._v(" 节点删除工作目录，并重置 "),n("strong",[s._v("kubeadm")])])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /etc/kubernetes/*\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.kube/*\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /var/lib/etcd/*\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /var/lib/cni/\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /etc/cni/net.d\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /proc/sys/net/ipv4/ip_forward\n\nkubeadm reset -f\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h2",{attrs:{id:"本地管理远程集群"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#本地管理远程集群"}},[s._v("#")]),s._v(" 本地管理远程集群")]),s._v(" "),n("ol",[n("li",[s._v("本机装了 "),n("strong",[s._v("kubectl")])]),s._v(" "),n("li",[s._v("开放 云服务器集群 "),n("strong",[s._v("master")]),s._v(" 节点 "),n("strong",[s._v("6443")]),s._v(" 端口")]),s._v(" "),n("li",[s._v("复制 云集群 "),n("strong",[s._v("master")]),s._v(" 节点 "),n("strong",[s._v("~/.kube/config")]),s._v(" 到本机相同目录")]),s._v(" "),n("li",[s._v("更改 本地机器 "),n("strong",[s._v("hosts")])])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# master 节点外网ip  , master 节点 主机域名")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(".1.1  kmaster\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"kubectl-命令补全"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kubectl-命令补全"}},[s._v("#")]),s._v(" kubectl 命令补全")]),s._v(" "),n("ol",[n("li",[n("strong",[s._v("zsh")]),s._v(" 补全")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"source <(kubectl completion zsh)"')]),s._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.zshrc  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.zshrc  \n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[n("a",{attrs:{href:"https://kubernetes.io/zh/docs/tasks/tools/install-kubectl-macos/#enable-shell-autocompletion",target:"_blank",rel:"noopener noreferrer"}},[s._v("其他补全"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=t.exports}}]);