import $ from 'jquery'
import './app2.css'


const $tabBar = $('#app2 .tab-bar')
const $tabContent = $("#app2 .tab-content")

$tabBar.on('click', "li", e => {
    const $li = $(e.currentTarget)
    $li.addClass("bgc")
        .siblings().removeClass("bgc")
    const index = $li.index()
    $tabContent.children().eq(index).addClass('active')
        .siblings().removeClass('active')
})