console.log("app.js is included");
console.log(Package);

Package()
    .use('tupai.Application')
    .use('Config')
    .run(function(){ console.log('run');});
