console.log(`👷‍♂️ Creating CSS ${process.env.NODE_ENV} build for the ${process.env.npm_lifecycle_event} task`);

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
