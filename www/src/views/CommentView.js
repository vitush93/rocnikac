var BaseView = require('./BaseView');
var config = require('../config');
var UserStorage = require('../helpers/UserStorage');
UserStorage.init();

var CommentView = function (template, $el, id, parent) {
    this.template = template;
    this.$container = $el;
    this.id = id;
    this.parent = parent;

    this.init();
};

CommentView.prototype = Object.create(BaseView.prototype);
CommentView.prototype.constructor = CommentView;

CommentView.prototype.$container = null;

CommentView.prototype.id = 0;

CommentView.prototype.parent = 0;

CommentView.prototype.init = function () {
    this.$el = $('<div></div>');
    this.$el.addClass('js-comment-view');
};

CommentView.prototype.render = function (data, onlyHTML) {
    data.logged_user = window.logged_user;
    data.show_reply = (window.logged_user && data.parent == 0);
    data.rated_up = UserStorage.ratedCommentUp(data.id);
    data.rated_down = UserStorage.ratedCommentDown(data.id);

    var html = this.template(data);

    if (onlyHTML) {
        return html;
    } else {
        this.$el.html(html);
        this.$container.append(this.$el);
    }
};

module.exports = CommentView;