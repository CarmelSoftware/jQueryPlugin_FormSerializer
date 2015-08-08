//  Serialize all Form data to stringified JSON object
//        (only fields containing "name" attribute will be serialized)
$.fn.JSONSerializeForm = function ()
{
    var $form = $(this),    
     input = $form.serializeArray(),
     jsData = {},
     jsonData = "";

    $.map(input, function (obj)
    {
        jsData[obj['name']] = obj['value'];
    });
    jsonData = JSON.stringify(jsData);

    return jsonData;
}
