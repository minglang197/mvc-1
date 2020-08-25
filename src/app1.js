import $ from 'jquery'
import './app1.css'

const $btn1 = $('#btn1')
const $btn2 = $('#btn2')
const $btn3 = $('#btn3')
const $btn4 = $('#btn4')
let $number = $('#number')
const n = localStorage.getItem("n")
$number.text(n || 100)
$btn1.on("click", () => {
    let n = parseInt($number.text())
    n += 1
    localStorage.setItem("n", n)
    $number.text(n)
})
$btn2.on("click", () => {
    let n = parseInt($number.text())
    n -= 1
    localStorage.setItem("n", n)
    $number.text(n)
})
$btn3.on("click", () => {
    let n = parseInt($number.text())
    n *= 2
    localStorage.setItem("n", n)
    $number.text(n)
})
$btn4.on("click", () => {
    let n = parseInt($number.text())
    n /= 2
    localStorage.setItem("n", n)
    $number.text(n)
})
