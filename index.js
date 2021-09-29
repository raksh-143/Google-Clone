function signin(){
    window.open('https://accounts.google.com/ServiceLogin/signinchooser?hl=en&passive=true&continue=https%3A%2F%2Fwww.google.co.in%2F%3Fgws_rd%3Dssl&ec=GAZAmgQ&flowName=GlifWebSignIn&flowEntry=ServiceLogin','_self');
}
$(function(){
    $(document).on("click","img",function(){
        window.open('https://www.google.co.in/','_self');
    })
    $(document).on("click","#lucky",function(){
        window.open('https://www.google.com/doodles','_self');
    })
})