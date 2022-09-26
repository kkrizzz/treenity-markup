try {
  const fs = require('fs');

  const dir = `${__dirname}/../node_modules/antd/lib`;
  console.log(dir);

  require('node-dir').files(dir, function (err, files) {
    files = files.filter((f) => f.endsWith('.less'));
    files.forEach((fileName) => {
      const fileContent = fs.readFileSync(fileName).toString();
      const word = '(-?(?(@[wd-]+|d+(w+|%)))';
      new RegExp(`${SYMBOL}`);
      const patchedContent = fileContent.replace(
        /((-?\(?(@[\w\d\-]+|\d+(\w+|%)))(\s+[\+\-\*\/]\s+))+(@[\w\d\-]+|\d+(\w+|%)\)?)/gim,
        (toReplace, ...args) => {
          // console.log(...args);
          const escaped = toReplace.replace(/@([\w\d-]+)/g, '@{$1}');
          const withCalc = `~'calc(${escaped})'`;
          console.log('replaced', fileName.slice(-30));
          console.log(toReplace);
          console.log(withCalc);
          return withCalc;
          // return toReplace;
        }
      );
      if (patchedContent !== fileContent) {
        fs.writeFileSync(
          fileName, //.slice(0, -4) + 'patched.less',
          patchedContent
        );
        // console.log(fileContent);
        // console.log(m);
      }
    });
  });
} catch (err) {
  console.error('exception', err);
}
