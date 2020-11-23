import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie11';
import 'intersection-observer';
import './polyfills';
import 'html5shiv';
import svgPolyfill from 'svg4everybody';
import jquery from 'jquery';
import select2 from 'select2';
import printJS from 'print-js';

window.$ = window.jQuery = jquery;
window.svg4everybody = svgPolyfill;
window.select2 = select2;
window.printJS = printJS;
