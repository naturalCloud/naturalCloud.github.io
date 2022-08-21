(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{502:function(s,t,n){"use strict";n.r(t);var a=n(31),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("这一段时间，完全切换到了 "),n("strong",[s._v("docker")]),s._v(" 技术栈，为规划技术栈积累实战经验。")]),s._v(" "),n("p",[s._v("目前工作主要使用 "),n("strong",[s._v("PHP")]),s._v(" + "),n("strong",[s._v("swoole")]),s._v(" 技术栈，未来会向着 "),n("strong",[s._v("golang")]),s._v(" ，"),n("strong",[s._v("微服务")]),s._v(" 方向演进。")]),s._v(" "),n("p",[s._v("近来踩坑编写了 "),n("strong",[s._v("php + swoole")]),s._v(" 的 "),n("strong",[s._v("docker-compose")]),s._v(" 文件，有如下几点")]),s._v(" "),n("ul",[n("li",[s._v("原始镜像源切换至国内")]),s._v(" "),n("li",[s._v("安装 "),n("strong",[s._v("php")]),s._v(" 扩展系统依赖")]),s._v(" "),n("li",[s._v("安装 "),n("strong",[s._v("php")]),s._v(" 预定义扩展")]),s._v(" "),n("li",[s._v("安装 第三方扩展")])]),s._v(" "),n("ol",[n("li",[s._v("第一版")])]),s._v(" "),n("div",{staticClass:"language-dockerfile line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[n("code",[n("span",{pre:!0,attrs:{class:"token instruction"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("  php:7.4.30-fpm")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token instruction"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" sed -i s/deb.debian.org/mirrors.aliyun.com/g /etc/apt/sources.list && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Asia/Shanghai'")]),s._v(" >/etc/timezone")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token instruction"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt update && apt-get install -y locales && apt-get -y install ttf-wqy-zenhei &&  apt-get -y install xfonts-intl-chinese  &&  dpkg-reconfigure locales && localedef -c -f UTF-8 -i zh_CN zh_CN.utf8 && apt install -y curl")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token instruction"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v("    apt-get install -y zlib1g-dev && apt-get install -y libzip-dev  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n      && apt-get install -y zsh && apt-get install -y   git && apt-get install -y wget && apt-get install apt-utils"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n      && sh -c "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n      && chsh -s $(which zsh)")]),s._v("\n\n\n\n"),n("span",{pre:!0,attrs:{class:"token instruction"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v("  docker-php-ext-install zip && docker-php-ext-install pdo_mysql && docker-php-ext-install sockets "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n     && docker-php-ext-install -j$(nproc) bcmath")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token instruction"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" pecl install redis "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    && docker-php-ext-enable redis "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    && pecl install swoole-4.5.7 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    && docker-php-ext-enable swoole")]),s._v("\n\n\n\n"),n("span",{pre:!0,attrs:{class:"token instruction"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && composer config -g repo.packagist composer https://packagist.phpcomposer.com "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n")])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[s._v("第二版")])]),s._v(" "),n("div",{staticClass:"language-dockerfile line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[n("code",[n("span",{pre:!0,attrs:{class:"token instruction"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("  php:7.4.30-fpm-buster")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token instruction"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v("  rm -rf /etc/apt/sources.list && echo "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deb http://mirrors.ustc.edu.cn/debian buster main contrib non-free\\n\\\n           deb http://mirrors.ustc.edu.cn/debian buster-updates main contrib non-free\\n \\\n           deb http://mirrors.ustc.edu.cn/debian buster-backports main contrib non-free\\n\\\n           deb http://mirrors.ustc.edu.cn/debian-security/ buster/updates main contrib non-free\\n'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        >> /etc/apt/sources.list")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token instruction"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v("   apt-get update && apt-get install -y zlib1g-dev && apt-get install -y libzip-dev  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n      && apt-get -y install  git")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token instruction"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v("  docker-php-ext-install zip && docker-php-ext-install pdo_mysql && docker-php-ext-install sockets "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n     && docker-php-ext-install -j$(nproc) bcmath")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token instruction"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" pecl install redis "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    && docker-php-ext-enable redis "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    && pecl install swoole-4.5.7 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    && docker-php-ext-enable swoole")]),s._v("\n\n\n\n"),n("span",{pre:!0,attrs:{class:"token instruction"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && composer config -g repo.packagist composer https://packagist.phpcomposer.com "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n")])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);