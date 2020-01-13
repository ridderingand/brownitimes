const path = require('path');

// I run this to get absolute path for output key
console.log(path.join(__dirname, 'public'));
// when I run node webpack.config.js in terminal I get:
// /Users/riddering/Desktop/Development/ReactCourse/indecision-app/public
// That's what I use in output for `path`

module.exports = {
    entry: './src/app.js',
    output: {
    // absolute path where you want to output the js file (can't use ./)
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        //loader => defines how file gets transformed when webpack uses it
        rules: [{
            loader: 'babel-loader',
            // run .js files through babel
            test: /\.js$/,
            // don't run babel through node libraries
            exclude: /node_modules/
        }, {
            // this is the rule for handling styles files
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        // needs to be the absolute path again
        contentBase: path.join(__dirname, 'public')
    }
};

