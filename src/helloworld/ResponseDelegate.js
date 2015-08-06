Package('helloworld')
.use('tupai.Application')
      .define('ResponseDelegate', function(cp){ return Package.Class.extend({
          didHttpRequestSuccess: function(name, requestName, response,request){
              console.log('did request success');
              var resJson = JSON.parse(response.responseText);
              console.log(resJson);
          },
          didHttpRequestError: function(){},
      });
                                              });
