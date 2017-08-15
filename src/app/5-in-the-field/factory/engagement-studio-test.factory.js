'use strict';

export default function steplog() {
  const log = {
    step1: null,
    emailSent: false,
    wasEmailOpened: false,
    prospectDefaultFieldMatched: false,
    assignedToUser: false,
    engagementEnded: false
  };
  const logService = {};

  logService.getEmailSent = function () {
    return log.emailSent;
  };

  logService.setEmailSent = function (i) {
    log.emailSent = i;
  };

  logService.getWasEmailOpened = function () {
    return log.wasEmailOpened;
  };

  logService.setWasEmailOpened = function (i) {
    log.wasEmailOpened = i;
  };

  logService.getProspectDefaultFieldMatched = function () {
    return log.prospectDefaultFieldMatched;
  };

  logService.setProspectDefaultFieldMatched = function (i) {
    log.prospectDefaultFieldMatched = i;
  };

  logService.getAssignedToUser = function () {
    return log.assignedToUser;
  };

  logService.setAssignedToUser = function (i) {
    log.assignedToUser = i;
  };

  logService.getEngagementEnded = function () {
    return log.engagementEnded;
  };

  logService.setEngagementEnded = function (i) {
    log.engagementEnded = i;
  };

  return logService;
}
