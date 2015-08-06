Package('helloworld.ui')
.use('tupai.ui.View')
.use('helloworld.Templates')
.define('TimeLineTableViewCell', function(cp){ return cp.View.extend({
    setData: function(data) {
        this._data = data;
    },
    getTemplate: function() {
        return cp.Templates.get('timeline_table_cell');
    },
    getTemplateParameters: function() {
        return this._data;
    }
})});

