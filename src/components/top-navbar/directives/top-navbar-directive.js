'use strict';

import '../styles/_top-navbar.scss';

import {TopNavbarController} from '../controllers/topNavbar.controller';

export default function topNavbar() {
  return {
    restrict: 'E',
    template: require('../partials/top-navbar.html'),
    controller: TopNavbarController
  };
}
