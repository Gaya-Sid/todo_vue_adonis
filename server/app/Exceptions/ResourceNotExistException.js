"use strict";

const { LogicalException } = require("@adonisjs/generic-exceptions");

class ResourceNotExistException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle(err, { response }) {
    return response.status(403).json({
      error: "Resource does not exist!",
    });
  }
}

module.exports = ResourceNotExistException;
