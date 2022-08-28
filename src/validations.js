var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// build/validations.js
var ABResponseStatus = validate10;
var schema11 = { "$id": "ABResponseStatus", "$schema": "http://json-schema.org/draft-07/schema#", "type": "string", "enum": ["SUCCESS", "ERROR"] };
function validate10(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    validate10.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
    return false;
  }
  if (!(data === "SUCCESS" || data === "ERROR")) {
    validate10.errors = [{ instancePath, schemaPath: "#/enum", keyword: "enum", params: { allowedValues: schema11.enum }, message: "must be equal to one of the allowed values" }];
    return false;
  }
  validate10.errors = vErrors;
  return errors === 0;
}
__name(validate10, "validate10");
var ABResponseSuccessAbstract = validate11;
function validate11(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.status === void 0 && (missing0 = "status")) {
        validate11.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "status" || key0 === "result")) {
            validate11.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.status !== void 0) {
            let data0 = data.status;
            if (typeof data0 !== "string") {
              validate11.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            if ("SUCCESS" !== data0) {
              validate11.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" }];
              return false;
            }
          }
        }
      }
    } else {
      validate11.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate11.errors = vErrors;
  return errors === 0;
}
__name(validate11, "validate11");
var ABResponseError = validate12;
function validate12(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.status === void 0 && (missing0 = "status")) {
        validate12.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "status" || key0 === "error_message")) {
            validate12.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.status !== void 0) {
            let data0 = data.status;
            const _errs2 = errors;
            if (typeof data0 !== "string") {
              validate12.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            if ("ERROR" !== data0) {
              validate12.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/const", keyword: "const", params: { allowedValue: "ERROR" }, message: "must be equal to constant" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.error_message !== void 0) {
              const _errs4 = errors;
              if (typeof data.error_message !== "string") {
                validate12.errors = [{ instancePath: instancePath + "/error_message", schemaPath: "#/properties/error_message/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                return false;
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
          }
        }
      }
    } else {
      validate12.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate12.errors = vErrors;
  return errors === 0;
}
__name(validate12, "validate12");
var AlabarraCreateCategoryData = validate13;
function validate13(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.category_name === void 0 && (missing0 = "category_name") || data.category_description === void 0 && (missing0 = "category_description")) {
        validate13.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "category_name" || key0 === "category_description")) {
            validate13.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.category_name !== void 0) {
            const _errs2 = errors;
            if (typeof data.category_name !== "string") {
              validate13.errors = [{ instancePath: instancePath + "/category_name", schemaPath: "#/properties/category_name/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.category_description !== void 0) {
              const _errs4 = errors;
              if (typeof data.category_description !== "string") {
                validate13.errors = [{ instancePath: instancePath + "/category_description", schemaPath: "#/properties/category_description/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                return false;
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
          }
        }
      }
    } else {
      validate13.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate13.errors = vErrors;
  return errors === 0;
}
__name(validate13, "validate13");
var AlabarraCreateCategoryResponse = validate14;
function validate14(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  let valid0 = false;
  const _errs1 = errors;
  const _errs2 = errors;
  if (errors === _errs2) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.result === void 0 && (missing0 = "result") || data.status === void 0 && (missing0 = "status")) {
        const err0 = { instancePath, schemaPath: "AlabarraCreateCategoryResponseSuccess/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        const _errs4 = errors;
        for (const key0 in data) {
          if (!(key0 === "status" || key0 === "result")) {
            const err1 = { instancePath, schemaPath: "AlabarraCreateCategoryResponseSuccess/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" };
            if (vErrors === null) {
              vErrors = [err1];
            } else {
              vErrors.push(err1);
            }
            errors++;
            break;
          }
        }
        if (_errs4 === errors) {
          if (data.status !== void 0) {
            let data0 = data.status;
            const _errs5 = errors;
            if (typeof data0 !== "string") {
              const err2 = { instancePath: instancePath + "/status", schemaPath: "AlabarraCreateCategoryResponseSuccess/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" };
              if (vErrors === null) {
                vErrors = [err2];
              } else {
                vErrors.push(err2);
              }
              errors++;
            }
            if ("SUCCESS" !== data0) {
              const err3 = { instancePath: instancePath + "/status", schemaPath: "AlabarraCreateCategoryResponseSuccess/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" };
              if (vErrors === null) {
                vErrors = [err3];
              } else {
                vErrors.push(err3);
              }
              errors++;
            }
            var valid2 = _errs5 === errors;
          } else {
            var valid2 = true;
          }
          if (valid2) {
            if (data.result !== void 0) {
              let data1 = data.result;
              const _errs7 = errors;
              if (errors === _errs7) {
                if (data1 && typeof data1 == "object" && !Array.isArray(data1)) {
                  let missing1;
                  if (data1.category_id === void 0 && (missing1 = "category_id")) {
                    const err4 = { instancePath: instancePath + "/result", schemaPath: "AlabarraCreateCategoryResponseSuccess/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" };
                    if (vErrors === null) {
                      vErrors = [err4];
                    } else {
                      vErrors.push(err4);
                    }
                    errors++;
                  } else {
                    const _errs9 = errors;
                    for (const key1 in data1) {
                      if (!(key1 === "category_id")) {
                        const err5 = { instancePath: instancePath + "/result", schemaPath: "AlabarraCreateCategoryResponseSuccess/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" };
                        if (vErrors === null) {
                          vErrors = [err5];
                        } else {
                          vErrors.push(err5);
                        }
                        errors++;
                        break;
                      }
                    }
                    if (_errs9 === errors) {
                      if (data1.category_id !== void 0) {
                        if (typeof data1.category_id !== "string") {
                          const err6 = { instancePath: instancePath + "/result/category_id", schemaPath: "AlabarraCreateCategoryResponseSuccess/properties/result/properties/category_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                          if (vErrors === null) {
                            vErrors = [err6];
                          } else {
                            vErrors.push(err6);
                          }
                          errors++;
                        }
                      }
                    }
                  }
                } else {
                  const err7 = { instancePath: instancePath + "/result", schemaPath: "AlabarraCreateCategoryResponseSuccess/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" };
                  if (vErrors === null) {
                    vErrors = [err7];
                  } else {
                    vErrors.push(err7);
                  }
                  errors++;
                }
              }
              var valid2 = _errs7 === errors;
            } else {
              var valid2 = true;
            }
          }
        }
      }
    } else {
      const err8 = { instancePath, schemaPath: "AlabarraCreateCategoryResponseSuccess/type", keyword: "type", params: { type: "object" }, message: "must be object" };
      if (vErrors === null) {
        vErrors = [err8];
      } else {
        vErrors.push(err8);
      }
      errors++;
    }
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const _errs12 = errors;
    const _errs13 = errors;
    if (errors === _errs13) {
      if (data && typeof data == "object" && !Array.isArray(data)) {
        let missing2;
        if (data.status === void 0 && (missing2 = "status")) {
          const err9 = { instancePath, schemaPath: "ABResponseError/required", keyword: "required", params: { missingProperty: missing2 }, message: "must have required property '" + missing2 + "'" };
          if (vErrors === null) {
            vErrors = [err9];
          } else {
            vErrors.push(err9);
          }
          errors++;
        } else {
          const _errs15 = errors;
          for (const key2 in data) {
            if (!(key2 === "status" || key2 === "error_message")) {
              const err10 = { instancePath, schemaPath: "ABResponseError/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key2 }, message: "must NOT have additional properties" };
              if (vErrors === null) {
                vErrors = [err10];
              } else {
                vErrors.push(err10);
              }
              errors++;
              break;
            }
          }
          if (_errs15 === errors) {
            if (data.status !== void 0) {
              let data3 = data.status;
              const _errs16 = errors;
              if (typeof data3 !== "string") {
                const err11 = { instancePath: instancePath + "/status", schemaPath: "ABResponseError/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                if (vErrors === null) {
                  vErrors = [err11];
                } else {
                  vErrors.push(err11);
                }
                errors++;
              }
              if ("ERROR" !== data3) {
                const err12 = { instancePath: instancePath + "/status", schemaPath: "ABResponseError/properties/status/const", keyword: "const", params: { allowedValue: "ERROR" }, message: "must be equal to constant" };
                if (vErrors === null) {
                  vErrors = [err12];
                } else {
                  vErrors.push(err12);
                }
                errors++;
              }
              var valid5 = _errs16 === errors;
            } else {
              var valid5 = true;
            }
            if (valid5) {
              if (data.error_message !== void 0) {
                const _errs18 = errors;
                if (typeof data.error_message !== "string") {
                  const err13 = { instancePath: instancePath + "/error_message", schemaPath: "ABResponseError/properties/error_message/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                  if (vErrors === null) {
                    vErrors = [err13];
                  } else {
                    vErrors.push(err13);
                  }
                  errors++;
                }
                var valid5 = _errs18 === errors;
              } else {
                var valid5 = true;
              }
            }
          }
        }
      } else {
        const err14 = { instancePath, schemaPath: "ABResponseError/type", keyword: "type", params: { type: "object" }, message: "must be object" };
        if (vErrors === null) {
          vErrors = [err14];
        } else {
          vErrors.push(err14);
        }
        errors++;
      }
    }
    var _valid0 = _errs12 === errors;
    valid0 = valid0 || _valid0;
  }
  if (!valid0) {
    const err15 = { instancePath, schemaPath: "#/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
    if (vErrors === null) {
      vErrors = [err15];
    } else {
      vErrors.push(err15);
    }
    errors++;
    validate14.errors = vErrors;
    return false;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate14.errors = vErrors;
  return errors === 0;
}
__name(validate14, "validate14");
var AlabarraCreateCategoryResponseSuccess = validate15;
function validate15(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.result === void 0 && (missing0 = "result") || data.status === void 0 && (missing0 = "status")) {
        validate15.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "status" || key0 === "result")) {
            validate15.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.status !== void 0) {
            let data0 = data.status;
            const _errs2 = errors;
            if (typeof data0 !== "string") {
              validate15.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            if ("SUCCESS" !== data0) {
              validate15.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.result !== void 0) {
              let data1 = data.result;
              const _errs4 = errors;
              if (errors === _errs4) {
                if (data1 && typeof data1 == "object" && !Array.isArray(data1)) {
                  let missing1;
                  if (data1.category_id === void 0 && (missing1 = "category_id")) {
                    validate15.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                    return false;
                  } else {
                    const _errs6 = errors;
                    for (const key1 in data1) {
                      if (!(key1 === "category_id")) {
                        validate15.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" }];
                        return false;
                        break;
                      }
                    }
                    if (_errs6 === errors) {
                      if (data1.category_id !== void 0) {
                        if (typeof data1.category_id !== "string") {
                          validate15.errors = [{ instancePath: instancePath + "/result/category_id", schemaPath: "#/properties/result/properties/category_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                          return false;
                        }
                      }
                    }
                  }
                } else {
                  validate15.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                  return false;
                }
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
          }
        }
      }
    } else {
      validate15.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate15.errors = vErrors;
  return errors === 0;
}
__name(validate15, "validate15");
var ABCreateProductData = validate16;
var schema23 = { "$id": "ABProductStatus", "$schema": "http://json-schema.org/draft-07/schema#", "type": "string", "enum": ["ACTIVE", "INACTIVE"], "description": "Status of each product" };
var schema21 = { "$id": "ABProductOptionsType", "$schema": "http://json-schema.org/draft-07/schema#", "type": "string", "enum": ["SINGLE_SELECTION", "MULTIPLE_SELECTION"], "description": "Type of option, such as single selection, multiple selection, etc." };
function validate17(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.title === void 0 && (missing0 = "title") || data.type === void 0 && (missing0 = "type") || data.possible_values === void 0 && (missing0 = "possible_values")) {
        validate17.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "title" || key0 === "type" || key0 === "possible_values")) {
            validate17.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.title !== void 0) {
            const _errs2 = errors;
            if (typeof data.title !== "string") {
              validate17.errors = [{ instancePath: instancePath + "/title", schemaPath: "#/properties/title/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.type !== void 0) {
              let data1 = data.type;
              const _errs4 = errors;
              if (typeof data1 !== "string") {
                validate17.errors = [{ instancePath: instancePath + "/type", schemaPath: "ABProductOptionsType/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                return false;
              }
              if (!(data1 === "SINGLE_SELECTION" || data1 === "MULTIPLE_SELECTION")) {
                validate17.errors = [{ instancePath: instancePath + "/type", schemaPath: "ABProductOptionsType/enum", keyword: "enum", params: { allowedValues: schema21.enum }, message: "must be equal to one of the allowed values" }];
                return false;
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.possible_values !== void 0) {
                let data2 = data.possible_values;
                const _errs7 = errors;
                if (errors === _errs7) {
                  if (Array.isArray(data2)) {
                    var valid2 = true;
                    const len0 = data2.length;
                    for (let i0 = 0; i0 < len0; i0++) {
                      let data3 = data2[i0];
                      const _errs9 = errors;
                      const _errs10 = errors;
                      if (errors === _errs10) {
                        if (data3 && typeof data3 == "object" && !Array.isArray(data3)) {
                          let missing1;
                          if (data3.title === void 0 && (missing1 = "title") || data3.price_adjustment === void 0 && (missing1 = "price_adjustment")) {
                            validate17.errors = [{ instancePath: instancePath + "/possible_values/" + i0, schemaPath: "ABProductOptionsPossibleValues/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                            return false;
                          } else {
                            const _errs12 = errors;
                            for (const key1 in data3) {
                              if (!(key1 === "title" || key1 === "price_adjustment")) {
                                validate17.errors = [{ instancePath: instancePath + "/possible_values/" + i0, schemaPath: "ABProductOptionsPossibleValues/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" }];
                                return false;
                                break;
                              }
                            }
                            if (_errs12 === errors) {
                              if (data3.title !== void 0) {
                                const _errs13 = errors;
                                if (typeof data3.title !== "string") {
                                  validate17.errors = [{ instancePath: instancePath + "/possible_values/" + i0 + "/title", schemaPath: "ABProductOptionsPossibleValues/properties/title/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                  return false;
                                }
                                var valid4 = _errs13 === errors;
                              } else {
                                var valid4 = true;
                              }
                              if (valid4) {
                                if (data3.price_adjustment !== void 0) {
                                  let data5 = data3.price_adjustment;
                                  const _errs15 = errors;
                                  if (!(typeof data5 == "number" && isFinite(data5))) {
                                    validate17.errors = [{ instancePath: instancePath + "/possible_values/" + i0 + "/price_adjustment", schemaPath: "ABProductOptionsPossibleValues/properties/price_adjustment/type", keyword: "type", params: { type: "number" }, message: "must be number" }];
                                    return false;
                                  }
                                  var valid4 = _errs15 === errors;
                                } else {
                                  var valid4 = true;
                                }
                              }
                            }
                          }
                        } else {
                          validate17.errors = [{ instancePath: instancePath + "/possible_values/" + i0, schemaPath: "ABProductOptionsPossibleValues/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                          return false;
                        }
                      }
                      var valid2 = _errs9 === errors;
                      if (!valid2) {
                        break;
                      }
                    }
                  } else {
                    validate17.errors = [{ instancePath: instancePath + "/possible_values", schemaPath: "#/properties/possible_values/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                    return false;
                  }
                }
                var valid0 = _errs7 === errors;
              } else {
                var valid0 = true;
              }
            }
          }
        }
      }
    } else {
      validate17.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate17.errors = vErrors;
  return errors === 0;
}
__name(validate17, "validate17");
function validate16(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.title === void 0 && (missing0 = "title") || data.category_id === void 0 && (missing0 = "category_id") || data.description === void 0 && (missing0 = "description") || data.image_url === void 0 && (missing0 = "image_url") || data.price === void 0 && (missing0 = "price") || data.status === void 0 && (missing0 = "status")) {
        validate16.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "title" || key0 === "category_id" || key0 === "description" || key0 === "image_url" || key0 === "options" || key0 === "price" || key0 === "status")) {
            validate16.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.title !== void 0) {
            const _errs2 = errors;
            if (typeof data.title !== "string") {
              validate16.errors = [{ instancePath: instancePath + "/title", schemaPath: "#/properties/title/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.category_id !== void 0) {
              const _errs4 = errors;
              if (typeof data.category_id !== "string") {
                validate16.errors = [{ instancePath: instancePath + "/category_id", schemaPath: "#/properties/category_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                return false;
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.description !== void 0) {
                const _errs6 = errors;
                if (typeof data.description !== "string") {
                  validate16.errors = [{ instancePath: instancePath + "/description", schemaPath: "#/properties/description/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                  return false;
                }
                var valid0 = _errs6 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.image_url !== void 0) {
                  const _errs8 = errors;
                  if (typeof data.image_url !== "string") {
                    validate16.errors = [{ instancePath: instancePath + "/image_url", schemaPath: "#/properties/image_url/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                    return false;
                  }
                  var valid0 = _errs8 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.options !== void 0) {
                    let data4 = data.options;
                    const _errs10 = errors;
                    if (errors === _errs10) {
                      if (Array.isArray(data4)) {
                        var valid1 = true;
                        const len0 = data4.length;
                        for (let i0 = 0; i0 < len0; i0++) {
                          const _errs12 = errors;
                          if (!validate17(data4[i0], { instancePath: instancePath + "/options/" + i0, parentData: data4, parentDataProperty: i0, rootData })) {
                            vErrors = vErrors === null ? validate17.errors : vErrors.concat(validate17.errors);
                            errors = vErrors.length;
                          }
                          var valid1 = _errs12 === errors;
                          if (!valid1) {
                            break;
                          }
                        }
                      } else {
                        validate16.errors = [{ instancePath: instancePath + "/options", schemaPath: "#/properties/options/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                        return false;
                      }
                    }
                    var valid0 = _errs10 === errors;
                  } else {
                    var valid0 = true;
                  }
                  if (valid0) {
                    if (data.price !== void 0) {
                      let data6 = data.price;
                      const _errs13 = errors;
                      if (!(typeof data6 == "number" && isFinite(data6))) {
                        validate16.errors = [{ instancePath: instancePath + "/price", schemaPath: "#/properties/price/type", keyword: "type", params: { type: "number" }, message: "must be number" }];
                        return false;
                      }
                      var valid0 = _errs13 === errors;
                    } else {
                      var valid0 = true;
                    }
                    if (valid0) {
                      if (data.status !== void 0) {
                        let data7 = data.status;
                        const _errs15 = errors;
                        if (typeof data7 !== "string") {
                          validate16.errors = [{ instancePath: instancePath + "/status", schemaPath: "ABProductStatus/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                          return false;
                        }
                        if (!(data7 === "ACTIVE" || data7 === "INACTIVE")) {
                          validate16.errors = [{ instancePath: instancePath + "/status", schemaPath: "ABProductStatus/enum", keyword: "enum", params: { allowedValues: schema23.enum }, message: "must be equal to one of the allowed values" }];
                          return false;
                        }
                        var valid0 = _errs15 === errors;
                      } else {
                        var valid0 = true;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      validate16.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate16.errors = vErrors;
  return errors === 0;
}
__name(validate16, "validate16");
var ABProductOption = validate17;
var ABProductOptionsType = validate19;
function validate19(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    validate19.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
    return false;
  }
  if (!(data === "SINGLE_SELECTION" || data === "MULTIPLE_SELECTION")) {
    validate19.errors = [{ instancePath, schemaPath: "#/enum", keyword: "enum", params: { allowedValues: schema21.enum }, message: "must be equal to one of the allowed values" }];
    return false;
  }
  validate19.errors = vErrors;
  return errors === 0;
}
__name(validate19, "validate19");
var ABProductOptionsPossibleValues = validate20;
function validate20(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.title === void 0 && (missing0 = "title") || data.price_adjustment === void 0 && (missing0 = "price_adjustment")) {
        validate20.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "title" || key0 === "price_adjustment")) {
            validate20.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.title !== void 0) {
            const _errs2 = errors;
            if (typeof data.title !== "string") {
              validate20.errors = [{ instancePath: instancePath + "/title", schemaPath: "#/properties/title/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.price_adjustment !== void 0) {
              let data1 = data.price_adjustment;
              const _errs4 = errors;
              if (!(typeof data1 == "number" && isFinite(data1))) {
                validate20.errors = [{ instancePath: instancePath + "/price_adjustment", schemaPath: "#/properties/price_adjustment/type", keyword: "type", params: { type: "number" }, message: "must be number" }];
                return false;
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
          }
        }
      }
    } else {
      validate20.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate20.errors = vErrors;
  return errors === 0;
}
__name(validate20, "validate20");
var ABProductStatus = validate21;
function validate21(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    validate21.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
    return false;
  }
  if (!(data === "ACTIVE" || data === "INACTIVE")) {
    validate21.errors = [{ instancePath, schemaPath: "#/enum", keyword: "enum", params: { allowedValues: schema23.enum }, message: "must be equal to one of the allowed values" }];
    return false;
  }
  validate21.errors = vErrors;
  return errors === 0;
}
__name(validate21, "validate21");
var ABCreateProductResponse = validate22;
function validate22(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  let valid0 = false;
  const _errs1 = errors;
  const _errs2 = errors;
  if (errors === _errs2) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.result === void 0 && (missing0 = "result") || data.status === void 0 && (missing0 = "status")) {
        const err0 = { instancePath, schemaPath: "ABCreateProductResponseSuccess/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        const _errs4 = errors;
        for (const key0 in data) {
          if (!(key0 === "status" || key0 === "result")) {
            const err1 = { instancePath, schemaPath: "ABCreateProductResponseSuccess/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" };
            if (vErrors === null) {
              vErrors = [err1];
            } else {
              vErrors.push(err1);
            }
            errors++;
            break;
          }
        }
        if (_errs4 === errors) {
          if (data.status !== void 0) {
            let data0 = data.status;
            const _errs5 = errors;
            if (typeof data0 !== "string") {
              const err2 = { instancePath: instancePath + "/status", schemaPath: "ABCreateProductResponseSuccess/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" };
              if (vErrors === null) {
                vErrors = [err2];
              } else {
                vErrors.push(err2);
              }
              errors++;
            }
            if ("SUCCESS" !== data0) {
              const err3 = { instancePath: instancePath + "/status", schemaPath: "ABCreateProductResponseSuccess/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" };
              if (vErrors === null) {
                vErrors = [err3];
              } else {
                vErrors.push(err3);
              }
              errors++;
            }
            var valid2 = _errs5 === errors;
          } else {
            var valid2 = true;
          }
          if (valid2) {
            if (data.result !== void 0) {
              let data1 = data.result;
              const _errs7 = errors;
              if (errors === _errs7) {
                if (data1 && typeof data1 == "object" && !Array.isArray(data1)) {
                  let missing1;
                  if (data1.product_id === void 0 && (missing1 = "product_id")) {
                    const err4 = { instancePath: instancePath + "/result", schemaPath: "ABCreateProductResponseSuccess/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" };
                    if (vErrors === null) {
                      vErrors = [err4];
                    } else {
                      vErrors.push(err4);
                    }
                    errors++;
                  } else {
                    const _errs9 = errors;
                    for (const key1 in data1) {
                      if (!(key1 === "product_id")) {
                        const err5 = { instancePath: instancePath + "/result", schemaPath: "ABCreateProductResponseSuccess/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" };
                        if (vErrors === null) {
                          vErrors = [err5];
                        } else {
                          vErrors.push(err5);
                        }
                        errors++;
                        break;
                      }
                    }
                    if (_errs9 === errors) {
                      if (data1.product_id !== void 0) {
                        if (typeof data1.product_id !== "string") {
                          const err6 = { instancePath: instancePath + "/result/product_id", schemaPath: "ABCreateProductResponseSuccess/properties/result/properties/product_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                          if (vErrors === null) {
                            vErrors = [err6];
                          } else {
                            vErrors.push(err6);
                          }
                          errors++;
                        }
                      }
                    }
                  }
                } else {
                  const err7 = { instancePath: instancePath + "/result", schemaPath: "ABCreateProductResponseSuccess/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" };
                  if (vErrors === null) {
                    vErrors = [err7];
                  } else {
                    vErrors.push(err7);
                  }
                  errors++;
                }
              }
              var valid2 = _errs7 === errors;
            } else {
              var valid2 = true;
            }
          }
        }
      }
    } else {
      const err8 = { instancePath, schemaPath: "ABCreateProductResponseSuccess/type", keyword: "type", params: { type: "object" }, message: "must be object" };
      if (vErrors === null) {
        vErrors = [err8];
      } else {
        vErrors.push(err8);
      }
      errors++;
    }
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const _errs12 = errors;
    const _errs13 = errors;
    if (errors === _errs13) {
      if (data && typeof data == "object" && !Array.isArray(data)) {
        let missing2;
        if (data.status === void 0 && (missing2 = "status")) {
          const err9 = { instancePath, schemaPath: "ABResponseError/required", keyword: "required", params: { missingProperty: missing2 }, message: "must have required property '" + missing2 + "'" };
          if (vErrors === null) {
            vErrors = [err9];
          } else {
            vErrors.push(err9);
          }
          errors++;
        } else {
          const _errs15 = errors;
          for (const key2 in data) {
            if (!(key2 === "status" || key2 === "error_message")) {
              const err10 = { instancePath, schemaPath: "ABResponseError/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key2 }, message: "must NOT have additional properties" };
              if (vErrors === null) {
                vErrors = [err10];
              } else {
                vErrors.push(err10);
              }
              errors++;
              break;
            }
          }
          if (_errs15 === errors) {
            if (data.status !== void 0) {
              let data3 = data.status;
              const _errs16 = errors;
              if (typeof data3 !== "string") {
                const err11 = { instancePath: instancePath + "/status", schemaPath: "ABResponseError/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                if (vErrors === null) {
                  vErrors = [err11];
                } else {
                  vErrors.push(err11);
                }
                errors++;
              }
              if ("ERROR" !== data3) {
                const err12 = { instancePath: instancePath + "/status", schemaPath: "ABResponseError/properties/status/const", keyword: "const", params: { allowedValue: "ERROR" }, message: "must be equal to constant" };
                if (vErrors === null) {
                  vErrors = [err12];
                } else {
                  vErrors.push(err12);
                }
                errors++;
              }
              var valid5 = _errs16 === errors;
            } else {
              var valid5 = true;
            }
            if (valid5) {
              if (data.error_message !== void 0) {
                const _errs18 = errors;
                if (typeof data.error_message !== "string") {
                  const err13 = { instancePath: instancePath + "/error_message", schemaPath: "ABResponseError/properties/error_message/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                  if (vErrors === null) {
                    vErrors = [err13];
                  } else {
                    vErrors.push(err13);
                  }
                  errors++;
                }
                var valid5 = _errs18 === errors;
              } else {
                var valid5 = true;
              }
            }
          }
        }
      } else {
        const err14 = { instancePath, schemaPath: "ABResponseError/type", keyword: "type", params: { type: "object" }, message: "must be object" };
        if (vErrors === null) {
          vErrors = [err14];
        } else {
          vErrors.push(err14);
        }
        errors++;
      }
    }
    var _valid0 = _errs12 === errors;
    valid0 = valid0 || _valid0;
  }
  if (!valid0) {
    const err15 = { instancePath, schemaPath: "#/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
    if (vErrors === null) {
      vErrors = [err15];
    } else {
      vErrors.push(err15);
    }
    errors++;
    validate22.errors = vErrors;
    return false;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate22.errors = vErrors;
  return errors === 0;
}
__name(validate22, "validate22");
var ABCreateProductResponseSuccess = validate23;
function validate23(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.result === void 0 && (missing0 = "result") || data.status === void 0 && (missing0 = "status")) {
        validate23.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "status" || key0 === "result")) {
            validate23.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.status !== void 0) {
            let data0 = data.status;
            const _errs2 = errors;
            if (typeof data0 !== "string") {
              validate23.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            if ("SUCCESS" !== data0) {
              validate23.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.result !== void 0) {
              let data1 = data.result;
              const _errs4 = errors;
              if (errors === _errs4) {
                if (data1 && typeof data1 == "object" && !Array.isArray(data1)) {
                  let missing1;
                  if (data1.product_id === void 0 && (missing1 = "product_id")) {
                    validate23.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                    return false;
                  } else {
                    const _errs6 = errors;
                    for (const key1 in data1) {
                      if (!(key1 === "product_id")) {
                        validate23.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" }];
                        return false;
                        break;
                      }
                    }
                    if (_errs6 === errors) {
                      if (data1.product_id !== void 0) {
                        if (typeof data1.product_id !== "string") {
                          validate23.errors = [{ instancePath: instancePath + "/result/product_id", schemaPath: "#/properties/result/properties/product_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                          return false;
                        }
                      }
                    }
                  }
                } else {
                  validate23.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                  return false;
                }
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
          }
        }
      }
    } else {
      validate23.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate23.errors = vErrors;
  return errors === 0;
}
__name(validate23, "validate23");
var AlabarraEditProductData = validate24;
function validate24(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.product_id === void 0 && (missing0 = "product_id")) {
        validate24.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "product_id" || key0 === "title" || key0 === "category" || key0 === "description" || key0 === "image_url" || key0 === "options" || key0 === "price" || key0 === "status")) {
            validate24.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.product_id !== void 0) {
            const _errs2 = errors;
            if (typeof data.product_id !== "string") {
              validate24.errors = [{ instancePath: instancePath + "/product_id", schemaPath: "#/properties/product_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.title !== void 0) {
              const _errs4 = errors;
              if (typeof data.title !== "string") {
                validate24.errors = [{ instancePath: instancePath + "/title", schemaPath: "#/properties/title/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                return false;
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.category !== void 0) {
                const _errs6 = errors;
                if (typeof data.category !== "string") {
                  validate24.errors = [{ instancePath: instancePath + "/category", schemaPath: "#/properties/category/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                  return false;
                }
                var valid0 = _errs6 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.description !== void 0) {
                  const _errs8 = errors;
                  if (typeof data.description !== "string") {
                    validate24.errors = [{ instancePath: instancePath + "/description", schemaPath: "#/properties/description/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                    return false;
                  }
                  var valid0 = _errs8 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.image_url !== void 0) {
                    const _errs10 = errors;
                    if (typeof data.image_url !== "string") {
                      validate24.errors = [{ instancePath: instancePath + "/image_url", schemaPath: "#/properties/image_url/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                      return false;
                    }
                    var valid0 = _errs10 === errors;
                  } else {
                    var valid0 = true;
                  }
                  if (valid0) {
                    if (data.options !== void 0) {
                      let data5 = data.options;
                      const _errs12 = errors;
                      if (errors === _errs12) {
                        if (Array.isArray(data5)) {
                          var valid1 = true;
                          const len0 = data5.length;
                          for (let i0 = 0; i0 < len0; i0++) {
                            const _errs14 = errors;
                            if (!validate17(data5[i0], { instancePath: instancePath + "/options/" + i0, parentData: data5, parentDataProperty: i0, rootData })) {
                              vErrors = vErrors === null ? validate17.errors : vErrors.concat(validate17.errors);
                              errors = vErrors.length;
                            }
                            var valid1 = _errs14 === errors;
                            if (!valid1) {
                              break;
                            }
                          }
                        } else {
                          validate24.errors = [{ instancePath: instancePath + "/options", schemaPath: "#/properties/options/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                          return false;
                        }
                      }
                      var valid0 = _errs12 === errors;
                    } else {
                      var valid0 = true;
                    }
                    if (valid0) {
                      if (data.price !== void 0) {
                        let data7 = data.price;
                        const _errs15 = errors;
                        if (!(typeof data7 == "number" && isFinite(data7))) {
                          validate24.errors = [{ instancePath: instancePath + "/price", schemaPath: "#/properties/price/type", keyword: "type", params: { type: "number" }, message: "must be number" }];
                          return false;
                        }
                        var valid0 = _errs15 === errors;
                      } else {
                        var valid0 = true;
                      }
                      if (valid0) {
                        if (data.status !== void 0) {
                          let data8 = data.status;
                          const _errs17 = errors;
                          if (typeof data8 !== "string") {
                            validate24.errors = [{ instancePath: instancePath + "/status", schemaPath: "ABProductStatus/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                            return false;
                          }
                          if (!(data8 === "ACTIVE" || data8 === "INACTIVE")) {
                            validate24.errors = [{ instancePath: instancePath + "/status", schemaPath: "ABProductStatus/enum", keyword: "enum", params: { allowedValues: schema23.enum }, message: "must be equal to one of the allowed values" }];
                            return false;
                          }
                          var valid0 = _errs17 === errors;
                        } else {
                          var valid0 = true;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      validate24.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate24.errors = vErrors;
  return errors === 0;
}
__name(validate24, "validate24");
var AlabarraEditProductResponse = validate26;
function validate26(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  let valid0 = false;
  const _errs1 = errors;
  const _errs2 = errors;
  if (errors === _errs2) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.result === void 0 && (missing0 = "result") || data.status === void 0 && (missing0 = "status")) {
        const err0 = { instancePath, schemaPath: "AlabarraEditProductResponseSuccess/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        const _errs4 = errors;
        for (const key0 in data) {
          if (!(key0 === "status" || key0 === "result")) {
            const err1 = { instancePath, schemaPath: "AlabarraEditProductResponseSuccess/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" };
            if (vErrors === null) {
              vErrors = [err1];
            } else {
              vErrors.push(err1);
            }
            errors++;
            break;
          }
        }
        if (_errs4 === errors) {
          if (data.status !== void 0) {
            let data0 = data.status;
            const _errs5 = errors;
            if (typeof data0 !== "string") {
              const err2 = { instancePath: instancePath + "/status", schemaPath: "AlabarraEditProductResponseSuccess/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" };
              if (vErrors === null) {
                vErrors = [err2];
              } else {
                vErrors.push(err2);
              }
              errors++;
            }
            if ("SUCCESS" !== data0) {
              const err3 = { instancePath: instancePath + "/status", schemaPath: "AlabarraEditProductResponseSuccess/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" };
              if (vErrors === null) {
                vErrors = [err3];
              } else {
                vErrors.push(err3);
              }
              errors++;
            }
            var valid2 = _errs5 === errors;
          } else {
            var valid2 = true;
          }
          if (valid2) {
            if (data.result !== void 0) {
              let data1 = data.result;
              const _errs7 = errors;
              if (errors === _errs7) {
                if (data1 && typeof data1 == "object" && !Array.isArray(data1)) {
                  let missing1;
                  if (data1.product_id === void 0 && (missing1 = "product_id")) {
                    const err4 = { instancePath: instancePath + "/result", schemaPath: "AlabarraEditProductResponseSuccess/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" };
                    if (vErrors === null) {
                      vErrors = [err4];
                    } else {
                      vErrors.push(err4);
                    }
                    errors++;
                  } else {
                    const _errs9 = errors;
                    for (const key1 in data1) {
                      if (!(key1 === "product_id")) {
                        const err5 = { instancePath: instancePath + "/result", schemaPath: "AlabarraEditProductResponseSuccess/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" };
                        if (vErrors === null) {
                          vErrors = [err5];
                        } else {
                          vErrors.push(err5);
                        }
                        errors++;
                        break;
                      }
                    }
                    if (_errs9 === errors) {
                      if (data1.product_id !== void 0) {
                        if (typeof data1.product_id !== "string") {
                          const err6 = { instancePath: instancePath + "/result/product_id", schemaPath: "AlabarraEditProductResponseSuccess/properties/result/properties/product_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                          if (vErrors === null) {
                            vErrors = [err6];
                          } else {
                            vErrors.push(err6);
                          }
                          errors++;
                        }
                      }
                    }
                  }
                } else {
                  const err7 = { instancePath: instancePath + "/result", schemaPath: "AlabarraEditProductResponseSuccess/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" };
                  if (vErrors === null) {
                    vErrors = [err7];
                  } else {
                    vErrors.push(err7);
                  }
                  errors++;
                }
              }
              var valid2 = _errs7 === errors;
            } else {
              var valid2 = true;
            }
          }
        }
      }
    } else {
      const err8 = { instancePath, schemaPath: "AlabarraEditProductResponseSuccess/type", keyword: "type", params: { type: "object" }, message: "must be object" };
      if (vErrors === null) {
        vErrors = [err8];
      } else {
        vErrors.push(err8);
      }
      errors++;
    }
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const _errs12 = errors;
    const _errs13 = errors;
    if (errors === _errs13) {
      if (data && typeof data == "object" && !Array.isArray(data)) {
        let missing2;
        if (data.status === void 0 && (missing2 = "status")) {
          const err9 = { instancePath, schemaPath: "ABResponseError/required", keyword: "required", params: { missingProperty: missing2 }, message: "must have required property '" + missing2 + "'" };
          if (vErrors === null) {
            vErrors = [err9];
          } else {
            vErrors.push(err9);
          }
          errors++;
        } else {
          const _errs15 = errors;
          for (const key2 in data) {
            if (!(key2 === "status" || key2 === "error_message")) {
              const err10 = { instancePath, schemaPath: "ABResponseError/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key2 }, message: "must NOT have additional properties" };
              if (vErrors === null) {
                vErrors = [err10];
              } else {
                vErrors.push(err10);
              }
              errors++;
              break;
            }
          }
          if (_errs15 === errors) {
            if (data.status !== void 0) {
              let data3 = data.status;
              const _errs16 = errors;
              if (typeof data3 !== "string") {
                const err11 = { instancePath: instancePath + "/status", schemaPath: "ABResponseError/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                if (vErrors === null) {
                  vErrors = [err11];
                } else {
                  vErrors.push(err11);
                }
                errors++;
              }
              if ("ERROR" !== data3) {
                const err12 = { instancePath: instancePath + "/status", schemaPath: "ABResponseError/properties/status/const", keyword: "const", params: { allowedValue: "ERROR" }, message: "must be equal to constant" };
                if (vErrors === null) {
                  vErrors = [err12];
                } else {
                  vErrors.push(err12);
                }
                errors++;
              }
              var valid5 = _errs16 === errors;
            } else {
              var valid5 = true;
            }
            if (valid5) {
              if (data.error_message !== void 0) {
                const _errs18 = errors;
                if (typeof data.error_message !== "string") {
                  const err13 = { instancePath: instancePath + "/error_message", schemaPath: "ABResponseError/properties/error_message/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                  if (vErrors === null) {
                    vErrors = [err13];
                  } else {
                    vErrors.push(err13);
                  }
                  errors++;
                }
                var valid5 = _errs18 === errors;
              } else {
                var valid5 = true;
              }
            }
          }
        }
      } else {
        const err14 = { instancePath, schemaPath: "ABResponseError/type", keyword: "type", params: { type: "object" }, message: "must be object" };
        if (vErrors === null) {
          vErrors = [err14];
        } else {
          vErrors.push(err14);
        }
        errors++;
      }
    }
    var _valid0 = _errs12 === errors;
    valid0 = valid0 || _valid0;
  }
  if (!valid0) {
    const err15 = { instancePath, schemaPath: "#/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
    if (vErrors === null) {
      vErrors = [err15];
    } else {
      vErrors.push(err15);
    }
    errors++;
    validate26.errors = vErrors;
    return false;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate26.errors = vErrors;
  return errors === 0;
}
__name(validate26, "validate26");
var AlabarraEditProductResponseSuccess = validate27;
function validate27(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.result === void 0 && (missing0 = "result") || data.status === void 0 && (missing0 = "status")) {
        validate27.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "status" || key0 === "result")) {
            validate27.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.status !== void 0) {
            let data0 = data.status;
            const _errs2 = errors;
            if (typeof data0 !== "string") {
              validate27.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            if ("SUCCESS" !== data0) {
              validate27.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.result !== void 0) {
              let data1 = data.result;
              const _errs4 = errors;
              if (errors === _errs4) {
                if (data1 && typeof data1 == "object" && !Array.isArray(data1)) {
                  let missing1;
                  if (data1.product_id === void 0 && (missing1 = "product_id")) {
                    validate27.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                    return false;
                  } else {
                    const _errs6 = errors;
                    for (const key1 in data1) {
                      if (!(key1 === "product_id")) {
                        validate27.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" }];
                        return false;
                        break;
                      }
                    }
                    if (_errs6 === errors) {
                      if (data1.product_id !== void 0) {
                        if (typeof data1.product_id !== "string") {
                          validate27.errors = [{ instancePath: instancePath + "/result/product_id", schemaPath: "#/properties/result/properties/product_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                          return false;
                        }
                      }
                    }
                  }
                } else {
                  validate27.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                  return false;
                }
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
          }
        }
      }
    } else {
      validate27.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate27.errors = vErrors;
  return errors === 0;
}
__name(validate27, "validate27");
var AlabarraConfirmDigitalPaymentData = validate28;
function validate28(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.order_id === void 0 && (missing0 = "order_id")) {
        validate28.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "order_id")) {
            validate28.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.order_id !== void 0) {
            if (typeof data.order_id !== "string") {
              validate28.errors = [{ instancePath: instancePath + "/order_id", schemaPath: "#/properties/order_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
          }
        }
      }
    } else {
      validate28.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate28.errors = vErrors;
  return errors === 0;
}
__name(validate28, "validate28");
var AlabarraConfirmDigitalPaymentResponse = validate29;
function validate29(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  let valid0 = false;
  const _errs1 = errors;
  const _errs2 = errors;
  if (errors === _errs2) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.result === void 0 && (missing0 = "result") || data.status === void 0 && (missing0 = "status")) {
        const err0 = { instancePath, schemaPath: "AlabarraConfirmDigitalPaymentResponseSuccess/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        const _errs4 = errors;
        for (const key0 in data) {
          if (!(key0 === "status" || key0 === "result")) {
            const err1 = { instancePath, schemaPath: "AlabarraConfirmDigitalPaymentResponseSuccess/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" };
            if (vErrors === null) {
              vErrors = [err1];
            } else {
              vErrors.push(err1);
            }
            errors++;
            break;
          }
        }
        if (_errs4 === errors) {
          if (data.status !== void 0) {
            let data0 = data.status;
            const _errs5 = errors;
            if (typeof data0 !== "string") {
              const err2 = { instancePath: instancePath + "/status", schemaPath: "AlabarraConfirmDigitalPaymentResponseSuccess/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" };
              if (vErrors === null) {
                vErrors = [err2];
              } else {
                vErrors.push(err2);
              }
              errors++;
            }
            if ("SUCCESS" !== data0) {
              const err3 = { instancePath: instancePath + "/status", schemaPath: "AlabarraConfirmDigitalPaymentResponseSuccess/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" };
              if (vErrors === null) {
                vErrors = [err3];
              } else {
                vErrors.push(err3);
              }
              errors++;
            }
            var valid2 = _errs5 === errors;
          } else {
            var valid2 = true;
          }
          if (valid2) {
            if (data.result !== void 0) {
              let data1 = data.result;
              const _errs7 = errors;
              if (errors === _errs7) {
                if (data1 && typeof data1 == "object" && !Array.isArray(data1)) {
                  let missing1;
                  if (data1.order_id === void 0 && (missing1 = "order_id")) {
                    const err4 = { instancePath: instancePath + "/result", schemaPath: "AlabarraConfirmDigitalPaymentResponseSuccess/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" };
                    if (vErrors === null) {
                      vErrors = [err4];
                    } else {
                      vErrors.push(err4);
                    }
                    errors++;
                  } else {
                    const _errs9 = errors;
                    for (const key1 in data1) {
                      if (!(key1 === "order_id")) {
                        const err5 = { instancePath: instancePath + "/result", schemaPath: "AlabarraConfirmDigitalPaymentResponseSuccess/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" };
                        if (vErrors === null) {
                          vErrors = [err5];
                        } else {
                          vErrors.push(err5);
                        }
                        errors++;
                        break;
                      }
                    }
                    if (_errs9 === errors) {
                      if (data1.order_id !== void 0) {
                        if (typeof data1.order_id !== "string") {
                          const err6 = { instancePath: instancePath + "/result/order_id", schemaPath: "AlabarraConfirmDigitalPaymentResponseSuccess/properties/result/properties/order_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                          if (vErrors === null) {
                            vErrors = [err6];
                          } else {
                            vErrors.push(err6);
                          }
                          errors++;
                        }
                      }
                    }
                  }
                } else {
                  const err7 = { instancePath: instancePath + "/result", schemaPath: "AlabarraConfirmDigitalPaymentResponseSuccess/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" };
                  if (vErrors === null) {
                    vErrors = [err7];
                  } else {
                    vErrors.push(err7);
                  }
                  errors++;
                }
              }
              var valid2 = _errs7 === errors;
            } else {
              var valid2 = true;
            }
          }
        }
      }
    } else {
      const err8 = { instancePath, schemaPath: "AlabarraConfirmDigitalPaymentResponseSuccess/type", keyword: "type", params: { type: "object" }, message: "must be object" };
      if (vErrors === null) {
        vErrors = [err8];
      } else {
        vErrors.push(err8);
      }
      errors++;
    }
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const _errs12 = errors;
    const _errs13 = errors;
    if (errors === _errs13) {
      if (data && typeof data == "object" && !Array.isArray(data)) {
        let missing2;
        if (data.status === void 0 && (missing2 = "status")) {
          const err9 = { instancePath, schemaPath: "ABResponseError/required", keyword: "required", params: { missingProperty: missing2 }, message: "must have required property '" + missing2 + "'" };
          if (vErrors === null) {
            vErrors = [err9];
          } else {
            vErrors.push(err9);
          }
          errors++;
        } else {
          const _errs15 = errors;
          for (const key2 in data) {
            if (!(key2 === "status" || key2 === "error_message")) {
              const err10 = { instancePath, schemaPath: "ABResponseError/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key2 }, message: "must NOT have additional properties" };
              if (vErrors === null) {
                vErrors = [err10];
              } else {
                vErrors.push(err10);
              }
              errors++;
              break;
            }
          }
          if (_errs15 === errors) {
            if (data.status !== void 0) {
              let data3 = data.status;
              const _errs16 = errors;
              if (typeof data3 !== "string") {
                const err11 = { instancePath: instancePath + "/status", schemaPath: "ABResponseError/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                if (vErrors === null) {
                  vErrors = [err11];
                } else {
                  vErrors.push(err11);
                }
                errors++;
              }
              if ("ERROR" !== data3) {
                const err12 = { instancePath: instancePath + "/status", schemaPath: "ABResponseError/properties/status/const", keyword: "const", params: { allowedValue: "ERROR" }, message: "must be equal to constant" };
                if (vErrors === null) {
                  vErrors = [err12];
                } else {
                  vErrors.push(err12);
                }
                errors++;
              }
              var valid5 = _errs16 === errors;
            } else {
              var valid5 = true;
            }
            if (valid5) {
              if (data.error_message !== void 0) {
                const _errs18 = errors;
                if (typeof data.error_message !== "string") {
                  const err13 = { instancePath: instancePath + "/error_message", schemaPath: "ABResponseError/properties/error_message/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                  if (vErrors === null) {
                    vErrors = [err13];
                  } else {
                    vErrors.push(err13);
                  }
                  errors++;
                }
                var valid5 = _errs18 === errors;
              } else {
                var valid5 = true;
              }
            }
          }
        }
      } else {
        const err14 = { instancePath, schemaPath: "ABResponseError/type", keyword: "type", params: { type: "object" }, message: "must be object" };
        if (vErrors === null) {
          vErrors = [err14];
        } else {
          vErrors.push(err14);
        }
        errors++;
      }
    }
    var _valid0 = _errs12 === errors;
    valid0 = valid0 || _valid0;
  }
  if (!valid0) {
    const err15 = { instancePath, schemaPath: "#/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
    if (vErrors === null) {
      vErrors = [err15];
    } else {
      vErrors.push(err15);
    }
    errors++;
    validate29.errors = vErrors;
    return false;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate29.errors = vErrors;
  return errors === 0;
}
__name(validate29, "validate29");
var AlabarraConfirmDigitalPaymentResponseSuccess = validate30;
function validate30(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.result === void 0 && (missing0 = "result") || data.status === void 0 && (missing0 = "status")) {
        validate30.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "status" || key0 === "result")) {
            validate30.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.status !== void 0) {
            let data0 = data.status;
            const _errs2 = errors;
            if (typeof data0 !== "string") {
              validate30.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            if ("SUCCESS" !== data0) {
              validate30.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.result !== void 0) {
              let data1 = data.result;
              const _errs4 = errors;
              if (errors === _errs4) {
                if (data1 && typeof data1 == "object" && !Array.isArray(data1)) {
                  let missing1;
                  if (data1.order_id === void 0 && (missing1 = "order_id")) {
                    validate30.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                    return false;
                  } else {
                    const _errs6 = errors;
                    for (const key1 in data1) {
                      if (!(key1 === "order_id")) {
                        validate30.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" }];
                        return false;
                        break;
                      }
                    }
                    if (_errs6 === errors) {
                      if (data1.order_id !== void 0) {
                        if (typeof data1.order_id !== "string") {
                          validate30.errors = [{ instancePath: instancePath + "/result/order_id", schemaPath: "#/properties/result/properties/order_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                          return false;
                        }
                      }
                    }
                  }
                } else {
                  validate30.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                  return false;
                }
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
          }
        }
      }
    } else {
      validate30.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate30.errors = vErrors;
  return errors === 0;
}
__name(validate30, "validate30");
var AlabarraConfirmManualPaymentData = validate31;
var schema43 = { "$id": "AlabarraPaymentType", "$schema": "http://json-schema.org/draft-07/schema#", "type": "string", "enum": ["PRESENTIAL_CASH", "PRESENTIAL_CARD", "DIGITAL_STRIPE"], "description": "Type of payment" };
function validate31(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.order_id === void 0 && (missing0 = "order_id") || data.waiter_id === void 0 && (missing0 = "waiter_id") || data.payment_type === void 0 && (missing0 = "payment_type") || data.payment_total === void 0 && (missing0 = "payment_total")) {
        validate31.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "order_id" || key0 === "waiter_id" || key0 === "payment_note" || key0 === "payment_type" || key0 === "payment_total")) {
            validate31.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.order_id !== void 0) {
            const _errs2 = errors;
            if (typeof data.order_id !== "string") {
              validate31.errors = [{ instancePath: instancePath + "/order_id", schemaPath: "#/properties/order_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.waiter_id !== void 0) {
              const _errs4 = errors;
              if (typeof data.waiter_id !== "string") {
                validate31.errors = [{ instancePath: instancePath + "/waiter_id", schemaPath: "#/properties/waiter_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                return false;
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.payment_note !== void 0) {
                const _errs6 = errors;
                if (typeof data.payment_note !== "string") {
                  validate31.errors = [{ instancePath: instancePath + "/payment_note", schemaPath: "#/properties/payment_note/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                  return false;
                }
                var valid0 = _errs6 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.payment_type !== void 0) {
                  let data3 = data.payment_type;
                  const _errs8 = errors;
                  if (typeof data3 !== "string") {
                    validate31.errors = [{ instancePath: instancePath + "/payment_type", schemaPath: "AlabarraPaymentType/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                    return false;
                  }
                  if (!(data3 === "PRESENTIAL_CASH" || data3 === "PRESENTIAL_CARD" || data3 === "DIGITAL_STRIPE")) {
                    validate31.errors = [{ instancePath: instancePath + "/payment_type", schemaPath: "AlabarraPaymentType/enum", keyword: "enum", params: { allowedValues: schema43.enum }, message: "must be equal to one of the allowed values" }];
                    return false;
                  }
                  var valid0 = _errs8 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.payment_total !== void 0) {
                    let data4 = data.payment_total;
                    const _errs11 = errors;
                    if (!(typeof data4 == "number" && isFinite(data4))) {
                      validate31.errors = [{ instancePath: instancePath + "/payment_total", schemaPath: "#/properties/payment_total/type", keyword: "type", params: { type: "number" }, message: "must be number" }];
                      return false;
                    }
                    var valid0 = _errs11 === errors;
                  } else {
                    var valid0 = true;
                  }
                }
              }
            }
          }
        }
      }
    } else {
      validate31.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate31.errors = vErrors;
  return errors === 0;
}
__name(validate31, "validate31");
var AlabarraPaymentType = validate32;
function validate32(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    validate32.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
    return false;
  }
  if (!(data === "PRESENTIAL_CASH" || data === "PRESENTIAL_CARD" || data === "DIGITAL_STRIPE")) {
    validate32.errors = [{ instancePath, schemaPath: "#/enum", keyword: "enum", params: { allowedValues: schema43.enum }, message: "must be equal to one of the allowed values" }];
    return false;
  }
  validate32.errors = vErrors;
  return errors === 0;
}
__name(validate32, "validate32");
var AlabarraCreateOrderDataCartLine = validate33;
var schema45 = { "$id": "AlabarraCreateOrderDataCartLine", "$schema": "http://json-schema.org/draft-07/schema#", "type": "object", "properties": { "product_id": { "type": "string", "description": "Ref to the product" }, "quantity": { "type": "number", "description": "number of products" }, "note": { "type": ["string", "null"], "description": 'note for the particular line (e.g. "Cooked medium-rare please", "No ice")' } }, "required": ["product_id", "quantity", "note"], "additionalProperties": false, "description": "Represents a cart line" };
function validate33(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.product_id === void 0 && (missing0 = "product_id") || data.quantity === void 0 && (missing0 = "quantity") || data.note === void 0 && (missing0 = "note")) {
        validate33.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "product_id" || key0 === "quantity" || key0 === "note")) {
            validate33.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.product_id !== void 0) {
            const _errs2 = errors;
            if (typeof data.product_id !== "string") {
              validate33.errors = [{ instancePath: instancePath + "/product_id", schemaPath: "#/properties/product_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.quantity !== void 0) {
              let data1 = data.quantity;
              const _errs4 = errors;
              if (!(typeof data1 == "number" && isFinite(data1))) {
                validate33.errors = [{ instancePath: instancePath + "/quantity", schemaPath: "#/properties/quantity/type", keyword: "type", params: { type: "number" }, message: "must be number" }];
                return false;
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.note !== void 0) {
                let data2 = data.note;
                const _errs6 = errors;
                if (typeof data2 !== "string" && data2 !== null) {
                  validate33.errors = [{ instancePath: instancePath + "/note", schemaPath: "#/properties/note/type", keyword: "type", params: { type: schema45.properties.note.type }, message: "must be string,null" }];
                  return false;
                }
                var valid0 = _errs6 === errors;
              } else {
                var valid0 = true;
              }
            }
          }
        }
      }
    } else {
      validate33.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate33.errors = vErrors;
  return errors === 0;
}
__name(validate33, "validate33");
var AlabarraCreateOrderData = validate34;
var schema46 = { "$id": "AlabarraCreateOrderData", "$schema": "http://json-schema.org/draft-07/schema#", "type": "object", "properties": { "customer_id": { "type": "string", "description": "Ref to the customer" }, "customer_nickname": { "type": "string", "description": "Nickname for the customer" }, "general_note": { "type": ["string", "null"], "description": 'note for the whole order (e.g. "please bring an extra glass. Thanks!")' }, "cart": { "type": "array", "items": { "$ref": "AlabarraCreateOrderDataCartLine" }, "description": "Array with the orders. Should not be empty" }, "table_name": { "type": "string", "description": "Name of the table where the product should be delivered" } }, "required": ["customer_id", "general_note", "cart", "table_name"], "additionalProperties": false, "description": "API for creating a new order" };
function validate34(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.customer_id === void 0 && (missing0 = "customer_id") || data.general_note === void 0 && (missing0 = "general_note") || data.cart === void 0 && (missing0 = "cart") || data.table_name === void 0 && (missing0 = "table_name")) {
        validate34.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "customer_id" || key0 === "customer_nickname" || key0 === "general_note" || key0 === "cart" || key0 === "table_name")) {
            validate34.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.customer_id !== void 0) {
            const _errs2 = errors;
            if (typeof data.customer_id !== "string") {
              validate34.errors = [{ instancePath: instancePath + "/customer_id", schemaPath: "#/properties/customer_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.customer_nickname !== void 0) {
              const _errs4 = errors;
              if (typeof data.customer_nickname !== "string") {
                validate34.errors = [{ instancePath: instancePath + "/customer_nickname", schemaPath: "#/properties/customer_nickname/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                return false;
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.general_note !== void 0) {
                let data2 = data.general_note;
                const _errs6 = errors;
                if (typeof data2 !== "string" && data2 !== null) {
                  validate34.errors = [{ instancePath: instancePath + "/general_note", schemaPath: "#/properties/general_note/type", keyword: "type", params: { type: schema46.properties.general_note.type }, message: "must be string,null" }];
                  return false;
                }
                var valid0 = _errs6 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.cart !== void 0) {
                  let data3 = data.cart;
                  const _errs8 = errors;
                  if (errors === _errs8) {
                    if (Array.isArray(data3)) {
                      var valid1 = true;
                      const len0 = data3.length;
                      for (let i0 = 0; i0 < len0; i0++) {
                        let data4 = data3[i0];
                        const _errs10 = errors;
                        const _errs11 = errors;
                        if (errors === _errs11) {
                          if (data4 && typeof data4 == "object" && !Array.isArray(data4)) {
                            let missing1;
                            if (data4.product_id === void 0 && (missing1 = "product_id") || data4.quantity === void 0 && (missing1 = "quantity") || data4.note === void 0 && (missing1 = "note")) {
                              validate34.errors = [{ instancePath: instancePath + "/cart/" + i0, schemaPath: "AlabarraCreateOrderDataCartLine/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                              return false;
                            } else {
                              const _errs13 = errors;
                              for (const key1 in data4) {
                                if (!(key1 === "product_id" || key1 === "quantity" || key1 === "note")) {
                                  validate34.errors = [{ instancePath: instancePath + "/cart/" + i0, schemaPath: "AlabarraCreateOrderDataCartLine/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" }];
                                  return false;
                                  break;
                                }
                              }
                              if (_errs13 === errors) {
                                if (data4.product_id !== void 0) {
                                  const _errs14 = errors;
                                  if (typeof data4.product_id !== "string") {
                                    validate34.errors = [{ instancePath: instancePath + "/cart/" + i0 + "/product_id", schemaPath: "AlabarraCreateOrderDataCartLine/properties/product_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                    return false;
                                  }
                                  var valid3 = _errs14 === errors;
                                } else {
                                  var valid3 = true;
                                }
                                if (valid3) {
                                  if (data4.quantity !== void 0) {
                                    let data6 = data4.quantity;
                                    const _errs16 = errors;
                                    if (!(typeof data6 == "number" && isFinite(data6))) {
                                      validate34.errors = [{ instancePath: instancePath + "/cart/" + i0 + "/quantity", schemaPath: "AlabarraCreateOrderDataCartLine/properties/quantity/type", keyword: "type", params: { type: "number" }, message: "must be number" }];
                                      return false;
                                    }
                                    var valid3 = _errs16 === errors;
                                  } else {
                                    var valid3 = true;
                                  }
                                  if (valid3) {
                                    if (data4.note !== void 0) {
                                      let data7 = data4.note;
                                      const _errs18 = errors;
                                      if (typeof data7 !== "string" && data7 !== null) {
                                        validate34.errors = [{ instancePath: instancePath + "/cart/" + i0 + "/note", schemaPath: "AlabarraCreateOrderDataCartLine/properties/note/type", keyword: "type", params: { type: schema45.properties.note.type }, message: "must be string,null" }];
                                        return false;
                                      }
                                      var valid3 = _errs18 === errors;
                                    } else {
                                      var valid3 = true;
                                    }
                                  }
                                }
                              }
                            }
                          } else {
                            validate34.errors = [{ instancePath: instancePath + "/cart/" + i0, schemaPath: "AlabarraCreateOrderDataCartLine/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                            return false;
                          }
                        }
                        var valid1 = _errs10 === errors;
                        if (!valid1) {
                          break;
                        }
                      }
                    } else {
                      validate34.errors = [{ instancePath: instancePath + "/cart", schemaPath: "#/properties/cart/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                      return false;
                    }
                  }
                  var valid0 = _errs8 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.table_name !== void 0) {
                    const _errs20 = errors;
                    if (typeof data.table_name !== "string") {
                      validate34.errors = [{ instancePath: instancePath + "/table_name", schemaPath: "#/properties/table_name/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                      return false;
                    }
                    var valid0 = _errs20 === errors;
                  } else {
                    var valid0 = true;
                  }
                }
              }
            }
          }
        }
      }
    } else {
      validate34.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate34.errors = vErrors;
  return errors === 0;
}
__name(validate34, "validate34");
var AlabarraCreateOrderResponse = validate35;
function validate35(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  let valid0 = false;
  const _errs1 = errors;
  const _errs2 = errors;
  if (errors === _errs2) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.result === void 0 && (missing0 = "result") || data.status === void 0 && (missing0 = "status")) {
        const err0 = { instancePath, schemaPath: "AlabarraCreateOrderResponseSuccess/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        const _errs4 = errors;
        for (const key0 in data) {
          if (!(key0 === "status" || key0 === "result")) {
            const err1 = { instancePath, schemaPath: "AlabarraCreateOrderResponseSuccess/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" };
            if (vErrors === null) {
              vErrors = [err1];
            } else {
              vErrors.push(err1);
            }
            errors++;
            break;
          }
        }
        if (_errs4 === errors) {
          if (data.status !== void 0) {
            let data0 = data.status;
            const _errs5 = errors;
            if (typeof data0 !== "string") {
              const err2 = { instancePath: instancePath + "/status", schemaPath: "AlabarraCreateOrderResponseSuccess/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" };
              if (vErrors === null) {
                vErrors = [err2];
              } else {
                vErrors.push(err2);
              }
              errors++;
            }
            if ("SUCCESS" !== data0) {
              const err3 = { instancePath: instancePath + "/status", schemaPath: "AlabarraCreateOrderResponseSuccess/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" };
              if (vErrors === null) {
                vErrors = [err3];
              } else {
                vErrors.push(err3);
              }
              errors++;
            }
            var valid2 = _errs5 === errors;
          } else {
            var valid2 = true;
          }
          if (valid2) {
            if (data.result !== void 0) {
              let data1 = data.result;
              const _errs7 = errors;
              if (errors === _errs7) {
                if (data1 && typeof data1 == "object" && !Array.isArray(data1)) {
                  let missing1;
                  if (data1.order_id === void 0 && (missing1 = "order_id")) {
                    const err4 = { instancePath: instancePath + "/result", schemaPath: "AlabarraCreateOrderResponseSuccess/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" };
                    if (vErrors === null) {
                      vErrors = [err4];
                    } else {
                      vErrors.push(err4);
                    }
                    errors++;
                  } else {
                    const _errs9 = errors;
                    for (const key1 in data1) {
                      if (!(key1 === "order_id")) {
                        const err5 = { instancePath: instancePath + "/result", schemaPath: "AlabarraCreateOrderResponseSuccess/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" };
                        if (vErrors === null) {
                          vErrors = [err5];
                        } else {
                          vErrors.push(err5);
                        }
                        errors++;
                        break;
                      }
                    }
                    if (_errs9 === errors) {
                      if (data1.order_id !== void 0) {
                        if (typeof data1.order_id !== "string") {
                          const err6 = { instancePath: instancePath + "/result/order_id", schemaPath: "AlabarraCreateOrderResponseSuccess/properties/result/properties/order_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                          if (vErrors === null) {
                            vErrors = [err6];
                          } else {
                            vErrors.push(err6);
                          }
                          errors++;
                        }
                      }
                    }
                  }
                } else {
                  const err7 = { instancePath: instancePath + "/result", schemaPath: "AlabarraCreateOrderResponseSuccess/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" };
                  if (vErrors === null) {
                    vErrors = [err7];
                  } else {
                    vErrors.push(err7);
                  }
                  errors++;
                }
              }
              var valid2 = _errs7 === errors;
            } else {
              var valid2 = true;
            }
          }
        }
      }
    } else {
      const err8 = { instancePath, schemaPath: "AlabarraCreateOrderResponseSuccess/type", keyword: "type", params: { type: "object" }, message: "must be object" };
      if (vErrors === null) {
        vErrors = [err8];
      } else {
        vErrors.push(err8);
      }
      errors++;
    }
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const _errs12 = errors;
    const _errs13 = errors;
    if (errors === _errs13) {
      if (data && typeof data == "object" && !Array.isArray(data)) {
        let missing2;
        if (data.status === void 0 && (missing2 = "status")) {
          const err9 = { instancePath, schemaPath: "ABResponseError/required", keyword: "required", params: { missingProperty: missing2 }, message: "must have required property '" + missing2 + "'" };
          if (vErrors === null) {
            vErrors = [err9];
          } else {
            vErrors.push(err9);
          }
          errors++;
        } else {
          const _errs15 = errors;
          for (const key2 in data) {
            if (!(key2 === "status" || key2 === "error_message")) {
              const err10 = { instancePath, schemaPath: "ABResponseError/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key2 }, message: "must NOT have additional properties" };
              if (vErrors === null) {
                vErrors = [err10];
              } else {
                vErrors.push(err10);
              }
              errors++;
              break;
            }
          }
          if (_errs15 === errors) {
            if (data.status !== void 0) {
              let data3 = data.status;
              const _errs16 = errors;
              if (typeof data3 !== "string") {
                const err11 = { instancePath: instancePath + "/status", schemaPath: "ABResponseError/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                if (vErrors === null) {
                  vErrors = [err11];
                } else {
                  vErrors.push(err11);
                }
                errors++;
              }
              if ("ERROR" !== data3) {
                const err12 = { instancePath: instancePath + "/status", schemaPath: "ABResponseError/properties/status/const", keyword: "const", params: { allowedValue: "ERROR" }, message: "must be equal to constant" };
                if (vErrors === null) {
                  vErrors = [err12];
                } else {
                  vErrors.push(err12);
                }
                errors++;
              }
              var valid5 = _errs16 === errors;
            } else {
              var valid5 = true;
            }
            if (valid5) {
              if (data.error_message !== void 0) {
                const _errs18 = errors;
                if (typeof data.error_message !== "string") {
                  const err13 = { instancePath: instancePath + "/error_message", schemaPath: "ABResponseError/properties/error_message/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                  if (vErrors === null) {
                    vErrors = [err13];
                  } else {
                    vErrors.push(err13);
                  }
                  errors++;
                }
                var valid5 = _errs18 === errors;
              } else {
                var valid5 = true;
              }
            }
          }
        }
      } else {
        const err14 = { instancePath, schemaPath: "ABResponseError/type", keyword: "type", params: { type: "object" }, message: "must be object" };
        if (vErrors === null) {
          vErrors = [err14];
        } else {
          vErrors.push(err14);
        }
        errors++;
      }
    }
    var _valid0 = _errs12 === errors;
    valid0 = valid0 || _valid0;
  }
  if (!valid0) {
    const err15 = { instancePath, schemaPath: "#/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
    if (vErrors === null) {
      vErrors = [err15];
    } else {
      vErrors.push(err15);
    }
    errors++;
    validate35.errors = vErrors;
    return false;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate35.errors = vErrors;
  return errors === 0;
}
__name(validate35, "validate35");
var AlabarraCreateOrderResponseSuccess = validate36;
function validate36(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.result === void 0 && (missing0 = "result") || data.status === void 0 && (missing0 = "status")) {
        validate36.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "status" || key0 === "result")) {
            validate36.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.status !== void 0) {
            let data0 = data.status;
            const _errs2 = errors;
            if (typeof data0 !== "string") {
              validate36.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            if ("SUCCESS" !== data0) {
              validate36.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.result !== void 0) {
              let data1 = data.result;
              const _errs4 = errors;
              if (errors === _errs4) {
                if (data1 && typeof data1 == "object" && !Array.isArray(data1)) {
                  let missing1;
                  if (data1.order_id === void 0 && (missing1 = "order_id")) {
                    validate36.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                    return false;
                  } else {
                    const _errs6 = errors;
                    for (const key1 in data1) {
                      if (!(key1 === "order_id")) {
                        validate36.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" }];
                        return false;
                        break;
                      }
                    }
                    if (_errs6 === errors) {
                      if (data1.order_id !== void 0) {
                        if (typeof data1.order_id !== "string") {
                          validate36.errors = [{ instancePath: instancePath + "/result/order_id", schemaPath: "#/properties/result/properties/order_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                          return false;
                        }
                      }
                    }
                  }
                } else {
                  validate36.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                  return false;
                }
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
          }
        }
      }
    } else {
      validate36.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate36.errors = vErrors;
  return errors === 0;
}
__name(validate36, "validate36");
var AlabarraFulfillOrderData = validate37;
function validate37(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.order_id === void 0 && (missing0 = "order_id")) {
        validate37.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "order_id")) {
            validate37.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.order_id !== void 0) {
            if (typeof data.order_id !== "string") {
              validate37.errors = [{ instancePath: instancePath + "/order_id", schemaPath: "#/properties/order_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
          }
        }
      }
    } else {
      validate37.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate37.errors = vErrors;
  return errors === 0;
}
__name(validate37, "validate37");
var AlabarraSetOrderReadyForDeliveryData = validate38;
function validate38(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.order_id === void 0 && (missing0 = "order_id")) {
        validate38.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "order_id")) {
            validate38.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.order_id !== void 0) {
            if (typeof data.order_id !== "string") {
              validate38.errors = [{ instancePath: instancePath + "/order_id", schemaPath: "#/properties/order_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
          }
        }
      }
    } else {
      validate38.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate38.errors = vErrors;
  return errors === 0;
}
__name(validate38, "validate38");
var AlabarraStartProcessingOrderData = validate39;
function validate39(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.order_id === void 0 && (missing0 = "order_id")) {
        validate39.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "order_id")) {
            validate39.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.order_id !== void 0) {
            if (typeof data.order_id !== "string") {
              validate39.errors = [{ instancePath: instancePath + "/order_id", schemaPath: "#/properties/order_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
          }
        }
      }
    } else {
      validate39.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate39.errors = vErrors;
  return errors === 0;
}
__name(validate39, "validate39");
var AlabarraCreateStripePaymentIntentData = validate40;
function validate40(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.order_id === void 0 && (missing0 = "order_id")) {
        validate40.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "order_id")) {
            validate40.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.order_id !== void 0) {
            if (typeof data.order_id !== "string") {
              validate40.errors = [{ instancePath: instancePath + "/order_id", schemaPath: "#/properties/order_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
          }
        }
      }
    } else {
      validate40.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate40.errors = vErrors;
  return errors === 0;
}
__name(validate40, "validate40");
var AlabarraCreateStripePaymentIntentResponse = validate41;
function validate41(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  let valid0 = false;
  const _errs1 = errors;
  const _errs2 = errors;
  if (errors === _errs2) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.result === void 0 && (missing0 = "result") || data.status === void 0 && (missing0 = "status")) {
        const err0 = { instancePath, schemaPath: "AlabarraCreateStripePaymentIntentResponseSuccess/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        const _errs4 = errors;
        for (const key0 in data) {
          if (!(key0 === "status" || key0 === "result")) {
            const err1 = { instancePath, schemaPath: "AlabarraCreateStripePaymentIntentResponseSuccess/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" };
            if (vErrors === null) {
              vErrors = [err1];
            } else {
              vErrors.push(err1);
            }
            errors++;
            break;
          }
        }
        if (_errs4 === errors) {
          if (data.status !== void 0) {
            let data0 = data.status;
            const _errs5 = errors;
            if (typeof data0 !== "string") {
              const err2 = { instancePath: instancePath + "/status", schemaPath: "AlabarraCreateStripePaymentIntentResponseSuccess/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" };
              if (vErrors === null) {
                vErrors = [err2];
              } else {
                vErrors.push(err2);
              }
              errors++;
            }
            if ("SUCCESS" !== data0) {
              const err3 = { instancePath: instancePath + "/status", schemaPath: "AlabarraCreateStripePaymentIntentResponseSuccess/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" };
              if (vErrors === null) {
                vErrors = [err3];
              } else {
                vErrors.push(err3);
              }
              errors++;
            }
            var valid2 = _errs5 === errors;
          } else {
            var valid2 = true;
          }
          if (valid2) {
            if (data.result !== void 0) {
              let data1 = data.result;
              const _errs7 = errors;
              if (errors === _errs7) {
                if (data1 && typeof data1 == "object" && !Array.isArray(data1)) {
                  let missing1;
                  if (data1.payment_intent_client_secret === void 0 && (missing1 = "payment_intent_client_secret")) {
                    const err4 = { instancePath: instancePath + "/result", schemaPath: "AlabarraCreateStripePaymentIntentResponseSuccess/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" };
                    if (vErrors === null) {
                      vErrors = [err4];
                    } else {
                      vErrors.push(err4);
                    }
                    errors++;
                  } else {
                    const _errs9 = errors;
                    for (const key1 in data1) {
                      if (!(key1 === "payment_intent_client_secret")) {
                        const err5 = { instancePath: instancePath + "/result", schemaPath: "AlabarraCreateStripePaymentIntentResponseSuccess/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" };
                        if (vErrors === null) {
                          vErrors = [err5];
                        } else {
                          vErrors.push(err5);
                        }
                        errors++;
                        break;
                      }
                    }
                    if (_errs9 === errors) {
                      if (data1.payment_intent_client_secret !== void 0) {
                        if (typeof data1.payment_intent_client_secret !== "string") {
                          const err6 = { instancePath: instancePath + "/result/payment_intent_client_secret", schemaPath: "AlabarraCreateStripePaymentIntentResponseSuccess/properties/result/properties/payment_intent_client_secret/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                          if (vErrors === null) {
                            vErrors = [err6];
                          } else {
                            vErrors.push(err6);
                          }
                          errors++;
                        }
                      }
                    }
                  }
                } else {
                  const err7 = { instancePath: instancePath + "/result", schemaPath: "AlabarraCreateStripePaymentIntentResponseSuccess/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" };
                  if (vErrors === null) {
                    vErrors = [err7];
                  } else {
                    vErrors.push(err7);
                  }
                  errors++;
                }
              }
              var valid2 = _errs7 === errors;
            } else {
              var valid2 = true;
            }
          }
        }
      }
    } else {
      const err8 = { instancePath, schemaPath: "AlabarraCreateStripePaymentIntentResponseSuccess/type", keyword: "type", params: { type: "object" }, message: "must be object" };
      if (vErrors === null) {
        vErrors = [err8];
      } else {
        vErrors.push(err8);
      }
      errors++;
    }
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const _errs12 = errors;
    const _errs13 = errors;
    if (errors === _errs13) {
      if (data && typeof data == "object" && !Array.isArray(data)) {
        let missing2;
        if (data.status === void 0 && (missing2 = "status")) {
          const err9 = { instancePath, schemaPath: "ABResponseError/required", keyword: "required", params: { missingProperty: missing2 }, message: "must have required property '" + missing2 + "'" };
          if (vErrors === null) {
            vErrors = [err9];
          } else {
            vErrors.push(err9);
          }
          errors++;
        } else {
          const _errs15 = errors;
          for (const key2 in data) {
            if (!(key2 === "status" || key2 === "error_message")) {
              const err10 = { instancePath, schemaPath: "ABResponseError/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key2 }, message: "must NOT have additional properties" };
              if (vErrors === null) {
                vErrors = [err10];
              } else {
                vErrors.push(err10);
              }
              errors++;
              break;
            }
          }
          if (_errs15 === errors) {
            if (data.status !== void 0) {
              let data3 = data.status;
              const _errs16 = errors;
              if (typeof data3 !== "string") {
                const err11 = { instancePath: instancePath + "/status", schemaPath: "ABResponseError/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                if (vErrors === null) {
                  vErrors = [err11];
                } else {
                  vErrors.push(err11);
                }
                errors++;
              }
              if ("ERROR" !== data3) {
                const err12 = { instancePath: instancePath + "/status", schemaPath: "ABResponseError/properties/status/const", keyword: "const", params: { allowedValue: "ERROR" }, message: "must be equal to constant" };
                if (vErrors === null) {
                  vErrors = [err12];
                } else {
                  vErrors.push(err12);
                }
                errors++;
              }
              var valid5 = _errs16 === errors;
            } else {
              var valid5 = true;
            }
            if (valid5) {
              if (data.error_message !== void 0) {
                const _errs18 = errors;
                if (typeof data.error_message !== "string") {
                  const err13 = { instancePath: instancePath + "/error_message", schemaPath: "ABResponseError/properties/error_message/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                  if (vErrors === null) {
                    vErrors = [err13];
                  } else {
                    vErrors.push(err13);
                  }
                  errors++;
                }
                var valid5 = _errs18 === errors;
              } else {
                var valid5 = true;
              }
            }
          }
        }
      } else {
        const err14 = { instancePath, schemaPath: "ABResponseError/type", keyword: "type", params: { type: "object" }, message: "must be object" };
        if (vErrors === null) {
          vErrors = [err14];
        } else {
          vErrors.push(err14);
        }
        errors++;
      }
    }
    var _valid0 = _errs12 === errors;
    valid0 = valid0 || _valid0;
  }
  if (!valid0) {
    const err15 = { instancePath, schemaPath: "#/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
    if (vErrors === null) {
      vErrors = [err15];
    } else {
      vErrors.push(err15);
    }
    errors++;
    validate41.errors = vErrors;
    return false;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate41.errors = vErrors;
  return errors === 0;
}
__name(validate41, "validate41");
var AlabarraCreateStripePaymentIntentResponseSuccess = validate42;
function validate42(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.result === void 0 && (missing0 = "result") || data.status === void 0 && (missing0 = "status")) {
        validate42.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "status" || key0 === "result")) {
            validate42.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.status !== void 0) {
            let data0 = data.status;
            const _errs2 = errors;
            if (typeof data0 !== "string") {
              validate42.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            if ("SUCCESS" !== data0) {
              validate42.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.result !== void 0) {
              let data1 = data.result;
              const _errs4 = errors;
              if (errors === _errs4) {
                if (data1 && typeof data1 == "object" && !Array.isArray(data1)) {
                  let missing1;
                  if (data1.payment_intent_client_secret === void 0 && (missing1 = "payment_intent_client_secret")) {
                    validate42.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                    return false;
                  } else {
                    const _errs6 = errors;
                    for (const key1 in data1) {
                      if (!(key1 === "payment_intent_client_secret")) {
                        validate42.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" }];
                        return false;
                        break;
                      }
                    }
                    if (_errs6 === errors) {
                      if (data1.payment_intent_client_secret !== void 0) {
                        if (typeof data1.payment_intent_client_secret !== "string") {
                          validate42.errors = [{ instancePath: instancePath + "/result/payment_intent_client_secret", schemaPath: "#/properties/result/properties/payment_intent_client_secret/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                          return false;
                        }
                      }
                    }
                  }
                } else {
                  validate42.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                  return false;
                }
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
          }
        }
      }
    } else {
      validate42.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate42.errors = vErrors;
  return errors === 0;
}
__name(validate42, "validate42");
var ABCreateTableData = validate43;
function validate43(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.table_name === void 0 && (missing0 = "table_name")) {
        validate43.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "table_name")) {
            validate43.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.table_name !== void 0) {
            if (typeof data.table_name !== "string") {
              validate43.errors = [{ instancePath: instancePath + "/table_name", schemaPath: "#/properties/table_name/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
          }
        }
      }
    } else {
      validate43.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate43.errors = vErrors;
  return errors === 0;
}
__name(validate43, "validate43");
var ABCreateTableResponse = validate44;
function validate44(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  let valid0 = false;
  const _errs1 = errors;
  const _errs2 = errors;
  if (errors === _errs2) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.result === void 0 && (missing0 = "result") || data.status === void 0 && (missing0 = "status")) {
        const err0 = { instancePath, schemaPath: "ABCreateTableResponseSuccess/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        const _errs4 = errors;
        for (const key0 in data) {
          if (!(key0 === "status" || key0 === "result")) {
            const err1 = { instancePath, schemaPath: "ABCreateTableResponseSuccess/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" };
            if (vErrors === null) {
              vErrors = [err1];
            } else {
              vErrors.push(err1);
            }
            errors++;
            break;
          }
        }
        if (_errs4 === errors) {
          if (data.status !== void 0) {
            let data0 = data.status;
            const _errs5 = errors;
            if (typeof data0 !== "string") {
              const err2 = { instancePath: instancePath + "/status", schemaPath: "ABCreateTableResponseSuccess/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" };
              if (vErrors === null) {
                vErrors = [err2];
              } else {
                vErrors.push(err2);
              }
              errors++;
            }
            if ("SUCCESS" !== data0) {
              const err3 = { instancePath: instancePath + "/status", schemaPath: "ABCreateTableResponseSuccess/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" };
              if (vErrors === null) {
                vErrors = [err3];
              } else {
                vErrors.push(err3);
              }
              errors++;
            }
            var valid2 = _errs5 === errors;
          } else {
            var valid2 = true;
          }
          if (valid2) {
            if (data.result !== void 0) {
              let data1 = data.result;
              const _errs7 = errors;
              if (errors === _errs7) {
                if (data1 && typeof data1 == "object" && !Array.isArray(data1)) {
                  let missing1;
                  if (data1.table_id === void 0 && (missing1 = "table_id")) {
                    const err4 = { instancePath: instancePath + "/result", schemaPath: "ABCreateTableResponseSuccess/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" };
                    if (vErrors === null) {
                      vErrors = [err4];
                    } else {
                      vErrors.push(err4);
                    }
                    errors++;
                  } else {
                    const _errs9 = errors;
                    for (const key1 in data1) {
                      if (!(key1 === "table_id")) {
                        const err5 = { instancePath: instancePath + "/result", schemaPath: "ABCreateTableResponseSuccess/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" };
                        if (vErrors === null) {
                          vErrors = [err5];
                        } else {
                          vErrors.push(err5);
                        }
                        errors++;
                        break;
                      }
                    }
                    if (_errs9 === errors) {
                      if (data1.table_id !== void 0) {
                        if (typeof data1.table_id !== "string") {
                          const err6 = { instancePath: instancePath + "/result/table_id", schemaPath: "ABCreateTableResponseSuccess/properties/result/properties/table_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                          if (vErrors === null) {
                            vErrors = [err6];
                          } else {
                            vErrors.push(err6);
                          }
                          errors++;
                        }
                      }
                    }
                  }
                } else {
                  const err7 = { instancePath: instancePath + "/result", schemaPath: "ABCreateTableResponseSuccess/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" };
                  if (vErrors === null) {
                    vErrors = [err7];
                  } else {
                    vErrors.push(err7);
                  }
                  errors++;
                }
              }
              var valid2 = _errs7 === errors;
            } else {
              var valid2 = true;
            }
          }
        }
      }
    } else {
      const err8 = { instancePath, schemaPath: "ABCreateTableResponseSuccess/type", keyword: "type", params: { type: "object" }, message: "must be object" };
      if (vErrors === null) {
        vErrors = [err8];
      } else {
        vErrors.push(err8);
      }
      errors++;
    }
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const _errs12 = errors;
    const _errs13 = errors;
    if (errors === _errs13) {
      if (data && typeof data == "object" && !Array.isArray(data)) {
        let missing2;
        if (data.status === void 0 && (missing2 = "status")) {
          const err9 = { instancePath, schemaPath: "ABResponseError/required", keyword: "required", params: { missingProperty: missing2 }, message: "must have required property '" + missing2 + "'" };
          if (vErrors === null) {
            vErrors = [err9];
          } else {
            vErrors.push(err9);
          }
          errors++;
        } else {
          const _errs15 = errors;
          for (const key2 in data) {
            if (!(key2 === "status" || key2 === "error_message")) {
              const err10 = { instancePath, schemaPath: "ABResponseError/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key2 }, message: "must NOT have additional properties" };
              if (vErrors === null) {
                vErrors = [err10];
              } else {
                vErrors.push(err10);
              }
              errors++;
              break;
            }
          }
          if (_errs15 === errors) {
            if (data.status !== void 0) {
              let data3 = data.status;
              const _errs16 = errors;
              if (typeof data3 !== "string") {
                const err11 = { instancePath: instancePath + "/status", schemaPath: "ABResponseError/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                if (vErrors === null) {
                  vErrors = [err11];
                } else {
                  vErrors.push(err11);
                }
                errors++;
              }
              if ("ERROR" !== data3) {
                const err12 = { instancePath: instancePath + "/status", schemaPath: "ABResponseError/properties/status/const", keyword: "const", params: { allowedValue: "ERROR" }, message: "must be equal to constant" };
                if (vErrors === null) {
                  vErrors = [err12];
                } else {
                  vErrors.push(err12);
                }
                errors++;
              }
              var valid5 = _errs16 === errors;
            } else {
              var valid5 = true;
            }
            if (valid5) {
              if (data.error_message !== void 0) {
                const _errs18 = errors;
                if (typeof data.error_message !== "string") {
                  const err13 = { instancePath: instancePath + "/error_message", schemaPath: "ABResponseError/properties/error_message/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                  if (vErrors === null) {
                    vErrors = [err13];
                  } else {
                    vErrors.push(err13);
                  }
                  errors++;
                }
                var valid5 = _errs18 === errors;
              } else {
                var valid5 = true;
              }
            }
          }
        }
      } else {
        const err14 = { instancePath, schemaPath: "ABResponseError/type", keyword: "type", params: { type: "object" }, message: "must be object" };
        if (vErrors === null) {
          vErrors = [err14];
        } else {
          vErrors.push(err14);
        }
        errors++;
      }
    }
    var _valid0 = _errs12 === errors;
    valid0 = valid0 || _valid0;
  }
  if (!valid0) {
    const err15 = { instancePath, schemaPath: "#/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
    if (vErrors === null) {
      vErrors = [err15];
    } else {
      vErrors.push(err15);
    }
    errors++;
    validate44.errors = vErrors;
    return false;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate44.errors = vErrors;
  return errors === 0;
}
__name(validate44, "validate44");
var ABCreateTableResponseSuccess = validate45;
function validate45(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.result === void 0 && (missing0 = "result") || data.status === void 0 && (missing0 = "status")) {
        validate45.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "status" || key0 === "result")) {
            validate45.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.status !== void 0) {
            let data0 = data.status;
            const _errs2 = errors;
            if (typeof data0 !== "string") {
              validate45.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            if ("SUCCESS" !== data0) {
              validate45.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.result !== void 0) {
              let data1 = data.result;
              const _errs4 = errors;
              if (errors === _errs4) {
                if (data1 && typeof data1 == "object" && !Array.isArray(data1)) {
                  let missing1;
                  if (data1.table_id === void 0 && (missing1 = "table_id")) {
                    validate45.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                    return false;
                  } else {
                    const _errs6 = errors;
                    for (const key1 in data1) {
                      if (!(key1 === "table_id")) {
                        validate45.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" }];
                        return false;
                        break;
                      }
                    }
                    if (_errs6 === errors) {
                      if (data1.table_id !== void 0) {
                        if (typeof data1.table_id !== "string") {
                          validate45.errors = [{ instancePath: instancePath + "/result/table_id", schemaPath: "#/properties/result/properties/table_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                          return false;
                        }
                      }
                    }
                  }
                } else {
                  validate45.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                  return false;
                }
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
          }
        }
      }
    } else {
      validate45.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate45.errors = vErrors;
  return errors === 0;
}
__name(validate45, "validate45");
export {
  ABCreateProductData,
  ABCreateProductResponse,
  ABCreateProductResponseSuccess,
  ABCreateTableData,
  ABCreateTableResponse,
  ABCreateTableResponseSuccess,
  ABProductOption,
  ABProductOptionsPossibleValues,
  ABProductOptionsType,
  ABProductStatus,
  ABResponseError,
  ABResponseStatus,
  ABResponseSuccessAbstract,
  AlabarraConfirmDigitalPaymentData,
  AlabarraConfirmDigitalPaymentResponse,
  AlabarraConfirmDigitalPaymentResponseSuccess,
  AlabarraConfirmManualPaymentData,
  AlabarraCreateCategoryData,
  AlabarraCreateCategoryResponse,
  AlabarraCreateCategoryResponseSuccess,
  AlabarraCreateOrderData,
  AlabarraCreateOrderDataCartLine,
  AlabarraCreateOrderResponse,
  AlabarraCreateOrderResponseSuccess,
  AlabarraCreateStripePaymentIntentData,
  AlabarraCreateStripePaymentIntentResponse,
  AlabarraCreateStripePaymentIntentResponseSuccess,
  AlabarraEditProductData,
  AlabarraEditProductResponse,
  AlabarraEditProductResponseSuccess,
  AlabarraFulfillOrderData,
  AlabarraPaymentType,
  AlabarraSetOrderReadyForDeliveryData,
  AlabarraStartProcessingOrderData
};
