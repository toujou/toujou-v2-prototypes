let postcssConfig = {
    plugins: {
        'postcss-import': {},
        autoprefixer: {},
    }
};

if (process.env.NODE_ENV === 'production') {
    postcssConfig.plugins.cssnano = {};
}

module.exports = postcssConfig;
