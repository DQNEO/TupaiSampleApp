Package('helloworld')
.use('tupai.Application')
      .define('ResponseDelegate', function(cp){ return Package.Class.extend({
          didHttpRequestSuccess: function(name, requestName, response,request){
              console.log('did request success');
              var resJson = JSON.parse(response.responseText);

              var app = cp.Application.instance;
              var cm = app.getCacheManager();
              var cache = cm.getCache('issues');

          },
          didHttpRequestError: function(){},
      });
                                              });
