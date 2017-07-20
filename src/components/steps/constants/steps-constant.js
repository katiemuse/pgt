export default {
  limit: 0,                   // limits max number of steps
  'tap-to-dismiss': false,
  'close-button': false,
  'newest-on-top': false,
  // 'fade-in': 1000,            // done in css
  // 'on-fade-in': undefined,    // not implemented
  // 'fade-out': 1000,           // done in css
  // 'on-fade-out': undefined,  // not implemented
  // 'extended-time-out': 1000,    // not implemented
  'time-out': 0, // Set timeOut and extendedTimeout to 0 to make it sticky
  'number-classes': {
    one: 'step-one',
    two: 'step-two',
    three: 'step-three',
    four: 'step-four',
    five: 'step-five'
  },
  'body-output-type': 'trustedHtml', // Options: '', 'trustedHtml', 'template', 'templateWithData'
  'body-template': 'stepsBodyTmpl.html',
  'number-class': 'step-one',
  'position-class': 'step-top-right',
  'title-class': 'step-title',
  'message-class': 'step-message',
  'mouseover-timer-stop': false // stop timeout on mouseover and restart timer on mouseout
};
