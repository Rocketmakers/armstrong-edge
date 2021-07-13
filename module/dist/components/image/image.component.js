"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var useElementStatus_1 = require("../../hooks/useElementStatus");
var useHasTimeElapsed_1 = require("../../hooks/useHasTimeElapsed");
var useIsInViewport_1 = require("../../hooks/useIsInViewport");
var classNames_1 = require("../../utils/classNames");
var status_1 = require("../status");
/** This is a separate component as a lot of its internal logic depends on when it is mounted by the outer component */
var ImageInner = function (_a) {
    var pictureAttributes = _a.pictureAttributes, imgAttributes = _a.imgAttributes, src = _a.src, additionalSources = _a.additionalSources, timeToSpinner = _a.timeToSpinner, errorIcon = _a.errorIcon, spinnerIcon = _a.spinnerIcon;
    var internalImageRef = React.useRef(null);
    var _b = useElementStatus_1.useElementStatus(internalImageRef), error = _b.error, loaded = _b.loaded, loading = _b.loading, elementStatusProps = _b.props;
    var showSpinner = useHasTimeElapsed_1.useHasTimeElapsedSinceMount(timeToSpinner);
    return (React.createElement("div", { className: "arm-image-inner", "data-loading": loading, "data-loaded": loaded, "data-error": error },
        !error && (React.createElement("picture", tslib_1.__assign({}, pictureAttributes), additionalSources === null || additionalSources === void 0 ? void 0 :
            additionalSources.map(function (source) {
                return typeof source === 'string' ? (React.createElement("source", { srcSet: source, key: source })) : (React.createElement("source", tslib_1.__assign({ srcSet: source.srcSet, media: source.media, type: source.type }, (source.attributes || {}), { key: source.srcSet })));
            }),
            React.createElement("img", tslib_1.__assign({}, imgAttributes, elementStatusProps, { src: typeof src === 'string' ? src : src[0], ref: internalImageRef })))),
        React.createElement(status_1.Status, { pending: loading && showSpinner, error: error, spinnerIcon: spinnerIcon, errorIcon: errorIcon })));
};
/** A lazy loaded image which will show a spinner if the image is taking a while to load */
exports.Image = React.forwardRef(function (props, ref) {
    var wrapperAttributes = props.wrapperAttributes, rootMargin = props.rootMargin, threshold = props.threshold, onEnter = props.onEnter, onExit = props.onExit, innerImageProps = tslib_1.__rest(props, ["wrapperAttributes", "rootMargin", "threshold", "onEnter", "onExit"]);
    var internalRef = React.useRef(null);
    React.useImperativeHandle(ref, function () { return internalRef.current; }, [internalRef]);
    var enteredViewport = useIsInViewport_1.useInViewport(internalRef, { rootMargin: rootMargin, threshold: threshold, onEnter: onEnter, onExit: onExit, once: true });
    return (React.createElement("div", tslib_1.__assign({}, wrapperAttributes, { className: classNames_1.ClassNames.concat('arm-image', wrapperAttributes === null || wrapperAttributes === void 0 ? void 0 : wrapperAttributes.className), "data-entered-viewport": enteredViewport, ref: internalRef }), enteredViewport && React.createElement(ImageInner, tslib_1.__assign({}, innerImageProps))));
});
exports.Image.defaultProps = {
    rootMargin: '50%',
    timeToSpinner: 1000,
};
