var packageConfig = require('../package.json');
var { readXml, updateXml, replaceFile } = require('./xml');
var fs = require('fs');

console.log('rename: start');
readXml("./src/package.xml", json => {
  var oldWidgetName = json.package.clientModule[0].$.name;

  if (oldWidgetName !== packageConfig.widgetName) {
    //#region rename 
    fs.rename(`./typings/${oldWidgetName}Props.d.ts`, `./typings/${packageConfig.widgetName}Props.d.ts`, e => {
      e ? console.log('ERROR: ' + e) : null;
    });

    fs.rename(`./src/${oldWidgetName}.xml`, `./src/${packageConfig.widgetName}.xml`, function (err) {
      if (err) console.log('ERROR: ' + err);


    });

    fs.rename(`./src/${oldWidgetName}.tsx`, `./src/${packageConfig.widgetName}.tsx`, function (err) {
      if (err) console.log('ERROR: ' + err);
      fs.readFile(`./src/${packageConfig.widgetName}.tsx`, 'utf8', function (err2, data) {
        if (err2) {
          return console.log(err2);
        }
        var result = data
          .replace(new RegExp(`${oldWidgetName}Props`, 'g'), `${packageConfig.widgetName}Props`)
          .replace(new RegExp(`${oldWidgetName}PreviewProps`, 'g'), `${packageConfig.widgetName}PreviewProps`);

        fs.writeFile(`./src/${packageConfig.widgetName}.tsx`, result, 'utf8', function (err2) {
          if (err2) return console.log(err2);
        });
      });

    });

    fs.rename(`./src/${oldWidgetName}.editorPreview.tsx`, `./src/${packageConfig.widgetName}.editorPreview.tsx`, function (err) {
      if (err) console.log('ERROR: ' + err);
      fs.readFile(`./src/${packageConfig.widgetName}.editorPreview.tsx`, 'utf8', function (err2, data) {
        if (err2) {
          return console.log(err2);
        }
        var result = data
          .replace(new RegExp(`${oldWidgetName}Props`, 'g'), `${packageConfig.widgetName}Props`)
          .replace(new RegExp(`${oldWidgetName}PreviewProps`, 'g'), `${packageConfig.widgetName}PreviewProps`);

        fs.writeFile(`./src/${packageConfig.widgetName}.editorPreview.tsx`, result, 'utf8', function (err2) {
          if (err2) return console.log(err2);
        });
      });
    });

    fs.rename(`./src/${oldWidgetName}.editorConfig.ts`, `./src/${packageConfig.widgetName}.editorConfig.ts`, function (err) {
      if (err) console.log('ERROR: ' + err);
      fs.readFile(`./src/${packageConfig.widgetName}.editorConfig.ts`, 'utf8', function (err2, data) {
        if (err2) {
          return console.log(err2);
        }
        var result = data
          .replace(new RegExp(`${oldWidgetName}Props`, 'g'), `${packageConfig.widgetName}Props`)
          .replace(new RegExp(`${oldWidgetName}PreviewProps`, 'g'), `${packageConfig.widgetName}PreviewProps`);

        fs.writeFile(`./src/${packageConfig.widgetName}.editorConfig.ts`, result, 'utf8', function (err2) {
          if (err2) return console.log(err2);
        });
      });

    });
    console.log('rename: done');
    //#endregion
  } else {
    console.log('skip: no need rename');
  }

  //#region update
  console.log('update: start');
  updateXml("./src/package.xml", json => {
    json.package.clientModule[0].$.name = packageConfig.widgetName;
    json.package.clientModule[0].$.version = packageConfig.version;
    json.package.clientModule[0].files[0].file[0].$.path = `${packageConfig.packagePath}/${packageConfig.name}`;
    json.package.clientModule[0].widgetFiles[0].widgetFile[0].$.path = `${packageConfig.widgetName}.xml`;
  });

  updateXml(`./src/${packageConfig.widgetName}.xml`, json => {
    json.widget.$.id = `${packageConfig.packagePath}.${packageConfig.name}.${packageConfig.widgetName}`;
    json.widget.name[0] = packageConfig.widgetName;
    json.widget.description[0] = packageConfig.description;
  });

  replaceFile(`./src/${packageConfig.widgetName}.tsx`, /Graph/g, packageConfig.widgetName);

  console.log('update: done');
  //#endregion

});

