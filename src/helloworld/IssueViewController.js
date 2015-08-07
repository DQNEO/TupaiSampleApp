Package('helloworld')
        .use('tupai.ViewController')
        .use('tupai.ui.View')
        .use('helloworld.Templates')
        .define('IssueViewController', function(cp){return cp.ViewController.extend({
            viewInit: function(options, url){
                var view = new cp.View({
                    template: cp.Templates.get('helloworld.IssueViewController.content'),
                    templateParameters:{
                        lbl: 'hello issue'
                    }
                });
                this.setContentView(view);
            },
        })
                                                   });
