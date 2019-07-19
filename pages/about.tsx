import * as React from 'react';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  useField,
} from 'formik';

interface MyFormValues {
    firstName1: string,
    firstName2: string,
    firstName3: string,
    firstName4: string,
    firstName5: string,
    firstName6: string,
    firstName7: string,
    firstName8: string,
    firstName9: string,
    firstName10: string,
    firstName11: string,
    firstName12: string,
    firstName13: string,
    firstName14: string,
    firstName15: string,
    firstName16: string,
    firstName17: string,
    firstName18: string,
    firstName19: string,
    firstName20: string,
    firstName21: string,
    firstName22: string,
    firstName23: string,
    firstName24: string,
    firstName25: string,
    firstName26: string,
    firstName27: string,
    firstName28: string,
    firstName29: string,
    firstName30: string,
}

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props.name);
  
  return (
    <div>
      <label>
        {label}
        <input {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default () => {
  return (
    <div>
      <h1>My Example</h1>
      <Formik
        initialValues={{ 
            firstName1: "1",
            firstName2: "2",
            firstName3: "3",
            firstName4: "4",
            firstName5: "5",
            firstName6: "6",
            firstName7: "7",
            firstName8: "8",
            firstName9: "9",
            firstName10: "10",
            firstName11: "11",
            firstName12: "12",
            firstName13: "13",
            firstName14: "14",
            firstName15: "15",
            firstName16: "16",
            firstName17: "17",
            firstName18: "18",
            firstName19: "19",
            firstName20: "20",
            firstName21: "21",
            firstName22: "22",
            firstName23: "23",
            firstName24: "24",
            firstName25: "25",
            firstName26: "26",
            firstName27: "27",
            firstName28: "28",
            firstName29: "29",
            firstName30: "30",
         }}
        onSubmit={(
          values: MyFormValues,
          actions: FormikHelpers<MyFormValues>
        ) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
        validateOnChange={false}
        validate={(values) => {
            return {
                firstName3: !values.firstName3 ? 'Opa' : null
            }
        }}
        render={(formikBag: FormikProps<MyFormValues>) => (
          <Form>
            <TextField label="Nome" name="firstName1" />
            <TextField label="Nome" name="firstName2" />
            <TextField label="Nome" name="firstName3" />
            <TextField label="Nome" name="firstName4" />
            <TextField label="Nome" name="firstName5" />
            <TextField label="Nome" name="firstName6" />
            <TextField label="Nome" name="firstName7" />
            <TextField label="Nome" name="firstName8" />
            <TextField label="Nome" name="firstName9" />
            <TextField label="Nome" name="firstName10" />
            <TextField label="Nome" name="firstName11" />
            <TextField label="Nome" name="firstName12" />
            <TextField label="Nome" name="firstName13" />
            <TextField label="Nome" name="firstName14" />
            <TextField label="Nome" name="firstName15" />
            <TextField label="Nome" name="firstName16" />
            <TextField label="Nome" name="firstName17" />
            <TextField label="Nome" name="firstName18" />
            <TextField label="Nome" name="firstName19" />
            <TextField label="Nome" name="firstName20" />
            <TextField label="Nome" name="firstName21" />
            <TextField label="Nome" name="firstName22" />
            <TextField label="Nome" name="firstName23" />
            <TextField label="Nome" name="firstName24" />
            <TextField label="Nome" name="firstName25" />
            <TextField label="Nome" name="firstName26" />
            <TextField label="Nome" name="firstName27" />
            <TextField label="Nome" name="firstName28" />
            <TextField label="Nome" name="firstName29" />
            <TextField label="Nome" name="firstName30" />
          </Form>
        )}
      />
    </div>
  );
};