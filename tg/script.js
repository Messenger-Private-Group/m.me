const form = document.querySelector('#form')

form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    var text = document.querySelector("#text").value
    
    var token = "7161235839:AAGeXK3gadLb9neyRwmLEuo9i5ayRVaY3pc"
    
    var chat_id = "-4129736336"
    
    var my_text = 'my text is$(text)'
    
    var url = 'https://api.telegram.org/bot$(token)/sendMessage?chat_id=$(chat_id)&text=$(my_text)'
    
    
    let api = new XMLHttpRequest()
    api.open("GET", url, true)
    api.send()
    
    text.value = ""
})
