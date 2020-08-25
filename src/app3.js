import $ from 'jquery'
import './app3.css'

const $wrap = $("#app3 .wrap")
console.log($wrap);

$wrap.on('click', () => {
    $wrap.toggleClass('circle')
})