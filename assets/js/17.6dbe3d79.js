(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{496:function(a,s,e){"use strict";e.r(s);var r=e(31),n=Object(r.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),e("p",[a._v("构建docker镜像的文本文件，是由一条条构建镜像所需的指令和参数构成的脚本。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/naturalCloud/personal-cloud-image-warehouse/main/devops/dockfile.md/376804783807220.png",alt:""}})]),a._v(" "),e("p",[a._v("文档地址 "),e("a",{attrs:{href:"https://docs.docker.com/engine/reference/builder/",target:"_blank",rel:"noopener noreferrer"}},[a._v("dockerfile doc"),e("OutboundLink")],1)]),a._v(" "),e("h2",{attrs:{id:"概念解释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概念解释"}},[a._v("#")]),a._v(" 概念解释")]),a._v(" "),e("p",[a._v("从应用软件的角度来看，Dockerfile、Docker镜像与Docker容器分别代表软件的三个不同阶段，")]),a._v(" "),e("ul",[e("li",[a._v("Dockerfile是软件的原材料")]),a._v(" "),e("li",[a._v("Docker镜像是软件的交付品")]),a._v(" "),e("li",[a._v("Docker容器则可以认为是软件镜像的运行态，也即依照镜像运行的容器实例\nDockerfile面向开发，Docker镜像成为交付标准，Docker容器则涉及部署与运维，三者缺一不可，合力充当Docker体系的基石。")])]),a._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/naturalCloud/personal-cloud-image-warehouse/main/devops/dockfile.md/344726515901360.png",alt:""}})]),a._v(" "),e("ul",[e("li",[e("p",[a._v("Dockerfile，需要定义一个Dockerfile，Dockerfile定义了进程需要的一切东西")]),a._v(" "),e("p",[a._v("Dockerfile涉及的内容包括执行代码或者是文件、环境变量、依赖包、运行时环境、动态链接库、操作系统的发行版、服务进程和内核进程(当应用进程需要和系统服务和内核进程打交道，这时需要考虑如何设计namespace的权限控制)等等;")])]),a._v(" "),e("li",[e("p",[a._v("Docker镜像，在用Dockerfile定义一个文件之后，docker build时会产生一个Docker镜像，当运行 Docker镜像时会真正开始提供服务;")])]),a._v(" "),e("li",[e("p",[a._v("Docker容器，容器是直接提供服务的。")])])]),a._v(" "),e("h2",{attrs:{id:"执行流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行流程"}},[a._v("#")]),a._v(" 执行流程")]),a._v(" "),e("p",[a._v("Docker执行Dockerfile的大致流程")]),a._v(" "),e("ul",[e("li",[a._v("docker从基础镜像运行一个容器")]),a._v(" "),e("li",[a._v("执行一条指令并对容器作出修改")]),a._v(" "),e("li",[a._v("执行类似docker commit的操作提交一个新的镜像层")]),a._v(" "),e("li",[a._v("docker再基于刚提交的镜像运行一个新容器")]),a._v(" "),e("li",[a._v("执行dockerfile中的下一条指令直到所有指令都执行完成")])]),a._v(" "),e("h2",{attrs:{id:"dockefile-语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dockefile-语法"}},[a._v("#")]),a._v(" dockefile 语法")]),a._v(" "),e("h3",{attrs:{id:"from"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#from"}},[a._v("#")]),a._v(" FROM")]),a._v(" "),e("p",[a._v("指定基础镜像（可以是私有仓库，也可以是公用仓库，如果本机有镜像优先使用本机）")]),a._v(" "),e("h3",{attrs:{id:"maintainer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maintainer"}},[a._v("#")]),a._v(" MAINTAINER")]),a._v(" "),e("p",[a._v("作者信息")]),a._v(" "),e("h3",{attrs:{id:"run"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[a._v("#")]),a._v(" RUN")]),a._v(" "),e("p",[a._v("构建镜像中执行的命令。包含两种模式 shell 和 exec")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('shell 模式\n    RUN <command> (常用)\n    例： RUN echo hello\nexec 模式\n    RUN ["executable","param1","param2"]\n    例：RUN["/bin/bash","-c","echo hello"]\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])]),e("h3",{attrs:{id:"expose"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#expose"}},[a._v("#")]),a._v(" EXPOSE")]),a._v(" "),e("p",[a._v("指令 声明端口")]),a._v(" "),e("h3",{attrs:{id:"cmd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cmd"}},[a._v("#")]),a._v(" CMD")]),a._v(" "),e("p",[a._v("类似于 RUN,CMD 是使用在镜像运行时默认启动程序的命令，程序运行结束容器也就结束了。CMD 指令可被 docker run 参数指定要运行的程序所覆盖。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('格式：\nCMD ["executable","param1","param2"] (exec模式)\nCMD command （shell模式）\nCMD ["param1","param2"] (作为ENTRYPOINT指令的默认参数)\n \n例：\nCMD ["/usr/sbin/nginx","-g","daemon off;"]\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])]),e("h3",{attrs:{id:"enterypoint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enterypoint"}},[a._v("#")]),a._v(" ENTERYPOINT")]),a._v(" "),e("p",[a._v("类似于 CMD，但不会被 docker run 的命令行指令覆盖，这些命令行参数会被当做参数送给 ENTERYPOINT。如果需要重新指定 ENTERYPOINT 请使用 --entrypoint 选项，将覆盖 entrypoint  指令指定的程序。")]),a._v(" "),e("p",[a._v("优点：在执行 docker run  的时候可以指定 ENTRYPOINT  运行所需的参数。")]),a._v(" "),e("p",[a._v("注意：如果 Dockerfile  中如果存在多个 ENTRYPOINT  指令，仅最后一个生效。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('格式：\nENTERYPOINT ["executable","param1","param2"](exec 模式)\nENTERYPOINT command  （shell  模式）\n \n#  定参\nENTRYPOINT ["nginx", "-c"] \n#  变参\nCMD ["/etc/nginx/nginx.conf"] \n \n# 运行时传参\ndocker run nginx:test -c /etc/nginx/new.conf\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br")])]),e("h3",{attrs:{id:"copy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#copy"}},[a._v("#")]),a._v(" COPY")]),a._v(" "),e("p",[a._v("复制指令，从上下文目录中复制文件或者目录到容器里指定路径。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('格式：\nCOPY [--chown=<user>:<group>] 源路径 目标路径 （shell模式）\nCOPY [--chown=<user>:<group>] ["源路径" "目标路径"] （exec模式）\n \n--chown=<user>:<group> 可选项改变容器内文件所属组和拥有者\n< 源路径>：源文件或者源目录，这里可以是通配符表达式。\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])]),e("h3",{attrs:{id:"add"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add"}},[a._v("#")]),a._v(" ADD")]),a._v(" "),e("p",[a._v("指令与 COPY 使用 方法一致（同样需求，推荐使用 COPY），")]),a._v(" "),e("p",[a._v("优点：ADD 在执行源文件为 tar 包时，会自动解压 gzip,bzip2 和 xz 的情况下，会自动复制解压到目标路径。")]),a._v(" "),e("p",[a._v("缺点： 不解压成功无法复制 tar 压缩包，解压会使构建变得缓慢")]),a._v(" "),e("h3",{attrs:{id:"volume"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#volume"}},[a._v("#")]),a._v(" VOLUME")]),a._v(" "),e("p",[a._v("定义匿名卷，在启动时会自动挂载匿名卷。")]),a._v(" "),e("p",[a._v("作用：避免重要数据丢失，避免容器越来越大。")]),a._v(" "),e("p",[a._v("在启动时我们可以通过 -v 参数修改挂载点")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('格式：\nVOLUME ["< 路径 1>", "< 路径2>"...]\nVOLUME < 路径>\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h3",{attrs:{id:"workdir"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#workdir"}},[a._v("#")]),a._v(" WORKDIR")]),a._v(" "),e("p",[a._v("指定工作目录，用 WORKDIR 指定的工作目录，会在构建镜像中的每一层存在，工作目录必须提前存在。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("格式：\nWORKDIR < 工作目录路径> >\nWORKDIR /path\n（填写绝对路径）\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("h3",{attrs:{id:"env"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#env"}},[a._v("#")]),a._v(" ENV")]),a._v(" "),e("p",[a._v("设置环境变量")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("格式：\nENV <key> <value>\nENV <key>=<value>...\n \n例：\nENV NAME lilei\nRUN echo $NAME\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])]),e("h3",{attrs:{id:"user"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#user"}},[a._v("#")]),a._v(" USER")]),a._v(" "),e("p",[a._v("用于指定执行后续命令的用户和用户组，这边只是切换后续命令执行的用户（用户和用户组必须提前已经存在)")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("格式：\nUSER < 用户名 >[:< 用户组 >]\n例：\nUSER daemon\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("h3",{attrs:{id:"onbuild"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#onbuild"}},[a._v("#")]),a._v(" ONBUILD")]),a._v(" "),e("p",[a._v("用于延迟构建命令的执行。简单的说，就是 Dockerfile  里用 ONBUILD  指定的命令，在本次构建镜像的过程中不会执行。当有新的 Dockerfile  使用了之前构建的镜像作为基础镜像 ，这时执行新镜像的 Dockerfile  构建时候，会执行的 Dockerfile  里的 ONBUILD  指定的命令。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("格式：\nONBUILD <其它指令>\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h3",{attrs:{id:"label"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#label"}},[a._v("#")]),a._v(" LABEL")]),a._v(" "),e("p",[a._v("指令用来给镜像添加一些元数据（metadata），以键值对的形式")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('格式：\nLABEL <key>=<value> <key>=<value> <key>=<value> ...\n比如我们可以添加镜像的作者：\nLABEL authors="amy"\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("h3",{attrs:{id:"healthcheck"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#healthcheck"}},[a._v("#")]),a._v(" HEALTHCHECK")]),a._v(" "),e("p",[a._v("用于指定某个程序或者指令来监控 docker 容器服务的运行状态。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("格式：\nHEALTHCHECK [选项] CMD <命令>：设置检查容器健康状况的命令\nHEALTHCHECK NONE：如果基础镜像有健康检查指令，使用这行可以屏蔽掉其健康检查指令\nHEALTHCHECK [选项] CMD <命令> : 这边 CMD 后面跟随的命令使用，可以参考 CMD 的用法\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("h3",{attrs:{id:"arg"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arg"}},[a._v("#")]),a._v(" ARG")]),a._v(" "),e("p",[a._v("构建参数，与 ENV 作用一致，作用域不同，ARG 设置的环境变量只对 Dockerfile 有效，也就是说只有在 docker build 时有效，构建好的镜像中不存在 ARG 环境变量。")]),a._v(" "),e("p",[a._v("构建时可以用 --build-arg <参数名>=< 值 > 来覆盖")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("格式\nARG <参数名>[=<参数值>]\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("hr"),a._v(" "),e("p",[a._v("部分参考 "),e("a",{attrs:{href:"https://blog.csdn.net/qq_25794513/article/details/123133453",target:"_blank",rel:"noopener noreferrer"}},[a._v("参考"),e("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);