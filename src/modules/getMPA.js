// // const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// export const getMPA = () => {
//   const entry = {},
//     htmlwebpackplugins = [];
//   // const entryfiles = glob.sync(path.resolve(__dirname, "./src/*/app.js"));
//   // entryfiles.forEach(function (item) {
//   // const folder = item.match(/\/src\/(\w+)\/app\.js$/)[1];

//   // entry[folder] = `./${folder}/app.js`;
//   // pageNames.forEach((pageName) => {
//   //      new HtmlWebpackPlugin({
//   //       template: path.resolve(__dirname, "src", "pages", `${pageName}`),
//   //       filename: `${pageName}`,
//   //     });
//   pageNames.forEach((pageName) => {
//     htmlwebpackplugins.push(
//       new HtmlWebpackPlugin({
//         Title: `${pageName} page`,
//         template: path.resolve(__dirname, 'src', 'pages', `${pageName}`),
//         filename: `${pageName}`,
//         MiniFy: true, // Generate the compressed HTML code.
//       }),
//     );
//   });

//   return htmlwebpackplugins;
// };
