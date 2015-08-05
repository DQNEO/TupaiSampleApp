Package('helloworld')
.use('tupai.ViewController')
.use('tupai.ui.View')
.use('helloworld.Templates')
.define('RootViewController', function(cp) { return cp.ViewController.extend({
    viewInit: function(options, url) {
        console.log('RootViewController.viewInit');
        cp.ViewController.prototype.viewInit.apply(this, arguments);
      var view = new cp.View();
      var header = new cp.View({
            template: cp.Templates.get('helloworld.RootViewController.content'),
            templateParameters: {
                lbl: 'Hello I am Root!'
            }
      });
      var body = new cp.View();

      view.addSubView(header);
      view.addSubView(body);
      this.setContentView(view);
      this._body = body;
    },
    viewDidLoad: function (view) {
        cp.ViewController.prototype.viewDidLoad.apply(this, arguments);
    },
    viewDidUnload: function (view) {
        cp.ViewController.prototype.viewDidUnload.apply(this, arguments);
    },
    /* call from transisManager */
    transitController: function (controller, url, options, transitOptions) {
      var view = controller.getContentView();
      this._body.clearChildren();
      this._body.addSubView(view);
      this._body.render();
    }
});});
