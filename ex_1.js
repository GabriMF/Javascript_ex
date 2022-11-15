let welcome_text = "Hello Javascript";

function print_in_html(){
    document.getElementById('text_ex_1').innerHTML = "<h1>" + welcome_text + "</h1>";
}
print_in_html();
