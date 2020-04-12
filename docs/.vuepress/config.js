module.exports = {
	title: "ztree-for-vue",
	base: "/vue-ztree/",
	themeConfig: {
		nav: [{ text: "指南", link: "/" }, { text: "配置", link: "/api" }],
		sidebar: false
	},
	description: "A Vue.2x component of ztree 👍",
	configureWebpack: {
		resolve: {
			alias: {
				"@alias": "./public"
			}
		}
	}
};
