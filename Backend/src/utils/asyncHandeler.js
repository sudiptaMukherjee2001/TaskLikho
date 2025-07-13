// returns a function that handles async operations
// and catches any errors, passing them to the next middleware
// BREAKDOWN OF CONST asyncHandler = (fn)=>async()=>{} :
// const asyncHandler = () => {}
// accepts a function `fn`
// const asyncHandler = (fn) => {}
// now if we want to use this fn and if we want to pass this fn to another function then we can do it like this
// const asyncHandler = (fn) => {()=>{}} now we can remove => { } outer curly braces and it will look like this
//const asyncHandler = (fn) => async()=>{} now this is an async function


const asyncHandler = (fn) => (req, res, next) => { // this req, res, next are comming from fn  that we are passing
    Promise.resolve(fn(req, res, next))
    .catch((error) => {
        next(error); // pass the error to the next middleware
        console.error('Error in asyncHandler:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    });
}


export default asyncHandler; 