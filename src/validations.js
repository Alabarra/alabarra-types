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
var ABStripeMetadata = validate13;
function validate13(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.business_id === void 0 && (missing0 = "business_id") || data.order_id === void 0 && (missing0 = "order_id") || data.payment_id === void 0 && (missing0 = "payment_id")) {
        validate13.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "business_id" || key0 === "order_id" || key0 === "payment_id")) {
            validate13.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.business_id !== void 0) {
            const _errs2 = errors;
            if (typeof data.business_id !== "string") {
              validate13.errors = [{ instancePath: instancePath + "/business_id", schemaPath: "#/properties/business_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.order_id !== void 0) {
              const _errs4 = errors;
              if (typeof data.order_id !== "string") {
                validate13.errors = [{ instancePath: instancePath + "/order_id", schemaPath: "#/properties/order_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                return false;
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.payment_id !== void 0) {
                const _errs6 = errors;
                if (typeof data.payment_id !== "string") {
                  validate13.errors = [{ instancePath: instancePath + "/payment_id", schemaPath: "#/properties/payment_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
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
      validate13.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate13.errors = vErrors;
  return errors === 0;
}
__name(validate13, "validate13");
var ABUpdateBusinessConfigData = validate14;
var schema16 = { "$id": "ABBusinessConfigCountry", "$schema": "http://json-schema.org/draft-07/schema#", "type": "string", "enum": ["DE", "CL"] };
var schema17 = { "$id": "ABBusinessConfigCurrency", "$schema": "http://json-schema.org/draft-07/schema#", "type": "string", "enum": ["EUR", "CLP", "USD", "GBP"] };
function validate15(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      const _errs1 = errors;
      for (const key0 in data) {
        if (!(key0 === "primary" || key0 === "secondary" || key0 === "error" || key0 === "warning" || key0 === "info" || key0 === "success")) {
          validate15.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
          return false;
          break;
        }
      }
      if (_errs1 === errors) {
        if (data.primary !== void 0) {
          let data0 = data.primary;
          const _errs2 = errors;
          const _errs3 = errors;
          if (errors === _errs3) {
            if (data0 && typeof data0 == "object" && !Array.isArray(data0)) {
              let missing0;
              if (data0.main === void 0 && (missing0 = "main")) {
                validate15.errors = [{ instancePath: instancePath + "/primary", schemaPath: "ABPaletteOptions/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
                return false;
              } else {
                const _errs5 = errors;
                for (const key1 in data0) {
                  if (!(key1 === "light" || key1 === "main" || key1 === "dark" || key1 === "contrastText")) {
                    validate15.errors = [{ instancePath: instancePath + "/primary", schemaPath: "ABPaletteOptions/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" }];
                    return false;
                    break;
                  }
                }
                if (_errs5 === errors) {
                  if (data0.light !== void 0) {
                    const _errs6 = errors;
                    if (typeof data0.light !== "string") {
                      validate15.errors = [{ instancePath: instancePath + "/primary/light", schemaPath: "ABPaletteOptions/properties/light/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                      return false;
                    }
                    var valid2 = _errs6 === errors;
                  } else {
                    var valid2 = true;
                  }
                  if (valid2) {
                    if (data0.main !== void 0) {
                      const _errs8 = errors;
                      if (typeof data0.main !== "string") {
                        validate15.errors = [{ instancePath: instancePath + "/primary/main", schemaPath: "ABPaletteOptions/properties/main/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                        return false;
                      }
                      var valid2 = _errs8 === errors;
                    } else {
                      var valid2 = true;
                    }
                    if (valid2) {
                      if (data0.dark !== void 0) {
                        const _errs10 = errors;
                        if (typeof data0.dark !== "string") {
                          validate15.errors = [{ instancePath: instancePath + "/primary/dark", schemaPath: "ABPaletteOptions/properties/dark/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                          return false;
                        }
                        var valid2 = _errs10 === errors;
                      } else {
                        var valid2 = true;
                      }
                      if (valid2) {
                        if (data0.contrastText !== void 0) {
                          const _errs12 = errors;
                          if (typeof data0.contrastText !== "string") {
                            validate15.errors = [{ instancePath: instancePath + "/primary/contrastText", schemaPath: "ABPaletteOptions/properties/contrastText/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                            return false;
                          }
                          var valid2 = _errs12 === errors;
                        } else {
                          var valid2 = true;
                        }
                      }
                    }
                  }
                }
              }
            } else {
              validate15.errors = [{ instancePath: instancePath + "/primary", schemaPath: "ABPaletteOptions/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
              return false;
            }
          }
          var valid0 = _errs2 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.secondary !== void 0) {
            let data5 = data.secondary;
            const _errs14 = errors;
            const _errs15 = errors;
            if (errors === _errs15) {
              if (data5 && typeof data5 == "object" && !Array.isArray(data5)) {
                let missing1;
                if (data5.main === void 0 && (missing1 = "main")) {
                  validate15.errors = [{ instancePath: instancePath + "/secondary", schemaPath: "ABPaletteOptions/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                  return false;
                } else {
                  const _errs17 = errors;
                  for (const key2 in data5) {
                    if (!(key2 === "light" || key2 === "main" || key2 === "dark" || key2 === "contrastText")) {
                      validate15.errors = [{ instancePath: instancePath + "/secondary", schemaPath: "ABPaletteOptions/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key2 }, message: "must NOT have additional properties" }];
                      return false;
                      break;
                    }
                  }
                  if (_errs17 === errors) {
                    if (data5.light !== void 0) {
                      const _errs18 = errors;
                      if (typeof data5.light !== "string") {
                        validate15.errors = [{ instancePath: instancePath + "/secondary/light", schemaPath: "ABPaletteOptions/properties/light/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                        return false;
                      }
                      var valid4 = _errs18 === errors;
                    } else {
                      var valid4 = true;
                    }
                    if (valid4) {
                      if (data5.main !== void 0) {
                        const _errs20 = errors;
                        if (typeof data5.main !== "string") {
                          validate15.errors = [{ instancePath: instancePath + "/secondary/main", schemaPath: "ABPaletteOptions/properties/main/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                          return false;
                        }
                        var valid4 = _errs20 === errors;
                      } else {
                        var valid4 = true;
                      }
                      if (valid4) {
                        if (data5.dark !== void 0) {
                          const _errs22 = errors;
                          if (typeof data5.dark !== "string") {
                            validate15.errors = [{ instancePath: instancePath + "/secondary/dark", schemaPath: "ABPaletteOptions/properties/dark/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                            return false;
                          }
                          var valid4 = _errs22 === errors;
                        } else {
                          var valid4 = true;
                        }
                        if (valid4) {
                          if (data5.contrastText !== void 0) {
                            const _errs24 = errors;
                            if (typeof data5.contrastText !== "string") {
                              validate15.errors = [{ instancePath: instancePath + "/secondary/contrastText", schemaPath: "ABPaletteOptions/properties/contrastText/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                              return false;
                            }
                            var valid4 = _errs24 === errors;
                          } else {
                            var valid4 = true;
                          }
                        }
                      }
                    }
                  }
                }
              } else {
                validate15.errors = [{ instancePath: instancePath + "/secondary", schemaPath: "ABPaletteOptions/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                return false;
              }
            }
            var valid0 = _errs14 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.error !== void 0) {
              let data10 = data.error;
              const _errs26 = errors;
              const _errs27 = errors;
              if (errors === _errs27) {
                if (data10 && typeof data10 == "object" && !Array.isArray(data10)) {
                  let missing2;
                  if (data10.main === void 0 && (missing2 = "main")) {
                    validate15.errors = [{ instancePath: instancePath + "/error", schemaPath: "ABPaletteOptions/required", keyword: "required", params: { missingProperty: missing2 }, message: "must have required property '" + missing2 + "'" }];
                    return false;
                  } else {
                    const _errs29 = errors;
                    for (const key3 in data10) {
                      if (!(key3 === "light" || key3 === "main" || key3 === "dark" || key3 === "contrastText")) {
                        validate15.errors = [{ instancePath: instancePath + "/error", schemaPath: "ABPaletteOptions/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key3 }, message: "must NOT have additional properties" }];
                        return false;
                        break;
                      }
                    }
                    if (_errs29 === errors) {
                      if (data10.light !== void 0) {
                        const _errs30 = errors;
                        if (typeof data10.light !== "string") {
                          validate15.errors = [{ instancePath: instancePath + "/error/light", schemaPath: "ABPaletteOptions/properties/light/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                          return false;
                        }
                        var valid6 = _errs30 === errors;
                      } else {
                        var valid6 = true;
                      }
                      if (valid6) {
                        if (data10.main !== void 0) {
                          const _errs32 = errors;
                          if (typeof data10.main !== "string") {
                            validate15.errors = [{ instancePath: instancePath + "/error/main", schemaPath: "ABPaletteOptions/properties/main/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                            return false;
                          }
                          var valid6 = _errs32 === errors;
                        } else {
                          var valid6 = true;
                        }
                        if (valid6) {
                          if (data10.dark !== void 0) {
                            const _errs34 = errors;
                            if (typeof data10.dark !== "string") {
                              validate15.errors = [{ instancePath: instancePath + "/error/dark", schemaPath: "ABPaletteOptions/properties/dark/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                              return false;
                            }
                            var valid6 = _errs34 === errors;
                          } else {
                            var valid6 = true;
                          }
                          if (valid6) {
                            if (data10.contrastText !== void 0) {
                              const _errs36 = errors;
                              if (typeof data10.contrastText !== "string") {
                                validate15.errors = [{ instancePath: instancePath + "/error/contrastText", schemaPath: "ABPaletteOptions/properties/contrastText/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                return false;
                              }
                              var valid6 = _errs36 === errors;
                            } else {
                              var valid6 = true;
                            }
                          }
                        }
                      }
                    }
                  }
                } else {
                  validate15.errors = [{ instancePath: instancePath + "/error", schemaPath: "ABPaletteOptions/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                  return false;
                }
              }
              var valid0 = _errs26 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.warning !== void 0) {
                let data15 = data.warning;
                const _errs38 = errors;
                const _errs39 = errors;
                if (errors === _errs39) {
                  if (data15 && typeof data15 == "object" && !Array.isArray(data15)) {
                    let missing3;
                    if (data15.main === void 0 && (missing3 = "main")) {
                      validate15.errors = [{ instancePath: instancePath + "/warning", schemaPath: "ABPaletteOptions/required", keyword: "required", params: { missingProperty: missing3 }, message: "must have required property '" + missing3 + "'" }];
                      return false;
                    } else {
                      const _errs41 = errors;
                      for (const key4 in data15) {
                        if (!(key4 === "light" || key4 === "main" || key4 === "dark" || key4 === "contrastText")) {
                          validate15.errors = [{ instancePath: instancePath + "/warning", schemaPath: "ABPaletteOptions/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key4 }, message: "must NOT have additional properties" }];
                          return false;
                          break;
                        }
                      }
                      if (_errs41 === errors) {
                        if (data15.light !== void 0) {
                          const _errs42 = errors;
                          if (typeof data15.light !== "string") {
                            validate15.errors = [{ instancePath: instancePath + "/warning/light", schemaPath: "ABPaletteOptions/properties/light/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                            return false;
                          }
                          var valid8 = _errs42 === errors;
                        } else {
                          var valid8 = true;
                        }
                        if (valid8) {
                          if (data15.main !== void 0) {
                            const _errs44 = errors;
                            if (typeof data15.main !== "string") {
                              validate15.errors = [{ instancePath: instancePath + "/warning/main", schemaPath: "ABPaletteOptions/properties/main/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                              return false;
                            }
                            var valid8 = _errs44 === errors;
                          } else {
                            var valid8 = true;
                          }
                          if (valid8) {
                            if (data15.dark !== void 0) {
                              const _errs46 = errors;
                              if (typeof data15.dark !== "string") {
                                validate15.errors = [{ instancePath: instancePath + "/warning/dark", schemaPath: "ABPaletteOptions/properties/dark/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                return false;
                              }
                              var valid8 = _errs46 === errors;
                            } else {
                              var valid8 = true;
                            }
                            if (valid8) {
                              if (data15.contrastText !== void 0) {
                                const _errs48 = errors;
                                if (typeof data15.contrastText !== "string") {
                                  validate15.errors = [{ instancePath: instancePath + "/warning/contrastText", schemaPath: "ABPaletteOptions/properties/contrastText/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                  return false;
                                }
                                var valid8 = _errs48 === errors;
                              } else {
                                var valid8 = true;
                              }
                            }
                          }
                        }
                      }
                    }
                  } else {
                    validate15.errors = [{ instancePath: instancePath + "/warning", schemaPath: "ABPaletteOptions/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                    return false;
                  }
                }
                var valid0 = _errs38 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.info !== void 0) {
                  let data20 = data.info;
                  const _errs50 = errors;
                  const _errs51 = errors;
                  if (errors === _errs51) {
                    if (data20 && typeof data20 == "object" && !Array.isArray(data20)) {
                      let missing4;
                      if (data20.main === void 0 && (missing4 = "main")) {
                        validate15.errors = [{ instancePath: instancePath + "/info", schemaPath: "ABPaletteOptions/required", keyword: "required", params: { missingProperty: missing4 }, message: "must have required property '" + missing4 + "'" }];
                        return false;
                      } else {
                        const _errs53 = errors;
                        for (const key5 in data20) {
                          if (!(key5 === "light" || key5 === "main" || key5 === "dark" || key5 === "contrastText")) {
                            validate15.errors = [{ instancePath: instancePath + "/info", schemaPath: "ABPaletteOptions/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key5 }, message: "must NOT have additional properties" }];
                            return false;
                            break;
                          }
                        }
                        if (_errs53 === errors) {
                          if (data20.light !== void 0) {
                            const _errs54 = errors;
                            if (typeof data20.light !== "string") {
                              validate15.errors = [{ instancePath: instancePath + "/info/light", schemaPath: "ABPaletteOptions/properties/light/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                              return false;
                            }
                            var valid10 = _errs54 === errors;
                          } else {
                            var valid10 = true;
                          }
                          if (valid10) {
                            if (data20.main !== void 0) {
                              const _errs56 = errors;
                              if (typeof data20.main !== "string") {
                                validate15.errors = [{ instancePath: instancePath + "/info/main", schemaPath: "ABPaletteOptions/properties/main/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                return false;
                              }
                              var valid10 = _errs56 === errors;
                            } else {
                              var valid10 = true;
                            }
                            if (valid10) {
                              if (data20.dark !== void 0) {
                                const _errs58 = errors;
                                if (typeof data20.dark !== "string") {
                                  validate15.errors = [{ instancePath: instancePath + "/info/dark", schemaPath: "ABPaletteOptions/properties/dark/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                  return false;
                                }
                                var valid10 = _errs58 === errors;
                              } else {
                                var valid10 = true;
                              }
                              if (valid10) {
                                if (data20.contrastText !== void 0) {
                                  const _errs60 = errors;
                                  if (typeof data20.contrastText !== "string") {
                                    validate15.errors = [{ instancePath: instancePath + "/info/contrastText", schemaPath: "ABPaletteOptions/properties/contrastText/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                    return false;
                                  }
                                  var valid10 = _errs60 === errors;
                                } else {
                                  var valid10 = true;
                                }
                              }
                            }
                          }
                        }
                      }
                    } else {
                      validate15.errors = [{ instancePath: instancePath + "/info", schemaPath: "ABPaletteOptions/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                      return false;
                    }
                  }
                  var valid0 = _errs50 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.success !== void 0) {
                    let data25 = data.success;
                    const _errs62 = errors;
                    const _errs63 = errors;
                    if (errors === _errs63) {
                      if (data25 && typeof data25 == "object" && !Array.isArray(data25)) {
                        let missing5;
                        if (data25.main === void 0 && (missing5 = "main")) {
                          validate15.errors = [{ instancePath: instancePath + "/success", schemaPath: "ABPaletteOptions/required", keyword: "required", params: { missingProperty: missing5 }, message: "must have required property '" + missing5 + "'" }];
                          return false;
                        } else {
                          const _errs65 = errors;
                          for (const key6 in data25) {
                            if (!(key6 === "light" || key6 === "main" || key6 === "dark" || key6 === "contrastText")) {
                              validate15.errors = [{ instancePath: instancePath + "/success", schemaPath: "ABPaletteOptions/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key6 }, message: "must NOT have additional properties" }];
                              return false;
                              break;
                            }
                          }
                          if (_errs65 === errors) {
                            if (data25.light !== void 0) {
                              const _errs66 = errors;
                              if (typeof data25.light !== "string") {
                                validate15.errors = [{ instancePath: instancePath + "/success/light", schemaPath: "ABPaletteOptions/properties/light/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                return false;
                              }
                              var valid12 = _errs66 === errors;
                            } else {
                              var valid12 = true;
                            }
                            if (valid12) {
                              if (data25.main !== void 0) {
                                const _errs68 = errors;
                                if (typeof data25.main !== "string") {
                                  validate15.errors = [{ instancePath: instancePath + "/success/main", schemaPath: "ABPaletteOptions/properties/main/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                  return false;
                                }
                                var valid12 = _errs68 === errors;
                              } else {
                                var valid12 = true;
                              }
                              if (valid12) {
                                if (data25.dark !== void 0) {
                                  const _errs70 = errors;
                                  if (typeof data25.dark !== "string") {
                                    validate15.errors = [{ instancePath: instancePath + "/success/dark", schemaPath: "ABPaletteOptions/properties/dark/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                    return false;
                                  }
                                  var valid12 = _errs70 === errors;
                                } else {
                                  var valid12 = true;
                                }
                                if (valid12) {
                                  if (data25.contrastText !== void 0) {
                                    const _errs72 = errors;
                                    if (typeof data25.contrastText !== "string") {
                                      validate15.errors = [{ instancePath: instancePath + "/success/contrastText", schemaPath: "ABPaletteOptions/properties/contrastText/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                      return false;
                                    }
                                    var valid12 = _errs72 === errors;
                                  } else {
                                    var valid12 = true;
                                  }
                                }
                              }
                            }
                          }
                        }
                      } else {
                        validate15.errors = [{ instancePath: instancePath + "/success", schemaPath: "ABPaletteOptions/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                        return false;
                      }
                    }
                    var valid0 = _errs62 === errors;
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
      validate15.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate15.errors = vErrors;
  return errors === 0;
}
__name(validate15, "validate15");
function validate14(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.business_id === void 0 && (missing0 = "business_id")) {
        validate14.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "business_id" || key0 === "business_name" || key0 === "country" || key0 === "main_language" || key0 === "currency" || key0 === "logo_url" || key0 === "palette" || key0 === "opening_hours")) {
            validate14.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.business_id !== void 0) {
            const _errs2 = errors;
            if (typeof data.business_id !== "string") {
              validate14.errors = [{ instancePath: instancePath + "/business_id", schemaPath: "#/properties/business_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.business_name !== void 0) {
              const _errs4 = errors;
              if (typeof data.business_name !== "string") {
                validate14.errors = [{ instancePath: instancePath + "/business_name", schemaPath: "#/properties/business_name/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                return false;
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.country !== void 0) {
                let data2 = data.country;
                const _errs6 = errors;
                if (typeof data2 !== "string") {
                  validate14.errors = [{ instancePath: instancePath + "/country", schemaPath: "ABBusinessConfigCountry/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                  return false;
                }
                if (!(data2 === "DE" || data2 === "CL")) {
                  validate14.errors = [{ instancePath: instancePath + "/country", schemaPath: "ABBusinessConfigCountry/enum", keyword: "enum", params: { allowedValues: schema16.enum }, message: "must be equal to one of the allowed values" }];
                  return false;
                }
                var valid0 = _errs6 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.main_language !== void 0) {
                  const _errs9 = errors;
                  if (typeof data.main_language !== "string") {
                    validate14.errors = [{ instancePath: instancePath + "/main_language", schemaPath: "#/properties/main_language/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                    return false;
                  }
                  var valid0 = _errs9 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.currency !== void 0) {
                    let data4 = data.currency;
                    const _errs11 = errors;
                    if (typeof data4 !== "string") {
                      validate14.errors = [{ instancePath: instancePath + "/currency", schemaPath: "ABBusinessConfigCurrency/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                      return false;
                    }
                    if (!(data4 === "EUR" || data4 === "CLP" || data4 === "USD" || data4 === "GBP")) {
                      validate14.errors = [{ instancePath: instancePath + "/currency", schemaPath: "ABBusinessConfigCurrency/enum", keyword: "enum", params: { allowedValues: schema17.enum }, message: "must be equal to one of the allowed values" }];
                      return false;
                    }
                    var valid0 = _errs11 === errors;
                  } else {
                    var valid0 = true;
                  }
                  if (valid0) {
                    if (data.logo_url !== void 0) {
                      const _errs14 = errors;
                      if (typeof data.logo_url !== "string") {
                        validate14.errors = [{ instancePath: instancePath + "/logo_url", schemaPath: "#/properties/logo_url/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                        return false;
                      }
                      var valid0 = _errs14 === errors;
                    } else {
                      var valid0 = true;
                    }
                    if (valid0) {
                      if (data.palette !== void 0) {
                        const _errs16 = errors;
                        if (!validate15(data.palette, { instancePath: instancePath + "/palette", parentData: data, parentDataProperty: "palette", rootData })) {
                          vErrors = vErrors === null ? validate15.errors : vErrors.concat(validate15.errors);
                          errors = vErrors.length;
                        }
                        var valid0 = _errs16 === errors;
                      } else {
                        var valid0 = true;
                      }
                      if (valid0) {
                        if (data.opening_hours !== void 0) {
                          let data7 = data.opening_hours;
                          const _errs17 = errors;
                          const _errs18 = errors;
                          if (errors === _errs18) {
                            if (data7 && typeof data7 == "object" && !Array.isArray(data7)) {
                              let missing1;
                              if (data7.opening === void 0 && (missing1 = "opening") || data7.closing === void 0 && (missing1 = "closing")) {
                                validate14.errors = [{ instancePath: instancePath + "/opening_hours", schemaPath: "ABOpeningHours/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                                return false;
                              } else {
                                const _errs20 = errors;
                                for (const key1 in data7) {
                                  if (!(key1 === "opening" || key1 === "closing")) {
                                    validate14.errors = [{ instancePath: instancePath + "/opening_hours", schemaPath: "ABOpeningHours/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" }];
                                    return false;
                                    break;
                                  }
                                }
                                if (_errs20 === errors) {
                                  if (data7.opening !== void 0) {
                                    let data8 = data7.opening;
                                    const _errs21 = errors;
                                    if (!(typeof data8 == "number" && isFinite(data8))) {
                                      validate14.errors = [{ instancePath: instancePath + "/opening_hours/opening", schemaPath: "ABOpeningHours/properties/opening/type", keyword: "type", params: { type: "number" }, message: "must be number" }];
                                      return false;
                                    }
                                    var valid4 = _errs21 === errors;
                                  } else {
                                    var valid4 = true;
                                  }
                                  if (valid4) {
                                    if (data7.closing !== void 0) {
                                      let data9 = data7.closing;
                                      const _errs23 = errors;
                                      if (!(typeof data9 == "number" && isFinite(data9))) {
                                        validate14.errors = [{ instancePath: instancePath + "/opening_hours/closing", schemaPath: "ABOpeningHours/properties/closing/type", keyword: "type", params: { type: "number" }, message: "must be number" }];
                                        return false;
                                      }
                                      var valid4 = _errs23 === errors;
                                    } else {
                                      var valid4 = true;
                                    }
                                  }
                                }
                              }
                            } else {
                              validate14.errors = [{ instancePath: instancePath + "/opening_hours", schemaPath: "ABOpeningHours/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                              return false;
                            }
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
      validate14.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate14.errors = vErrors;
  return errors === 0;
}
__name(validate14, "validate14");
var ABBusinessConfigCountry = validate17;
function validate17(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    validate17.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
    return false;
  }
  if (!(data === "DE" || data === "CL")) {
    validate17.errors = [{ instancePath, schemaPath: "#/enum", keyword: "enum", params: { allowedValues: schema16.enum }, message: "must be equal to one of the allowed values" }];
    return false;
  }
  validate17.errors = vErrors;
  return errors === 0;
}
__name(validate17, "validate17");
var ABBusinessConfigCurrency = validate18;
function validate18(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    validate18.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
    return false;
  }
  if (!(data === "EUR" || data === "CLP" || data === "USD" || data === "GBP")) {
    validate18.errors = [{ instancePath, schemaPath: "#/enum", keyword: "enum", params: { allowedValues: schema17.enum }, message: "must be equal to one of the allowed values" }];
    return false;
  }
  validate18.errors = vErrors;
  return errors === 0;
}
__name(validate18, "validate18");
var ABPalette = validate15;
var ABPaletteOptions = validate19;
function validate19(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.main === void 0 && (missing0 = "main")) {
        validate19.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "light" || key0 === "main" || key0 === "dark" || key0 === "contrastText")) {
            validate19.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.light !== void 0) {
            const _errs2 = errors;
            if (typeof data.light !== "string") {
              validate19.errors = [{ instancePath: instancePath + "/light", schemaPath: "#/properties/light/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.main !== void 0) {
              const _errs4 = errors;
              if (typeof data.main !== "string") {
                validate19.errors = [{ instancePath: instancePath + "/main", schemaPath: "#/properties/main/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                return false;
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.dark !== void 0) {
                const _errs6 = errors;
                if (typeof data.dark !== "string") {
                  validate19.errors = [{ instancePath: instancePath + "/dark", schemaPath: "#/properties/dark/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                  return false;
                }
                var valid0 = _errs6 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.contrastText !== void 0) {
                  const _errs8 = errors;
                  if (typeof data.contrastText !== "string") {
                    validate19.errors = [{ instancePath: instancePath + "/contrastText", schemaPath: "#/properties/contrastText/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                    return false;
                  }
                  var valid0 = _errs8 === errors;
                } else {
                  var valid0 = true;
                }
              }
            }
          }
        }
      }
    } else {
      validate19.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate19.errors = vErrors;
  return errors === 0;
}
__name(validate19, "validate19");
var ABOpeningHours = validate20;
function validate20(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.opening === void 0 && (missing0 = "opening") || data.closing === void 0 && (missing0 = "closing")) {
        validate20.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "opening" || key0 === "closing")) {
            validate20.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.opening !== void 0) {
            let data0 = data.opening;
            const _errs2 = errors;
            if (!(typeof data0 == "number" && isFinite(data0))) {
              validate20.errors = [{ instancePath: instancePath + "/opening", schemaPath: "#/properties/opening/type", keyword: "type", params: { type: "number" }, message: "must be number" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.closing !== void 0) {
              let data1 = data.closing;
              const _errs4 = errors;
              if (!(typeof data1 == "number" && isFinite(data1))) {
                validate20.errors = [{ instancePath: instancePath + "/closing", schemaPath: "#/properties/closing/type", keyword: "type", params: { type: "number" }, message: "must be number" }];
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
var ABUpdateBusinessConfigResponse = validate21;
function validate21(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
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
        const err0 = { instancePath, schemaPath: "ABUpdateBusinessConfigResponseSuccess/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" };
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
            const err1 = { instancePath, schemaPath: "ABUpdateBusinessConfigResponseSuccess/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" };
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
              const err2 = { instancePath: instancePath + "/status", schemaPath: "ABUpdateBusinessConfigResponseSuccess/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" };
              if (vErrors === null) {
                vErrors = [err2];
              } else {
                vErrors.push(err2);
              }
              errors++;
            }
            if ("SUCCESS" !== data0) {
              const err3 = { instancePath: instancePath + "/status", schemaPath: "ABUpdateBusinessConfigResponseSuccess/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" };
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
                  if (data1.business_id === void 0 && (missing1 = "business_id")) {
                    const err4 = { instancePath: instancePath + "/result", schemaPath: "ABUpdateBusinessConfigResponseSuccess/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" };
                    if (vErrors === null) {
                      vErrors = [err4];
                    } else {
                      vErrors.push(err4);
                    }
                    errors++;
                  } else {
                    const _errs9 = errors;
                    for (const key1 in data1) {
                      if (!(key1 === "business_id")) {
                        const err5 = { instancePath: instancePath + "/result", schemaPath: "ABUpdateBusinessConfigResponseSuccess/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" };
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
                      if (data1.business_id !== void 0) {
                        if (typeof data1.business_id !== "string") {
                          const err6 = { instancePath: instancePath + "/result/business_id", schemaPath: "ABUpdateBusinessConfigResponseSuccess/properties/result/properties/business_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
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
                  const err7 = { instancePath: instancePath + "/result", schemaPath: "ABUpdateBusinessConfigResponseSuccess/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" };
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
      const err8 = { instancePath, schemaPath: "ABUpdateBusinessConfigResponseSuccess/type", keyword: "type", params: { type: "object" }, message: "must be object" };
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
    validate21.errors = vErrors;
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
  validate21.errors = vErrors;
  return errors === 0;
}
__name(validate21, "validate21");
var ABUpdateBusinessConfigResponseSuccess = validate22;
function validate22(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.result === void 0 && (missing0 = "result") || data.status === void 0 && (missing0 = "status")) {
        validate22.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "status" || key0 === "result")) {
            validate22.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.status !== void 0) {
            let data0 = data.status;
            const _errs2 = errors;
            if (typeof data0 !== "string") {
              validate22.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            if ("SUCCESS" !== data0) {
              validate22.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" }];
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
                  if (data1.business_id === void 0 && (missing1 = "business_id")) {
                    validate22.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                    return false;
                  } else {
                    const _errs6 = errors;
                    for (const key1 in data1) {
                      if (!(key1 === "business_id")) {
                        validate22.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" }];
                        return false;
                        break;
                      }
                    }
                    if (_errs6 === errors) {
                      if (data1.business_id !== void 0) {
                        if (typeof data1.business_id !== "string") {
                          validate22.errors = [{ instancePath: instancePath + "/result/business_id", schemaPath: "#/properties/result/properties/business_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                          return false;
                        }
                      }
                    }
                  }
                } else {
                  validate22.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
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
      validate22.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate22.errors = vErrors;
  return errors === 0;
}
__name(validate22, "validate22");
var ABReorderCategoryData = validate23;
function validate23(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.business_id === void 0 && (missing0 = "business_id") || data.old_index === void 0 && (missing0 = "old_index") || data.new_index === void 0 && (missing0 = "new_index")) {
        validate23.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "business_id" || key0 === "old_index" || key0 === "new_index")) {
            validate23.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.business_id !== void 0) {
            const _errs2 = errors;
            if (typeof data.business_id !== "string") {
              validate23.errors = [{ instancePath: instancePath + "/business_id", schemaPath: "#/properties/business_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.old_index !== void 0) {
              let data1 = data.old_index;
              const _errs4 = errors;
              if (!(typeof data1 == "number" && isFinite(data1))) {
                validate23.errors = [{ instancePath: instancePath + "/old_index", schemaPath: "#/properties/old_index/type", keyword: "type", params: { type: "number" }, message: "must be number" }];
                return false;
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.new_index !== void 0) {
                let data2 = data.new_index;
                const _errs6 = errors;
                if (!(typeof data2 == "number" && isFinite(data2))) {
                  validate23.errors = [{ instancePath: instancePath + "/new_index", schemaPath: "#/properties/new_index/type", keyword: "type", params: { type: "number" }, message: "must be number" }];
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
      validate23.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate23.errors = vErrors;
  return errors === 0;
}
__name(validate23, "validate23");
var ABReorderCategoryDataResponse = validate24;
function validate24(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
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
        const err0 = { instancePath, schemaPath: "ABReorderCategoryDataResponseSuccess/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" };
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
            const err1 = { instancePath, schemaPath: "ABReorderCategoryDataResponseSuccess/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" };
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
              const err2 = { instancePath: instancePath + "/status", schemaPath: "ABReorderCategoryDataResponseSuccess/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" };
              if (vErrors === null) {
                vErrors = [err2];
              } else {
                vErrors.push(err2);
              }
              errors++;
            }
            if ("SUCCESS" !== data0) {
              const err3 = { instancePath: instancePath + "/status", schemaPath: "ABReorderCategoryDataResponseSuccess/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" };
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
                  for (const key1 in data1) {
                    const err4 = { instancePath: instancePath + "/result", schemaPath: "ABReorderCategoryDataResponseSuccess/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" };
                    if (vErrors === null) {
                      vErrors = [err4];
                    } else {
                      vErrors.push(err4);
                    }
                    errors++;
                    break;
                  }
                } else {
                  const err5 = { instancePath: instancePath + "/result", schemaPath: "ABReorderCategoryDataResponseSuccess/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" };
                  if (vErrors === null) {
                    vErrors = [err5];
                  } else {
                    vErrors.push(err5);
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
      const err6 = { instancePath, schemaPath: "ABReorderCategoryDataResponseSuccess/type", keyword: "type", params: { type: "object" }, message: "must be object" };
      if (vErrors === null) {
        vErrors = [err6];
      } else {
        vErrors.push(err6);
      }
      errors++;
    }
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const _errs10 = errors;
    const _errs11 = errors;
    if (errors === _errs11) {
      if (data && typeof data == "object" && !Array.isArray(data)) {
        let missing1;
        if (data.status === void 0 && (missing1 = "status")) {
          const err7 = { instancePath, schemaPath: "ABResponseError/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" };
          if (vErrors === null) {
            vErrors = [err7];
          } else {
            vErrors.push(err7);
          }
          errors++;
        } else {
          const _errs13 = errors;
          for (const key2 in data) {
            if (!(key2 === "status" || key2 === "error_message")) {
              const err8 = { instancePath, schemaPath: "ABResponseError/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key2 }, message: "must NOT have additional properties" };
              if (vErrors === null) {
                vErrors = [err8];
              } else {
                vErrors.push(err8);
              }
              errors++;
              break;
            }
          }
          if (_errs13 === errors) {
            if (data.status !== void 0) {
              let data2 = data.status;
              const _errs14 = errors;
              if (typeof data2 !== "string") {
                const err9 = { instancePath: instancePath + "/status", schemaPath: "ABResponseError/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                if (vErrors === null) {
                  vErrors = [err9];
                } else {
                  vErrors.push(err9);
                }
                errors++;
              }
              if ("ERROR" !== data2) {
                const err10 = { instancePath: instancePath + "/status", schemaPath: "ABResponseError/properties/status/const", keyword: "const", params: { allowedValue: "ERROR" }, message: "must be equal to constant" };
                if (vErrors === null) {
                  vErrors = [err10];
                } else {
                  vErrors.push(err10);
                }
                errors++;
              }
              var valid4 = _errs14 === errors;
            } else {
              var valid4 = true;
            }
            if (valid4) {
              if (data.error_message !== void 0) {
                const _errs16 = errors;
                if (typeof data.error_message !== "string") {
                  const err11 = { instancePath: instancePath + "/error_message", schemaPath: "ABResponseError/properties/error_message/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                  if (vErrors === null) {
                    vErrors = [err11];
                  } else {
                    vErrors.push(err11);
                  }
                  errors++;
                }
                var valid4 = _errs16 === errors;
              } else {
                var valid4 = true;
              }
            }
          }
        }
      } else {
        const err12 = { instancePath, schemaPath: "ABResponseError/type", keyword: "type", params: { type: "object" }, message: "must be object" };
        if (vErrors === null) {
          vErrors = [err12];
        } else {
          vErrors.push(err12);
        }
        errors++;
      }
    }
    var _valid0 = _errs10 === errors;
    valid0 = valid0 || _valid0;
  }
  if (!valid0) {
    const err13 = { instancePath, schemaPath: "#/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
    if (vErrors === null) {
      vErrors = [err13];
    } else {
      vErrors.push(err13);
    }
    errors++;
    validate24.errors = vErrors;
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
  validate24.errors = vErrors;
  return errors === 0;
}
__name(validate24, "validate24");
var ABReorderCategoryDataResponseSuccess = validate25;
function validate25(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.result === void 0 && (missing0 = "result") || data.status === void 0 && (missing0 = "status")) {
        validate25.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "status" || key0 === "result")) {
            validate25.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.status !== void 0) {
            let data0 = data.status;
            const _errs2 = errors;
            if (typeof data0 !== "string") {
              validate25.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            if ("SUCCESS" !== data0) {
              validate25.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" }];
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
                  for (const key1 in data1) {
                    validate25.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" }];
                    return false;
                    break;
                  }
                } else {
                  validate25.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
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
      validate25.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate25.errors = vErrors;
  return errors === 0;
}
__name(validate25, "validate25");
var ABCreateCategoryData = validate26;
function validate26(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.business_id === void 0 && (missing0 = "business_id") || data.category_name === void 0 && (missing0 = "category_name") || data.category_description === void 0 && (missing0 = "category_description")) {
        validate26.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "business_id" || key0 === "category_name" || key0 === "category_description")) {
            validate26.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.business_id !== void 0) {
            const _errs2 = errors;
            if (typeof data.business_id !== "string") {
              validate26.errors = [{ instancePath: instancePath + "/business_id", schemaPath: "#/properties/business_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.category_name !== void 0) {
              const _errs4 = errors;
              if (typeof data.category_name !== "string") {
                validate26.errors = [{ instancePath: instancePath + "/category_name", schemaPath: "#/properties/category_name/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                return false;
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.category_description !== void 0) {
                const _errs6 = errors;
                if (typeof data.category_description !== "string") {
                  validate26.errors = [{ instancePath: instancePath + "/category_description", schemaPath: "#/properties/category_description/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
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
      validate26.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate26.errors = vErrors;
  return errors === 0;
}
__name(validate26, "validate26");
var ABCreateCategoryResponse = validate27;
function validate27(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
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
        const err0 = { instancePath, schemaPath: "ABCreateCategoryResponseSuccess/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" };
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
            const err1 = { instancePath, schemaPath: "ABCreateCategoryResponseSuccess/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" };
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
              const err2 = { instancePath: instancePath + "/status", schemaPath: "ABCreateCategoryResponseSuccess/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" };
              if (vErrors === null) {
                vErrors = [err2];
              } else {
                vErrors.push(err2);
              }
              errors++;
            }
            if ("SUCCESS" !== data0) {
              const err3 = { instancePath: instancePath + "/status", schemaPath: "ABCreateCategoryResponseSuccess/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" };
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
                    const err4 = { instancePath: instancePath + "/result", schemaPath: "ABCreateCategoryResponseSuccess/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" };
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
                        const err5 = { instancePath: instancePath + "/result", schemaPath: "ABCreateCategoryResponseSuccess/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" };
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
                          const err6 = { instancePath: instancePath + "/result/category_id", schemaPath: "ABCreateCategoryResponseSuccess/properties/result/properties/category_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
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
                  const err7 = { instancePath: instancePath + "/result", schemaPath: "ABCreateCategoryResponseSuccess/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" };
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
      const err8 = { instancePath, schemaPath: "ABCreateCategoryResponseSuccess/type", keyword: "type", params: { type: "object" }, message: "must be object" };
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
    validate27.errors = vErrors;
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
  validate27.errors = vErrors;
  return errors === 0;
}
__name(validate27, "validate27");
var ABCreateCategoryResponseSuccess = validate28;
function validate28(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.result === void 0 && (missing0 = "result") || data.status === void 0 && (missing0 = "status")) {
        validate28.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "status" || key0 === "result")) {
            validate28.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.status !== void 0) {
            let data0 = data.status;
            const _errs2 = errors;
            if (typeof data0 !== "string") {
              validate28.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            if ("SUCCESS" !== data0) {
              validate28.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" }];
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
                    validate28.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                    return false;
                  } else {
                    const _errs6 = errors;
                    for (const key1 in data1) {
                      if (!(key1 === "category_id")) {
                        validate28.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" }];
                        return false;
                        break;
                      }
                    }
                    if (_errs6 === errors) {
                      if (data1.category_id !== void 0) {
                        if (typeof data1.category_id !== "string") {
                          validate28.errors = [{ instancePath: instancePath + "/result/category_id", schemaPath: "#/properties/result/properties/category_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                          return false;
                        }
                      }
                    }
                  }
                } else {
                  validate28.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
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
      validate28.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate28.errors = vErrors;
  return errors === 0;
}
__name(validate28, "validate28");
var ABCreateProductData = validate29;
var schema52 = { "$id": "ABProductStatus", "$schema": "http://json-schema.org/draft-07/schema#", "type": "string", "enum": ["ACTIVE", "INACTIVE"], "description": "Status of each product" };
var schema47 = { "$id": "ABProductOptionsType", "$schema": "http://json-schema.org/draft-07/schema#", "type": "string", "enum": ["SINGLE_SELECTION", "MULTIPLE_SELECTION"], "description": "Type of option, such as single selection, multiple selection, etc." };
function validate31(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.default_value === void 0 && (missing0 = "default_value") || data.id === void 0 && (missing0 = "id") || data.possible_values === void 0 && (missing0 = "possible_values") || data.title === void 0 && (missing0 = "title") || data.type === void 0 && (missing0 = "type")) {
        validate31.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "id" || key0 === "title" || key0 === "type" || key0 === "possible_values" || key0 === "default_value")) {
            validate31.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.id !== void 0) {
            const _errs2 = errors;
            if (typeof data.id !== "string") {
              validate31.errors = [{ instancePath: instancePath + "/id", schemaPath: "#/properties/id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
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
                validate31.errors = [{ instancePath: instancePath + "/title", schemaPath: "#/properties/title/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                return false;
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.type !== void 0) {
                let data2 = data.type;
                const _errs6 = errors;
                if (typeof data2 !== "string") {
                  validate31.errors = [{ instancePath: instancePath + "/type", schemaPath: "ABProductOptionsType/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                  return false;
                }
                if (!(data2 === "SINGLE_SELECTION" || data2 === "MULTIPLE_SELECTION")) {
                  validate31.errors = [{ instancePath: instancePath + "/type", schemaPath: "ABProductOptionsType/enum", keyword: "enum", params: { allowedValues: schema47.enum }, message: "must be equal to one of the allowed values" }];
                  return false;
                }
                var valid0 = _errs6 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.possible_values !== void 0) {
                  let data3 = data.possible_values;
                  const _errs9 = errors;
                  if (errors === _errs9) {
                    if (Array.isArray(data3)) {
                      var valid2 = true;
                      const len0 = data3.length;
                      for (let i0 = 0; i0 < len0; i0++) {
                        let data4 = data3[i0];
                        const _errs11 = errors;
                        const _errs12 = errors;
                        if (errors === _errs12) {
                          if (data4 && typeof data4 == "object" && !Array.isArray(data4)) {
                            let missing1;
                            if (data4.id === void 0 && (missing1 = "id") || data4.title === void 0 && (missing1 = "title") || data4.price_adjustment === void 0 && (missing1 = "price_adjustment")) {
                              validate31.errors = [{ instancePath: instancePath + "/possible_values/" + i0, schemaPath: "ABProductOptionsPossibleValue/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                              return false;
                            } else {
                              const _errs14 = errors;
                              for (const key1 in data4) {
                                if (!(key1 === "id" || key1 === "title" || key1 === "price_adjustment")) {
                                  validate31.errors = [{ instancePath: instancePath + "/possible_values/" + i0, schemaPath: "ABProductOptionsPossibleValue/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" }];
                                  return false;
                                  break;
                                }
                              }
                              if (_errs14 === errors) {
                                if (data4.id !== void 0) {
                                  const _errs15 = errors;
                                  if (typeof data4.id !== "string") {
                                    validate31.errors = [{ instancePath: instancePath + "/possible_values/" + i0 + "/id", schemaPath: "ABProductOptionsPossibleValue/properties/id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                    return false;
                                  }
                                  var valid4 = _errs15 === errors;
                                } else {
                                  var valid4 = true;
                                }
                                if (valid4) {
                                  if (data4.title !== void 0) {
                                    const _errs17 = errors;
                                    if (typeof data4.title !== "string") {
                                      validate31.errors = [{ instancePath: instancePath + "/possible_values/" + i0 + "/title", schemaPath: "ABProductOptionsPossibleValue/properties/title/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                      return false;
                                    }
                                    var valid4 = _errs17 === errors;
                                  } else {
                                    var valid4 = true;
                                  }
                                  if (valid4) {
                                    if (data4.price_adjustment !== void 0) {
                                      let data7 = data4.price_adjustment;
                                      const _errs19 = errors;
                                      if (!(typeof data7 == "number" && isFinite(data7))) {
                                        validate31.errors = [{ instancePath: instancePath + "/possible_values/" + i0 + "/price_adjustment", schemaPath: "ABProductOptionsPossibleValue/properties/price_adjustment/type", keyword: "type", params: { type: "number" }, message: "must be number" }];
                                        return false;
                                      }
                                      var valid4 = _errs19 === errors;
                                    } else {
                                      var valid4 = true;
                                    }
                                  }
                                }
                              }
                            }
                          } else {
                            validate31.errors = [{ instancePath: instancePath + "/possible_values/" + i0, schemaPath: "ABProductOptionsPossibleValue/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                            return false;
                          }
                        }
                        var valid2 = _errs11 === errors;
                        if (!valid2) {
                          break;
                        }
                      }
                    } else {
                      validate31.errors = [{ instancePath: instancePath + "/possible_values", schemaPath: "#/properties/possible_values/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                      return false;
                    }
                  }
                  var valid0 = _errs9 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.default_value !== void 0) {
                    const _errs21 = errors;
                    if (typeof data.default_value !== "string") {
                      validate31.errors = [{ instancePath: instancePath + "/default_value", schemaPath: "#/properties/default_value/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                      return false;
                    }
                    var valid0 = _errs21 === errors;
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
function validate33(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.default_values === void 0 && (missing0 = "default_values") || data.id === void 0 && (missing0 = "id") || data.max_selection === void 0 && (missing0 = "max_selection") || data.min_selection === void 0 && (missing0 = "min_selection") || data.possible_values === void 0 && (missing0 = "possible_values") || data.title === void 0 && (missing0 = "title") || data.type === void 0 && (missing0 = "type")) {
        validate33.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "id" || key0 === "title" || key0 === "type" || key0 === "possible_values" || key0 === "default_values" || key0 === "max_selection" || key0 === "min_selection")) {
            validate33.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.id !== void 0) {
            const _errs2 = errors;
            if (typeof data.id !== "string") {
              validate33.errors = [{ instancePath: instancePath + "/id", schemaPath: "#/properties/id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
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
                validate33.errors = [{ instancePath: instancePath + "/title", schemaPath: "#/properties/title/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                return false;
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.type !== void 0) {
                let data2 = data.type;
                const _errs6 = errors;
                if (typeof data2 !== "string") {
                  validate33.errors = [{ instancePath: instancePath + "/type", schemaPath: "ABProductOptionsType/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                  return false;
                }
                if (!(data2 === "SINGLE_SELECTION" || data2 === "MULTIPLE_SELECTION")) {
                  validate33.errors = [{ instancePath: instancePath + "/type", schemaPath: "ABProductOptionsType/enum", keyword: "enum", params: { allowedValues: schema47.enum }, message: "must be equal to one of the allowed values" }];
                  return false;
                }
                var valid0 = _errs6 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.possible_values !== void 0) {
                  let data3 = data.possible_values;
                  const _errs9 = errors;
                  if (errors === _errs9) {
                    if (Array.isArray(data3)) {
                      var valid2 = true;
                      const len0 = data3.length;
                      for (let i0 = 0; i0 < len0; i0++) {
                        let data4 = data3[i0];
                        const _errs11 = errors;
                        const _errs12 = errors;
                        if (errors === _errs12) {
                          if (data4 && typeof data4 == "object" && !Array.isArray(data4)) {
                            let missing1;
                            if (data4.id === void 0 && (missing1 = "id") || data4.title === void 0 && (missing1 = "title") || data4.price_adjustment === void 0 && (missing1 = "price_adjustment")) {
                              validate33.errors = [{ instancePath: instancePath + "/possible_values/" + i0, schemaPath: "ABProductOptionsPossibleValue/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                              return false;
                            } else {
                              const _errs14 = errors;
                              for (const key1 in data4) {
                                if (!(key1 === "id" || key1 === "title" || key1 === "price_adjustment")) {
                                  validate33.errors = [{ instancePath: instancePath + "/possible_values/" + i0, schemaPath: "ABProductOptionsPossibleValue/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" }];
                                  return false;
                                  break;
                                }
                              }
                              if (_errs14 === errors) {
                                if (data4.id !== void 0) {
                                  const _errs15 = errors;
                                  if (typeof data4.id !== "string") {
                                    validate33.errors = [{ instancePath: instancePath + "/possible_values/" + i0 + "/id", schemaPath: "ABProductOptionsPossibleValue/properties/id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                    return false;
                                  }
                                  var valid4 = _errs15 === errors;
                                } else {
                                  var valid4 = true;
                                }
                                if (valid4) {
                                  if (data4.title !== void 0) {
                                    const _errs17 = errors;
                                    if (typeof data4.title !== "string") {
                                      validate33.errors = [{ instancePath: instancePath + "/possible_values/" + i0 + "/title", schemaPath: "ABProductOptionsPossibleValue/properties/title/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                      return false;
                                    }
                                    var valid4 = _errs17 === errors;
                                  } else {
                                    var valid4 = true;
                                  }
                                  if (valid4) {
                                    if (data4.price_adjustment !== void 0) {
                                      let data7 = data4.price_adjustment;
                                      const _errs19 = errors;
                                      if (!(typeof data7 == "number" && isFinite(data7))) {
                                        validate33.errors = [{ instancePath: instancePath + "/possible_values/" + i0 + "/price_adjustment", schemaPath: "ABProductOptionsPossibleValue/properties/price_adjustment/type", keyword: "type", params: { type: "number" }, message: "must be number" }];
                                        return false;
                                      }
                                      var valid4 = _errs19 === errors;
                                    } else {
                                      var valid4 = true;
                                    }
                                  }
                                }
                              }
                            }
                          } else {
                            validate33.errors = [{ instancePath: instancePath + "/possible_values/" + i0, schemaPath: "ABProductOptionsPossibleValue/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                            return false;
                          }
                        }
                        var valid2 = _errs11 === errors;
                        if (!valid2) {
                          break;
                        }
                      }
                    } else {
                      validate33.errors = [{ instancePath: instancePath + "/possible_values", schemaPath: "#/properties/possible_values/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                      return false;
                    }
                  }
                  var valid0 = _errs9 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.default_values !== void 0) {
                    let data8 = data.default_values;
                    const _errs21 = errors;
                    if (errors === _errs21) {
                      if (Array.isArray(data8)) {
                        var valid5 = true;
                        const len1 = data8.length;
                        for (let i1 = 0; i1 < len1; i1++) {
                          const _errs23 = errors;
                          if (typeof data8[i1] !== "string") {
                            validate33.errors = [{ instancePath: instancePath + "/default_values/" + i1, schemaPath: "#/properties/default_values/items/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                            return false;
                          }
                          var valid5 = _errs23 === errors;
                          if (!valid5) {
                            break;
                          }
                        }
                      } else {
                        validate33.errors = [{ instancePath: instancePath + "/default_values", schemaPath: "#/properties/default_values/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                        return false;
                      }
                    }
                    var valid0 = _errs21 === errors;
                  } else {
                    var valid0 = true;
                  }
                  if (valid0) {
                    if (data.max_selection !== void 0) {
                      let data10 = data.max_selection;
                      const _errs25 = errors;
                      if (!(typeof data10 == "number" && isFinite(data10))) {
                        validate33.errors = [{ instancePath: instancePath + "/max_selection", schemaPath: "#/properties/max_selection/type", keyword: "type", params: { type: "number" }, message: "must be number" }];
                        return false;
                      }
                      var valid0 = _errs25 === errors;
                    } else {
                      var valid0 = true;
                    }
                    if (valid0) {
                      if (data.min_selection !== void 0) {
                        let data11 = data.min_selection;
                        const _errs27 = errors;
                        if (!(typeof data11 == "number" && isFinite(data11))) {
                          validate33.errors = [{ instancePath: instancePath + "/min_selection", schemaPath: "#/properties/min_selection/type", keyword: "type", params: { type: "number" }, message: "must be number" }];
                          return false;
                        }
                        var valid0 = _errs27 === errors;
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
      validate33.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate33.errors = vErrors;
  return errors === 0;
}
__name(validate33, "validate33");
function validate30(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  let valid0 = false;
  const _errs1 = errors;
  if (!validate31(data, { instancePath, parentData, parentDataProperty, rootData })) {
    vErrors = vErrors === null ? validate31.errors : vErrors.concat(validate31.errors);
    errors = vErrors.length;
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const _errs2 = errors;
    if (!validate33(data, { instancePath, parentData, parentDataProperty, rootData })) {
      vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
      errors = vErrors.length;
    }
    var _valid0 = _errs2 === errors;
    valid0 = valid0 || _valid0;
  }
  if (!valid0) {
    const err0 = { instancePath, schemaPath: "#/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
    validate30.errors = vErrors;
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
  validate30.errors = vErrors;
  return errors === 0;
}
__name(validate30, "validate30");
function validate29(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.business_id === void 0 && (missing0 = "business_id") || data.title === void 0 && (missing0 = "title") || data.category_id === void 0 && (missing0 = "category_id") || data.description === void 0 && (missing0 = "description") || data.image_temp_path === void 0 && (missing0 = "image_temp_path") || data.options === void 0 && (missing0 = "options") || data.price === void 0 && (missing0 = "price") || data.status === void 0 && (missing0 = "status")) {
        validate29.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "business_id" || key0 === "title" || key0 === "category_id" || key0 === "description" || key0 === "image_temp_path" || key0 === "options" || key0 === "price" || key0 === "status")) {
            validate29.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.business_id !== void 0) {
            const _errs2 = errors;
            if (typeof data.business_id !== "string") {
              validate29.errors = [{ instancePath: instancePath + "/business_id", schemaPath: "#/properties/business_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
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
                validate29.errors = [{ instancePath: instancePath + "/title", schemaPath: "#/properties/title/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                return false;
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.category_id !== void 0) {
                const _errs6 = errors;
                if (typeof data.category_id !== "string") {
                  validate29.errors = [{ instancePath: instancePath + "/category_id", schemaPath: "#/properties/category_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
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
                    validate29.errors = [{ instancePath: instancePath + "/description", schemaPath: "#/properties/description/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                    return false;
                  }
                  var valid0 = _errs8 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.image_temp_path !== void 0) {
                    const _errs10 = errors;
                    if (typeof data.image_temp_path !== "string") {
                      validate29.errors = [{ instancePath: instancePath + "/image_temp_path", schemaPath: "#/properties/image_temp_path/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
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
                            if (!validate30(data5[i0], { instancePath: instancePath + "/options/" + i0, parentData: data5, parentDataProperty: i0, rootData })) {
                              vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
                              errors = vErrors.length;
                            }
                            var valid1 = _errs14 === errors;
                            if (!valid1) {
                              break;
                            }
                          }
                        } else {
                          validate29.errors = [{ instancePath: instancePath + "/options", schemaPath: "#/properties/options/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
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
                          validate29.errors = [{ instancePath: instancePath + "/price", schemaPath: "#/properties/price/type", keyword: "type", params: { type: "number" }, message: "must be number" }];
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
                            validate29.errors = [{ instancePath: instancePath + "/status", schemaPath: "ABProductStatus/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                            return false;
                          }
                          if (!(data8 === "ACTIVE" || data8 === "INACTIVE")) {
                            validate29.errors = [{ instancePath: instancePath + "/status", schemaPath: "ABProductStatus/enum", keyword: "enum", params: { allowedValues: schema52.enum }, message: "must be equal to one of the allowed values" }];
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
      validate29.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate29.errors = vErrors;
  return errors === 0;
}
__name(validate29, "validate29");
var ABProductOption = validate30;
var ABProductOptionSingleSelection = validate31;
var ABProductOptionAbstract = validate36;
function validate36(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.id === void 0 && (missing0 = "id") || data.title === void 0 && (missing0 = "title") || data.type === void 0 && (missing0 = "type") || data.possible_values === void 0 && (missing0 = "possible_values")) {
        validate36.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "id" || key0 === "title" || key0 === "type" || key0 === "possible_values")) {
            validate36.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.id !== void 0) {
            const _errs2 = errors;
            if (typeof data.id !== "string") {
              validate36.errors = [{ instancePath: instancePath + "/id", schemaPath: "#/properties/id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
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
                validate36.errors = [{ instancePath: instancePath + "/title", schemaPath: "#/properties/title/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                return false;
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.type !== void 0) {
                let data2 = data.type;
                const _errs6 = errors;
                if (typeof data2 !== "string") {
                  validate36.errors = [{ instancePath: instancePath + "/type", schemaPath: "ABProductOptionsType/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                  return false;
                }
                if (!(data2 === "SINGLE_SELECTION" || data2 === "MULTIPLE_SELECTION")) {
                  validate36.errors = [{ instancePath: instancePath + "/type", schemaPath: "ABProductOptionsType/enum", keyword: "enum", params: { allowedValues: schema47.enum }, message: "must be equal to one of the allowed values" }];
                  return false;
                }
                var valid0 = _errs6 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.possible_values !== void 0) {
                  let data3 = data.possible_values;
                  const _errs9 = errors;
                  if (errors === _errs9) {
                    if (Array.isArray(data3)) {
                      var valid2 = true;
                      const len0 = data3.length;
                      for (let i0 = 0; i0 < len0; i0++) {
                        let data4 = data3[i0];
                        const _errs11 = errors;
                        const _errs12 = errors;
                        if (errors === _errs12) {
                          if (data4 && typeof data4 == "object" && !Array.isArray(data4)) {
                            let missing1;
                            if (data4.id === void 0 && (missing1 = "id") || data4.title === void 0 && (missing1 = "title") || data4.price_adjustment === void 0 && (missing1 = "price_adjustment")) {
                              validate36.errors = [{ instancePath: instancePath + "/possible_values/" + i0, schemaPath: "ABProductOptionsPossibleValue/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                              return false;
                            } else {
                              const _errs14 = errors;
                              for (const key1 in data4) {
                                if (!(key1 === "id" || key1 === "title" || key1 === "price_adjustment")) {
                                  validate36.errors = [{ instancePath: instancePath + "/possible_values/" + i0, schemaPath: "ABProductOptionsPossibleValue/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" }];
                                  return false;
                                  break;
                                }
                              }
                              if (_errs14 === errors) {
                                if (data4.id !== void 0) {
                                  const _errs15 = errors;
                                  if (typeof data4.id !== "string") {
                                    validate36.errors = [{ instancePath: instancePath + "/possible_values/" + i0 + "/id", schemaPath: "ABProductOptionsPossibleValue/properties/id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                    return false;
                                  }
                                  var valid4 = _errs15 === errors;
                                } else {
                                  var valid4 = true;
                                }
                                if (valid4) {
                                  if (data4.title !== void 0) {
                                    const _errs17 = errors;
                                    if (typeof data4.title !== "string") {
                                      validate36.errors = [{ instancePath: instancePath + "/possible_values/" + i0 + "/title", schemaPath: "ABProductOptionsPossibleValue/properties/title/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                      return false;
                                    }
                                    var valid4 = _errs17 === errors;
                                  } else {
                                    var valid4 = true;
                                  }
                                  if (valid4) {
                                    if (data4.price_adjustment !== void 0) {
                                      let data7 = data4.price_adjustment;
                                      const _errs19 = errors;
                                      if (!(typeof data7 == "number" && isFinite(data7))) {
                                        validate36.errors = [{ instancePath: instancePath + "/possible_values/" + i0 + "/price_adjustment", schemaPath: "ABProductOptionsPossibleValue/properties/price_adjustment/type", keyword: "type", params: { type: "number" }, message: "must be number" }];
                                        return false;
                                      }
                                      var valid4 = _errs19 === errors;
                                    } else {
                                      var valid4 = true;
                                    }
                                  }
                                }
                              }
                            }
                          } else {
                            validate36.errors = [{ instancePath: instancePath + "/possible_values/" + i0, schemaPath: "ABProductOptionsPossibleValue/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                            return false;
                          }
                        }
                        var valid2 = _errs11 === errors;
                        if (!valid2) {
                          break;
                        }
                      }
                    } else {
                      validate36.errors = [{ instancePath: instancePath + "/possible_values", schemaPath: "#/properties/possible_values/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                      return false;
                    }
                  }
                  var valid0 = _errs9 === errors;
                } else {
                  var valid0 = true;
                }
              }
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
var ABProductOptionsType = validate37;
function validate37(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    validate37.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
    return false;
  }
  if (!(data === "SINGLE_SELECTION" || data === "MULTIPLE_SELECTION")) {
    validate37.errors = [{ instancePath, schemaPath: "#/enum", keyword: "enum", params: { allowedValues: schema47.enum }, message: "must be equal to one of the allowed values" }];
    return false;
  }
  validate37.errors = vErrors;
  return errors === 0;
}
__name(validate37, "validate37");
var ABProductOptionsPossibleValue = validate38;
function validate38(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.id === void 0 && (missing0 = "id") || data.title === void 0 && (missing0 = "title") || data.price_adjustment === void 0 && (missing0 = "price_adjustment")) {
        validate38.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "id" || key0 === "title" || key0 === "price_adjustment")) {
            validate38.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.id !== void 0) {
            const _errs2 = errors;
            if (typeof data.id !== "string") {
              validate38.errors = [{ instancePath: instancePath + "/id", schemaPath: "#/properties/id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
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
                validate38.errors = [{ instancePath: instancePath + "/title", schemaPath: "#/properties/title/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                return false;
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.price_adjustment !== void 0) {
                let data2 = data.price_adjustment;
                const _errs6 = errors;
                if (!(typeof data2 == "number" && isFinite(data2))) {
                  validate38.errors = [{ instancePath: instancePath + "/price_adjustment", schemaPath: "#/properties/price_adjustment/type", keyword: "type", params: { type: "number" }, message: "must be number" }];
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
      validate38.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate38.errors = vErrors;
  return errors === 0;
}
__name(validate38, "validate38");
var ABProductOptionMultipleSelection = validate33;
var ABProductStatus = validate39;
function validate39(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    validate39.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
    return false;
  }
  if (!(data === "ACTIVE" || data === "INACTIVE")) {
    validate39.errors = [{ instancePath, schemaPath: "#/enum", keyword: "enum", params: { allowedValues: schema52.enum }, message: "must be equal to one of the allowed values" }];
    return false;
  }
  validate39.errors = vErrors;
  return errors === 0;
}
__name(validate39, "validate39");
var ABCreateProductResponse = validate40;
function validate40(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
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
    validate40.errors = vErrors;
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
  validate40.errors = vErrors;
  return errors === 0;
}
__name(validate40, "validate40");
var ABCreateProductResponseSuccess = validate41;
function validate41(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.result === void 0 && (missing0 = "result") || data.status === void 0 && (missing0 = "status")) {
        validate41.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "status" || key0 === "result")) {
            validate41.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.status !== void 0) {
            let data0 = data.status;
            const _errs2 = errors;
            if (typeof data0 !== "string") {
              validate41.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            if ("SUCCESS" !== data0) {
              validate41.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" }];
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
                    validate41.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                    return false;
                  } else {
                    const _errs6 = errors;
                    for (const key1 in data1) {
                      if (!(key1 === "product_id")) {
                        validate41.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" }];
                        return false;
                        break;
                      }
                    }
                    if (_errs6 === errors) {
                      if (data1.product_id !== void 0) {
                        if (typeof data1.product_id !== "string") {
                          validate41.errors = [{ instancePath: instancePath + "/result/product_id", schemaPath: "#/properties/result/properties/product_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                          return false;
                        }
                      }
                    }
                  }
                } else {
                  validate41.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
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
      validate41.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate41.errors = vErrors;
  return errors === 0;
}
__name(validate41, "validate41");
var ABEditProductData = validate42;
var schema63 = { "$id": "ABEditProductData", "$schema": "http://json-schema.org/draft-07/schema#", "type": "object", "properties": { "business_id": { "type": "string", "description": "Business id" }, "product_id": { "type": "string", "description": "Table name" }, "title": { "type": "string", "description": "Visible name of the product" }, "category": { "type": "string", "description": "Reference to the category where the product lives" }, "description": { "type": "string", "description": "Description of the product" }, "image_temp_path": { "type": "string", "description": "Path to the image in the default bucket" }, "options": { "type": "array", "items": { "$ref": "ABProductOption" }, "description": "Options of the product, if any" }, "price": { "type": "number", "description": "Unit price" }, "status": { "$ref": "ABProductStatus", "description": "Status of the product. If none is given, active will be chosen" } }, "required": ["business_id", "product_id"], "additionalProperties": false, "description": "API to create a new table" };
var func2 = Object.prototype.hasOwnProperty;
function validate42(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.business_id === void 0 && (missing0 = "business_id") || data.product_id === void 0 && (missing0 = "product_id")) {
        validate42.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!func2.call(schema63.properties, key0)) {
            validate42.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.business_id !== void 0) {
            const _errs2 = errors;
            if (typeof data.business_id !== "string") {
              validate42.errors = [{ instancePath: instancePath + "/business_id", schemaPath: "#/properties/business_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.product_id !== void 0) {
              const _errs4 = errors;
              if (typeof data.product_id !== "string") {
                validate42.errors = [{ instancePath: instancePath + "/product_id", schemaPath: "#/properties/product_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                return false;
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.title !== void 0) {
                const _errs6 = errors;
                if (typeof data.title !== "string") {
                  validate42.errors = [{ instancePath: instancePath + "/title", schemaPath: "#/properties/title/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                  return false;
                }
                var valid0 = _errs6 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.category !== void 0) {
                  const _errs8 = errors;
                  if (typeof data.category !== "string") {
                    validate42.errors = [{ instancePath: instancePath + "/category", schemaPath: "#/properties/category/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                    return false;
                  }
                  var valid0 = _errs8 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.description !== void 0) {
                    const _errs10 = errors;
                    if (typeof data.description !== "string") {
                      validate42.errors = [{ instancePath: instancePath + "/description", schemaPath: "#/properties/description/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                      return false;
                    }
                    var valid0 = _errs10 === errors;
                  } else {
                    var valid0 = true;
                  }
                  if (valid0) {
                    if (data.image_temp_path !== void 0) {
                      const _errs12 = errors;
                      if (typeof data.image_temp_path !== "string") {
                        validate42.errors = [{ instancePath: instancePath + "/image_temp_path", schemaPath: "#/properties/image_temp_path/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                        return false;
                      }
                      var valid0 = _errs12 === errors;
                    } else {
                      var valid0 = true;
                    }
                    if (valid0) {
                      if (data.options !== void 0) {
                        let data6 = data.options;
                        const _errs14 = errors;
                        if (errors === _errs14) {
                          if (Array.isArray(data6)) {
                            var valid1 = true;
                            const len0 = data6.length;
                            for (let i0 = 0; i0 < len0; i0++) {
                              const _errs16 = errors;
                              if (!validate30(data6[i0], { instancePath: instancePath + "/options/" + i0, parentData: data6, parentDataProperty: i0, rootData })) {
                                vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
                                errors = vErrors.length;
                              }
                              var valid1 = _errs16 === errors;
                              if (!valid1) {
                                break;
                              }
                            }
                          } else {
                            validate42.errors = [{ instancePath: instancePath + "/options", schemaPath: "#/properties/options/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                            return false;
                          }
                        }
                        var valid0 = _errs14 === errors;
                      } else {
                        var valid0 = true;
                      }
                      if (valid0) {
                        if (data.price !== void 0) {
                          let data8 = data.price;
                          const _errs17 = errors;
                          if (!(typeof data8 == "number" && isFinite(data8))) {
                            validate42.errors = [{ instancePath: instancePath + "/price", schemaPath: "#/properties/price/type", keyword: "type", params: { type: "number" }, message: "must be number" }];
                            return false;
                          }
                          var valid0 = _errs17 === errors;
                        } else {
                          var valid0 = true;
                        }
                        if (valid0) {
                          if (data.status !== void 0) {
                            let data9 = data.status;
                            const _errs19 = errors;
                            if (typeof data9 !== "string") {
                              validate42.errors = [{ instancePath: instancePath + "/status", schemaPath: "ABProductStatus/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                              return false;
                            }
                            if (!(data9 === "ACTIVE" || data9 === "INACTIVE")) {
                              validate42.errors = [{ instancePath: instancePath + "/status", schemaPath: "ABProductStatus/enum", keyword: "enum", params: { allowedValues: schema52.enum }, message: "must be equal to one of the allowed values" }];
                              return false;
                            }
                            var valid0 = _errs19 === errors;
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
var ABEditProductResponse = validate44;
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
        const err0 = { instancePath, schemaPath: "ABEditProductResponseSuccess/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" };
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
            const err1 = { instancePath, schemaPath: "ABEditProductResponseSuccess/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" };
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
              const err2 = { instancePath: instancePath + "/status", schemaPath: "ABEditProductResponseSuccess/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" };
              if (vErrors === null) {
                vErrors = [err2];
              } else {
                vErrors.push(err2);
              }
              errors++;
            }
            if ("SUCCESS" !== data0) {
              const err3 = { instancePath: instancePath + "/status", schemaPath: "ABEditProductResponseSuccess/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" };
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
                    const err4 = { instancePath: instancePath + "/result", schemaPath: "ABEditProductResponseSuccess/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" };
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
                        const err5 = { instancePath: instancePath + "/result", schemaPath: "ABEditProductResponseSuccess/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" };
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
                          const err6 = { instancePath: instancePath + "/result/product_id", schemaPath: "ABEditProductResponseSuccess/properties/result/properties/product_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
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
                  const err7 = { instancePath: instancePath + "/result", schemaPath: "ABEditProductResponseSuccess/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" };
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
      const err8 = { instancePath, schemaPath: "ABEditProductResponseSuccess/type", keyword: "type", params: { type: "object" }, message: "must be object" };
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
var ABEditProductResponseSuccess = validate45;
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
                  if (data1.product_id === void 0 && (missing1 = "product_id")) {
                    validate45.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                    return false;
                  } else {
                    const _errs6 = errors;
                    for (const key1 in data1) {
                      if (!(key1 === "product_id")) {
                        validate45.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" }];
                        return false;
                        break;
                      }
                    }
                    if (_errs6 === errors) {
                      if (data1.product_id !== void 0) {
                        if (typeof data1.product_id !== "string") {
                          validate45.errors = [{ instancePath: instancePath + "/result/product_id", schemaPath: "#/properties/result/properties/product_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
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
var ABConfirmDigitalPaymentData = validate46;
function validate46(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.business_id === void 0 && (missing0 = "business_id") || data.order_id === void 0 && (missing0 = "order_id")) {
        validate46.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "business_id" || key0 === "order_id")) {
            validate46.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.business_id !== void 0) {
            const _errs2 = errors;
            if (typeof data.business_id !== "string") {
              validate46.errors = [{ instancePath: instancePath + "/business_id", schemaPath: "#/properties/business_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.order_id !== void 0) {
              const _errs4 = errors;
              if (typeof data.order_id !== "string") {
                validate46.errors = [{ instancePath: instancePath + "/order_id", schemaPath: "#/properties/order_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
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
      validate46.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate46.errors = vErrors;
  return errors === 0;
}
__name(validate46, "validate46");
var ABConfirmDigitalPaymentResponse = validate47;
function validate47(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
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
        const err0 = { instancePath, schemaPath: "ABConfirmDigitalPaymentResponseSuccess/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" };
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
            const err1 = { instancePath, schemaPath: "ABConfirmDigitalPaymentResponseSuccess/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" };
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
              const err2 = { instancePath: instancePath + "/status", schemaPath: "ABConfirmDigitalPaymentResponseSuccess/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" };
              if (vErrors === null) {
                vErrors = [err2];
              } else {
                vErrors.push(err2);
              }
              errors++;
            }
            if ("SUCCESS" !== data0) {
              const err3 = { instancePath: instancePath + "/status", schemaPath: "ABConfirmDigitalPaymentResponseSuccess/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" };
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
                    const err4 = { instancePath: instancePath + "/result", schemaPath: "ABConfirmDigitalPaymentResponseSuccess/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" };
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
                        const err5 = { instancePath: instancePath + "/result", schemaPath: "ABConfirmDigitalPaymentResponseSuccess/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" };
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
                          const err6 = { instancePath: instancePath + "/result/order_id", schemaPath: "ABConfirmDigitalPaymentResponseSuccess/properties/result/properties/order_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
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
                  const err7 = { instancePath: instancePath + "/result", schemaPath: "ABConfirmDigitalPaymentResponseSuccess/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" };
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
      const err8 = { instancePath, schemaPath: "ABConfirmDigitalPaymentResponseSuccess/type", keyword: "type", params: { type: "object" }, message: "must be object" };
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
    validate47.errors = vErrors;
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
  validate47.errors = vErrors;
  return errors === 0;
}
__name(validate47, "validate47");
var ABConfirmDigitalPaymentResponseSuccess = validate48;
function validate48(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.result === void 0 && (missing0 = "result") || data.status === void 0 && (missing0 = "status")) {
        validate48.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "status" || key0 === "result")) {
            validate48.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.status !== void 0) {
            let data0 = data.status;
            const _errs2 = errors;
            if (typeof data0 !== "string") {
              validate48.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            if ("SUCCESS" !== data0) {
              validate48.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" }];
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
                    validate48.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                    return false;
                  } else {
                    const _errs6 = errors;
                    for (const key1 in data1) {
                      if (!(key1 === "order_id")) {
                        validate48.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" }];
                        return false;
                        break;
                      }
                    }
                    if (_errs6 === errors) {
                      if (data1.order_id !== void 0) {
                        if (typeof data1.order_id !== "string") {
                          validate48.errors = [{ instancePath: instancePath + "/result/order_id", schemaPath: "#/properties/result/properties/order_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                          return false;
                        }
                      }
                    }
                  }
                } else {
                  validate48.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
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
      validate48.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate48.errors = vErrors;
  return errors === 0;
}
__name(validate48, "validate48");
var ABConfirmManualPaymentData = validate49;
var schema75 = { "$id": "ABPaymentType", "$schema": "http://json-schema.org/draft-07/schema#", "type": "string", "enum": ["PRESENTIAL_CASH", "PRESENTIAL_CARD", "DIGITAL_STRIPE"], "description": "Type of payment" };
function validate49(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.business_id === void 0 && (missing0 = "business_id") || data.order_id === void 0 && (missing0 = "order_id") || data.waiter_id === void 0 && (missing0 = "waiter_id") || data.payment_type === void 0 && (missing0 = "payment_type") || data.payment_total === void 0 && (missing0 = "payment_total")) {
        validate49.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "business_id" || key0 === "order_id" || key0 === "waiter_id" || key0 === "payment_note" || key0 === "payment_type" || key0 === "payment_total")) {
            validate49.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.business_id !== void 0) {
            const _errs2 = errors;
            if (typeof data.business_id !== "string") {
              validate49.errors = [{ instancePath: instancePath + "/business_id", schemaPath: "#/properties/business_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.order_id !== void 0) {
              const _errs4 = errors;
              if (typeof data.order_id !== "string") {
                validate49.errors = [{ instancePath: instancePath + "/order_id", schemaPath: "#/properties/order_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                return false;
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.waiter_id !== void 0) {
                const _errs6 = errors;
                if (typeof data.waiter_id !== "string") {
                  validate49.errors = [{ instancePath: instancePath + "/waiter_id", schemaPath: "#/properties/waiter_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                  return false;
                }
                var valid0 = _errs6 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.payment_note !== void 0) {
                  const _errs8 = errors;
                  if (typeof data.payment_note !== "string") {
                    validate49.errors = [{ instancePath: instancePath + "/payment_note", schemaPath: "#/properties/payment_note/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                    return false;
                  }
                  var valid0 = _errs8 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.payment_type !== void 0) {
                    let data4 = data.payment_type;
                    const _errs10 = errors;
                    if (typeof data4 !== "string") {
                      validate49.errors = [{ instancePath: instancePath + "/payment_type", schemaPath: "ABPaymentType/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                      return false;
                    }
                    if (!(data4 === "PRESENTIAL_CASH" || data4 === "PRESENTIAL_CARD" || data4 === "DIGITAL_STRIPE")) {
                      validate49.errors = [{ instancePath: instancePath + "/payment_type", schemaPath: "ABPaymentType/enum", keyword: "enum", params: { allowedValues: schema75.enum }, message: "must be equal to one of the allowed values" }];
                      return false;
                    }
                    var valid0 = _errs10 === errors;
                  } else {
                    var valid0 = true;
                  }
                  if (valid0) {
                    if (data.payment_total !== void 0) {
                      let data5 = data.payment_total;
                      const _errs13 = errors;
                      if (!(typeof data5 == "number" && isFinite(data5))) {
                        validate49.errors = [{ instancePath: instancePath + "/payment_total", schemaPath: "#/properties/payment_total/type", keyword: "type", params: { type: "number" }, message: "must be number" }];
                        return false;
                      }
                      var valid0 = _errs13 === errors;
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
    } else {
      validate49.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate49.errors = vErrors;
  return errors === 0;
}
__name(validate49, "validate49");
var ABPaymentType = validate50;
function validate50(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (typeof data !== "string") {
    validate50.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
    return false;
  }
  if (!(data === "PRESENTIAL_CASH" || data === "PRESENTIAL_CARD" || data === "DIGITAL_STRIPE")) {
    validate50.errors = [{ instancePath, schemaPath: "#/enum", keyword: "enum", params: { allowedValues: schema75.enum }, message: "must be equal to one of the allowed values" }];
    return false;
  }
  validate50.errors = vErrors;
  return errors === 0;
}
__name(validate50, "validate50");
var ABConfirmManualPaymentResponse = validate51;
function validate51(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
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
        const err0 = { instancePath, schemaPath: "ABConfirmManualPaymentResponseSuccess/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" };
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
            const err1 = { instancePath, schemaPath: "ABConfirmManualPaymentResponseSuccess/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" };
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
              const err2 = { instancePath: instancePath + "/status", schemaPath: "ABConfirmManualPaymentResponseSuccess/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" };
              if (vErrors === null) {
                vErrors = [err2];
              } else {
                vErrors.push(err2);
              }
              errors++;
            }
            if ("SUCCESS" !== data0) {
              const err3 = { instancePath: instancePath + "/status", schemaPath: "ABConfirmManualPaymentResponseSuccess/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" };
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
                    const err4 = { instancePath: instancePath + "/result", schemaPath: "ABConfirmManualPaymentResponseSuccess/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" };
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
                        const err5 = { instancePath: instancePath + "/result", schemaPath: "ABConfirmManualPaymentResponseSuccess/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" };
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
                          const err6 = { instancePath: instancePath + "/result/order_id", schemaPath: "ABConfirmManualPaymentResponseSuccess/properties/result/properties/order_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
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
                  const err7 = { instancePath: instancePath + "/result", schemaPath: "ABConfirmManualPaymentResponseSuccess/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" };
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
      const err8 = { instancePath, schemaPath: "ABConfirmManualPaymentResponseSuccess/type", keyword: "type", params: { type: "object" }, message: "must be object" };
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
    validate51.errors = vErrors;
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
  validate51.errors = vErrors;
  return errors === 0;
}
__name(validate51, "validate51");
var ABConfirmManualPaymentResponseSuccess = validate52;
function validate52(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.result === void 0 && (missing0 = "result") || data.status === void 0 && (missing0 = "status")) {
        validate52.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "status" || key0 === "result")) {
            validate52.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.status !== void 0) {
            let data0 = data.status;
            const _errs2 = errors;
            if (typeof data0 !== "string") {
              validate52.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            if ("SUCCESS" !== data0) {
              validate52.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" }];
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
                    validate52.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                    return false;
                  } else {
                    const _errs6 = errors;
                    for (const key1 in data1) {
                      if (!(key1 === "order_id")) {
                        validate52.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" }];
                        return false;
                        break;
                      }
                    }
                    if (_errs6 === errors) {
                      if (data1.order_id !== void 0) {
                        if (typeof data1.order_id !== "string") {
                          validate52.errors = [{ instancePath: instancePath + "/result/order_id", schemaPath: "#/properties/result/properties/order_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                          return false;
                        }
                      }
                    }
                  }
                } else {
                  validate52.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
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
      validate52.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate52.errors = vErrors;
  return errors === 0;
}
__name(validate52, "validate52");
var ABCreateOrderDataCartLine = validate53;
var schema81 = { "$id": "ABCreateOrderDataCartLine", "$schema": "http://json-schema.org/draft-07/schema#", "type": "object", "properties": { "product_id": { "type": "string", "description": "Ref to the product" }, "selected_options": { "type": "array", "items": { "$ref": "ABProductOptionSelections" }, "description": "Options for the given product" }, "quantity": { "type": "number", "description": "number of products" }, "note": { "type": ["string", "null"], "description": 'note for the particular line (e.g. "Cooked medium-rare please", "No ice")' } }, "required": ["product_id", "selected_options", "quantity", "note"], "additionalProperties": false, "description": "Represents a cart line" };
function validate54(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
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
      if (data.option_id === void 0 && (missing0 = "option_id") || data.selected_values === void 0 && (missing0 = "selected_values")) {
        const err0 = { instancePath, schemaPath: "ABProductOptionMultipleSelectedValues/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        const _errs4 = errors;
        for (const key0 in data) {
          if (!(key0 === "option_id" || key0 === "selected_values")) {
            const err1 = { instancePath, schemaPath: "ABProductOptionMultipleSelectedValues/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" };
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
          if (data.option_id !== void 0) {
            const _errs5 = errors;
            if (typeof data.option_id !== "string") {
              const err2 = { instancePath: instancePath + "/option_id", schemaPath: "ABProductOptionMultipleSelectedValues/properties/option_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
              if (vErrors === null) {
                vErrors = [err2];
              } else {
                vErrors.push(err2);
              }
              errors++;
            }
            var valid2 = _errs5 === errors;
          } else {
            var valid2 = true;
          }
          if (valid2) {
            if (data.selected_values !== void 0) {
              let data1 = data.selected_values;
              const _errs7 = errors;
              if (errors === _errs7) {
                if (Array.isArray(data1)) {
                  var valid3 = true;
                  const len0 = data1.length;
                  for (let i0 = 0; i0 < len0; i0++) {
                    const _errs9 = errors;
                    if (typeof data1[i0] !== "string") {
                      const err3 = { instancePath: instancePath + "/selected_values/" + i0, schemaPath: "ABProductOptionMultipleSelectedValues/properties/selected_values/items/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                      if (vErrors === null) {
                        vErrors = [err3];
                      } else {
                        vErrors.push(err3);
                      }
                      errors++;
                    }
                    var valid3 = _errs9 === errors;
                    if (!valid3) {
                      break;
                    }
                  }
                } else {
                  const err4 = { instancePath: instancePath + "/selected_values", schemaPath: "ABProductOptionMultipleSelectedValues/properties/selected_values/type", keyword: "type", params: { type: "array" }, message: "must be array" };
                  if (vErrors === null) {
                    vErrors = [err4];
                  } else {
                    vErrors.push(err4);
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
      const err5 = { instancePath, schemaPath: "ABProductOptionMultipleSelectedValues/type", keyword: "type", params: { type: "object" }, message: "must be object" };
      if (vErrors === null) {
        vErrors = [err5];
      } else {
        vErrors.push(err5);
      }
      errors++;
    }
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const _errs11 = errors;
    const _errs12 = errors;
    if (errors === _errs12) {
      if (data && typeof data == "object" && !Array.isArray(data)) {
        let missing1;
        if (data.option_id === void 0 && (missing1 = "option_id") || data.selected_value === void 0 && (missing1 = "selected_value")) {
          const err6 = { instancePath, schemaPath: "ABProductOptionSingleSelectedValue/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" };
          if (vErrors === null) {
            vErrors = [err6];
          } else {
            vErrors.push(err6);
          }
          errors++;
        } else {
          const _errs14 = errors;
          for (const key1 in data) {
            if (!(key1 === "option_id" || key1 === "selected_value")) {
              const err7 = { instancePath, schemaPath: "ABProductOptionSingleSelectedValue/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" };
              if (vErrors === null) {
                vErrors = [err7];
              } else {
                vErrors.push(err7);
              }
              errors++;
              break;
            }
          }
          if (_errs14 === errors) {
            if (data.option_id !== void 0) {
              const _errs15 = errors;
              if (typeof data.option_id !== "string") {
                const err8 = { instancePath: instancePath + "/option_id", schemaPath: "ABProductOptionSingleSelectedValue/properties/option_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                if (vErrors === null) {
                  vErrors = [err8];
                } else {
                  vErrors.push(err8);
                }
                errors++;
              }
              var valid5 = _errs15 === errors;
            } else {
              var valid5 = true;
            }
            if (valid5) {
              if (data.selected_value !== void 0) {
                const _errs17 = errors;
                if (typeof data.selected_value !== "string") {
                  const err9 = { instancePath: instancePath + "/selected_value", schemaPath: "ABProductOptionSingleSelectedValue/properties/selected_value/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                  if (vErrors === null) {
                    vErrors = [err9];
                  } else {
                    vErrors.push(err9);
                  }
                  errors++;
                }
                var valid5 = _errs17 === errors;
              } else {
                var valid5 = true;
              }
            }
          }
        }
      } else {
        const err10 = { instancePath, schemaPath: "ABProductOptionSingleSelectedValue/type", keyword: "type", params: { type: "object" }, message: "must be object" };
        if (vErrors === null) {
          vErrors = [err10];
        } else {
          vErrors.push(err10);
        }
        errors++;
      }
    }
    var _valid0 = _errs11 === errors;
    valid0 = valid0 || _valid0;
  }
  if (!valid0) {
    const err11 = { instancePath, schemaPath: "#/anyOf", keyword: "anyOf", params: {}, message: "must match a schema in anyOf" };
    if (vErrors === null) {
      vErrors = [err11];
    } else {
      vErrors.push(err11);
    }
    errors++;
    validate54.errors = vErrors;
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
  validate54.errors = vErrors;
  return errors === 0;
}
__name(validate54, "validate54");
function validate53(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.product_id === void 0 && (missing0 = "product_id") || data.selected_options === void 0 && (missing0 = "selected_options") || data.quantity === void 0 && (missing0 = "quantity") || data.note === void 0 && (missing0 = "note")) {
        validate53.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "product_id" || key0 === "selected_options" || key0 === "quantity" || key0 === "note")) {
            validate53.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.product_id !== void 0) {
            const _errs2 = errors;
            if (typeof data.product_id !== "string") {
              validate53.errors = [{ instancePath: instancePath + "/product_id", schemaPath: "#/properties/product_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.selected_options !== void 0) {
              let data1 = data.selected_options;
              const _errs4 = errors;
              if (errors === _errs4) {
                if (Array.isArray(data1)) {
                  var valid1 = true;
                  const len0 = data1.length;
                  for (let i0 = 0; i0 < len0; i0++) {
                    const _errs6 = errors;
                    if (!validate54(data1[i0], { instancePath: instancePath + "/selected_options/" + i0, parentData: data1, parentDataProperty: i0, rootData })) {
                      vErrors = vErrors === null ? validate54.errors : vErrors.concat(validate54.errors);
                      errors = vErrors.length;
                    }
                    var valid1 = _errs6 === errors;
                    if (!valid1) {
                      break;
                    }
                  }
                } else {
                  validate53.errors = [{ instancePath: instancePath + "/selected_options", schemaPath: "#/properties/selected_options/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                  return false;
                }
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.quantity !== void 0) {
                let data3 = data.quantity;
                const _errs7 = errors;
                if (!(typeof data3 == "number" && isFinite(data3))) {
                  validate53.errors = [{ instancePath: instancePath + "/quantity", schemaPath: "#/properties/quantity/type", keyword: "type", params: { type: "number" }, message: "must be number" }];
                  return false;
                }
                var valid0 = _errs7 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.note !== void 0) {
                  let data4 = data.note;
                  const _errs9 = errors;
                  if (typeof data4 !== "string" && data4 !== null) {
                    validate53.errors = [{ instancePath: instancePath + "/note", schemaPath: "#/properties/note/type", keyword: "type", params: { type: schema81.properties.note.type }, message: "must be string,null" }];
                    return false;
                  }
                  var valid0 = _errs9 === errors;
                } else {
                  var valid0 = true;
                }
              }
            }
          }
        }
      }
    } else {
      validate53.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate53.errors = vErrors;
  return errors === 0;
}
__name(validate53, "validate53");
var ABProductOptionSelections = validate54;
var ABProductOptionMultipleSelectedValues = validate56;
function validate56(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.option_id === void 0 && (missing0 = "option_id") || data.selected_values === void 0 && (missing0 = "selected_values")) {
        validate56.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "option_id" || key0 === "selected_values")) {
            validate56.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.option_id !== void 0) {
            const _errs2 = errors;
            if (typeof data.option_id !== "string") {
              validate56.errors = [{ instancePath: instancePath + "/option_id", schemaPath: "#/properties/option_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.selected_values !== void 0) {
              let data1 = data.selected_values;
              const _errs4 = errors;
              if (errors === _errs4) {
                if (Array.isArray(data1)) {
                  var valid1 = true;
                  const len0 = data1.length;
                  for (let i0 = 0; i0 < len0; i0++) {
                    const _errs6 = errors;
                    if (typeof data1[i0] !== "string") {
                      validate56.errors = [{ instancePath: instancePath + "/selected_values/" + i0, schemaPath: "#/properties/selected_values/items/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                      return false;
                    }
                    var valid1 = _errs6 === errors;
                    if (!valid1) {
                      break;
                    }
                  }
                } else {
                  validate56.errors = [{ instancePath: instancePath + "/selected_values", schemaPath: "#/properties/selected_values/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
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
      validate56.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate56.errors = vErrors;
  return errors === 0;
}
__name(validate56, "validate56");
var ABProductOptionSingleSelectedValue = validate57;
function validate57(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.option_id === void 0 && (missing0 = "option_id") || data.selected_value === void 0 && (missing0 = "selected_value")) {
        validate57.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "option_id" || key0 === "selected_value")) {
            validate57.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.option_id !== void 0) {
            const _errs2 = errors;
            if (typeof data.option_id !== "string") {
              validate57.errors = [{ instancePath: instancePath + "/option_id", schemaPath: "#/properties/option_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.selected_value !== void 0) {
              const _errs4 = errors;
              if (typeof data.selected_value !== "string") {
                validate57.errors = [{ instancePath: instancePath + "/selected_value", schemaPath: "#/properties/selected_value/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
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
      validate57.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate57.errors = vErrors;
  return errors === 0;
}
__name(validate57, "validate57");
var ABCreateOrderData = validate58;
var schema87 = { "$id": "ABCreateOrderData", "$schema": "http://json-schema.org/draft-07/schema#", "type": "object", "properties": { "business_id": { "type": "string", "description": "Business id" }, "customer_id": { "type": "string", "description": "Ref to the customer" }, "customer_nickname": { "type": "string", "description": "Nickname for the customer" }, "general_note": { "type": ["string", "null"], "description": 'note for the whole order (e.g. "please bring an extra glass. Thanks!")' }, "cart": { "type": "array", "items": { "$ref": "ABCreateOrderDataCartLine" }, "description": "Array with the orders. Should not be empty" }, "table_name": { "type": "string", "description": "Name of the table where the product should be delivered" } }, "required": ["business_id", "customer_id", "general_note", "cart", "table_name"], "additionalProperties": false, "description": "API for creating a new order" };
function validate58(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.business_id === void 0 && (missing0 = "business_id") || data.customer_id === void 0 && (missing0 = "customer_id") || data.general_note === void 0 && (missing0 = "general_note") || data.cart === void 0 && (missing0 = "cart") || data.table_name === void 0 && (missing0 = "table_name")) {
        validate58.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "business_id" || key0 === "customer_id" || key0 === "customer_nickname" || key0 === "general_note" || key0 === "cart" || key0 === "table_name")) {
            validate58.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.business_id !== void 0) {
            const _errs2 = errors;
            if (typeof data.business_id !== "string") {
              validate58.errors = [{ instancePath: instancePath + "/business_id", schemaPath: "#/properties/business_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.customer_id !== void 0) {
              const _errs4 = errors;
              if (typeof data.customer_id !== "string") {
                validate58.errors = [{ instancePath: instancePath + "/customer_id", schemaPath: "#/properties/customer_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                return false;
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.customer_nickname !== void 0) {
                const _errs6 = errors;
                if (typeof data.customer_nickname !== "string") {
                  validate58.errors = [{ instancePath: instancePath + "/customer_nickname", schemaPath: "#/properties/customer_nickname/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                  return false;
                }
                var valid0 = _errs6 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.general_note !== void 0) {
                  let data3 = data.general_note;
                  const _errs8 = errors;
                  if (typeof data3 !== "string" && data3 !== null) {
                    validate58.errors = [{ instancePath: instancePath + "/general_note", schemaPath: "#/properties/general_note/type", keyword: "type", params: { type: schema87.properties.general_note.type }, message: "must be string,null" }];
                    return false;
                  }
                  var valid0 = _errs8 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.cart !== void 0) {
                    let data4 = data.cart;
                    const _errs10 = errors;
                    if (errors === _errs10) {
                      if (Array.isArray(data4)) {
                        var valid1 = true;
                        const len0 = data4.length;
                        for (let i0 = 0; i0 < len0; i0++) {
                          const _errs12 = errors;
                          if (!validate53(data4[i0], { instancePath: instancePath + "/cart/" + i0, parentData: data4, parentDataProperty: i0, rootData })) {
                            vErrors = vErrors === null ? validate53.errors : vErrors.concat(validate53.errors);
                            errors = vErrors.length;
                          }
                          var valid1 = _errs12 === errors;
                          if (!valid1) {
                            break;
                          }
                        }
                      } else {
                        validate58.errors = [{ instancePath: instancePath + "/cart", schemaPath: "#/properties/cart/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                        return false;
                      }
                    }
                    var valid0 = _errs10 === errors;
                  } else {
                    var valid0 = true;
                  }
                  if (valid0) {
                    if (data.table_name !== void 0) {
                      const _errs13 = errors;
                      if (typeof data.table_name !== "string") {
                        validate58.errors = [{ instancePath: instancePath + "/table_name", schemaPath: "#/properties/table_name/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                        return false;
                      }
                      var valid0 = _errs13 === errors;
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
    } else {
      validate58.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate58.errors = vErrors;
  return errors === 0;
}
__name(validate58, "validate58");
var ABCreateOrderResponse = validate60;
function validate60(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
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
        const err0 = { instancePath, schemaPath: "ABCreateOrderResponseSuccess/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" };
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
            const err1 = { instancePath, schemaPath: "ABCreateOrderResponseSuccess/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" };
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
              const err2 = { instancePath: instancePath + "/status", schemaPath: "ABCreateOrderResponseSuccess/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" };
              if (vErrors === null) {
                vErrors = [err2];
              } else {
                vErrors.push(err2);
              }
              errors++;
            }
            if ("SUCCESS" !== data0) {
              const err3 = { instancePath: instancePath + "/status", schemaPath: "ABCreateOrderResponseSuccess/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" };
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
                    const err4 = { instancePath: instancePath + "/result", schemaPath: "ABCreateOrderResponseSuccess/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" };
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
                        const err5 = { instancePath: instancePath + "/result", schemaPath: "ABCreateOrderResponseSuccess/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" };
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
                          const err6 = { instancePath: instancePath + "/result/order_id", schemaPath: "ABCreateOrderResponseSuccess/properties/result/properties/order_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
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
                  const err7 = { instancePath: instancePath + "/result", schemaPath: "ABCreateOrderResponseSuccess/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" };
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
      const err8 = { instancePath, schemaPath: "ABCreateOrderResponseSuccess/type", keyword: "type", params: { type: "object" }, message: "must be object" };
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
    validate60.errors = vErrors;
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
  validate60.errors = vErrors;
  return errors === 0;
}
__name(validate60, "validate60");
var ABCreateOrderResponseSuccess = validate61;
function validate61(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.result === void 0 && (missing0 = "result") || data.status === void 0 && (missing0 = "status")) {
        validate61.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "status" || key0 === "result")) {
            validate61.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.status !== void 0) {
            let data0 = data.status;
            const _errs2 = errors;
            if (typeof data0 !== "string") {
              validate61.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            if ("SUCCESS" !== data0) {
              validate61.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" }];
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
                    validate61.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                    return false;
                  } else {
                    const _errs6 = errors;
                    for (const key1 in data1) {
                      if (!(key1 === "order_id")) {
                        validate61.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" }];
                        return false;
                        break;
                      }
                    }
                    if (_errs6 === errors) {
                      if (data1.order_id !== void 0) {
                        if (typeof data1.order_id !== "string") {
                          validate61.errors = [{ instancePath: instancePath + "/result/order_id", schemaPath: "#/properties/result/properties/order_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                          return false;
                        }
                      }
                    }
                  }
                } else {
                  validate61.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
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
      validate61.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate61.errors = vErrors;
  return errors === 0;
}
__name(validate61, "validate61");
var ABFulfillOrderData = validate62;
function validate62(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.business_id === void 0 && (missing0 = "business_id") || data.order_id === void 0 && (missing0 = "order_id")) {
        validate62.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "business_id" || key0 === "order_id")) {
            validate62.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.business_id !== void 0) {
            const _errs2 = errors;
            if (typeof data.business_id !== "string") {
              validate62.errors = [{ instancePath: instancePath + "/business_id", schemaPath: "#/properties/business_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.order_id !== void 0) {
              const _errs4 = errors;
              if (typeof data.order_id !== "string") {
                validate62.errors = [{ instancePath: instancePath + "/order_id", schemaPath: "#/properties/order_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
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
      validate62.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate62.errors = vErrors;
  return errors === 0;
}
__name(validate62, "validate62");
var ABFulfillOrderResponse = validate63;
function validate63(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
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
        const err0 = { instancePath, schemaPath: "ABFulfillOrderResponseSuccess/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" };
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
            const err1 = { instancePath, schemaPath: "ABFulfillOrderResponseSuccess/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" };
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
              const err2 = { instancePath: instancePath + "/status", schemaPath: "ABFulfillOrderResponseSuccess/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" };
              if (vErrors === null) {
                vErrors = [err2];
              } else {
                vErrors.push(err2);
              }
              errors++;
            }
            if ("SUCCESS" !== data0) {
              const err3 = { instancePath: instancePath + "/status", schemaPath: "ABFulfillOrderResponseSuccess/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" };
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
                    const err4 = { instancePath: instancePath + "/result", schemaPath: "ABFulfillOrderResponseSuccess/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" };
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
                        const err5 = { instancePath: instancePath + "/result", schemaPath: "ABFulfillOrderResponseSuccess/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" };
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
                          const err6 = { instancePath: instancePath + "/result/order_id", schemaPath: "ABFulfillOrderResponseSuccess/properties/result/properties/order_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
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
                  const err7 = { instancePath: instancePath + "/result", schemaPath: "ABFulfillOrderResponseSuccess/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" };
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
      const err8 = { instancePath, schemaPath: "ABFulfillOrderResponseSuccess/type", keyword: "type", params: { type: "object" }, message: "must be object" };
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
    validate63.errors = vErrors;
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
  validate63.errors = vErrors;
  return errors === 0;
}
__name(validate63, "validate63");
var ABFulfillOrderResponseSuccess = validate64;
function validate64(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.result === void 0 && (missing0 = "result") || data.status === void 0 && (missing0 = "status")) {
        validate64.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "status" || key0 === "result")) {
            validate64.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.status !== void 0) {
            let data0 = data.status;
            const _errs2 = errors;
            if (typeof data0 !== "string") {
              validate64.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            if ("SUCCESS" !== data0) {
              validate64.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" }];
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
                    validate64.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                    return false;
                  } else {
                    const _errs6 = errors;
                    for (const key1 in data1) {
                      if (!(key1 === "order_id")) {
                        validate64.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" }];
                        return false;
                        break;
                      }
                    }
                    if (_errs6 === errors) {
                      if (data1.order_id !== void 0) {
                        if (typeof data1.order_id !== "string") {
                          validate64.errors = [{ instancePath: instancePath + "/result/order_id", schemaPath: "#/properties/result/properties/order_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                          return false;
                        }
                      }
                    }
                  }
                } else {
                  validate64.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
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
      validate64.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate64.errors = vErrors;
  return errors === 0;
}
__name(validate64, "validate64");
var ABSetOrderReadyForDeliveryData = validate65;
function validate65(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.business_id === void 0 && (missing0 = "business_id") || data.order_id === void 0 && (missing0 = "order_id")) {
        validate65.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "business_id" || key0 === "order_id")) {
            validate65.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.business_id !== void 0) {
            const _errs2 = errors;
            if (typeof data.business_id !== "string") {
              validate65.errors = [{ instancePath: instancePath + "/business_id", schemaPath: "#/properties/business_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.order_id !== void 0) {
              const _errs4 = errors;
              if (typeof data.order_id !== "string") {
                validate65.errors = [{ instancePath: instancePath + "/order_id", schemaPath: "#/properties/order_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
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
      validate65.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate65.errors = vErrors;
  return errors === 0;
}
__name(validate65, "validate65");
var ABSetOrderReadyForDeliveryResponse = validate66;
function validate66(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
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
        const err0 = { instancePath, schemaPath: "ABSetOrderReadyForDeliveryResponseSuccess/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" };
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
            const err1 = { instancePath, schemaPath: "ABSetOrderReadyForDeliveryResponseSuccess/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" };
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
              const err2 = { instancePath: instancePath + "/status", schemaPath: "ABSetOrderReadyForDeliveryResponseSuccess/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" };
              if (vErrors === null) {
                vErrors = [err2];
              } else {
                vErrors.push(err2);
              }
              errors++;
            }
            if ("SUCCESS" !== data0) {
              const err3 = { instancePath: instancePath + "/status", schemaPath: "ABSetOrderReadyForDeliveryResponseSuccess/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" };
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
                    const err4 = { instancePath: instancePath + "/result", schemaPath: "ABSetOrderReadyForDeliveryResponseSuccess/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" };
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
                        const err5 = { instancePath: instancePath + "/result", schemaPath: "ABSetOrderReadyForDeliveryResponseSuccess/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" };
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
                          const err6 = { instancePath: instancePath + "/result/order_id", schemaPath: "ABSetOrderReadyForDeliveryResponseSuccess/properties/result/properties/order_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
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
                  const err7 = { instancePath: instancePath + "/result", schemaPath: "ABSetOrderReadyForDeliveryResponseSuccess/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" };
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
      const err8 = { instancePath, schemaPath: "ABSetOrderReadyForDeliveryResponseSuccess/type", keyword: "type", params: { type: "object" }, message: "must be object" };
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
    validate66.errors = vErrors;
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
  validate66.errors = vErrors;
  return errors === 0;
}
__name(validate66, "validate66");
var ABSetOrderReadyForDeliveryResponseSuccess = validate67;
function validate67(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.result === void 0 && (missing0 = "result") || data.status === void 0 && (missing0 = "status")) {
        validate67.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "status" || key0 === "result")) {
            validate67.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.status !== void 0) {
            let data0 = data.status;
            const _errs2 = errors;
            if (typeof data0 !== "string") {
              validate67.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            if ("SUCCESS" !== data0) {
              validate67.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" }];
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
                    validate67.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                    return false;
                  } else {
                    const _errs6 = errors;
                    for (const key1 in data1) {
                      if (!(key1 === "order_id")) {
                        validate67.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" }];
                        return false;
                        break;
                      }
                    }
                    if (_errs6 === errors) {
                      if (data1.order_id !== void 0) {
                        if (typeof data1.order_id !== "string") {
                          validate67.errors = [{ instancePath: instancePath + "/result/order_id", schemaPath: "#/properties/result/properties/order_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                          return false;
                        }
                      }
                    }
                  }
                } else {
                  validate67.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
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
      validate67.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate67.errors = vErrors;
  return errors === 0;
}
__name(validate67, "validate67");
var ABStartProcessingOrderData = validate68;
function validate68(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.business_id === void 0 && (missing0 = "business_id") || data.order_id === void 0 && (missing0 = "order_id")) {
        validate68.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "business_id" || key0 === "order_id")) {
            validate68.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.business_id !== void 0) {
            const _errs2 = errors;
            if (typeof data.business_id !== "string") {
              validate68.errors = [{ instancePath: instancePath + "/business_id", schemaPath: "#/properties/business_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.order_id !== void 0) {
              const _errs4 = errors;
              if (typeof data.order_id !== "string") {
                validate68.errors = [{ instancePath: instancePath + "/order_id", schemaPath: "#/properties/order_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
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
      validate68.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate68.errors = vErrors;
  return errors === 0;
}
__name(validate68, "validate68");
var ABStartProcessingOrderResponse = validate69;
function validate69(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
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
        const err0 = { instancePath, schemaPath: "ABStartProcessingOrderResponseSuccess/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" };
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
            const err1 = { instancePath, schemaPath: "ABStartProcessingOrderResponseSuccess/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" };
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
              const err2 = { instancePath: instancePath + "/status", schemaPath: "ABStartProcessingOrderResponseSuccess/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" };
              if (vErrors === null) {
                vErrors = [err2];
              } else {
                vErrors.push(err2);
              }
              errors++;
            }
            if ("SUCCESS" !== data0) {
              const err3 = { instancePath: instancePath + "/status", schemaPath: "ABStartProcessingOrderResponseSuccess/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" };
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
                    const err4 = { instancePath: instancePath + "/result", schemaPath: "ABStartProcessingOrderResponseSuccess/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" };
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
                        const err5 = { instancePath: instancePath + "/result", schemaPath: "ABStartProcessingOrderResponseSuccess/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" };
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
                          const err6 = { instancePath: instancePath + "/result/order_id", schemaPath: "ABStartProcessingOrderResponseSuccess/properties/result/properties/order_id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
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
                  const err7 = { instancePath: instancePath + "/result", schemaPath: "ABStartProcessingOrderResponseSuccess/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" };
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
      const err8 = { instancePath, schemaPath: "ABStartProcessingOrderResponseSuccess/type", keyword: "type", params: { type: "object" }, message: "must be object" };
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
    validate69.errors = vErrors;
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
  validate69.errors = vErrors;
  return errors === 0;
}
__name(validate69, "validate69");
var ABStartProcessingOrderResponseSuccess = validate70;
function validate70(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.result === void 0 && (missing0 = "result") || data.status === void 0 && (missing0 = "status")) {
        validate70.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "status" || key0 === "result")) {
            validate70.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.status !== void 0) {
            let data0 = data.status;
            const _errs2 = errors;
            if (typeof data0 !== "string") {
              validate70.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            if ("SUCCESS" !== data0) {
              validate70.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" }];
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
                    validate70.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                    return false;
                  } else {
                    const _errs6 = errors;
                    for (const key1 in data1) {
                      if (!(key1 === "order_id")) {
                        validate70.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" }];
                        return false;
                        break;
                      }
                    }
                    if (_errs6 === errors) {
                      if (data1.order_id !== void 0) {
                        if (typeof data1.order_id !== "string") {
                          validate70.errors = [{ instancePath: instancePath + "/result/order_id", schemaPath: "#/properties/result/properties/order_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                          return false;
                        }
                      }
                    }
                  }
                } else {
                  validate70.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
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
      validate70.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate70.errors = vErrors;
  return errors === 0;
}
__name(validate70, "validate70");
var ABCreateStripePaymentIntentData = validate71;
function validate71(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.business_id === void 0 && (missing0 = "business_id") || data.order_id === void 0 && (missing0 = "order_id")) {
        validate71.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "business_id" || key0 === "order_id")) {
            validate71.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.business_id !== void 0) {
            const _errs2 = errors;
            if (typeof data.business_id !== "string") {
              validate71.errors = [{ instancePath: instancePath + "/business_id", schemaPath: "#/properties/business_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.order_id !== void 0) {
              const _errs4 = errors;
              if (typeof data.order_id !== "string") {
                validate71.errors = [{ instancePath: instancePath + "/order_id", schemaPath: "#/properties/order_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
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
      validate71.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate71.errors = vErrors;
  return errors === 0;
}
__name(validate71, "validate71");
var ABCreateStripePaymentIntentResponse = validate72;
function validate72(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
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
        const err0 = { instancePath, schemaPath: "ABCreateStripePaymentIntentResponseSuccess/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" };
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
            const err1 = { instancePath, schemaPath: "ABCreateStripePaymentIntentResponseSuccess/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" };
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
              const err2 = { instancePath: instancePath + "/status", schemaPath: "ABCreateStripePaymentIntentResponseSuccess/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" };
              if (vErrors === null) {
                vErrors = [err2];
              } else {
                vErrors.push(err2);
              }
              errors++;
            }
            if ("SUCCESS" !== data0) {
              const err3 = { instancePath: instancePath + "/status", schemaPath: "ABCreateStripePaymentIntentResponseSuccess/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" };
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
                    const err4 = { instancePath: instancePath + "/result", schemaPath: "ABCreateStripePaymentIntentResponseSuccess/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" };
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
                        const err5 = { instancePath: instancePath + "/result", schemaPath: "ABCreateStripePaymentIntentResponseSuccess/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" };
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
                          const err6 = { instancePath: instancePath + "/result/payment_intent_client_secret", schemaPath: "ABCreateStripePaymentIntentResponseSuccess/properties/result/properties/payment_intent_client_secret/type", keyword: "type", params: { type: "string" }, message: "must be string" };
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
                  const err7 = { instancePath: instancePath + "/result", schemaPath: "ABCreateStripePaymentIntentResponseSuccess/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" };
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
      const err8 = { instancePath, schemaPath: "ABCreateStripePaymentIntentResponseSuccess/type", keyword: "type", params: { type: "object" }, message: "must be object" };
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
    validate72.errors = vErrors;
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
  validate72.errors = vErrors;
  return errors === 0;
}
__name(validate72, "validate72");
var ABCreateStripePaymentIntentResponseSuccess = validate73;
function validate73(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.result === void 0 && (missing0 = "result") || data.status === void 0 && (missing0 = "status")) {
        validate73.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "status" || key0 === "result")) {
            validate73.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.status !== void 0) {
            let data0 = data.status;
            const _errs2 = errors;
            if (typeof data0 !== "string") {
              validate73.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            if ("SUCCESS" !== data0) {
              validate73.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" }];
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
                    validate73.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                    return false;
                  } else {
                    const _errs6 = errors;
                    for (const key1 in data1) {
                      if (!(key1 === "payment_intent_client_secret")) {
                        validate73.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" }];
                        return false;
                        break;
                      }
                    }
                    if (_errs6 === errors) {
                      if (data1.payment_intent_client_secret !== void 0) {
                        if (typeof data1.payment_intent_client_secret !== "string") {
                          validate73.errors = [{ instancePath: instancePath + "/result/payment_intent_client_secret", schemaPath: "#/properties/result/properties/payment_intent_client_secret/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                          return false;
                        }
                      }
                    }
                  }
                } else {
                  validate73.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
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
      validate73.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate73.errors = vErrors;
  return errors === 0;
}
__name(validate73, "validate73");
var ABCreateTableData = validate74;
function validate74(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.business_id === void 0 && (missing0 = "business_id") || data.table_name === void 0 && (missing0 = "table_name")) {
        validate74.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "business_id" || key0 === "table_name")) {
            validate74.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.business_id !== void 0) {
            const _errs2 = errors;
            if (typeof data.business_id !== "string") {
              validate74.errors = [{ instancePath: instancePath + "/business_id", schemaPath: "#/properties/business_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.table_name !== void 0) {
              const _errs4 = errors;
              if (typeof data.table_name !== "string") {
                validate74.errors = [{ instancePath: instancePath + "/table_name", schemaPath: "#/properties/table_name/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
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
      validate74.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate74.errors = vErrors;
  return errors === 0;
}
__name(validate74, "validate74");
var ABCreateTableResponse = validate75;
function validate75(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
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
    validate75.errors = vErrors;
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
  validate75.errors = vErrors;
  return errors === 0;
}
__name(validate75, "validate75");
var ABCreateTableResponseSuccess = validate76;
function validate76(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.result === void 0 && (missing0 = "result") || data.status === void 0 && (missing0 = "status")) {
        validate76.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "status" || key0 === "result")) {
            validate76.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.status !== void 0) {
            let data0 = data.status;
            const _errs2 = errors;
            if (typeof data0 !== "string") {
              validate76.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            if ("SUCCESS" !== data0) {
              validate76.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/const", keyword: "const", params: { allowedValue: "SUCCESS" }, message: "must be equal to constant" }];
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
                    validate76.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                    return false;
                  } else {
                    const _errs6 = errors;
                    for (const key1 in data1) {
                      if (!(key1 === "table_id")) {
                        validate76.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" }];
                        return false;
                        break;
                      }
                    }
                    if (_errs6 === errors) {
                      if (data1.table_id !== void 0) {
                        if (typeof data1.table_id !== "string") {
                          validate76.errors = [{ instancePath: instancePath + "/result/table_id", schemaPath: "#/properties/result/properties/table_id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                          return false;
                        }
                      }
                    }
                  }
                } else {
                  validate76.errors = [{ instancePath: instancePath + "/result", schemaPath: "#/properties/result/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
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
      validate76.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate76.errors = vErrors;
  return errors === 0;
}
__name(validate76, "validate76");
export {
  ABBusinessConfigCountry,
  ABBusinessConfigCurrency,
  ABConfirmDigitalPaymentData,
  ABConfirmDigitalPaymentResponse,
  ABConfirmDigitalPaymentResponseSuccess,
  ABConfirmManualPaymentData,
  ABConfirmManualPaymentResponse,
  ABConfirmManualPaymentResponseSuccess,
  ABCreateCategoryData,
  ABCreateCategoryResponse,
  ABCreateCategoryResponseSuccess,
  ABCreateOrderData,
  ABCreateOrderDataCartLine,
  ABCreateOrderResponse,
  ABCreateOrderResponseSuccess,
  ABCreateProductData,
  ABCreateProductResponse,
  ABCreateProductResponseSuccess,
  ABCreateStripePaymentIntentData,
  ABCreateStripePaymentIntentResponse,
  ABCreateStripePaymentIntentResponseSuccess,
  ABCreateTableData,
  ABCreateTableResponse,
  ABCreateTableResponseSuccess,
  ABEditProductData,
  ABEditProductResponse,
  ABEditProductResponseSuccess,
  ABFulfillOrderData,
  ABFulfillOrderResponse,
  ABFulfillOrderResponseSuccess,
  ABOpeningHours,
  ABPalette,
  ABPaletteOptions,
  ABPaymentType,
  ABProductOption,
  ABProductOptionAbstract,
  ABProductOptionMultipleSelectedValues,
  ABProductOptionMultipleSelection,
  ABProductOptionSelections,
  ABProductOptionSingleSelectedValue,
  ABProductOptionSingleSelection,
  ABProductOptionsPossibleValue,
  ABProductOptionsType,
  ABProductStatus,
  ABReorderCategoryData,
  ABReorderCategoryDataResponse,
  ABReorderCategoryDataResponseSuccess,
  ABResponseError,
  ABResponseStatus,
  ABResponseSuccessAbstract,
  ABSetOrderReadyForDeliveryData,
  ABSetOrderReadyForDeliveryResponse,
  ABSetOrderReadyForDeliveryResponseSuccess,
  ABStartProcessingOrderData,
  ABStartProcessingOrderResponse,
  ABStartProcessingOrderResponseSuccess,
  ABStripeMetadata,
  ABUpdateBusinessConfigData,
  ABUpdateBusinessConfigResponse,
  ABUpdateBusinessConfigResponseSuccess
};
