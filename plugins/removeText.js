'use strict';

exports.type = 'perItem';

exports.active = false;

exports.description = 'removes <text> (disabled by default)';

/**
 * Removes <text> nodes. (disabled by default)
 *
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text
 *
 * @param {Object} item current iteration item
 * @return {Boolean} if false, item will be filtered out
 *
 * @author Greg Douglas
 */
exports.fn = function(item) {

    return !item.isElem('text');

};
