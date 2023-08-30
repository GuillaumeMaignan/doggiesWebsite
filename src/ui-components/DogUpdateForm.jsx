/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Dog } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function DogUpdateForm(props) {
  const {
    id: idProp,
    dog: dogModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    avatar: "",
    specs: "",
    location: "",
    money: "",
    time: "",
    keyColor: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [avatar, setAvatar] = React.useState(initialValues.avatar);
  const [specs, setSpecs] = React.useState(initialValues.specs);
  const [location, setLocation] = React.useState(initialValues.location);
  const [money, setMoney] = React.useState(initialValues.money);
  const [time, setTime] = React.useState(initialValues.time);
  const [keyColor, setKeyColor] = React.useState(initialValues.keyColor);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = dogRecord
      ? { ...initialValues, ...dogRecord }
      : initialValues;
    setName(cleanValues.name);
    setAvatar(cleanValues.avatar);
    setSpecs(cleanValues.specs);
    setLocation(cleanValues.location);
    setMoney(cleanValues.money);
    setTime(cleanValues.time);
    setKeyColor(cleanValues.keyColor);
    setErrors({});
  };
  const [dogRecord, setDogRecord] = React.useState(dogModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Dog, idProp) : dogModelProp;
      setDogRecord(record);
    };
    queryData();
  }, [idProp, dogModelProp]);
  React.useEffect(resetStateValues, [dogRecord]);
  const validations = {
    name: [{ type: "Required" }],
    avatar: [],
    specs: [],
    location: [],
    money: [],
    time: [],
    keyColor: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          avatar,
          specs,
          location,
          money,
          time,
          keyColor,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            Dog.copyOf(dogRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "DogUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              avatar,
              specs,
              location,
              money,
              time,
              keyColor,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Avatar"
        isRequired={false}
        isReadOnly={false}
        value={avatar}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              avatar: value,
              specs,
              location,
              money,
              time,
              keyColor,
            };
            const result = onChange(modelFields);
            value = result?.avatar ?? value;
          }
          if (errors.avatar?.hasError) {
            runValidationTasks("avatar", value);
          }
          setAvatar(value);
        }}
        onBlur={() => runValidationTasks("avatar", avatar)}
        errorMessage={errors.avatar?.errorMessage}
        hasError={errors.avatar?.hasError}
        {...getOverrideProps(overrides, "avatar")}
      ></TextField>
      <TextField
        label="Specs"
        isRequired={false}
        isReadOnly={false}
        value={specs}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              avatar,
              specs: value,
              location,
              money,
              time,
              keyColor,
            };
            const result = onChange(modelFields);
            value = result?.specs ?? value;
          }
          if (errors.specs?.hasError) {
            runValidationTasks("specs", value);
          }
          setSpecs(value);
        }}
        onBlur={() => runValidationTasks("specs", specs)}
        errorMessage={errors.specs?.errorMessage}
        hasError={errors.specs?.hasError}
        {...getOverrideProps(overrides, "specs")}
      ></TextField>
      <TextField
        label="Location"
        isRequired={false}
        isReadOnly={false}
        value={location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              avatar,
              specs,
              location: value,
              money,
              time,
              keyColor,
            };
            const result = onChange(modelFields);
            value = result?.location ?? value;
          }
          if (errors.location?.hasError) {
            runValidationTasks("location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("location", location)}
        errorMessage={errors.location?.errorMessage}
        hasError={errors.location?.hasError}
        {...getOverrideProps(overrides, "location")}
      ></TextField>
      <TextField
        label="Money"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={money}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              avatar,
              specs,
              location,
              money: value,
              time,
              keyColor,
            };
            const result = onChange(modelFields);
            value = result?.money ?? value;
          }
          if (errors.money?.hasError) {
            runValidationTasks("money", value);
          }
          setMoney(value);
        }}
        onBlur={() => runValidationTasks("money", money)}
        errorMessage={errors.money?.errorMessage}
        hasError={errors.money?.hasError}
        {...getOverrideProps(overrides, "money")}
      ></TextField>
      <TextField
        label="Time"
        isRequired={false}
        isReadOnly={false}
        value={time}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              avatar,
              specs,
              location,
              money,
              time: value,
              keyColor,
            };
            const result = onChange(modelFields);
            value = result?.time ?? value;
          }
          if (errors.time?.hasError) {
            runValidationTasks("time", value);
          }
          setTime(value);
        }}
        onBlur={() => runValidationTasks("time", time)}
        errorMessage={errors.time?.errorMessage}
        hasError={errors.time?.hasError}
        {...getOverrideProps(overrides, "time")}
      ></TextField>
      <TextField
        label="Key color"
        isRequired={false}
        isReadOnly={false}
        value={keyColor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              avatar,
              specs,
              location,
              money,
              time,
              keyColor: value,
            };
            const result = onChange(modelFields);
            value = result?.keyColor ?? value;
          }
          if (errors.keyColor?.hasError) {
            runValidationTasks("keyColor", value);
          }
          setKeyColor(value);
        }}
        onBlur={() => runValidationTasks("keyColor", keyColor)}
        errorMessage={errors.keyColor?.errorMessage}
        hasError={errors.keyColor?.hasError}
        {...getOverrideProps(overrides, "keyColor")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || dogModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || dogModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
