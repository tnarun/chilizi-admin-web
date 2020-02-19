
// ref: https://umijs.org/config/
export default {
  hash: true,
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: false,
      dynamicImport: false,
      title: 'chilizi power admin',
      dll: false,
      
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}
