function hello() {
    console.log('Hello World');
  }

  module.exports = hello; // require('hello-world-script')できるようにする
  module.exports.default = hello; // import xxx from 'hello-world-script'できるようにする
