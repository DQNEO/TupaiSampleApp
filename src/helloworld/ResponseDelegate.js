Package('helloworld')
.use('tupai.Application')
      .define('ResponseDelegate', function(cp){ return Package.Class.extend({
          didHttpRequestSuccess: function(name, requestName, response,request){
              console.log('did request success');
              var resJson = JSON.parse(response.responseText);

              var app = cp.Application.instance;
              var cm = app.getCacheManager();
              var cache = cm.getCache('issues');

              var issues = resJson.issues;
              for(var i = 0;i<issues.length;i++) {
                  cache.push(issues[i]);
              }

              cache.end();
          },
          didHttpRequestError: function(){},
      });
                                              });
