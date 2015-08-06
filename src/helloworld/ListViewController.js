Package('helloworld')
.use('tupai.ViewController')
.use('tupai.ui.View')
.use('tupai.ui.TableView')
.use('helloworld.Templates')
.use('helloworld.ui.TimeLineTableViewCell')
.define('ListViewController', function(cp) { return cp.ViewController.extend({
    viewInit: function(options, url) {
        console.log('ListViewController.viewInit');
        var tableView = new cp.TableView();
        tableView.setTableViewDelegate(this);
        this.setContentView(tableView);

      this.registerCacheObserver('issues', this);
      this._cache = this.getCache('issues');
    },
    didCacheChanged: function(e){
        console.log('did cached changed');
        console.log(this._cache.size());
        for(var i = 0;i< this._cache.size();i++) {
            var issue = this._cache.get(i);
            console.log(issue);
        }

        this.getContentView().reloadData();
    },
    numberOfRows : function() {
        return this._cache.size();
    },
    cellForRowAtIndexPath: function(indexPath, tableView){
        var index = indexPath.row;
        console.log(index);
        //var cell = tableView.dequeueReusableCell('issues_table_cell');
        //if (cell == null) {
            var cell = new cp.TimeLineTableViewCell();
    //}
        cell.setData(this._cache.get(index));
        return cell;
    },
    viewDidLoad: function (view) {
        console.log('ListView didLoad');
        this.executeApi({
            name:"issues",
            requestName: "search",
            parameters: {foo:"bar"}
        });
    },

    /* call from transisManager */
    transitController: function (controller, url, options, transitOptions) {
    }
});});
