var _ = require('underscore');
var BaseView = require('./BaseView');
var config = require('../config');
var UserStorage = require('../helpers/UserStorage');
UserStorage.init();

var QuoteView = function (template, $el, id) {
    this.$container = $el;
    this.template = template;
    this.id = id;

    this.init();
};

QuoteView.prototype = Object.create(BaseView.prototype);
QuoteView.prototype.constructor = QuoteView;

QuoteView.prototype.id = 0;

QuoteView.prototype.init = function () {
    this.$el = $('<div></div>');
    this.$el.addClass('js-quote-view');

    this.rateQuote();
};

QuoteView.prototype.hasRated = function (value) {
    if (value == 1) return UserStorage.ratedQuoteUp(this.id);
    else return UserStorage.ratedQuoteDown(this.id);
};

QuoteView.prototype.render = function (data) {
    data.rated_up = this.hasRated(1);
    data.rated_down = this.hasRated(-1);

    data.base_url = window.base_url;
    var html = this.template(data);
    this.$el.html(html);
    this.$container.append(this.$el);
};

QuoteView.prototype.rateQuote = function () {
    var _this = this;
    this.$el.on('click', '.q-rate', function (e) {
        e.preventDefault();

        if (window.logged_user == undefined || window.logged_user.length == 0) {
            window.location.href = "/sign/in";

            return;
        }

        if ($(this).hasClass('q-rate-up')) {
            _this.rateUp();
        } else {
            _this.rateDown();
        }

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            _this.$el.find('.q-rate').removeClass('active');
            $(this).toggleClass('active');
        }
    });
};

QuoteView.prototype.rateUp = function () {
    var _this = this;
    $.getJSON(config.api.rateUp(this.id), function (res) {
        if (res.success) {
            _this.$el.find('.js-q-rating').html(res.rating);

            UserStorage.rateQuote(_this.id, 'up');
        }
    });
};

QuoteView.prototype.rateDown = function () {
    var _this = this;
    $.getJSON(config.api.rateDown(this.id), function (res) {
        if (res.success) {
            _this.$el.find('.js-q-rating').html(res.rating);

            UserStorage.rateQuote(_this.id, 'down');
        }
    });
};

module.exports = QuoteView;
