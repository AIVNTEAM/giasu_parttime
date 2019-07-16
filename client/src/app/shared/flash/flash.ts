import {config} from "../../shared/config";
declare var $;
window["$"] = $;
window["jQuery"] = $;
export const flash: any=
{
    success : function(message,onPage:boolean = false)
    {
        if(onPage)
        {
            // Remove all error
            $('.has-error').removeClass('has-error');
            $('small.help-block').remove();
            $('#error-message').remove();
            $('admin-flash').html('');

            if (!$('.alertCustom').length)
            {
                $('#content').prepend('<div class="alert alert-block alertCustom alert-success"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i>'+message+'</div>')
            }
            else
            {
                $('.alertCustom').removeClass('alert-danger').addClass('alert-success');
                $('.alertCustom').html(message);
            }
        }
        else
        {
            config.set('ADMIN-FLASH',JSON.stringify(
            {
                type : 'alert-success',
                message : message
            }));
        }
    },

    error : function(message,onPage:boolean = false)
    {
        if(onPage)
        {
            $('admin-flash').html('');
            if (!$('.alertCustom').length)
            {
                $('#content').prepend('<div class="alert alert-block alertCustom alert-danger"><button class="close" data-dismiss="alert">×</button><i class="fa-fw fa fa-check"></i>'+message+'</div>')
            }
            else
            {
                $('.alertCustom').removeClass('alert-success').addClass('alert-danger');
                $('.alertCustom').html(message);
            }
        }
        else
        {
            config.set('ADMIN-FLASH', JSON.stringify
            ({
                type: 'alert-danger',
                message: message
            }));
        }
    }
}