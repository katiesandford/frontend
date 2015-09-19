jQuery(function ($) {
    "use strict";

    var $ul =  $("ul.pdp-panes");
    var panelWidth = $ul.find('li').first().outerWidth();

    var $initiallySelectedPane = $ul.find("li.selected");
    var $initiallySelectedPanePDPId = $initiallySelectedPane.data('pdp-id');
    var $cloneOfInitiallySelectedPane = $ul.find('li[data-pdp-id=' + $initiallySelectedPanePDPId + ']').last();
    var initialLeftPosition = $ul.position().left;
    var endLeftPosition = - ($ul.outerWidth() - $('div.pdp-carousel').outerWidth() + initialLeftPosition);

    function nextPane() {
        // Complete current animation
        $ul.stop(true, true);

        var $currentSelection = $ul.find('li.selected').first();
        // Make sure that we are at the start of the ul
        if ($currentSelection.data('pdp-id') == $initiallySelectedPanePDPId) {
            $ul.css({left:initialLeftPosition});
            $currentSelection = $initiallySelectedPane;
        }
        var newLeft = $ul.position().left-(panelWidth);
        $ul.animate({left:newLeft});
        $('li').removeClass('selected');
        var $nextSelection = $currentSelection.next();
        $nextSelection.addClass('selected');
        if ($nextSelection.data('pdp-id') == $initiallySelectedPanePDPId) {
            $initiallySelectedPane.addClass('selected');
        }
    }

    function previousPane() {
        // Complete current animation
        $ul.stop(true, true);

        var $currentSelection = $ul.find('li.selected').first();
        // Make sure that we are at the end of the ul
        if ($currentSelection.data('pdp-id') == $initiallySelectedPanePDPId) {
            //$cloneOfInitiallySelectedPane.addClass('selected');
            $ul.css({left:endLeftPosition});
            $currentSelection = $cloneOfInitiallySelectedPane; // Make sure current selection is the last ont
        }
        var newLeft = $ul.position().left+(panelWidth);
        $ul.animate({left:newLeft});
        $('li').removeClass('selected');
        var $previousSelection = $currentSelection.prev();
        $previousSelection.addClass('selected');
        if ($currentSelection.prev().data('pdp-id') == $initiallySelectedPanePDPId) {
            $cloneOfInitiallySelectedPane.addClass('selected');
        }
    }

    $('.pdp-carousel-arrow-right').click(function(e){
        nextPane();
    });

    $('.pdp-carousel-arrow-left').click(function(e){
        previousPane();
    });

    // Clicking on panes either side of the selected panes move the
    // carousel in the same way as clicking on the arrows
    $ul.find('li').find('a').click(function(e){
        var $parentLiEl = $(e.target).closest('li');
        if (!$parentLiEl.hasClass('selected')) {
            e.preventDefault();
            if ($parentLiEl.prev().hasClass('selected')) {
                nextPane();
            } else if ($parentLiEl.next().hasClass('selected')) {
                previousPane();
            }
        }
    });
});
