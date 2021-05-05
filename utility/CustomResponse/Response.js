function Response(message,status_code,status)
{
    this.response = {message:message,status_code:status_code,status:status};
}

module.exports= Response;