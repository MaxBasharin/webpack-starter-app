import $ from 'jquery'

$('<h1 />')
.text('jquery')
.css({
    textAlign: 'center',
    color: 'blue'
})
.appendTo($('header'))