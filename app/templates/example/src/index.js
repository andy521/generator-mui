KISSY.add(function(S, Node, Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     * @name <%= name %>
     * @class <%= name %>
     * @since 1.0.0
     * @constructor
     * @extends Base
     */
    function <%= name %>(config) {
        var self = this;
        //调用父类构造函数
        <%= name %>.superclass.constructor.call(self, config);
    }
    S.extend(<%= name %>, Base, /** @lends <%= name %>.prototype*/{

    }, {ATTRS : /** @lends <%= name %>*/{

    }});
    return <%= name %>;
}, {requires : ['node','base']});