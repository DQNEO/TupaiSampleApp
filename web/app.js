console.log("app.js is included");
console.log(Package);

Package()
.use('tupai.Application')
.use('Config')
.run(function(cp){
  console.log('run');
  var app = new cp.Application({
    window: {
      routes: cp.Config['routes']
    },
    cacheManager: cp.Config['cache_manager'],
  });
  app.show('/root');
});
