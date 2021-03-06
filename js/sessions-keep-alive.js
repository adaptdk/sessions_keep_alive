(function ($) {
    Drupal.behaviors.session_keep_alive = {
        attach: function (context, settings) {
            var interval = Drupal.settings.session_keep_alive_interval;
            setInterval(function() {
                jQuery.ajax({
                    type: 'POST',
                    url: Drupal.settings.basePath + 'sessions/keep/alive',
                    dataType: 'json',
                });
            }, 1000 * 60 * interval);
        }
    }
})(jQuery);
