import $ from 'jquery'
import './app4.css'

const $wrap = $("#app4 .wrap")

$wrap.on("mouseenter", () => {
    $wrap.addClass("active")
})
$wrap.on("mouseleave", () => {
    $wrap.removeClass("active")
})