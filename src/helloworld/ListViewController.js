Package('helloworld')
.use('tupai.ViewController')
.use('tupai.ui.View')
.use('helloworld.Templates')
.define('ListViewController', function(cp) { return cp.ViewController.extend({
    viewInit: function(options, url) {
        console.log('ListViewController.viewInit');
        cp.ViewController.prototype.viewInit.apply(this, arguments);
        var view = new cp.View({
            template: cp.Templates.get('helloworld.ListViewController.content'),
            templateParameters: {
              lbl: 'Hello ListView!'
            }
        });
        this.setContentView(view);

      this.registerCacheObserver('issues', this);
      this._cache = this.getCache('issues');
    },
    viewDidLoad: function (view) {
      console.log('ListView didLoad');
        cp.ViewController.prototype.viewDidLoad.apply(this, arguments);
    },

    /* call from transisManager */
    transitController: function (controller, url, options, transitOptions) {
    }
});});
