const notFoundHandler=(_req, _res, next) => {
    const error = new Error("Resource not Found");
    error.status = 404;
  
    next(error);
  }

const errorHandler=(error, _req, res, _next) => {
    if (error.status) {
      return res.status(error.status).json({
        status: 404,
        request: false,
        message: "Unsuccessful",
        error:error.message
      });
    }
    res.status(500).json({
      status: 500,
      request: false,
      message: "Unsuccessful",
      error:error.message
    })
  }

  module.exports={
    notFoundHandler,errorHandler
  }