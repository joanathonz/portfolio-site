function menuToggle () {
  var x = document.getElementById('myNavtoggle')
  console.log('insideofmenutoggle')
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}
