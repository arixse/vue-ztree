module.exports = {
	title: "ztree-for-vue",
	// base: "/<REPO>/",
	themeConfig: {
		nav: [{ text: "指南", link: "/" }, { text: "Api", link: "/api" }],
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
