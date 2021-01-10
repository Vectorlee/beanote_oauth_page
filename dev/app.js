var mark = {};
mark.success = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2" class="status success">\n<circle class="path circle" fill="none" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />\n<polyline class="path check" fill="none" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10"\n  points="100.2,40.2 51.5,88.8 29.8,67.5 " />\n</svg>';

mark.failure = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2" class="status error">\n<circle class="path circle" fill="none" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />\n<line class="path line" fill="none" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="34.4"\n  y1="37.9" x2="95.8" y2="92.3" />\n<line class="path line" fill="none" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="95.8"\n  y1="38" x2="34.4" y2="92.2" />\n</svg>';

var icon = {};
icon['no where'] = '\n<svg xmlns="http://www.w3.org/2000/svg" width="250"  viewBox="0 0 192.756 192.756"><g fill-rule="evenodd" clip-rule="evenodd"><path fill="#fff" d="M0 0h192.756v192.756H0V0z"/><path d="M5.669 81.215v12.65h37.003c4.301 0 9.796-3.977 9.796-10.556 0-2.646 1.012-4.372-2.098-7.872l-4.733-5.608c-2.712-2.53.324-2.53 2.602-2.53h15.623v26.566h12.39V67.299h16.699V55.922H38.877c-6.579 0-9.796 6.317-9.615 9.606.182 3.289.787 7.427 6.254 12.398 4.987 4.533-2.469 3.289-3.218 3.289H5.669zM120.348 55.922H100.36L89.155 93.866h12.47l2.023-5.313h13.156l1.953 5.313h12.215l-10.624-37.944zm-13.916 23.522l4.301-13.916 4.049 13.916h-8.35zM170.443 81.215c-4.807 0-4.807-1.771-4.807-1.771 4.119 0 7.771-6.001 7.771-12.145s-6-11.377-10.809-11.377h-26.891v37.944h13.664v-12.65s5.818 6.831 8.854 9.614c3.037 2.783 3.289 3.036 7.41 3.036h21.449v-12.65c.002-.001-11.834-.001-16.641-.001zm-12.398-8.855h-8.672v-6.832h8.672c3.976 0 4.664 6.832 0 6.832zM5.669 98.672h13.979l3.542 12.652 3.289-12.652h14.675l3.795 12.652 3.796-12.652h12.144l-11.133 37.953H38.624l-4.878-17.965-5.496 17.965H16.865L5.669 98.672zM89.578 98.891H69.59l-11.204 37.943h12.469l2.024-5.312h13.157l1.953 5.312h12.216L89.578 98.891zm-13.915 23.521l4.301-13.916 4.048 13.916h-8.349zM170.695 110.059c-2.275 0-4.756.266-2.043 2.795l4.734 5.609c3.109 3.5 3.059 4.959 3.059 7.607 0 6.578-6.508 10.555-10.809 10.555l-29.896.201c-4.119 0-4.371-.252-7.408-3.035-3.035-2.783-8.855-9.615-8.855-9.615v12.65h-13.662V98.883h26.891c4.807 0 10.809 5.234 10.809 11.377 0 6.145-3.652 12.145-7.773 12.145 0 0 1.812 1.822 4.848 1.822 3.037 0 14.727.012 14.727.012.748 0 8.203 1.244 3.217-3.289-5.467-4.971-6.072-9.107-6.254-12.396s2.662-9.881 9.238-9.881h25.57v11.387h-16.393v-.001zm-42.545 5.261h-8.674v-6.832h8.674c3.977 0 4.664 6.832 0 6.832z"/></g></svg>\n';
icon.google = ' <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 596 194.5" width="250" height="81">\n<style>\n  .st0 {\n    fill: #3780ff\n  }\n\n  .st1 {\n    fill: #38b137\n  }\n\n  .st2 {\n    fill: #fa3913\n  }\n\n  .st3 {\n    fill: #fcbd06\n  }\n</style>\n<path class="st0"\n  d="M73.4 0h5.3c18.4.4 36.5 7.8 49.5 20.9-4.8 4.9-9.7 9.6-14.4 14.5-7.3-6.6-16.1-11.7-25.7-13.5-14.2-3-29.5-.3-41.4 7.8C33.7 38.2 24.9 52.6 23 68c-2.1 15.2 2.2 31.2 12.1 43 9.5 11.5 24 18.7 39 19.2 14 .8 28.6-3.5 38.8-13.3 8-6.9 11.7-17.4 12.9-27.6-16.6 0-33.2.1-49.8 0V68.7h69.9c3.6 22.1-1.6 47-18.4 62.8-11.2 11.2-26.7 17.8-42.5 19.1-15.3 1.5-31.1-1.4-44.7-8.8C24 133.1 11 118.4 4.6 101.1c-6-15.9-6.1-33.9-.5-49.9C9.2 36.6 19 23.7 31.6 14.7 43.7 5.8 58.4.9 73.4 0z" />\n<path class="st1" d="M474.4 5.2h21.4V148c-7.1 0-14.3.1-21.4-.1.1-47.5 0-95.1 0-142.7z" />\n<path class="st2"\n  d="M193.5 54.7c13.2-2.5 27.5.3 38.4 8.2 9.9 7 16.8 18 18.9 30 2.7 13.9-.7 29.1-9.7 40.1-9.7 12.3-25.6 18.9-41.1 17.9-14.2-.8-28-7.9-36.4-19.5-9.5-12.8-11.8-30.4-6.6-45.4 5.2-16.1 19.9-28.4 36.5-31.3m3 19c-5.4 1.4-10.4 4.5-14 8.9-9.7 11.6-9.1 30.5 1.6 41.3 6.1 6.2 15.3 9.1 23.8 7.4 7.9-1.4 14.8-6.7 18.6-13.7 6.6-11.9 4.7-28.3-5.4-37.6-6.5-6-16-8.5-24.6-6.3z" />\n<path class="st3"\n  d="M299.5 54.7c15.1-2.9 31.6 1.3 42.9 11.9 18.4 16.5 20.4 47.4 4.7 66.4-9.5 12-24.9 18.6-40.1 17.9-14.5-.4-28.8-7.6-37.4-19.5-9.7-13.1-11.8-31.1-6.3-46.4 5.5-15.6 19.9-27.5 36.2-30.3m3 19c-5.4 1.4-10.4 4.5-14 8.8-9.6 11.4-9.2 30 1.1 40.9 6.1 6.5 15.6 9.7 24.4 7.9 7.8-1.5 14.8-6.7 18.6-13.7 6.5-12 4.6-28.4-5.6-37.7-6.5-6-16-8.4-24.5-6.2z" />\n<path class="st0"\n  d="M389.4 60.5c11.5-7.2 26.8-9.2 39.2-3 3.9 1.7 7.1 4.6 10.2 7.5.1-2.7 0-5.5.1-8.3 6.7.1 13.4 0 20.2.1V145c-.1 13.3-3.5 27.4-13.1 37.1-10.5 10.7-26.6 14-41.1 11.8-15.5-2.3-29-13.6-35-27.9 6-2.9 12.3-5.2 18.5-7.9 3.5 8.2 10.6 15.2 19.5 16.8 8.9 1.6 19.2-.6 25-8 6.2-7.6 6.2-18 5.9-27.3-4.6 4.5-9.9 8.5-16.3 10-13.9 3.9-29.2-.9-39.9-10.3-10.8-9.4-17.2-23.9-16.6-38.3.3-16.3 9.5-32 23.4-40.5m20.7 12.8c-6.1 1-11.8 4.4-15.7 9.1-9.4 11.2-9.4 29.1.1 40.1 5.4 6.5 14.1 10.1 22.5 9.2 7.9-.8 15.2-5.8 19.1-12.7 6.6-11.7 5.5-27.6-3.4-37.8-5.5-6.3-14.3-9.4-22.6-7.9z" />\n<path class="st2"\n  d="M521.5 65.6c12-11.2 30.5-15 45.9-9.1C582 62 591.3 75.9 596 90.2c-21.7 9-43.3 17.9-65 26.9 3 5.7 7.6 10.9 13.8 13 8.7 3.1 19.1 2 26.4-3.8 2.9-2.2 5.2-5.1 7.4-7.9 5.5 3.7 11 7.3 16.5 11-7.8 11.7-20.9 19.9-35 21.2-15.6 1.9-32.2-4.1-42.3-16.3-16.6-19.2-15-51.4 3.7-68.7m10.7 18.5c-3.4 4.9-4.8 10.9-4.7 16.8 14.5-6 29-12 43.5-18.1-2.4-5.6-8.2-9-14.1-9.9-9.5-1.7-19.4 3.4-24.7 11.2z" />\n</svg>';

icon.facebook = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 302.9 114.1" width="250" height="94">\n<path fill="#3a66a5" d="M0 0h302.4v113.5H0z" />\n<g fill="#fff">\n  <path\n    d="M55.3 36.3v7.1h-3.9s-3.6-.5-3.6 2.9V52h7.5l-.9 7.7h-6.6v21.6h-8.6V59.6h-5.8V52h6.1v-6.5s-.8-3.6 2.4-6.5 7.4-2.7 7.4-2.7h6M76.1 52.1V56c-2.2-2.9-5.3-4.7-8.7-4.7-6.7 0-12.1 5.9-12.1 15.5s5.4 15.5 12.1 15.5c3.4 0 6.6-1.8 8.8-4.8l-.1 3.8h8.3V52.1h-8.3m-.5 17.6c0 2.9-2.5 5.7-5.6 5.7-3.1 0-5.6-2.8-5.6-5.7v-5.6c0-2.9 2.5-5.7 5.6-5.7 3.1 0 5.6 2.8 5.6 5.7v5.6M152.4 81.5v-3.9c2.2 2.9 5.3 4.7 8.7 4.7 6.7 0 12.1-5.9 12.1-15.5s-5.4-15.5-12.1-15.5c-3.4 0-6.6 1.8-8.8 4.8l.1-19.3-8.7 1v43.6l8.7.1m.5-17.6c0-2.9 2.5-5.7 5.6-5.7 3.1 0 5.6 2.8 5.6 5.7v5.6c0 2.9-2.5 5.7-5.6 5.7-3.1 0-5.6-2.8-5.6-5.7v-5.6M103.2 75.2s-6.7.4-6.7-8.3v-.5c0-8.6 6.7-8.3 6.7-8.3 4.5-.1 6.1 1.5 6.1 1.5l2.1-6.3c-3.6-2.7-14.5-3.1-19.4 1.4-4.2 3.9-4.2 10.2-4.2 11.9-.1 1.6-.1 8 4.2 11.9 4.9 4.5 15.8 4.1 19.4 1.4l-2.1-6.3c0 .1-1.6 1.7-6.1 1.6" />\n  <path\n    d="M140.1 69.9s3.5-18.3-13.2-18.4c-16.7-.1-14.3 16.5-14.3 16.5.4 10.1 5 13 13 14s14-2.1 14-2.1l-1.8-5.9s-6.4 2-11.5 1.5c-5.1-.4-4.7-5.7-4.7-5.7h18.5zM121.4 64s-.4-6.5 5.4-6.5c5.8 0 5.4 6.5 5.4 6.5h-10.8M190.5 51.7c-10.9 0-14.5 6.6-14.5 15.3 0 9.3 4.7 15.3 14.5 15.3 8 0 14.5-5.4 14.5-15.3 0-8.5-4.2-15.3-14.5-15.3m5.6 17.8c0 2.9-2.6 5.7-5.7 5.7-3.2 0-5.7-2.8-5.7-5.7v-5.6c0-2.9 2.6-5.7 5.7-5.7 3.2 0 5.7 2.8 5.7 5.7v5.6M222.6 51.7c-10.9 0-14.5 6.6-14.5 15.3 0 9.3 4.7 15.3 14.5 15.3 8 0 14.5-5.4 14.5-15.3 0-8.5-4.2-15.3-14.5-15.3m5.6 17.8c0 2.9-2.6 5.7-5.7 5.7-3.2 0-5.7-2.8-5.7-5.7v-5.6c0-2.9 2.6-5.7 5.7-5.7 3.2 0 5.7 2.8 5.7 5.7v5.6M267.6 81.4l-9.5-14.7 9.1-14.7h-9.3L249 65.2V36.6l-8.7.9v43.9h8.7V66.5l9.6 14.9z" />\n</g>\n</svg>';

icon.beanote = ' <svg width="100%" height="100%" viewBox="0 0 1646 512" version="1.1" xmlns="http://www.w3.org/2000/svg"\nxmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/"\nstyle="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n<g transform="matrix(0.490667,0,0,1.19882,-21.8728,-1.03854)">\n  <path\n    d="M815.057,112.296C815.057,72.322 735.764,39.867 638.096,39.867L254.681,39.867C157.014,39.867 77.72,72.322 77.72,112.296L77.72,328.003C77.72,367.978 157.014,400.432 254.681,400.432L638.096,400.432C735.764,400.432 815.057,367.978 815.057,328.003L815.057,112.296Z"\n    style="fill:rgb(255,204,102);" />\n</g>\n<g transform="matrix(29.904,0,0,29.904,-20653,-7218.02)">\n  <g>\n    <text x="692.759px" y="254.596px"\n      style="font-family:\'ArialRoundedMTBold\', \'Arial Rounded MT Bold\', sans-serif;font-size:12.656px;fill:rgb(76,48,22);">B</text>\n    <text x="703.2px" y="254.596px"\n      style="font-family:\'ArialRoundedMTBold\', \'Arial Rounded MT Bold\', sans-serif;font-size:12.656px;fill:rgb(76,48,22);">eanote</text>\n  </g>\n</g>\n</svg>';

var contactEmail = 'beanote2018@gmail.com';

var message = {
  success: '<span>Connected! <br>  Please click top-right extension button to check sync progress.</span> ',
  failure: '<span>Fail to connect! <br> Please try again. If problem persists, please contact <a href="mailto:' + contactEmail + '">' + contactEmail + '</a>.</span>'
};
var companyName = {
  google: 'Google',
  facebook: 'Facebook'
};

function setCompanyLogoAndName(comp) {
  e = document.getElementById('right-comp');
  e.innerHTML = icon[comp];
  var es = document.getElementsByClassName('company-name');
  for (var i = 0; i < es.length; i++) {
    es[i].textContent = companyName[comp] || comp;
  }
}

function setStatus(result) {
  var textLine = document.getElementById('text-line');
  var status = document.getElementById('status');
  var arrow = document.getElementById('long-arrow');

  textLine.innerHTML = message[result];
  if (result == 'success') {
    arrow.style.display = 'initial';
    document.title = 'Connected!';
  } else {
    document.title = 'Fail to connect!';
    arrow.style.display = 'none';
  }
  history.pushState({}, '', result);

  status.innerHTML = mark[result];
}

function initBeanote() {
  var e = document.getElementById('left-comp');
  e.innerHTML = icon.beanote;
}

function main() {
  initBeanote();
  var oq = new URLSearchParams(document.location.search);
  var comp = oq.get('c') || 'no where';
  setCompanyLogoAndName(comp);
}

window.addEventListener('beanote-auth-success', function () {
  return setStatus('success');
});
window.addEventListener('beanote-auth-failure', function () {
  return setStatus('failure');
});

window.onload = main;