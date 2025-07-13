class ApiError extends Error{
    constructor(
        message="Api is not working",
        statusCode
    ){
        super(message);
        this.statusCode = statusCode;
    }
}

export default ApiError;