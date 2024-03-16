// const novelsDescription= document.querySelectorAll('.novel__description')

// novelsDescription.forEach((novelDescription)=>{
//   // novelDescription.textContent+= '...'
// })
// function dotdotdot(containersToDotdotdot) {
//   function dotdotdotContainers(containers) {
//       for (var i = 0; i < containers.length; i++) {
//           var cntnr = $jq(containers[i]);
//           cntnr.html('<span>' + cntnr.html().replace(/ /g,'</span> <span>') + '</span>');
//           var words = Array.prototype.slice.call(cntnr.find("span"), 0).reverse();
//           var lastw = null;

//           for (var j = 0; j < words.length; j++) {
//               var w = $jq(words[j]);
//               var wbot = w.height() + w.offset().top;
//               var wleft = w.offset().left;
//               var wright = wleft + w.width();

//               if (wbot <= (cntnr.offset().top + cntnr.height()) && wleft >= (cntnr.offset().left) && wright <= (cntnr.offset().left + cntnr.width())) {
//                   lastw = words.length - j - 1;
//                   break;
//               }
//           }

//           cntnr.html(lastw === null || lastw === (words.length - 1) ? cntnr.text() : (cntnr.text().split(' ').slice(0, lastw).join(' ') + '...'));
//       }
//   }

//   if (containersToDotdotdot instanceof Array) {
//       for (var i = 0; i < containersToDotdotdot.length; i++) {
//           dotdotdotContainers($jq(containersToDotdotdot[i]));
//       }
//   } else {
//       dotdotdotContainers($jq(containersToDotdotdot));
//   }
// }