//function to display content
function display_content(content){
    result.value +=content
}

function clear_input(){
    result.value = ""
}
 function result_input(){
    result.value =eval(result.value)
 }
 function remove_input(){
    result.value=result.value.slice(0,-1)
 }