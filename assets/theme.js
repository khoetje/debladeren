var Events = new EventEmitter3();
Events.trigger = Events.emit;
window.WAU = window.WAU || {};
WAU.Slideout = (function() {
    var wrapper = undefined;
    document.addEventListener('keyup', function(event) {
        if (event.key === 'Escape') {
            event.preventDefault();
            closeActiveSlideout();
        }
    });
    document.addEventListener('click', function(event) {
        if (event.target === document.querySelector(".js-slideout-overlay")) {
            closeActiveSlideout();
        }
    });

    function closeActiveSlideout() {
        const activeSlideout = document.querySelector('.slideout--active');
        const activeSlideoutName = activeSlideout.getAttribute('data-wau-slideout');
        const opener = document.querySelector('.js-slideout-open[data-wau-slideout-target="' + activeSlideoutName + '"]');
        const direction = opener.getAttribute('data-slideout-direction');
        close(direction, opener);
    }

    function isOpen() {
        wrapper = document.querySelector(".js-slideout-toggle-wrapper");
        return wrapper.classList.contains("slideout-left--open") || wrapper.classList.contains("slideout-right--open");
    }

    function open(direction, targetSlideoutEl, opener) {
        wrapper.classList.add("slideout-" + direction + "--open");
        wrapper.classList.remove("slideout-" + direction + "--closed");
        targetSlideoutEl.classList.add('slideout--active');
        opener.setAttribute("aria-expanded", "true");
        let scrollPosition = Math.abs(0 - document.querySelector('.site-wrap').getBoundingClientRect().top);
        targetSlideoutEl.querySelectorAll('*').forEach((item, i) => {
            item.removeAttribute('tabIndex');
        });
        wrapper.style.overflow = 'hidden';
        wrapper.style.position = 'fixed';
        wrapper.style.top = `-${scrollPosition}px`;
        wrapper.style.width = '100%';
    }

    function close(direction, openerEl) {
        const activeOpenSlideouts = document.querySelectorAll('.slideout--active');
        const openers = document.querySelectorAll(".js-slideout-open");
        const closers = document.querySelectorAll(".js-slideout-close");
        wrapper.classList.remove("slideout-" + direction + "--open");
        wrapper.classList.add("slideout-" + direction + "--closed");
        activeOpenSlideouts.forEach(function(activeSlideoutDrawer) {
            activeSlideoutDrawer.classList.remove('slideout--active');
            activeSlideoutDrawer.querySelectorAll('*').forEach((item, i) => {
                item.setAttribute('tabIndex', '-1');
            });
        });
        openers.forEach(function(opener) {
            opener.setAttribute('aria-expanded', 'false');
        });
        closers.forEach(function(closer) {
            closer.setAttribute('aria-expanded', 'false');
        });
        openerEl.focus();
        let scrollPosition = Math.abs(0 - document.querySelector('.site-wrap').getBoundingClientRect().top);
        wrapper.style.removeProperty('overflow');
        wrapper.style.removeProperty('position');
        wrapper.style.removeProperty('top');
        wrapper.style.removeProperty('width');
        window.scrollTo(0, scrollPosition);
    }

    function closeByName(name) {
        const closer = document.querySelector('[data-wau-slideout-target="' + name + '"]');
        const direction = closer.getAttribute('data-slideout-direction');
        const opener = document.querySelector('.js-slideout-open[data-wau-slideout-target="' + name + '"]');
        close(direction, opener);
    }

    function openByName(name) {
        const opener = document.querySelector('[data-wau-slideout-target="' + name + '"]')
        const direction = opener.getAttribute('data-slideout-direction');
        const targetSlideoutEl = document.querySelector('[data-wau-slideout="' + name + '"]');
        open(direction, targetSlideoutEl, opener);
    }

    function createCloser(name, direction) {
        const closeDiv = document.createElement('div');
        const button = document.createElement('button');
        const icon = document.createElement('div');
        closeDiv.classList.add('slideout__trigger--close');
        closeDiv.classList.add('slideout__trigger-' + name + '__wrapper');
        closeDiv.classList.add('slideout__trigger-general-slideout');
        button.classList.add('slideout__trigger-' + name);
        button.classList.add('js-slideout-close');
        button.setAttribute('data-slideout-direction', direction);
        button.setAttribute('aria-controls', 'slideout-' + name);
        button.setAttribute('aria-label', 'Close slideout');
        icon.classList.add('icn-close');
        button.appendChild(icon);
        closeDiv.appendChild(button);
        return closeDiv;
    }

    function createSlideoutEl(direction, name, wrapperEl) {
        const aside = document.createElement('aside');
        const innerDiv = document.createElement('div');
        const innerContentDiv = document.createElement('div');
        const opener = document.querySelector('[data-wau-slideout-target="' + name + '"]');
        const content = document.querySelector('[data-wau-slideout-content="' + name + '"]');
        const generatedId = "slideout-" + name;
        wrapperEl = wrapperEl || wrapper;
        aside.classList.add('slideout');
        aside.classList.add('slideout__drawer-' + direction);
        aside.setAttribute('data-wau-slideout', name);
        aside.setAttribute('id', generatedId);
        innerDiv.classList.add('slideout__inner-wrapper');
        innerDiv.classList.add('slideout__general-slide__wrapper');
        innerContentDiv.innerHTML = content.innerHTML;
        innerContentDiv.classList.add('slideout__inner-content-container');
        content.innerHTML = '';
        if (content.dataset.wauSlideoutButton && content.dataset.wauSlideoutButton == 'true') {
            let closeDiv = createCloser(name, direction);
            innerDiv.prepend(closeDiv);
        }
        aside.appendChild(innerDiv);
        innerDiv.appendChild(innerContentDiv);
        opener.setAttribute('aria-controls', generatedId);
        wrapperEl.appendChild(aside);
        return aside;
    }

    function reloadSlideoutContents(name) {
        const content = document.querySelector('[data-wau-slideout-content="' + name + '"]');
        const drawer = document.querySelector('aside[data-wau-slideout="' + name + '"]');
        const innerWrapper = drawer.querySelector('.slideout__inner-content-container');
        innerWrapper.innerHTML = content.innerHTML;
    }

    function init(name) {
        if (typeof name === "undefined") {
            console.log("The Slideout must have an associated name.");
            return;
        }
        wrapper = document.querySelector('.js-slideout-toggle-wrapper');
        const slideoutOpeners = document.querySelectorAll('.js-slideout-open[data-wau-slideout-target="' + name + '"]');
        let slideoutTargetEl = undefined;
        slideoutOpeners.forEach((slideoutOpener, i) => {
            const slideoutDirection = slideoutOpener.getAttribute('data-slideout-direction');
            if (slideoutOpener) {
                slideoutTargetEl = document.querySelector(`aside[data-wau-slideout=${name}]`);
            }
            if (!slideoutTargetEl) {
                slideoutTargetEl = createSlideoutEl(slideoutDirection, name, wrapper);
            }
            Events.trigger('slideout:active:' + name);
            slideoutTargetEl.querySelectorAll('*').forEach((item, i) => {
                item.setAttribute('tabIndex', '-1');
            });
            slideoutOpener.addEventListener('click', function() {
                open(slideoutDirection, slideoutTargetEl, slideoutOpener);
            });
        });
        const slideoutClosers = document.querySelectorAll('.js-slideout-close');
        slideoutClosers.forEach((slideoutCloser, i) => {
            const slideoutCloseDirection = slideoutCloser.getAttribute('data-slideout-direction');
            slideoutCloser.addEventListener('click', function() {
                close(slideoutCloseDirection, slideoutCloser);
            });
        });
    }
    const privateFunctions = {
        openByName,
        closeByName,
        createSlideoutEl,
        reloadSlideoutContents
    };
    let returnObj = {};
    returnObj.init = init;
    Object.keys(privateFunctions).forEach(function(pf) {
        returnObj['_' + pf] = privateFunctions[pf];
    });
    return returnObj;
}());
WAU.Modal = (function() {
    var wrapper = undefined;
    document.addEventListener('keyup', function(event) {
        if (event.key === 'Escape') {
            event.preventDefault();
            closeActiveModal();
        }
    });
    document.addEventListener('click', function(event) {
        if (event.target === document.querySelector(".js-modal-overlay")) {
            closeActiveModal();
        }
    });

    function closeActiveModal() {
        const activeModal = document.querySelector('.modal--active');
        const activeModalName = activeModal.getAttribute('data-wau-modal');
        const opener = document.querySelector('.js-modal-open[data-wau-modal-target="' + activeModalName + '"]');
        close(opener);
    }

    function isOpen() {
        wrapper = document.querySelector(".js-modal-toggle-wrapper");
        return wrapper.classList.contains("modal--open");
    }

    function open(targetModalEl, opener) {
        wrapper.classList.add("modal--open");
        wrapper.classList.remove("modal--closed");
        targetModalEl.classList.add('modal--active');
        opener.setAttribute("aria-expanded", "true");
        if (document.activeElement === opener) {
            theme.a11yHelpers.focusOnElement(targetModalEl);
        }
        let scrollPosition = Math.abs(0 - document.querySelector('.site-wrap').getBoundingClientRect().top);
        let padding = theme.Helpers.getScrollbarWidth();
        wrapper.style.paddingRight = padding + 'px';
        wrapper.style.top = `-${scrollPosition}px`;
        wrapper.style.width = '100%';
    }

    function close(openerEl) {
        const activeOpenModals = document.querySelectorAll('.modal--active');
        const openers = document.querySelectorAll(".js-modal-open");
        const closers = document.querySelectorAll(".js-modal-close");
        if (openerEl.getAttribute("aria-controls") == 'modal-quickview') {
            document.querySelector('.js-quickview-content').innerHTML = '';
        }
        wrapper.classList.remove("modal--open");
        wrapper.classList.add("modal--closed");
        activeOpenModals.forEach(function(activeModalDrawer) {
            activeModalDrawer.classList.remove('modal--active');
        });
        openers.forEach(function(opener) {
            opener.setAttribute('aria-expanded', 'false');
        });
        closers.forEach(function(closer) {
            closer.setAttribute('aria-expanded', 'false');
        });
        openerEl.focus();
        let scrollPosition = Math.abs(0 - document.querySelector('.site-wrap').getBoundingClientRect().top);
        wrapper.style.removeProperty('overflow');
        wrapper.style.removeProperty('position');
        wrapper.style.removeProperty('padding-right');
        wrapper.style.removeProperty('top');
        wrapper.style.removeProperty('width');
        window.scrollTo(0, scrollPosition);
    }

    function closeByName(name) {
        const closer = document.querySelector('[data-wau-modal-target="' + name + '"]');
        const opener = document.querySelector('.js-modal-open[data-wau-modal-target="' + name + '"]');
        close(opener);
    }

    function openByName(name) {
        const opener = document.querySelector('[data-wau-modal-target="' + name + '"]');
        const targetModalEl = document.querySelector('[data-wau-modal="' + name + '"]');
        open(targetModalEl, opener);
    }

    function createCloser(name) {
        const closeDiv = document.createElement('div');
        const button = document.createElement('button');
        const icon = document.createElement('div');
        closeDiv.classList.add('slideout__trigger--close');
        closeDiv.classList.add('slideout__trigger-' + name + '__wrapper');
        closeDiv.classList.add('slideout__trigger-general-modal__wrapper');
        button.classList.add('slideout__trigger-' + name);
        button.classList.add('slideout__trigger-general-modal');
        button.classList.add('js-modal-close');
        button.setAttribute('aria-controls', 'modal-' + name);
        button.setAttribute('aria-label', 'Close modal');
        icon.classList.add('icn-close');
        button.appendChild(icon);
        closeDiv.appendChild(button);
        return closeDiv;
    }

    function createModalEl(name, wrapperEl) {
        const div = document.createElement('div');
        const innerDiv = document.createElement('div');
        const innerContentDiv = document.createElement('div');
        const opener = document.querySelector('[data-wau-modal-target="' + name + '"]');
        const content = document.querySelector('[data-wau-modal-content="' + name + '"]');
        const generatedId = "modal-" + name;
        wrapperEl = wrapperEl || wrapper;
        div.classList.add('modal');
        div.classList.add('modal__container');
        div.setAttribute('data-wau-modal', name);
        div.setAttribute('id', generatedId);
        innerDiv.classList.add('modal__inner-wrapper');
        innerDiv.classList.add('modal__general-modal__wrapper');
        innerContentDiv.innerHTML = content.innerHTML;
        innerContentDiv.classList.add('modal__inner-content-container');
        let closeDiv = createCloser(name);
        innerDiv.prepend(closeDiv);
        div.appendChild(innerDiv);
        innerDiv.appendChild(innerContentDiv);
        opener.setAttribute('aria-controls', generatedId);
        wrapperEl.appendChild(div);
        return div;
    }

    function init(name) {
        if (typeof name === "undefined") {
            console.log("The Modal must have an associated name.");
            return;
        }
        wrapper = document.querySelector('.js-modal-toggle-wrapper');
        const modalOpener = document.querySelector('.js-modal-open[data-wau-modal-target="' + name + '"]');
        let modalTargetEl = undefined;
        if (modalOpener) {
            modalTargetEl = document.querySelector(`div[data-wau-modal=${name}]`);
        }
        if (!modalTargetEl) {
            modalTargetEl = createModalEl(name, wrapper);
        }
        modalOpener.addEventListener('click', function() {
            open(modalTargetEl, modalOpener);
        });
        const modalClosers = document.querySelectorAll('.js-modal-close');
        modalClosers.forEach(function(modalCloser) {
            modalCloser.addEventListener('click', function() {
                close(modalCloser);
            });
        });
    }
    const privateFunctions = {
        openByName,
        closeByName,
        createModalEl
    };
    let returnObj = {};
    returnObj.init = init;
    Object.keys(privateFunctions).forEach(function(pf) {
        returnObj['_' + pf] = privateFunctions[pf];
    });
    return returnObj;
}());
WAU.Accordion = (function() {
    const classes = {
        show: "is-active",
        open: "js-accordion-is-open",
        mobileNavAccordion: "js-accordion-mobile-nav"
    };
    const selectors = {
        accordion: ".js-accordion",
        accordionItem: '.c-accordion__item',
        accordionLink: ".js-accordion-link",
        accordionHeader: ".js-accordion-header",
        accordionPanel: ".c-accordion__panel"
    };
    const publicAPIs = {};
    const stripClassPeriod = function(className) {
        if (!className) return;
        return className.split('.')[1];
    }
    publicAPIs.getConfigClass = function(className) {
        if (!className) return;
        if (classes[className] && classes[className] != '') {
            return classes[className];
        } else {
            return false;
        }
    };
    publicAPIs.hide = function(target) {
        target.setAttribute("aria-expanded", "false");
        target.parentNode.classList.remove('accordion-expanded');
        const panel = document.querySelector(`#${target.getAttribute("aria-controls")}`);
        panel.setAttribute("hidden", "");
        setTimeout(function() {
            panel.style.display = "none";
        }, 350);
    };
    publicAPIs.show = function(target, allowMultiple) {
        const panel = document.querySelector(`#${target.getAttribute("aria-controls")}`);
        const parentElement = target.closest(panel.getAttribute("data-parent"));
        const allowMultipleFlag = allowMultiple || parentElement.hasAttribute("data-accordion-allow-multiple") ? true : false;
        const isMobileNav = parentElement.classList.contains(classes.mobileNavAccordion);
        if (!allowMultipleFlag && panel.hasAttribute("data-parent")) {
            let childSelector = '';
            if (isMobileNav) {
                childSelector = ':scope > li > [aria-expanded="true"]';
            } else {
                childSelector = ':scope > [aria-expanded="true"]';
            }
            if (!childSelector) {
                return;
            }
            const activePanels = target.closest(panel.getAttribute("data-parent")).querySelectorAll(childSelector);
            if (!activePanels) {
                return;
            }
            activePanels.forEach(function(element) {
                publicAPIs.hide(element);
            });
        }
        target.setAttribute("aria-expanded", "true");
        target.parentNode.classList.add('accordion-expanded');
        panel.removeAttribute("hidden");
        panel.style.display = "block";
    };
    publicAPIs.toggle = function(target, allowMultiple) {
        if (target.getAttribute("aria-expanded") == "true") {
            publicAPIs.hide(target);
            return;
        } else {
            publicAPIs.show(target, allowMultiple);
        }
    };
    publicAPIs.init = function() {
        document.querySelectorAll(`[data-toggle="accordion"]:not(.${classes.open})`).forEach(function(element, index) {
            publicAPIs.hide(element);
        });
        document.addEventListener('keydown', function(event) {
            let target = event.target;
            const key = event.which.toString();
            const disablePageScroll = false;
            const pageScrollOptions = disablePageScroll ? {
                preventScroll: true
            } : {
                preventScroll: false
            };
            const isDropDownArrow = target.classList.contains('dropdown-arrow');
            if (target.classList.contains(stripClassPeriod(selectors.accordionHeader)) || target.classList.contains(stripClassPeriod(selectors.accordionLink)) || isDropDownArrow) {
                if (key.match(/38|40/)) {
                    const isMobile = target.closest(selectors.accordion).classList.contains(classes.mobileNavAccordion) ? true : false;
                    const accordionSelector = isMobile ? `:scope > li > ${selectors.accordionLink}` : `:scope > ${selectors.accordionHeader}`;
                    const accordions = target.closest(selectors.accordion).querySelectorAll(accordionSelector);
                    if (isMobile && isDropDownArrow) {
                        target.previousElementSibling.focus(pageScrollOptions);
                        return;
                    }
                    let indexPlace;
                    accordions.forEach(function(element, index) {
                        if (element == target) {
                            indexPlace = index;
                        }
                    });
                    const direction = key.match(/34|40/) ? 1 : -1;
                    const length = accordions.length;
                    const newIndex = (indexPlace + length + direction) % length;
                    accordions[newIndex].focus(pageScrollOptions);
                }
            }
        });
        document.addEventListener("click", function(event) {
            const target = event.target.matches('[data-toggle="accordion"]') ? event.target : event.target.closest('[data-toggle="accordion"]');
            if (!target) {
                return false;
            }
            event.preventDefault();
            publicAPIs.toggle(target);
        });
        document.addEventListener("click", function(event) {
            if (event.target.classList.contains('js-accordion-link')) {
                let url = event.target.getAttribute('href');
                if (url == '') {
                    event.preventDefault();
                    let target = event.target.parentNode.querySelector('[data-toggle="accordion"]');
                    publicAPIs.toggle(target);
                }
            }
        });
    };
    return publicAPIs;
})();
window.theme = window.theme || {};
window.themeInfo = {
    name: "Foodie"
};
theme.a11yHelpers = (function() {
    let alreadySetUpKeyEvents = false;

    function setUpAriaExpansion() {
        const ariaExpandEls = document.querySelectorAll('.js-aria-expand');
        ariaExpandEls.forEach(function(ariaExpandEl) {
            ariaExpandEl.addEventListener('mouseover', function(event) {
                ariaExpandEl.setAttribute('aria-expanded', 'true');
            });
            ariaExpandEl.addEventListener('mouseout', function(event) {
                ariaExpandEl.setAttribute('aria-expanded', 'false');
            });
        });
    }

    function focusOnElement(parent) {
        var focussableElements = 'a:not([disabled]), button:not([disabled]), input[type=text]:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"])';
        const elementToFocusOn = parent.querySelector(focussableElements);
        if (elementToFocusOn) {
            elementToFocusOn.focus();
        }
    }

    function findFocusableElement(parent, element, direction) {
        const focusableElementSelectors = 'a:not([disabled]), button:not([disabled]), input[type=text]:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"])';
        const focusableElements = parent.querySelectorAll(focusableElementSelectors);
        const numOfFocusableElements = focusableElements.length;
        var elementIndex = 0;
        for (let i = 0; i < focusableElements.length; i += 1) {
            let currentElement = focusableElements[i];
            if (currentElement === element) {
                elementIndex = i;
            }
        }
        if (direction === 'next') {
            if (elementIndex === (numOfFocusableElements - 1)) {
                return focusableElements[0];
            } else {
                return focusableElements[elementIndex + 1];
            }
        }
        if (direction === 'prev') {
            if (elementIndex === 0) {
                return focusableElements[numOfFocusableElements - 1];
            } else {
                return focusableElements[elementIndex - 1];
            }
        }
    }

    function findNextFocusableElement(parent, element) {
        return findFocusableElement(parent, element, 'next');
    }

    function findPreviousFocusableElement(parent, element) {
        return findFocusableElement(parent, element, 'prev');
    }

    function setUpAccessibleNavigationMenus() {
        function closeDropdownMenus() {
            const activeMenuItems = document.querySelectorAll('.navigation__menuitem--active');
            activeMenuItems.forEach(function(activeMenuItem) {
                activeMenuItem.classList.remove('navigation__menuitem--active');
                activeMenuItem.setAttribute('aria-expanded', 'false');
            });
        }

        function closeNestedDropdownMenus() {
            const nestedDropdowns = document.querySelectorAll(".js-menuitem-with-nested-dropdown");
            nestedDropdowns.forEach(function(nestedDropdown) {
                nestedDropdown.classList.remove("dropdown__menuitem--active");
                nestedDropdown.setAttribute('aria-expanded', 'false');
            });
        }

        function addEdgeToDropdown(dropdown) {
            setTimeout(function() {
                if (theme.DOMHelpers.isElementPastEdge(dropdown)) {
                    dropdown.classList.add("dropdown--edge");
                } else {
                    dropdown.classList.remove("dropdown--edge");
                }
            }, 0);
        }
        if (!alreadySetUpKeyEvents) {
            document.addEventListener('keyup', function(event) {
                if (event.key === 'Escape') {
                    const openNestedDropdownMenus = document.querySelectorAll(".dropdown__menuitem--active"),
                        openDropdownMenus = document.querySelectorAll(".navigation__menuitem--active");
                    event.preventDefault();
                    if (openNestedDropdownMenus.length >= 1) {
                        closeNestedDropdownMenus();
                        return;
                    }
                    if (openDropdownMenus.length >= 1) {
                        closeDropdownMenus();
                        return;
                    }
                }
            });
        }
        if (!alreadySetUpKeyEvents) {
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    if (document.activeElement.classList.contains("js-open-dropdown-on-key") || document.activeElement.parentNode.classList.contains("js-menuitem-with-nested-dropdown")) {
                        event.stopPropagation();
                        event.preventDefault();
                    }
                    if (document.activeElement.parentNode.classList.contains("navigation__menuitem--active")) {
                        closeDropdownMenus();
                        return;
                    }
                    if (document.activeElement.parentNode.classList.contains("dropdown__menuitem--active")) {
                        closeNestedDropdownMenus();
                        return;
                    }
                    if (document.activeElement.parentNode.classList.contains("js-first-level")) {
                        closeDropdownMenus();
                    }
                    if (document.activeElement.classList.contains("js-open-dropdown-on-key")) {
                        document.activeElement.parentNode.classList.add("navigation__menuitem--active");
                        return;
                    }
                    if (document.activeElement.parentNode.classList.contains("js-menuitem-with-nested-dropdown")) {
                        document.activeElement.parentNode.classList.add("dropdown__menuitem--active");
                        addEdgeToDropdown(document.activeElement.parentNode);
                        return;
                    }
                }
            });
        }
        alreadySetUpKeyEvents = true;
    }
    return {
        setUpAriaExpansion: setUpAriaExpansion,
        setUpAccessibleNavigationMenus: setUpAccessibleNavigationMenus,
        focusOnElement: focusOnElement
    }
}());
theme.DOMHelpers = (function() {
    function isElementPastEdge(element) {
        const bounding = element.getBoundingClientRect(),
            l = bounding.left,
            w = bounding.width,
            docH = document.documentElement.clientHeight,
            docW = document.documentElement.clientWidth;
        return (l + w >= docW);
    }
    return {
        isElementPastEdge: isElementPastEdge
    };
}());
theme.Helpers = (function() {
    var touchDevice = false;

    function setTouch() {
        touchDevice = true;
    }

    function isTouch() {
        return touchDevice;
    }

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this,
                args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    function makeSticky(amountToScroll, elementClass, elementHeight) {
        const clearElement = document.querySelector(".js-clear-element"),
            stickyElement = document.querySelector(elementClass),
            height = elementHeight + "px";
        if (window.pageYOffset > amountToScroll) {
            stickyElement.classList.add('sticky--active');
            clearElement.style.height = height;
        } else {
            stickyElement.classList.remove('sticky--active');
            clearElement.style.height = "0px";
        }
    }

    function animateCSS(element, animation, prefix = 'animate__') {
        return new Promise(function(resolve, reject) {
            const animationName = `${prefix}${animation}`;
            const node = element;
            node.classList.add(`${prefix}animated`, animationName);

            function handleAnimationEnd() {
                node.classList.remove(`${prefix}animated`, animationName);
                resolve('Animation ended');
            }
            node.addEventListener('animationend', handleAnimationEnd, {
                once: true
            });
        });
    }

    function showHide(show, hide) {
        var show = document.getElementById(show);
        show.classList.remove("hide");
        show.classList.add("show");
        show.style.display = 'block';
        var hide = document.getElementById(hide);
        hide.classList.remove("show");
        hide.classList.add("hide");
        hide.style.display = 'none';
    }

    function Toggle(id) {
        var element = document.getElementById(id);
        if (element.classList.contains('animate-hide')) {
            element.classList.remove("animate-hide", "fadeOut");
            element.classList.add("animate-show", "fadeIn");
            element.style.visibility = "visible";
        } else {
            element.classList.remove("animate-show", "fadeIn");
            element.classList.add("animate-hide", "fadeOut");
            element.style.visibility = "hidden";
        }
    }

    function toggleClass(id, className) {
        var element = document.getElementById(id);
        if (!element) return false;
        if (element.classList.contains(className)) {
            element.classList.remove(className);
        } else {
            element.classList.add(className);
        }
    }

    function Accordion(container, tlink, submenu) {
        let accorContent = container.querySelector(submenu);
        if (!container.querySelector(tlink)) return false;
        container.querySelector(tlink).addEventListener('click', function(event) {
            event.preventDefault();
            if (this.classList.contains('closed')) {
                this.classList.remove('closed');
                this.parentElement.classList.remove('closed');
                this.setAttribute('aria-expanded', 'true');
            } else {
                this.classList.add('closed');
                this.parentElement.classList.add('closed');
                this.setAttribute('aria-expanded', 'false');
            }
            if (accorContent.classList.contains('closed')) {
                accorContent.classList.remove("closed");
                accorContent.style.display = "block";
            } else {
                accorContent.classList.add("closed");
                accorContent.style.display = "none";
            }
        });
    }

    function fadeOut(el) {
        el.style.opacity = 1;
        (function fade() {
            if ((el.style.opacity -= 0.1) < 0) {
                el.style.display = "none";
            } else {
                requestAnimationFrame(fade);
            }
        })();
    }

    function fadeIn(el, display) {
        el.style.opacity = 0;
        el.style.display = display || "block";
        (function fade() {
            var val = parseFloat(el.style.opacity);
            if (!((val += 0.1) > 1)) {
                el.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    }

    function getScrollbarWidth() {
        const outer = document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.overflow = 'scroll';
        outer.style.msOverflowStyle = 'scrollbar';
        document.body.appendChild(outer);
        const inner = document.createElement('div');
        outer.appendChild(inner);
        const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
        outer.parentNode.removeChild(outer);
        return scrollbarWidth;
    }

    function smoothScrollTo(endX, endY, duration) {
        let startX = window.scrollX || window.pageXOffset,
            startY = window.scrollY || window.pageYOffset,
            distanceX = endX - startX,
            distanceY = endY - startY,
            startTime = new Date().getTime();
        let easeInOutQuart = function(time, from, distance, duration) {
            if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
            return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
        };
        let timer = window.setInterval(function() {
            let time = new Date().getTime() - startTime,
                newX = easeInOutQuart(time, startX, distanceX, duration),
                newY = easeInOutQuart(time, startY, distanceY, duration);
            if (time >= duration) {
                window.clearInterval(timer);
            }
            window.scrollTo(newX, newY);
        }, 1000 / 60);
    }

    function wrapIframe(options) {
        options.iframes.forEach(function(iframe) {
            var wrapper = document.createElement('div');
            wrapper.classList.add(options.iframeWrapperClass);
            iframe.parentNode.insertBefore(wrapper, iframe);
            wrapper.appendChild(iframe);
            iframe.src = iframe.src;
        });
    }

    function wrapTable(options) {
        options.tables.forEach(function(table) {
            var wrapper = document.createElement('div');
            wrapper.classList.add(options.tableWrapperClass);
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        });
    }
    return {
        setTouch: setTouch,
        isTouch: isTouch,
        debounce: debounce,
        makeSticky: makeSticky,
        animateCSS: animateCSS,
        showHide: showHide,
        Toggle: Toggle,
        toggleClass: toggleClass,
        Accordion: Accordion,
        fadeOut: fadeOut,
        fadeIn: fadeIn,
        getScrollbarWidth: getScrollbarWidth,
        smoothScrollTo: smoothScrollTo,
        wrapIframe: wrapIframe,
        wrapTable: wrapTable
    };
})();
theme.LibraryLoader = (function() {
    var types = {
        link: 'link',
        script: 'script'
    };
    var status = {
        requested: 'requested',
        loaded: 'loaded'
    };
    var cloudCdn = 'https://cdn.shopify.com/shopifycloud/';
    var libraries = {
        youtubeSdk: {
            tagId: 'youtube-sdk',
            src: 'https://www.youtube.com/iframe_api',
            type: types.script
        },
        plyrShopifyStyles: {
            tagId: 'plyr-shopify-styles',
            src: cloudCdn + 'shopify-plyr/v1.0/shopify-plyr.css',
            type: types.link
        },
        modelViewerUiStyles: {
            tagId: 'shopify-model-viewer-ui-styles',
            src: cloudCdn + 'model-viewer-ui/assets/v1.0/model-viewer-ui.css',
            type: types.link
        }
    };

    function load(libraryName, callback) {
        var library = libraries[libraryName];
        if (!library) return;
        if (library.status === status.requested) return;
        callback = callback || function() {};
        if (library.status === status.loaded) {
            callback();
            return;
        }
        library.status = status.requested;
        var tag;
        switch (library.type) {
            case types.script:
                tag = createScriptTag(library, callback);
                break;
            case types.link:
                tag = createLinkTag(library, callback);
                break;
        }
        tag.id = library.tagId;
        library.element = tag;
        var firstScriptTag = document.getElementsByTagName(library.type)[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    function createScriptTag(library, callback) {
        var tag = document.createElement('script');
        tag.src = library.src;
        tag.addEventListener('load', function() {
            library.status = status.loaded;
            callback();
        });
        return tag;
    }

    function createLinkTag(library, callback) {
        var tag = document.createElement('link');
        tag.href = library.src;
        tag.rel = 'stylesheet';
        tag.type = 'text/css';
        tag.addEventListener('load', function() {
            library.status = status.loaded;
            callback();
        });
        return tag;
    }
    return {
        load: load
    };
})();
theme.Sections = function Sections() {
    this.constructors = {};
    this.instances = [];
    document.addEventListener('shopify:section:load', this._onSectionLoad.bind(this));
    document.addEventListener('shopify:section:unload', this._onSectionUnload.bind(this));
    document.addEventListener('shopify:section:select', this._onSelect.bind(this));
    document.addEventListener('shopify:section:deselect', this._onDeselect.bind(this));
    document.addEventListener('shopify:block:select', this._onBlockSelect.bind(this));
    document.addEventListener('shopify:block:deselect', this._onBlockDeselect.bind(this));
};
theme.Sections.prototype = Object.assign({}, theme.Sections.prototype, {
    _createInstance: function(container, constructor) {
        var id = container.getAttribute('data-section-id');
        var type = container.getAttribute('data-section-type');
        constructor = constructor || this.constructors[type];
        if (typeof constructor === 'undefined') {
            return;
        }
        var instance = Object.assign(new constructor(container), {
            id: id,
            type: type,
            container: container
        });
        this.instances.push(instance);
    },
    _onSectionLoad: function(evt) {
        var container = document.querySelector('[data-section-id="' + evt.detail.sectionId + '"]');
        if (container) {
            this._createInstance(container);
        }
        if (AOS) {
            AOS.refreshHard();
        }
    },
    _onSectionUnload: function(evt) {
        this.instances = this.instances.filter(function(instance) {
            var isEventInstance = instance.id === evt.detail.sectionId;
            if (isEventInstance) {
                if (typeof instance.onUnload === 'function') {
                    instance.onUnload(evt);
                }
            }
            if (AOS) {
                AOS.refreshHard();
            }
            return !isEventInstance;
        });
    },
    _onSelect: function(evt) {
        var instance = this.instances.find(function(instance) {
            return instance.id === evt.detail.sectionId;
        });
        if (typeof instance !== 'undefined' && typeof instance.onSelect === 'function') {
            instance.onSelect(evt);
        }
    },
    _onDeselect: function(evt) {
        var instance = this.instances.find(function(instance) {
            return instance.id === evt.detail.sectionId;
        });
        if (typeof instance !== 'undefined' && typeof instance.onDeselect === 'function') {
            instance.onDeselect(evt);
        }
    },
    _onBlockSelect: function(evt) {
        var instance = this.instances.find(function(instance) {
            return instance.id === evt.detail.sectionId;
        });
        if (typeof instance !== 'undefined' && typeof instance.onBlockSelect === 'function') {
            instance.onBlockSelect(evt);
        }
        if (AOS) {
            AOS.refreshHard();
        }
    },
    _onBlockDeselect: function(evt) {
        var instance = this.instances.find(function(instance) {
            return instance.id === evt.detail.sectionId;
        });
        if (typeof instance !== 'undefined' && typeof instance.onBlockDeselect === 'function') {
            instance.onBlockDeselect(evt);
        }
    },
    register: function(type, constructor) {
        this.constructors[type] = constructor;
        document.querySelectorAll('[data-section-type="' + type + '"]').forEach(function(container) {
            this._createInstance(container, constructor);
        }.bind(this));
    }
});
theme.Disclosure = (function() {
    var selectors = {
        disclosureForm: '[data-disclosure-form]',
        disclosureList: '[data-disclosure-list]',
        disclosureToggle: '[data-disclosure-toggle]',
        disclosureInput: '[data-disclosure-input]',
        disclosureOptions: '[data-disclosure-option]'
    };
    var classes = {
        listVisible: 'disclosure-list--visible'
    };

    function Disclosure(disclosure) {
        this.container = disclosure;
        this._cacheSelectors();
        this._setupListeners();
    }
    Disclosure.prototype = Object.assign({}, Disclosure.prototype, {
        _cacheSelectors: function() {
            this.cache = {
                disclosureForm: this.container.closest(selectors.disclosureForm),
                disclosureList: this.container.querySelector(selectors.disclosureList),
                disclosureToggle: this.container.querySelector(selectors.disclosureToggle),
                disclosureInput: this.container.querySelector(selectors.disclosureInput),
                disclosureOptions: this.container.querySelectorAll(selectors.disclosureOptions)
            };
        },
        _setupListeners: function() {
            this.eventHandlers = this._setupEventHandlers();
            this.cache.disclosureToggle.addEventListener('click', this.eventHandlers.toggleList);
            this.cache.disclosureOptions.forEach(function(disclosureOption) {
                disclosureOption.addEventListener('click', this.eventHandlers.connectOptions);
            }, this);
            this.container.addEventListener('keyup', this.eventHandlers.onDisclosureKeyUp);
            this.cache.disclosureList.addEventListener('focusout', this.eventHandlers.onDisclosureListFocusOut);
            this.cache.disclosureToggle.addEventListener('focusout', this.eventHandlers.onDisclosureToggleFocusOut);
            document.body.addEventListener('click', this.eventHandlers.onBodyClick);
        },
        _setupEventHandlers: function() {
            return {
                connectOptions: this._connectOptions.bind(this),
                toggleList: this._toggleList.bind(this),
                onBodyClick: this._onBodyClick.bind(this),
                onDisclosureKeyUp: this._onDisclosureKeyUp.bind(this),
                onDisclosureListFocusOut: this._onDisclosureListFocusOut.bind(this),
                onDisclosureToggleFocusOut: this._onDisclosureToggleFocusOut.bind(this)
            };
        },
        _connectOptions: function(event) {
            event.preventDefault();
            this._submitForm(event.currentTarget.dataset.value);
        },
        _onDisclosureToggleFocusOut: function(event) {
            var disclosureLostFocus = this.container.contains(event.relatedTarget) === false;
            if (disclosureLostFocus) {
                this._hideList();
            }
        },
        _onDisclosureListFocusOut: function(event) {
            var childInFocus = event.currentTarget.contains(event.relatedTarget);
            var isVisible = this.cache.disclosureList.classList.contains(classes.listVisible);
            if (isVisible && !childInFocus) {
                this._hideList();
            }
        },
        _onDisclosureKeyUp: function(event) {
            if (event.which !== 27) return;
            this._hideList();
            this.cache.disclosureToggle.focus();
        },
        _onBodyClick: function(event) {
            var isOption = this.container.contains(event.target);
            var isVisible = this.cache.disclosureList.classList.contains(classes.listVisible);
            if (isVisible && !isOption) {
                this._hideList();
            }
        },
        _submitForm: function(value) {
            this.cache.disclosureInput.value = value;
            this.cache.disclosureForm.submit();
        },
        _hideList: function() {
            this.cache.disclosureList.classList.remove(classes.listVisible);
            this.cache.disclosureToggle.setAttribute('aria-expanded', false);
        },
        _toggleList: function() {
            var ariaExpanded = this.cache.disclosureToggle.getAttribute('aria-expanded') === 'true';
            this.cache.disclosureList.classList.toggle(classes.listVisible);
            this.cache.disclosureToggle.setAttribute('aria-expanded', !ariaExpanded);
        },
        destroy: function() {
            this.cache.disclosureToggle.removeEventListener('click', this.eventHandlers.toggleList);
            this.cache.disclosureOptions.forEach(function(disclosureOption) {
                disclosureOption.removeEventListener('click', this.eventHandlers.connectOptions);
            }, this);
            this.container.removeEventListener('keyup', this.eventHandlers.onDisclosureKeyUp);
            this.cache.disclosureList.removeEventListener('focusout', this.eventHandlers.onDisclosureListFocusOut);
            this.cache.disclosureToggle.removeEventListener('focusout', this.eventHandlers.onDisclosureToggleFocusOut);
            document.body.removeEventListener('click', this.eventHandlers.onBodyClick);
        }
    });
    return Disclosure;
})();
Shopify.theme.cart = (function(exports) {
    'use strict';

    function getDefaultRequestConfig() {
        return JSON.parse(JSON.stringify({
            credentials: 'same-origin',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json;'
            }
        }));
    }

    function fetchJSON(url, config) {
        return fetch(url, config).then(function(response) {
            if (!response.ok) {
                throw response;
            }
            return response.json();
        });
    }

    function cart() {
        return fetchJSON('/cart.js', getDefaultRequestConfig());
    }

    function cartAdd(id, quantity, properties) {
        var config = getDefaultRequestConfig();
        config.method = 'POST';
        config.body = JSON.stringify({
            id: id,
            quantity: quantity,
            properties: properties
        });
        return fetchJSON('/cart/add.js', config);
    }

    function cartAddFromForm(formData) {
        var config = getDefaultRequestConfig();
        delete config.headers['Content-Type'];
        config.method = 'POST';
        config.body = formData;
        return fetchJSON('/cart/add.js', config);
    }

    function cartChange(line, options) {
        var config = getDefaultRequestConfig();
        options = options || {};
        config.method = 'POST';
        config.body = JSON.stringify({
            line: line,
            quantity: options.quantity,
            properties: options.properties
        });
        return fetchJSON('/cart/change.js', config);
    }

    function cartClear() {
        var config = getDefaultRequestConfig();
        config.method = 'POST';
        return fetchJSON('/cart/clear.js', config);
    }

    function cartUpdate(body) {
        var config = getDefaultRequestConfig();
        config.method = 'POST';
        config.body = JSON.stringify(body);
        return fetchJSON('/cart/update.js', config);
    }

    function cartShippingRates() {
        return fetchJSON('/cart/shipping_rates.json', getDefaultRequestConfig());
    }

    function key(key) {
        if (typeof key !== 'string' || key.split(':').length !== 2) {
            throw new TypeError('Theme Cart: Provided key value is not a string with the format xxx:xxx');
        }
    }

    function quantity(quantity) {
        if (typeof quantity !== 'number' || isNaN(quantity)) {
            throw new TypeError('Theme Cart: An object which specifies a quantity or properties value is required');
        }
    }

    function id(id) {
        if (typeof id !== 'number' || isNaN(id)) {
            throw new TypeError('Theme Cart: Variant ID must be a number');
        }
    }

    function properties(properties) {
        if (typeof properties !== 'object') {
            throw new TypeError('Theme Cart: Properties must be an object');
        }
    }

    function form(form) {
        if (!(form instanceof HTMLFormElement)) {
            throw new TypeError('Theme Cart: Form must be an instance of HTMLFormElement');
        }
    }

    function options(options) {
        if (typeof options !== 'object') {
            throw new TypeError('Theme Cart: Options must be an object');
        }
        if (typeof options.quantity === 'undefined' && typeof options.properties === 'undefined') {
            throw new Error('Theme Cart: You muse define a value for quantity or properties');
        }
        if (typeof options.quantity !== 'undefined') {
            quantity(options.quantity);
        }
        if (typeof options.properties !== 'undefined') {
            properties(options.properties);
        }
    }

    function getState() {
        return cart().then(function(cart) {
            Events.trigger("cart:ready", cart)
        });
    }

    function getCart() {
        return cart().then(function(cart) {
            return cart;
        });
    }

    function getItemIndex(key$$1) {
        key(key$$1);
        return cart().then(function(state) {
            var index = -1;
            state.items.forEach(function(item, i) {
                index = item.key === key$$1 ? i + 1 : index;
            });
            if (index === -1) {
                return Promise.reject(new Error('Theme Cart: Unable to match line item with provided key'));
            }
            return index;
        });
    }

    function getItem(key$$1) {
        key(key$$1);
        return cart().then(function(state) {
            var lineItem = null;
            state.items.forEach(function(item) {
                lineItem = item.key === key$$1 ? item : lineItem;
            });
            if (lineItem === null) {
                return Promise.reject(new Error('Theme Cart: Unable to match line item with provided key'));
            }
            return lineItem;
        });
    }

    function addItem(id$$1, options$$1) {
        options$$1 = options$$1 || {};
        id(id$$1);
        return cartAdd(id$$1, options$$1.quantity, options$$1.properties);
    }

    function addItemFromForm(form$$1) {
        form(form$$1);
        var formData = new FormData(form$$1);
        id(parseInt(formData.get('id'), 10));
        return cartAddFromForm(formData);
    }

    function updateItem(key$$1, options$$1) {
        key(key$$1);
        options(options$$1);
        return getItemIndex(key$$1).then(function(line) {
            return cartChange(line, options$$1);
        });
    }

    function removeItem(key$$1) {
        key(key$$1);
        return getItemIndex(key$$1).then(function(line) {
            return cartChange(line, {
                quantity: 0
            });
        });
    }

    function clearItems() {
        return cartClear().then(function() {
            Events.trigger("cart:clear");
        });
    }

    function getAttributes() {
        return cart().then(function(state) {
            return state.attributes;
        });
    }

    function updateAttributes(attributes) {
        return cartUpdate({
            attributes: attributes
        });
    }

    function clearAttributes() {
        return getAttributes().then(function(attributes) {
            for (var key$$1 in attributes) {
                attributes[key$$1] = '';
            }
            return updateAttributes(attributes);
        });
    }

    function getNote() {
        return cart().then(function(state) {
            return state.note;
        });
    }

    function updateNote(note) {
        return cartUpdate({
            note: note
        });
    }

    function clearNote() {
        return cartUpdate({
            note: ''
        });
    }

    function getShippingRates() {
        return cartShippingRates();
    }
    exports.getState = getState;
    exports.getCart = getCart;
    exports.getItemIndex = getItemIndex;
    exports.getItem = getItem;
    exports.addItem = addItem;
    exports.addItemFromForm = addItemFromForm;
    exports.updateItem = updateItem;
    exports.removeItem = removeItem;
    exports.clearItems = clearItems;
    exports.getAttributes = getAttributes;
    exports.updateAttributes = updateAttributes;
    exports.clearAttributes = clearAttributes;
    exports.getNote = getNote;
    exports.updateNote = updateNote;
    exports.clearNote = clearNote;
    exports.getShippingRates = getShippingRates;
    return exports;
}({}));
Shopify.theme.ajaxCart = {
    init: function init() {
        let config = document.getElementById('cart-config');
        if (!config) return false;
        config = JSON.parse(config.innerHTML || '{}');
        var selectors = {
            cartTrigger: '.js-mini-cart-trigger',
            cartPageLoader: '.ajax-cart__page-wrapper .js-mini-cart-loader',
            addToCart: '.js-ajax-submit'
        };
        this.initializeAjaxCart(config);
        if (config.cart_action == 'no_js_cart') {
            if (document.querySelector('.js-ajax-cart-content')) {
                document.querySelector('.js-ajax-cart-content').remove();
            }
        } else {
            if (document.querySelector('.js-ajax-cart-content-nojs')) {
                document.querySelector('.js-ajax-cart-content-nojs').remove();
            }
        }
        if (config.cart_action == 'drawer') {
            WAU.Slideout.init("ajax-cart");
        } else if (config.cart_action == 'modal_cart') {
            WAU.Modal.init("ajax-cart");
        }
        document.querySelectorAll(selectors.addToCart).forEach((element, i) => {
            element.addEventListener('click', function(e) {
                e.preventDefault();

                var addToCartForm = this.closest('form');
                Shopify.theme.ajaxCart.addToCart(addToCartForm, element.parentNode, config, false);
                return false;
            });
        });
        if (document.querySelector('body').classList.contains('template-cart')) {
            Shopify.theme.cart.getCart().then(Cart => {
                Shopify.theme.ajaxCart.updateView(config, Cart);
                setTimeout(function() {
                    document.querySelector('body').classList.add('cart-loaded');
                }, 800);
            });
        }
        let cartTriggers = document.querySelectorAll(selectors.cartTrigger);
        cartTriggers.forEach((item, i) => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                Shopify.theme.cart.getCart().then(Cart => {
                    Shopify.theme.ajaxCart.updateView(config, Cart);
                    if (config.cart_action == 'drawer') {
                        Shopify.theme.ajaxCart.showDrawer(config);
                    } else if (config.cart_action == 'modal_cart') {
                        Shopify.theme.ajaxCart.showModal(config);
                    } else {
                        window.location.href = config.cart_url;
                    }
                });
                return false;
            });
        });
    },
    cartEvents: function cartEvents(config) {
        var selectors = {
            cartDrawerRemove: '.js-cart-remove',
            cartDrawerQty: '[data-item-qty]',
            cartDrawerQtyDecrease: '[data-ajax-qty-decrease]',
            cartDrawerQtyIncrease: '[data-ajax-qty-increase]',
            cartNote: '.js-cart-note'
        };
        document.querySelectorAll(selectors.cartDrawerQty).forEach((element, i) => {
            element.addEventListener('change', function(e) {
                e.preventDefault();
                var quantity = parseInt(this.value),
                    itemKey = this.dataset.itemKey,
                    itemMax = this.dataset.limit,
                    lineElement = element.closest('.ajax-cart__cart-item');
                element.value = quantity;
                setTimeout(function() {
                    if (quantity === 0) {
                        Shopify.theme.ajaxCart.removeFromCart(itemKey, config);
                    } else {
                        Shopify.theme.ajaxCart.checkLimit(itemMax, quantity, lineElement, config);
                        Shopify.theme.cart.updateItem(itemKey, {
                            quantity
                        }).then(state => {
                            Shopify.theme.ajaxCart.updateView(config, state);
                        });
                    }
                }, 250);
                return false;
            });
        });
        document.querySelectorAll(selectors.cartDrawerRemove).forEach((element, i) => {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                var itemKey = this.dataset.itemKey;
                Shopify.theme.ajaxCart.removeFromCart(itemKey, config);
                return false;
            });
        });
        document.querySelectorAll(selectors.cartDrawerQtyDecrease).forEach((element, i) => {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                if (this.nextElementSibling.value === '1') {
                    var itemKey = this.dataset.itemKey;
                    Shopify.theme.ajaxCart.removeFromCart(itemKey, config);
                } else {
                    var itemId = this.dataset.ajaxQtyDecrease;
                    Shopify.theme.ajaxCart.adjustQty(-1, itemId, config);
                }
                return false;
            });
        });
        document.querySelectorAll(selectors.cartDrawerQtyIncrease).forEach((element, i) => {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                var itemId = this.dataset.ajaxQtyIncrease;
                Shopify.theme.ajaxCart.adjustQty(+1, itemId, config);
                return false;
            });
        });
        document.querySelectorAll(selectors.cartNote).forEach((element, i) => {
            element.addEventListener('blur', (event) => {
                let note = element.value;
                Shopify.theme.cart.updateNote(note).then(state => {
                    Shopify.theme.ajaxCart.updateView(config, state);
                });
            });
        });
        if (config.show_calculator && document.querySelector('body').classList.contains('template-cart')) {
            setTimeout(function() {
                Shopify.theme.shippingCalculator.init();
            }, 1000);
        }
        if (Shopify && Shopify.StorefrontExpressButtons) {
            Shopify.StorefrontExpressButtons.initialize();
        }
    },
    showDrawer: function showDrawer(config) {
        if (config.cart_action != 'drawer') return false;
        WAU.Slideout._openByName("ajax-cart");
    },
    hideDrawer: function hideDrawer(config) {
        if (config.cart_action != 'drawer') return false;
        WAU.Slideout._closeByName("ajax-cart");
    },
    showModal: function showModal(config) {
        if (config.cart_action != 'modal_cart') return false;
        WAU.Modal._openByName("ajax-cart");
    },
    hideModal: function hideModal(config) {
        if (config.cart_action != 'modal_cart') return false;
        WAU.Modal._closeByName("ajax-cart");
    },
    removeFromCart: function removeFromCart(itemKey, config, callback) {
        Shopify.theme.cart.removeItem(itemKey).then(state => {
            Shopify.theme.ajaxCart.updateView(config, state);
        });
    },
    adjustQty: function adjustQty(value, itemId, config) {
        var selectors = {
            lineItem: '.item_' + itemId,
            updatesItem: '.updates_' + itemId
        };
        document.querySelectorAll(selectors.lineItem).forEach((element, i) => {
            elementInput = element.querySelector(selectors.updatesItem), key = elementInput.dataset.itemKey, max = elementInput.dataset.limit, quantity = parseInt(elementInput.value) + parseInt(value);
            if (Shopify.theme.ajaxCart.checkLimit(max, quantity, element, config)) return false;
            if (quantity === 0) return false;
            elementInput.value = quantity;
            setTimeout(function() {
                Shopify.theme.cart.updateItem(key, {
                    quantity
                }).then(state => {
                    Shopify.theme.ajaxCart.updateView(config, state);
                });
            }, 250);
        });
    },
    checkLimit: function checkLimit(max, quantity, element, config) {
        if (max != '' && quantity > max) {
            let cartNote = document.createElement("div");
            cartNote.classList.add('mini-cart__cart-note');
            cartNote.innerHTML = '<p class="a-center"><b>' + config.cart_error + '</b>&nbsp;&nbsp;' + config.update_qty_error + '</p>';
            let adjacentElement = element.querySelector('.js-item-quantity');
            let parentElement = adjacentElement.parentNode;
            parentElement.appendChild(cartNote, adjacentElement);
            setTimeout(function() {
                theme.Helpers.fadeOut(cartNote);
                parentElement.removeChild(cartNote);
            }, 7000);
            return false;
        }
    },
    addToCart: function addToCart(addToCartForm, formContext, config, isQuickview) {
        var selectors = {
            addToCart: '.js-ajax-submit',
            addToCartText: '[data-add-to-cart-text]',
            cartAddedMsg: '.js-added-msg'
        }
        let context;
        if (isQuickview) {
            context = document.querySelector('.js-quickview-content');
        } else {
            context = formContext;
        }
        context.querySelector(selectors.addToCartText).innerHTML = config.adding_to_cart;
        context.querySelector(selectors.addToCart).classList.add('disabled');
        context.querySelector(selectors.addToCart).getAttribute('disabled', 'disabled');
        Shopify.theme.cart.addItemFromForm(addToCartForm).then(item => {
            context.querySelector(selectors.addToCartText).innerHTML = config.added_to_cart;
            context.querySelector(selectors.addToCart).classList.remove('disabled');
            context.querySelector(selectors.addToCart).removeAttribute('disabled', 'disabled');
            setTimeout(function() {
                context.querySelector(selectors.addToCartText).innerHTML = config.add_to_cart;
            }, 3000);
            Shopify.theme.cart.getCart().then(Cart => {
                if (isQuickview && config.cart_added_event != 'product_page') {
                    Shopify.theme.quickview.hideModal();
                } else if (isQuickview && config.cart_added_event == 'product_page') {
                    theme.Helpers.fadeIn(context.querySelector(selectors.cartAddedMsg));
                    setTimeout(function() {
                        theme.Helpers.fadeOut(context.querySelector(selectors.cartAddedMsg));
                    }, 3000);
                }
                if (config.cart_action == 'drawer') {
                    Shopify.theme.ajaxCart.showDrawer(config);
                } else if (config.cart_action == 'modal_cart') {
                    Shopify.theme.ajaxCart.showModal(config);
                } else if (config.cart_action == 'page_only') {
                    window.location.href = config.cart_url;
                } else if (config.cart_added_event == 'product_page') {
                    theme.Helpers.fadeIn(context.querySelector(selectors.cartAddedMsg));
                    setTimeout(function() {
                        theme.Helpers.fadeOut(context.querySelector(selectors.cartAddedMsg));
                    }, 3000);
                } else {
                    window.location.href = config.cart_url;
                }
                Shopify.theme.ajaxCart.updateView(config, Cart);
            });
        }).catch(error => {
            if (error.status == 422) {
                theme.Helpers.fadeIn(context.querySelector('.js-error-msg'));
                context.querySelector(selectors.addToCartText).innerHTML = config.add_to_cart;
                context.querySelector(selectors.addToCart).classList.remove('disabled');
                context.querySelector(selectors.addToCart).removeAttribute('disabled', 'disabled');
                setTimeout(function() {
                    theme.Helpers.fadeOut(context.querySelector('.js-error-msg'));
                }, 8000);
            } else {
                console.log(error)
            }
        });
    },
    getAjaxCart: function getAjaxCart(response) {
        const el = document.createElement('div');
        el.innerHTML = response;
        const responseOptions = JSON.parse(el.querySelector('[data-options]').innerHTML);
        const htmls = el.querySelectorAll('[data-html]');
        let html = {};
        if (htmls.length === 1 && htmls[0].getAttribute('data-html') === '') {
            html = htmls[0].innerHTML;
        } else {
            for (let i = 0; i < htmls.length; i++) {
                html[htmls[i].getAttribute('data-html')] = htmls[i].innerHTML;
            }
        }
        let options = responseOptions;
        return html;
    },
    initializeAjaxCart: function initializeAjaxCart(config) {
        let data, url;
        url = config.cart_url + '/?view=ajax';
        fetch(url, data).then(res => res.text()).then(response => {
            let html = Shopify.theme.ajaxCart.getAjaxCart(response);
            document.querySelectorAll('.js-ajax-cart-content').forEach((item, i) => {
                item.innerHTML = html.content;
            });
        }).then(response => {
            if (config.show_calculator && document.querySelector('body').classList.contains('template-cart')) {
                setTimeout(function() {
                    Shopify.theme.shippingCalculator.init();
                }, 1000);
            }
        }).catch(error => {
            console.log(error)
        });
    },
    updateView: function updateView(config, Cart) {
        let data, url;
        url = config.cart_url + '/?view=ajax';
        fetch(url, data).then(res => res.text()).then(response => {
            let html = Shopify.theme.ajaxCart.getAjaxCart(response);
            var selectors = {
                cartContent: '.js-ajax-cart-content',
                cartEmpty: '.js-cart-empty',
                cartForm: '.js-cart-form',
                cartAccordion: '.js-cart-accordion',
                cartCount: '.js-cart-count'
            };
            if (Cart.item_count === 0) {
                document.querySelectorAll(selectors.cartForm).forEach((item, i) => {
                    item.classList.add('hide');
                });
                document.querySelectorAll(selectors.cartEmpty).forEach((item, i) => {
                    item.classList.remove('hide');
                });
                document.querySelectorAll(selectors.cartCount).forEach((item, i) => {
                    item.innerHTML = '0';
                });
            } else {
                document.querySelectorAll(selectors.cartEmpty).forEach((item, i) => {
                    item.classList.add('hide');
                });
                document.querySelectorAll(selectors.cartCount).forEach((item, i) => {
                    item.innerHTML = Cart.item_count;
                });
                document.querySelectorAll(selectors.cartContent).forEach((item, i) => {
                    item.innerHTML = html.content;
                });
                document.querySelectorAll(selectors.cartAccordion).forEach((item, i) => {
                    theme.Helpers.Accordion(item, '.tlink.has_sub_menu a', '.accordion-content.sub');
                    theme.Helpers.Accordion(item, '.tlink2.has_sub_menu a', '.accordion-content2.sub');
                });
                Shopify.theme.ajaxCart.cartEvents(config);
            }
            setTimeout(function() {
                document.querySelector('body').classList.add('cart-loaded');
            }, 500);
        }).catch(error => {
            console.log(error)
        });
    }
}
Shopify.theme.shippingCalculator = {
    init: function init() {
        var config = document.getElementById('cart-config');
        if (!config) return false;
        var config = JSON.parse(config.innerHTML || '{}');
        var selectors = {
            container: '.js-shipping-calc-wrapper',
            submitButton: '.js-shipping-calc-submit',
            addressZip: '.js-shipping-calc-address-zip',
            addressCountry: '.js-shipping-calc-address-country',
            addressProvince: '.js-shipping-calc-address-province',
            addressProvinceLabel: '.js-shipping-calc-address-province-label',
            response: '.js-shipping-calc-response'
        }
        let calculators = document.querySelectorAll(selectors.container);
        calculators.forEach((element, i) => {
            element.classList.add("shipping-calculator-" + i)
        });
        let container = document.querySelector('.shipping-calculator-0');
        new Shopify.CountryProvinceSelector('address_country', 'address_province', {
            hideElement: 'address_province_container'
        });
        var countriesSelect = container.querySelector(selectors.addressCountry);
        var addressProvinceLabelEl = container.querySelector(selectors.addressProvinceLabel);
        if (typeof Countries !== 'undefined') {
            Countries.updateProvinceLabel(countriesSelect.value, addressProvinceLabelEl);
            countriesSelect.addEventListener('change', function() {
                Countries.updateProvinceLabel(countriesSelect.value, addressProvinceLabelEl);
            });
        }
        let button = container.querySelector(selectors.submitButton);
        button.addEventListener('click', function(e) {
            e.preventDefault();
            Shopify.theme.shippingCalculator.disableButtons(config, container);
            container.querySelector(selectors.response).style.display = 'none';
            let shippingAddress = {};
            shippingAddress.zip = container.querySelector(selectors.addressZip).value || '';
            shippingAddress.country = container.querySelector(selectors.addressCountry).value || '';
            shippingAddress.province = container.querySelector(selectors.addressProvince).value || '';
            Shopify.theme.shippingCalculator.getRates(config, shippingAddress, container);
        });
    },
    enableButtons: function enableButtons(config, container) {
        var selectors = {
            submitButton: '.js-shipping-calc-submit'
        }
        container.querySelector(selectors.submitButton).removeAttribute('disabled');
        container.querySelector(selectors.submitButton).classList.remove('disabled');
        container.querySelector(selectors.submitButton).value = config.calculator_submit;
    },
    disableButtons: function disableButtons(config, container) {
        var selectors = {
            submitButton: '.js-shipping-calc-submit'
        }
        container.querySelector(selectors.submitButton).setAttribute('disabled', 'disabled');
        container.querySelector(selectors.submitButton).classList.add('disabled');
        container.querySelector(selectors.submitButton).value = config.calculator_calculating;
    },
    getRates: function getRates(config, shipping_address, container) {
        let url = '/cart/shipping_rates.json?shipping_address%5Bzip%5D=' + shipping_address.zip + '&shipping_address%5Bcountry%5D=' + shipping_address.country + '&shipping_address%5Bprovince%5D=' + shipping_address.province;
        fetch(url, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(res => res.json()).then(response => {
            if (!response.shipping_rates) {
                Shopify.theme.shippingCalculator.onError(response, config, container);
            } else {
                let rates = response.shipping_rates;
                Shopify.theme.shippingCalculator.onRatesUpdate(rates, shipping_address, config, container);
            }
        }).catch(error => {
            Shopify.theme.shippingCalculator.onError(error, config, container);
        });
    },
    onError: function onError(error, config, container) {
        Shopify.theme.shippingCalculator.enableButtons(config, container);
        let feedback = config.calculator_error + ' ' + Object.keys(error)[0] + ' ' + Object.values(error)[0];
        Shopify.theme.shippingCalculator.render({
            rates: [],
            errorFeedback: feedback,
            success: false
        }, container, config);
        container.querySelector('.js-shipping-calc-rates').style.display = "none";
        container.querySelector('.js-shipping-calc-response').style.display = "block";
    },
    onRatesUpdate: function onRatesUpdate(rates, shipping_address, config, container) {
        Shopify.theme.shippingCalculator.enableButtons(config, container);
        var readable_address = '';
        if (shipping_address.zip) readable_address += shipping_address.zip + ', ';
        if (shipping_address.province) readable_address += shipping_address.province + ', ';
        readable_address += shipping_address.country;
        if (!rates) return false;
        rates.forEach((rate, i) => {
            rate.price = Shopify.theme.shippingCalculator.formatRate(rate.price, config);
        });
        Shopify.theme.shippingCalculator.render({
            rates: rates,
            address: readable_address,
            success: true
        }, container, config);
    },
    formatRate: function formatRate(ratePrice, config) {
        let formatDollarsToCents = function(value) {
            value = (value + '').replace(/[^\d.-]/g, '');
            if (value && value.includes('.')) {
                value = value.substring(0, value.indexOf('.') + 3);
            }
            return value ? Math.round(parseFloat(value) * 100) : 0;
        }
        let cents = formatDollarsToCents(ratePrice);
        return Shopify.formatMoney(cents, config.money_format);
    },
    render: function render(response, container, config) {
        let rateFeedback = document.querySelector('.js-shipping-calc-rates-feedback'),
            rateList = document.querySelector('.js-shipping-calc-rates');
        rateFeedback.innerHTML = '';
        if (response.rates.length > 1) {
            rateFeedback.innerHTML = config.shipping_multi_rate_one + response.rates.length + config.shipping_multi_rate_two + response.address + config.shipping_multi_rate_three + response.rates[0].price;
        } else if (response.rates.length === 1) {
            rateFeedback.innerHTML = config.shipping_single_rate + response.address;
        } else {
            rateFeedback.innerHTML = config.shipping_no_destination;
        }
        rateList.innerHTML = '';
        response.rates.forEach((rate, i) => {
            const rateLI = document.createElement('li');
            rateLI.classList.add('shipping-calc__rate');
            rateLI.innerHTML = rate.name + ' at ' + rate.price;
            rateList.appendChild(rateLI)
        });
        container.querySelector('.js-shipping-calc-rates').style.display = "block";
        document.querySelector('.js-shipping-calc-response').style.display = "block";
    }
}
Shopify.theme.ajaxCart.init();
document.addEventListener('shopify:section:select', function(event) {
    Shopify.theme.ajaxCart.init();
});
var mobile = window.matchMedia('(max-width: 740px)');
var tablet = window.matchMedia('(max-width: 979px) and (min-width: 741px)');
var desktop = window.matchMedia('(min-width: 980px)');
theme.Header = (function() {
    function Header(container) {
        const themeHeader = document.querySelector(".js-theme-header"),
            clearElement = document.querySelector(".js-clear-element"),
            menuItemsWithNestedDropdowns = document.querySelectorAll(".js-menuitem-with-nested-dropdown"),
            doubleTapToGoItems = document.querySelectorAll(".js-doubletap-to-go"),
            topBar = document.querySelector(".js-top-bar");
        window.addEventListener('scroll', function(event) {
            prepareSticky();
        });
        window.addEventListener('resize', function(event) {
            prepareSticky();
        });
        window.addEventListener('shopify:section:select', function(event) {
            prepareSticky();
        });

        function prepareSticky() {
            let isMobile = window.innerWidth < 767,
                elementClass, elementHeight, amountToScroll, isSticky;
            switch (isMobile) {
                case true:
                    amountToScroll = 0;
                    elementClass = ".js-mobile-header";
                    elementHeight = (document.querySelector(".js-mobile-header")) ? document.querySelector(".js-mobile-header").clientHeight : '';
                    isSticky = (document.querySelector(".js-mobile-header")) ? document.querySelector(".js-mobile-header").classList.contains("stickynav") : '';
                    break;
                case false:
                    if (topBar) {
                        amountToScroll = topBar.clientHeight
                    } else {
                        amountToScroll = 0;
                    }
                    elementClass = ".js-theme-header";
                    elementHeight = (document.querySelector(".js-theme-header")) ? document.querySelector(".js-theme-header").clientHeight : '';
                    isSticky = (document.querySelector(".js-theme-header")) ? document.querySelector(".js-theme-header").classList.contains("stickynav") : '';
                    break;
            }
            if (isSticky) return theme.Helpers.makeSticky(amountToScroll, elementClass, elementHeight);
        }
        theme.a11yHelpers.setUpAriaExpansion();
        theme.a11yHelpers.setUpAccessibleNavigationMenus();
        menuItemsWithNestedDropdowns.forEach(function(menuItem) {
            menuItem.addEventListener('mouseenter', function(event) {
                const nestedDropdown = menuItem.querySelector(".js-dropdown-nested");
                if (nestedDropdown) {
                    if (theme.DOMHelpers.isElementPastEdge(nestedDropdown)) {
                        nestedDropdown.classList.add("dropdown--edge");
                        if (menuItem.classList.contains('js-first-level')) {
                            menuItem.classList.add('relative');
                        }
                    }
                }
            });
        });

        function closeMenu(activeClass) {
            document.querySelectorAll(`[data-active-class="${activeClass}"]`).forEach(function(activeMenu) {
                activeMenu.classList.remove(activeClass);
            });
        }
        doubleTapToGoItems.forEach(function(doubleTapItem) {
            let preventClick = false,
                prevEventTarget = undefined;
            const activeClass = doubleTapItem.getAttribute("data-active-class");
            Events.on("device:touchstart", function() {
                preventClick = true;
            });
            doubleTapItem.addEventListener("click", function(event) {
                if (preventClick) {
                    event.preventDefault();
                }
            });
            doubleTapItem.addEventListener("touchstart", function(event) {
                event.target.setAttribute("aria-expanded", "false");
                closeMenu(activeClass);
                if (prevEventTarget === event.target) {
                    preventClick = false;
                } else {
                    event.target.classList.toggle(activeClass);
                    event.target.setAttribute("aria-expanded", "true");
                }
                prevEventTarget = event.target;
            }, {
                passive: true
            });
        });
        (function toggleSearch() {
            var element = container.querySelector('.js-search-toggle');
            if (!element) {
                return false;
            }
            element.addEventListener("click", function() {
                var element = container.querySelector('.searchbox');
                element.classList.toggle("shown");
            });
            container.querySelector('.js-search-close').addEventListener("click", function() {
                var element = container.querySelector('.searchbox');
                element.classList.remove("shown");
            });
            document.addEventListener('click', event => {
                if (event.target.classList.contains('searchbox')) {
                    var element = container.querySelector('.searchbox');
                    element.classList.remove("shown");
                }
            })
        })();
    }
    Header.prototype = _.assignIn({}, Header.prototype, {});
    return Header;
})();
theme.Carousel = (function() {
    function Carousel(container) {
        var Carousels = document.querySelectorAll('.js-flickity-container');
        if (!Carousels) {
            return false;
        }
        Carousels.forEach(Carousel => {
            const flktyData = Carousel.getAttribute('data-flickity');
            new Flickity(Carousel, {
                wrapAround: true,
                dragThreshold: "15",
                pauseAutoPlayOnHover: false,
                prevNextButtons: true,
                pageDots: false
            });
        });
    }
    Carousel.prototype = _.assignIn({}, Carousel.prototype, {
        onBlockSelect: function(event) {
            const index = event.target.getAttribute("data-slide-index");
            const carousel = event.target.closest('.js-flickity-container');
            const flkty = Flickity.data(carousel);
            flkty.select(index);
        }
    });
    return Carousel;
})();
theme.Collection = (function() {
    function Collection(container) {
        WAU.Slideout.init("collection-filters");
        if (container.querySelector("[data-collection-filters]")) {
            theme.CollectionFilters.init(container, container.dataset.sectionId);
        }
    }
    Collection.prototype = _.assignIn({}, Collection.prototype, {});
    return Collection;
})();
theme.CollectionFilters = {
    init: function init(container, sectionId) {
        if (container.querySelector("[data-collection-filters-hz]") || container.querySelector("[data-collection-sort-by]")) {
            theme.CollectionFilters.horizontalFilters();
            theme.CollectionFilters.currentFilters();
        }
        if (container.querySelector("[data-collection-filters-price-range]")) {
            theme.CollectionFilters.priceRange();
            theme.CollectionFilters.priceSlider();
        }
        if (container.querySelector("[data-collection-tag-group]")) {
            theme.CollectionFilters.tagGroupFilter();
        }
        this.filterData = [];
    },
    horizontalFilters: function horizontalFilters() {
        const listFilters = document.querySelectorAll('.js-hz-filter');
        listFilters.forEach((item, i) => {
            const inputField = item.querySelector('.js-hz-filter-input');
            const dropdown = item.querySelector('.js-hz-filter-list');
            const dropdownArray = [...item.querySelectorAll('li')];
            let valueArray = [];
            dropdownArray.forEach(item => {
                let searchLabel = item.querySelector('.js-hz-filter-label');
                if (!searchLabel) return false;
                valueArray.push(searchLabel.textContent);
            });
            const closeDropdown = () => {
                dropdown.classList.remove('open');
            }
            inputField.addEventListener('input', () => {
                dropdown.classList.add('open');
                let inputValue = inputField.value.toLowerCase();
                let valueSubstring;
                if (inputValue.length > 0) {
                    for (let j = 0; j < valueArray.length; j++) {
                        if (!(inputValue.substring(0, inputValue.length) === valueArray[j].substring(0, inputValue.length).toLowerCase())) {
                            dropdownArray[j].classList.add('closed');
                        } else {
                            dropdownArray[j].classList.remove('closed');
                        }
                    }
                } else {
                    for (let i = 0; i < dropdownArray.length; i++) {
                        dropdownArray[i].classList.remove('closed');
                    }
                }
            });
            dropdownArray.forEach(item => {
                item.addEventListener('click', (evt) => {
                    if (item.querySelector('input[type="checkbox"]').checked) {
                        item.classList.remove('current');
                        item.querySelector('input[type="checkbox"]').checked = false;
                    } else {
                        item.classList.add('current');
                        item.querySelector('input[type="checkbox"]').checked = true;
                    }
                    if (item.getAttribute('data-placeholder')) {
                        inputField.placeholder = item.dataset.placeholder;
                    }
                    const formData = new FormData(inputField.closest('form'));
                    const searchParams = new URLSearchParams(formData).toString();
                    theme.CollectionFilters.renderPage(searchParams);
                    dropdownArray.forEach(dropdown => {
                        dropdown.classList.add('closed');
                    });
                });
            })
            inputField.addEventListener('focus', () => {
                inputField.placeholder = inputField.dataset.genericPlaceholder;
                inputField.classList.add('active');
                dropdown.classList.add('open');
                dropdownArray.forEach(dropdown => {
                    dropdown.classList.remove('closed');
                });
            });
            inputField.addEventListener('blur', () => {
                inputField.placeholder = inputField.dataset.placeholder;
                inputField.classList.remove('active');
                dropdown.classList.remove('open');
            });
            document.addEventListener('click', (evt) => {
                const isDropdown = dropdown.contains(evt.target);
                const isInput = inputField.contains(evt.target);
                if (!isDropdown && !isInput) {
                    dropdown.classList.remove('open');
                }
            });
        });
    },
    priceRange: function priceRange() {
        const filters = document.querySelectorAll('.js-filter-range-input');
        if (filters.length > 0) {
            filters.forEach((item, i) => {
                item.addEventListener('change', function(event) {
                    setTimeout(function() {
                        const formData = new FormData(item.closest('form'));
                        const searchParams = new URLSearchParams(formData).toString();
                        theme.CollectionFilters.renderPage(searchParams);
                    }, 1000);
                });
            });
        }
        const filterButtons = document.querySelectorAll('.js-hz-filter-price-trigger');
        filterButtons.forEach((item, i) => {
            document.addEventListener('click', function(event) {
                const dropdown = item.nextElementSibling;
                const isTrigger = event.target.classList.contains('js-hz-filter-price-trigger');
                const isDropdown = dropdown.contains(event.target);
                if (isTrigger) {
                    event.preventDefault();
                }
                if (!isDropdown && !isTrigger) {
                    item.classList.remove('active');
                    dropdown.style.display = 'none';
                }
                if (!isTrigger) return false;
                if (dropdown.style.display == 'inline-block') {
                    item.classList.remove('active');
                    dropdown.style.display = 'none';
                } else {
                    item.classList.add('active');
                    dropdown.style.display = 'inline-block';
                }
            });
            let mouseDown = false;
            item.addEventListener('mousedown', () => {
                mouseDown = true;
            });
            item.addEventListener('mouseup', () => {
                mouseDown = false;
            });
            item.addEventListener('focus', (event) => {
                if (!mouseDown) {
                    const dropdown = event.target.nextElementSibling;
                    item.classList.add('active');
                    dropdown.style.display = 'inline-block';
                }
            });
            document.addEventListener('keyup', (event) => {
                if (event.keyCode == 9) {
                    const dropdown = document.querySelector('.js-hz-filter-price-dropdown');
                    if (!document.querySelector('.js-hz-filter-price').contains(event.target)) {
                        item.classList.remove('active');
                        dropdown.style.display = 'none';
                    }
                }
            });
        });
    },
    priceSlider: function priceSlider() {
        var parents = document.querySelectorAll(".js-price-range");

        if (!parents) return false;

        parents.forEach((parent, i) => {
            var rangeS = parent.querySelectorAll("input[type=range]"),
                numberS = parent.querySelectorAll("input[type=number]");

            rangeS.forEach(function(el) {
                el.oninput = function() {
                    var slide1 = parseFloat(rangeS[0].value),
                        slide2 = parseFloat(rangeS[1].value);

                    var slide1Dec = (Math.round(slide1 * 100) / 100),
                        slide2Dec = (Math.round(slide2 * 100) / 100);

                    if (parseFloat(slide1Dec) > parseFloat(slide2Dec)) {
                        [slide1Dec, slide2Dec] = [slide2Dec, slide1Dec]
                    }

                    numberS[0].value = slide1Dec;
                    numberS[1].value = slide2Dec;
                }
            });

            rangeS[0].onchange = function() {
                numberS[0].dispatchEvent(new Event('change', { bubbles: true }));
            }
            rangeS[1].onchange = function() {
                numberS[1].dispatchEvent(new Event('change', { bubbles: true }));
            }

            numberS.forEach(function(el) {
                el.oninput = function() {
                    var number1 = parseFloat(numberS[0].value),
                        number2 = parseFloat(numberS[1].value);

                    var number1Dec = (Math.round(number1 * 100) / 100),
                        number2Dec = (Math.round(number2 * 100) / 100);

                    if (number1Dec > number2Dec) {
                        var tmp = number1Dec;
                        numberS[0].value = number2Dec;
                        numberS[1].value = tmp;
                    }

                    rangeS[0].value = number1Dec;
                    rangeS[1].value = number2Dec;

                }
            });
        });
    },
    tagGroupFilter: function tagGroupFilter() {
        var tagGroup = document.querySelectorAll('.js-collection-tag-group'),
            currentTagGroups = [];
        tagGroup.forEach(function(element, i) {
            if (!checkTags(element.dataset.type)) {
                element.style.display = "none";
            } else {
                currentTagGroups.push(element);
            }
        });
        if (currentTagGroups.length === 0) {
            if (document.querySelector('.js-collection-filter-title')) {
                document.querySelector('.js-collection-filter-title').style.display = "none";
            }
        }
        currentTagGroups.forEach((item, i) => {
            if (i == 0) {
                updateSelected(item);
                updateTags(item.dataset.type);
            }
            if (currentTagGroups.length === 1) return false;
            item.addEventListener("click", function(event) {
                event.preventDefault();
                updateSelected(event.target);
                updateTags(event.target.dataset.type);
            });
        });

        function checkTags(group) {
            var tags = document.querySelectorAll('.js-collection-tag');
            var currentTags = [];
            tags.forEach((item, i) => {
                if (item.dataset.type == group) {
                    currentTags.push(item.dataset.type)
                }
            });
            return currentTags.length > 0;
        }

        function updateTags(group) {
            var tags = document.querySelectorAll('.js-collection-tag');
            tags.forEach((item, i) => {
                if (item.dataset.type == group) {
                    item.style.display = 'inline-block'
                } else {
                    item.style.display = 'none';
                }
            });
        }

        function updateSelected(element) {
            document.querySelectorAll('.js-collection-tag-group').forEach((item, i) => {
                item.classList.remove("selected");
            });
            element.classList.add("selected");
        }
    },
    currentFilters: function currentFilters() {
        const filters = document.querySelectorAll('.js-current-filter');
        filters.forEach((item, i) => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                theme.CollectionFilters.onActiveFilterClick(event);
            });
        });
    },
    mobileFilters: function mobileFilters(context) {
        const filters = document.querySelectorAll('.js-collection-mob-filter');
        filters.forEach((item, i) => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                if (item.querySelector('input[type="checkbox"]').checked) {
                    item.classList.remove('current');
                    item.querySelector('input[type="checkbox"]').checked = false;
                } else {
                    item.classList.add('current');
                    item.querySelector('input[type="checkbox"]').checked = true;
                }
                const formData = new FormData(item.closest('form'));
                const searchParams = new URLSearchParams(formData).toString();
                theme.CollectionFilters.renderPage(searchParams);
            });
        });
    },
    renderFilters: function renderFilters() {
        if (document.querySelector("[data-collection-mobile-filters]")) {
            WAU.Slideout._reloadSlideoutContents("collection-filters");
            WAU.Slideout.init("collection-filters");
        }
        if (document.querySelector("[data-collection-filters-hz]") || document.querySelector("[data-collection-sort-by]")) {
            theme.CollectionFilters.horizontalFilters();
            theme.CollectionFilters.currentFilters();
        }
        if (document.querySelector("[data-collection-filters-price-range]")) {
            theme.CollectionFilters.priceRange();
            theme.CollectionFilters.priceSlider();
        }
        if (document.querySelector("[data-collection-tag-group]")) {
            theme.CollectionFilters.tagGroupFilter();
        }
        if (document.querySelector("[data-collection-sort-by]")) {
            if (!document.querySelector("[data-collection-sort-by]").querySelector('.current')) return;
            const placeholder = document.querySelector("[data-collection-sort-by]").querySelector('.current').dataset.placeholder;
            document.querySelector("[data-collection-sort-by]").querySelector('.js-hz-filter-input').placeholder = placeholder;
        }
    },
    renderSectionFromFetch: function renderSectionFromFetch(url, section) {
        fetch(url).then(response => response.text()).then((responseText) => {
            const html = responseText;
            this.filterData = [...this.filterData, {
                html,
                url
            }];
            theme.CollectionFilters.renderProductGrid(html);
            theme.CollectionFilters.renderFilters();
        });
    },
    renderSectionFromCache: function renderSectionFromCache(filterDataUrl, section) {
        const html = this.filterData.find(filterDataUrl).html;
        theme.CollectionFilters.renderProductGrid(html);
        theme.CollectionFilters.renderFilters();
    },
    renderPage: function renderPage(searchParams, updateURLHash = true) {
        const sections = theme.CollectionFilters.getSections();
        document.getElementById('CollectionProductGrid').querySelector('.collection').classList.add('loading');
        sections.forEach((section) => {
            const url = `${window.location.pathname}?section_id=${section.section}&${searchParams}`;
            const filterDataUrl = element => element.url === url;
            this.filterData.some(filterDataUrl) ? theme.CollectionFilters.renderSectionFromCache(filterDataUrl, section) : theme.CollectionFilters.renderSectionFromFetch(url, section);
        });
        if (updateURLHash) theme.CollectionFilters.updateURLHash(searchParams);
    },
    renderProductGrid: function renderProductGrid(html) {
        const innerHTML = new DOMParser().parseFromString(html, 'text/html').getElementById('CollectionProductGrid').innerHTML;
        document.getElementById('CollectionProductGrid').innerHTML = innerHTML;
    },
    onActiveFilterClick: function onActiveFilterClick(event) {
        event.preventDefault();
        theme.CollectionFilters.renderPage(new URL(event.currentTarget.href).searchParams.toString());
    },
    updateURLHash: function updateURLHash(searchParams) {
        history.pushState({
            searchParams
        }, '', `${window.location.pathname}${searchParams && '?'.concat(searchParams)}`);
    },
    getSections: function getSections() {
        return [{
            id: 'main-collection-product-grid',
            section: document.getElementById('main-collection-product-grid').dataset.id,
        }]
    }
}
Events.on('slideout:active:collection-filters', function() {
    if (document.querySelector("[data-collection-mobile-filters]")) {
        theme.CollectionFilters.mobileFilters();
    }
});
theme.Search = (function() {
    function Search(container) {
        WAU.Slideout.init("search-filters");
        if (container.querySelector("[data-collection-filters]")) {
            theme.SearchFilters.init(container, container.dataset.sectionId);
        }
    }
    Search.prototype = _.assignIn({}, Search.prototype, {});
    return Search;
})();
theme.SearchFilters = {
    init: function init(container, sectionId) {
        if (container.querySelector("[data-collection-filters-hz]") || container.querySelector("[data-collection-sort-by]")) {
            theme.SearchFilters.horizontalFilters();
            theme.SearchFilters.currentFilters();
        }
        if (container.querySelector("[data-collection-filters-price-range]")) {
            theme.SearchFilters.priceRange();
            theme.SearchFilters.priceSlider();
        }
        this.filterData = [];
    },
    horizontalFilters: function horizontalFilters() {
        const listFilters = document.querySelectorAll('.js-hz-filter');
        listFilters.forEach((item, i) => {
            const inputField = item.querySelector('.js-hz-filter-input');
            const dropdown = item.querySelector('.js-hz-filter-list');
            const dropdownArray = [...item.querySelectorAll('li')];
            let valueArray = [];
            dropdownArray.forEach(item => {
                let searchLabel = item.querySelector('.js-hz-filter-label');
                if (!searchLabel) return false;
                valueArray.push(searchLabel.textContent);
            });
            const closeDropdown = () => {
                dropdown.classList.remove('open');
            }
            inputField.addEventListener('input', () => {
                dropdown.classList.add('open');
                let inputValue = inputField.value.toLowerCase();
                let valueSubstring;
                if (inputValue.length > 0) {
                    for (let j = 0; j < valueArray.length; j++) {
                        if (!(inputValue.substring(0, inputValue.length) === valueArray[j].substring(0, inputValue.length).toLowerCase())) {
                            dropdownArray[j].classList.add('closed');
                        } else {
                            dropdownArray[j].classList.remove('closed');
                        }
                    }
                } else {
                    for (let i = 0; i < dropdownArray.length; i++) {
                        dropdownArray[i].classList.remove('closed');
                    }
                }
            });
            dropdownArray.forEach(item => {
                item.addEventListener('click', (evt) => {
                    if (item.querySelector('input[type="checkbox"]').checked) {
                        item.classList.remove('current');
                        item.querySelector('input[type="checkbox"]').checked = false;
                    } else {
                        item.classList.add('current');
                        item.querySelector('input[type="checkbox"]').checked = true;
                    }
                    if (item.getAttribute('data-placeholder')) {
                        inputField.placeholder = item.dataset.placeholder;
                    }
                    const formData = new FormData(inputField.closest('form'));
                    const searchParams = new URLSearchParams(formData).toString();
                    var searchString = window.location.search.toString(),
                        searchString = searchString.replace('?', '');
                    theme.SearchFilters.renderPage(searchString + '&' + searchParams);
                    dropdownArray.forEach(dropdown => {
                        dropdown.classList.add('closed');
                    });
                });
            })
            inputField.addEventListener('focus', () => {
                inputField.placeholder = inputField.dataset.genericPlaceholder;
                inputField.classList.add('active');
                dropdown.classList.add('open');
                dropdownArray.forEach(dropdown => {
                    dropdown.classList.remove('closed');
                });
            });
            inputField.addEventListener('blur', () => {
                inputField.placeholder = inputField.dataset.placeholder;
                inputField.classList.remove('active');
                dropdown.classList.remove('open');
            });
            document.addEventListener('click', (evt) => {
                const isDropdown = dropdown.contains(evt.target);
                const isInput = inputField.contains(evt.target);
                if (!isDropdown && !isInput) {
                    dropdown.classList.remove('open');
                }
            });
        });
    },
    priceRange: function priceRange() {
        const filters = document.querySelectorAll('.js-filter-range-input');
        if (filters.length > 0) {
            filters.forEach((item, i) => {
                item.addEventListener('change', function(event) {
                    setTimeout(function() {
                        const formData = new FormData(item.closest('form'));
                        const searchParams = new URLSearchParams(formData).toString();
                        var searchString = window.location.search.toString(),
                            searchString = searchString.replace('?', '');
                        theme.SearchFilters.renderPage(searchString + '&' + searchParams);
                    }, 1000);
                });
            });
        }
        const filterButtons = document.querySelectorAll('.js-hz-filter-price-trigger');
        filterButtons.forEach((item, i) => {
            document.addEventListener('click', function(event) {
                const dropdown = item.nextElementSibling;
                const isTrigger = event.target.classList.contains('js-hz-filter-price-trigger');
                const isDropdown = dropdown.contains(event.target);
                if (isTrigger) {
                    event.preventDefault();
                }
                if (!isDropdown && !isTrigger) {
                    item.classList.remove('active');
                    dropdown.style.display = 'none';
                }
                if (!isTrigger) return false;
                if (dropdown.style.display == 'inline-block') {
                    item.classList.remove('active');
                    dropdown.style.display = 'none';
                } else {
                    item.classList.add('active');
                    dropdown.style.display = 'inline-block';
                }
            });
            let mouseDown = false;
            item.addEventListener('mousedown', () => {
                mouseDown = true;
            });
            item.addEventListener('mouseup', () => {
                mouseDown = false;
            });
            item.addEventListener('focus', (event) => {
                if (!mouseDown) {
                    const dropdown = event.target.nextElementSibling;
                    item.classList.add('active');
                    dropdown.style.display = 'inline-block';
                }
            });
            document.addEventListener('keyup', (event) => {
                if (event.keyCode == 9) {
                    const dropdown = document.querySelector('.js-hz-filter-price-dropdown');
                    if (!document.querySelector('.js-hz-filter-price').contains(event.target)) {
                        item.classList.remove('active');
                        dropdown.style.display = 'none';
                    }
                }
            });
        });
    },
    priceSlider: function priceSlider() {
        var parents = document.querySelectorAll(".js-price-range");
        if (!parents) return false;
        parents.forEach((parent, i) => {
            var rangeS = parent.querySelectorAll("input[type=range]"),
                numberS = parent.querySelectorAll("input[type=number]");
            rangeS.forEach(function(el) {
                el.oninput = function() {
                    var slide1 = parseFloat(rangeS[0].value),
                        slide2 = parseFloat(rangeS[1].value);
                    var slide1Dec = (Math.round(slide1 * 100) / 100).toFixed(2),
                        slide2Dec = (Math.round(slide2 * 100) / 100).toFixed(2);
                    if (parseFloat(slide1Dec) > parseFloat(slide2Dec)) {
                        [slide1Dec, slide2Dec] = [slide2Dec, slide1Dec]
                    }
                    numberS[0].value = slide1Dec;
                    numberS[1].value = slide2Dec;
                }
            });
            rangeS[0].onchange = function() {
                numberS[0].dispatchEvent(new Event('change', {
                    bubbles: true
                }));
            }
            rangeS[1].onchange = function() {
                numberS[1].dispatchEvent(new Event('change', {
                    bubbles: true
                }));
            }
            numberS.forEach(function(el) {
                el.oninput = function() {
                    var number1 = parseFloat(numberS[0].value),
                        number2 = parseFloat(numberS[1].value);
                    var number1Dec = (Math.round(number1 * 100) / 100).toFixed(2),
                        number2Dec = (Math.round(number2 * 100) / 100).toFixed(2);
                    if (number1Dec > number2Dec) {
                        var tmp = number1Dec;
                        numberS[0].value = number2Dec;
                        numberS[1].value = tmp;
                    }
                    rangeS[0].value = number1Dec;
                    rangeS[1].value = number2Dec;
                }
            });
        });
    },
    currentFilters: function currentFilters() {
        const filters = document.querySelectorAll('.js-current-filter');
        filters.forEach((item, i) => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                theme.SearchFilters.onActiveFilterClick(event);
            });
        });
    },
    mobileFilters: function mobileFilters(context) {
        const filters = document.querySelectorAll('.js-collection-mob-filter');
        filters.forEach((item, i) => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                if (item.querySelector('input[type="checkbox"]').checked) {
                    item.classList.remove('current');
                    item.querySelector('input[type="checkbox"]').checked = false;
                } else {
                    item.classList.add('current');
                    item.querySelector('input[type="checkbox"]').checked = true;
                }
                const formData = new FormData(item.closest('form'));
                const searchParams = new URLSearchParams(formData).toString();
                var searchString = window.location.search.toString(),
                    searchString = searchString.replace('?', '');
                theme.SearchFilters.renderPage(searchString + '&' + searchParams);
            });
        });
    },
    renderFilters: function renderFilters() {
        if (document.querySelector("[data-collection-mobile-filters]")) {
            WAU.Slideout._reloadSlideoutContents("search-filters");
            WAU.Slideout.init("search-filters");
        }
        if (document.querySelector("[data-collection-filters-hz]") || document.querySelector("[data-collection-sort-by]")) {
            theme.SearchFilters.horizontalFilters();
            theme.SearchFilters.currentFilters();
        }
        if (document.querySelector("[data-collection-filters-price-range]")) {
            theme.SearchFilters.priceRange();
            theme.SearchFilters.priceSlider();
        }
    },
    renderSectionFromFetch: function renderSectionFromFetch(url, section) {
        fetch(url).then(response => response.text()).then((responseText) => {
            const html = responseText;
            this.filterData = [...this.filterData, {
                html,
                url
            }];
            theme.SearchFilters.renderSearchGrid(html);
            theme.SearchFilters.renderFilters();
        });
    },
    renderSectionFromCache: function renderSectionFromCache(filterDataUrl, section) {
        const html = this.filterData.find(filterDataUrl).html;
        theme.SearchFilters.renderSearchGrid(html);
        theme.SearchFilters.renderFilters();
    },
    renderPage: function renderPage(searchParams, updateURLHash = true) {
        const sections = theme.SearchFilters.getSections();
        sections.forEach((section) => {
            const url = `${window.location.pathname}?section_id=${section.section}&${searchParams}`;
            const filterDataUrl = element => element.url === url;
            this.filterData.some(filterDataUrl) ? theme.SearchFilters.renderSectionFromCache(filterDataUrl, section) : theme.SearchFilters.renderSectionFromFetch(url, section);
        });
        if (updateURLHash) theme.SearchFilters.updateURLHash(searchParams);
    },
    renderSearchGrid: function renderSearchGrid(html) {
        const innerHTML = new DOMParser().parseFromString(html, 'text/html').getElementById('searchResultsWrapper').innerHTML;
        document.getElementById('searchResultsWrapper').innerHTML = innerHTML;
    },
    onActiveFilterClick: function onActiveFilterClick(event) {
        event.preventDefault();
        const searchParams = new URL(event.currentTarget.href).searchParams.toString();
        const searchString = new URL(window.location).searchParams.get('q');
        var finalSearchParams = (searchParams) ? searchParams : 'q=' + searchString;
        theme.SearchFilters.renderPage(finalSearchParams);
    },
    updateURLHash: function updateURLHash(searchParams) {
        history.pushState({
            searchParams
        }, '', `${window.location.pathname}${searchParams && '?'.concat(searchParams)}`);
    },
    getSections: function getSections() {
        return [{
            id: 'main-search-results',
            section: document.getElementById('main-search-results').dataset.id,
        }]
    }
}
Events.on('slideout:active:search-filters', function() {
    if (document.querySelector("[data-collection-mobile-filters]")) {
        theme.SearchFilters.mobileFilters();
    }
});
theme.ProductForm = function(context, events, Product) {
    var formConfig = context.querySelector('#AddToCartForm');
    var config = JSON.parse(formConfig.dataset.productForm || '{}');
    if (context.querySelector('[data-store-availability-container]')) {
        Events.trigger("storeavailability:variant", Product.variants[0].id, Product.title);
    }
    if (config.featured_product) {
        var prodSelector = 'fp-product-select-' + context.dataset.sectionId;
    } else if (config.quickview) {
        var prodSelector = "qv-product-select-" + Product.id;
    } else {
        var prodSelector = 'product-select-' + Product.id;
    }
    new Shopify.OptionSelectors(prodSelector, {
        product: Product,
        onVariantSelected: function(variant, selector) {
            if (!variant) {
                events.trigger("variantunavailable", variant, config);
                Events.trigger("storeavailability:unavailable");
                return;
            }
            events.trigger("variantchange", variant, config);
            events.trigger("variantchange:option1:" + variant.option1);
            events.trigger("variantchange:option2:" + variant.option2);
            events.trigger("variantchange:option3:" + variant.option3);
            if (context.querySelector('[data-store-availability-container]')) {
                Events.trigger("storeavailability:variant", variant.id, Product.title);
            }
            if (variant.featured_media) {
                Events.trigger("variantchange:image", variant.featured_media.id, context);
            }
        },
        enableHistoryState: config.enable_history
    });
    (function quantity() {
        var element = context.querySelector("[name=quantity]");
        events.on("quantitycontrol:click", change);

        function change(value) {
            var quantity = parseInt(element.value) + value;
            if (quantity < 1) {
                return false;
            }
            element.value = quantity;
        }
    })();
    (function quantity_controls() {
        Control(".quantity-control-up", 1);
        Control(".quantity-control-down", -1);

        function Control(selector, value) {
            var element = context.querySelector(selector);
            if (!element) {
                return false;
            }
            element.addEventListener("click", function(event) {
                event.preventDefault();
                events.trigger("quantitycontrol:click", value);
            });
        }
    })();
    (function single_option_selectors() {
        var elements = context.querySelectorAll(".single-option-selector");
        elements.forEach(Selector);

        function Selector(element, index) {
            var option_position = index + 1;
            events.on("swatch:change:" + option_position, change);

            function change(value) {
                element.value = value;
                element.dispatchEvent(new CustomEvent('change', {
                    bubbles: true,
                    cancelable: true
                }));
            }
        }
    })();
    (function swatches() {
        var elements = context.querySelectorAll("[type=radio]");
        var states = {
            sold_out: function(element) {
                element.parentElement.classList.add("soldout");
            },
            available: function(element) {
                element.parentElement.classList.remove("soldout");
            }
        };
        events.on("variantunavailable", set_unavailable);
        elements.forEach(Swatch);

        function set_unavailable() {
            var selected = {};
            var selected_elements = document.querySelectorAll("[type=radio]:checked");
            selected_elements.forEach(function(element) {
                var option = "option" + element.getAttribute("data-position");
                var value = element.value;
                selected[option] = value;
            });
            elements.forEach(function(element) {
                var available = false;
                var current_option = "option" + element.getAttribute("data-position");
                var current_value = element.value;
                var other_options = ["option1", "option2", "option3"].filter(function(option) {
                    return selected[option] && option != current_option;
                });
                Product.variants.forEach(function(variant) {
                    if (!variant.available) {
                        return;
                    }
                    if (variant[current_option] != current_value) {
                        return;
                    }
                    if (variant[other_options[0]] == selected[other_options[0]] && variant[other_options[1]] == selected[other_options[1]]) {
                        available = true;
                        return;
                    }
                });
                if (available) {
                    states.available(element);
                } else {
                    states.sold_out(element);
                }
            });
        }

        function Swatch(element) {
            var option_position = element.getAttribute("data-position");
            var current_option = "option" + option_position;
            var other_options = ["option1", "option2", "option3"].filter(function(option) {
                return option != current_option;
            });
            element.addEventListener("change", function(event) {
                var selectedLabel = context.querySelector('#selected-option-' + option_position);
                selectedLabel.innerHTML = element.value;
                events.trigger("swatch:change:" + option_position, element.value);
            });
            events.on("variantchange:option" + option_position + ":" + element.value, select);
            events.on("variantchange", set_availability);

            function select() {
                element.checked = true;
            }

            function set_availability(current_variant) {
                var available = false;
                Product.variants.forEach(function(variant) {
                    if (!variant.available) {
                        return;
                    }
                    if (variant[current_option] != element.value) {
                        return;
                    }
                    if (variant[other_options[0]] != current_variant[other_options[0]]) {
                        return;
                    }
                    if (variant[other_options[1]] != current_variant[other_options[1]]) {
                        return;
                    }
                    available = true;
                });
                if (available) {
                    states.available(element);
                } else {
                    states.sold_out(element);
                }
            }
        }
    })();
    (function price() {
        var element = context.querySelector("[data-product-price]");
        events.on("variantchange", function(variant) {
            var price = format_money(variant.price);
            if (!variant.available) {
                element.innerHTML = '';
                context.querySelector('.add').disabled = true;
            } else {
                element.innerHTML = price;
                context.querySelector('.add').disabled = false;
            }
            events.on("variantunavailable", function(variant) {
                element.innerHTML = '';
                context.querySelector('.add').disabled = true;
            });
        });
    })();
    (function unit_price() {
        var element = context.querySelector(".js-unit-price");
        var wrapper = context.querySelector(".js-unit-price-wrapper");
        if (!element) return false;
        events.on("variantchange", function(variant) {
            var unitPrice = "";
            if (variant.unit_price) {
                unitPrice = Shopify.formatMoney(variant.unit_price, config.money_format); + ' ' +
                config.unit_price_separator + ' ' +
                    getBaseUnit(variant);
                wrapper.style.display = "block";
            } else {
                wrapper.style.display = "none";
            }
            element.innerHTML = unitPrice;
        });
    })();
    (function compare_price() {
        var element = context.querySelector("[data-compare-price]");
        if (!element) {
            return false;
        }
        events.on("variantchange", function(variant) {
            var price = "";
            if (variant.compare_at_price > variant.price) {
                var price = format_money(variant.compare_at_price);
            }
            if (!variant.available) {
                price = "";
            }
            element.innerHTML = price;
        });
    })();
    (function add_to_cart() {
        var element = context.querySelector(".js-ajax-submit"),
            elementTxt = context.querySelector("[data-add-to-cart-text]"),
            elementPrice = context.querySelector("[data-product-price]");
        events.on("variantchange", function(variant) {
            var text = config.button;
            var disabled = false;
            if (!variant.available) {
                text = config.sold_out;
                disabled = true;
            }
            if (config.instore == true) {
                text = config.instore_only;
                disabled = true;
                element.disabled = true;
            }
            elementTxt.innerHTML = text;
            element.disabled = disabled;
        });
        events.on("variantunavailable", function() {
            elementTxt.innerHTML = config.unavailable;
            element.disabled = true;
        });
    })();
    (function submit_form() {
        var element = document.querySelector(".add");
        events.on("variantchange", function(variant) {
            element.dataset.variantId = variant.id;
        });
        element.addEventListener("click", function() {
            var qty = document.querySelector('.product-qty', context).value,
                variant = element.dataset.variantId;
        });
    })();
    (function smart_payment_buttons() {
        var element = context.querySelector(".shopify-payment-button");
        if (!element) {
            return false;
        }
        events.on("variantchange", function(variant) {
            if (!variant.available) {
                element.style.display = 'none';
            } else {
                element.style.display = 'block';
            }
        });
    })();

    function format_money(cents) {
        return Shopify.formatMoney(cents, config.money_format);
    }

    function getBaseUnit(variant) {
        return variant.unit_price_measurement.reference_value === 1 ? variant.unit_price_measurement.reference_unit : variant.unit_price_measurement.reference_value +
            variant.unit_price_measurement.reference_unit;
    }
}
theme.ProductDetails = function(context, events, Product) {
    (function sku() {
        var element = context.querySelector(".variant_sku");
        if (!element) {
            return false;
        }
        events.on("variantchange", function(variant, config) {
            var variant_sku = variant.sku;
            if (!variant_sku) {
                element.parentNode.style.display = 'none';
            } else {
                element.innerHTML = variant_sku;
                element.parentNode.style.display = 'grid';
            }
        });
        events.on("variantunavailable", function(variant, config) {
            var variant_sku = config.unavailable;
            element.innerHTML = variant_sku;
        });
    })();
    (function inventory() {
        var element = context.querySelector(".variant_inventory");
        if (!element) {
            return false;
        }
        events.on("variantchange", function(variant, config) {
            var inventory_quantity = variant.inventory_quantity;
            if (inventory_quantity > 0) {
                element.innerHTML = inventory_quantity;
            } else {
                element.innerHTML = config.unavailable;
            }
        });
        events.on("variantunavailable", function(variant, config) {
            var inventory_quantity = config.unavailable;
            element.innerHTML = inventory_quantity;
        });
    })();
    (function weight() {
        var element = context.querySelector(".variant_weight");
        if (!element) {
            return false;
        }
        events.on("variantchange", function(variant, config) {
            var variant_weight = variant.weight_in_unit;
            var variant_weight_unit = variant.weight_unit;
            if (variant_weight > 0) {
                element.innerHTML = variant_weight + '&nbsp;' + variant_weight_unit;
            } else {
                element.innerHTML = config.unavailable;
            }
        });
        events.on("variantunavailable", function(variant, config) {
            var variant_weight = config.unavailable;
            element.innerHTML = variant_weight;
        });
    })();
}
theme.ProductGallery = (function() {
    function init(context, sectionId, events, Product) {
        let config = JSON.parse(context.querySelector('.js-product-gallery').dataset.galleryConfig || '{}'),
            main = context.querySelector('.js-carousel-main'),
            carouselNav = context.querySelector('.js-thumb-carousel-nav');
        if (!main) return false;
        this.mainSlider(main, carouselNav, config, context);
        if (config.thumbPosition == 'bottom' && config.thumbSlider == true) this.thumbSlider(carouselNav, main, context);
        if (config.clickToEnlarge) theme.ProductGallery.enlargePhoto(context);
    }

    function mainSlider(main, carouselNav, config, context) {
        let initialEl = main.querySelector("[data-image-id='" + context.dataset.initialVariant + "']"),
            initialIndex;
        if (initialEl) {
            initialIndex = initialEl.dataset.slideIndex;
        } else {
            initialIndex = 0;
        }
        var flkty = new Flickity(main, {
            fade: true,
            wrapAround: true,
            cellAlign: 'left',
            draggable: true,
            contain: true,
            pageDots: false,
            prevNextButtons: config.mainSlider,
            autoPlay: false,
            selectedAttraction: 0.01,
            dragThreshold: 5,
            adaptiveHeight: true,
            imagesLoaded: true,
            initialIndex: initialIndex,
            arrowShape: 'M87.5,46.25H21L56.18,7.52a3.75,3.75,0,0,0-5.55-5l-40.9,45c-.07.07-.11.15-.17.22a2.92,2.92,0,0,0-.21.28,2.21,2.21,0,0,0-.18.34,2.64,2.64,0,0,0-.15.29A2.77,2.77,0,0,0,8.9,49a2.58,2.58,0,0,0-.08.26,3.82,3.82,0,0,0,0,1.43A2.13,2.13,0,0,0,8.9,51a2.77,2.77,0,0,0,.12.41,2.64,2.64,0,0,0,.15.29,2.21,2.21,0,0,0,.18.34,2.92,2.92,0,0,0,.21.28c.06.07.1.15.17.22l40.9,45a3.75,3.75,0,0,0,5.55-5L21,53.75H87.5a3.75,3.75,0,0,0,0-7.5Z',
            on: {
                ready: function() {
                    let id = this.selectedElement.dataset.imageId;
                    context.querySelector('.js-product-gallery').style.visibility = "visible";
                },
                change: function() {
                    theme.ProductGallery.removeFocus(context);
                    theme.ProductGallery.addFocus(this.selectedElement, context);
                    theme.ProductGallery.setActiveThumbnail(this.selectedElement.dataset.imageId, this.selectedElement, context);
                    theme.ProductGallery.switchMedia(this.selectedElement.dataset.imageId, context);
                    if (this.selectedElement.classList.contains('model-slide')) {
                        if (this.isDraggable) {
                            this.options.draggable = !this.options.draggable;
                            this.updateDraggable();
                        }
                    }
                }
            }
        });
        theme.ProductGallery.galleryEvents(flkty, context);
        if (carouselNav) theme.ProductGallery.thumbnails(flkty, carouselNav, config, context);
    }

    function thumbSlider(wrapper, main, context) {
        var flktyThumbs = new Flickity(wrapper, {
            asNavFor: main,
            wrapAround: false,
            groupCells: true,
            cellAlign: 'left',
            draggable: false,
            contain: true,
            imagesLoaded: true,
            pageDots: false,
            autoPlay: false,
            selectedAttraction: 0.01,
            dragThreshold: 5,
            accessibility: false,
            arrowShape: 'M87.5,46.25H21L56.18,7.52a3.75,3.75,0,0,0-5.55-5l-40.9,45c-.07.07-.11.15-.17.22a2.92,2.92,0,0,0-.21.28,2.21,2.21,0,0,0-.18.34,2.64,2.64,0,0,0-.15.29A2.77,2.77,0,0,0,8.9,49a2.58,2.58,0,0,0-.08.26,3.82,3.82,0,0,0,0,1.43A2.13,2.13,0,0,0,8.9,51a2.77,2.77,0,0,0,.12.41,2.64,2.64,0,0,0,.15.29,2.21,2.21,0,0,0,.18.34,2.92,2.92,0,0,0,.21.28c.06.07.1.15.17.22l40.9,45a3.75,3.75,0,0,0,5.55-5L21,53.75H87.5a3.75,3.75,0,0,0,0-7.5Z'
        });
    }

    function thumbnails(flkty, carouselNav, config, context) {
        if (!carouselNav) return false;
        let thumbs = carouselNav.querySelectorAll('.js-thumb-item');
        if (!thumbs) return false;
        thumbs.forEach((thumb, i) => {
            thumb.addEventListener('click', function(event) {
                event.preventDefault();
                let index = this.dataset.slideIndex,
                    el = carouselNav.querySelectorAll('.js-thumb-item')[index],
                    mediaId = this.dataset.imageId;
                theme.ProductGallery.setActiveThumbnail(mediaId, el, context);
                theme.ProductGallery.switchMedia(mediaId, context);
                theme.ProductGallery.setThumbPos(this, carouselNav);
                flkty.select(index);
            });
            thumb.addEventListener('keypress', function(event) {
                event.preventDefault();
                if (event.which == 13) {
                    let index = this.dataset.slideIndex,
                        el = carouselNav.querySelectorAll('.js-thumb-item')[index],
                        mediaId = this.dataset.imageId;
                    theme.ProductGallery.setActiveThumbnail(mediaId, el, context);
                    theme.ProductGallery.switchMedia(mediaId, context);
                    theme.ProductGallery.setThumbPos(this, carouselNav);
                    flkty.select(index);
                }
            });
        });
        if (config.thumbPosition != 'bottom') {
            theme.ProductGallery.setThumbSizes(carouselNav, config, context);
        }
    }

    function setThumbSizes(carouselNav, config, context) {
        let wrapper = context.querySelector('.js-thumb-vertical-wrapper'),
            wrapperWidth = wrapper.offsetWidth,
            thumbsShown = config.thumbsShown || 4;

        const thumbs = carouselNav.querySelectorAll('.js-thumb-item');
        if (thumbs) {

            thumbs.forEach((item, i) => {
                item.style.maxWidth = wrapperWidth + 'px';
            });
            carouselNav.querySelectorAll('.js-thumb-item-img').forEach((item, i) => {
                item.style.width = wrapperWidth + 20 + 'px';
                item.style.height = wrapperWidth + 20 + 'px';
            });


        }
    }

    function setThumbPos(selected, carouselNav) {
        carouselNav.scrollTo({
            top: selected.offsetTop - 20,
            left: 0,
            behavior: 'smooth'
        });
    }

    function galleryEvents(flkty, context) {
        Events.on('variantchange:image', function(id, context) {
            if (id === null) return false;
            var main, el, index, curFlkty;
            main = context.querySelector('.js-carousel-main');
            el = main.querySelector("[data-image-id='" + id + "']");
            index = el.dataset.slideIndex;
            theme.ProductGallery.setActiveThumbnail(id, el, context);
            theme.ProductGallery.switchMedia(id, context);
            curFlkty = Flickity.data(main);
            curFlkty.select(index);
        });
    }

    function removeFocus(context) {
        let main;
        if (context) {
            main = context;
        } else {
            main = context.querySelector('.js-carousel-main');
        }
        context.querySelectorAll('.js-carousel-main *').forEach((item, i) => {
            item.setAttribute('tabIndex', '-1');
            item.blur();
        });
        let buttonContents = context.querySelectorAll('.flickity-button *');
        buttonContents.forEach((item, i) => {
            item.setAttribute('tabIndex', '-1');
            item.classList.add('js-hide-focus')
        });
        if (main.classList.contains('.flickity-enabled')) {
            main.setAttribute('tabIndex', '-1');
            main.classList.add('js-hide-focus');
        }
    }

    function addFocus(current, context) {
        if (current.classList.contains('image-slide')) {
            current.querySelector('img').setAttribute("tabIndex", "0");
        } else if (current.classList.contains('video-slide')) {
            current.querySelectorAll('.plyr__controls *').forEach((item, i) => {
                item.setAttribute("tabIndex", "0");
            });
        } else if (current.classList.contains('external_video-slide')) {
            current.querySelector('iframe').setAttribute("tabIndex", "0");
        } else if (current.classList.contains('model-slide')) {
            current.querySelectorAll('.shopify-model-viewer-ui__controls-area *').forEach((item, i) => {
                item.setAttribute("tabIndex", "0");
            });
        }
    }

    function enlargePhoto(context) {
        let buttons = context.querySelectorAll('a.zoom_btn');
        if (!buttons) return false;
        buttons.forEach((button, i) => {
            button.addEventListener('click', function(event) {
                event.preventDefault();
                var btn = event.target,
                    index = btn.getAttribute('data-index'),
                    index = parseInt(index, 10);
                openPhotoSwipe(index);
            });
        });
        var openPhotoSwipe = function(index) {
            var pswpElement = document.querySelectorAll('.pswp')[0];
            let images = context.querySelectorAll('#main-slider .image-slide');
            if (images.length < 2) {
                var arrows = false;
            } else {
                var arrows = true;
            }
            let items = [];
            images.forEach((image, i) => {
                let imageTag = image.querySelector('.product__image');
                let item = {
                    src: imageTag.getAttribute('data-zoom-src'),
                    w: imageTag.getAttribute('data-width'),
                    h: imageTag.getAttribute('data-height')
                }
                items.push(item);
            });
            var options = {
                index: index,
                arrowEl: arrows,
                captionEl: false,
                closeOnScroll: false,
                counterEl: false,
                history: false,
                fullscreenEl: false,
                preloaderEl: false,
                shareEl: false,
                tapToClose: false,
                getThumbBoundsFn: function(index) {
                    var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
                    var thumbnail = context.querySelector('.product__image');
                    var rect = thumbnail.getBoundingClientRect();
                    return {
                        x: rect.left,
                        y: rect.top + pageYScroll,
                        w: rect.width
                    };
                }
            };
            var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
            gallery.listen('afterChange', function() {
                var flkty = Flickity.data('.js-carousel-main')
                var newIndex = gallery.getCurrentIndex();
                flkty.select(newIndex);
            });
        };
    }

    function switchMedia(mediaId, context) {
        let main = context.querySelector('.js-carousel-main'),
            currentMedia = main.querySelector('[data-product-single-media-wrapper]:not(.inactive)'),
            newMedia = main.querySelector('[data-product-single-media-wrapper]' + "[data-thumbnail-id='product-template-" + mediaId + "']"),
            otherMedia = main.querySelectorAll('[data-product-single-media-wrapper]' + ":not([data-thumbnail-id='product-template-" + mediaId + "'])");
        currentMedia.dispatchEvent(new CustomEvent('mediaHidden', {
            bubbles: true,
            cancelable: true
        }));
        newMedia.classList.add('active-slide');
        newMedia.classList.remove('inactive');
        newMedia.dispatchEvent(new CustomEvent('mediaVisible', {
            bubbles: true,
            cancelable: true
        }));
        otherMedia.forEach(function(el) {
            el.classList.add('inactive');
            el.classList.remove('active-slide');
        }.bind(this));
    }

    function setActiveThumbnail(mediaId, el, context) {
        let main = context.querySelector('.js-carousel-main'),
            carouselNav = context.querySelector('.js-thumb-carousel-nav');
        if (typeof mediaId === 'undefined') {
            mediaId = main.querySelector('[data-product-single-media-wrapper]:not(.hide)').dataset.mediaId;
        }
        carouselNav.querySelectorAll('.js-thumb-item').forEach((item, i) => {
            item.classList.remove('is-nav-selected');
            item.classList.remove('active-slide');
            item.removeAttribute('aria-current');
        });
        let thumbActive = context.querySelector(".js-thumb-item[data-image-id='" + mediaId + "']");
        thumbActive.classList.add('is-nav-selected');
        thumbActive.classList.add('active-slide');
        thumbActive.setAttribute('aria-current', true);
    }
    return {
        init: init,
        mainSlider: mainSlider,
        thumbSlider: thumbSlider,
        thumbnails: thumbnails,
        setThumbPos: setThumbPos,
        setThumbSizes: setThumbSizes,
        galleryEvents: galleryEvents,
        removeFocus: removeFocus,
        addFocus: addFocus,
        enlargePhoto: enlargePhoto,
        switchMedia: switchMedia,
        setActiveThumbnail: setActiveThumbnail
    };
})();

function onYouTubeIframeAPIReady() {
    theme.ProductVideo.loadVideos(theme.ProductVideo.hosts.youtube);
}
theme.ProductVideo = (function(context, sectionId) {
    var videos = {};
    var hosts = {
        html5: 'html5',
        youtube: 'youtube'
    };
    var selectors = {
        productMediaWrapper: '[data-product-single-media-wrapper]'
    };
    var attributes = {
        enableVideoLooping: 'enable-video-looping',
        videoId: 'video-id'
    };

    function init(videoContainer, sectionId) {
        if (!videoContainer) {
            return;
        }
        var videoElement = videoContainer.querySelector('iframe, video');
        if (!videoElement) {
            return;
        }
        var mediaId = videoContainer.getAttribute('data-media-id');
        videos[mediaId] = {
            mediaId: mediaId,
            sectionId: sectionId,
            host: hostFromVideoElement(videoElement),
            container: videoContainer,
            element: videoElement,
            ready: function() {
                createPlayer(this);
            }
        };
        var video = videos[mediaId];
        switch (video.host) {
            case hosts.html5:
                window.Shopify.loadFeatures([{
                    name: 'video-ui',
                    version: '1.0',
                    onLoad: setupPlyrVideos
                }]);
                theme.LibraryLoader.load('plyrShopifyStyles');
                break;
            case hosts.youtube:
                theme.LibraryLoader.load('youtubeSdk', setupYouTubeVideos);
                break;
        }
    }

    function setupPlyrVideos(errors) {
        if (errors) {
            fallbackToNativeVideo();
            return;
        }
        loadVideos(hosts.html5);
    }

    function setupYouTubeVideos() {
        if (!window.YT.Player) return;
        loadVideos(hosts.youtube);
    }

    function createPlayer(video) {
        if (video.player) {
            return;
        }
        var productMediaWrapper = video.container.closest(selectors.productMediaWrapper);
        var enableLooping = productMediaWrapper.getAttribute('data-' + attributes.enableVideoLooping) === 'true';
        switch (video.host) {
            case hosts.html5:
                video.player = new Shopify.Plyr(video.element, {
                    loop: {
                        active: enableLooping
                    },
                    muted: true,
                    hideControlsOnPause: true,
                    tooltips: {
                        controls: false,
                        seek: true
                    }
                });
                video.player.on('ready', event => {
                    video.container.querySelector('.plyr--full-ui').setAttribute('tabindex', '-1');
                    video.container.querySelectorAll('.plyr--full-ui *').forEach((item, i) => {
                        item.setAttribute('tabindex', '-1');
                    });
                });
                video.player.on('play', event => {
                    video.container.querySelectorAll('.plyr__controls *').forEach((item, i) => {
                        item.setAttribute("tabIndex", "0");
                    });
                });
                break;
            case hosts.youtube:
                var videoId = productMediaWrapper.getAttribute('data-' + attributes.videoId);
                video.player = new YT.Player(video.element, {
                    videoId: videoId,
                    events: {
                        onStateChange: function(event) {
                            if (event.data === 0 && enableLooping) event.target.seekTo(0);
                        },
                        onReady: function(event) {
                            video.player.mute();
                        }
                    }
                });
                break;
        }
        var pauseVideo = function() {
            if (!video.player) return;
            if (video.host === hosts.html5) {
                video.player.pause();
            }
            if (video.host === hosts.youtube && video.player.pauseVideo) {
                video.player.pauseVideo();
            }
        };
        productMediaWrapper.addEventListener('mediaHidden', pauseVideo);
        productMediaWrapper.addEventListener('xrLaunch', pauseVideo);
        productMediaWrapper.addEventListener('mediaHidden xrLaunch', function() {
            if (!video.player) return;
            if (video.host === hosts.html5) {
                video.player.pause();
            }
            if (video.host === hosts.youtube && video.player.pauseVideo) {
                video.player.pauseVideo();
            }
        });
        productMediaWrapper.addEventListener('mediaVisible', function() {
            if (theme.Helpers.isTouch()) return;
            if (!video.player) return;
            if (video.host === hosts.html5) {
                if (desktop.matches) {
                    video.player.play();
                }
            }
            if (video.host === hosts.youtube && video.player.playVideo) {
                if (desktop.matches) {
                    video.player.playVideo();
                }
            }
        });
    }

    function hostFromVideoElement(video) {
        if (video.tagName === 'VIDEO') {
            return hosts.html5;
        }
        if (video.tagName === 'IFRAME') {
            if (/^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(video.src)) {
                return hosts.youtube;
            }
        }
        return null;
    }

    function loadVideos(host) {
        for (var key in videos) {
            if (videos.hasOwnProperty(key)) {
                var video = videos[key];
                if (video.host === host) {
                    video.ready();
                }
            }
        }
    }

    function fallbackToNativeVideo() {
        for (var key in videos) {
            if (videos.hasOwnProperty(key)) {
                var video = videos[key];
                if (video.nativeVideo) continue;
                if (video.host === hosts.html5) {
                    video.element.setAttribute('controls', 'controls');
                    video.nativeVideo = true;
                }
            }
        }
    }

    function removeSectionVideos(sectionId) {
        for (var key in videos) {
            if (videos.hasOwnProperty(key)) {
                var video = videos[key];
                if (video.sectionId === sectionId) {
                    if (video.player) video.player.destroy();
                    delete videos[key];
                }
            }
        }
    }
    return {
        init: init,
        hosts: hosts,
        loadVideos: loadVideos,
        removeSectionVideos: removeSectionVideos
    };
})();
theme.ProductModel = (function() {
    var modelJsonSections = {};
    var models = {};
    var xrButtons = {};
    var selectors = {
        mediaGroup: '[data-product-single-media-group]',
        xrButton: '[data-shopify-xr]'
    };

    function init(modelViewerContainers, sectionId) {
        modelJsonSections[sectionId] = {
            loaded: false
        };
        modelViewerContainers.forEach(function(modelViewerContainer, index) {
            var mediaId = modelViewerContainer.getAttribute('data-media-id');
            var modelViewerElement = modelViewerContainer.querySelector('model-viewer');
            var modelId = modelViewerElement.getAttribute('data-model-id');
            if (index === 0) {
                var mediaGroup = modelViewerContainer.closest(selectors.mediaGroup);
                var xrButton = mediaGroup.querySelector(selectors.xrButton);
                xrButtons[sectionId] = {
                    element: xrButton,
                    defaultId: modelId
                };
            }
            models[mediaId] = {
                modelId: modelId,
                sectionId: sectionId,
                container: modelViewerContainer,
                element: modelViewerElement
            };
        });
        window.Shopify.loadFeatures([{
            name: 'shopify-xr',
            version: '1.0',
            onLoad: setupShopifyXr
        }, {
            name: 'model-viewer-ui',
            version: '1.0',
            onLoad: setupModelViewerUi
        }]);
        theme.LibraryLoader.load('modelViewerUiStyles');
    }

    function setupShopifyXr(errors) {
        if (errors) return;
        if (!window.ShopifyXR) {
            document.addEventListener('shopify_xr_initialized', function() {
                setupShopifyXr();
            });
            return;
        }
        for (var sectionId in modelJsonSections) {
            if (modelJsonSections.hasOwnProperty(sectionId)) {
                var modelSection = modelJsonSections[sectionId];
                if (modelSection.loaded) continue;
                var modelJson = document.querySelector('#ModelJson-' + sectionId);
                window.ShopifyXR.addModels(JSON.parse(modelJson.innerHTML));
                modelSection.loaded = true;
            }
        }
        window.ShopifyXR.setupXRElements();
    }

    function setupModelViewerUi(errors) {
        if (errors) return;
        for (var key in models) {
            if (models.hasOwnProperty(key)) {
                var model = models[key];
                if (!model.modelViewerUi) {
                    model.modelViewerUi = new Shopify.ModelViewerUI(model.element);
                }
                setupModelViewerListeners(model);
            }
        }
    }

    function setupModelViewerListeners(model) {
        var xrButton = xrButtons[model.sectionId];
        model.container.addEventListener('mediaVisible', function() {
            xrButton.element.setAttribute('data-shopify-model3d-id', model.modelId);
            if (theme.Helpers.isTouch()) return;
            model.modelViewerUi.play();
        });
        model.container.addEventListener('mediaHidden', function() {
            xrButton.element.setAttribute('data-shopify-model3d-id', xrButton.defaultId);
            model.modelViewerUi.pause();
        });
        model.container.addEventListener('xrLaunch', function() {
            model.modelViewerUi.pause();
        });
    }

    function removeSectionModels(sectionId) {
        for (var key in models) {
            if (models.hasOwnProperty(key)) {
                var model = models[key];
                if (model.sectionId === sectionId) {
                    models[key].modelViewerUi.destroy();
                    delete models[key];
                }
            }
        }
        delete modelJsonSections[sectionId];
    }
    return {
        init: init,
        removeSectionModels: removeSectionModels
    };
})();
theme.Product = (function() {
    function Product(context) {
        var events = new EventEmitter3();
        events.trigger = events.emit;
        var productJson = context.querySelector('.product-json');
        if (!productJson) {
            return false;
        }
        var Product = productJson.innerHTML,
            Product = JSON.parse(Product || '{}');
        var sectionId = context.dataset.sectionId;
        if (document.querySelector("[data-product-details]")) {
            theme.ProductDetails(document.querySelector("[data-product-details]"), events, Product);
        }

        let productModals = context.querySelectorAll('[data-wau-modal-content]');
        if (productModals.length > 0) {
            productModals.forEach(modal => {
                WAU.Modal.init(modal.dataset.wauModalContent);
            });
        }

        if (context.querySelector("[data-product-gallery]")) {
            theme.ProductGallery.init(context, sectionId, events, Product);
        }
        if (context.querySelector("[data-product-form]")) {
            theme.ProductForm(context, events, Product);
        }
        context.querySelectorAll("[data-product-media-type-video]").forEach(function(context, sectionId) {
            theme.ProductVideo.init(context, sectionId);
        });
        let modelViewerElements = context.querySelectorAll('[data-product-media-type-model]');
        if (modelViewerElements.length > 0) {
            theme.ProductModel.init(modelViewerElements, sectionId);
        }
        var self = this;
        document.addEventListener('shopify_xr_launch', function() {
            var currentMedia = document.querySelector('[data-product-single-media-wrapper]:not(.inactive)', self);
            currentMedia.dispatchEvent(new CustomEvent('xrLaunch', {
                bubbles: true,
                cancelable: true
            }));
        });
        document.addEventListener("shopify:section:select", function(event) {
            if (window.Shopify.designMode && window.SPR) {
                SPR.registerCallbacks();
                SPR.initRatingHandler();
                SPR.initDomEls();
                SPR.loadProducts();
                SPR.loadBadges();
            }
        });
    }
    return Product;
})();
theme.StoreAvailability = (function() {
    Events.on("storeavailability:variant", function(id, title) {
        updateContent(id, title)
    });
    Events.on("storeavailability:unavailable", function() {
        document.querySelector('[data-store-availability-container]').classList.remove('animate__fadeIn');
        document.querySelector('[data-store-availability-container]').classList.add('animate__fadeOut');
        document.querySelector('[data-store-availability-container]').style.display = "none";
    });

    function updateContent(id, title) {
        const container = document.querySelector('[data-store-availability-container]');
        const variantSectionUrl = container.dataset.baseUrl + '/variants/' + id + '/?section_id=pickup-availability';
        container.innerHTML = '';
        fetch(variantSectionUrl).then(function(response) {
            return response.text();
        }).then(function(storeAvailabilityHTML) {
            if (storeAvailabilityHTML.trim() === '') {
                return;
            }
            container.innerHTML = storeAvailabilityHTML;
            container.innerHTML = container.firstElementChild.innerHTML;
            container.style.minHeight = '112px';
            container.style.opacity = 1;
            container.classList.remove('animate__fadeOut');
            container.classList.add('animate__fadeIn');
            container.style.display = "block";
            if (document.querySelector('[data-pick-up-available="false"]')) {
                container.style.display = "none";
                return false;
            } else {
                container.style.display = "block";
            }
            const source = document.getElementById("StoreAvailabilityModal");
            const slideoutContainer = document.querySelector(".js-slideout-toggle-wrapper");
            const slideoutAside = document.getElementById('slideout-store-availability');
            if (slideoutAside) {
                slideoutAside.innerHTML = "";
                slideoutAside.appendChild(source);
            } else {
                const newSlideout = WAU.Slideout._createSlideoutEl("right", "store-availability", slideoutContainer);
                newSlideout.appendChild(source);
            }
            WAU.Slideout.init("store-availability");
            const storeAvailabilityModalProductTitle = document.querySelector('[data-store-availability-modal-product-title]');
            storeAvailabilityModalProductTitle.textContent = title;
        });
    }
})();
theme.ProductRecommendations = (function() {
    function ProductRecommendations() {
        var loadProductRecommendationsIntoSection = function() {
            var container = document.querySelector(".js-product-rec-wrapper");
            if (!container) return false;
            var baseUrl = container.dataset.baseUrl;
            if (container === null) {
                return;
            }
            var productId = container.dataset.productId;
            var sectionId = container.dataset.sectionId;
            var recommendationsSectionUrl = baseUrl + '?section_id=' + sectionId + '&product_id=' + productId;
            fetch(recommendationsSectionUrl).then(function(response) {
                return response.text();
            }).then(function(productHtml) {
                if (productHtml.trim() === '') return;
                container.innerHTML = productHtml;
                container.innerHTML = container.firstElementChild.innerHTML;
            });
        }
        document.addEventListener("shopify:section:select", function(event) {
            if (event.detail.sectionId.includes("product-recommendations")) {
                loadProductRecommendationsIntoSection();
            }
        });
        loadProductRecommendationsIntoSection();
    }
    return ProductRecommendations;
})();
theme.Slideshow = (function() {
    function Slideshow(container) {
        const slideshows = document.querySelectorAll('.js-slideshow');
        slideshows.forEach(Slideshow => {
            const flktyData = Slideshow.getAttribute('data-flickity');
            const flktyOptions = JSON.parse(flktyData);
            new Flickity(Slideshow, flktyOptions);
        });
    }
    return Slideshow;
})();
theme.Slideshow.prototype = _.assignIn({}, theme.Slideshow.prototype, {
    onLoad: function(event) {
        const Slideshow = event.target.closest('.js-slideshow');
        const flktyData = Slideshow.getAttribute('data-flickity');
        const flktyOptions = JSON.parse(flktyData);
        new Flickity('.js-slideshow', flktyOptions);
    },
    onBlockSelect: function(event) {
        const Slideshow = event.target.closest('.js-slideshow');
        const flkty = Flickity.data(Slideshow);
        const Slide = event.target.getAttribute("data-slider-index");
        flkty.select(Slide);
        flkty.pausePlayer();
    },
    onBlockDeselect: function() {
        const Slideshow = event.target.closest('.js-slideshow');
        const flkty = Flickity.data(Slideshow);
        flkty.unpausePlayer();
    }
});
theme.FeaturedCollections = (function() {
    function FeaturedCollections(container) {
        const Carousels = document.querySelectorAll('.js-collection-carousel');
        if (!Carousels) {
            return false;
        }
        Carousels.forEach(Carousel => {
            const flktyData = Carousel.getAttribute('data-flickity');
            const flktyOptions = JSON.parse(flktyData);
            new Flickity(Carousel, flktyOptions);
        });
        document.addEventListener('shopify:section:unload', function(event) {
            const Carousel = event.target.closest('.js-carousel');
            if (!Carousel) {
                return false;
            }
            const flkty = Flickity.data(Carousel);
            flkty.destroy();
        });
        document.addEventListener('shopify:section:load', function(event) {
            const Carousel = event.target.closest('.js-carousel');
            if (!Carousel) {
                return false;
            }
            const flktyData = Carousel.getAttribute('data-flickity');
            const flktyOptions = JSON.parse(flktyData);
            new Flickity('.js-carousel', flktyOptions);
        });
    }
    FeaturedCollections.prototype = _.assignIn({}, FeaturedCollections.prototype, {});
    return FeaturedCollections;
})();
theme.Password = (function() {
    function Password(container) {
        document.querySelector('.login').addEventListener('click', function(event) {
            event.preventDefault();
            theme.Helpers.showHide('login-form', 'register-form');
        });
        document.querySelector('.register').addEventListener('click', function(event) {
            event.preventDefault();
            theme.Helpers.showHide('register-form', 'login-form');
        });
    }
    Password.prototype = _.assignIn({}, Password.prototype, {});
    return Password;
})();
theme.Pages = (function() {
    function Pages(container) {
        (function locationFilters() {
            var filters = container.querySelector('.location-filters');
            if (!filters) return false;
            var tags = filters.querySelectorAll('[data-location-tag]');
            var clear = filters.querySelector('[data-location-clear]');
            tags.forEach(function(tag) {
                tag.addEventListener("click", function(event) {
                    event.preventDefault();
                    var currentTag = this.innerHTML.toString().trim(),
                        hideTags = container.querySelectorAll('[data-item-tags]'),
                        buttons = container.querySelectorAll('[data-location-tag]'),
                        showTags = container.querySelectorAll('[data-item-tags="' + currentTag + '"]');
                    hideTags.forEach(function(hideTag) {
                        hideTag.classList.add("hide");
                    });
                    buttons.forEach(function(button) {
                        button.classList.remove("selected");
                    });
                    showTags.forEach((showTag) => {
                        showTag.classList.remove("hide");
                        this.classList.add("selected");
                    });
                    AOS.refresh();
                });
            });
            clear.addEventListener("click", function(event) {
                event.preventDefault();
                container.querySelectorAll('[data-item-tags]').forEach(function(element) {
                    element.classList.remove("hide");
                });
                container.querySelectorAll('[data-location-tag]').forEach(function(element) {
                    element.classList.remove("selected");
                });
                AOS.refresh();
            });
        })();
    }
    return Pages;
})();
theme.Giftcard = (function() {
    function printContent(el) {
        var restorepage = document.querySelector('body').innerHTML;
        const printcontent = document.querySelector('#' + el).cloneNode(true);
        document.querySelector('body').innerHTML = '';
        document.querySelector('body').appendChild(printcontent);
        window.print();
        document.querySelector('body').innerHTML = restorepage;
    }
})();
theme.MobileNav = (function() {
    function mobileNav(container) {
        var sectionId = container.getAttribute('data-section-id');
        WAU.Slideout.init("mobile-navigation");
        if (!document.querySelector('.mobile-nav__mobile-header .js-mini-cart-trigger')) return false;
        document.querySelector('.mobile-nav__mobile-header .js-mini-cart-trigger').addEventListener("click", function() {
            WAU.Slideout._closeByName("mobile-navigation");
        });
    }
    mobileNav.prototype = _.assignIn({}, mobileNav.prototype, {
        onSelect: function() {
            WAU.Slideout._openByName("mobile-navigation");
        },
        onDeselect: function() {
            WAU.Slideout._closeByName("mobile-navigation");
        },
        onBlockSelect: function() {
            WAU.Slideout._openByName("mobile-navigation");
        }
    });
    return mobileNav;
})();
theme.MailingPopup = (function() {
    const Popup = (function() {
        const defaults = {
            selectors: {
                popupContainer: ".newsletter__popup-container",
                popupOverlay: ".newsletter__popup-overlay",
                popupCloseButton: ".newsletter__popup-container-close"
            },
            classes: {
                visible: "is-visible",
            },
            viewportWidth: 740,
            overlay: true,
            defaultFrequency: 5,
            defaultPopupDelay: 5000,
            cookieSetName: "popupShown",
            debug: false,
            escape: true,
            successMessage: false
        };
        let lastFocus, popupTestMode, popupFrequency;
        const publicAPIs = {};
        const checkURLQueryString = () => {
            if (settings.debug) {
                console.log(`checkURLQueryString() ran`);
            }
            if (settings.successMessage) {
                const urlParams = new URLSearchParams(location.search);
                if (urlParams.get('customer_posted') == 'true') {
                    return true;
                }
            }
            return false;
        };
        const getViewportWidth = () => window.innerWidth || document.documentElement.clientWidth;
        const handleOverlayEvent = (event) => {
            if (event.target === document.querySelector(`${settings.selectors.popupOverlay}.${settings.classes.visible}`)) {
                publicAPIs.close();
            }
        };
        const handleEscapeKeyboardEvent = (event) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                publicAPIs.close();
            }
        };
        const handleCloseButtonEvent = (event) => {
            publicAPIs.close(event);
        };
        const themeEditorCheck = () => Shopify.designMode;
        publicAPIs.open = () => {
            if (getViewportWidth() < settings.viewportWidth) {
                return;
            }
            if (settings.overlay && document.querySelector(settings.selectors.popupOverlay)) document.querySelector(settings.selectors.popupOverlay).classList.add(settings.classes.visible);
            if (document.querySelector(settings.selectors.popupContainer)) {
                document.querySelector(settings.selectors.popupContainer).style.display = "block";
            }
            if (themeEditorCheck() !== true) {
                Cookies.set(settings.cookieSetName, 'yes', {
                    expires: popupFrequency
                });
            }
            if (typeof theme.a11yHelpers.focusOnElement === 'function') {
                theme.a11yHelpers.focusOnElement(document.querySelector(settings.selectors.popupContainer));
            }
        };
        publicAPIs.close = event => {
            if (document.querySelector(settings.selectors.popupContainer)) document.querySelector(settings.selectors.popupContainer).style.display = "none";
            if (settings.overlay && document.querySelector(settings.selectors.popupOverlay)) document.querySelector(settings.selectors.popupOverlay).classList.remove(settings.classes.visible);
            if (event) event.preventDefault();
            if (lastFocus) lastFocus.focus();
        };
        publicAPIs.init = (options) => {
            settings = Object.assign({}, defaults, options);
            popupFrequency = document.querySelector(settings.selectors.popupContainer).getAttribute('data-popup-frequency') ? Number(document.querySelector(settings.selectors.popupContainer).getAttribute('data-popup-frequency')) : settings.defaultFrequency;
            const popupDelayAttribute = document.querySelector(settings.selectors.popupContainer).getAttribute('data-popup-delay');
            let popupDelay = (Number(popupDelayAttribute) != 0) ? Number(popupDelayAttribute) * 1000 : settings.defaultPopupDelay;
            const popupCloseEl = document.querySelector(settings.selectors.popupCloseButton);
            if (!popupCloseEl) {
                if (settings.debug) console.log('err. no popup close button');
            }
            const popupEnabledAttribute = document.querySelector(settings.selectors.popupContainer).getAttribute('data-popup-enabled');
            const popupEnabled = popupEnabledAttribute == 'true' ? true : false;
            popupCloseEl.addEventListener('click', handleCloseButtonEvent)
            if (settings.escape) {
                document.addEventListener('keyup', handleEscapeKeyboardEvent);
            }
            if (settings.overlay) {
                document.addEventListener('click', handleOverlayEvent);
            }
            if (themeEditorCheck() || !popupEnabled) return;
            if (checkURLQueryString()) {
                popupDelay = 10;
            }
            setTimeout(function() {
                if (checkURLQueryString()) {
                    lastFocus = document.activeElement;
                    publicAPIs.open();
                } else {
                    const popUpShownCookie = Cookies.get(settings.cookieSetName);
                    if (!popUpShownCookie) {
                        lastFocus = document.activeElement;
                        publicAPIs.open();
                    }
                }
            }, popupDelay);
        };
        return publicAPIs;
    })();

    function MailingPopup(container) {
        Popup.init({
            selectors: {
                popupContainer: ".js-popup",
                popupOverlay: ".js-popup-overlay",
                popupCloseButton: ".js-popup-close",
            },
            overlay: false,
            successMessage: true
        });
    };
    MailingPopup.prototype = _.assignIn({}, MailingPopup.prototype, {
        onSelect: function() {
            Popup.open();
        },
        onDeselect: function() {
            Popup.close();
        }
    });
    return MailingPopup;
})();
theme.MasonryGallery = (function() {
    function MasonryGallery(container) {
        const MasonrySection = (function() {
            const Constructor = function(selector, options) {
                let publicAPIs = {};
                const defaults = {
                    selectors: {
                        grid: '.js-masonry-grid',
                        carousel: ".js-carousel",
                        flktyPrevBtn: ".flickity-prev-next-button.previous",
                        flktyPrevSvg: ".flickity-prev-next-button.previous svg",
                        flktyNextBtn: ".flickity-prev-next-button.next",
                        flktyNextSvg: ".flickity-prev-next-button.next svg",
                        themePrevSvg: ".js-masonry-carousel-prev",
                        themeNextSvg: ".js-masonry-carousel-next",
                        noFoucClass: "no-fouc"
                    },
                    masonryGrid: {
                        mediaQuery: "(max-width: 1024px)",
                        enabled: true,
                        options: {
                            itemSelector: ".grid-item",
                            columnWidth: ".grid-sizer",
                            percentPosition: true,
                            gutter: ".gutter-sizer"
                        }
                    },
                };
                let settings;
                let msnry;
                let grid;
                const getGrid = function() {
                    return grid;
                }
                const setGrid = function(node) {
                    grid = node;
                }
                const handleOrientationChange = (event) => {
                    let elem = getGrid();
                    if (typeof msnry === 'object') {
                        msnry.destroy();
                    }
                    const options = {
                        itemSelector: settings.masonryGrid.options.itemSelector,
                        columnWidth: settings.masonryGrid.options.columnWidth,
                        percentPosition: settings.masonryGrid.options.percentPosition,
                        gutter: settings.masonryGrid.options.gutter
                    };
                    if (!event.matches) {
                        options.horizontalOrder = true;
                    }
                    msnry = new Masonry(elem, options);
                };
                const setUpEventHandlers = (container, instance) => {
                    if (setCarouselPreviousButton(container, instance, settings.selectors.themePrevSvg) && setCarouselNextButton(container, instance, settings.selectors.themeNextSvg)) {
                        return true;
                    } else {
                        return false;
                    }
                };
                const setCarouselPreviousButton = (container, instance, selector) => {
                    if (!instance || !selector) {
                        console.log('Error. must provide a selector.');
                        return false;
                    }
                    container.querySelectorAll(selector).forEach(button => {
                        button.addEventListener('click', event => {
                            instance.previous(true);
                        });
                    });
                    return true;
                };
                const setCarouselNextButton = (container, instance, selector) => {
                    if (!instance || !selector) {
                        console.log('Error. must provide a selector.');
                        return false;
                    }
                    container.querySelectorAll(selector).forEach(button => {
                        button.addEventListener('click', event => {
                            instance.next(true);
                        })
                    });
                    return true;
                };
                const setCarousel = (node) => {
                    carousel = node;
                };
                const getCarousel = () => {
                    return carousel;
                };
                publicAPIs.removeNoFoucClass = (container) => {
                    if (!container) {
                        console.log('Error. Must provide a container element to remove the class from');
                        return false;
                    }
                    if (container.classList.contains('no-fouc')) {
                        container.classList.remove('no-fouc')
                    }
                }
                publicAPIs.initCarousel = container => {
                    if (!container) {
                        console.log('Error. Must provide a container element to initialize carousel');
                        return false;
                    }
                    publicAPIs.removeNoFoucClass(container);
                    const carousel = container.querySelector(settings.selectors.carousel);
                    let flkty = new Flickity(carousel, {
                        wrapAround: true,
                        contain: true,
                        pageDots: false,
                        autoPlay: false,
                        prevNextButtons: true,
                        selectedAttraction: 0.01,
                        dragThreshold: 5,
                        adaptiveHeight: false,
                        imagesLoaded: true
                    });
                    setUpEventHandlers(container, flkty);
                    setCarousel(flkty);
                };
                publicAPIs.init = (container, options) => {
                    if (!container) {
                        console.log('Error. Must provide a container to initialize the Masonry Gallery section');
                        return false;
                    }
                    settings = Object.assign({}, defaults, options);
                    publicAPIs.initCarousel(container);
                    let grid = container.querySelector(settings.selectors.grid);
                    setGrid(grid);
                    const mediaQueryList = window.matchMedia(settings.masonryGrid.mediaQuery);
                    handleOrientationChange(mediaQueryList);
                    mediaQueryList.addListener(handleOrientationChange);
                }
                publicAPIs.init(selector, options);
                return publicAPIs;
            };
            return Constructor;
        })();
        if (!container) {
            console.log('Error, no masonry section container');
        }
        const MyMasonrySection = new MasonrySection(container);
    }
    const scrollBlockIntoView = (element) => {
        if (!element) {
            console.log('Error. Must provide an element to scroll to.');
            return false;
        }
        setTimeout(() => {
            element.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 500)
    };
    MasonryGallery.prototype = _.assignIn({}, MasonryGallery.prototype, {
        onBlockSelect: function(event) {
            console.warn('onBlockSelect');
            console.log(`this: ${this}`);
            console.dir(this);
            console.log(`event.target: ${event.target}`);
            console.dir(event.target);
            scrollBlockIntoView(event.target);
        },
        onBlockDeselect: function(event) {
            console.warn('onBlockDeselect');
            console.log(`this: ${this}`);
            console.dir(this);
            console.log(`event.target: ${event.target}`);
            console.dir(event.target);
            scrollBlockIntoView(event.target);
        }
    });
    return MasonryGallery;
})();
theme.Footer = (function() {
    var selectors = {
        disclosureLocale: '[data-disclosure-locale]',
        disclosureCurrency: '[data-disclosure-currency]'
    };

    function Footer(container) {
        this.container = container;
        this.cache = {};
        this.cacheSelectors();
        if (this.cache.localeDisclosure) {
            this.localeDisclosure = new theme.Disclosure(this.cache.localeDisclosure);
        }
        if (this.cache.currencyDisclosure) {
            this.currencyDisclosure = new theme.Disclosure(this.cache.currencyDisclosure);
        }
    }
    Footer.prototype = _.assignIn({}, Footer.prototype, {
        cacheSelectors: function() {
            this.cache = {
                localeDisclosure: this.container.querySelector(selectors.disclosureLocale),
                currencyDisclosure: this.container.querySelector(selectors.disclosureCurrency)
            };
        },
        onUnload: function() {
            if (this.cache.localeDisclosure) {
                this.localeDisclosure.destroy();
            }
            if (this.cache.currencyDisclosure) {
                this.currencyDisclosure.destroy();
            }
        }
    });
    return Footer;
})();
theme.CustomerTemplates = (function() {
    function customerAddressForm() {
        var newAddressForm = document.getElementById('AddressNewForm');
        if (!newAddressForm) {
            return;
        }
        if (Shopify) {
            new Shopify.CountryProvinceSelector('address_country_new', 'address_province_new', {
                hideElement: 'address_province_container_new'
            });
        }
        document.querySelectorAll('.address-country-option').forEach(function(option) {
            var formId = option.dataset.formId;
            var countrySelector = 'address_country_' + formId;
            var provinceSelector = 'address_province_' + formId;
            var containerSelector = 'address_province_container_' + formId;
            new Shopify.CountryProvinceSelector(countrySelector, provinceSelector, {
                hideElement: containerSelector
            });
        });
        document.addEventListener('shopify:section:select', (event) => {
            if (Shopify) {
                new Shopify.CountryProvinceSelector('address_country_new', 'address_province_new', {
                    hideElement: 'address_province_container_new'
                });
            }
            document.querySelectorAll('.address-country-option').forEach(function(option) {
                var formId = option.dataset.formId;
                var countrySelector = 'address_country_' + formId;
                var provinceSelector = 'address_province_' + formId;
                var containerSelector = 'address_province_container_' + formId;
                new Shopify.CountryProvinceSelector(countrySelector, provinceSelector, {
                    hideElement: containerSelector
                });
            });
        });
    }
    return {
        init: function() {
            customerAddressForm();
        }
    };
})();
WAU.Accordion.init();
(function helperRteFormat() {
    theme.Helpers.wrapIframe({
        iframes: document.querySelectorAll('.rte iframe[src*="youtube.com/embed"]'),
        iframeWrapperClass: 'video-wrapper'
    });
    theme.Helpers.wrapIframe({
        iframes: document.querySelectorAll('.rte iframe[src*="player.vimeo"]'),
        iframeWrapperClass: 'video-wrapper'
    });
    theme.Helpers.wrapTable({
        tables: document.querySelectorAll('.rte table'),
        tableWrapperClass: 'table-wrapper'
    });
})();
(function helperThemeVersion() {
    log = function() {
        var args = Array.prototype.slice.call(arguments);
        args.unshift(console);
        return Function.prototype.bind.apply(console.log, args);
    }
    log("Foodie Version 2.3 by Underground", {
        bar: 1
    })();
})();
(function initModals() {
    if (document.querySelector('[data-wau-modal-content="new-address"]')) {
        WAU.Modal.init("new-address");
    }
    var modals = document.querySelectorAll('[data-wau-modal-content]');
    if (!modals) return false;
    modals.forEach((item, i) => {
        var contentType = item.dataset.wauModalContent;
        if (contentType.includes("edit-address")) {
            WAU.Modal.init(item.dataset.wauModalContent);
        }
    });
})();
(function animationAOS() {
    AOS.init({
        easing: 'ease-out-quad',
        once: false,
        mirror: false,
        offset: 50
    });
    document.addEventListener('lazybeforeunveil', function(e) {
        AOS.init();
    });
    document.addEventListener('shopify:block:select', function(e) {
        AOS.refreshHard();
    });
})();
(function selectBoxes() {
    function initSelects() {
        var x, i, j, l, ll, selElmnt, a, b, c;
        x = document.getElementsByClassName("select-wrapper");
        l = x.length;
        for (i = 0; i < l; i++) {
            selElmnt = x[i].getElementsByTagName("select")[0];
            ll = selElmnt.length;
            a = document.createElement("DIV");
            a.setAttribute("class", "select-selected");
            a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
            x[i].appendChild(a);
            b = document.createElement("DIV");
            b.setAttribute("class", "select-items select-hide");
            for (j = 1; j < ll; j++) {
                c = document.createElement("DIV");
                c.innerHTML = selElmnt.options[j].innerHTML;
                c.setAttribute("data-value", selElmnt.options[j].value);
                c.addEventListener("click", function(e) {
                    var y, i, k, s, h, sl, yl;
                    s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                    sl = s.length;
                    h = this.parentNode.previousSibling;
                    for (i = 0; i < sl; i++) {
                        if (s.options[i].value == this.dataset.value) {
                            s.selectedIndex = i;
                            s.dispatchEvent(new Event('change'));
                            h.innerHTML = this.innerHTML;
                            y = this.parentNode.getElementsByClassName("same-as-selected");
                            yl = y.length;
                            for (k = 0; k < yl; k++) {
                                y[k].removeAttribute("class");
                            }
                            this.setAttribute("class", "same-as-selected");
                            break;
                        }
                    }
                    h.click();
                });
                b.appendChild(c);
            }
            x[i].appendChild(b);
            a.addEventListener("click", function(e) {
                e.stopPropagation();
                closeAllSelect(this);
                this.nextSibling.classList.toggle("select-hide");
                this.classList.toggle("select-arrow-active");
            });
        }

        function closeAllSelect(elmnt) {
            var x, y, i, xl, yl, arrNo = [];
            x = document.getElementsByClassName("select-items");
            y = document.getElementsByClassName("select-selected");
            xl = x.length;
            yl = y.length;
            for (i = 0; i < yl; i++) {
                if (elmnt == y[i]) {
                    arrNo.push(i)
                } else {
                    y[i].classList.remove("select-arrow-active");
                }
            }
            for (i = 0; i < xl; i++) {
                if (arrNo.indexOf(i)) {
                    x[i].classList.add("select-hide");
                }
            }
        }
        document.addEventListener("click", closeAllSelect);
    }

    function destroySelects() {
        document.querySelectorAll(".select-selected").forEach((item, i) => {
            item.remove();
        });
        document.querySelectorAll(".select-items").forEach((item, i) => {
            item.remove();
        });
    }
    document.addEventListener("DOMContentLoaded", initSelects);
    document.addEventListener("shopify:section:select", function() {
        destroySelects();
        initSelects();
    });
})();
(function formValidation() {
    var validateForm = function(submitEvent) {
        if (!submitEvent.target.checkValidity()) {
            submitEvent.preventDefault();
            submitEvent.stopImmediatePropagation();
            submitEvent.stopPropagation();
            var form = submitEvent.target,
                elements = form.elements;
            for (var index = 0, len = elements.length; index < len; index++) {
                var element = elements[index];
                if (element.willValidate === true && element.validity.valid !== true) {
                    var message = element.validationMessage,
                        parent = element.parentNode,
                        div = document.createElement('small');
                    div.appendChild(document.createTextNode(message));
                    div.classList.add('validation-message');
                    parent.insertBefore(div, element.nextSibling);
                    element.focus();
                    break;
                }
            }
        } else {
            return true;
        }
    };
    document.addEventListener('DOMContentLoaded', function() {
        var forms = document.querySelectorAll('form');
        for (var index = forms.length - 1; index >= 0; index--) {
            var form = forms[index];
            form.noValidate = true;
            form.addEventListener('submit', validateForm);
        }
    });
})();
(function initPredictiveSearch() {
    const selectors = {
        input: 'input[type="search"]',
        results: '#predictive-search'
    };
    class PredictiveSearch extends HTMLElement {
        constructor() {
            super();
            this.featureDetections();
            this.routesPredictiveSearchURL = this.dataset.routes;
            this.showOnlyProducts = this.dataset.showOnlyProducts;
            this.resultsPerResource = this.dataset.resultsPerResource;
            this.inputSelector = this.dataset.inputSelector;
            this.resultsSelector = this.dataset.resultsSelector;
            this.input = this.querySelector(this.inputSelector) ? this.querySelector(this.inputSelector) : this.querySelector(selectors.input);
            this.predictiveSearchResults = this.querySelector(this.resultsSelector) ? this.querySelector(this.resultsSelector) : this.querySelector(selectors.results);
            this.input.addEventListener('input', theme.Helpers.debounce((event) => {
                this.onChange(event);
            }, 300).bind(this));
            this.addEventListener('focusout', this.onFocusOut.bind(this));
        }
        featureDetections() {
            if (!this.isFunction(theme.Helpers.debounce)) {
                console.log('Error. Missing debouce theme helper method for predictive search.');
                return false;
            }
            if (!window.fetch) {
                console.log('Error. Web browser does not support fetch required for predictive search');
                return false;
            }
        }
        getTypeOf(value) {
            return Object.prototype.toString.call(value);
        }
        isFunction(value) {
            return this.getTypeOf(value) === '[object Function]';
        }
        onChange() {
            const searchTerm = this.input.value.trim();
            if (!searchTerm.length) {
                this.close();
                return;
            }
            this.getSearchResults(searchTerm);
        }
        getSearchResults(searchTerm) {
            let resourceTypes = (this.showOnlyProducts === 'true') ? 'product' : 'product,collection,article,page';
            let resourceLimit = this.resultsPerResource;
            const SECTION_ID = 'predictive-search';
            fetch(`${this.routesPredictiveSearchURL}?q=${searchTerm}&resources[type]=${resourceTypes}&resources[limit]=${resourceLimit}&section_id=${SECTION_ID}`).then((response) => {
                if (!response.ok) {
                    var error = new Error(response.status);
                    this.close();
                    throw error;
                }
                return response.text();
            }).then((text) => {
                const resultsMarkup = new DOMParser().parseFromString(text, 'text/html').querySelector('#shopify-section-predictive-search').innerHTML;
                this.predictiveSearchResults.innerHTML = resultsMarkup;
                this.open();
            }).catch((error) => {
                this.close();
                throw error;
            });
        }
        open() {
            if (typeof theme.Helpers.fadeIn === 'function') {
                theme.Helpers.fadeIn(this.predictiveSearchResults);
            } else {
                this.predictiveSearchResults.style.display = 'block';
            }
        }
        close() {
            if (typeof theme.Helpers.fadeOut === 'function') {
                theme.Helpers.fadeOut(this.predictiveSearchResults);
            } else {
                this.predictiveSearchResults.style.display = 'none';
            }
        }
        onFocusOut() {
            setTimeout(() => {
                if (!this.contains(document.activeElement)) this.close();
            })
        }
    }
    customElements.define('predictive-search', PredictiveSearch);
})();
(function sectionsRegister() {
    document.addEventListener("DOMContentLoaded", function() {
        var sections = new theme.Sections();
        sections.register('header-section', theme.Header);
        sections.register('footer-section', theme.Footer);
        sections.register('collection', theme.Collection);
        sections.register('search-section', theme.Search);
        sections.register('product', theme.Product);
        sections.register('store-availability', theme.StoreAvailability);
        sections.register('product-recommendations', theme.ProductRecommendations);
        sections.register('mobile-navigation', theme.MobileNav);
        sections.register('slideshow-section', theme.Slideshow);
        sections.register('featured-collections', theme.FeaturedCollections);
        sections.register('image-carousel', theme.Carousel);
        sections.register('password-page', theme.Password);
        sections.register('page-section', theme.Pages);
        sections.register('giftcard-page', theme.Giftcard);
        sections.register('mailing-popup', theme.MailingPopup);
        sections.register('masonry-gallery', theme.MasonryGallery);
    });
})();