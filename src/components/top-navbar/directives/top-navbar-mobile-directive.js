'use strict';

import '../styles/_top-navbar.scss';

import {TopNavbarController} from '../controllers/topNavbar.controller';

export default function topNavbarMobile() {
  return {
    restrict: 'E',
    template: require('../partials/top-navbar.mobile.html'),
    controller: TopNavbarController
  };
}
